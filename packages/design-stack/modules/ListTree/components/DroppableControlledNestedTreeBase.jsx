/**
 * @typedef {Object} DroppableControlledNestedTreeBaseProps
 * @property {any} data?
 * @property {any} uuid?
 */

/**
 * USED FOR STORY
 * This is just an example component that renders wrapper of of draggable listTree node,
 */

import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { ListTreeDroppable } from "../../ListTreeNode/ListTreeDroppable";

export const DroppableControlledNestedTreeBase = forwardRef(
  ({ data, ...props }, ref) =>
    data.map((item, index) => (
      <ListTreeDroppable
        key={item.uuid}
        item={item}
        index={index}
        {...props}
        ref={ref}
      />
    ))
);

DroppableControlledNestedTreeBase.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
};
