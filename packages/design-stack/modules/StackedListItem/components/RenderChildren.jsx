/**
 * @typedef {Object} RenderChildrenProps
 * @property {React.ReactNode} data
 * @property {boolean} hideContentInSmallWidth - When true, the item's content will be hidden on small screen widths. This allows better display on smaller devices with limited space.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * @type {React.FC<RenderChildrenProps>}
 */
function RenderChildren({ data, hideContentInSmallWidth }) {
  return data.map((child, index) => {
    const uniqueKey = `child_${index}`;
    if (index !== 0) {
      if (hideContentInSmallWidth) {
        return (
          <span key={uniqueKey} className="hidden grow md:inline">
            {child}
          </span>
        );
      }
      return (
        <span key={uniqueKey} className="mt-3 block grow md:mt-0">
          {child}
        </span>
      );
    }
    return child;
  });
}

RenderChildren.propTypes = {
  /** The content to be displayed as the item's main content. This prop is required and must be provided.
  It can accept any React node like JSX element, or component. */
  data: PropTypes.node.isRequired,

  /** When true, the item's content will be hidden on small screen widths. This allows better display on smaller devices with limited space. */
  hideContentInSmallWidth: PropTypes.bool.isRequired,
};

export default RenderChildren;
