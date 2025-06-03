import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import VercelDark from "./assets/Dark/Vercel.svg";
import VercelLight from "./assets/Light/Vercel.svg";

const DSIVercel = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={VercelDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={VercelLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIVercel.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIVercel.defaultProps = {
  className: "",
  alt: "Vercel logo",
};

export default DSIVercel;
