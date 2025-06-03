/**
 * @typedef {Object} ListTreeProps
 * @property {React.ReactNode} [children=null] - The content to be rendered within the ListTree, typically `ListTreeItem` and nested `ListTree` components.
 * @property {string} [id=null] - Optional unique identifier for the root `div` element of the component.
 * @property {number} [indentationLevel=1] - The nesting level of the tree, used to calculate indentation. A level greater than 1 adds left margin and padding.
 * @property {boolean} [isTreeOpen=false] - Controls the initial open/closed state of the tree. Use this for uncontrolled behavior. For controlled behavior, manage the open state externally and pass it to the `Disclosure` component directly if needed, though `ListTree` primarily uses `defaultOpen`.
 */
import React from "react";
/**
 * Represents a collapsible section within a list structure, often used recursively to create nested trees.
 * It utilizes Headless UI's `Disclosure` component for managing the open/closed state and transitions.
 *
 * @component
 * @param {ListTreeProps} props - The props for the ListTree component.
 * @param {React.Ref<HTMLDivElement>} ref - The ref forwarded to the underlying `div` element rendered by `Disclosure`.
 *
 * @example
 * <ListTree indentationLevel={1} isTreeOpen={true}>
 *   <ListTreeItem>Root Item</ListTreeItem>
 *   <ListTree indentationLevel={2}>
 *     <ListTreeItem>Child Item 1</ListTreeItem>
 *     <ListTreeItem>Child Item 2</ListTreeItem>
 *   </ListTree>
 * </ListTree>
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listtree--controlled-tree Storybook}
 * @see {@link https://zeroheight.com/023d5159d/p/08d92b-list-tree/b/4635b4 Zeroheight}
 *
 * @type {React.ForwardRefExoticComponent<ListTreeProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const ListTree: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listtree--controlled-tree
 * @zeroHeight https://zeroheight.com/023d5159d/p/08d92b-list-tree/b/4635b4
 * @end
 */
export default ListTree;
