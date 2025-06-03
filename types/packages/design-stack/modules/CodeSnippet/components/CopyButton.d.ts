/**
 * @typedef {Object} CopyButtonProps
 * @property {string} [copiedAriaLabel] - The ARIA label for the button when the code has been successfully copied. Defaults to an empty string.
 * @property {string} [copyAriaLabel] - The ARIA label for the button before the code is copied. Defaults to an empty string.
 */
import React from "react";
/**
 * Renders a button within a CodeSnippet component that allows users to copy the code to their clipboard.
 * It displays different icons and text ('Copy'/'Copied!') based on the copy state.
 * The button appears on hover or focus within the CodeSnippet context.
 *
 * @type {React.FC<CopyButtonProps>}
 */
declare const CopyButton: {
    ({ copiedAriaLabel, any, copyAriaLabel }: any): React.ReactElement;
    propTypes: {
        /** The ARIA label for the button when the code has been successfully copied. */
        copiedAriaLabel: any;
        /** The ARIA label for the button before the code is copied. */
        copyAriaLabel: any;
    };
};
export default CopyButton;
