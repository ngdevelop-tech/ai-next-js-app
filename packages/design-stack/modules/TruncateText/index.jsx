/**
 * TruncateText component displays text and truncates it with an ellipsis (...) if it exceeds the container width.
 * It optionally provides a tooltip on hover or focus to show the full text.
 *
 * @typedef {Object} TruncateTextProps
 * @property {React.ReactNode} [children] - The content to be displayed and potentially truncated.
 * @property {string} [containerClassName] - Custom CSS class name(s) to apply to the main container `div` element.
 * @property {import('../Tooltip').TooltipProps} [headerTooltipProps] - Additional props to pass directly to the underlying `Tooltip` component. See `Tooltip` component for available props.
 * @property {boolean} [hidetooltipTriggerIcon=false] - If `true`, hides the default tooltip trigger icon (usually shown when text is truncated and `isFullWidthTooltip` is `false`).
 * @property {string} [id] - A unique identifier for the root element. Also used for associating the tooltip trigger with its description via `aria-describedby`.
 * @property {boolean} [isFullWidthTooltip=false] - If `true`, the tooltip will be triggered by hovering/focusing the entire text container. If `false`, a separate trigger icon is shown when text is truncated.
 * @property {boolean} [isTooltip=true] - If `true`, enables the tooltip functionality when the text is truncated.
 * @property {boolean} [passTruncatedState=true] - If `true` and `children` is a single React element, passes a `truncated` prop (boolean) to the child element indicating if the text is currently truncated.
 * @property {string} [tooltipAriaLabel] - Provides an accessible label for the tooltip trigger element. Recommended when `isFullWidthTooltip` is `false`.
 * @property {React.ReactNode} [tooltipContent] - Custom content to display inside the tooltip. If not provided, the `children` prop content will be used.
 * @property {React.ReactNode} [tooltipTriggerIcon=<MdErrorOutline />] - Custom icon element to use as the tooltip trigger when `isFullWidthTooltip` is `false` and the text is truncated.
 * @property {boolean} [truncateUsingClamp=true] - If `true`, uses the `line-clamp` CSS property for truncation (typically for single-line truncation). If `false`, uses the `truncate` class (requires a defined width on the `wrapperClassName` or parent).
 * @property {'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} [variant='p'] - The HTML tag to use for rendering the text content.
 * @property {string} [wrapperClassName] - Custom CSS class name(s) to apply to the text wrapper element (the element specified by `variant`).
 */

import React, { isValidElement } from "react";
import { MdErrorOutline } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TooltipPropTypes } from "../Tooltip";

import TooltipWrapper from "./components/TooltipWrapper";
import { VARIANTS_MAPPING } from "./constants/truncateText";
import useTruncateText from "./useTruncateText";

/**
 * Displays text that truncates with an ellipsis (...) when it overflows its container.
 * Optionally shows a tooltip with the full text on hover/focus.
 *
 * @component
 * @example
 * // Basic usage with default paragraph tag
 * <TruncateText wrapperClassName="w-32">
 *   This is a very long text that will likely be truncated.
 * </TruncateText>
 *
 * @example
 * // Using a span tag and a full-width tooltip
 * <TruncateText variant="span" isFullWidthTooltip wrapperClassName="w-48">
 *   Another long piece of text content for demonstration.
 * </TruncateText>
 *
 * @example
 * // Custom tooltip content and trigger icon
 * <TruncateText
 *   tooltipContent={<div>Custom Tooltip Info</div>}
 *   tooltipTriggerIcon={<CustomIcon />}
 *   wrapperClassName="w-24"
 * >
 *   Short but truncated.
 * </TruncateText>
 *
 * @see {@link Tooltip} for tooltip customization options via `headerTooltipProps`.
 *
 * @accessibility
 * - When `isFullWidthTooltip` is `false`, the trigger icon has `role="button"` and `tabIndex="0"`.
 * - The `tooltipAriaLabel` prop should be used to provide a meaningful label for the tooltip trigger, especially when `isFullWidthTooltip` is `false`.
 * - The tooltip itself uses `aria-describedby` to associate the trigger with the tooltip content for screen readers.
 *
 * @type {React.FC<TruncateTextProps>}
 */
