import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import TestRailDark from "./assets/Dark/TestRail.svg";
import TestRailLight from "./assets/Light/TestRail.svg";

const DSITestRail = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={TestRailDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={TestRailLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSITestRail.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSITestRail.defaultProps = {
  className: "",
  alt: "TestRail logo",
};

export default DSITestRail;
