/**
 * @typedef {Object} AlertProps
 * @property {boolean} [accentBorder=false] - If true, displays a prominent border on the left side based on the alert variant.
 * @property {React.ReactNode} children - The main content of the alert. Typically includes `Alert.Title`, `Alert.Description`, and optionally `Alert.Footer`.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [dismissCallback] - Optional callback function triggered when the dismiss button is clicked.
 * @property {React.ReactNode} [icon] - Custom icon element to display. If omitted, a default icon based on the `variant` is shown.
 * @property {string} [id] - Optional unique identifier for the alert container element.
 * @property {boolean} [isDismiss=false] - If true, displays a dismiss button ('x') on the right side of the alert.
 * @property {React.ReactNode} [link] - Optional link element, typically an `Alert.Link`, to include within the alert for navigation or actions.
 * @property {boolean} [show=true] - Controls the visibility of the alert. Set to `false` to hide the alert with a transition.
 * @property {typeof ALERT_VARIANTS[keyof typeof ALERT_VARIANTS]} [variant='info'] - The style variant of the alert, determining its background color, border color, and default icon.
 * @property {string} [wrapperClassName=''] - Optional additional CSS class names to apply to the main alert container `div`.
 */
import React from "react";
/**
 * Displays contextual messages for typical user actions with the handful of available and flexible alert messages.
 * Alerts provide immediate feedback or important information related to user actions or system status.
 * They can be configured with different variants (success, error, warning, info), optional icons, dismiss buttons, and links.
 *
 * @type {React.FC<AlertProps>}
 */
declare const Alert: {
    ({ accentBorder, any, children: any, dismissCallback, any, icon, any, id, any, isDismiss, any, link, any, show, any, variant, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Whether to show a variant border on the left */
        accentBorder: any;
        /** Node containing the content that will be displayed within the Alert. */
        children: any;
        /** Callback function onClick of dismiss alert */
        dismissCallback: any;
        /** Custom icon for the alert. If not specified, variant based icon will be rendered by default */
        icon: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /** Whether to show a dismiss button */
        isDismiss: any;
        /** The link navigation from the alert. Recommended to use AlertLink */
        link: any;
        /** Whether the alert should be shown or hidden */
        show: any;
        /** The severity of the alert. This defines the color and icon used */
        variant: any;
        /** A custom CSS class name to style the Alert Component. */
        wrapperClassName: any;
    };
};
export default Alert;
