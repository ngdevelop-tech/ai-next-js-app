/**
 * Props for the AlertDescription component.
 * @typedef {Object} AlertDescriptionProps
 * @property {React.ReactNode} [children] - The content to be rendered inside the alert description.
 * @property {string} [id] - A unique identifier for the alert description element.
 * @property {string} [wrapperClassName] - Additional CSS classes to apply to the description's wrapping div for custom styling.
 */
import React from "react";
/**
 * `AlertDescription` component renders the descriptive text within an `Alert`.
 * It automatically adjusts styling based on the parent `Alert`'s variant and context.
 *
 * @component
 * @param {AlertDescriptionProps} props - Props passed to the AlertDescription component.
 * @returns {React.ReactElement} The rendered AlertDescription component.
 * @type {React.FC<AlertDescriptionProps>}
 */
declare const AlertDescription: {
    ({ children: any, id: any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** The content to be rendered inside the alert description. */
        children: any;
        /** A unique identifier for the alert description element. */
        id: any;
        /** Additional CSS classes to apply to the description's wrapping div for custom styling. */
        wrapperClassName: any;
    };
    defaultProps: {
        children: any;
        id: any;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */
export default AlertDescription;
