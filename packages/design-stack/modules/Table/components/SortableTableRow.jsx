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
import { MdDragHandle } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { useSortable } from "@dnd-kit/sortable";
import PropTypes from "prop-types";

import TableCell from "../../TableCell";
import TableRow from "../../TableRow";

/**
 * @type {React.FC<SortableTableRowProps>}
 */
const SortableTableRow = ({
  rowId = null,
  row = {},
  columns = [],
  isDraggable = false,
}) => {
  const { attributes, listeners, setNodeRef, isDragging, over, transform } =
    useSortable({
      id: rowId,
    });

  return (
    <TableRow
      ref={setNodeRef}
      wrapperClassName={twClassNames({
        "!border-b-2 !border-brand-stronger !border-t-0":
          over?.id === rowId && transform?.y < 0, //  if we have a negative y value it indicates that we are moving downward vertically
        "!border-t-2 !border-brand-stronger !border-b-0":
          over?.id === rowId && transform?.y > 0,
        "opacity-50": isDragging,
      })}
      {...(rowId !== null && { id: `${rowId}` })}
    >
      {rowId && isDraggable && (
        <td
          {...attributes}
          {...listeners}
          className={twClassNames({
            "outline-none": isDragging,
          })}
          role="cell"
        >
          <MdDragHandle
            aria-label="Drag handle"
            className={twClassNames("ml-3 h-6 w-6 icon-neutral-weak", {
              "cursor-grab": !isDragging,
              "cursor-grabbing": isDragging,
            })}
          />
        </td>
      )}
      {columns.map((column, colIdx) => {
        const value = row[column.key];

        return (
          <TableCell
            key={column.key}
            wrapperClassName={
              colIdx === 0
                ? "text-neutral-default font-medium"
                : "text-neutral-weaker"
            }
            loadingVariant={column.loadingVariant}
          >
            {column.cell ? <>{column.cell(row)}</> : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

SortableTableRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      isSortable: PropTypes.bool,
      key: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  isDraggable: PropTypes.bool,
  row: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    role: PropTypes.string,
    title: PropTypes.string,
  }),
  rowId: PropTypes.number,
};

export default SortableTableRow;
