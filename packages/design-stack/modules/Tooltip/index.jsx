import React, { useId, useRef } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import PropTypes from "prop-types";

import { useFloatingPlacement } from "../../hooks/useFloatingPlacement";

import {
  TP_CONTENT_CLASSES,
  TP_PLACEMENT_ALIGN,
  TP_PLACEMENT_SIDE,
  TP_SIZE,
  TP_STICKY_OPTIONS,
  TP_THEME_CLASSES,
  TP_TOOLTIP_THEME,
} from "./constants/tooltip";
import { ThemeContextData } from "./context";
import { mergeRefs } from "./utils";

/**
 * Checks if the tooltip content is valid for rendering
 * @param {React.ReactNode} content - The content to validate
 * @returns {boolean} - Whether the content is valid
 */
export const hasValidTooltipContent = content => {
  // Helper function to check string content
  const hasNonEmptyStringContent = str =>
    typeof str === "string" && str.trim() !== "";

  return React.Children.toArray(content).some(child => {
    // String content check
    if (typeof child === "string") {
      return child.trim() !== "";
    }

    // Not a valid React element
    if (!React.isValidElement(child)) {
      return child != null;
    }

    // Custom component check (like GenericTooltipContent)
    if (typeof child.type === "function") {
      return true;
    }

    // Fragment check
    if (child.type === React.Fragment) {
      const fragmentChildren = React.Children.toArray(child.props.children);
      return fragmentChildren.some(
        fragChild => hasNonEmptyStringContent(fragChild) || fragChild != null
      );
    }

    // Tooltip components check
    if (
      child.type?.displayName === "TooltipHeader" ||
      child.type?.displayName === "TooltipBody"
    ) {
      const childContent = child.props.children;
      if (hasNonEmptyStringContent(childContent)) {
        return true;
      }
      return React.Children.count(childContent) > 0;
    }

    // Default element check
    return React.Children.count(child.props.children) > 0;
  });
};

