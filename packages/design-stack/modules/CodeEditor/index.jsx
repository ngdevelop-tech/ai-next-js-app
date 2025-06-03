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

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useIsDarkMode } from "@/packages/hooks";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Editor } from "@monaco-editor/react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import editorTheme from "./constants/theme";
import PluginManager from "./utils/PluginManager";

// Constants to avoid duplicate strings
const THEMES = {
  DISABLED: "disabled-theme",
  READONLY: "readonly-theme",
  DARK: "vs-dark",
  LIGHT: "vs-light",
  DISABLED_DARK: "disabled-dark-theme",
  READONLY_DARK: "readonly-dark-theme",
};

const FONT_FAMILY =
  '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace';

// Separated theme configuration to reduce cognitive complexity
const getDisabledTheme = () => ({
  base: "vs",
  rules: [{ token: "", foreground: "6b7280" }],
  colors: {
    "editor.background": "#F9FAFB",
    "editor.foreground": "#6b7280",
    "editorLineNumber.foreground": "#6b7280",
    "editor.selectionBackground": "#6b7280",
    "editor.selectionForeground": "#6b7280",
    "editorCursor.foreground": "#6b7280",
    "editor.lineHighlightBackground": "#F2F2F2",
    "editorLineNumber.activeForeground": "#6b7280",
    "editorBracketMatch.background": "#F9FAFB",
    "editorBracketMatch.border": "#6b7280",
    "editorBracketHighlight.foreground1": "#6b7280",
    "editorBracketHighlight.foreground2": "#6b7280",
    "editorBracketHighlight.foreground3": "#6b7280",
    "editorBracketHighlight.foreground4": "#6b7280",
    "editorBracketHighlight.foreground5": "#6b7280",
    "editorBracketHighlight.foreground6": "#6b7280",
    "editorBracketHighlight.unexpectedBracket.foreground": "#6b7280",
    "editorLineNumber.border": "#E5E7EB",
  },
});

const getReadonlyTheme = () => ({
  base: "vs",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#F9FAFB",
    "editorLineNumber.border": "#E5E7EB",
  },
});

const getReadonlyDarkTheme = () => ({
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#1A1B1F",
    "editorLineNumber.border": "#2B2D33",
  },
});

const getDisabledDarkTheme = () => ({
  base: "vs-dark",
  rules: [{ token: "", foreground: "6b7280" }],
  colors: {
    "editor.background": "#1A1B1F",
    "editor.foreground": "#6b7280",
    "editorLineNumber.foreground": "#6b7280",
    "editor.selectionBackground": "#6b7280",
    "editor.selectionForeground": "#6b7280",
    "editorCursor.foreground": "#6b7280",
    "editor.lineHighlightBackground": "#2B2D33",
    "editorLineNumber.activeForeground": "#6b7280",
    "editorBracketMatch.background": "#2B2D33",
    "editorBracketMatch.border": "#6b7280",
    "editorBracketHighlight.foreground1": "#6b7280",
    "editorBracketHighlight.foreground2": "#6b7280",
    "editorBracketHighlight.foreground3": "#6b7280",
    "editorBracketHighlight.foreground4": "#6b7280",
    "editorBracketHighlight.foreground5": "#6b7280",
    "editorBracketHighlight.foreground6": "#6b7280",
    "editorBracketHighlight.unexpectedBracket.foreground": "#6b7280",
    "editorLineNumber.border": "#2B2D33",
  },
});

// Separated function to get current theme
const getCurrentTheme = (disabled, readOnly, isDarkMode) => {
  if (disabled) {
    return isDarkMode ? THEMES.DISABLED_DARK : THEMES.DISABLED;
  }
  if (readOnly) {
    return isDarkMode ? THEMES.READONLY_DARK : THEMES.READONLY;
  }
  return isDarkMode ? THEMES.DARK : THEMES.LIGHT;
};

const getLabelText = (label, ariaLabel) => {
  if (ariaLabel) {
    return ariaLabel;
  }

  if (typeof label === "string") {
    return label;
  }

  return "Code Editor";
};

/**
 * @type {React.FC<LabelProps>}
 */
