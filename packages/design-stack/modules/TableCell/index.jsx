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

import React, { useContext } from "react";
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TableContextData } from "../Table/context";
import { TableRowContextData } from "../TableRow/context";

import {
  DEFAULT_RESIZER,
  KEYBOARD_DRAGGED_RESIZER,
  RESIZER_SEPERATOR,
} from "./assets/resizer";
import { TableCellLoader } from "./components/TableCellLoader";
import {
  CELL_ALIGNMENT,
  CELL_DIRECTION,
  CELL_LOADING_VARIANT,
  CELL_TEXT_TRANSFORM,
  CELL_VARIANT,
} from "./constant/tableCell";
import {
  getCellComponent,
  getCompressedHeaderDisplayStyles,
  getCompressedHeaderStyles,
} from "./constant/utils";
import useTableCell, { getHeaderWidth } from "./useTableCell";

/**
 * @type {React.FC<TableCellProps>}
 */
const TableCell = ({
  align = CELL_ALIGNMENT.LEFT,
  cellId = "",
  children = null,
  colspan = 0,
  defaultWidth = 0,
  isResizable = false,
  isSticky = false,
  monospacedDigits = true,
  onSort = null,
  onWidthUpdate = null,
  sortDirection = CELL_DIRECTION.ASC,
  sortable = false,
  textTransform = CELL_TEXT_TRANSFORM.INHERIT,
  variant = CELL_VARIANT.BODY,
  wrapperClassName = "",
  minWidth = 0,
  maxWidth = Infinity,
  rowspan = 1,
  loadingVariant = CELL_LOADING_VARIANT.LONG_CELL,
  // eslint-disable-next-line sonarjs/cognitive-complexity
}) => {
  const {
    showResizer,
    setShowResizer,
    isResizableTableCells,
    hasCompressedHeader,
    showVerticalLines,
    hasMergedCells,
    loading,
  } = useContext(TableContextData);
  const compressedHeaderStyles = getCompressedHeaderStyles(
    variant,
    hasCompressedHeader
  );
  const isHeaderRow = variant === CELL_VARIANT.HEADER;
  const compressedHeaderDisplayStyles = getCompressedHeaderDisplayStyles(
    variant,
    sortable,
    hasCompressedHeader
  );
  const { focusedResizerCell, setFocusedResizerCell } =
    useContext(TableRowContextData);
  const isAnyResizerFocused = !!focusedResizerCell;
  const isCurrentResizerFocused = focusedResizerCell === cellId;
  const {
    sortAttrs,
    sortedColumn,
    colRef,
    trackerRef,
    resizerToggleRef,
    headerCellWidth,
    seperatorHeight,
    isDragging,
    setIsDragging,
    isKeyboardDragging,
    setIsKeyboardDragging,
    setHeaderCellWidth,
    cellContentClassName,
  } = useTableCell(
    onSort,
    sortDirection,
    cellId,
    sortable,
    onWidthUpdate,
    variant,
    isResizable,
    isCurrentResizerFocused,
    minWidth,
    maxWidth,
    compressedHeaderDisplayStyles,
    monospacedDigits
  );
  const cellContentRef = React.useRef(null);
  const { tableRef } = useContext(TableContextData);

  const doubleClickHandler = () => {
    if (!colRef.current || !tableRef.current) return;
    const columnIndex = Array.from(colRef.current.parentNode.children).indexOf(
      colRef.current
    );
    const rows = tableRef.current.querySelectorAll("tr");
    let maxContentWidth = 0;
    rows.forEach(row => {
      const cell = row.children[columnIndex];
      if (cell) {
        const child = cell.children[0];
        if (child) {
          const tempSpan = document.createElement("span");
          tempSpan.style.visibility = "hidden";
          tempSpan.style.whiteSpace = "nowrap";
          tempSpan.style.position = "absolute";
          tempSpan.style.font = getComputedStyle(child).font;
          tempSpan.textContent = child.textContent;
          document.body.appendChild(tempSpan);
          const contentWidth = tempSpan.offsetWidth;
          document.body.removeChild(tempSpan);
          maxContentWidth = Math.max(maxContentWidth, contentWidth);
        }
      }
    });
    colRef.current.style.width = `${maxContentWidth * 1.4}px`;
  };

  const CellComponent = getCellComponent(isHeaderRow);
  return (
    <CellComponent
      role={isHeaderRow ? "columnheader" : "cell"}
      ref={colRef}
      style={{
        minWidth: `${minWidth}px`,
        ...(isResizable &&
          isHeaderRow &&
          !!defaultWidth && { width: `${defaultWidth}px` }),
        ...(isResizableTableCells &&
          isHeaderRow &&
          headerCellWidth && { width: `${headerCellWidth}px` }),
      }}
      onMouseEnter={() => {
        if (isHeaderRow) setShowResizer(true);
      }}
      onMouseLeave={() => {
        if (isHeaderRow && !isAnyResizerFocused && !isDragging)
          setShowResizer(false);
      }}
      className={twClassNames(
        {
          "px-3 text-neutral-weaker whitespace-nowrap py-4 text-sm":
            variant === CELL_VARIANT.BODY,
          "px-3 py-3 text-left text-sm font-semibold text-neutral-default":
            variant === CELL_VARIANT.HEADER,
          "text-xs font-medium text-neutral-weaker":
            variant === CELL_VARIANT.HEADER &&
            textTransform === CELL_TEXT_TRANSFORM.UPPERCASE,
          [`text-${align}`]: align,
          [textTransform]: textTransform,
          "whitespace-normal":
            isResizableTableCells && variant === CELL_VARIANT.BODY,
          relative: isResizable,
          "bg-neutral-default border-neutral-strong sticky top-0 z-100 border-b backdrop-blur":
            isSticky,
          "cursor-col-resize": isDragging,
          "border-x first:border-l-0 last:border-r-0 border-neutral-default":
            showVerticalLines,
          "sm:first:pl-6 sm:last:pr-6": !showVerticalLines,
        },
        "group first:pl-4 last:pr-4",
        compressedHeaderStyles,
        wrapperClassName
      )}
      rowSpan={rowspan}
      colSpan={colspan}
    >
      <div
        ref={cellContentRef}
        onFocus={
          sortable
            ? () => {
                if (!(sortedColumn === cellId))
                  cellContentRef.current.children[0].classList.remove(
                    "invisible"
                  );
              }
            : null
        }
        onBlur={
          sortable
            ? () => {
                if (!(sortedColumn === cellId))
                  cellContentRef.current.children[0].classList.add("invisible");
              }
            : null
        }
        className={cellContentClassName}
        {...sortAttrs}
      >
        {loading && !isHeaderRow ? (
          <TableCellLoader loadingVariant={loadingVariant} />
        ) : (
          children
        )}

        {sortable ? (
          <span
            className={twClassNames(
              "invisible ml-2 inline-flex h-6 w-6 flex-none items-center justify-center self-center rounded bg-neutral-strong icon-neutral-weak hover:bg-neutral-strongest group-hover:visible",
              { "visible icon-brand-default": sortedColumn === cellId }
            )}
          >
            {sortDirection === CELL_DIRECTION.ASC ? (
              <MdOutlineArrowUpward
                className="cursor-pointer"
                size={18}
                aria-hidden="true"
              />
            ) : (
              <MdOutlineArrowDownward
                className="cursor-pointer"
                size={18}
                aria-hidden="true"
              />
            )}
          </span>
        ) : null}
        {sortable && (
          <span className="sr-only">
            {sortedColumn === cellId
              ? `Column sorted in ${sortDirection}ending order`
              : "Sortable Column"}
          </span>
        )}
      </div>
      {isResizable && (
        <>
          <button
            ref={resizerToggleRef}
            onMouseDown={event => {
              if (event.button !== 0) {
                return;
              }
              event.preventDefault();
              setIsDragging(true);
            }}
            onDoubleClick={doubleClickHandler}
            onClick={() => {
              // Prevent mouse drag activation and activate keyboard dragging for VO+Space click.
              setIsDragging(false);
            }}
            onFocus={() => {
              if (!showResizer) setShowResizer(true);
              setHeaderCellWidth(getHeaderWidth(colRef.current));
              setFocusedResizerCell(cellId);
            }}
            onBlur={() => {
              setFocusedResizerCell(null);
              setIsKeyboardDragging(false);
            }}
            title={`${cellId} resizer`}
            type="button"
            {...((isDragging || isKeyboardDragging) && {
              "aria-orientation": "vertical",
              "aria-valuenow": headerCellWidth,
              "aria-valuetext": headerCellWidth.toFixed(0),
              role: "slider",
            })}
            className={twClassNames(
              "pointer-events-none absolute right-0 top-1/2 z-5 h-4 -translate-y-1/2 cursor-col-resize select-none rounded opacity-0 focus-visible:outline-offset-2 focus-visible:outline-brand-stronger",
              {
                "opacity-100 pointer-events-auto": showResizer,
                "outline-4 !outline-brand-weaker outline !outline-offset-0":
                  isDragging,
                "h-[35px]": hasMergedCells,
              }
            )}
          >
            {isKeyboardDragging
              ? KEYBOARD_DRAGGED_RESIZER()
              : DEFAULT_RESIZER(isDragging, isCurrentResizerFocused)}
          </button>

          <span
            ref={trackerRef}
            style={{
              height: `${seperatorHeight}px`,
              right: `${isKeyboardDragging ? 1 : 0}px`,
            }}
            className={twClassNames(
              "absolute top-1/2 hidden cursor-col-resize select-none",
              {
                block: isDragging || isKeyboardDragging,
              }
            )}
            role="separator"
            tabIndex={-1}
            aria-hidden={!isDragging || !isKeyboardDragging}
            aria-orientation="vertical"
          >
            {RESIZER_SEPERATOR(seperatorHeight)}
          </span>
        </>
      )}
    </CellComponent>
  );
};

