/**
 * @typedef {Object} DraggableControlledNestedTreeBaseProps
 * @property {any} data?
 * @property {any} uuid?
 */

/**
 * USED FOR STORY
 * This is just an example component that renders wrapper of of draggable listTree node,
 */

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { ListTreeDraggable } from "../../ListTreeNode/ListTreeDraggable";

export const DraggableControlledNestedTreeBase = forwardRef(
  ({ data, ...props }, ref) =>
    data.map((item, index) => (
      <ListTreeDraggable
        key={item.uuid}
        item={item}
        index={index}
        {...props}
        ref={ref}
      />
    ))
);

DraggableControlledNestedTreeBase.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
};
