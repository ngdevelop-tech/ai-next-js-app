/**
 * @typedef {Object} RenderTextProps
 * @property {string} text - Text to be displayed within Tag
 * @property {boolean} withTruncateText - Shows dot prior to tag text
 */

import React from "react";
import PropTypes from "prop-types";

import TruncateText from "../../TruncateText";

/**
 * @type {React.FC<RenderTextProps>}
 */
const RenderText = ({ text, withTruncateText }) => {
  if (withTruncateText)
    return (
      <TruncateText
        headerTooltipProps={{
          wrapperClassName: "break-all [overflow-wrap:anywhere]",
        }}
        isFullWidthTooltip
        containerClassName="w-fit"
        tooltipContent={
          <div className="mb-0 px-4 text-neutral-inverse-weakest">{text}</div>
        }
        hidetooltipTriggerIcon
      >
        {text}
      </TruncateText>
    );
  return <div className="w-fit">{text}</div>;
};

RenderText.propTypes = {
  /** Text to be displayed within Tag */
  text: PropTypes.string.isRequired,
  /** Shows dot prior to tag text */
  withTruncateText: PropTypes.bool.isRequired,
};

export default RenderText;
