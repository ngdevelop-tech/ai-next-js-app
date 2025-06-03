import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";

export const DEFAULT_RESIZER = (isDragging, isCurrentResizerFocused) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2"
    height="100%"
    preserveAspectRatio="none"
    fill="none"
    className={twClassNames("icon-neutral-weak", {
      "icon-brand-default": isDragging || isCurrentResizerFocused,
    })}
  >
    <path
      d="M1 1V100%"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const KEYBOARD_DRAGGED_RESIZER = () => (
  <svg
    className="icon-brand-stronger"
    xmlns="http://www.w3.org/2000/svg"
    width="4"
    height="100%"
    preserveAspectRatio="none"
    fill="none"
  >
    <path
      d="M2 2V100%"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const RESIZER_SEPERATOR = seperatorHeight => (
  <svg
    stroke="var(--border-brand-default)"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="2"
    height="100%"
    // for lengths >1000 the svg was not taking the whole length(of parent), hence taking 1000 as maxheight of the table
    {...(seperatorHeight > 1000 && { viewBox: "0 0 2 1000" })}
    preserveAspectRatio="none"
  >
    <path d="M1 0V1000" strokeDasharray="8 4" />
  </svg>
);
