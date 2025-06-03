/**
 * @typedef {Object} SliderLabelProps
 * @property {string} children - The child elements of the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the AlertTitle component.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<SliderLabelProps>}
 */
const SliderLabel = ({ children, id = null, wrapperClassName = "" }) => (
  <label
    htmlFor={id}
    className={twClassNames(
      "text-sm font-medium text-neutral-weak",
      wrapperClassName
    )}
    {...(id !== null && { id: `${id}-slider` })}
  >
    {children}
  </label>
);

SliderLabel.propTypes = {
  /** The child elements of the component */
  children: PropTypes.string.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A custom CSS class name to style the AlertTitle component. */
  wrapperClassName: PropTypes.string,
};

export default SliderLabel;
