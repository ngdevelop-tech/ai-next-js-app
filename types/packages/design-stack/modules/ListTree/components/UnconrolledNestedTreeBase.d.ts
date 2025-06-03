/**
 * @typedef {Object} UnconrolledNestedTreeBaseProps
 * @property {Record<string, any>[]} data
 * @property {string} focusIDPrefix?
 * @property {number} indent?
 */
/**
 * USED FOR STORY
 * This is just an example runner function that renders,a tree,
 */
import React from "react";
/**
 * @type {React.FC<UnconrolledNestedTreeBaseProps>}
 */
declare const UnconrolledNestedTreeBase: {
    ({ data: any, focusIDPrefix: any, indent, any, selectedNodeMap: any, setSelectedNodeMap: any, openNodeMap: any, setOpenNodeMap: any, setFocused: any, focused, any, }: any): React.ReactElement;
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
export default UnconrolledNestedTreeBase;
