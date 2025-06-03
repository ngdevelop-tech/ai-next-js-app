import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import SonyDark from "./assets/Dark/Sony.svg";
import SonyLight from "./assets/Light/Sony.svg";

const DSISony = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={SonyDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={SonyLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSISony.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSISony.defaultProps = {
  className: "",
  alt: "Sony logo",
};

export default DSISony;
