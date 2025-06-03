/**
 * @typedef {Object} TableHeadProps
 * @property {React.ReactNode} children? - Content to be rendered within Table head
 * @property {string} wrapperClassName? - A custom CSS class name to style the table head.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * @type {React.FC<TableHeadProps>}
 */
const TableHead = ({ children = null, wrapperClassName = "" }) => (
  <thead className={`bg-neutral-default ${wrapperClassName}`}>{children}</thead>
);

TableHead.propTypes = {
  /** Content to be rendered within Table head */
  children: PropTypes.node,
  /** A custom CSS class name to style the table head. */
  wrapperClassName: PropTypes.string,
};
TableHead.defaultProps = {
  children: null,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */

export default TableHead;
