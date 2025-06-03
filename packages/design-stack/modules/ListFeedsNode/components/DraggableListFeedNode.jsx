/**
 * @typedef {Object} DraggableListFeedNodeProps
 * @property {Record<string, any>} args?
 */

/**
 * USED FOR STORY
 * This is just an example component that renders a draggable ListFeedNode
 */
import React from "react";
import { MdDragIndicator } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { useSortable } from "@dnd-kit/sortable";
import PropTypes from "prop-types";

import Badge from "../../Badge";
import { NATHAN_TEXT } from "../constants/listFeedsNodeStories";
import ListFeedsNode from "../index";

/**
 * @type {React.FC<DraggableListFeedNodeProps>}
 */
const DraggableListFeedNode = ({ el = {}, args = {} }) => {
  const { attributes, listeners, setNodeRef, isDragging, over, transform } =
    useSortable({
      id: el.id,
    });

  return (
    <ListFeedsNode
      {...args}
      key={el.feedNumber}
      feedNumber={
        <div
          {...attributes}
          {...listeners}
          aria-label="drag-handle"
          className={twClassNames({
            "cursor-grab": !isDragging,
            "cursor-grabbing": isDragging,
          })}
        >
          <MdDragIndicator className="icon-neutral-strongest" />
        </div>
      }
      headerNode={
        <>
          <div className="flex">
            <div className="text-sm text-neutral-weaker">
              <b className="text-neutral-default">{`${NATHAN_TEXT}-${el.feedNumber}`}</b>{" "}
              added a T result:&nbsp;
            </div>
            <Badge size="basic" text="Passed" modifier="success" />
          </div>
          <div className="text-sm text-neutral-weaker">
            Jan 26, 2023 | 3:20 PM (IST)
          </div>
        </>
      }
      ref={setNodeRef}
      wrapperClassName={twClassNames(
        {
          "opacity-50": isDragging,
          "!border-b-2 !border-brand-stronger !border-t-0":
            over?.id === el.id && transform?.y < 0, //  if we have a negative y value it indicates that we are moving downward vertically
          "!border-t-2 !border-brand-stronger !border-b-0":
            over?.id === el.id && transform?.y > 0,
        },
        args.wrapperClassName
      )}
    />
  );
};

DraggableListFeedNode.propTypes = {
  args: PropTypes.shape({ wrapperClassName: PropTypes.string }),
  el: PropTypes.shape({
    feedNumber: PropTypes.number,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
};

export default DraggableListFeedNode;
