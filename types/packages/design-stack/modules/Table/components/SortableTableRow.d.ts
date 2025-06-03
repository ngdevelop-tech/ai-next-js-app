/**
 * @typedef {Object} SortableTableRowProps
 * @property {any} columns?
 * @property {boolean} isSortable?
 * @property {string} key?
 * @property {string} name?
 */
/**
 * USED FOR STORY
 * This is just an example component that renders a draggable table row,
 */
import React from "react";
/**
 * @type {React.FC<SortableTableRowProps>}
 */
declare const SortableTableRow: {
    ({ rowId, any, row, any, columns, any, isDraggable, any, }: any): React.ReactElement;
    propTypes: {
        columns: any;
        isDraggable: any;
        row: any;
        rowId: any;
    };
};
export default SortableTableRow;
