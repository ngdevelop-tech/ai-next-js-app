/**
 * @typedef {Object} MarkerProps
 * @property {number} duration
 * @property {(event: React.MouseEvent<any>) => void} onMarkerClick?
 * @property {(event: React.MouseEvent<any>) => void} onMarkerMouseEnter?
 * @property {(event: React.MouseEvent<any>) => void} onMarkerMouseLeave?
 * @property {number} startTime
 * @property {any} type?
 * @property {string} wrapperClassName?
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import convertSecondsToTimeFormat from "../utils/convertSecondsToTimeFormat";

/**
 * @type {React.FC<MarkerProps>}
 */
const Marker = ({
  startTime,
  duration,
  onMarkerClick,
  onMarkerMouseEnter,
  onMarkerMouseLeave,
  type,
  wrapperClassName,
}) => {
  const startTimeInMinutes = startTime
    ? convertSecondsToTimeFormat(startTime)
    : "00:00";

  const handleOnClick = () => {
    onMarkerClick(startTime, type);
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={-1}
      aria-label={`Exception at ${startTimeInMinutes}`}
      className={twClassNames(
        "absolute z-10 block h-full min-w-[2px]",
        {
          "bg-attention-weak": type === "warning",
          "bg-danger-default": type === "error",
        },
        wrapperClassName
      )}
      style={{
        left: `${(startTime / duration) * 100}%`,
        width: `${100 / duration}%`,
      }}
      onClick={handleOnClick}
      data-markertype={type}
      onMouseEnter={onMarkerMouseEnter}
      onMouseLeave={onMarkerMouseLeave}
      onKeyDown={handleKeyDown}
    />
  );
};

Marker.propTypes = {
  duration: PropTypes.number.isRequired,
  onMarkerClick: PropTypes.func,
  onMarkerMouseEnter: PropTypes.func,
  onMarkerMouseLeave: PropTypes.func,
  startTime: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["warning", "error"]),
  wrapperClassName: PropTypes.string,
};

Marker.defaultProps = {
  onMarkerClick: () => {},
  onMarkerMouseEnter: () => {},
  onMarkerMouseLeave: () => {},
  type: "warning",
  wrapperClassName: "",
};

export default Marker;
