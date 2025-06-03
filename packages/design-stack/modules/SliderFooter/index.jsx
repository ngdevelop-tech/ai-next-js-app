/**
 * @typedef {Object} SliderFooterProps
 * @property {string} errorText? - Slider Component error message
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} infoText? - Slider Component informational message
 * @property {string} wrapperClassName? - A custom CSS class name to style the AlertTitle component.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<SliderFooterProps>}
 */
const SliderFooter = ({
  errorText = "",
  id = null,
  infoText = "",
  wrapperClassName = "",
}) => (
  <div className={twClassNames(wrapperClassName)} {...(id !== null && { id })}>
    {errorText && (
      <p className="mt-2 text-sm font-normal text-danger-default">
        {errorText}
      </p>
    )}{" "}
    {infoText && (
      <p className="mt-2 text-sm font-normal text-neutral-weaker">{infoText}</p>
    )}
  </div>
);

SliderFooter.propTypes = {
  /** Slider Component error message */
  errorText: PropTypes.string,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Slider Component informational message */
  infoText: PropTypes.string,
  /** A custom CSS class name to style the AlertTitle component. */
  wrapperClassName: PropTypes.string,
};

export default SliderFooter;
