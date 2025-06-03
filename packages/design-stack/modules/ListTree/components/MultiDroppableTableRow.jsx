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
import { MdDragIndicator } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { useDraggable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import PropTypes from "prop-types";

import Checkbox from "../../Checkbox";
import TableCell from "../../TableCell";
import TableRow from "../../TableRow";

/**
 * @type {React.FC<DroppableTableRowProps>}
 */
const DroppableTableRow = ({
  checkboxValue,
  checkedItemsArray,
  columns,
  handleCheckboxChange,
  isCheckedItemDragged,
  isDraggable,
  row,
  rowId,
}) => {
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
    data: {
      from: "table",
    },
  });

  const modifiedDraggedItemId = isCheckedItemDragged
    ? checkedItemsArray.includes(rowId.toString())
    : isDragging;

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
        "opacity-50": modifiedDraggedItemId,
      })}
    >
      {rowId && isDraggable && (
        <td className="m-auto flex h-12 items-center justify-center">
          <div
            {...attributes}
            {...listeners}
            {...draggableAttributes}
            {...draggableListeners}
            className={twClassNames({
              "outline-none": modifiedDraggedItemId,
            })}
          >
            <div
              className={twClassNames({
                "cursor-grab": !modifiedDraggedItemId,
                "cursor-grabbing": modifiedDraggedItemId,
              })}
            >
              <MdDragIndicator
                height={20}
                width={20}
                className="icon-neutral-weaker"
                aria-label="drag-handle"
              />
            </div>
          </div>
          <Checkbox
            wrapperClassName=""
            border={false}
            name={row.id.toString()}
            aria-label={row.id}
            onChange={handleCheckboxChange}
            value={checkboxValue}
            increaseTapArea
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
          >
            {column.cell ? <>{column.cell(row)}</> : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

DroppableTableRow.propTypes = {
  checkboxValue: PropTypes.bool.isRequired,
  checkedItemsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      isSortable: PropTypes.bool,
      key: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  handleCheckboxChange: PropTypes.func.isRequired,
  isCheckedItemDragged: PropTypes.bool.isRequired,
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
