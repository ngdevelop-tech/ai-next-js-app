/**
 * @typedef {Object} UnconrolledNestedTreeBaseProps
 * @property {Record<string, any>[]} data
 * @property {string} focusIDPrefix?
 * @property {number} indent?
 */

/**
 * USED FOR STORY
 * This is just an example runner function that renders,a tree,
 */

import React from "react";
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
 * @type {React.FC<UnconrolledNestedTreeBaseProps>}
 */
const UnconrolledNestedTreeBase = ({
  data,
  focusIDPrefix,
  indent = 1,
  selectedNodeMap,
  setSelectedNodeMap,
  openNodeMap,
  setOpenNodeMap,
  setFocused,
  focused = "",
}) =>
  data.map(item => (
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
        ariaLabel={item.label}
        description={`(level=${indent})`}
        focusUUID={item.uuid}
        isNodeSelected={selectedNodeMap[item.uuid]}
        focusIDPrefix={focusIDPrefix}
        onNodeClick={() => {
          const newSelectedNodeMap = { ...selectedNodeMap };
          if (selectedNodeMap[item.uuid] !== undefined) {
            newSelectedNodeMap[item.uuid] = !newSelectedNodeMap[item.uuid];
          } else {
            newSelectedNodeMap[item.uuid] = true;
          }
          setSelectedNodeMap({ ...newSelectedNodeMap });
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
        trailingVisualElement={
          <Dropdown
            onOpenChange={isOpen => {
              setFocused?.(isOpen ? item.name : null);
            }}
          >
            <DropdownTrigger wrapperClassName="p-0 border-0 shadow-transparent">
              Options
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
          <UnconrolledNestedTreeBase
            data={item.contents}
            indent={1 + indent}
            openNodeMap={openNodeMap}
            setOpenNodeMap={setOpenNodeMap}
            focused={focused}
            focusIDPrefix={focusIDPrefix}
            selectedNodeMap={selectedNodeMap}
            setSelectedNodeMap={setSelectedNodeMap}
          />
        </ListTreeNodeContents>
      )}
    </ListTree>
  ));

UnconrolledNestedTreeBase.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(DATA_ITEM_PROP_TYPES)).isRequired,
  focusIDPrefix: PropTypes.string,
  indent: PropTypes.number,
};

UnconrolledNestedTreeBase.defaultProps = {
  focusIDPrefix: "",
  indent: 1,
};

export default UnconrolledNestedTreeBase;
