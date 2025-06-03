/**
 * Represents a single cell within a Table component, which can function as either a header or a body cell.
 * It supports features like text alignment, sorting indicators, resizing, sticky positioning, and spanning multiple rows or columns.
 *
 * @module TableCell
 * @param {TableCellProps} props - The props for the TableCell component.
 * @returns {React.ReactElement} The rendered table cell element.
 *
 * @example
 * // Basic body cell
 * <TableCell>Cell Content</TableCell>
 *
 * @example
 * // Header cell with sorting
 * <TableCell variant="header" sortable cellId="column1" sortDirection="asc" onSort={handleSort}>
 *   Column 1
 * </TableCell>
 *
 * @example
 * // Resizable header cell
 * <TableCell variant="header" isResizable cellId="column2" minWidth={100} maxWidth={300}>
 *   Resizable Column
 * </TableCell>
 *
 * @see Table for usage within a table structure.
 * @see TableRow for usage within a table row.
 * @accessibility
 * - When `sortable` is true, the cell behaves like a button and includes ARIA attributes to indicate sort status.
 * - When `isResizable` is true, a hidden button with `role="slider"` is included for keyboard and screen reader users to adjust column width.
 * - The cell component renders a `<th>` for `variant="header"` and `<td>` for `variant="body"` semantically.
 */
/**
 * @typedef {Object} TableCellProps
 * @property {'left' | 'center' | 'right' | 'justify'} [align='left'] - Aligns the cell content horizontally. Defaults to 'left'.
 * @property {string} [cellId] - A unique identifier for the cell. Required if `sortable` or `isResizable` is true to manage state and interactions correctly.
 * @property {React.ReactNode} [children] - The content to be displayed within the table cell. Can be any valid React node.
 * @property {number} [colspan] - Defines the number of columns a cell should span horizontally.
 * @property {number} [defaultWidth] - Specifies the initial width in pixels for a resizable column header. Used for setting width before user interaction or persisting width. Only applicable when `isResizable` is true and `variant` is 'header'.
 * @property {boolean} [isResizable=false] - If true, allows the column width to be adjusted by dragging a handle. Requires `cellId` and `variant="header"`.
 * @property {boolean} [isSticky=false] - If true, makes the cell sticky during scrolling. Typically used for header cells or specific columns. Requires appropriate CSS setup in the parent Table for positioning.
 * @property {'long-cell' | 'short-cell'} [loadingVariant='long-cell'] - Specifies the visual style of the loading placeholder within the cell when the table is in a loading state. Only applicable when `variant` is 'body'.
 * @property {number} [maxWidth=Infinity] - Maximum width in pixels the cell can be resized to. Only applicable when `isResizable` is true. Defaults to `Infinity`.
 * @property {number} [minWidth=0] - Minimum width in pixels the cell can be resized to. Only applicable when `isResizable` is true. Defaults to `0`.
 * @property {boolean} [monospacedDigits=true] - If true, renders numerical digits using a monospaced font variant for better alignment in columns with numbers.
 * @property {(event: React.MouseEvent<HTMLTableCellElement>) => void} [onSort] - Callback function triggered when a sortable header cell is clicked. Receives the click event.
 * @property {(newWidth: number) => void} [onWidthUpdate] - Callback function triggered when a resizable header cell's width is updated after dragging. Receives the new width in pixels.
 * @property {number} [rowspan=1] - Defines the number of rows a cell should span vertically. Defaults to 1.
 * @property {'asc' | 'desc'} [sortDirection='asc'] - Indicates the current sorting direction ('ascending' or 'descending') for a sortable header cell. Used to display the correct sort icon. Defaults to 'asc'.
 * @property {boolean} [sortable=false] - If true, indicates that the column can be sorted. Adds sorting controls and interaction handlers to the header cell. Requires `cellId`.
 * @property {'inherit' | 'lowercase' | 'uppercase' | 'capitalize'} [textTransform='inherit'] - Applies CSS text transformation to the cell content. Defaults to 'inherit'.
 * @property {'body' | 'header'} [variant='body'] - Specifies the type of cell, affecting styling and semantic element (`<td>` for 'body', `<th>` for 'header'). Defaults to 'body'.
 * @property {string} [wrapperClassName] - An optional CSS class name to apply custom styles to the table cell element.
 */
