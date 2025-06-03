import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import AppleDark from "./assets/Dark/Apple.svg";
import AppleLight from "./assets/Light/Apple.svg";

const DSIApple = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={AppleDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={AppleLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIApple.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIApple.defaultProps = {
  className: "",
  alt: "Apple logo",
};

export default DSIApple;