/**
 * `TooltipContainer` is a foundational component for creating tooltips.
 * It leverages Radix UI's Tooltip primitive for accessibility and functionality.
 * This component wraps a trigger element and displays content in a floating popover
 * when the trigger is interacted with (hover, focus, or touch based on props).
 *
 * @component
 * @example
 * ```jsx
 * <TooltipContainer content="This is the tooltip text">
 *   <Button>Hover me</Button>
 * </TooltipContainer>
 *
 * <TooltipContainer
 *   content={
 *     <>
 *       <TooltipHeader>Title</TooltipHeader>
 *       <TooltipBody>Detailed description.</TooltipBody>
 *     </>
 *   }
 *   placementSide="right"
 *   theme="dark"
 * >
 *   <Icon name="info" />
 * </TooltipContainer>
 * ```
 * @param {object} props - The component props.
 * @param {number} [props.alignOffset=-12] - An offset in pixels from the "start" or "end" alignment options for the content wrapper.
 * @param {string} [props.arrowClassName] - Custom CSS class name to style the arrow element.
 * @param {number} [props.arrowHeight=10] - The height of the arrow in pixels.
 * @param {number} [props.arrowPadding=6] - Padding between the arrow and content edges. Prevents content overflow with border-radius.
 * @param {number} [props.arrowWidth=20] - The width of the arrow in pixels.
 * @param {boolean} [props.avoidCollisions=true] - If true, overrides `placementSide` and `placementAlign` to prevent collisions with boundary edges.
 * @param {React.ReactNode} props.children - The trigger element(s) for the tooltip.
 * @param {Element | null} [props.container=null] - The DOM element to portal the tooltip content into. Defaults to `document.body`.
 * @param {React.ReactNode} props.content - The content to display within the tooltip popover. Can be a string or React nodes (e.g., `TooltipHeader`, `TooltipBody`).
 * @param {boolean} [props.defaultOpen] - If true, the tooltip is open initially (uncontrolled).
 * @param {number} [props.delay=200] - Duration in milliseconds from trigger interaction (e.g., mouse enter) until the tooltip opens.
 * @param {boolean} [props.disableContentReader=false] - If true, sets `aria-hidden="true"` on the tooltip content, hiding it from screen readers. Use with caution.
 * @param {string} [props.id] - Custom ID for the tooltip root element. Auto-generated if not provided.
 * @param {function(Event): void} [props.onEscapeKeyDown] - Callback when the Escape key is pressed while the tooltip is open. Call `event.preventDefault()` to prevent closing.
 * @param {function(MouseEvent): void} [props.onMouseLeave] - Callback when the mouse leaves the trigger element.
 * @param {function(boolean): void} [props.onOpenChange] - Callback when the tooltip's open state changes (controlled).
 * @param {function(Event): void} [props.onPointerDownOutside] - Callback when a pointer interaction occurs outside the tooltip content. Call `event.preventDefault()` to prevent closing.
 * @param {TP_PLACEMENT_ALIGN} [props.placementAlign='center'] - The preferred alignment of the tooltip content relative to the trigger.
 * @param {TP_PLACEMENT_SIDE} [props.placementSide='left'] - The preferred side of the trigger where the tooltip content should appear.
 * @param {boolean} [props.show] - Controls the open state of the tooltip (controlled). Use with `onOpenChange`.
 * @param {boolean} [props.shouldRenderChildInDiv=true] - If true, wraps the `children` (trigger) in a `div` element. Set to `false` if the child accepts refs and forwards props correctly or if `triggerAsChild` is `false`.
 * @param {number} [props.sideOffset=5] - The distance in pixels between the trigger and the tooltip content.
 * @param {TP_SIZE} [props.size='xs'] - Defines the padding and max-width of the tooltip content container.
 * @param {TP_STICKY_OPTIONS} [props.sticky='partial'] - Controls how the tooltip behaves when scrolling, keeping it attached to the trigger.
 * @param {TP_TOOLTIP_THEME} [props.theme='light'] - The visual theme (color scheme) of the tooltip content and arrow.
 * @param {string} [props.triggerAriaLabel='tooltip trigger'] - `aria-label` for the trigger element, providing an accessible name. Important if the trigger is an icon button or similar.
 * @param {boolean} [props.triggerAsChild=true] - If true, merges the trigger props onto the `children` element. If `false`, `children` are rendered inside the trigger button. Ensure `children` can accept a `ref`.
 * @param {boolean} [props.triggerOnTouch=false] - If true, prevents the default behavior on touch events on the trigger, allowing the tooltip to function on touch devices without immediate navigation or action.
 * @param {string} [props.triggerWrapperClassName] - Custom CSS class name for the wrapper `div` when `shouldRenderChildInDiv` is true.
 * @param {string} [props.wrapperClassName] - Custom CSS class name for the tooltip content wrapper element.
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tooltip--primary Storybook}
 * @see {@link https://zeroheight.com/023d5159d/p/767c4c-tooltip/b/4635b4 Zeroheight}
 * @accessibility
 * - Provides `aria-label` for the trigger via `triggerAriaLabel`.
 * - Manages focus appropriately based on Radix UI primitives.
 * - Uses `aria-describedby` to link the trigger and content (handled internally by Radix UI, linked via header/description IDs).
 * - `disableContentReader` prop allows hiding content from assistive technologies if needed, but should generally be avoided.
 */
