import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import CircleciDark from "./assets/Dark/Circleci.svg";
import CircleciLight from "./assets/Light/Circleci.svg";

const DSICircleci = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={CircleciDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={CircleciLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSICircleci.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSICircleci.defaultProps = {
  className: "",
  alt: "Circleci logo",
};

export default DSICircleci;
