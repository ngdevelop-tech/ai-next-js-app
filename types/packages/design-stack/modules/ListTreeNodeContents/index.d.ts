/**
 * @typedef {Object} ListTreeNodeContentsProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the indented child of ListTreeNode
 * @property {boolean} isTreeOpen? - Specify if the tree is open or not.This is to be used only when tree hide/show is to be controlled by the products business logic
 */
import React from "react";
/**
 * @type {React.FC<ListTreeNodeContentsProps>}
 */
declare const ListTreeNodeContents: {
    ({ children, any, isTreeOpen }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the indented child of ListTreeNode */
        children: any;
        /** Specify if the tree is open or not.This is to be used only when tree hide/show is to be controlled by the products business logic */
        isTreeOpen: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listtree--controlled-tree
 * @zeroHeight https://zeroheight.com/023d5159d/p/08d92b-list-tree/b/4635b4
 * @end
 */
export default ListTreeNodeContents;
