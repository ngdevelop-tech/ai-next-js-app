/**
 * @typedef {Object} DroppableTableRowProps
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
import { MdDragIndicator } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import PropTypes from "prop-types";

import TableCell from "../../TableCell";
import TableRow from "../../TableRow";

/**
 * @type {React.FC<DroppableTableRowProps>}
 */
const DroppableTableRow = ({ rowId, row, columns, isDraggable }) => {
  const { attributes, listeners, setNodeRef, isDragging, over, transform } =
    useSortable({
      id: rowId,
    });

  const {
    attributes: draggableAttributes,
    listeners: draggableListeners,
    setNodeRef: setDraggableNodeRef,
  } = useDraggable({
    id: rowId,
  });

  return (
    <TableRow
      ref={el => {
        setNodeRef(el);
        setDraggableNodeRef(el);
      }}
      wrapperClassName={twClassNames({
        "!border-b-2 !border-brand-stronger !border-t-0":
          over?.id === rowId && transform?.y < 0, //  if we have a negative y value it indicates that we are moving downward vertically
        "!border-t-2 !border-brand-stronger !border-b-0":
          over?.id === rowId && transform?.y > 0,
        "opacity-50": isDragging,
      })}
    >
      {rowId && isDraggable && (
        <td
          {...attributes}
          {...listeners}
          {...draggableAttributes}
          {...draggableListeners}
          className={twClassNames({
            "outline-none": isDragging,
          })}
        >
          <div
            className={twClassNames("ml-3", {
              "cursor-grab": !isDragging,
              "cursor-grabbing": isDragging,
            })}
          >
            <MdDragIndicator
              height={20}
              width={20}
              aria-label="drag-handle"
              className="icon-neutral-weaker"
            />
          </div>
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
          >
            {column.cell ? <>{column.cell(row)}</> : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

DroppableTableRow.propTypes = {
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

DroppableTableRow.defaultProps = {
  columns: [],
  rowId: null,
  row: {},
  isDraggable: false,
};

export default DroppableTableRow;
