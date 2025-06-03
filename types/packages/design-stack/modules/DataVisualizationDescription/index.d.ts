/**
 * Represents the properties for the DataVisualizationDescription component.
 * @typedef {Object} DataVisualizationDescriptionProps
 * @property {string} [desc] - The descriptive text to be displayed below the data visualization. Defaults to an empty string.
 * @property {string} [id] - An optional unique identifier to be assigned to the root paragraph element. Defaults to null.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply custom styles to the root paragraph element. Defaults to an empty string.
 */
import React from "react";
/**
 * Renders a paragraph element intended to display a description or caption
 * for a data visualization component. It applies default styling and allows
 * for customization via className and an optional ID.
 *
 * @component
 * @param {DataVisualizationDescriptionProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered paragraph element.
 */
declare const DataVisualizationDescription: {
    ({ desc: any, id: any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** The descriptive text content for the visualization. */
        desc: any;
        /** A unique identifier for the root paragraph element. */
        id: any;
        /** Custom CSS class name(s) for styling the root paragraph element. */
        wrapperClassName: any;
    };
    defaultProps: {
        desc: string;
        id: any;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */
export default DataVisualizationDescription;
