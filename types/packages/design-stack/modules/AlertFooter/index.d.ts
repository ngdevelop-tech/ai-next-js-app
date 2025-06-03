/**
 * Defines the properties for the AlertFooter component.
 * @typedef {Object} AlertFooterProps
 * @property {React.ReactNode} [children] - The content to be rendered inside the footer area. Typically used for action buttons or links related to the alert message.
 * @property {string} [id] - An optional unique identifier for the AlertFooter component. If provided, it will be added as the `id` attribute to the underlying `div` element.
 * @property {string} [wrapperClassName] - An optional CSS class name to apply custom styles to the AlertFooter's container `div`.
 */
import React from "react";
/**
 * AlertFooter component renders a designated area at the bottom of an Alert component,
 * typically used to display action items like buttons or links.
 * It inherits the alert's variant (e.g., success, error) to apply appropriate text styling.
 * This component should be used as a child of the Alert component.
 * @type {React.FC<AlertFooterProps>}
 * @param {AlertFooterProps} props - The props for the AlertFooter component.
 */
declare const AlertFooter: {
    ({ children, any, id, any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the AlertFooter component. */
        children: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /** A custom CSS class name to style the AlertFooter component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */
export default AlertFooter;
