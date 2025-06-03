/**
 * @typedef {Object} CopyButtonProps
 * @property {string} [copiedAriaLabel] - The ARIA label for the button when the code has been successfully copied. Defaults to an empty string.
 * @property {string} [copyAriaLabel] - The ARIA label for the button before the code is copied. Defaults to an empty string.
 */

import React, { useContext, useRef, useState } from "react";
import { MdCheckCircle, MdOutlineContentCopy } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../../Button";
import { CodeSnippetContextData } from "../context";
import { copyToClipboard } from "../utils";

/**
 * Renders a button within a CodeSnippet component that allows users to copy the code to their clipboard.
 * It displays different icons and text ('Copy'/'Copied!') based on the copy state.
 * The button appears on hover or focus within the CodeSnippet context.
 *
 * @type {React.FC<CopyButtonProps>}
 */
const CopyButton = ({ copiedAriaLabel = "", copyAriaLabel = "" }) => {
  const ref = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  const { code, setShowCopy, showCopy, copyCallback } = useContext(
    CodeSnippetContextData
  );
  return (
    <Button
      ref={ref}
      onMouseEnter={() => setShowCopy(true)}
      wrapperClassName={twClassNames(
        "absolute right-2 top-2 z-10 rounded-md opacity-0",
        {
          "opacity-100": showCopy,
        }
      )}
      variant="rounded"
      colors="white"
      onClick={() => {
        copyToClipboard(code);
        copyCallback?.();
        setIsCopied(true);
        setShowCopy(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
        ref.current.focus();
      }}
      onFocus={() => {
        setShowCopy(true);
      }}
      onBlur={() => {
        setShowCopy(false);
      }}
      ariaLabel={isCopied ? copiedAriaLabel : copyAriaLabel}
    >
      <div
        className={twClassNames("flex items-center space-x-1", {
          "": showCopy,
        })}
      >
        {isCopied ? (
          <MdCheckCircle className="h-4 w-4" />
        ) : (
          <MdOutlineContentCopy className="h-4 w-4" />
        )}
        <span>{!isCopied ? "Copy" : "Copied!"}</span>
      </div>
    </Button>
  );
};

CopyButton.propTypes = {
  /** The ARIA label for the button when the code has been successfully copied. */
  copiedAriaLabel: PropTypes.string,
  /** The ARIA label for the button before the code is copied. */
  copyAriaLabel: PropTypes.string,
};

export default CopyButton;
