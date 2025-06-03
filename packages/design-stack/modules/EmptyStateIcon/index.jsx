/**
 * @typedef {Object} EmptyStateIconProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the EmptyStateIcon component.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<EmptyStateIconProps>}
 */
const EmptyStateIcon = ({ children, id, wrapperClassName }) => (
  <div
    className={twClassNames(
      "mx-auto mb-2 h-12 w-12 text-neutral-weakest",
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    {children}
  </div>
);

EmptyStateIcon.propTypes = {
  /** Node containing the content that will be displayed within the component */
  children: PropTypes.node.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A custom CSS class name to style the EmptyStateIcon component. */
  wrapperClassName: PropTypes.string,
};

EmptyStateIcon.defaultProps = {
  wrapperClassName: "",
  id: null,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */

export default EmptyStateIcon;