const TooltipContainer = ({
  alignOffset = -12,
  arrowClassName = "",
  arrowHeight = 10,
  arrowPadding = 6,
  arrowWidth = 20,
  avoidCollisions = true,
  children = null,
  container = null,
  content = null,
  defaultOpen = undefined,
  delay = 200,
  disableContentReader = false,
  id = null,
  onEscapeKeyDown = null,
  onMouseLeave = null,
  onOpenChange = null,
  onPointerDownOutside = null,
  placementAlign = TP_PLACEMENT_ALIGN.CENTER,
  placementSide = TP_PLACEMENT_SIDE.LEFT,
  show = undefined,
  shouldRenderChildInDiv = true,
  sideOffset = 5,
  size = TP_SIZE.XS,
  sticky = TP_STICKY_OPTIONS.PARTIAL,
  theme = TP_TOOLTIP_THEME.LIGHT,
  triggerAriaLabel = "tooltip trigger",
  triggerAsChild = true,
  triggerOnTouch = false,
  triggerWrapperClassName = "",
  wrapperClassName = "",
}) => {
  const triggerRef = useRef(null);
  const handlePointerDownOutside = event => {
    if (triggerRef?.current?.contains(event.target) && triggerOnTouch) {
      event.preventDefault();
    }
    onPointerDownOutside?.();
  };

  const uniqueId = useId();

  // Generate unique IDs
  const tooltipId = id || `tooltip-${uniqueId}`;
  const headerId = `${tooltipId}-header`;
  const descriptionId = `${tooltipId}-description`;

  const { refs, placement } = useFloatingPlacement(placementSide);

  // Pre-process content to ensure IDs are present
  const processedContent = React.Children.map(content, child => {
    if (!React.isValidElement(child)) return child;

    // Assign IDs based on component type
    if (child.type?.displayName === "TooltipHeader") {
      return React.cloneElement(child, { id: headerId });
    }
    if (child.type?.displayName === "TooltipBody") {
      return React.cloneElement(child, { id: descriptionId });
    }
    return child;
  });

  const validContent = React.Children.toArray(content).filter(child =>
    hasValidTooltipContent([child])
  );

  return (
    <ThemeContextData.Provider
      value={{
        theme,
        isCompactVariant: true,
      }}
    >
      <TooltipPrimitive.Provider delayDuration={delay} skipDelayDuration={500}>
        <TooltipPrimitive.Root
          open={show}
          defaultOpen={defaultOpen}
          onOpenChange={onOpenChange}
        >
          <TooltipPrimitive.Trigger
            role="tooltip"
            ref={mergeRefs(triggerRef, refs.setReference)}
            onClick={event => {
              if (triggerOnTouch) event.preventDefault();
            }}
            aria-label={triggerAriaLabel}
            onMouseLeave={onMouseLeave}
            asChild={triggerAsChild}
          >
            {shouldRenderChildInDiv ? (
              <span
                className={twClassNames(
                  "inline-block",
                  triggerWrapperClassName
                )}
              >
                {children}
              </span>
            ) : (
              children
            )}
          </TooltipPrimitive.Trigger>
          {validContent?.length > 0 && (
            <TooltipPrimitive.Portal {...(container !== null && { container })}>
              <TooltipPrimitive.Content
                id={descriptionId}
                role="tooltip"
                alignOffset={alignOffset}
                avoidCollisions={avoidCollisions}
                arrowPadding={arrowPadding}
                side={placement}
                align={placementAlign}
                onEscapeKeyDown={onEscapeKeyDown}
                onPointerDownOutside={handlePointerDownOutside}
                sideOffset={sideOffset}
                sticky={sticky}
                className={twClassNames(
                  "z-500 space-y-1.5 rounded-md bg-neutral-default px-3 py-2 shadow-lg",
                  {
                    "border border-neutral-default":
                      theme === TP_TOOLTIP_THEME.LIGHT,
                  },
                  TP_THEME_CLASSES[theme],
                  TP_CONTENT_CLASSES[size],
                  wrapperClassName
                )}
                aria-hidden={disableContentReader ? "true" : "false"}
                ref={refs.setFloating}
              >
                {processedContent}
                <div className="!m-0">
                  <TooltipPrimitive.Arrow
                    height={arrowHeight}
                    width={arrowWidth}
                    asChild={theme === TP_TOOLTIP_THEME.LIGHT}
                    className={twClassNames(
                      {
                        "drop-shadow-sm translate-y-[-1px] fill-raised-default":
                          theme === TP_TOOLTIP_THEME.LIGHT,
                        "drop-shadow-sm fill-neutral-inverse-weak":
                          theme === TP_TOOLTIP_THEME.DARK,
                      },
                      arrowClassName
                    )}
                  >
                    <svg
                      width={arrowWidth}
                      height={arrowHeight}
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_41585_57611)">
                        <path
                          d="M7.1 8.3L7.5 8.83333L7.9 8.3L13.9 0.3L14.5 -0.5L13.5 -0.5L1.5 -0.5L0.5 -0.5L1.1 0.3L7.1 8.3Z"
                          stroke="var(--border-neutral-default)"
                        />
                      </g>
                    </svg>
                  </TooltipPrimitive.Arrow>
                </div>
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Portal>
          )}
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    </ThemeContextData.Provider>
  );
};

