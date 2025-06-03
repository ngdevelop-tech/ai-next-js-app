import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Junit4Dark from "./assets/Dark/Junit-4.svg";
import Junit4Light from "./assets/Light/Junit-4.svg";

const DSIJunit4 = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={Junit4Dark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={Junit4Light}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIJunit4.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIJunit4.defaultProps = {
  className: "",
  alt: "Junit4 logo",
};

export default DSIJunit4;
