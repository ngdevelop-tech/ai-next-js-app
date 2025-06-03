/**
 * @typedef {Object} RenderIconProps
 * @property {boolean} disabled - Shows disabled state of Tag
 * @property {boolean} hasDot - Shows dot prior to tag text
 * @property {React.ReactNode} icon? - Node containing the content that will be displayed within the tag component.
 * @property {string} modifier - Different colour variants of Tag
 * @property {boolean} withBorder - Shows variant of Tag with border
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TAG_MODIFYING_CLASS } from "../constants/tag";

/**
 * @type {React.FC<RenderIconProps>}
 */
const RenderIcon = ({
  disabled,
  hasDot,
  icon = null,
  modifier,
  withBorder,
}) => {
  let iconStyles;

  if (disabled) {
    iconStyles = TAG_MODIFYING_CLASS[modifier].DOT.DISABLED;
  } else if (withBorder) {
    iconStyles = TAG_MODIFYING_CLASS[modifier].DOT.WITH_BORDER;
  } else {
    iconStyles = TAG_MODIFYING_CLASS[modifier].DOT.DEFAULT;
  }

  if (hasDot)
    return (
      <svg
        className={twClassNames("h-1.5 w-1.5", iconStyles)}
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
    );
  if (icon)
    return (
      <div
        className={twClassNames(
          "flex h-4 w-4 items-center justify-center overflow-hidden",
          iconStyles
        )}
      >
        {icon}
      </div>
    );
  return "";
};

RenderIcon.propTypes = {
  /** Shows disabled state of Tag */
  disabled: PropTypes.bool.isRequired,
  /** Shows dot prior to tag text */
  hasDot: PropTypes.bool.isRequired,
  /** Node containing the content that will be displayed within the tag component. */
  icon: PropTypes.node,
  /** Different colour variants of Tag */
  modifier: PropTypes.string.isRequired,
  /** Shows variant of Tag with border */
  withBorder: PropTypes.bool.isRequired,
};

export default RenderIcon;