/**
 * PropTypes definition for the TooltipContainer component.
 * @type {object}
 */
export const TooltipPropTypes = {
  /**
   * An offset in pixels from the "start" or "end" alignment options.
   * Affects the positioning of the tooltip content relative to the trigger along the alignment axis.
   * @type {number}
   */
  alignOffset: PropTypes.number,
  /**
   * A custom CSS class name to apply additional styles to the tooltip's arrow element.
   * @type {string}
   */
  arrowClassName: PropTypes.string,
  /**
   * The height of the tooltip's arrow element in pixels.
   * @type {number}
   */
  arrowHeight: PropTypes.number,
  /**
   * The padding between the arrow and the edges of the tooltip content.
   * Useful if the content has `border-radius` to prevent the arrow from overlapping corners.
   * @type {number}
   */
  arrowPadding: PropTypes.number,
  /**
   * The width of the tooltip's arrow element in pixels.
   * @type {number}
   */
  arrowWidth: PropTypes.number,
  /**
   * When true, the tooltip will attempt to adjust its `placementSide` and `placementAlign`
   * to avoid collisions with the edges of the viewport or scroll parent.
   * @type {boolean}
   */
  avoidCollisions: PropTypes.bool,
  /**
   * The element(s) that will trigger the tooltip upon interaction (e.g., hover, focus).
   * Must be a single React element or a fragment containing one.
   * @type {React.ReactNode}
   */
  children: PropTypes.node,
  /**
   * Specifies a DOM node into which the tooltip content (Portal) should be rendered.
   * Defaults to `document.body`.
   * @type {Element | null}
   */
  container: PropTypes.node,
  /**
   * The content to be displayed inside the tooltip popover.
   * Can be simple text, or structured content using `TooltipHeader` and `TooltipBody`.
   * @type {React.ReactNode}
   */
  content: PropTypes.node,
  /**
   * Determines if the tooltip should be open when initially rendered.
   * Use this for uncontrolled behavior (the component manages its own state).
   * @type {boolean}
   */
  defaultOpen: PropTypes.bool,
  /**
   * The delay in milliseconds before the tooltip appears after the trigger interaction starts.
   * @type {number}
   */
  delay: PropTypes.number,
  /**
   * If set to true, adds `aria-hidden="true"` to the tooltip content,
   * making it inaccessible to screen readers. Use cautiously.
   * @type {boolean}
   */
  disableContentReader: PropTypes.bool,
  /**
   * A custom HTML `id` attribute for the tooltip root element.
   * If not provided, a unique ID will be generated automatically.
   * @type {string}
   */
  id: PropTypes.string,
  /**
   * Callback function invoked when the Escape key is pressed while the tooltip is open.
   * The event object is passed as an argument. Call `event.preventDefault()` to prevent the tooltip from closing.
   * @type {function(Event): void}
   */
  onEscapeKeyDown: PropTypes.func,
  /**
   * Callback function invoked when the mouse pointer leaves the trigger element.
   * @type {function(MouseEvent): void}
   */
  onMouseLeave: PropTypes.func,
  /**
   * Callback function invoked when the tooltip's open state changes.
   * Required for controlled mode (when using the `show` prop). Receives the new open state (boolean) as an argument.
   * @type {function(boolean): void}
   */
  onOpenChange: PropTypes.func,
  /**
   * Callback function invoked when a pointer event (mousedown/touchstart) occurs outside the bounds of the tooltip content.
   * The event object is passed as an argument. Call `event.preventDefault()` to prevent the tooltip from closing.
   * @type {function(Event): void}
   */
  onPointerDownOutside: PropTypes.func,
  /**
   * The preferred alignment of the tooltip content relative to the trigger element along the cross-axis.
   * @type {'start' | 'center' | 'end'}
   * @see TP_PLACEMENT_ALIGN
   */
  placementAlign: PropTypes.oneOf(Object.values(TP_PLACEMENT_ALIGN)),
  /**
   * The preferred side of the trigger element where the tooltip content should appear.
   * Will be adjusted by `avoidCollisions` if necessary.
   * @type {'top' | 'right' | 'bottom' | 'left'}
   * @see TP_PLACEMENT_SIDE
   */
  placementSide: PropTypes.oneOf(Object.values(TP_PLACEMENT_SIDE)),
  /**
   * If true, the `children` trigger element will be wrapped in an inline `div` element.
   * Set to `false` only if `children` is a single component that correctly forwards refs and props,
   * or if `triggerAsChild` is set to `false`.
   * @type {boolean}
   */
  shouldRenderChildInDiv: PropTypes.bool,
  /**
   * Controls the open state of the tooltip. Use in conjunction with `onOpenChange` for controlled behavior.
   * @type {boolean}
   */
  show: PropTypes.bool,
  /**
   * The distance in pixels between the edge of the trigger element and the tooltip content.
   * @type {number}
   */
  sideOffset: PropTypes.number,
  /**
   * Determines the size (padding, max-width) of the tooltip content container.
   * @type {'xs' | 'sm' | 'md' | 'lg'}
   * @see TP_SIZE
   */
  size: PropTypes.oneOf(Object.values(TP_SIZE)),
  /**
   * Controls the sticky behavior of the tooltip when the user scrolls.
   * - `partial`: The tooltip tries to stay in view as much as possible.
   * - `always`: The tooltip remains attached to the trigger, even if it means going off-screen.
   * @type {'partial' | 'always'}
   * @see TP_STICKY_OPTIONS
   */
  sticky: PropTypes.oneOf(Object.values(TP_STICKY_OPTIONS)),
  /**
   * Sets the visual theme (color scheme) for the tooltip content and arrow.
   * @type {'light' | 'dark'}
   * @see TP_TOOLTIP_THEME
   */
  theme: PropTypes.oneOf(Object.values(TP_TOOLTIP_THEME)),
  /**
   * Provides an accessible name for the trigger element, especially important for icon buttons or non-descriptive triggers.
   * Read by screen readers.
   * @type {string}
   */
  triggerAriaLabel: PropTypes.string,
  /**
   * If true, Radix UI's `Tooltip.Trigger` component will merge its props and behavior onto the `children` element.
   * This requires `children` to be a single React element capable of accepting a `ref` and spreading props.
   * If false, `children` are rendered *inside* the default `button` trigger.
   * @type {boolean}
   */
  triggerAsChild: PropTypes.bool,
  /**
   * If true, helps manage tooltip interactions on touch devices by preventing default actions (like navigation)
   * on pointer down events on the trigger, allowing the tooltip to open/close correctly on tap.
   * @type {boolean}
   */
  triggerOnTouch: PropTypes.bool,
  /**
   * A custom CSS class name to apply to the trigger's wrapper `div` element
   * (only applies when `shouldRenderChildInDiv` is true).
   * @type {string}
   */
  triggerWrapperClassName: PropTypes.string,
  /**
   * A custom CSS class name to apply to the main tooltip content container element
   * (`TooltipPrimitive.Content`).
   * @type {string}
   */
  wrapperClassName: PropTypes.string,
};

TooltipContainer.propTypes = TooltipPropTypes;
TooltipContainer.displayName = "Tooltip";

export default TooltipContainer;
