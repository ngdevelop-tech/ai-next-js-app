/**
 * Props for the DataVisualization component.
 * @typedef {Object} DataVisualizationProps
 * @property {React.ReactNode} children - The content to be rendered inside the visualization container. Typically includes charts, tables, or other data representations.
 * @property {string} [id] - Optional unique identifier for the root element of the component.
 * @property {keyof typeof DATA_VISUALIZATION_SIZES} [size='DEFAULT'] - Defines the padding and potentially other size-related styles of the visualization card. Accepts values from `DATA_VISUALIZATION_SIZES`.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the root `div` element for custom styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  DATA_VISUALIZATION_SIZES,
  DATA_VISUALIZATION_SIZES_CLASSES,
} from "./constants/dataVisualization";

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
const DataVisualization = ({ children, id, size, wrapperClassName }) => (
  <div
    {...(id !== null && { id })}
    className={twClassNames(
      "w-full min-w-0 max-w-full overflow-hidden break-all rounded-lg border border-neutral-default bg-neutral-default shadow-sm",
      DATA_VISUALIZATION_SIZES_CLASSES[size],
      wrapperClassName
    )}
  >
    {children}
  </div>
);

DataVisualization.propTypes = {
  /** Node containing the content that will be displayed within the component */
  children: PropTypes.node.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Size of visualization card */
  size: PropTypes.oneOf(Object.values(DATA_VISUALIZATION_SIZES)),
  /** A custom CSS class name to style the DataVisualization component */
  wrapperClassName: PropTypes.string,
};

DataVisualization.defaultProps = {
  id: null,
  size: DATA_VISUALIZATION_SIZES.DEFAULT,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */

export default DataVisualization;
