/**
 * @typedef {Object} SkipToContentProps
 * @property {string} children - Node containing the content that will be displayed within the SkiptoContent component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {Record<string, any>} target? - Reference of the element to be focused
 */

import React, { useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { getAllFocusableElements } from "../../utils/common";

/**
 * @type {React.FC<SkipToContentProps>}
 */
const SkipToContent = ({
  children,
  id = null,
  target,
  wrapperClassName = "",
}) => {
  const [focused, setFocused] = useState(false);

  const triggerFocus = () => {
    const focusableElements = getAllFocusableElements(
      target.current,
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements?.length > 0) {
      focusableElements[0].focus();
    }
  };
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <button
      {...(id !== null && { id })}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={triggerFocus}
      type="button"
      className={twClassNames(
        "absolute z-600 -ml-80 rounded-sm bg-transparent px-4 py-2.5 text-sm text-brand-default focus:outline-none focus:ring-2 focus:ring-brand-stronger focus:ring-offset-1",
        {
          "ml-0": focused,
        },
        wrapperClassName
      )}
    >
      {children}
    </button>
  );
};

SkipToContent.propTypes = {
  /** Node containing the content that will be displayed within the SkiptoContent component */
  children: PropTypes.string.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Reference of the element to be focused */
  target: PropTypes.shape({ current: PropTypes.object }).isRequired,
  /** A custom CSS class name to style the wrapper of the SkiptoContent component */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-skiptocontent--skip-to-content-example
 * @zeroHeight
 * @end
 */

export default SkipToContent;
