import { useContext, useEffect, useRef, useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";

import { KEYBOARD_KEYS } from "../../shared/keyEnums";
import { TableContextData } from "../Table/context";
import { TableRowContextData } from "../TableRow/context";

import {
  CELL_DIRECTION,
  CELL_VARIANT,
  RESIZER_OFFSET,
} from "./constant/tableCell";

export const getHeaderWidth = (ele, minw, maxw) => {
  const styles = window.getComputedStyle(ele);
  return Math.min(Math.max(parseInt(styles.width, 10), minw), maxw);
};

function useTableCell(
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
  monospacedDigits,
  compressedHeaderDisplayStyles
) {
  const colRef = useRef(null);
  const trackerRef = useRef(null);
  const resizerToggleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const [isKeyboardDragging, setIsKeyboardDragging] = useState(false);
  const [headerCellWidth, setHeaderCellWidth] = useState(0);
  const [seperatorHeight, setSeperatorHeight] = useState(0);

  const {
    setSortedColumn,
    sortedColumn,
    controlledSortedColumnId,
    tableRef,
    setShowResizer,
    setSortDirection,
    isMultiLineTable,
    isResizableTableCells,
  } = useContext(TableContextData);

  const handleSort = () => {
    const direction =
      sortDirection === CELL_DIRECTION.DESC
        ? CELL_DIRECTION.ASC
        : CELL_DIRECTION.DESC;
    onSort(direction);
    setSortDirection(direction);
    if (!controlledSortedColumnId) {
      setSortedColumn(cellId);
    }
  };

  const sortAttrs = sortable &&
    onSort && {
      role: "button",
      onClick: handleSort,
      onKeyDown: e => {
        if ([KEYBOARD_KEYS.ENTER, "Space"].includes(e.code)) handleSort();
      },
      tabIndex: 0,
    };

  const { setIsHeaderRow } = useContext(TableRowContextData);

  useEffect(() => {
    const elements = {
      header: colRef.current || {},
      table: tableRef.current || {},
      tracker: trackerRef.current || {},
    };

    const updateColumnWidth = newWidth => {
      const updatedWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);
      // in case,the column text wraps in new line update seperator height
      if (tableRef?.current?.offsetHeight !== seperatorHeight)
        setSeperatorHeight(tableRef?.current?.offsetHeight);
      setHeaderCellWidth(updatedWidth);
      onWidthUpdate?.(updatedWidth);
    };

    const resizeColumn = offset => {
      const cellLeft = elements.header.getBoundingClientRect().left;
      const newWidth = offset - cellLeft;
      updateColumnWidth(newWidth);
    };

    const onMouseMove = event => {
      const offset = event.pageX;
      resizeColumn(offset + RESIZER_OFFSET);
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onKeyDown = event => {
      event.stopPropagation();
      if (isKeyboardDragging) {
        event.preventDefault();
        // Update width
        switch (event.key) {
          case KEYBOARD_KEYS.ARROW_LEFT: {
            const newWidth = elements.header.getBoundingClientRect().width - 10;
            const updatedWidth = Math.min(
              Math.max(newWidth, minWidth),
              maxWidth
            );
            updateColumnWidth(updatedWidth);
            onWidthUpdate?.(updatedWidth);
            break;
          }
          case KEYBOARD_KEYS.ARROW_RIGHT: {
            const newWidth = elements.header.getBoundingClientRect().width + 10;
            const updatedWidth = Math.min(
              Math.max(newWidth, minWidth),
              maxWidth
            );
            updateColumnWidth(updatedWidth);
            onWidthUpdate?.(updatedWidth);
            break;
          }
          // Exit keyboard dragging mode
          case KEYBOARD_KEYS.ESCAPE: {
            setIsKeyboardDragging(false);
            resizerToggleRef.current?.focus();
            break;
          }
          default:
            break;
        }
      }
      // Enter keyboard dragging mode
      else if (
        event.key === KEYBOARD_KEYS.ENTER ||
        event.key === KEYBOARD_KEYS.SPACE
      ) {
        event.preventDefault();
        setIsKeyboardDragging(true);
        setShowResizer(true);
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }

    if (isCurrentResizerFocused) {
      elements.header.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document?.removeEventListener("mousemove", onMouseMove);
      document?.removeEventListener("mouseup", onMouseUp);
      elements.header?.removeEventListener("keydown", onKeyDown);
    };
  }, [
    isDragging,
    minWidth,
    maxWidth,
    isKeyboardDragging,
    isCurrentResizerFocused,
    tableRef,
    trackerRef,
    colRef,
    onWidthUpdate,
    setShowResizer,
    seperatorHeight,
  ]);

  useEffect(() => {
    if (isResizable && tableRef.current)
      setSeperatorHeight(tableRef?.current?.offsetHeight);
  }, [tableRef, isResizable]);

  useEffect(() => {
    const changeLastHeaderColumnWidth = () => {
      if (tableRef.current) {
        const thead = tableRef.current.querySelector("thead");
        if (thead) {
          const lastTd = thead.querySelector("tr:last-child td:last-child");
          if (lastTd) {
            lastTd.style.width = "auto";
          }
        }
      }
    };
    if (isDragging || isKeyboardDragging) {
      changeLastHeaderColumnWidth();
    }
  }, [isDragging, isKeyboardDragging, tableRef]);

  useEffect(() => {
    setIsHeaderRow(variant === CELL_VARIANT.HEADER);
    setHeaderCellWidth(getHeaderWidth(colRef.current, minWidth, maxWidth));
  }, [variant, setIsHeaderRow, minWidth, maxWidth]);

  const cellContentClassName = twClassNames(
    {
      "inline-flex  cursor-pointer items-center": sortable,
      "tabular-nums": monospacedDigits,
      // adding padding to resolve focus ring clipping and negative margin to restore the original size
      "p-1 -m-1": isResizableTableCells,
      "line-clamp-1 break-all": isResizableTableCells && !isMultiLineTable,
    },
    compressedHeaderDisplayStyles
  );

  return {
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
  };
}

export default useTableCell;
