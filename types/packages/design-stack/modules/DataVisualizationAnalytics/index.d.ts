/**
 * @typedef {Object} DataVisualizationAnalyticsProps
 * @property {React.ReactNode} children - The primary content to be rendered within the component. Typically includes charts, tables, or other data visualizations.
 * @property {string} [id] - Optional unique identifier for the root `div` element.
 * @property {boolean} [loading=false] - If `true`, displays a loading indicator instead of the children. Defaults to `false`.
 * @property {keyof typeof LOADING_ICONS} [loadingIcon='BAR_CHART'] - Specifies the icon to display during the loading state. Must be one of the keys from `LOADING_ICONS`. Defaults to `'BAR_CHART'`.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the root `div` element for custom styling.
 */
import React from "react";
/**
 * @type {React.FC<DataVisualizationAnalyticsProps>}
 */
declare const DataVisualizationAnalytics: {
    ({ children: any, id, any, wrapperClassName, any, loading, any, loadingIcon, any, }: any): React.ReactElement;
    propTypes: {
        /** The primary content to be rendered within the component. Typically includes charts, tables, or other data visualizations. */
        children: any;
        /** Optional unique identifier for the root `div` element. */
        id: any;
        /** If `true`, displays a loading indicator instead of the children. */
        loading: any;
        /** Specifies the icon to display during the loading state. Must be one of the keys from `LOADING_ICONS`. */
        loadingIcon: any;
        /** Optional CSS class name(s) to apply to the root `div` element for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */
export default DataVisualizationAnalytics;
