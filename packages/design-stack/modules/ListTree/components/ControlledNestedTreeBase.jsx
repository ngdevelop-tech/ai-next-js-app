/**
 * @typedef {Object} ControlledNestedTreeBaseProps
 * @property {Record<string, any>[]} data
 * @property {string} focusIDPrefix?
 * @property {number} indent?
 */

/**
 * USED FOR STORY
 * This is just an example runner function that renders,a tree,
 * recursively, using our DS components, using the given dummy dataset,
 * it uses DFS by default, feel free to re-use this in your product implementation
 */

import React from "react";
import { MdFolderSpecial, MdMoreVert } from "react-icons/md";
import PropTypes from "prop-types";

import Dropdown from "../../Dropdown";
import DropdownOptionGroup from "../../DropdownOptionGroup";
import DropdownOptionItem from "../../DropdownOptionItem";
import DropdownTrigger from "../../DropdownTrigger";
import ListTreeNode from "../../ListTreeNode";
import ListTreeNodeContents from "../../ListTreeNodeContents";
import {
  DATA_ITEM_PROP_TYPES,
  DROPDOWN_OPTIONS,
} from "../constants/listTreeStories";
import ListTree from "../index";

/**
 * @type {React.FC<ControlledNestedTreeBaseProps>}
 */
const ControlledNestedTreeBase = ({
  data,
  openNodeMap,
  setOpenNodeMap,
  selectedNodeMap,
  setSelectedNodeMap,
  setFocused,
  indent = 1,
  focused = "",
  focusIDPrefix,
}) =>
  data.map((item, index) => (
    <ListTree
      id={item.uuid}
      key={item.uuid}
      indentationLevel={indent}
      isTreeOpen={openNodeMap[item.uuid]}
    >
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
        trailingVisualElement={
          <Dropdown
            onOpenChange={isOpen => {
              setFocused?.(isOpen ? item.name : null);
            }}
          >
            <DropdownTrigger wrapperClassName="p-0 border-0 shadow-transparent">
              <MdMoreVert className="h-5 w-5" />
            </DropdownTrigger>
            <DropdownOptionGroup>
              {DROPDOWN_OPTIONS.map(op => (
                <DropdownOptionItem key={op.id} option={op} />
              ))}
            </DropdownOptionGroup>
          </Dropdown>
        }
      />
      {!!item?.contents && (
        <ListTreeNodeContents isTreeOpen={openNodeMap[item.uuid]}>
          <ControlledNestedTreeBase
            openNodeMap={openNodeMap}
            setOpenNodeMap={setOpenNodeMap}
            selectedNodeMap={selectedNodeMap}
            setSelectedNodeMap={setSelectedNodeMap}
            data={item.contents}
            focused={focused}
            setFocused={setFocused}
            indent={1 + indent}
            focusIDPrefix={focusIDPrefix}
          />
        </ListTreeNodeContents>
      )}
    </ListTree>
  ));

ControlledNestedTreeBase.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(DATA_ITEM_PROP_TYPES)).isRequired,
  focusIDPrefix: PropTypes.string,
  indent: PropTypes.number,
};

ControlledNestedTreeBase.defaultProps = {
  focusIDPrefix: "",
  indent: 1,
};

export default ControlledNestedTreeBase;
