/**
 * Represents the properties for the AlertTitle component.
 * @typedef {Object} AlertTitleProps
 * @property {React.ReactNode} [children] - The content to be displayed as the alert title. Can be a string or any valid React node.
 * @property {string} [id] - A unique identifier for the alert title element.
 * @property {string} [wrapperClassName] - Additional CSS classes to apply to the alert title's wrapping `<h3>` element for custom styling.
 */

import React, { useContext, useEffect } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { ALERT_LINK_POSITION, ALERT_VARIANTS } from "../Alert/constants/alert";
import { AlertContextData } from "../Alert/context";

/**
 * AlertTitle component displays the title section within an Alert.
 * It automatically adjusts its text color based on the parent Alert's variant (success, error, warning, info).
 * It also handles rendering an inline link if provided and no description is present in the parent Alert.
 *
 * @component
 * @example
 * <Alert variant="success">
 *   <AlertTitle>Success!</AlertTitle>
 *   <AlertDescription>Your operation was completed successfully.</AlertDescription>
 * </Alert>
 *
 * @type {React.FC<AlertTitleProps>}
 */
const AlertTitle = ({ children = null, id = null, wrapperClassName = "" }) => {
  const {
    variant,
    link,
    linkPosition,
    setIsTitlePresent,
    isDescriptionPresent,
  } = useContext(AlertContextData);

  useEffect(() => {
    setIsTitlePresent(true);
    return () => {
      setIsTitlePresent(false);
    };
  }, [setIsTitlePresent]);

  return (
    <h3
      className={twClassNames(
        "text-sm font-medium",
        {
          "text-success-strong": variant === ALERT_VARIANTS.SUCCESS,
          "text-danger-stronger": variant === ALERT_VARIANTS.ERROR,
          "text-attention-strong": variant === ALERT_VARIANTS.WARNING,
          "text-brand-stronger": variant === ALERT_VARIANTS.INFO,
        },
        wrapperClassName
      )}
      {...(id !== null && { id })}
    >
      {children}
      {/* to handle edge case: link is inline, but description is not present */}
      {!isDescriptionPresent &&
        link &&
        linkPosition === ALERT_LINK_POSITION.INLINE &&
        link}
    </h3>
  );
};

AlertTitle.propTypes = {
  /** The content to be displayed as the alert title. Can be a string or any valid React node. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** A unique identifier for the alert title element. */
  id: PropTypes.string,
  /** Additional CSS classes to apply to the alert title's wrapping `<h3>` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */

export default AlertTitle;
