/**
 * @typedef {Object} ListTreeRootWrapperProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the ListTree wrapper
 * @property {Record<string, any>} filteredUUIDs? - Object containing filtered uuids after events like search
 * @property {Record<string, any>} filteredUUIDsWithHierarchy?
 */
import React from "react";
/**
 * @type {React.FC<ListTreeRootWrapperProps>}
 */
declare const ListTreeRootWrapper: {
    ({ children: any, filteredUUIDs, any, focusIDPrefix, any, id, any, listData: any, onSelectCallback: any, openNodeMap: any, setOpenNodeMap: any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the ListTree wrapper */
        children: any;
        /** Object containing filtered uuids after events like search */
        filteredUUIDs: any;
        /** Prefix text provided to focusable items */
        focusIDPrefix: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Array of tree data */
        listData: any;
        /** Callback triggered on selecting tree level */
        onSelectCallback: any;
        /** Object containing opened nodes uuuid with value true */
        openNodeMap: any;
        /** Callback to update open nodes map */
        setOpenNodeMap: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listtree--controlled-tree
 * @zeroHeight https://zeroheight.com/023d5159d/p/08d92b-list-tree/b/4635b4
 * @end
 */
export default ListTreeRootWrapper;
