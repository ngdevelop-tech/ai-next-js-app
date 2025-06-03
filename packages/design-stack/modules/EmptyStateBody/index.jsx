/**
 * @typedef {Object} EmptyStateBodyProps
 * @property {React.ReactNode} children - The child elements of the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBordered? - Determines if the body has top and bottom border
 * @property {any} layout? - Determines the layout for the EmptyStateBody. Variants can be 'singleColumnLayout' and 'twoColumnLayout'
 * @property {string} title? - Title for the EmptyStateBody component
 * @property {string} wrapperClassName? - Additional style class names to EmptyStateBody component
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { LAYOUT } from "../EmptyState/constants/emptyState";

/**
 * @type {React.FC<EmptyStateBodyProps>}
 */
const EmptyStateBody = ({
  children,
  id = null,
  isBordered = false,
  layout = LAYOUT.TWO_COLUMN,
  title = "",
  wrapperClassName = "",
}) => (
  <div
    className={twClassNames("mt-10", wrapperClassName)}
    {...(id !== null && { id })}
  >
    {title && (
      <h3 className="mb-4 text-sm font-medium leading-4 text-neutral-weaker">
        {title}
      </h3>
    )}
    <ul
      className={twClassNames({
        "border-y py-4 border-neutral-default": isBordered,
        "divide-y divide-neutral-default": LAYOUT.SINGLE_COLUMN === layout,
        "grid grid-cols-1 gap-6 sm:grid-cols-2": LAYOUT.TWO_COLUMN === layout,
      })}
    >
      {children}
    </ul>
  </div>
);

EmptyStateBody.propTypes = {
  /** The child elements of the component */
  children: PropTypes.node.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Determines if the body has top and bottom border */
  isBordered: PropTypes.bool,
  /** Determines the layout for the EmptyStateBody. Variants can be 'singleColumnLayout' and 'twoColumnLayout' */
  layout: PropTypes.oneOf(Object.values(LAYOUT)),
  /** Title for the EmptyStateBody component */
  title: PropTypes.string,
  /** Additional style class names to EmptyStateBody component */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */

export default EmptyStateBody;
