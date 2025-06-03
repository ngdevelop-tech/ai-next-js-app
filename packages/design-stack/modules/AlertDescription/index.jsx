/**
 * Props for the AlertDescription component.
 * @typedef {Object} AlertDescriptionProps
 * @property {React.ReactNode} [children] - The content to be rendered inside the alert description.
 * @property {string} [id] - A unique identifier for the alert description element.
 * @property {string} [wrapperClassName] - Additional CSS classes to apply to the description's wrapping div for custom styling.
 */

import React, { useContext, useEffect } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { ALERT_LINK_POSITION, ALERT_VARIANTS } from "../Alert/constants/alert";
import { AlertContextData } from "../Alert/context";

/**
 * `AlertDescription` component renders the descriptive text within an `Alert`.
 * It automatically adjusts styling based on the parent `Alert`'s variant and context.
 *
 * @component
 * @param {AlertDescriptionProps} props - Props passed to the AlertDescription component.
 * @returns {React.ReactElement} The rendered AlertDescription component.
 * @type {React.FC<AlertDescriptionProps>}
 */
const AlertDescription = ({ children, id, wrapperClassName }) => {
  const {
    variant,
    link,
    linkPosition,
    isTitlePresent,
    setIsDescriptionPresent,
  } = useContext(AlertContextData);

  useEffect(() => {
    setIsDescriptionPresent(true);
    return () => {
      setIsDescriptionPresent(false);
    };
  }, [setIsDescriptionPresent]);

  return (
    <div
      className={twClassNames(
        "text-sm",
        {
          "mt-2": isTitlePresent,
          "text-success-default": variant === ALERT_VARIANTS.SUCCESS,
          "text-danger-strong": variant === ALERT_VARIANTS.ERROR,
          "text-attention-default": variant === ALERT_VARIANTS.WARNING,
          "text-brand-strong": variant === ALERT_VARIANTS.INFO,
        },
        wrapperClassName
      )}
      {...(id !== null && { id })}
    >
      {children}
      {link && linkPosition === ALERT_LINK_POSITION.INLINE && link}
    </div>
  );
};

AlertDescription.propTypes = {
  /** The content to be rendered inside the alert description. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** A unique identifier for the alert description element. */
  id: PropTypes.string,
  /** Additional CSS classes to apply to the description's wrapping div for custom styling. */
  wrapperClassName: PropTypes.string,
};

AlertDescription.defaultProps = {
  children: null,
  id: null,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */

export default AlertDescription;
