/**
 * Represents the properties for the AlertTitle component.
 * @typedef {Object} AlertTitleProps
 * @property {React.ReactNode} [children] - The content to be displayed as the alert title. Can be a string or any valid React node.
 * @property {string} [id] - A unique identifier for the alert title element.
 * @property {string} [wrapperClassName] - Additional CSS classes to apply to the alert title's wrapping `<h3>` element for custom styling.
 */
import React from "react";
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
declare const AlertTitle: {
    ({ children, any, id, any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** The content to be displayed as the alert title. Can be a string or any valid React node. */
        children: any;
        /** A unique identifier for the alert title element. */
        id: any;
        /** Additional CSS classes to apply to the alert title's wrapping `<h3>` element for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */
export default AlertTitle;
