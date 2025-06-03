/**
 * Props for the DataVisualization component.
 * @typedef {Object} DataVisualizationProps
 * @property {React.ReactNode} children - The content to be rendered inside the visualization container. Typically includes charts, tables, or other data representations.
 * @property {string} [id] - Optional unique identifier for the root element of the component.
 * @property {keyof typeof DATA_VISUALIZATION_SIZES} [size='DEFAULT'] - Defines the padding and potentially other size-related styles of the visualization card. Accepts values from `DATA_VISUALIZATION_SIZES`.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the root `div` element for custom styling.
 */
import React from "react";
/**
 * DataVisualization serves as a container component for displaying data visualizations like charts or tables.
 * It provides a consistent styled wrapper with border, background, and shadow.
 *
 * @component
 * @param {DataVisualizationProps} props - Props for the DataVisualization component.
 * @returns {React.ReactElement} The rendered DataVisualization component.
 * @example
 * <DataVisualization size="LARGE">
 *   <MyChartComponent />
 * </DataVisualization>
 */
declare const DataVisualization: {
    ({ children: any, id: any, size: any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the component */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Size of visualization card */
        size: any;
        /** A custom CSS class name to style the DataVisualization component */
        wrapperClassName: any;
    };
    defaultProps: {
        id: any;
        size: string;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */
export default DataVisualization;
