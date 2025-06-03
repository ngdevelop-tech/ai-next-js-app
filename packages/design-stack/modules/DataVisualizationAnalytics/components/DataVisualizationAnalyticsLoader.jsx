/**
 * @typedef {Object} DataVisualizationAnalyticsLoaderProps
 * @property {string} loadingIconName? - Prop to show the icon in the loading state of the data visualization analytics.
 */

import React from "react";
import {
  MdBarChart,
  MdDonutLarge,
  MdPieChart,
  MdTimeline,
} from "react-icons/md";
import PropTypes from "prop-types";

import SkeletonLoader from "../../SkeletonLoader";
import { LOADING_ICONS } from "../constants/dataVisualizationAnalytics";

export function DataVisualizationAnalyticsLoader({
  loadingIconName = LOADING_ICONS.BAR_CHART,
}) {
  let loadingIcon = null;

  switch (loadingIconName) {
    case LOADING_ICONS.DONUT_CHART:
      loadingIcon = <MdDonutLarge />;
      break;
    case LOADING_ICONS.PIE_CHART:
      loadingIcon = <MdPieChart />;
      break;
    case LOADING_ICONS.LINE_CHART:
      loadingIcon = <MdTimeline />;
      break;
    case LOADING_ICONS.BAR_CHART:
      loadingIcon = <MdBarChart />;
      break;
    default:
      loadingIcon = <MdBarChart />;
  }

  return <SkeletonLoader icon={loadingIcon} wrapperClassName="h-full w-full" />;
}

DataVisualizationAnalyticsLoader.propTypes = {
  /** Prop to show the icon in the loading state of the data visualization analytics. */
  loadingIconName: PropTypes.string,
};
