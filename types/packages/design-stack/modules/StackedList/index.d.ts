/**
 * @typedef {Object} StackedListProps
 * @property {React.ReactNode} children - The content to be rendered within the list. Typically, this will be a series of `StackedListItem` components or similar elements.
 * @property {React.ReactNode} [footer] - Optional content to be displayed in a sticky footer section at the bottom of the list.
 * @property {string} [footerWrapperClassName] - Optional CSS class name(s) to apply to the footer's wrapping `div` element.
 * @property {string} [id] - Optional unique identifier for the root `section` element.
 * @property {boolean} [isCard=false] - If `true`, applies card styling to the children elements. This is typically passed down to child components like `StackedListItem`.
 */
import React from "react";
/**
 * `StackedList` is a container component designed to display a vertical list of items.
 * It supports an optional sticky footer and can render its children with card-like styling.
 *
 * @component
 * @example
 * const items = [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }];
 * return (
 *   <StackedList footer={<Button>Action</Button>}>
 *     {items.map(item => (
 *       <StackedListItem key={item.id}>{item.text}</StackedListItem>
 *     ))}
 *   </StackedList>
 * );
 *
 * @example
 * // With card styling
 * return (
 *   <StackedList isCard={true}>
 *     <StackedListItem>Card Item 1</StackedListItem>
 *     <StackedListItem>Card Item 2</StackedListItem>
 *   </StackedList>
 * );
 *
 * @type {React.FC<StackedListProps>}
 */
declare const StackedList: {
    ({ children: any, footer, any, footerWrapperClassName, any, id, any, isCard, any, }: any): React.ReactElement;
    propTypes: {
        /** The content to be rendered within the list. Typically, this will be a series of `StackedListItem` components or similar elements. */
        children: any;
        /** Optional content to be displayed in a sticky footer section at the bottom of the list. */
        footer: any;
        /** Optional CSS class name(s) to apply to the footer's wrapping `div` element. */
        footerWrapperClassName: any;
        /** Optional unique identifier for the root `section` element. Useful for accessibility and testing. */
        id: any;
        /** If `true`, applies card styling to the children elements. This is typically passed down to child components like `StackedListItem`. */
        isCard: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stackedlist--avatar-groups-with-actions
 * @zeroHeight https://zeroheight.com/023d5159d/p/0614e9-stacked-lists/b/4635b4
 * @see StackedListItem
 * @accessibility
 * - The root element is a `<section>`, providing semantic structure.
 * - Ensure child items have appropriate roles and attributes if they are interactive.
 * - Providing an `id` can help in associating labels or descriptions if needed.
 * @end
 */
export default StackedList;