const Label = ({ label, hideLabel, uniqueId, isMandatory }) => (
  <label
    htmlFor={uniqueId}
    className={twClassNames(
      hideLabel ? "sr-only" : "block text-sm font-medium text-neutral-default"
    )}
  >
    {label}
    {isMandatory && (
      <span className="ml-1 text-danger-default" aria-hidden="true">
        *
      </span>
    )}
    {isMandatory && <span className="sr-only">(required)</span>}
  </label>
);

Label.propTypes = {
  hideLabel: PropTypes.bool,
  isMandatory: PropTypes.bool,
  label: PropTypes.node.isRequired,
  uniqueId: PropTypes.string.isRequired,
};

Label.defaultProps = {
  hideLabel: false,
  isMandatory: false,
};

const CodeEditor = ({
  initialValue = "",
  language = "javascript",
  readOnly = false,
  disabled = false,
  hasError: hasErrorProp,
  errorText: errorTextProp = "",
  onChange,
  onEditorReady,
  height = "280px",
  suggestions = {},
  label = "Code Editor",
  description = "",
  id,
  plugins = [],
  variables = [],
  actions,
  filename,
  showHeader = false,
  fileIcon,
  dropdownTriggerText,
  hideLabel,
  isMandatory = false,
  ariaLabel,
}) => {
  const [editorValue, setEditorValue] = useState(initialValue);
  const [autoError, setAutoError] = useState(false);
  const [autoErrorText, setAutoErrorText] = useState("");
  const { isDarkMode } = useIsDarkMode();
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const pluginManagerRef = useRef(null);
  const decorationsRef = useRef([]);
  const uniqueId = id || `editor-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${uniqueId}-error`;
  const descriptionId = `${uniqueId}-description`;
  const mandatoryId = isMandatory ? `${uniqueId}-mandatory` : "";

  const hasError = hasErrorProp || autoError;
  const errorText = errorTextProp || autoErrorText;

  const accessibleLabel = getLabelText(label, ariaLabel);

  const getAriaDescribedBy = () => {
    const ids = [];
    if (description) ids.push(descriptionId);
    if (hasError) ids.push(errorId);
    if (isMandatory) ids.push(mandatoryId);
    return ids.join(" ") || undefined;
  };

  // Insert text at cursor position
  const insertTextAtCursor = useCallback(text => {
    if (editorRef.current) {
      const editor = editorRef.current;
      const selection = editor.getSelection();
      const position = selection.getPosition();

      editor.executeEdits("insert-text", [
        {
          range: {
            startLineNumber: position.lineNumber,
            startColumn: position.column,
            endLineNumber: position.lineNumber,
            endColumn: position.column,
          },
          text,
        },
      ]);
    }
  }, []);

  // Handle variable selection
  const handleVariableSelect = useCallback(
    e => {
      const variable = variables.find(v => v.label === e.body);
      if (variable) {
        insertTextAtCursor(variable.insertText);
      }
    },
    [variables, insertTextAtCursor]
  );

  useEffect(() => {
    setEditorValue(initialValue);
  }, [initialValue]);

  const updateEditorTheme = useCallback(() => {
    if (!editorRef.current || !monacoRef.current) return;

    const editor = editorRef.current;
    editor.updateOptions({ readOnly: readOnly || disabled });
    monacoRef.current.editor.setTheme(
      getCurrentTheme(disabled, readOnly, isDarkMode)
    );
  }, [disabled, readOnly, isDarkMode]);

  useEffect(() => {
    updateEditorTheme();
  }, [updateEditorTheme]);

  const formatErrorMessage = marker => {
    const lineInfo =
      marker.startLineNumber === marker.endLineNumber
        ? `Line ${marker.startLineNumber}`
        : `Lines ${marker.startLineNumber}-${marker.endLineNumber}`;
    return `${lineInfo}: ${marker.message}`;
  };

  const handleMarkerChange = useCallback((editor, monaco, uri) => {
    const markers = monaco.editor.getModelMarkers({ resource: uri });
    const errors = markers.filter(
      marker => marker.severity === monaco.MarkerSeverity.Error
    );

    setAutoError(errors.length > 0);
    if (errors.length > 0) {
      const formattedErrors = errors.map(formatErrorMessage).join("\n");
      setAutoErrorText(formattedErrors);
    } else {
      setAutoErrorText("");
    }

    const editorModel = editor.getModel();
    if (!editorModel) return;

    if (errors.length > 0) {
      const errorDecorations = errors.map(error => ({
        range: {
          startLineNumber: error.startLineNumber,
          startColumn: 1,
          endLineNumber: error.endLineNumber,
          endColumn: editorModel.getLineMaxColumn(error.endLineNumber),
        },
        options: {
          isWholeLine: true,
          className: "bg-danger-weaker",
        },
      }));
      decorationsRef.current = editor.deltaDecorations(
        decorationsRef.current,
        errorDecorations
      );
    } else {
      decorationsRef.current = editor.deltaDecorations(
        decorationsRef.current,
        []
      );
    }
  }, []);

  const handleEditorDidMount = useCallback(
    (editor, monaco) => {
      editorRef.current = editor;
      monacoRef.current = monaco;

      // Define themes
      monaco.editor.defineTheme(THEMES.DISABLED, getDisabledTheme());
      monaco.editor.defineTheme(THEMES.READONLY, getReadonlyTheme());
      monaco.editor.defineTheme(THEMES.DISABLED_DARK, getDisabledDarkTheme());
      monaco.editor.defineTheme(THEMES.READONLY_DARK, getReadonlyDarkTheme());

      // Set initial theme
      updateEditorTheme();

      // Initialize plugin manager
      pluginManagerRef.current = new PluginManager({
        plugins,
        editor,
        monaco,
      });

      // Call plugin mount handlers
      pluginManagerRef.current.handleMount(editor, monaco);

      // Set up error detection
      const editorModel = editor.getModel();
      if (editorModel) {
        monaco.editor.onDidChangeMarkers(([resource]) => {
          if (resource.toString() === editorModel.uri.toString()) {
            handleMarkerChange(editor, monaco, resource);
          }
        });
      }

      // Register custom suggestions provider with enhanced suggestions
      if (!disabled) {
        monaco.languages.registerCompletionItemProvider(language, {
          provideCompletionItems: (suggestionModel, position) => {
            const word = suggestionModel.getWordUntilPosition(position);
            const range = {
              startLineNumber: position.lineNumber,
              endLineNumber: position.lineNumber,
              startColumn: word.startColumn,
              endColumn: word.endColumn,
            };

            // Combine built-in suggestions with variables
            const allSuggestions = [
              ...Object.entries(suggestions).map(([key, value]) => ({
                label: key,
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: value.documentation || `Function: ${key}`,
                insertText: value.insertText || value,
                range,
                detail: value.detail || null,
              })),
              ...variables.map(variable => ({
                label: variable.label,
                kind: monaco.languages.CompletionItemKind.Variable,
                documentation: variable.description,
                insertText: variable.insertText,
                range,
                detail: `Default: ${variable.defaultValue}`,
              })),
            ];

            return { suggestions: allSuggestions };
          },
          triggerCharacters: [".", "(", "{", "@"],
        });
      }

      // Configure editor options
      editor.updateOptions({
        tabSize: 2,
        insertSpaces: true,
        fontFamily: FONT_FAMILY,
        fontSize: 14,
        lineHeight: 21,
        readOnly: readOnly || disabled,
        accessibilitySupport: "on",
        ariaLabel: accessibleLabel,
        screenReaderAnnounceInlineSuggestion: true,
        tabIndex: disabled ? -1 : 0,
        minimap: { enabled: false },
        scrollbar: {
          vertical: "hidden",
          horizontal: "hidden",
          useShadows: false,
        },
        padding: { top: 12, bottom: 12 },
        scrollBeyondLastLine: false,
        quickSuggestions: !disabled,
        quickSuggestionsDelay: 100,
        parameterHints: { enabled: !disabled },
        lightbulb: { enabled: !disabled },
        renderLineHighlight: disabled ? "none" : "line",
        hideCursorInOverviewRuler: disabled,
        cursorStyle: disabled ? "hidden" : "line",
        renderValidationDecorations: !disabled,
        wordWrap: "on",
        fixedOverflowWidgets: true,
      });

      // Add keyboard shortcut for accessibility help
      if (!disabled) {
        editor.addCommand(
          monaco.KeyMod.chord(monaco.KeyMod.Alt, monaco.KeyCode.F1),
          () => {
            const accessibilityHelp = [
              "Keyboard shortcuts:",
              "Alt+F1: Show this help",
              "Ctrl+F: Find",
              "Ctrl+H: Replace",
              "Ctrl+/: Toggle line comment",
              "F12: Go to definition",
              "Alt+F12: Peek definition",
              "For more shortcuts, press F1 to open the command palette",
            ].join("\n");
            editor.trigger("keyboard", "editor.action.showHover", {
              content: accessibilityHelp,
            });
          }
        );
      }

      if (onEditorReady) {
        onEditorReady(editor);
      }
    },
    [
      language,
      suggestions,
      variables,
      plugins,
      readOnly,
      disabled,
      onEditorReady,
      accessibleLabel,
      updateEditorTheme,
      handleMarkerChange,
    ]
  );

  useEffect(
    () => () => {
      if (pluginManagerRef.current) {
        pluginManagerRef.current.dispose();
      }
    },
    []
  );

  const handleChange = useCallback(
    value => {
      if (disabled) return;
      if (pluginManagerRef.current) {
        pluginManagerRef.current.handleChange(value);
      }
      if (onChange) {
        onChange(value);
      }
    },
    [disabled, onChange]
  );

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <div>
          <Label
            hideLabel={hideLabel}
            label={label}
            uniqueId={uniqueId}
            isMandatory={isMandatory}
          />
          {description && (
            <div id={descriptionId} className="text-sm text-neutral-default">
              {description}
            </div>
          )}
        </div>
      </div>

      {/* Editor Section */}
      <div
        id={uniqueId}
        className={twClassNames(
          "relative w-full overflow-hidden rounded-lg border focus-within:ring-1 focus-within:ring-brand-strong",
          hasError ? "border-danger-default" : "border-neutral-strong",
          isDarkMode ? "bg-neutral-inverse-default" : "bg-neutral-default",
          disabled && "pointer-events-none cursor-not-allowed"
        )}
        role="application"
        aria-label={accessibleLabel}
        aria-describedby={getAriaDescribedBy()}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        <Header
          filename={filename}
          fileIcon={fileIcon}
          dropdownTriggerText={dropdownTriggerText}
          hasError={hasError}
          disabled={disabled}
          readOnly={readOnly}
          variables={variables}
          onVariableSelect={handleVariableSelect}
          actions={actions}
          show={Boolean(
            showHeader && (filename || variables.length > 0 || actions)
          )}
        />
        <Editor
          height={height}
          language={language}
          value={editorValue}
          theme={getCurrentTheme(disabled, readOnly, isDarkMode)}
          options={{
            inlineSuggest: true,
            formatOnType: true,
            autoClosingBrackets: true,
            minimap: { enabled: false },
            scrollbar: {
              vertical: "hidden",
              horizontal: "hidden",
              useShadows: false,
            },
            overviewRulerBorder: false,
            padding: { top: 12, bottom: 12 },
            scrollBeyondLastLine: false,
            readOnly: readOnly || disabled,
            tabIndex: disabled ? -1 : 0,
            quickSuggestions: !disabled,
            quickSuggestionsDelay: 100,
            parameterHints: {
              enabled: !disabled,
            },
            lightbulb: {
              enabled: !disabled,
            },
            renderLineHighlight: disabled ? "none" : "line",
            hideCursorInOverviewRuler: disabled,
            cursorStyle: disabled ? "hidden" : "line",
            renderValidationDecorations: !disabled,
            wordWrap: "on",
            fixedOverflowWidgets: true,
          }}
          onMount={handleEditorDidMount}
          onChange={handleChange}
        />
      </div>

      {/* Error message */}
      {hasError && errorText && !disabled && (
        <div
          id={errorId}
          className="mt-1 whitespace-pre-line text-sm text-danger-default"
          role="alert"
          aria-live="polite"
        >
          {errorText}
        </div>
      )}
    </div>
  );
};

