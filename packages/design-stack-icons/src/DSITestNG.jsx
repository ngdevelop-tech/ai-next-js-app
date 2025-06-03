import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import TestNGDark from "./assets/Dark/TestNG.svg";
import TestNGLight from "./assets/Light/TestNG.svg";

const DSITestNG = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={TestNGDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={TestNGLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSITestNG.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSITestNG.defaultProps = {
  className: "",
  alt: "TestNG logo",
};

export default DSITestNG;
