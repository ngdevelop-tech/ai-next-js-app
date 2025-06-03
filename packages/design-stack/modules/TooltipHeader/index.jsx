/**
 * @typedef {Object} TooltipHeaderProps
 * @property {React.ReactNode} children? - The content to be displayed within the tooltip header. It can accept any React node, such as a string, JSX element, or component.
 * @property {string} id? - A cusom id to identify component uniquely.
 * @property {string} wrapperClassName? - Additional class name(s) to be applied to the wrapper element of tooltip header.
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TP_TOOLTIP_THEME } from "../Tooltip/constants/tooltip";
import { ThemeContextData } from "../Tooltip/context";

/**
 * @type {React.FC<TooltipHeaderProps>}
 */
const TooltipHeader = ({
  children = null,
  id = null,
  wrapperClassName = "",
}) => {
  const tooltipTheme = useContext(ThemeContextData);

  return (
    <p
      id={id}
      {...(id !== null && { id })}
      className={twClassNames(
        tooltipTheme?.isCompactVariant
          ? "text-xs font-semibold leading-4"
          : "px-4 font-semibold",
        {
          "text-neutral-default":
            tooltipTheme?.theme === TP_TOOLTIP_THEME.LIGHT,
          "text-neutral-inverse-weak":
            tooltipTheme?.theme === TP_TOOLTIP_THEME.DARK,
        },
        wrapperClassName
      )}
    >
      {children}
    </p>
  );
};

TooltipHeader.propTypes = {
  /** The content to be displayed within the tooltip header. It can accept any React node, such as a string, JSX element, or component. */
  children: PropTypes.node,
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /** Additional class name(s) to be applied to the wrapper element of tooltip header. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tooltip--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/767c4c-tooltip/b/4635b4
 * @end
 */

export default TooltipHeader;
