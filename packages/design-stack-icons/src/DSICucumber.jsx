import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import CucumberDark from "./assets/Dark/Cucumber.svg";
import CucumberLight from "./assets/Light/Cucumber.svg";

const DSICucumber = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={CucumberDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={CucumberLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSICucumber.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSICucumber.defaultProps = {
  className: "",
  alt: "Cucumber logo",
};

export default DSICucumber;
