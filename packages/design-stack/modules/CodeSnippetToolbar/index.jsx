/**
 * @typedef {Object} CodeSnippetToolbarProps
 * @property {string} [id=null] - Optional unique identifier for the root element of the toolbar.
 * @property {boolean} [isLeadingTabs=false] - Flag indicating if the `leadingNode` consists of Tabs. Adjusts padding and layout accordingly.
 * @property {React.ReactNode} [leadingNode=null] - Content to be displayed at the beginning (left side) of the toolbar. Can be any valid React node, often used for titles or Tabs.
 * @property {React.ReactNode} [trailingNode=null] - Content to be displayed at the end (right side) of the toolbar. Can be any valid React node, typically used for action buttons like copy or settings.
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { CODE_VIEW_COLOR_CLASSES } from "../CodeSnippet/constants/codeSnippet";
import { CodeSnippetContextData } from "../CodeSnippet/context";

import { TOOLBAR_COLOR_CLASSES } from "./constants/codeSnippetToolbar";

/**
 * Renders a toolbar typically placed above a CodeSnippet component.
 * It provides designated areas for leading content (like titles or tabs) and trailing content (like action buttons).
 * The appearance adapts based on the `view` context (e.g., 'dark' or 'light') and whether the leading content is tabs.
 *
 * @type {React.FC<CodeSnippetToolbarProps>}
 */
const CodeSnippetToolbar = ({
  id = null,
  isLeadingTabs = false,
  leadingNode = null,
  trailingNode = null,
}) => {
  const { view } = useContext(CodeSnippetContextData);

  return (
    <div
      className={twClassNames(
        "flex items-center justify-between rounded-t-md border-b border-neutral-strong bg-neutral-default",
        {
          "px-4 pt-1.5 pb-1 sm:pl-0 sm:py-0": isLeadingTabs,
        },
        TOOLBAR_COLOR_CLASSES[view].BACKGROUND_COLOR,
        CODE_VIEW_COLOR_CLASSES[view].BORDER_COLOR
      )}
      {...(id !== null && { id })}
    >
      {isLeadingTabs ? (
        leadingNode
      ) : (
        <div
          className={twClassNames(
            "p-2",
            CODE_VIEW_COLOR_CLASSES[view].TEXT_COLOR
          )}
        >
          {leadingNode}
        </div>
      )}
      <div className={twClassNames("text-right", { "p-2": !isLeadingTabs })}>
        {trailingNode}
      </div>
    </div>
  );
};

CodeSnippetToolbar.propTypes = {
  /** Optional unique identifier for the root element of the toolbar. */
  id: PropTypes.string,
  /** Flag indicating if the `leadingNode` consists of Tabs. Adjusts padding and layout accordingly. */
  isLeadingTabs: PropTypes.bool,
  /** Content to be displayed at the beginning (left side) of the toolbar. Can be any valid React node. */
  leadingNode: PropTypes.node,
  /** Content to be displayed at the end (right side) of the toolbar. Can be any valid React node. */
  trailingNode: PropTypes.node,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-codesnippet--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/5073d4-code-snippet/b/4635b4
 * @end
 */

export default CodeSnippetToolbar;
