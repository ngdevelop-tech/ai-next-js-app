import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import RobotPythonDark from "./assets/Dark/Robot-Python.svg";
import RobotPythonLight from "./assets/Light/Robot-Python.svg";

const DSIRobotPython = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={RobotPythonDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={RobotPythonLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIRobotPython.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIRobotPython.defaultProps = {
  className: "",
  alt: "RobotPython logo",
};

export default DSIRobotPython;
