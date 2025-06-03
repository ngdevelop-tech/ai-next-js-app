/**
 * Represents a button specifically designed to be part of an input group.
 * It inherits properties from the base Button component and adds styling
 * appropriate for placement alongside input fields.
 *
 * @typedef {Object} InputGroupButtonProps
 * @property {string} [childWrapperClassName] - Optional custom CSS class name to apply to the span wrapping the children.
 * @property {React.ReactNode} children - The content to be displayed inside the button. Typically text or icons.
 * @property {string} [id] - Optional unique identifier for the root button element.
 * @property {'start' | 'end' | 'middle' | 'standalone'} [position='start'] - Specifies the button's position within the input group, affecting its border radius. Defaults to 'start'.
 * @property {import('../Button').ButtonProps} [props] - Additional props to pass down to the underlying Button component.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";
import {
  GROUP_POSITION,
  GROUP_POSITION_CLASSES,
} from "../InputField/constants/inputField";

/**
 * InputGroupButton component.
 *
 * @type {React.FC<InputGroupButtonProps>}
 */
const InputGroupButton = ({
  children,
  childWrapperClassName = "",
  id = null,
  position = "start",
  ...props
}) => (
  <Button
    variant="minimal"
    wrapperClassName={twClassNames(
      "border border-neutral-strong bg-neutral-strong hover:bg-neutral-stronger",
      GROUP_POSITION_CLASSES[position]
    )}
    {...props}
    {...(id !== null && { id })}
  >
    <span
      className={twClassNames(
        "flex space-x-1.5 px-3 text-neutral-weaker",
        childWrapperClassName
      )}
    >
      {children}
    </span>
  </Button>
);

InputGroupButton.propTypes = {
  /** Optional custom CSS class name to apply to the span wrapping the children. */
  childWrapperClassName: PropTypes.string,
  /** The content to be displayed inside the button. Typically text or icons. */
  children: PropTypes.node.isRequired,
  /** Optional unique id attribute for the root button element. */
  id: PropTypes.string,
  /** Specifies the button's position within an input group, affecting border radius. */
  position: PropTypes.oneOf(Object.values(GROUP_POSITION)),
};

export default InputGroupButton;
