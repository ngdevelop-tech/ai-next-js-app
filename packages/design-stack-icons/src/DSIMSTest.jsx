import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import MSTestDark from "./assets/Dark/MSTest.svg";
import MSTestLight from "./assets/Light/MSTest.svg";

const DSIMSTest = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={MSTestDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={MSTestLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIMSTest.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIMSTest.defaultProps = {
  className: "",
  alt: "MSTest logo",
};

export default DSIMSTest;