const TruncateText = ({
  children,
  containerClassName,
  headerTooltipProps,
  hidetooltipTriggerIcon,
  id,
  isFullWidthTooltip,
  isTooltip,
  passTruncatedState,
  tooltipAriaLabel,
  tooltipContent,
  tooltipTriggerIcon,
  truncateUsingClamp,
  variant,
  wrapperClassName,
}) => {
  const Component = VARIANTS_MAPPING[variant];
  const { headerNameRef, truncatedDataTooltip } = useTruncateText(
    wrapperClassName,
    children
  );
  return (
    <div
      className={twClassNames(
        "relative ",
        {
          "pr-3": !hidetooltipTriggerIcon,
        },
        containerClassName
      )}
      {...(id !== null && { id })}
    >
      <TooltipWrapper
        tooltipContent={
          tooltipContent || (
            <div className="mb-0 px-4 text-neutral-inverse-weakest">
              {children}
            </div>
          )
        }
        isTooltipToBeWrapped={
          isFullWidthTooltip && truncatedDataTooltip && isTooltip
        }
        headerTooltipProps={{ ...headerTooltipProps }}
        ariaLabel={tooltipAriaLabel}
      >
        <Component
          className={twClassNames(
            `break-all`,
            {
              "line-clamp-1":
                !wrapperClassName.includes("line-clamp-") && truncateUsingClamp,
              "truncate mr-2": !truncateUsingClamp,
            },
            wrapperClassName
          )}
          ref={headerNameRef}
          tabIndex={isFullWidthTooltip ? 0 : null}
        >
          {passTruncatedState
            ? React.Children.map(children, child => {
                if (isValidElement(child))
                  return React.cloneElement(child, {
                    truncated: truncatedDataTooltip,
                  });
                return child;
              })
            : children}
        </Component>
      </TooltipWrapper>
      {!isFullWidthTooltip && truncatedDataTooltip && isTooltip && (
        <span
          className={twClassNames("absolute top-1", {
            "right-0": !hidetooltipTriggerIcon,
            "right-1": hidetooltipTriggerIcon,
          })}
        >
          <TooltipWrapper
            tooltipContent={
              tooltipContent || (
                <div className="mb-0 px-4 text-neutral-inverse-weakest">
                  {children}
                </div>
              )
            }
            isTooltipToBeWrapped
            headerTooltipProps={{ ...headerTooltipProps }}
            ariaLabel={tooltipAriaLabel}
          >
            <span
              tabIndex={0}
              role="button"
              aria-describedby={`${id}-tooltip`}
              className="cursor-default focus:outline-none"
            >
              {hidetooltipTriggerIcon ? (
                <span className="invisible">...</span>
              ) : (
                tooltipTriggerIcon
              )}
            </span>
          </TooltipWrapper>
        </span>
      )}
    </div>
  );
};

TruncateText.propTypes = {
  /** The content to be displayed and potentially truncated. */
  children: PropTypes.node,
  /** Custom CSS class name(s) to apply to the main container `div` element. */
  containerClassName: PropTypes.string,
  /** Additional props to pass directly to the underlying `Tooltip` component. See `Tooltip` component for available props. */
  headerTooltipProps: PropTypes.shape(TooltipPropTypes),
  /** If `true`, hides the default tooltip trigger icon (usually shown when text is truncated and `isFullWidthTooltip` is `false`). */
  hidetooltipTriggerIcon: PropTypes.bool,
  /** A unique identifier for the root element. Also used for associating the tooltip trigger with its description via `aria-describedby`. */
  id: PropTypes.string,
  /** If `true`, the tooltip will be triggered by hovering/focusing the entire text container. If `false`, a separate trigger icon is shown when text is truncated. */
  isFullWidthTooltip: PropTypes.bool,
  /** If `true`, enables the tooltip functionality when the text is truncated. */
  isTooltip: PropTypes.bool,
  /** If `true` and `children` is a single React element, passes a `truncated` prop (boolean) to the child element indicating if the text is currently truncated. */
  passTruncatedState: PropTypes.bool,
  /** Provides an accessible label for the tooltip trigger element. Recommended when `isFullWidthTooltip` is `false`. */
  tooltipAriaLabel: PropTypes.string,
  /** Custom content to display inside the tooltip. If not provided, the `children` prop content will be used. */
  tooltipContent: PropTypes.node,
  /** Custom icon element to use as the tooltip trigger when `isFullWidthTooltip` is `false` and the text is truncated. */
  tooltipTriggerIcon: PropTypes.node,
  /** If `true`, uses the `line-clamp` CSS property for truncation (typically for single-line truncation). If `false`, uses the `truncate` class (requires a defined width on the `wrapperClassName` or parent). */
  truncateUsingClamp: PropTypes.bool,
  /** The HTML tag to use for rendering the text content. */
  variant: PropTypes.string,
  /** Custom CSS class name(s) to apply to the text wrapper element (the element specified by `variant`). */
  wrapperClassName: PropTypes.string,
};
TruncateText.defaultProps = {
  children: null,
  containerClassName: "",
  headerTooltipProps: {},
  hidetooltipTriggerIcon: false,
  id: null,
  isFullWidthTooltip: false,
  isTooltip: true,
  passTruncatedState: true,
  tooltipAriaLabel: "",
  tooltipContent: null,
  tooltipTriggerIcon: <MdErrorOutline className="max-h-4" />,
  truncateUsingClamp: true,
  variant: "p",
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-truncatetext--primary
 * @zeroHeight
 * @end
 */
export default TruncateText;
