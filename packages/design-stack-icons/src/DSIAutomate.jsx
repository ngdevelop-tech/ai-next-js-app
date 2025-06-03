import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

const DSIAutomate = props => {
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
        d="M20 6H2V4h18.8A1.2 1.2 0 0 1 22 5.2v7.3h-2zM10 17h3v3h-3z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 8h6c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1m1 9h4v-7H2zm20.823 2.49a3.6 3.6 0 0 0-.005-.98l1.087-.823a.25.25 0 0 0 .064-.317l-1.028-1.73c-.064-.114-.198-.15-.316-.114l-1.28.5a3.8 3.8 0 0 0-.867-.49l-.193-1.322a.26.26 0 0 0-.257-.214h-2.056a.25.25 0 0 0-.252.213l-.192 1.324a4 4 0 0 0-.868.489l-1.28-.5a.26.26 0 0 0-.316.115l-1.022 1.729c-.065.11-.043.245.064.317l1.087.823a3 3 0 0 0-.048.49c0 .162.01.333.037.49l-1.087.823a.25.25 0 0 0-.064.317l1.028 1.73c.064.114.198.15.316.114l1.28-.5c.267.198.551.364.867.49l.193 1.323a.26.26 0 0 0 .257.213h2.056a.247.247 0 0 0 .252-.213l.192-1.323a3.7 3.7 0 0 0 .868-.49l1.28.5c.117.042.251 0 .316-.115l1.028-1.729a.237.237 0 0 0-.065-.317zM19 20.875c-1.06 0-1.928-.844-1.928-1.875s.868-1.875 1.928-1.875 1.928.844 1.928 1.875-.868 1.875-1.928 1.875"
        clipRule="evenodd"
      />
    </svg>
  );
};

DSIAutomate.propTypes = {
  className: PropTypes.string,
};

DSIAutomate.defaultProps = {
  className: "",
};

export default DSIAutomate;
