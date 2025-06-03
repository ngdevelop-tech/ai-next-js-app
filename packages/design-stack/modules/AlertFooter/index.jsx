/**
 * Defines the properties for the AlertFooter component.
 * @typedef {Object} AlertFooterProps
 * @property {React.ReactNode} [children] - The content to be rendered inside the footer area. Typically used for action buttons or links related to the alert message.
 * @property {string} [id] - An optional unique identifier for the AlertFooter component. If provided, it will be added as the `id` attribute to the underlying `div` element.
 * @property {string} [wrapperClassName] - An optional CSS class name to apply custom styles to the AlertFooter's container `div`.
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { ALERT_VARIANTS } from "../Alert/constants/alert";
import { AlertContextData } from "../Alert/context";

/**
 * AlertFooter component renders a designated area at the bottom of an Alert component,
 * typically used to display action items like buttons or links.
 * It inherits the alert's variant (e.g., success, error) to apply appropriate text styling.
 * This component should be used as a child of the Alert component.
 * @type {React.FC<AlertFooterProps>}
 * @param {AlertFooterProps} props - The props for the AlertFooter component.
 */
const AlertFooter = ({ children = null, id = null, wrapperClassName = "" }) => {
  const { variant } = useContext(AlertContextData);

  return (
    <div
      {...(id !== null && { id })}
      className={twClassNames(
        "-ml-2 mt-1 flex gap-2 text-sm",
        {
          "text-success-default": variant === ALERT_VARIANTS.SUCCESS,
          "text-danger-strong": variant === ALERT_VARIANTS.ERROR,
          "text-attention-default": variant === ALERT_VARIANTS.WARNING,
          "text-brand-strong": variant === ALERT_VARIANTS.INFO,
        },
        wrapperClassName
      )}
    >
      {children}
    </div>
  );
};

AlertFooter.propTypes = {
  /** Node containing the content that will be displayed within the AlertFooter component. */
  children: PropTypes.node,
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /** A custom CSS class name to style the AlertFooter component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */

export default AlertFooter;
