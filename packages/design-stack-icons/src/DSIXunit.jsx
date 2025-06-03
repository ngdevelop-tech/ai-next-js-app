import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import XunitDark from "./assets/Dark/Xunit.svg";
import XunitLight from "./assets/Light/Xunit.svg";

const DSIXunit = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={XunitDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={XunitLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIXunit.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIXunit.defaultProps = {
  className: "",
  alt: "Xunit logo",
};

export default DSIXunit;
