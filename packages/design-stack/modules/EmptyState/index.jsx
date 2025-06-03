/**
 * @typedef {Object} EmptyStateProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the EmptyState component.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<EmptyStateProps>}
 */
const EmptyState = ({ children, wrapperClassName = "", id = null }) => (
  <div
    className={twClassNames("mx-auto max-w-md sm:max-w-3xl", wrapperClassName)}
    {...(id !== null && { id })}
  >
    {children}
  </div>
);

EmptyState.propTypes = {
  /** Node containing the content that will be displayed within the component */
  children: PropTypes.node.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A custom CSS class name to style the EmptyState component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */

export default EmptyState;
