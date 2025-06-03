/**
 * @typedef {import('../Tooltip/constants/tooltip').TP_PLACEMENT_ALIGN} TP_PLACEMENT_ALIGN
 * @typedef {import('../Tooltip/constants/tooltip').TP_PLACEMENT_SIDE} TP_PLACEMENT_SIDE
 * @typedef {import('../Tooltip/constants/tooltip').TP_SIZE} TP_SIZE
 * @typedef {import('../Tooltip/constants/tooltip').TP_STICKY_OPTIONS} TP_STICKY_OPTIONS
 * @typedef {import('../Tooltip/constants/tooltip').TP_TOOLTIP_THEME} TP_TOOLTIP_THEME
 */
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
declare const PopoverContainer: {
    (props: any): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /** An offset in pixels from the "start" or "end" alignment options. For the content wrapper. */
        alignOffset: any;
        /** A custom CSS class name to style the arrow element within the popover component. */
        arrowClassName: any;
        /** The height of the arrow in pixels. */
        arrowHeight: any;
        /** The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners. */
        arrowPadding: any;
        /** The width of the arrow in pixels. */
        arrowWidth: any;
        /** When true, overrides the side and align preferences to prevent collisions with boundary edges */
        avoidCollisions: any;
        /** Node containing the content that will be displayed within the children section of the popover component. */
        children: any;
        /** Defines the distance in pixels from the boundary edges for collision detection, accepting a single number */
        collisionPadding: any;
        /** Node containing the content that will be displayed within the content section of the popover component. */
        content: any;
        /** The open state of the popover when it is initially rendered. */
        defaultOpen: any;
        /** Used to force mounting when more control is needed. */
        forceMount: any;
        /** Whether to hide the content when the trigger becomes fully occluded. */
        hideWhenDetached: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /** Whether the popover is compact. */
        isCompactPopover: any;
        /** Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault. */
        onCloseAutoFocus: any;
        /** Event handler called when the escape key is down. It can be prevented by calling event.preventDefault. */
        onEscapeKeyDown: any;
        /** Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault. */
        onFocusOutside: any;
        /** Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault */
        onInteractOutside: any;
        /** Event handler called when focus moves into the component after opening. It can be prevented by calling event.preventDefault. */
        onOpenAutoFocus: any;
        /** Callback fired when the open state of the popover changes */
        onOpenChange: any;
        /** When a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault */
        onPointerDownOutside: any;
        /** The preferred alignment against the anchor. May change when collisions occur */
        placementAlign: any;
        /** The preferred side of the anchor to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled */
        placementSide: any;
        /** Show/hide the popover. Must be used in conjunction with onOpenChange. */
        show: any;
        /** The distance in pixels from the anchor. */
        sideOffset: any;
        /** The size of content wrapper */
        size: any;
        /** The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless. */
        sticky: any;
        /** Change content theme. */
        theme: any;
        /** A custom CSS class name to style the wrapper element of the trigger section within the popover component */
        triggerWrapperClassName: any;
        /** A custom CSS class name to style the wrapper element of the content section within the popover component. */
        wrapperClassName: any;
    };
    displayName: string;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-popover--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/07c03d-popover/b/4635b4
 * @end
 */
export default PopoverContainer;
