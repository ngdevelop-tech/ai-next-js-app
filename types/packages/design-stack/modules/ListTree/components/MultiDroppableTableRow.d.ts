/**
 * @typedef {Object} DroppableTableRowProps
 * @property {boolean} checkboxValue
 * @property {string[]} checkedItemsArray
 * @property {any} columns?
 * @property {boolean} isSortable?
 * @property {string} key?
 * @property {string} name?
 */
/**
 * USED FOR STORY
 * This is just an example component that renders a droppable and draggable table row,
 */
import React from "react";
/**
 * @type {React.FC<DroppableTableRowProps>}
 */
declare const DroppableTableRow: {
    ({ checkboxValue: any, checkedItemsArray: any, columns: any, handleCheckboxChange: any, isCheckedItemDragged: any, isDraggable: any, row: any, rowId: any, }: any): React.ReactElement;
    propTypes: {
        checkboxValue: any;
        checkedItemsArray: any;
        columns: any;
        handleCheckboxChange: any;
        isCheckedItemDragged: any;
        isDraggable: any;
        row: any;
        rowId: any;
    };
    defaultProps: {
        columns: any[];
        rowId: any;
        row: {};
        isDraggable: boolean;
    };
};
export default DroppableTableRow;
