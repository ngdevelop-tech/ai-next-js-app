/**
 * @typedef {Object} ListTreeRootWrapperProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the ListTree wrapper
 * @property {Record<string, any>} filteredUUIDs? - Object containing filtered uuids after events like search
 * @property {Record<string, any>} filteredUUIDsWithHierarchy?
 */

import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { useListTreeRootWrapper } from "./useListTreeRootWrapper";

/**
 * @type {React.FC<ListTreeRootWrapperProps>}
 */
const ListTreeRootWrapper = ({
  children,
  filteredUUIDs = {
    filteredUUIDsWithHierarchy: {},
    searchedUUIDs: {},
  },
  focusIDPrefix = "",
  id = null,
  listData,
  onSelectCallback,
  openNodeMap,
  setOpenNodeMap,
}) => {
  const { wrapperRef, onKeyPress } = useListTreeRootWrapper({
    filteredUUIDs,
    focusIDPrefix,
    listData,
    onSelectCallback,
    openNodeMap,
    setOpenNodeMap,
  });
  useEffect(() => {
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [listData, onKeyPress, onSelectCallback, openNodeMap, setOpenNodeMap]);

  return (
    <div
      role="tree"
      ref={wrapperRef}
      aria-busy="true"
      className="h-full"
      {...(id !== null && { id })}
    >
      <div role="group" className="h-full">
        {children}
      </div>
    </div>
  );
};

ListTreeRootWrapper.propTypes = {
  /** Node containing the content that will be displayed within the ListTree wrapper */
  children: PropTypes.node.isRequired,
  /** Object containing filtered uuids after events like search */
  filteredUUIDs: PropTypes.shape({
    filteredUUIDsWithHierarchy: PropTypes.shape({}),
    searchedUUIDs: PropTypes.shape({}),
  }),
  /** Prefix text provided to focusable items */
  focusIDPrefix: PropTypes.string,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Array of tree data */
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
    })
  ).isRequired,
  /** Callback triggered on selecting tree level */
  onSelectCallback: PropTypes.func.isRequired,
  /** Object containing opened nodes uuuid with value true */
  openNodeMap: PropTypes.shape({}).isRequired,
  /** Callback to update open nodes map */
  setOpenNodeMap: PropTypes.func.isRequired,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-listtree--controlled-tree
 * @zeroHeight https://zeroheight.com/023d5159d/p/08d92b-list-tree/b/4635b4
 * @end
 */

export default ListTreeRootWrapper;
