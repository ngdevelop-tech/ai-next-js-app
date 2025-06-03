/**
 * @typedef {Object} SliderToolTipProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed along with Slider Tooltip component
 * @property {boolean} screenReadTooltip? - Enable screen reader on slider tooltip content
 * @property {string} thumbId - The thumbId is used to handle multiple instacnes of slider for adding event listeners
 * @property {string} tooltipUnit? - A unit to represent the type of value shown on tooltip
 * @property {number} totalValue? - The totalValue is used to handle the placement of tooltip
 * @property {number} value? - The Slider current value to display within the Slider Tooltip component
 */

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Tooltip from "../../Tooltip";
import {
  TP_PLACEMENT_SIDE,
  TP_TOOLTIP_THEME,
} from "../../Tooltip/constants/tooltip";
import TooltipHeader from "../../TooltipHeader";

/**
 * @type {React.FC<SliderToolTipProps>}
 */
const SliderToolTip = ({
  children,
  thumbId,
  tooltipUnit,
  totalValue,
  value,
  screenReadTooltip,
}) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const handleShowToolTip = () => setShowToolTip(true);
  const handleHideToolTip = () => setShowToolTip(false);

  useEffect(() => {
    const thumb = document.getElementById(thumbId);
    if (thumb) {
      thumb.addEventListener("focusin", handleShowToolTip);
      thumb.addEventListener("focusout", handleHideToolTip);

      thumb.addEventListener("mouseenter", handleShowToolTip);
      thumb.addEventListener("mouseleave", handleHideToolTip);
    }

    return () => {
      thumb.removeEventListener("focusin", handleShowToolTip);
      thumb.removeEventListener("focusout", handleHideToolTip);
      if (thumb) {
        thumb.removeEventListener("mouseenter", handleShowToolTip);
        thumb.removeEventListener("mouseleave", handleHideToolTip);
      }
    };
  }, [thumbId]);

  return (
    <Tooltip
      show={showToolTip}
      theme={TP_TOOLTIP_THEME.DARK}
      wrapperClassName="px-1 py-0.5"
      sideOffset={5}
      arrowWidth={8}
      arrowHeight={4}
      shouldRenderChildInDiv={false}
      placementSide={
        value < totalValue / 2
          ? TP_PLACEMENT_SIDE.RIGHT
          : TP_PLACEMENT_SIDE.LEFT
      }
      disableContentReader={!screenReadTooltip}
      content={
        <TooltipHeader wrapperClassName="px-0 py-0 text-sm">
          {`${value}${tooltipUnit}`}
        </TooltipHeader>
      }
    >
      {children}
    </Tooltip>
  );
};

SliderToolTip.propTypes = {
  /** Node containing the content that will be displayed along with Slider Tooltip component */
  children: PropTypes.node,
  /** Enable screen reader on slider tooltip content */
  screenReadTooltip: PropTypes.bool,
  /** The thumbId is used to handle multiple instacnes of slider for adding event listeners */
  thumbId: PropTypes.string.isRequired,
  /** A unit to represent the type of value shown on tooltip */
  tooltipUnit: PropTypes.string,
  /** The totalValue is used to handle the placement of tooltip */
  totalValue: PropTypes.number,
  /** The Slider current value to display within the Slider Tooltip component */
  value: PropTypes.number,
};

SliderToolTip.defaultProps = {
  children: null,
  value: undefined,
  tooltipUnit: "",
  totalValue: 100,
  screenReadTooltip: false,
};

export default SliderToolTip;
