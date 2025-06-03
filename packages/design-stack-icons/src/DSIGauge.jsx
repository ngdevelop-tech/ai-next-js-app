import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import GaugeDark from "./assets/Dark/Gauge.svg";
import GaugeLight from "./assets/Light/Gauge.svg";

const DSIGauge = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={GaugeDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={GaugeLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIGauge.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIGauge.defaultProps = {
  className: "",
  alt: "Gauge logo",
};

export default DSIGauge;
