import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import AndroidDark from "./assets/Dark/Android.svg";
import AndroidLight from "./assets/Light/Android.svg";

const DSIAndroid = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={AndroidDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={AndroidLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIAndroid.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIAndroid.defaultProps = {
  className: "",
  alt: "Android logo",
};

export default DSIAndroid;
