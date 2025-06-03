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
/**
 * @type {React.FC<HeaderProps>}
 */
declare const Header: {
    ({ filename: any, hasError: any, disabled: any, readOnly: any, variables, any, onVariableSelect: any, actions: any, show, any, fileIcon: any, dropdownTriggerText: any, }: any): React.ReactElement;
    propTypes: {
        actions: any;
        disabled: any;
        dropdownTriggerText: any;
        fileIcon: any;
        filename: any;
        hasError: any;
        onVariableSelect: any;
        readOnly: any;
        show: any;
        variables: any;
    };
    defaultProps: {
        filename: string;
        hasError: boolean;
        disabled: boolean;
        readOnly: boolean;
        variables: any[];
        onVariableSelect: () => void;
        actions: any;
        show: boolean;
        fileIcon: any;
        dropdownTriggerText: string;
    };
};
export default Header;
