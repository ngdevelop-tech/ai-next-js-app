/**
 * Represents the properties for the Badge component.
 * @typedef {Object} BadgeProps
 * @property {boolean} [hasDot=false] - If true, displays a small dot on the left side of the badge text. Defaults to false.
 * @property {React.ReactNode} [icon=null] - An optional icon element to display instead of the dot, positioned to the left of the badge text.
 * @property {string} [id=null] - An optional unique identifier for the badge element.
 * @property {'base'|'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'} [modifier='base'] - Specifies the color variant of the badge. Defaults to 'base'.
 * @property {boolean} [monospacedDigits=false] - If true, uses numeric glyphs with uniform widths for the badge text. Defaults to false.
 * @property {'basic'|'large'} [size='basic'] - Specifies the size variant of the badge. Defaults to 'basic'.
 * @property {string} [text=''] - The text content to be displayed within the badge. Defaults to an empty string.
 * @property {boolean} [withBorder=false] - If true, applies a border and specific background/text styling to the badge. Defaults to false.
 * @property {string} [wrapperClassName=''] - An optional custom CSS class name to apply to the badge's root span element for additional styling. Defaults to an empty string.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import GetIcon from "./components/GetIcon";
import {
  BADGE_COLOUR_CLASSES,
  BADGE_MODIFIER,
  BADGE_SIZE,
  BADGE_SIZE_CLASSES,
} from "./constants/badge";
import { getIconClasses } from "./utils";

/**
 * Badge component displays a small status descriptor or label.
 * It can include text, an optional icon or dot, and supports various color and size variants.
 * @type {React.FC<BadgeProps>}
 */
const Badge = ({
  hasDot = false,
  icon = null,
  id = null,
  modifier = BADGE_MODIFIER.BASE,
  monospacedDigits = false,
  size = BADGE_SIZE.BASIC,
  text = "",
  withBorder = false,
  wrapperClassName = "",
}) => (
  <span
    {...(id !== null && { id })}
    className={twClassNames(
      "inline-flex items-center rounded-full py-0.5 font-medium",
      BADGE_COLOUR_CLASSES[modifier].BG_TEXT,
      BADGE_SIZE_CLASSES[size].DEFAULT,
      getIconClasses({ hasDot, icon, size }),
      {
        "gap-1.5": icon || hasDot,
        "tabular-nums": monospacedDigits,
        "border border-neutral-default bg-neutral-default text-neutral-default dark:bg-input-default dark:text-neutral-default":
          withBorder,
      },
      wrapperClassName
    )}
  >
    <GetIcon hasDot={hasDot} icon={icon} modifier={modifier} size={size} />

    <span className="line-clamp-1 w-fit break-all">{text}</span>
  </span>
);

Badge.propTypes = {
  /** Shows dot on left hand side of Badge text */
  hasDot: PropTypes.bool,
  /** Icon to be displayed instead of dot prior to Badge text */
  icon: PropTypes.node,
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /** Differnt colour variants of Badge */
  modifier: PropTypes.string,
  /** Boolean prop to use numeric glyphs that have uniform/tabular widths (rather than proportional). */
  monospacedDigits: PropTypes.bool,
  /** Differnt size variants of Badge */
  size: PropTypes.string,
  /** Text to be displayed within Badge */
  text: PropTypes.string,
  /** Shows variant of Badge with border */
  withBorder: PropTypes.bool,
  /** A custom CSS class name to style the Badge component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-badge--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fb97-badge/b/4635b4
 * @end
 */

export default Badge;
