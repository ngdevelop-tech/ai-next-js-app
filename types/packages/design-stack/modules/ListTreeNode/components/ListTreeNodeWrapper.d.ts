/**
 * @typedef {Object} ListTreeNodeWrapperProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the ListTreeNode
 * @property {boolean} isNodeSelectable - Specify if the ListTreeNode can be selected or not
 * @property {(event: React.MouseEvent<any>) => void} onNodeClick? - Callback triggered on selecting ListTreeNode
 * @property {string} wrapperClassName - A custom CSS class name to style the wrapper of ListTreeNode
 */
import React from "react";
/**
 * @type {React.ForwardRefExoticComponent<ListTreeNodeWrapperProps & React.RefAttributes<HTMLUListElement>>}
 */
declare const ListTreeNodeWrapper: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default ListTreeNodeWrapper;