TableCell.propTypes = {
  /** Align the cell content horizontally. Defaults to 'left'. */
  align: PropTypes.oneOf(Object.values(CELL_ALIGNMENT)),
  /** A unique identifier for the cell. Required if `sortable` or `isResizable` is true to manage state and interactions correctly. */
  cellId: PropTypes.string,
  /** The content to be displayed within the table cell. Can be any valid React node. */
  children: PropTypes.node,
  /** Defines the number of columns a cell should span horizontally. */
  colspan: PropTypes.number,
  /** Specifies the initial width in pixels for a resizable column header. Used for setting width before user interaction or persisting width. Only applicable when `isResizable` is true and `variant` is 'header'. */
  defaultWidth: PropTypes.number,
  /** If true, allows the column width to be adjusted by dragging a handle. Requires `cellId` and `variant="header"`. */
  isResizable: PropTypes.bool,
  /** If true, makes the cell sticky during scrolling. Typically used for header cells or specific columns. Requires appropriate CSS setup in the parent Table for positioning. */
  isSticky: PropTypes.bool,
  /** Specifies the visual style of the loading placeholder within the cell when the table is in a loading state. Only applicable when `variant` is 'body'. */
  loadingVariant: PropTypes.oneOf(Object.values(CELL_LOADING_VARIANT)),
  /** Maximum width in pixels the cell can be resized to. Only applicable when `isResizable` is true. Defaults to `Infinity`. */
  maxWidth: PropTypes.number,
  /** Minimum width in pixels the cell can be resized to. Only applicable when `isResizable` is true. Defaults to `0`. */
  minWidth: PropTypes.number,
  /** If true, renders numerical digits using a monospaced font variant for better alignment in columns with numbers. */
  monospacedDigits: PropTypes.bool,
  /** Callback function triggered when a sortable header cell is clicked. Receives the click event. */
  onSort: PropTypes.func,
  /** Callback function triggered when a resizable header cell's width is updated after dragging. Receives the new width in pixels. */
  onWidthUpdate: PropTypes.func,
  /** Defines the number of rows a cell should span vertically. Defaults to 1. */
  rowspan: PropTypes.number,
  /** Indicates the current sorting direction ('ascending' or 'descending') for a sortable header cell. Used to display the correct sort icon. Defaults to 'asc'. */
  sortDirection: PropTypes.oneOf(Object.values(CELL_DIRECTION)),
  /** If true, indicates that the column can be sorted. Adds sorting controls and interaction handlers to the header cell. Requires `cellId`. */
  sortable: PropTypes.bool,
  /** Applies CSS text transformation to the cell content. Defaults to 'inherit'. */
  textTransform: PropTypes.oneOf(Object.values(CELL_TEXT_TRANSFORM)),
  /** Specifies the type of cell, affecting styling and semantic element (`<td>` for 'body', `<th>` for 'header'). Defaults to 'body'. */
  variant: PropTypes.oneOf(Object.values(CELL_VARIANT)),
  /** An optional CSS class name to apply custom styles to the table cell element. */
  wrapperClassName: PropTypes.string,
};

TableCell.defaultProps = {
  align: CELL_ALIGNMENT.LEFT,
  cellId: "",
  children: null,
  colspan: 0,
  defaultWidth: 0,
  isResizable: false,
  isSticky: false,
  monospacedDigits: true,
  onSort: null,
  onWidthUpdate: null,
  sortDirection: CELL_DIRECTION.ASC,
  sortable: false,
  textTransform: CELL_TEXT_TRANSFORM.INHERIT,
  variant: CELL_VARIANT.BODY,
  wrapperClassName: "",
  minWidth: 0,
  maxWidth: Infinity,
  rowspan: 1,
  loadingVariant: CELL_LOADING_VARIANT.LONG_CELL,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */

export default TableCell;
