/**
 * @typedef {Object} NotificationsContainerProps
 * @property {Record<string, any>} containerStyle? - A custom object to style toaster. This can be used to change the offset of all toasts.
 */
import React from "react";
/**
 * @type {React.FC<NotificationsContainerProps>}
 */
declare const NotificationsContainer: {
    ({ containerStyle, any, toastOptions, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** A custom object to style toaster. This can be used to change the offset of all toasts. */
        containerStyle: any;
        /** Object containing custom options which will act as default options for all toasts. */
        toastOptions: any;
        /** A custom CSS class name to style the root of the component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-notifications--basic
 * @zeroHeight https://zeroheight.com/023d5159d/p/39e376-notification/b/4635b4
 * @end
 */
export default NotificationsContainer;
