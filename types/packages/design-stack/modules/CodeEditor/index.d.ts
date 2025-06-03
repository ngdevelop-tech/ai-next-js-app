/**
 * @typedef {Object} LabelProps
 * @property {boolean} hideLabel?
 * @property {boolean} isMandatory?
 * @property {React.ReactNode} label
 * @property {string} uniqueId
 */
/**
 * @component CodeEditor
 * @description An accessible, customizable code editor component built on Monaco Editor with WCAG 2.1 compliance,
 * syntax highlighting, autocompletion, and theme support. Enhanced with external variables and team-specific suggestions.
 *
 * @typedef {Object} Plugin
 * @property {string} id - Unique identifier for the plugin
 * @property {string} name - Display name of the plugin
 * @property {Function} [contributeCommands] - Adds custom commands to the editor
 * @property {Function} [contributeLanguage] - Adds language support features
 * @property {Function} [contributeTheme] - Customizes editor theme
 * @property {Function} [dispose] - Cleanup function called when plugin is removed
 * @property {Function} [initialize] - Setup function called when plugin is added
 * @property {Function} [onBeforeMount] - Called before editor mounts
 * @property {Function} [onChange] - Called when editor content changes
 * @property {Function} [onMount] - Called after editor mounts
 * @property {Function} [onValidate] - Called during content validation
 *
 * @typedef {Object} Suggestion
 * @property {string} [documentation] - Description of the suggestion
 * @property {string} [insertText] - Text to insert when suggestion is selected
 * @property {string} [detail] - Additional details about the suggestion
 *
 * @typedef {Object} Variable
 * @property {string} defaultValue - Default value of the variable
 * @property {string} description - Description of the variable's purpose
 * @property {string} insertText - Text to insert when variable is selected
 * @property {string} label - Display name of the variable
 *
 * @param {Object} props - Component props
 * @param {node} [props.actions] - Custom action buttons or controls to display in editor header
 * @param {string} [props.description] - Additional description text about editor's purpose
 * @param {boolean} [props.disabled] - Whether the editor is in disabled state
 * @param {string} [props.dropdownTriggerText] - Text for variables dropdown trigger button
 * @param {string} [props.errorText] - Error message to display below editor
 * @param {node} [props.fileIcon] - Icon component to display next to filename
 * @param {string} [props.filename] - Name of file being edited
 * @param {boolean} [props.hasError] - Whether to show error styling
 * @param {string} [props.height] - Height of editor component
 * @param {boolean} [props.hideLabel] - Whether to visually hide label while keeping it accessible
 * @param {string} [props.id] - Unique identifier for editor instance
 * @param {string} [props.initialValue] - Initial code content to populate editor
 * @param {boolean} [props.isMandatory] - Whether the field is mandatory (adds asterisk to label)
 * @param {node} props.label - Accessible label for editor component
 * @param {string} [props.language] - Programming language for syntax highlighting
 * @param {Function} props.onChange - Callback triggered when editor content changes
 * @param {Function} [props.onEditorReady] - Callback triggered when editor is mounted
 * @param {Plugin[]} [props.plugins] - Array of editor plugins
 * @param {boolean} [props.readOnly] - Whether editor is in read-only mode
 * @param {boolean} [props.showHeader] - Whether to display editor header section
 * @param {Object.<string, Suggestion>} [props.suggestions] - Custom code suggestions for autocompletion
 * @param {Object} [props.theme] - Custom theme configuration
 * @param {Variable[]} [props.variables] - Array of external variables for insertion
 *
 * @returns {JSX.Element} A React element representing the accessible CodeEditor component
 */
import React from "react";
declare const CodeEditor: {
    ({ initialValue, any, language, any, readOnly, any, disabled, any, hasError: hasErrorProp, errorText: errorTextProp, onChange: any, onEditorReady: any, height, any, suggestions, any, label, any, description, any, id: any, plugins, any, variables, any, actions: any, filename: any, showHeader, any, fileIcon: any, dropdownTriggerText: any, hideLabel: any, isMandatory, any, ariaLabel: any, }: any): React.ReactElement;
    propTypes: {
        actions: any;
        ariaLabel: any;
        description: any;
        disabled: any;
        dropdownTriggerText: any;
        errorText: any;
        fileIcon: any;
        filename: any;
        hasError: any;
        height: any;
        hideLabel: any;
        id: any;
        initialValue: any;
        isMandatory: any;
        label: any;
        language: any;
        onChange: any;
        onEditorReady: any;
        plugins: any;
        readOnly: any;
        showHeader: any;
        suggestions: any;
        theme: any;
        variables: any;
    };
    defaultProps: {
        disabled: boolean;
        errorText: string;
        initialValue: string;
        language: string;
        readOnly: boolean;
        hasError: boolean;
        height: string;
        suggestions: {};
        theme: {
            base: string;
            inherit: boolean;
            rules: ({
                token: string;
                foreground: string;
                fontStyle: string;
            } | {
                token: string;
                foreground: string;
                fontStyle?: undefined;
            })[];
            colors: {
                'editor.background': string;
                'editor.foreground': string;
                'editor.lineHighlightBackground': string;
                'editor.selectionBackground': string;
                'editorCursor.foreground': string;
                'editorLineNumber.foreground': string;
                'editorLineNumber.activeForeground': string;
                'editor.selectionHighlightBackground': string;
            };
        };
        onEditorReady: any;
        description: string;
        id: any;
        plugins: any[];
        variables: any[];
        filename: string;
        actions: any;
        showHeader: boolean;
        fileIcon: any;
        dropdownTriggerText: string;
        hideLabel: boolean;
        isMandatory: boolean;
        ariaLabel: string;
    };
};
export default CodeEditor;
