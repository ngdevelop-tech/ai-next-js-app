/**
 * @typedef {Object} ControlledNestedTreeWithCheckboxProps
 * @property {boolean} allowFilter
 * @property {Record<string, any>[]} data
 * @property {Record<string, any>} filteredUUIDs?
 * @property {Record<string, any>} filteredUUIDsWithHierarchy?
 */
/**
 * USED FOR STORY
 * This is just an example runner function that renders,a tree,
 */
import React from "react";
/**
 * @type {React.FC<ControlledNestedTreeWithCheckboxProps>}
 */
declare const ControlledNestedTreeWithCheckbox: {
    ({ data: any, openNodeMap: any, setOpenNodeMap: any, searchValue: any, filteredUUIDs: any, allowFilter: any, onCheckboxChange: any, isParentSearched: any, focusIDPrefix: any, indent, any, }: any): React.ReactElement;
    propTypes: {
        allowFilter: any;
        data: any;
        filteredUUIDs: any;
        focusIDPrefix: any;
        indent: any;
        isParentSearched: any;
        onCheckboxChange: any;
    };
    defaultProps: {
        focusIDPrefix: string;
        indent: number;
    };
};
export default ControlledNestedTreeWithCheckbox;