CodeEditor.propTypes = {
  // Custom action buttons or controls to display in the editor header
  actions: PropTypes.node,

  // Custom aria label for the editor
  ariaLabel: PropTypes.string,

  // Additional description text providing context about the editor's purpose
  description: PropTypes.string,

  // Whether the editor is in a disabled state, preventing user interaction
  disabled: PropTypes.bool,

  // Custom text to display in the variables dropdown trigger button
  dropdownTriggerText: PropTypes.string,

  // Error message to display below the editor when validation fails
  errorText: PropTypes.string,

  // Icon component to display next to the filename in the header
  fileIcon: PropTypes.node,

  // Name of the file being edited, displayed in the header
  filename: PropTypes.string,

  // Whether to display error styling for the editor
  hasError: PropTypes.bool,

  // Height of the editor component
  height: PropTypes.string,

  // Whether to visually hide the label while keeping it accessible to screen readers
  hideLabel: PropTypes.bool,

  // Unique identifier for the editor instance
  id: PropTypes.string,

  // Initial code content to populate the editor
  initialValue: PropTypes.string,

  // Whether this field is mandatory (displays an asterisk)
  isMandatory: PropTypes.bool,

  // Accessible label for the editor component (can be string or node)
  label: PropTypes.node.isRequired,

  // Programming language for syntax highlighting and language features
  language: PropTypes.string,

  // Callback function triggered when editor content changes
  onChange: PropTypes.func.isRequired,

  // Callback function triggered when the editor is fully mounted and ready
  onEditorReady: PropTypes.func,

  // Array of editor plugins that can extend functionality
  plugins: PropTypes.arrayOf(
    PropTypes.shape({
      // Function to register custom editor commands
      contributeCommands: PropTypes.func,
      // Function to add language-specific features and syntax
      contributeLanguage: PropTypes.func,
      // Function to customize editor theme settings
      contributeTheme: PropTypes.func,
      // Cleanup function called when plugin is removed
      dispose: PropTypes.func,
      // Unique identifier for the plugin
      id: PropTypes.string.isRequired,
      // Setup function called when plugin is initialized
      initialize: PropTypes.func,
      // Display name of the plugin
      name: PropTypes.string.isRequired,
      // Function called before editor mounting
      onBeforeMount: PropTypes.func,
      // Function called when editor content changes
      onChange: PropTypes.func,
      // Function called after editor is mounted
      onMount: PropTypes.func,
      // Function called during content validation
      onValidate: PropTypes.func,
    })
  ),

  // Whether the editor is in read-only mode
  readOnly: PropTypes.bool,

  // Whether to display the editor header section
  showHeader: PropTypes.bool,

  // Custom code suggestions for autocompletion
  suggestions: PropTypes.shape({
    // Each key is a suggestion trigger string
    [PropTypes.string]: PropTypes.shape({
      // Additional details shown in suggestion popup
      detail: PropTypes.string,
      // Documentation string shown in suggestion tooltip
      documentation: PropTypes.string,
      // Text to insert when suggestion is selected
      insertText: PropTypes.string,
    }),
  }),

  // Custom theme configuration for the editor
  theme: PropTypes.shape({}),

  // Array of external variables available for insertion
  variables: PropTypes.arrayOf(
    PropTypes.shape({
      // Default value of the variable
      defaultValue: PropTypes.string,
      // Description of the variable's purpose
      description: PropTypes.string,
      // Text to insert when variable is selected
      insertText: PropTypes.string.isRequired,
      // Display name of the variable in UI
      label: PropTypes.string.isRequired,
    })
  ),
};

CodeEditor.defaultProps = {
  disabled: false,
  errorText: "",
  initialValue: "",
  language: "javascript",
  readOnly: false,
  hasError: false,
  height: "280px",
  suggestions: {},
  theme: editorTheme,
  onEditorReady: null,
  description: "",
  id: undefined,
  plugins: [],
  variables: [],
  filename: "",
  actions: null,
  showHeader: false,
  fileIcon: null,
  dropdownTriggerText: "",
  hideLabel: false,
  isMandatory: false,
  ariaLabel: "",
};

export default CodeEditor;
