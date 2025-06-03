/**
 * @typedef {Object} EmptyStateActionProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the EmptyStateAction component.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<EmptyStateActionProps>}
 */
const EmptyStateAction = ({ children, id = null, wrapperClassName = "" }) => (
  <div
    className={twClassNames("mt-6", wrapperClassName)}
    {...(id !== null && { id })}
  >
    {children}
  </div>
);

EmptyStateAction.propTypes = {
  /** Node containing the content that will be displayed within the component */
  children: PropTypes.node.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A custom CSS class name to style the EmptyStateAction component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */

export default EmptyStateAction;
