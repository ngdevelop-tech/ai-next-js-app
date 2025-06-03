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
import React from "react";
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
declare const TruncateText: {
    ({ children: any, containerClassName: any, headerTooltipProps: any, hidetooltipTriggerIcon: any, id: any, isFullWidthTooltip: any, isTooltip: any, passTruncatedState: any, tooltipAriaLabel: any, tooltipContent: any, tooltipTriggerIcon: any, truncateUsingClamp: any, variant: any, wrapperClassName: any, }: any): React.ReactElement;
    propTypes: {
        /** The content to be displayed and potentially truncated. */
        children: any;
        /** Custom CSS class name(s) to apply to the main container `div` element. */
        containerClassName: any;
        /** Additional props to pass directly to the underlying `Tooltip` component. See `Tooltip` component for available props. */
        headerTooltipProps: any;
        /** If `true`, hides the default tooltip trigger icon (usually shown when text is truncated and `isFullWidthTooltip` is `false`). */
        hidetooltipTriggerIcon: any;
        /** A unique identifier for the root element. Also used for associating the tooltip trigger with its description via `aria-describedby`. */
        id: any;
        /** If `true`, the tooltip will be triggered by hovering/focusing the entire text container. If `false`, a separate trigger icon is shown when text is truncated. */
        isFullWidthTooltip: any;
        /** If `true`, enables the tooltip functionality when the text is truncated. */
        isTooltip: any;
        /** If `true` and `children` is a single React element, passes a `truncated` prop (boolean) to the child element indicating if the text is currently truncated. */
        passTruncatedState: any;
        /** Provides an accessible label for the tooltip trigger element. Recommended when `isFullWidthTooltip` is `false`. */
        tooltipAriaLabel: any;
        /** Custom content to display inside the tooltip. If not provided, the `children` prop content will be used. */
        tooltipContent: any;
        /** Custom icon element to use as the tooltip trigger when `isFullWidthTooltip` is `false` and the text is truncated. */
        tooltipTriggerIcon: any;
        /** If `true`, uses the `line-clamp` CSS property for truncation (typically for single-line truncation). If `false`, uses the `truncate` class (requires a defined width on the `wrapperClassName` or parent). */
        truncateUsingClamp: any;
        /** The HTML tag to use for rendering the text content. */
        variant: any;
        /** Custom CSS class name(s) to apply to the text wrapper element (the element specified by `variant`). */
        wrapperClassName: any;
    };
    defaultProps: {
        children: any;
        containerClassName: string;
        headerTooltipProps: {};
        hidetooltipTriggerIcon: boolean;
        id: any;
        isFullWidthTooltip: boolean;
        isTooltip: boolean;
        passTruncatedState: boolean;
        tooltipAriaLabel: string;
        tooltipContent: any;
        tooltipTriggerIcon: import("react/jsx-runtime").JSX.Element;
        truncateUsingClamp: boolean;
        variant: string;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-truncatetext--primary
 * @zeroHeight
 * @end
 */
export default TruncateText;
