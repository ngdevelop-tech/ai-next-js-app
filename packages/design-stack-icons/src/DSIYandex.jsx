import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import YandexDark from "./assets/Dark/Yandex.svg";
import YandexLight from "./assets/Light/Yandex.svg";

const DSIYandex = props => {
  const { className, alt } = props;
  const lightThemeClasses = `dark:hidden ${className}`;
  const darkThemeClasses = `hidden dark:block ${className}`;
  return (
    <div>
      <img
        {...props}
        src={YandexDark}
        alt={alt}
        className={twClassNames(darkThemeClasses)}
      />
      <img
        {...props}
        src={YandexLight}
        alt={alt}
        className={twClassNames(lightThemeClasses)}
      />
    </div>
  );
};

DSIYandex.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
};

DSIYandex.defaultProps = {
  className: "",
  alt: "Yandex logo",
};

export default DSIYandex;
