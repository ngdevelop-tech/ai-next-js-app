import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import SamsungDark from "./assets/Dark/Samsung.svg";
import SamsungLight from "./assets/Light/Samsung.svg";

const DSISamsung = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={SamsungDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={SamsungLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSISamsung.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSISamsung.defaultProps = {
  className: "",
  alt: "Samsung logo",
};

export default DSISamsung;
