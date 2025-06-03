/**
 * @typedef {Object} ListTreeDraggableProps
 * @property {any} focusIDPrefix?
 * @property {string} focused?
 * @property {number} indent?
 * @property {any} index?
 * @property {Record<string, any>} item?
 * @property {any} contents?
 */

/**
 * USED FOR STORY
 * This is just an example component that renders a draggable list tree,
 */

import React, { useContext, useRef } from "react";
import { MdFolderSpecial } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { useDndMonitor } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import PropTypes from "prop-types";

import { ListTree, ListTreeNode, ListTreeNodeContents } from "../../../index";
import { DraggableControlledNestedTreeBase } from "../../ListTree/components/DraggableControlledNestedTreeBase";
import { TreeContext } from "../../ListTree/listTreeStoriesUtils";

const animateLayoutChanges = ({ isSorting, wasDragging }) =>
  !(isSorting || wasDragging);

export const ListTreeDraggable = ({
  item,
  openNodeMap,
  setOpenNodeMap,
  selectedNodeMap,
  setSelectedNodeMap,
  setFocused,
  indent = 1,
  focused = "",
  focusIDPrefix,
  index,
  popoverElement,
}) => {
  const activeRef = useRef();
  const overRef = useRef();
  const isHovering = useRef();
  const hoverFrom = useRef();

  const {
    isOver,
    attributes,
    listeners,
    isDragging,
    active,
    over,
    transform,
    transition,
    setDraggableNodeRef,
    setDroppableNodeRef,
    activeIndex,
  } = useSortable({
    id: item.uuid,
    animateLayoutChanges,
    data: {
      from: "list",
      hoveredOver: overRef,
      isHovering,
    },
  });

  const style = {
    transition,
    transform: transform
      ? `translate3d(${transform.x ? Math.round(transform.x) : 0}px, ${
          transform.y ? Math.round(transform.y) : 0
        }px, 0) scaleX(${transform.scaleX}) scaleY(${transform.scaleY})`
      : "",
  };

  // DND Monitor to monitor dnd context states for different drag behaviours
  useDndMonitor({
    onDragStart: el => {
      if (el.active.id && el.active.data.current.from === "list") {
        setOpenNodeMap(prevNodeMap => ({
          ...prevNodeMap,
          [el.active.id]: false,
        }));
        activeRef.current = openNodeMap[el.active.id] ?? false;
      }
    },
    onDragEnd: el => {
      if (el.active.data.current.from === "list") {
        if (activeRef.current) {
          setOpenNodeMap(prevNodeMap => ({
            ...prevNodeMap,
            [el.active.id]: true,
          }));
        } else {
          setOpenNodeMap(prevNodeMap => ({
            ...prevNodeMap,
            [el.active.id]: false,
          }));
        }
      }
      isHovering.current = false;
    },
    onDragOver: el => {
      if (el.active.data.current.from === "table") {
        hoverFrom.current = true;
        isHovering.current = false;
        return;
      }
      hoverFrom.current = false;
    },
    onDragMove: ({ over: overEl, active: activeEl }) => {
      // this calculates the node center -+ 5 bounds and makes the hovering state true when the cursor is in those bounds
      let draggableCenterY;
      if (activeEl.rect.current.translated) {
        draggableCenterY =
          activeEl.rect.current.translated?.top +
          activeEl.rect.current.translated?.height / 2;
      }
      let overCenterY;
      if (overEl) {
        overCenterY = overEl.rect.top + overEl.rect.height / 2;
      }

      if (
        draggableCenterY <= overCenterY + 5 &&
        draggableCenterY >= overCenterY - 5 &&
        activeEl.id !== overEl.id
      ) {
        isHovering.current = true;
      } else {
        isHovering.current = false;
      }
    },
  });

  const PopoverElement = popoverElement;

  const projectionContext = useContext(TreeContext);

  // gets the current projection depth and calculates the identation padding
  const getPad = () => {
    // If item is being dragged
    if (active && active.id === item.uuid) {
      // If projection indicates root level (parentId is null), return 0 padding
      if (projectionContext?.parentId === null) {
        return 0;
      }
      // Otherwise use projected depth * indentation width
      return Math.max(projectionContext?.depth * 16, 1);
    }
    // For non-dragged items, use default indent
    return indent * 16;
  };

  return (
    <>
      <ListTree
        id={`${item.uuid}-base`}
        key={item.uuid}
        indentationLevel={indent}
        isTreeOpen={openNodeMap[item.uuid]}
      >
        <PopoverElement
          itemId={item.uuid}
          trigger={
            <ListTreeNode
              Draggable
              wrapperRef={setDroppableNodeRef}
              ref={setDraggableNodeRef}
              isDragging={isDragging}
              over={over}
              activeIndex={activeIndex}
              isOver={isOver}
              active={active}
              isHovering={isHovering.current}
              transform={transform}
              attributes={attributes}
              listeners={listeners}
              id={`${item.uuid}-node`}
              isFocused={focused ? focused === item.uuid : false}
              label={item.name}
              focusUUID={item.uuid}
              ariaLabel={item.label}
              description={`(level=${indent})`}
              isNodeSelected={selectedNodeMap[item.uuid]}
              focusIDPrefix={focusIDPrefix}
              onNodeClick={() => {
                const newSelectedNodeMap = { ...selectedNodeMap };
                if (newSelectedNodeMap[item.uuid] !== undefined) {
                  newSelectedNodeMap[item.uuid] =
                    !newSelectedNodeMap[item.uuid];
                } else {
                  newSelectedNodeMap[item.uuid] = true;
                }
                setSelectedNodeMap(newSelectedNodeMap);
              }}
              onNodeOpen={() => {
                const newOpenNodeMap = { ...openNodeMap };
                if (newOpenNodeMap[item.uuid] !== undefined) {
                  newOpenNodeMap[item.uuid] = !newOpenNodeMap[item.uuid];
                } else {
                  newOpenNodeMap[item.uuid] = true;
                }
                setOpenNodeMap(newOpenNodeMap);
              }}
              isNodeOpen={openNodeMap[item.uuid]}
              hideArrowIcon={!item?.contents?.length}
              leadingIcon={
                index % 2 === 0 && <MdFolderSpecial className="h-full w-full" />
              }
              itemWrapperClassName="w-full"
              wrapperClassName={twClassNames({
                "hover:pointer-events-none pointer-events-none": isDragging,
                "border border-brand-stronger bg-brand-weakest":
                  isOver &&
                  over &&
                  over.id === item.uuid &&
                  active &&
                  active.id !== item.uuid &&
                  isHovering.current,
                "border-brand-stronger border bg-brand-weakest":
                  isOver && hoverFrom.current && !isHovering.current,
              })}
              styles={{ ...style, paddingLeft: `${getPad()}px` }}
            />
          }
        />
        {!!item?.contents && (
          <ListTreeNodeContents isTreeOpen={openNodeMap[item.uuid]}>
            <DraggableControlledNestedTreeBase
              openNodeMap={openNodeMap}
              setOpenNodeMap={setOpenNodeMap}
              selectedNodeMap={selectedNodeMap}
              setSelectedNodeMap={setSelectedNodeMap}
              data={item.contents}
              focused={focused}
              setFocused={setFocused}
              indent={1 + indent}
              focusIDPrefix={focusIDPrefix}
              popoverElement={popoverElement}
              // styles={style}
            />
          </ListTreeNodeContents>
        )}
      </ListTree>
    </>
  );
};

ListTreeDraggable.propTypes = {
  focusIDPrefix: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  focused: PropTypes.string,
  indent: PropTypes.number,
  index: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  item: PropTypes.shape({
    contents: PropTypes.arrayOf(PropTypes.shape({})),
    label: PropTypes.string,
    name: PropTypes.node,
    uuid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  openNodeMap: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  popoverElement: PropTypes.func,
  selectedNodeMap: PropTypes.shape({}),
  setFocused: PropTypes.func,
  setOpenNodeMap: PropTypes.func,
  setSelectedNodeMap: PropTypes.func,
};

ListTreeDraggable.defaultProps = {
  item: {},
  openNodeMap: {},
  setOpenNodeMap: () => {},
  selectedNodeMap: {},
  setSelectedNodeMap: () => {},
  setFocused: () => {},
  indent: 2,
  focused: "",
  focusIDPrefix: "",
  index: 0,
  popoverElement: () => {},
};
