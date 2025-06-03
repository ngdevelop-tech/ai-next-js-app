/**
 * Props for the DataVisualizationFooter component.
 * @typedef {Object} DataVisualizationFooterProps
 * @property {string} [footerDescription] - Optional description text displayed in the footer.
 * @property {HyperlinkProps} [footerlinkProps] - Optional object containing props to be passed down to the underlying `Hyperlink` component. See `HyperlinkProps` for available options.
 * @property {string} [footerlinkText] - Optional text for the link displayed in the footer. If provided, a link will be rendered.
 * @property {string} [id] - Optional unique identifier to be added to the root `div` element.
 * @property {string} [wrapperClassName] - Optional custom CSS class name(s) to apply to the root `div` element for custom styling.
 */
import React from "react";
/**
 * Renders a footer section typically used below data visualizations.
 * It can display a description and a call-to-action link.
 *
 * @component
 * @param {DataVisualizationFooterProps} props - Props for the DataVisualizationFooter component.
 * @returns {React.ReactElement} The rendered DataVisualizationFooter component.
 * @type {React.FC<DataVisualizationFooterProps>}
 */
declare const DataVisualizationFooter: {
    ({ footerDescription, any, footerlinkProps, any, footerlinkText, any, id, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional description text displayed in the footer. */
        footerDescription: any;
        /** Optional object containing props to be passed down to the underlying `Hyperlink` component. See `HyperlinkProps` for available options. */
        footerlinkProps: any;
        /** Optional text for the link displayed in the footer. If provided, a link will be rendered. */
        footerlinkText: any;
        /** Optional unique identifier to be added to the root `div` element. */
        id: any;
        /** Optional custom CSS class name(s) to apply to the root `div` element for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */
export default DataVisualizationFooter;
