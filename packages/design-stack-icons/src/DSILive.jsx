import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

const DSILive = props => {
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
        d="M20 6H2V4h18c1.1 0 2 .9 2 2v11h2v3H10v-3h10zM1 8h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1m1 9h4v-7H2z"
      />
    </svg>
  );
};

DSILive.propTypes = {
  className: PropTypes.string,
};

DSILive.defaultProps = {
  className: "",
};

export default DSILive;
