/**
 * @typedef {Object} TableRowProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the Table row
 * @property {boolean} hover? - If true ,styles are applied to row background and cursor on hover
 * @property {string} id? - The ID of the table row component to uniquely identify every table row
 * @property {(event: React.MouseEvent<any>) => void} onRowClick? - A callback triggered on clicking table row
 * @property {boolean} selected? - Updates background style for selected table row
 * @property {string} wrapperClassName? - A custom CSS class name to style the table row.
 */
import React from "react";
/**
 * @type {React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableElement>>}
 */
declare const TableRow: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */
export default TableRow;
