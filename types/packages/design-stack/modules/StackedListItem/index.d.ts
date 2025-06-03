/**
 * @typedef {Object} StackedListItemProps
 * @property {React.ReactNode} [actions] - Optional actions or buttons associated with the list item, typically displayed on the right side. Accepts any valid React node.
 * @property {React.ReactNode} children - The main content of the list item. Can be a single node or an array of nodes.
 * @property {boolean} [focusParentOnChildFocused=false] - If true, applies focus styling to the entire list item when any interactive element within it receives focus. Useful for highlighting the active item.
 * @property {boolean} [hideContentInSmallWidth=false] - If true, hides the secondary content (when multiple children are provided) on smaller screen widths to optimize space.
 * @property {string} [id] - Optional unique identifier for the list item's root `li` element.
 * @property {boolean} [isCard=false] - If true, styles the list item with card-like appearance, including hover effects.
 * @property {string} [wrapperClassName] - Optional additional CSS class names to apply to the list item's root `li` element for custom styling.
 */
import React from "react";
/**
 * `StackedListItem` represents a single item within a `StackedList`.
 * It arranges content and optional actions in a flexible layout that adapts to different screen sizes.
 *
 * @component
 * @example
 * // Basic usage with text content
 * <StackedListItem>Item Content</StackedListItem>
 *
 * @example
 * // With multiple children and actions
 * <StackedListItem actions={<Button size="small">Action</Button>}>
 *   <Avatar name="John Doe" />
 *   <div>
 *     <p>John Doe</p>
 *     <p className="text-sm text-neutral-secondary-default">john.doe@example.com</p>
 *   </div>
 * </StackedListItem>
 *
 * @example
 * // As a card with focus behavior
 * <StackedListItem isCard focusParentOnChildFocused>
 *   <a href="#">Clickable Item Content</a>
 * </StackedListItem>
 *
 * @see StackedList - The parent component used to group `StackedListItem` components.
 * @accessibility
 * - Ensures proper list item semantics using the `<li>` tag.
 * - When `focusParentOnChildFocused` is true, provides visual feedback for keyboard navigation within the list.
 * @type {React.FC<StackedListItemProps>}
 */
declare const StackedListItem: {
    ({ actions, any, children: any, focusParentOnChildFocused, any, hideContentInSmallWidth, any, id, any, isCard, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /**
         * Optional actions or buttons associated with the list item.
         * Typically displayed on the right side. Accepts any valid React node (e.g., `<Button>`, `<IconButton>`).
         * @type {React.ReactNode}
         */
        actions: any;
        /**
         * The main content of the list item. This is required.
         * Can be a single React node or an array of nodes. If an array is provided,
         * the layout might adjust based on `hideContentInSmallWidth`.
         * @type {React.ReactNode}
         */
        children: any;
        /**
         * If true, applies focus styling (e.g., a ring) to the entire list item
         * when any focusable element inside it (like a link or button) receives focus.
         * Defaults to `false`.
         * @type {boolean}
         */
        focusParentOnChildFocused: any;
        /**
         * If true, hides secondary content elements (when `children` is an array)
         * on smaller viewports to save space. The definition of "secondary" depends
         * on the `RenderChildren` component's implementation. Defaults to `false`.
         * @type {boolean}
         */
        hideContentInSmallWidth: any;
        /**
         * Optional unique identifier to apply to the root `<li>` element.
         * Useful for targeting the element for testing or specific styling.
         * @type {string}
         */
        id: any;
        /**
         * If true, styles the list item with a background on hover, giving it a
         * card-like interactive feel. Defaults to `false`.
         * @type {boolean}
         */
        isCard: any;
        /**
         * Optional string of additional CSS class names to apply to the root `<li>` element.
         * Allows for further customization via Tailwind or custom CSS.
         * @type {string}
         */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stackedlist--avatar-groups-with-actions
 * @zeroHeight https://zeroheight.com/023d5159d/p/0614e9-stacked-lists/b/4635b4
 * @end
 */
export default StackedListItem;
