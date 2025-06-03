/**
 * @typedef {import('../Tooltip/constants/tooltip').TP_PLACEMENT_ALIGN} TP_PLACEMENT_ALIGN
 * @typedef {import('../Tooltip/constants/tooltip').TP_PLACEMENT_SIDE} TP_PLACEMENT_SIDE
 * @typedef {import('../Tooltip/constants/tooltip').TP_SIZE} TP_SIZE
 * @typedef {import('../Tooltip/constants/tooltip').TP_STICKY_OPTIONS} TP_STICKY_OPTIONS
 * @typedef {import('../Tooltip/constants/tooltip').TP_TOOLTIP_THEME} TP_TOOLTIP_THEME
 */

/**
 * @typedef {Object} PopoverContainerProps
 * @property {number} [alignOffset=0] - An offset in pixels from the "start" or "end" alignment options for the popover content. Useful for fine-tuning the position along the alignment axis.
 * @property {string} [arrowClassName=''] - Custom CSS class name(s) to apply additional styles to the arrow element.
 * @property {number} [arrowHeight=10] - The height of the arrow element in pixels.
 * @property {number} [arrowPadding=0] - The padding between the arrow and the edges of the content. If your content has border-radius, this prevents it from overflowing the corners.
 * @property {number} [arrowWidth=20] - The width of the arrow element in pixels.
 * @property {boolean} [avoidCollisions=true] - When `true`, the popover will automatically adjust its `placementSide` and `placementAlign` to prevent collisions with the boundary edges (typically the viewport).
 * @property {React.ReactNode} [children=null] - The trigger element(s) for the popover. This should be a single React element or node that users interact with to open the popover.
 * @property {number} [collisionPadding=0] - Defines the distance in pixels from the boundary edges (e.g., viewport) when detecting collisions. Accepts a single number for all sides.
 * @property {React.ReactNode} [content=null] - The content to be displayed inside the popover when it is open.
 * @property {boolean} [defaultOpen] - If `true`, the popover will be open initially upon rendering. Use this for uncontrolled popovers.
 * @property {boolean} [forceMount] - When `true`, the popover content will always be mounted in the DOM, even when closed. Useful for components that need to maintain state or for SEO purposes. Defaults to `undefined`.
 * @property {boolean} [hideWhenDetached=false] - If `true`, the popover content will be hidden when the trigger element is fully scrolled out of view (occluded).
 * @property {string} [id=null] - A custom HTML `id` attribute to apply to the popover content element. If `null`, no `id` is added.
 * @property {(event: Event) => void} [onCloseAutoFocus] - Event handler called when focus moves back to the trigger element after the popover closes. Can be prevented by calling `event.preventDefault()`.
 * @property {(event: KeyboardEvent) => void} [onEscapeKeyDown] - Event handler called when the Escape key is pressed while the popover is open. Can be prevented by calling `event.preventDefault()`. Default behavior is to close the popover.
 * @property {(event: FocusEvent) => void} [onFocusOutside] - Event handler called when focus moves outside the bounds of the popover content. Can be prevented by calling `event.preventDefault()`.
 * @property {(event: PointerEvent | FocusEvent) => void} [onInteractOutside] - Event handler called when an interaction (pointer down or focus) occurs outside the bounds of the popover content. Can be prevented by calling `event.preventDefault()`. Default behavior is to close the popover.
 * @property {(event: Event) => void} [onOpenAutoFocus] - Event handler called when focus moves into the popover content after it opens. Can be prevented by calling `event.preventDefault()`. Default behavior focuses the first focusable element within the content.
 * @property {(open: boolean) => void} [onOpenChange] - Callback function invoked when the open state of the popover changes. Required for controlled popovers (when using the `show` prop). Receives the new open state (`true` or `false`) as an argument.
 * @property {(event: PointerEvent) => void} [onPointerDownOutside] - Event handler called specifically when a pointer down event occurs outside the bounds of the popover content. Can be prevented by calling `event.preventDefault()`.
 * @property {TP_PLACEMENT_ALIGN} [placementAlign='center'] - The preferred alignment of the popover content relative to the trigger element ('start', 'center', 'end'). This may be adjusted automatically if `avoidCollisions` is `true`.
 * @property {TP_PLACEMENT_SIDE} [placementSide='left'] - The preferred side of the trigger element where the popover content should appear ('top', 'right', 'bottom', 'left'). This may be reversed automatically if `avoidCollisions` is `true`.
 * @property {boolean} [show] - Controls the open state of the popover. Use this for controlled popovers, in conjunction with `onOpenChange`. `true` opens the popover, `false` closes it. Defaults to `undefined`.
 * @property {number} [sideOffset=5] - The distance in pixels between the trigger element and the popover content along the side axis.
 * @property {TP_SIZE} [size='xs'] - Defines the size preset for the popover content, affecting padding and potentially width/max-width ('xs', 'sm', 'md', 'lg', 'xl').
 * @property {TP_STICKY_OPTIONS} [sticky='partial'] - Controls how the popover content sticks to the trigger when scrolling. 'partial': stays visible as long as the trigger is partially visible. 'always': stays visible even if the trigger scrolls out of view.
 * @property {TP_TOOLTIP_THEME} [theme='light'] - Sets the visual theme for the popover content ('light' or 'dark').
 * @property {string} [triggerWrapperClassName=''] - Custom CSS class name(s) to apply to the wrapper element around the `children` (trigger).
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to apply to the main popover content wrapper element.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import { useFloatingPlacement } from "../../hooks/useFloatingPlacement";
import {
  TP_PLACEMENT_ALIGN,
  TP_PLACEMENT_SIDE,
  TP_SIZE,
  TP_STICKY_OPTIONS,
  TP_THEME_CLASSES,
  TP_TOOLTIP_THEME,
} from "../Tooltip/constants/tooltip";
import { ThemeContextData } from "../Tooltip/context";

import { POPOVER_CONTENT_CLASSNAME } from "./constants/popover";

/**
 * PopoverContainer provides a flexible foundation for building popovers, dropdowns, and tooltips.
 * It leverages Radix UI's Popover primitive for robust positioning, accessibility, and interaction handling.
 *
 * @component
 * @type {React.FC<PopoverContainerProps>}
 *
 * @example
 * ```jsx
 * <PopoverContainer
 *   content={<div>Popover Content Here</div>}
 *   placementSide="bottom"
 *   placementAlign="start"
 *   theme="dark"
 * >
 *   <Button>Open Popover</Button>
 * </PopoverContainer>
 * ```
 *
 * @see https://www.radix-ui.com/primitives/docs/components/popover For underlying primitive documentation.
 *
 * @accessibility
 * Handles ARIA attributes (`aria-haspopup`, `aria-controls`, `aria-expanded`) automatically.
 * Manages focus trapping and restoration.
 * Supports keyboard navigation (Escape key to close).
 */
