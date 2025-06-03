import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {
  BUTTON_COLORS,
  BUTTON_ICON_PLACEMENT,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./constants/button";
import { BUTTON_COLORS as BUTTON_COLORS_IMPORT } from "./constants/button";

const Button = ({
  ariaLabel = "",
  children = "",
  colors = BUTTON_COLORS.BRAND,
  disabled = false,
  form = null,
  fullWidth = false,
  hasFocusWhenDisabled = false,
  icon = null,
  iconPlacement = BUTTON_ICON_PLACEMENT.START,
  id = null,
  isIconOnlyButton = false,
  loaderText = "Loading",
  loading = false,
  onClick = null,
  size = BUTTON_SIZES.SMALL,
  type = "button",
  variant = BUTTON_VARIANTS.PRIMARY,
  wrapperClassName = "",
  ...otherProps
}) => {
  // ...existing component implementation...
};

Button.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  colors: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
  disabled: PropTypes.bool,
  form: PropTypes.string,
  fullWidth: PropTypes.bool,
  hasFocusWhenDisabled: PropTypes.bool,
  icon: PropTypes.node,
  iconPlacement: PropTypes.oneOf(Object.values(BUTTON_ICON_PLACEMENT)),
  id: PropTypes.string,
  isIconOnlyButton: PropTypes.bool,
  loaderText: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  type: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  wrapperClassName: PropTypes.string,
};

export default Button;
