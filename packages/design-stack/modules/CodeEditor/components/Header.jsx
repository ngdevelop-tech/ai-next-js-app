/**
 * @typedef {Object} HeaderProps
 * @property {React.ReactNode} actions? - Custom action elements to render in the header
 * @property {boolean} disabled? - Whether the header is in disabled state
 * @property {string} dropdownTriggerText? - Custom text for the variables dropdown trigger button
 * @property {React.ReactNode} fileIcon? - Custom icon to display instead of default file icon
 * @property {string} filename? - Name of the file being edited
 * @property {boolean} hasError? - Whether to show error state
 * @property {(event: React.MouseEvent<any>) => void} onVariableSelect? - Callback when a variable is selected from dropdown
 * @property {boolean} readOnly? - Whether the header is in read-only mode
 * @property {boolean} show? - Whether to show the header
 * @property {any} variables? - Array of variables for dropdown selection
 * @property {string} description? - Description shown in dropdown for the variable
 * @property {React.ReactNode} icon? - Optional icon to display with variable
 * @property {string} insertText - Text to insert when variable is selected
 * @property {string} label - Display name of the variable
 */

/**
 * @component Header
 * @description A header component for the code editor that displays filename, error states,
 * and provides variable selection functionality through a dropdown menu. Supports both light
 * and dark modes with appropriate styling.
 *
 * @typedef {Object} Variable
 * @property {string} label - Display name of the variable
 * @property {string} description - Description of the variable's purpose
 * @property {node} [icon] - Optional icon to display with the variable
 * @property {string} insertText - Text to insert when variable is selected
 *
 * @param {Object} props - Component props
 * @param {node} [props.actions] - Custom action elements to render in the header
 * @param {boolean} [props.disabled] - Whether the header is in disabled state
 * @param {string} [props.dropdownTriggerText] - Custom text for dropdown trigger button
 * @param {node} [props.fileIcon] - Custom icon to display instead of default file icon
 * @param {string} [props.filename] - Name of the file being edited
 * @param {boolean} [props.hasError] - Whether to show error state
 * @param {Function} [props.onVariableSelect] - Callback when a variable is selected
 * @param {boolean} [props.readOnly] - Whether the header is in read-only mode
 * @param {boolean} [props.show] - Whether to show the header
 * @param {Variable[]} [props.variables] - Array of variables for dropdown selection
 *
 * @returns {JSX.Element|null} The Header component or null if show is false
 */

import React from "react";
import { MdDescription, MdError, MdExpandMore } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Dropdown from "../../Dropdown";
import DropdownOptionGroup from "../../DropdownOptionGroup";
import DropdownOptionItem from "../../DropdownOptionItem";
import DropdownTrigger from "../../DropdownTrigger";

/**
 * @type {React.FC<HeaderProps>}
 */
const Header = ({
  filename,
  hasError,
  disabled,
  readOnly,
  variables = [],
  onVariableSelect,
  actions,
  show = true,
  fileIcon,
  dropdownTriggerText,
}) => {
  if (!show) return null;

  const defaultIcon = (
    <MdDescription
      className={twClassNames(
        "h-5 w-5",
        hasError ? "hidden" : "text-neutral-weaker"
      )}
      aria-hidden="true"
    />
  );

  return (
    <div className="flex w-full items-center space-x-2 bg-neutral-default text-sm text-neutral-default">
      <div
        className={twClassNames(
          "flex h-9 w-full items-center justify-between border-b px-2",
          hasError ? "border-danger-default" : "border-neutral-strong",
          disabled && "bg-neutral-strong text-neutral-weaker"
        )}
      >
        <div className="flex items-center gap-2">
          {hasError && (
            <MdError
              className="h-5 w-5 text-danger-default"
              aria-hidden="true"
            />
          )}
          {fileIcon || defaultIcon}
          {filename && (
            <span className={twClassNames("text-sm")}>{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {variables.length > 0 && (
            <Dropdown
              align="end"
              disabled={disabled || readOnly}
              onClick={onVariableSelect}
            >
              <DropdownTrigger
                className={twClassNames(
                  "flex items-center border-0 p-0 shadow-none",
                  "hover:bg-transparent"
                )}
                icon={<MdExpandMore className="h-5 w-5" aria-hidden="true" />}
                disabled={disabled || readOnly}
                triggerAriaLabel="More options"
              >
                {dropdownTriggerText || "Dropdown"}
              </DropdownTrigger>
              <DropdownOptionGroup>
                {variables.map(variable => (
                  <DropdownOptionItem
                    key={variable.label}
                    option={{
                      id: variable.label,
                      body: variable.label,
                      description: variable.description,
                      icon: variable.icon,
                    }}
                  />
                ))}
              </DropdownOptionGroup>
            </Dropdown>
          )}
          {actions}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  // Custom action elements to render in the header
  actions: PropTypes.node,

  // Whether the header is in disabled state
  disabled: PropTypes.bool,

  // Custom text for the variables dropdown trigger button
  dropdownTriggerText: PropTypes.string,

  // Custom icon to display instead of default file icon
  fileIcon: PropTypes.node,

  // Name of the file being edited
  filename: PropTypes.string,

  // Whether to show error state
  hasError: PropTypes.bool,

  // Callback when a variable is selected from dropdown
  onVariableSelect: PropTypes.func,

  // Whether the header is in read-only mode
  readOnly: PropTypes.bool,

  // Whether to show the header
  show: PropTypes.bool,

  // Array of variables for dropdown selection
  variables: PropTypes.arrayOf(
    PropTypes.shape({
      // Description shown in dropdown for the variable
      description: PropTypes.string,
      // Optional icon to display with variable
      icon: PropTypes.node,
      // Text to insert when variable is selected
      insertText: PropTypes.string.isRequired,
      // Display name of the variable
      label: PropTypes.string.isRequired,
    })
  ),
};

Header.defaultProps = {
  filename: "",
  hasError: false,
  disabled: false,
  readOnly: false,
  variables: [],
  onVariableSelect: () => {},
  actions: null,
  show: true,
  fileIcon: null,
  dropdownTriggerText: "",
};

export default Header;
