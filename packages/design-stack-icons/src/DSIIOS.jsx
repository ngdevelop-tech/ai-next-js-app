import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import IOSDark from "./assets/Dark/IOS.svg";
import IOSLight from "./assets/Light/IOS.svg";

const DSIIOS = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={IOSDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={IOSLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIIOS.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIIOS.defaultProps = {
  className: "",
  alt: "IOS logo",
};

export default DSIIOS;
