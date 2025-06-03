import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import BstackDark from "./assets/Dark/BStack.svg";
import BstackLight from "./assets/Light/BStack.svg";

const DSIBStack = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={BstackDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={BstackLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIBStack.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIBStack.defaultProps = {
  className: "",
  alt: "Bstack logo",
};

export default DSIBStack;
