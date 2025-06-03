import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import CypressDark from "./assets/Dark/Cypress.svg";
import CypressLight from "./assets/Light/Cypress.svg";

const DSICypress = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={CypressDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={CypressLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSICypress.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSICypress.defaultProps = {
  className: "",
  alt: "Cypress logo",
};

export default DSICypress;
