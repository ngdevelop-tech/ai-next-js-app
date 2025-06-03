import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

const DSITurboScale = props => {
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
        d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"
      />
    </svg>
  );
};

DSITurboScale.propTypes = {
  className: PropTypes.string,
};

DSITurboScale.defaultProps = {
  className: "",
};

export default DSITurboScale;