const PopoverContainer = props => {
  const {
    arrowClassName = "",
    arrowHeight = 10,
    arrowWidth = 20,
    arrowPadding = 0,
    alignOffset = 0,
    avoidCollisions = true,
    children = null,
    content = null,
    collisionPadding = 0,
    defaultOpen = undefined,
    hideWhenDetached = false,
    id = null,
    isCompactPopover = false,
    forceMount = undefined,
    onOpenChange = null,
    onOpenAutoFocus = null,
    onCloseAutoFocus = null,
    onEscapeKeyDown = null,
    onPointerDownOutside = null,
    onFocusOutside = null,
    onInteractOutside = null,
    placementAlign = TP_PLACEMENT_ALIGN.CENTER,
    placementSide = TP_PLACEMENT_SIDE.LEFT,
    show = undefined,
    size = TP_SIZE.XS,
    sideOffset = 5,
    sticky = TP_STICKY_OPTIONS.PARTIAL,
    theme = TP_TOOLTIP_THEME.LIGHT,
    triggerWrapperClassName = "",
    wrapperClassName = "",
  } = props;

  const { refs, placement } = useFloatingPlacement(placementSide);

  return (
    <ThemeContextData.Provider
      value={{
        theme,
        isCompactVariant: isCompactPopover,
      }}
    >
      <PopoverPrimitive.Root
        open={show}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <PopoverPrimitive.Trigger
          className={triggerWrapperClassName}
          asChild
          ref={refs.setReference}
        >
          {children}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align={placementAlign}
            alignOffset={alignOffset}
            arrowPadding={arrowPadding}
            avoidCollisions={avoidCollisions}
            forceMount={forceMount}
            hideWhenDetached={hideWhenDetached}
            onOpenAutoFocus={onOpenAutoFocus}
            onCloseAutoFocus={onCloseAutoFocus}
            onEscapeKeyDown={onEscapeKeyDown}
            onPointerDownOutside={onPointerDownOutside}
            onFocusOutside={onFocusOutside}
            onInteractOutside={onInteractOutside}
            sideOffset={sideOffset}
            side={placement}
            collisionPadding={collisionPadding}
            sticky={sticky}
            className={twClassNames(
              "z-500 rounded-md bg-neutral-default shadow-lg",
              {
                "border border-neutral-default":
                  theme === TP_TOOLTIP_THEME.LIGHT,
              },
              isCompactPopover ? "space-y-1.5 px-3 py-2" : "space-y-2 py-4",
              TP_THEME_CLASSES[theme],
              POPOVER_CONTENT_CLASSNAME[size],
              wrapperClassName
            )}
            ref={refs.setFloating}
            {...(id !== null && { id })}
          >
            {content}
            <div className="!m-0">
              <PopoverPrimitive.Arrow
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
              </PopoverPrimitive.Arrow>
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </ThemeContextData.Provider>
  );
};

