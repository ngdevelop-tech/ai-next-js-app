/**
 * @typedef {Object} ListTreeDroppableProps
 * @property {any} focusIDPrefix?
 * @property {string} focused?
 * @property {number} indent?
 * @property {any} index?
 * @property {Record<string, any>} item?
 * @property {any} contents?
 */

/**
 * USED FOR STORY
 * This is just an example component that renders a draggable table row,
 */

import React from "react";
import { MdFolderSpecial } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { useDroppable } from "@dnd-kit/core";
import PropTypes from "prop-types";

import { ListTree, ListTreeNode, ListTreeNodeContents } from "../../../index";
import { DroppableControlledNestedTreeBase } from "../../ListTree/components/DroppableControlledNestedTreeBase";

export const ListTreeDroppable = ({
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
  const { isOver, setNodeRef } = useDroppable({
    id: item.uuid,
  });

  const PopoverElement = popoverElement;

  return (
    <ListTree
      id={`${item.uuid}-base`}
      key={item.uuid}
      indentationLevel={indent}
      isTreeOpen={openNodeMap[item.uuid]}
      ref={setNodeRef}
    >
      <PopoverElement
        itemId={item.uuid}
        trigger={
          <ListTreeNode
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
                newSelectedNodeMap[item.uuid] = !newSelectedNodeMap[item.uuid];
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
            hideArrowIcon={!item.contents?.length}
            leadingIcon={
              index % 2 === 0 && <MdFolderSpecial className="h-full w-full" />
            }
            itemWrapperClassName="w-full"
            wrapperClassName={twClassNames({
              "border-brand-strong": isOver,
            })}
          />
        }
      />
      {!!item?.contents && (
        <ListTreeNodeContents isTreeOpen={openNodeMap[item.uuid]}>
          <DroppableControlledNestedTreeBase
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
          />
        </ListTreeNodeContents>
      )}
    </ListTree>
  );
};

ListTreeDroppable.propTypes = {
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

ListTreeDroppable.defaultProps = {
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
