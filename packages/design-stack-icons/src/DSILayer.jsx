import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import LayerDark from "./assets/Dark/Layer.svg";
import LayerLight from "./assets/Light/Layer.svg";

const DSILayer = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={LayerDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={LayerLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSILayer.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSILayer.defaultProps = {
  className: "",
  alt: "Layer logo",
};

export default DSILayer;
