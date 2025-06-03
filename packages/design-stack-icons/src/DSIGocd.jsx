import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import GocdDark from "./assets/Dark/Gocd.svg";
import GocdLight from "./assets/Light/Gocd.svg";

const DSIGocd = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={GocdDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={GocdLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIGocd.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIGocd.defaultProps = {
  className: "",
  alt: "Gocd logo",
};

export default DSIGocd;
