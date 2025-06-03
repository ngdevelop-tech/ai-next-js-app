import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import MacOSDark from "./assets/Dark/MacOS.svg";
import MacOSLight from "./assets/Light/MacOS.svg";

const DSIMacOS = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={MacOSDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={MacOSLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIMacOS.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIMacOS.defaultProps = {
  className: "",
  alt: "MacOS logo",
};

export default DSIMacOS;
