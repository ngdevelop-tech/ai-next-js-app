import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import MotorolaDark from "./assets/Dark/Motorola.svg";
import MotorolaLight from "./assets/Light/Motorola.svg";

const DSIMotorola = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={MotorolaDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={MotorolaLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIMotorola.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIMotorola.defaultProps = {
  className: "",
  alt: "Motorola logo",
};

export default DSIMotorola;
