import React from "react";
import { MdHome } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { KEYBOARD_KEYS } from "../../../shared/keyEnums";
// import Avatar from '../../Avatar';
import Badge from "../../Badge";
import { copyToClipboard } from "../../CodeSnippet/utils";
import Tag from "../../Tag";
import Tooltip from "../../Tooltip";

const SEMANTIC_TOKEN = "semantic token";
const OLD_CSS_CLASS = "old css class";
const TWCSS_VALUE = "twcss value";

const getStyles = (semanticClass, hex, type) => {
  let style = {};
  switch (type) {
    case "background": {
      if (
        semanticClass.includes("input") ||
        semanticClass.includes("raised") ||
        semanticClass.includes("inverse") ||
        semanticClass.includes("hover") ||
        semanticClass.includes("disabled")
      )
        style = { background: hex };
      break;
    }
    case "surface":
    case "chart": {
      style = { background: hex };
      break;
    }
    default:
      break;
  }
  return style;
};

export const MLC_COLUMNS_TOKENS = [
  {
    name: SEMANTIC_TOKEN,
    key: "Token",
    cell: (value, type) => {
      let content = "";
      if (type === "text")
        content = <p className={value[SEMANTIC_TOKEN]}>Ab</p>;
      else if (type === "icon")
        content = (
          <MdHome className={twClassNames("h-5 w-5", value[SEMANTIC_TOKEN])} />
        );

      return (
        <CopyTokensTooltip>
          <div className="flex items-center">
            <div
              className={twClassNames(
                "flex h-10 w-10 items-center justify-center rounded-full border border-neutral-strong",
                {
                  [value[SEMANTIC_TOKEN]]:
                    type === "background" ||
                    type === "border" ||
                    type === "surface",
                  "bg-neutral-default": type === "text" || type === "icon",
                  "bg-neutral-inverse-default":
                    (type === "text" || type === "icon") &&
                    value[SEMANTIC_TOKEN].includes("inverse"),
                },
                [
                  "icon-attention-inverse-default",
                  "text-attention-inverse-default",
                ].includes(value[SEMANTIC_TOKEN]) && "bg-attention-weak"
              )}
              // for hover and disabled and inverse bg tokens that are not compiled in tailwind stylesheet as they are not used in the code
              style={getStyles(value[SEMANTIC_TOKEN], value["hex code"], type)}
            >
              {content}
            </div>
            <div className="ml-4">
              <button
                type="button"
                className="font-medium text-neutral-default"
                onClick={() => {
                  copyToClipboard(value[SEMANTIC_TOKEN]);
                }}
                onKeyDown={e => {
                  if (e.key === KEYBOARD_KEYS.ENTER)
                    copyToClipboard(value[SEMANTIC_TOKEN]);
                }}
              >
                {value[SEMANTIC_TOKEN]}
              </button>
              <div className="text-neutral-weaker">{value.description}</div>
            </div>
          </div>
        </CopyTokensTooltip>
      );
    },
  },
  {
    name: "hex code",
    key: "hex code",
  },
  {
    name: OLD_CSS_CLASS,
    key: "primitive",
    cell: row => (
      <CopyTokensTooltip>
        <Tag
          onClick={() => copyToClipboard(row[OLD_CSS_CLASS])}
          text={row[OLD_CSS_CLASS]}
        />
      </CopyTokensTooltip>
    ),
  },
  {
    name: TWCSS_VALUE,
    key: TWCSS_VALUE,
    cell: row => <Badge text={row[TWCSS_VALUE]} />,
  },
];

const CopyTokensTooltip = ({ children }) => (
  <Tooltip
    wrapperClassName="p-2 text-neutral-inverse-weak"
    theme="dark"
    placementSide="right"
    content="Copy value"
  >
    {children}
  </Tooltip>
);
CopyTokensTooltip.propTypes = {
  children: PropTypes.node.isRequired,
};

export const SELECT_OPTIONS_TOKENS = [
  {
    label: "All Tokens",
    value: "all",
  },
  { label: "Text", value: "text" },
  { label: "Icon", value: "icon" },
  {
    label: "Surface",
    value: "surface",
  },
  { label: "Background", value: "background" },

  { label: "Border", value: "border" },
  { label: "Chart", value: "chart" },
];

export const SECTION_HEADING_DATA = [
  { label: "Text", description: "" },
  { label: "Icon", description: "To be used for icon and fill" },
  {
    label: "Surface",
    description: "Use these only for body page background",
  },
  {
    label: "Background",
    description: "To be used for background and ring offset",
  },
  {
    label: "Border",
    description: "To be used for border, outline, ring and divide",
  },
  {
    label: "Chart",
    description: "To be used for charts",
  },
];
