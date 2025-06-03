/**
 * @typedef {Object} DataVisualizationAnalyticsProps
 * @property {React.ReactNode} children - The primary content to be rendered within the component. Typically includes charts, tables, or other data visualizations.
 * @property {string} [id] - Optional unique identifier for the root `div` element.
 * @property {boolean} [loading=false] - If `true`, displays a loading indicator instead of the children. Defaults to `false`.
 * @property {keyof typeof LOADING_ICONS} [loadingIcon='BAR_CHART'] - Specifies the icon to display during the loading state. Must be one of the keys from `LOADING_ICONS`. Defaults to `'BAR_CHART'`.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the root `div` element for custom styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { DataVisualizationAnalyticsLoader } from "./components/DataVisualizationAnalyticsLoader";
import { LOADING_ICONS } from "./constants/dataVisualizationAnalytics";

/**
 * @type {React.FC<DataVisualizationAnalyticsProps>}
 */
const DataVisualizationAnalytics = ({
  children,
  id = null,
  wrapperClassName = "",
  loading = false,
  loadingIcon = LOADING_ICONS.BAR_CHART,
}) => (
  <div
    {...(id !== null && { id })}
    className={twClassNames("px-6", wrapperClassName)}
  >
    {loading ? (
      <DataVisualizationAnalyticsLoader loadingIconName={loadingIcon} />
    ) : (
      <> {children} </>
    )}
  </div>
);

DataVisualizationAnalytics.propTypes = {
  /** The primary content to be rendered within the component. Typically includes charts, tables, or other data visualizations. */
  children: PropTypes.node.isRequired,
  /** Optional unique identifier for the root `div` element. */
  id: PropTypes.string,
  /** If `true`, displays a loading indicator instead of the children. */
  loading: PropTypes.bool,
  /** Specifies the icon to display during the loading state. Must be one of the keys from `LOADING_ICONS`. */
  loadingIcon: PropTypes.oneOf(Object.values(LOADING_ICONS)),
  /** Optional CSS class name(s) to apply to the root `div` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */

export default DataVisualizationAnalytics;
