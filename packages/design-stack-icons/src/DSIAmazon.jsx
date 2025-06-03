import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import AmazonDark from "./assets/Dark/Amazon.svg";
import AmazonLight from "./assets/Light/Amazon.svg";

const DSIAmazon = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={AmazonDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={AmazonLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIAmazon.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIAmazon.defaultProps = {
  className: "",
  alt: "Amazon logo",
};

export default DSIAmazon;
