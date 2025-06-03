/**
 * @typedef {Object} CodeSnippetToolbarProps
 * @property {string} [id=null] - Optional unique identifier for the root element of the toolbar.
 * @property {boolean} [isLeadingTabs=false] - Flag indicating if the `leadingNode` consists of Tabs. Adjusts padding and layout accordingly.
 * @property {React.ReactNode} [leadingNode=null] - Content to be displayed at the beginning (left side) of the toolbar. Can be any valid React node, often used for titles or Tabs.
 * @property {React.ReactNode} [trailingNode=null] - Content to be displayed at the end (right side) of the toolbar. Can be any valid React node, typically used for action buttons like copy or settings.
 */
import React from "react";
/**
 * Renders a toolbar typically placed above a CodeSnippet component.
 * It provides designated areas for leading content (like titles or tabs) and trailing content (like action buttons).
 * The appearance adapts based on the `view` context (e.g., 'dark' or 'light') and whether the leading content is tabs.
 *
 * @type {React.FC<CodeSnippetToolbarProps>}
 */
declare const CodeSnippetToolbar: {
    ({ id, any, isLeadingTabs, any, leadingNode, any, trailingNode, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional unique identifier for the root element of the toolbar. */
        id: any;
        /** Flag indicating if the `leadingNode` consists of Tabs. Adjusts padding and layout accordingly. */
        isLeadingTabs: any;
        /** Content to be displayed at the beginning (left side) of the toolbar. Can be any valid React node. */
        leadingNode: any;
        /** Content to be displayed at the end (right side) of the toolbar. Can be any valid React node. */
        trailingNode: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-codesnippet--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/5073d4-code-snippet/b/4635b4
 * @end
 */
export default CodeSnippetToolbar;
