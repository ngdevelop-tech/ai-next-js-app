/**
 * @typedef {Object} AlertLinkProps
 * @property {React.ReactNode} [children] - The content to be displayed within the link.
 * @property {string} [href='#'] - The URL that the hyperlink points to.
 * @property {string} [id] - A custom id to identify the component uniquely.
 * @property {boolean} isCSR?
 * @property {(event: React.MouseEvent<HTMLAnchorElement>) => void} [onClick] - Callback function triggered when the link is clicked.
 * @property {typeof ALERT_LINK_POSITION[keyof typeof ALERT_LINK_POSITION]} [position='end'] - Specifies the placement of the alert link relative to other content. Allowed values: 'inline', 'end'.
 * @property {string} [rel] - Specifies the relationship of the target object to the link object.
 * @property {'_self' | '_blank' | '_parent' | '_top'} [target] - Specifies where to open the linked document (e.g., '_blank', '_self').
 * @property {string} [wrapperClassName] - Custom CSS class name(s) to apply to the link wrapper element for additional styling.
 */

import React, { forwardRef, useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { ALERT_LINK_POSITION, ALERT_VARIANTS } from "../Alert/constants/alert";
import { AlertContextData } from "../Alert/context";
import Hyperlink from "../Hyperlink";

/**
 * AlertLink component displays a hyperlink within an Alert component, styled according to the alert's variant.
 * It inherits context from the parent Alert to determine its appearance and behavior.
 *
 * @type {React.ForwardRefExoticComponent<AlertLinkProps & React.RefAttributes<HTMLElement>>}
 */
const AlertLink = forwardRef(
  (
    {
      children = null,
      id = null,
      position = ALERT_LINK_POSITION.END,
      wrapperClassName = "",
      href = "#",
      isCSR = false,
      onClick = null,
      rel = "",
      target = "",
      ...rest
    },
    ref
  ) => {
    const { variant, isDismiss, isDescriptionPresent } =
      useContext(AlertContextData);

    // design edge case: do not allow link position 'end', when description and dismiss button are present
    if (
      isDismiss &&
      isDescriptionPresent &&
      position === ALERT_LINK_POSITION.END
    ) {
      return null;
    }

    return (
      <Hyperlink
        {...rest}
        ref={ref}
        wrapperClassName={twClassNames(
          "mt-3 text-sm font-medium md:mt-0",
          {
            "inline ml-2 underline": position === ALERT_LINK_POSITION.INLINE,
            "text-success-default hover:text-success-stronger":
              variant === ALERT_VARIANTS.SUCCESS,
            "text-danger-strong hover:text-danger-strongest":
              variant === ALERT_VARIANTS.ERROR,
            "text-attention-default hover:text-attention-stronger":
              variant === ALERT_VARIANTS.WARNING,
            "text-brand-strong hover:text-brand-strongest":
              variant === ALERT_VARIANTS.INFO,
          },
          wrapperClassName
        )}
        {...(id !== null && { id })}
      >
        {children}
      </Hyperlink>
    );
  }
);

AlertLink.propTypes = {
  /** The content to be displayed within the link. */
  children: PropTypes.node,

  /** The URL that the hyperlink points to. */
  href: PropTypes.string,
  /** A custom id to identify the component uniquely. */
  id: PropTypes.string,

  isCSR: PropTypes.bool,

  /** Callback function triggered when the link is clicked. */
  onClick: PropTypes.func,

  /** Placement of the alert link. Allowed values: 'inline', 'end'. */
  position: PropTypes.oneOf(Object.values(ALERT_LINK_POSITION)),

  /** Specifies the relationship of the target object to the link object. */
  rel: PropTypes.string,

  /** Specifies where to open the linked document (e.g., '_blank', '_self'). */
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top", ""]),

  /** Custom CSS class name(s) to apply to the link wrapper element. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */

export default AlertLink;
