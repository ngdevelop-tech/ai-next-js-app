import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import LayersioDark from "./assets/Dark/Layers.io.svg";
import LayersioLight from "./assets/Light/Layers.io.svg";

const DSILayersio = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={LayersioDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={LayersioLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSILayersio.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSILayersio.defaultProps = {
  className: "",
  alt: "Layersio logo",
};

export default DSILayersio;
