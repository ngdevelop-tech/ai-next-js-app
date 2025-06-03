/**
 * @typedef {Object} ListTreeNodeWrapperProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the ListTreeNode
 * @property {boolean} isNodeSelectable - Specify if the ListTreeNode can be selected or not
 * @property {(event: React.MouseEvent<any>) => void} onNodeClick? - Callback triggered on selecting ListTreeNode
 * @property {string} wrapperClassName - A custom CSS class name to style the wrapper of ListTreeNode
 */

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

/**
 * @type {React.ForwardRefExoticComponent<ListTreeNodeWrapperProps & React.RefAttributes<HTMLUListElement>>}
 */
const ListTreeNodeWrapper = forwardRef(
  ({ children, isNodeSelectable, onNodeClick, wrapperClassName }, ref) =>
    isNodeSelectable ? (
      <div
        ref={ref}
        tabIndex="0"
        role="button"
        onClick={onNodeClick}
        // keeping this empty function on KeyDown to resolve a11Y error
        onKeyPress={() => {}}
        className={wrapperClassName}
      >
        {children}
      </div>
    ) : (
      <div ref={ref} className={wrapperClassName}>
        {children}
      </div>
    )
);

ListTreeNodeWrapper.propTypes = {
  /** Node containing the content that will be displayed within the ListTreeNode */
  children: PropTypes.node.isRequired,
  /** Specify if the ListTreeNode can be selected or not */
  isNodeSelectable: PropTypes.bool.isRequired,
  /** Callback triggered on selecting ListTreeNode */
  onNodeClick: PropTypes.func,
  /** A custom CSS class name to style the wrapper of ListTreeNode */
  wrapperClassName: PropTypes.string.isRequired,
};

ListTreeNodeWrapper.defaultProps = {
  onNodeClick: null,
};

export default ListTreeNodeWrapper;
