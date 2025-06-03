/**
 * @typedef {Object} KpiItem
 * @property {string} id - Unique identifier for the KPI item.
 * @property {React.ReactNode} [badgeNode] - Optional node to display as a badge.
 * @property {string} [description] - Text description for the KPI.
 * @property {('up'|'down')} [direction] - Direction indicator for the KPI change (e.g., increase or decrease).
 * @property {boolean} [isBadgeBeforeDescription=false] - If true, renders the badge before the description.
 * @property {React.ReactNode} [leadingIconNode] - Optional icon node to display before the title.
 * @property {(string|number)} [percentage] - The percentage value associated with the KPI.
 * @property {string} [title] - The main title/label for the KPI.
 * @property {React.ReactNode} [trailingIconNode] - Optional icon node to display after the title.
 */

/**
 * @typedef {Object} DataVisualizationKpiProps
 * @property {string} [id] - Prop to add unique id attribute to root of the component.
 * @property {KpiItem[]} kpisArray - An array of KPI objects to display. Each object represents a single KPI metric.
 * @property {boolean} [monospacedDigits=false] - If true, uses numeric glyphs with uniform/tabular widths for consistent alignment.
 * @property {string} [wrapperClassName] - Custom CSS class name to apply to the main container div for additional styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { KPI_DATA_DIRECTION } from "../DataVisualization/constants/dataVisualization";

import Kpi from "./components/Kpi";

/**
 * @type {React.FC<DataVisualizationKpiProps>}
 */
const DataVisualizationKpi = ({
  id = null,
  kpisArray,
  monospacedDigits = false,
  wrapperClassName = "",
}) => (
  <div
    {...(id !== null && { id })}
    className={twClassNames(
      "mt-4 flex  flex-wrap justify-between px-6 tabular-nums",
      {
        "tabular-nums": monospacedDigits,
      },
      wrapperClassName
    )}
  >
    {kpisArray?.map(kpi => (
      <Kpi key={kpi.id} {...kpi} />
    ))}
  </div>
);

DataVisualizationKpi.propTypes = {
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A array of object to pass kpi values in the data visualization kpi. */
  kpisArray: PropTypes.arrayOf(
    PropTypes.shape({
      badgeNode: PropTypes.node,
      description: PropTypes.string,
      direction: PropTypes.oneOf(Object.values(KPI_DATA_DIRECTION)),
      isBadgeBeforeDescription: PropTypes.bool,
      leadingIconNode: PropTypes.node,
      percentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      trailingIconNode: PropTypes.node,
    })
  ).isRequired,
  /** Boolean prop to use numeric glyphs that have uniform/tabular widths (rather than proportional). */
  monospacedDigits: PropTypes.bool,
  /** A custom CSS class name to style the data visualization kpi. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */

export default DataVisualizationKpi;