PopoverContainer.propTypes = {
  /** An offset in pixels from the "start" or "end" alignment options. For the content wrapper. */
  alignOffset: PropTypes.number,
  /** A custom CSS class name to style the arrow element within the popover component. */
  arrowClassName: PropTypes.string,
  /** The height of the arrow in pixels. */
  arrowHeight: PropTypes.number,
  /** The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners. */
  arrowPadding: PropTypes.number,
  /** The width of the arrow in pixels. */
  arrowWidth: PropTypes.number,
  /** When true, overrides the side and align preferences to prevent collisions with boundary edges */
  avoidCollisions: PropTypes.bool,
  /** Node containing the content that will be displayed within the children section of the popover component. */
  children: PropTypes.node,
  /** Defines the distance in pixels from the boundary edges for collision detection, accepting a single number */
  collisionPadding: PropTypes.number,
  /** Node containing the content that will be displayed within the content section of the popover component. */
  content: PropTypes.node,
  /** The open state of the popover when it is initially rendered. */
  defaultOpen: PropTypes.bool,
  /** Used to force mounting when more control is needed. */
  forceMount: PropTypes.bool,
  /** Whether to hide the content when the trigger becomes fully occluded. */
  hideWhenDetached: PropTypes.bool,
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /** Whether the popover is compact. */
  isCompactPopover: PropTypes.bool,
  /** Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault. */
  onCloseAutoFocus: PropTypes.func,
  /** Event handler called when the escape key is down. It can be prevented by calling event.preventDefault. */
  onEscapeKeyDown: PropTypes.func,
  /** Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault. */
  onFocusOutside: PropTypes.func,
  /** Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault */
  onInteractOutside: PropTypes.func,
  /** Event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault. */
  onOpenAutoFocus: PropTypes.func,
  /** Callback fired when the open state of the popover changes */
  onOpenChange: PropTypes.func,
  /** When a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault */
  onPointerDownOutside: PropTypes.func,
  /** The preferred alignment against the anchor. May change when collisions occur */
  placementAlign: PropTypes.oneOf(Object.values(TP_PLACEMENT_ALIGN)),
  /** The preferred side of the anchor to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled */
  placementSide: PropTypes.oneOf(Object.values(TP_PLACEMENT_SIDE)),
  /** Show/hide the popover. Must be used in conjunction with onOpenChange. */
  show: PropTypes.bool,
  /** The distance in pixels from the anchor. */
  sideOffset: PropTypes.number,
  /** The size of content wrapper */
  size: PropTypes.oneOf(Object.values(TP_SIZE)),
  /** The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless. */
  sticky: PropTypes.oneOf(Object.values(TP_STICKY_OPTIONS)),
  /** Change content theme. */
  theme: PropTypes.oneOf(Object.values(TP_TOOLTIP_THEME)),
  /** A custom CSS class name to style the wrapper element of the trigger section within the popover component */
  triggerWrapperClassName: PropTypes.string,
  /** A custom CSS class name to style the wrapper element of the content section within the popover component. */
  wrapperClassName: PropTypes.string,
};

PopoverContainer.displayName = "Popover";

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-popover--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/07c03d-popover/b/4635b4
 * @end
 */

export default PopoverContainer;
