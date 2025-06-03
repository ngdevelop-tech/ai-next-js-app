/**
 * @typedef {Object} ControlledNestedTreeWithCheckboxProps
 * @property {boolean} allowFilter
 * @property {Record<string, any>[]} data
 * @property {Record<string, any>} filteredUUIDs?
 * @property {Record<string, any>} filteredUUIDsWithHierarchy?
 */

/**
 * USED FOR STORY
 * This is just an example runner function that renders,a tree,
 */

import React from "react";
import { MdFolderSpecial } from "react-icons/md";
import PropTypes from "prop-types";

import Checkbox from "../../Checkbox";
import ListTreeNode from "../../ListTreeNode";
import ListTreeNodeContents from "../../ListTreeNodeContents";
import { DATA_ITEM_PROP_TYPES } from "../constants/listTreeStories";
import ListTree from "../index";

/**
 * @type {React.FC<ControlledNestedTreeWithCheckboxProps>}
 */
const ControlledNestedTreeWithCheckbox = ({
  data,
  openNodeMap,
  setOpenNodeMap,
  searchValue,
  filteredUUIDs,
  allowFilter,
  onCheckboxChange,
  isParentSearched,
  focusIDPrefix,
  indent = 1,
}) =>
  data?.map(item => {
    if (
      allowFilter &&
      !filteredUUIDs.filteredUUIDsWithHierarchy[item.uuid] &&
      !isParentSearched
    ) {
      return null;
    }
    const startIndex = item.name.indexOf(searchValue);
    const endIndex = startIndex + searchValue.length;
    return (
      <ListTree
        id={item.uuid}
        key={item.uuid}
        indentationLevel={indent}
        isTreeOpen={openNodeMap[item.uuid]}
      >
        <ListTreeNode
          id={`${item.uuid}-node`}
          wrapperClassName="min-w-[250px]"
          isNodeOpen={openNodeMap[item.uuid]}
          nodeLabelClassName="w-full"
          showIcon={false}
          ariaLabel="Label"
          focusUUID={item.uuid}
          focusIDPrefix={focusIDPrefix}
          label={
            <Checkbox
              isFullWidthLabel
              data={{
                label: (
                  <>
                    <MdFolderSpecial className="mr-2 inline-block h-5 w-5 shrink-0 select-none icon-sky-400 dark:icon-sky-600" />
                    <span className="mr-2 text-xs leading-5 text-neutral-weak">
                      {searchValue.length && startIndex !== -1 ? (
                        <>
                          {item.name.slice(0, startIndex)}
                          <mark>{item.name.slice(startIndex, endIndex)}</mark>
                          {item.name.slice(endIndex, item.name.length)}
                        </>
                      ) : (
                        item.name
                      )}
                    </span>
                  </>
                ),
                value: item.uuid,
              }}
              border={false}
              indeterminate={item.isIndeterminate}
              checked={item.isChecked}
              onChange={() => {
                onCheckboxChange(!item.isChecked, item.uuid);
              }}
              wrapperClassName="py-0"
            />
          }
          isNodeSelectable={false}
          description={`(${indent})`}
          hideArrowIcon={!item.contents?.length}
          onNodeOpen={() => {
            const newOpenNodeMap = { ...openNodeMap };
            if (newOpenNodeMap[item.uuid] !== undefined) {
              newOpenNodeMap[item.uuid] = !openNodeMap[item.uuid];
            } else {
              newOpenNodeMap[item.uuid] = true;
            }
            setOpenNodeMap({ ...newOpenNodeMap });
          }}
          isNodeSelected={false}
          isFocused={false}
          leadingIcon={<></>}
        />
        {!!item?.contents && (
          <ListTreeNodeContents isTreeOpen={openNodeMap[item.uuid]}>
            <ControlledNestedTreeWithCheckbox
              openNodeMap={openNodeMap}
              setOpenNodeMap={setOpenNodeMap}
              onCheckboxChange={onCheckboxChange}
              filteredUUIDs={filteredUUIDs}
              allowFilter={allowFilter}
              data={item.contents}
              searchValue={searchValue}
              isParentSearched={
                !!filteredUUIDs.searchedUUIDs[item.uuid] || !!isParentSearched
              }
              focusIDPrefix={focusIDPrefix}
              indent={1 + indent}
            />
          </ListTreeNodeContents>
        )}
      </ListTree>
    );
  });

ControlledNestedTreeWithCheckbox.propTypes = {
  allowFilter: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape(DATA_ITEM_PROP_TYPES)).isRequired,
  filteredUUIDs: PropTypes.shape({
    filteredUUIDsWithHierarchy: PropTypes.shape({}).isRequired,
    searchedUUIDs: PropTypes.shape({}).isRequired,
  }).isRequired,
  focusIDPrefix: PropTypes.string,
  indent: PropTypes.number,
  isParentSearched: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

ControlledNestedTreeWithCheckbox.defaultProps = {
  focusIDPrefix: "",
  indent: 1,
};

export default ControlledNestedTreeWithCheckbox;
