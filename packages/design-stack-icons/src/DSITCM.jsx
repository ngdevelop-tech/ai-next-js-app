import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

const DSITCM = props => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
      className={twClassNames("icon-neutral-strong", className)}
    >
      <path
        fill="currentColor"
        d="M17.149 6.62a.92.92 0 0 1 .035 1.295L13.82 11.5 11.7 9.365a.997.997 0 1 1 1.415-1.405l.705.71 2.044-2.036a.92.92 0 0 1 1.285-.014m.128 6.158a1 1 0 0 1-.016 1.43L13.82 17.5l-2.12-2.135a.997.997 0 1 1 1.415-1.405l.705.71 1.973-1.965a1 1 0 0 1 1.413.001zM10 8H7v2h3zm0 6H7v2h3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 2v14h14V5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

DSITCM.propTypes = {
  className: PropTypes.string,
};

DSITCM.defaultProps = {
  className: "",
};

export default DSITCM;
