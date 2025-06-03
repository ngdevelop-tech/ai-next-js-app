/**
 * @typedef {Object} ListTreeDroppableProps
 * @property {any} focusIDPrefix?
 * @property {string} focused?
 * @property {number} indent?
 * @property {any} index?
 * @property {Record<string, any>} item?
 * @property {any} contents?
 */
/**
 * USED FOR STORY
 * This is just an example component that renders a draggable table row,
 */
import React from "react";
export declare const ListTreeDroppable: {
    ({ item: any, openNodeMap: any, setOpenNodeMap: any, selectedNodeMap: any, setSelectedNodeMap: any, setFocused: any, indent, any, focused, any, focusIDPrefix: any, index: any, popoverElement: any, }: any): React.ReactElement;
    propTypes: {
        focusIDPrefix: any;
        focused: any;
        indent: any;
        index: any;
        item: any;
        openNodeMap: any;
        popoverElement: any;
        selectedNodeMap: any;
        setFocused: any;
        setOpenNodeMap: any;
        setSelectedNodeMap: any;
    };
    defaultProps: {
        item: {};
        openNodeMap: {};
        setOpenNodeMap: () => void;
        selectedNodeMap: {};
        setSelectedNodeMap: () => void;
        setFocused: () => void;
        indent: number;
        focused: string;
        focusIDPrefix: string;
        index: number;
        popoverElement: () => void;
    };
};
