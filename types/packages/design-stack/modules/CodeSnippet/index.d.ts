/**
 * @typedef {Object} HighlightConfig
 * @property {boolean} [animation] - Whether to apply an animation effect to the highlighted lines.
 * @property {string} range - A string representing the line number(s) or range(s) to highlight (e.g., "1", "1-3", "1,3,5-7").
 * @property {typeof HIGHLIGHT_TYPE[keyof typeof HIGHLIGHT_TYPE]} type - The type of highlight to apply (e.g., 'SUCCESS', 'ERROR', 'WARNING', 'INFO').
 */
/**
 * @typedef {Object} CodeSnippetProps
 * @property {string} [ariaLabel] - Provides an accessible label for the code snippet container. Defaults to an empty string.
 * @property {string} [code] - The code content to be displayed within the snippet. Defaults to an empty string.
 * @property {string} [copiedAriaLabel] - Provides an accessible label for the copy button when the code has been copied. Defaults to an empty string.
 * @property {string} [copyAriaLabel] - Provides an accessible label for the copy button. Defaults to an empty string.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [copyCallback] - A callback function invoked when the copy button is clicked. Receives the click event. Defaults to null.
 * @property {HighlightConfig[]} [highlight] - An array of configuration objects to highlight specific lines or ranges within the code. Defaults to an empty array.
 * @property {string | null} [id] - A unique identifier attribute to apply to the root element of the component. Defaults to null.
 * @property {string} [language] - The programming language of the code for syntax highlighting (e.g., 'javascript', 'python', 'css'). Defaults to 'javascript'.
 * @property {boolean} [lineWrap] - Determines whether long lines of code should wrap or cause horizontal scrolling. Defaults to true (lines wrap).
 * @property {string} [maxHeight] - Sets the maximum height of the code snippet container (e.g., '400px'). Defaults to undefined.
 * @property {string} [minHeight] - Sets the minimum height of the code snippet container (e.g., '100px'). Defaults to undefined.
 * @property {boolean} [showBorder] - Determines if a border should be displayed around the code snippet container. Defaults to true.
 * @property {boolean} [showCopyButton] - Determines if the copy button should be displayed. Defaults to true.
 * @property {boolean} [showLineNumbers] - Determines whether line numbers should be displayed alongside the code. Defaults to false.
 * @property {boolean} [singleLine] - Renders the code snippet in a compact, single-line format, disabling line numbers and adjusting styles. Defaults to false.
 * @property {React.ReactNode} [toolbar] - Allows rendering a custom React node as a toolbar above the code snippet. Defaults to null.
 * @property {typeof CODE_VIEW[keyof typeof CODE_VIEW]} [view] - Specifies the visual theme or context of the code snippet (e.g., 'NEUTRAL', 'SUCCESS', 'ERROR'). Defaults to 'NEUTRAL'.
 */
import React from "react";
/**
 * Renders a code snippet with syntax highlighting, line numbers, copy functionality,
 * line highlighting, and customizable themes. It leverages react-syntax-highlighter
 * for the core highlighting functionality.
 *
 * @type {React.FC<CodeSnippetProps>}
 */
declare const CodeSnippet: {
    ({ ariaLabel, any, code, any, copiedAriaLabel, any, copyAriaLabel, any, copyCallback, any, highlight, any, id, any, language, any, lineWrap, any, maxHeight, any, minHeight, any, showBorder, any, showCopyButton, any, showLineNumbers, any, singleLine, any, toolbar, any, view, any, }: any): React.ReactElement;
    propTypes: {
        /** Provides an accessible label for the code snippet container. */
        ariaLabel: any;
        /** The code content to be displayed within the snippet. */
        code: any;
        /** Provides an accessible label for the copy button when the code has been copied. */
        copiedAriaLabel: any;
        /** Provides an accessible label for the copy button. */
        copyAriaLabel: any;
        /** A callback function invoked when the copy button is clicked. */
        copyCallback: any;
        /** An array of configuration objects to highlight specific lines or ranges. */
        highlight: any;
        /** A unique identifier attribute to apply to the root element. */
        id: any;
        /** The programming language for syntax highlighting. */
        language: any;
        /** Determines whether long lines should wrap. */
        lineWrap: any;
        /** Sets the maximum height of the code snippet container. */
        maxHeight: any;
        /** Sets the minimum height of the code snippet container. */
        minHeight: any;
        /** Determines if a border should be displayed around the container. */
        showBorder: any;
        /** Determines if the copy button should be displayed. */
        showCopyButton: any;
        /** Determines whether line numbers should be displayed. */
        showLineNumbers: any;
        /** Renders the code snippet in a compact, single-line format. */
        singleLine: any;
        /** Allows rendering a custom React node as a toolbar above the code snippet. */
        toolbar: any;
        /** Specifies the visual theme or context of the code snippet. */
        view: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-codesnippet--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/5073d4-code-snippet/b/4635b4
 * @end
 */
export default CodeSnippet;
