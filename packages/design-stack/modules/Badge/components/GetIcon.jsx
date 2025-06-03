/**
 * Properties for the GetIcon component.
 * @typedef {Object} GetIconProps
 * @property {boolean} [hasDot=false] - If true, renders a small dot icon. Takes precedence over the `icon` prop.
 * @property {React.ReactNode} [icon] - Custom icon element to be rendered within the badge. Ignored if `hasDot` is true.
 * @property {keyof typeof BADGE_COLOUR_CLASSES} [modifier='neutral'] - Specifies the color variant of the icon, affecting its styling based on predefined themes.
 * @property {keyof typeof BADGE_SIZE} [size='medium'] - Specifies the size variant of the icon container, affecting its dimensions. Only applicable when `icon` is provided (not `hasDot`).
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { BADGE_COLOUR_CLASSES, BADGE_SIZE } from "../constants/badge";

/**
 * Internal component responsible for rendering the appropriate icon (dot or custom)
 * within a Badge, based on the provided props. It handles styling variations
 * for different colors and sizes.
 *
 * @component
 * @param {GetIconProps} props - Properties passed to the GetIcon component.
 * @returns {React.ReactElement | string} The SVG element for the dot, a div containing the custom icon, or an empty string if neither is applicable.
 * @type {React.FC<GetIconProps>}
 */
const GetIcon = ({ hasDot, icon, modifier, size }) => {
  if (hasDot)
    return (
      <svg
        className={twClassNames(
          "h-2 w-2 ",
          BADGE_COLOUR_CLASSES[modifier].ICON
        )}
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        {hasDot ? <circle cx={4} cy={4} r={3} /> : icon}
      </svg>
    );
  if (icon)
    return (
      <div
        className={twClassNames(
          "flex h-4 w-4 items-center justify-center overflow-hidden",
          BADGE_COLOUR_CLASSES[modifier].ICON,
          {
            "h-5 w-5": BADGE_SIZE.LARGE === size,
          }
        )}
      >
        {icon}
      </div>
    );
  return "";
};

GetIcon.propTypes = {
  /** Determines if dot has to be rendered in Badge. Takes precedence over `icon`. */
  hasDot: PropTypes.bool,
  /** Node containing custom Icon to be displayed in Badge component. Ignored if `hasDot` is true. */
  icon: PropTypes.node,
  /** Specifies the color variant of the icon. */
  modifier: PropTypes.oneOf(Object.keys(BADGE_COLOUR_CLASSES)),
  /** Specifies the size variant of the icon container (only applies when `icon` is used). */
  size: PropTypes.oneOf(Object.values(BADGE_SIZE)),
};

export default GetIcon;
