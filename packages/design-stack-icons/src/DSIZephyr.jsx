import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import ZephyrDark from "./assets/Dark/Zephyr.svg";
import ZephyrLight from "./assets/Light/Zephyr.svg";

const DSIZephyr = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={ZephyrDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={ZephyrLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIZephyr.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIZephyr.defaultProps = {
  className: "",
  alt: "Zephyr logo",
};

export default DSIZephyr;
