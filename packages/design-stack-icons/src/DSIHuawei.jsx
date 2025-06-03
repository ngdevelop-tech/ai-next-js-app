import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import HuaweiDark from "./assets/Dark/Huawei.svg";
import HuaweiLight from "./assets/Light/Huawei.svg";

const DSIHuawei = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={HuaweiDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={HuaweiLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIHuawei.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIHuawei.defaultProps = {
  className: "",
  alt: "Huawei logo",
};

export default DSIHuawei;
