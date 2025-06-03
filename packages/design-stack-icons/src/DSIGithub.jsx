import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import GithubDark from "./assets/Dark/github.svg";
import GithubLight from "./assets/Light/github.svg";

const DSIGithub = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={GithubDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={GithubLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIGithub.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIGithub.defaultProps = {
  className: "",
  alt: "Github logo",
};

export default DSIGithub;
