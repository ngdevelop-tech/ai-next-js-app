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

import React, { useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import PropTypes from "prop-types";

import CopyButton from "./components/CopyButton";
import {
  CODE_VIEW,
  CODE_VIEW_COLOR_CLASSES,
  HIGHLIGHT_TYPE,
} from "./constants/codeSnippet";
import theme from "./constants/theme";
import { CodeSnippetContextData } from "./context";
import { getLineNumberStyle, getLineProps } from "./utils";

/**
 * Renders a code snippet with syntax highlighting, line numbers, copy functionality,
 * line highlighting, and customizable themes. It leverages react-syntax-highlighter
 * for the core highlighting functionality.
 *
 * @type {React.FC<CodeSnippetProps>}
 */
const CodeSnippet = ({
  ariaLabel = "",
  code = "",
  copiedAriaLabel = "",
  copyAriaLabel = "",
  copyCallback = null,
  highlight = [],
  id = null,
  language = "javascript",
  lineWrap = true,
  maxHeight = undefined,
  minHeight = undefined,
  showBorder = true,
  showCopyButton = true,
  showLineNumbers = false,
  singleLine = false,
  toolbar = null,
  view = CODE_VIEW.NEUTRAL,
}) => {
  const [showCopy, setShowCopy] = useState(false);

  const getTheme = () => {
    if (singleLine) return "";
    if (view === CODE_VIEW.NEUTRAL) return theme;
    return "";
  };
  return (
    <CodeSnippetContextData.Provider
      value={{
        copyCallback,
        view,
        code,
        setShowCopy,
        showCopy,
      }}
    >
      <div
        className={twClassNames(
          "relative flex flex-col rounded-md text-neutral-default",
          {
            "border border-neutral-strong": showBorder,
          },
          CODE_VIEW_COLOR_CLASSES[view].BACKGROUND_COLOR,
          CODE_VIEW_COLOR_CLASSES[view].BORDER_COLOR
        )}
        {...(id !== null && { id })}
      >
        {toolbar}
        <div className="relative">
          <SyntaxHighlighter
            aria-label={ariaLabel}
            tabIndex={0}
            codeTagProps={{ className: "table w-full" }}
            language={language}
            style={getTheme()}
            customStyle={{
              maxHeight,
              minHeight,
            }}
            className={twClassNames(
              "relative overflow-y-scroll rounded-b-md !bg-neutral-default !p-0 text-sm ",
              {
                "rounded-md": !toolbar,
                "!p-4": !showLineNumbers || singleLine,
              },
              CODE_VIEW_COLOR_CLASSES[view].TEXT_COLOR
            )}
            {...(!singleLine && { showLineNumbers })}
            wrapLines={!lineWrap}
            wrapLongLines={lineWrap}
            lineNumberStyle={n =>
              getLineNumberStyle({
                n,
                view,
                showLineNumbers,
                highlight,
              })
            }
            lineProps={n =>
              getLineProps({
                n,
                view,
                showLineNumbers,
                highlight,
              })
            }
            onMouseEnter={() => setShowCopy(true)}
            onMouseLeave={() => setShowCopy(false)}
          >
            {code}
          </SyntaxHighlighter>
          {showCopyButton && (
            <CopyButton
              copiedAriaLabel={copiedAriaLabel}
              copyAriaLabel={copyAriaLabel}
            />
          )}
        </div>
      </div>
    </CodeSnippetContextData.Provider>
  );
};

CodeSnippet.propTypes = {
  /** Provides an accessible label for the code snippet container. */
  ariaLabel: PropTypes.string,
  /** The code content to be displayed within the snippet. */
  code: PropTypes.string,
  /** Provides an accessible label for the copy button when the code has been copied. */
  copiedAriaLabel: PropTypes.string,
  /** Provides an accessible label for the copy button. */
  copyAriaLabel: PropTypes.string,
  /** A callback function invoked when the copy button is clicked. */
  copyCallback: PropTypes.func,
  /** An array of configuration objects to highlight specific lines or ranges. */
  highlight: PropTypes.arrayOf(
    PropTypes.shape({
      /** Whether to apply an animation effect to the highlighted lines. */
      animation: PropTypes.bool,
      /** A string representing the line number(s) or range(s) to highlight (e.g., "1", "1-3", "1,3,5-7"). */
      range: PropTypes.string.isRequired,
      /** The type of highlight to apply. */
      type: PropTypes.oneOf(Object.values(HIGHLIGHT_TYPE)).isRequired,
    })
  ),
  /** A unique identifier attribute to apply to the root element. */
  id: PropTypes.string,
  /** The programming language for syntax highlighting. */
  language: PropTypes.string,
  /** Determines whether long lines should wrap. */
  lineWrap: PropTypes.bool,
  /** Sets the maximum height of the code snippet container. */
  maxHeight: PropTypes.string,
  /** Sets the minimum height of the code snippet container. */
  minHeight: PropTypes.string,
  /** Determines if a border should be displayed around the container. */
  showBorder: PropTypes.bool,
  /** Determines if the copy button should be displayed. */
  showCopyButton: PropTypes.bool,
  /** Determines whether line numbers should be displayed. */
  showLineNumbers: PropTypes.bool,
  /** Renders the code snippet in a compact, single-line format. */
  singleLine: PropTypes.bool,
  /** Allows rendering a custom React node as a toolbar above the code snippet. */
  toolbar: PropTypes.node,
  /** Specifies the visual theme or context of the code snippet. */
  view: PropTypes.oneOf(Object.values(CODE_VIEW)),
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-codesnippet--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/5073d4-code-snippet/b/4635b4
 * @end
 */

export default CodeSnippet;
