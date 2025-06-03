import { useMemo, useRef } from "react";

import {
  BUTTON_DISABLED_ICON_COLORS,
  BUTTON_SIZES,
  BUTTON_STYLE_CLASSES,
} from "./constants/button";

const useButton = ({
  ariaLabel,
  colors,
  disabled,
  fullWidth,
  hasFocusWhenDisabled,
  isIconOnlyButton,
  loading,
  onClick,
  ref,
  size,
  variant,
}) => {
  const buttonRef = useRef();

  const getIconOnlyBtnStyle = () => {
    let result = "";
    if (isIconOnlyButton) {
      switch (size) {
        case BUTTON_SIZES.EXTRA_SMALL:
          result = "p-[4px]";
          break;
        case BUTTON_SIZES.SMALL:
          result = "p-[6px]";
          break;
        case BUTTON_SIZES.DEFAULT:
          result = "p-[8px]";
          break;
        case BUTTON_SIZES.LARGE:
          result = "p-[8px]";
          break;
        case BUTTON_SIZES.EXTRA_LARGE:
          result = "p-[12px]";
          break;
        default:
          break;
      }
    }
    return result;
  };

  const disabledIconClassGenerator = colorAndVariant => {
    const colorKey =
      colorAndVariant === "attention-secondary" ? colorAndVariant : colors;
    return BUTTON_DISABLED_ICON_COLORS[colorKey];
  };

  const handleClick = e => {
    if (disabled || loading || !onClick) return;
    onClick(e);
  };

  const buttonDimensions = useMemo(() => {
    if (loading && !fullWidth && isIconOnlyButton) {
      const target = ref || buttonRef;
      return {
        width: target?.current?.getBoundingClientRect()?.width,
        height: target?.current?.getBoundingClientRect()?.height,
      };
    }

    return null;
  }, [loading, ref, fullWidth, isIconOnlyButton]);

  const stylePicker = () => {
    if (disabled) {
      let style = BUTTON_STYLE_CLASSES[`${size}-${colors}-${variant}-disabled`];
      if (hasFocusWhenDisabled)
        style +=
          " focus-visible:ring-2 focus-visible:ring-neutral-stronger focus-visible:ring-offset-2";

      return style;
    }

    if (loading) {
      return BUTTON_STYLE_CLASSES[`${size}-${colors}-${variant}-loading`];
    }

    return BUTTON_STYLE_CLASSES[`${size}-${colors}-${variant}`];
  };

  const getConditionalProps = () => {
    const conditionalProps = {};
    if (buttonDimensions) {
      conditionalProps.style = {
        width: buttonDimensions.width,
        height: buttonDimensions.height,
      };
    }
    if (ariaLabel?.length > 0) {
      conditionalProps["aria-label"] = ariaLabel;
    }
    return conditionalProps;
  };
  return {
    getConditionalProps,
    buttonRef,
    handleClick,
    stylePicker,
    getIconOnlyBtnStyle,
    disabledIconClassGenerator,
  };
};

export default useButton;
