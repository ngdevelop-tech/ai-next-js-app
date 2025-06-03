/**
 * @typedef {Object} TooltipFooterProps
 * @property {React.ReactNode} children? - The content to be displayed within the tooltip footer. It can accept any React node, such as a string, JSX element, or component.
 * @property {string} id? - A cusom id to identify component uniquely.
 * @property {any} position? - Sets the postion of the tooltip footer. The avaible positions are 'left', 'center', 'right'.
 * @property {string} wrapperClassName? - Additional class name(s) to be applied to the wrapper element of tooltip footer.
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TP_ACTION_ITEM_POSITION } from "../Tooltip/constants/tooltip";
import { ThemeContextData } from "../Tooltip/context";
/**
 * @type {React.FC<TooltipFooterProps>}
 */
const TooltipFooter = ({ children, id, position, wrapperClassName }) => {
  const tooltipTheme = useContext(ThemeContextData);

  return (
    <div
      {...(id !== null && { id })}
      className={twClassNames(
        "flex space-x-3",
        {
          "justify-end": position === TP_ACTION_ITEM_POSITION.RIGHT,
          "justify-center": position === TP_ACTION_ITEM_POSITION.CENTER,
          "px-4": !tooltipTheme?.isCompactVariant,
        },
        wrapperClassName
      )}
    >
      {children}
    </div>
  );
};

TooltipFooter.propTypes = {
  /** The content to be displayed within the tooltip footer. It can accept any React node, such as a string, JSX element, or component. */
  children: PropTypes.node,
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /** Sets the postion of the tooltip footer. The avaible positions are 'left', 'center', 'right'.  */
  position: PropTypes.oneOf(Object.values(TP_ACTION_ITEM_POSITION)),
  /** Additional class name(s) to be applied to the wrapper element of tooltip footer. */
  wrapperClassName: PropTypes.string,
};

TooltipFooter.defaultProps = {
  children: null,
  id: null,
  position: TP_ACTION_ITEM_POSITION.LEFT,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tooltip--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/767c4c-tooltip/b/4635b4
 * @end
 */

export default TooltipFooter;