import React from "react";
/**
 * @type {React.FC<TableCellProps>}
 */
declare const TableCell: {
    ({ align, any, cellId, any, children, any, colspan, any, defaultWidth, any, isResizable, any, isSticky, any, monospacedDigits, any, onSort, any, onWidthUpdate, any, sortDirection, any, sortable, any, textTransform, any, variant, any, wrapperClassName, any, minWidth, any, maxWidth, any, rowspan, any, loadingVariant, any, }: any): React.ReactElement;
    propTypes: {
        /** Align the cell content horizontally. Defaults to 'left'. */
        align: any;
        /** A unique identifier for the cell. Required if `sortable` or `isResizable` is true to manage state and interactions correctly. */
        cellId: any;
        /** The content to be displayed within the table cell. Can be any valid React node. */
        children: any;
        /** Defines the number of columns a cell should span horizontally. */
        colspan: any;
        /** Specifies the initial width in pixels for a resizable column header. Used for setting width before user interaction or persisting width. Only applicable when `isResizable` is true and `variant` is 'header'. */
        defaultWidth: any;
        /** If true, allows the column width to be adjusted by dragging a handle. Requires `cellId` and `variant="header"`. */
        isResizable: any;
        /** If true, makes the cell sticky during scrolling. Typically used for header cells or specific columns. Requires appropriate CSS setup in the parent Table for positioning. */
        isSticky: any;
        /** Specifies the visual style of the loading placeholder within the cell when the table is in a loading state. Only applicable when `variant` is 'body'. */
        loadingVariant: any;
        /** Maximum width in pixels the cell can be resized to. Only applicable when `isResizable` is true. Defaults to `Infinity`. */
        maxWidth: any;
        /** Minimum width in pixels the cell can be resized to. Only applicable when `isResizable` is true. Defaults to `0`. */
        minWidth: any;
        /** If true, renders numerical digits using a monospaced font variant for better alignment in columns with numbers. */
        monospacedDigits: any;
        /** Callback function triggered when a sortable header cell is clicked. Receives the click event. */
        onSort: any;
        /** Callback function triggered when a resizable header cell's width is updated after dragging. Receives the new width in pixels. */
        onWidthUpdate: any;
        /** Defines the number of rows a cell should span vertically. Defaults to 1. */
        rowspan: any;
        /** Indicates the current sorting direction ('ascending' or 'descending') for a sortable header cell. Used to display the correct sort icon. Defaults to 'asc'. */
        sortDirection: any;
        /** If true, indicates that the column can be sorted. Adds sorting controls and interaction handlers to the header cell. Requires `cellId`. */
        sortable: any;
        /** Applies CSS text transformation to the cell content. Defaults to 'inherit'. */
        textTransform: any;
        /** Specifies the type of cell, affecting styling and semantic element (`<td>` for 'body', `<th>` for 'header'). Defaults to 'body'. */
        variant: any;
        /** An optional CSS class name to apply custom styles to the table cell element. */
        wrapperClassName: any;
    };
    defaultProps: {
        align: string;
        cellId: string;
        children: any;
        colspan: number;
        defaultWidth: number;
        isResizable: boolean;
        isSticky: boolean;
        monospacedDigits: boolean;
        onSort: any;
        onWidthUpdate: any;
        sortDirection: string;
        sortable: boolean;
        textTransform: string;
        variant: string;
        wrapperClassName: string;
        minWidth: number;
        maxWidth: number;
        rowspan: number;
        loadingVariant: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */
export default TableCell;
