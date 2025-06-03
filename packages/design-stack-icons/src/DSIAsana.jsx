import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import AsanaDark from "./assets/Dark/Asana.svg";
import AsanaLight from "./assets/Light/Asana.svg";

const DSIAsana = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={AsanaDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={AsanaLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIAsana.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIAsana.defaultProps = {
  className: "",
  alt: "Asana logo",
};

export default DSIAsana;
