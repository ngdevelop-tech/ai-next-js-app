/**
 * Props for the DataVisualizationHeader component.
 *
 * @typedef {Object} DataVisualizationHeaderProps
 * @property {React.ReactNode} [headerInfoTooltip] - Optional tooltip element displayed next to the title, typically used for providing additional context or information about the data being visualized.
 * @property {string} [id] - Optional unique identifier for the root `div` element. Useful for targeting the component for styling or testing.
 * @property {React.ReactNode} [otherOptions] - Optional React node(s) rendered on the right side of the header. Typically used for action buttons, filters, or configuration options related to the data visualization.
 * @property {string} [title] - The main title text displayed in the header. Defaults to an empty string.
 * @property {('h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span')} [titleTagType='h3'] - The HTML tag type to use for rendering the title. Defaults to 'h3'. Must be one of the values defined in `TAG_TYPES`.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the root `div` element for custom styling. Defaults to an empty string.
 */
import React from "react";
/**
 * Renders a standardized header section for data visualization components.
 * It includes a title, an optional info tooltip next to the title, and an area for additional options or controls.
 * The title can be truncated with a tooltip if it exceeds the available space.
 *
 * @component
 * @param {DataVisualizationHeaderProps} props - The props for the DataVisualizationHeader component.
 * @returns {React.ReactElement} The rendered DataVisualizationHeader component.
 * @example
 * ```jsx
 * <DataVisualizationHeader
 *   title="Sales Performance Overview"
 *   headerInfoTooltip={<Tooltip content="Data updated daily"><InfoIcon /></Tooltip>}
 *   otherOptions={<Button variant="secondary">Export Data</Button>}
 * />
 * ```
 */
declare const DataVisualizationHeader: {
    ({ headerInfoTooltip, any, id, any, otherOptions, any, title, any, titleTagType, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional tooltip element displayed next to the title, typically used for providing additional context or information about the data being visualized. */
        headerInfoTooltip: any;
        /** Optional unique identifier for the root `div` element. Useful for targeting the component for styling or testing. */
        id: any;
        /** Optional React node(s) rendered on the right side of the header. Typically used for action buttons, filters, or configuration options related to the data visualization. */
        otherOptions: any;
        /** The main title text displayed in the header. Defaults to an empty string. */
        title: any;
        /** The HTML tag type to use for rendering the title. Defaults to 'h3'. Must be one of the values defined in `TAG_TYPES`. */
        titleTagType: any;
        /** Optional CSS class name(s) to apply to the root `div` element for custom styling. Defaults to an empty string. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */
export default DataVisualizationHeader;
