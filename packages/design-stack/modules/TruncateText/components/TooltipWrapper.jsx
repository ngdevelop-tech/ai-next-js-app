/**
 * @typedef {Object} TooltipWrapperProps
 * @property {string} ariaLabel? - Aria label for the trigger of tooltip
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the tooltip trigger section of the truncateText Component
 * @property {Record<string, any>} headerTooltipProps? - Props for passing props to the tooltip
 * @property {boolean} isTooltipToBeWrapped? - Determins if the children will be wrapper with tooltip
 * @property {React.ReactNode} tooltipContent? - Node containing the content that will be displayed within the tooltip body section of the truncateText Component
 */

import React from "react";
import PropTypes from "prop-types";

import Tooltip, { TooltipPropTypes } from "../../Tooltip";

/**
 * @type {React.FC<TooltipWrapperProps>}
 */
const TooltipWrapper = ({
  ariaLabel,
  children,
  headerTooltipProps,
  isTooltipToBeWrapped,
  tooltipContent,
}) => {
  if (!isTooltipToBeWrapped) return <>{children}</>;
  return (
    <Tooltip
      theme="dark"
      placementSide="bottom"
      content={tooltipContent}
      {...headerTooltipProps}
      triggerWrapperClassName={`w-full text-left block ${
        headerTooltipProps?.triggerWrapperClassName
          ? headerTooltipProps?.triggerWrapperClassName
          : ""
      }`}
      triggerAriaLabel={ariaLabel}
    >
      {children}
    </Tooltip>
  );
};

TooltipWrapper.propTypes = {
  /** Aria label for the trigger of tooltip */
  ariaLabel: PropTypes.string,
  /** Node containing the content that will be displayed within the tooltip trigger section of the truncateText Component */
  children: PropTypes.node,
  /** Props for passing props to the tooltip */
  headerTooltipProps: PropTypes.shape(TooltipPropTypes),
  /** Determins if the children will be wrapper with tooltip */
  isTooltipToBeWrapped: PropTypes.bool,
  /** Node containing the content that will be displayed within the tooltip body section of the truncateText Component */
  tooltipContent: PropTypes.node,
};

TooltipWrapper.defaultProps = {
  ariaLabel: "",
  children: null,
  headerTooltipProps: {},
  isTooltipToBeWrapped: false,
  tooltipContent: null,
};

export default TooltipWrapper;
