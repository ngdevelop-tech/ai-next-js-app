/**
 * @typedef {Object} ControlledNestedTreeBaseProps
 * @property {Record<string, any>[]} data
 * @property {string} focusIDPrefix?
 * @property {number} indent?
 */
/**
 * USED FOR STORY
 * This is just an example runner function that renders,a tree,
 * recursively, using our DS components, using the given dummy dataset,
 * it uses DFS by default, feel free to re-use this in your product implementation
 */
import React from "react";
/**
 * @type {React.FC<ControlledNestedTreeBaseProps>}
 */
declare const ControlledNestedTreeBase: {
    ({ data: any, openNodeMap: any, setOpenNodeMap: any, selectedNodeMap: any, setSelectedNodeMap: any, setFocused: any, indent, any, focused, any, focusIDPrefix: any, }: any): React.ReactElement;
    propTypes: {
        data: any;
        focusIDPrefix: any;
        indent: any;
    };
    defaultProps: {
        focusIDPrefix: string;
        indent: number;
    };
};
export default ControlledNestedTreeBase;
