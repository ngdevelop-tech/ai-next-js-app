/**
 * @typedef {Object} NotificationsContainerProps
 * @property {Record<string, any>} containerStyle? - A custom object to style toaster. This can be used to change the offset of all toasts.
 */

import React from "react";
import { Toaster } from "react-hot-toast";
import PropTypes from "prop-types";

/**
 * @type {React.FC<NotificationsContainerProps>}
 */
const NotificationsContainer = ({
  containerStyle = {},
  toastOptions = {},
  wrapperClassName = "",
}) => (
  <div className={wrapperClassName} id="toaster">
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerStyle={containerStyle}
      toastOptions={toastOptions}
    />
  </div>
);

NotificationsContainer.propTypes = {
  /** A custom object to style toaster. This can be used to change the offset of all toasts. */
  containerStyle: PropTypes.shape({}),
  /** Object containing custom options which will act as default options for all toasts. */
  toastOptions: PropTypes.shape({}),
  /** A custom CSS class name to style the root of the component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-notifications--basic
 * @zeroHeight https://zeroheight.com/023d5159d/p/39e376-notification/b/4635b4
 * @end
 */

export default NotificationsContainer;
