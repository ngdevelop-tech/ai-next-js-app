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
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TAG_TYPES } from "../../shared/tagTypesConstants";
import { TP_PLACEMENT_SIDE, TP_SIZE } from "../Tooltip/constants/tooltip";
import TruncateText from "../TruncateText";

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
const DataVisualizationHeader = ({
  headerInfoTooltip = null,
  id = null,
  otherOptions = null,
  title = "",
  titleTagType = TAG_TYPES[2],
  wrapperClassName = "",
}) => {
  const TitleRenderer = TAG_TYPES.includes(titleTagType)
    ? titleTagType
    : TAG_TYPES[2];
  return (
    <div
      {...(id !== null && { id })}
      className={twClassNames(
        "flex items-center justify-between gap-2 px-6 pt-6",
        wrapperClassName
      )}
    >
      <div className="flex items-center gap-2">
        <TitleRenderer className="text-lg font-semibold leading-6 text-neutral-default">
          <TruncateText
            isFullWidthTooltip
            containerClassName="pr-0"
            headerTooltipProps={{
              size: TP_SIZE.SM,
              placementSide: TP_PLACEMENT_SIDE.TOP,
            }}
          >
            {title}
          </TruncateText>
        </TitleRenderer>
        {headerInfoTooltip}
      </div>

      <div className="flex items-center gap-2">{otherOptions}</div>
    </div>
  );
};

DataVisualizationHeader.propTypes = {
  /** Optional tooltip element displayed next to the title, typically used for providing additional context or information about the data being visualized. */
  headerInfoTooltip: PropTypes.node,
  /** Optional unique identifier for the root `div` element. Useful for targeting the component for styling or testing. */
  id: PropTypes.string,
  /** Optional React node(s) rendered on the right side of the header. Typically used for action buttons, filters, or configuration options related to the data visualization. */
  otherOptions: PropTypes.node,
  /** The main title text displayed in the header. Defaults to an empty string. */
  title: PropTypes.string,
  /** The HTML tag type to use for rendering the title. Defaults to 'h3'. Must be one of the values defined in `TAG_TYPES`. */
  titleTagType: PropTypes.oneOf(TAG_TYPES),
  /** Optional CSS class name(s) to apply to the root `div` element for custom styling. Defaults to an empty string. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */

export default DataVisualizationHeader;
