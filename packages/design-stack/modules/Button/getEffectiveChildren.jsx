import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";

import Loader from "../Loader";

import {
  BUTTON_ICON_COLORS,
  BUTTON_ICON_PLACEMENT,
  BUTTON_ICON_SIZES,
  BUTTON_ICON_SIZES_CLASS,
  BUTTON_LOADER_CLASSES,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from "./constants/button";
import { buttonSizeComparator } from "./utils";

/**
 * Generates the effective children for the Button component, handling loading states, icons, and layout variations.
 *
 * @param {object} props - The properties object.
 * @param {function} props.disabledIconClassGenerator - Function to generate class names for the disabled icon state based on color and variant.
 * @param {string} props.colorAndVariant - A combined string representing the button's color and variant (e.g., 'primary-solid').
 * @param {string} props.colorAndVariantAndIcon - A combined string representing the button's color, variant, and icon state (e.g., 'primary-solid-icon').
 * @param {boolean} props.isNotValidVariant - Flag indicating if the provided variant is not valid.
 * @param {React.ReactNode} props.children - The original children passed to the Button component.
 * @param {boolean} props.disabled - Whether the button is disabled.
 * @param {React.ReactElement | null} props.icon - The icon element to display, or null if no icon.
 * @param {'start' | 'end'} props.iconPlacement - The placement of the icon relative to the children (maps to BUTTON_ICON_PLACEMENT.START or BUTTON_ICON_PLACEMENT.END).
 * @param {boolean} props.isIconOnlyButton - Flag indicating if the button contains only an icon.
 * @param {string} props.loaderText - Text to display next to the loader when loading.
 * @param {boolean} props.loading - Whether the button is in a loading state.
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} props.size - The size of the button (maps to BUTTON_SIZES constants).
 * @param {'solid' | 'outline' | 'minimal'} props.variant - The visual variant of the button (maps to BUTTON_VARIANTS constants).
 * @returns {{effectiveChildren: React.ReactElement}} An object containing the `effectiveChildren` React element to be rendered inside the button.
 */
const getEffectiveChildren = ({
  disabledIconClassGenerator,
  colorAndVariant,
  colorAndVariantAndIcon,
  isNotValidVariant,
  children,
  disabled,
  icon,
  iconPlacement,
  isIconOnlyButton,
  loaderText,
  loading,
  size,
  variant,
}) => {
  const effectiveChildrenClasses = twClassNames({
    "flex items-center justify-center mx-auto gap-2 w-fit": loading,
    "gap-2":
      icon !== null &&
      buttonSizeComparator(size, [
        BUTTON_SIZES.EXTRA_SMALL,
        BUTTON_SIZES.SMALL,
        BUTTON_SIZES.DEFAULT,
      ]),
    "gap-3":
      icon !== null &&
      buttonSizeComparator(size, [
        BUTTON_SIZES.LARGE,
        BUTTON_SIZES.EXTRA_LARGE,
      ]),
    "grid mx-auto w-fit items-center": icon !== null,
    "grid-cols-[16px,2fr]":
      iconPlacement === BUTTON_ICON_PLACEMENT.START &&
      icon !== null &&
      buttonSizeComparator(size, [
        BUTTON_SIZES.EXTRA_SMALL,
        BUTTON_SIZES.SMALL,
      ]),
    "grid-cols-[20px,2fr]":
      iconPlacement === BUTTON_ICON_PLACEMENT.START &&
      icon !== null &&
      buttonSizeComparator(size, [
        BUTTON_SIZES.DEFAULT,
        BUTTON_SIZES.LARGE,
        BUTTON_SIZES.EXTRA_LARGE,
      ]),
    "grid-cols-[2fr,16px]":
      iconPlacement === BUTTON_ICON_PLACEMENT.END &&
      icon !== null &&
      buttonSizeComparator(size, [
        BUTTON_SIZES.EXTRA_SMALL,
        BUTTON_SIZES.SMALL,
      ]),
    "grid-cols-[2fr,20px]":
      iconPlacement === BUTTON_ICON_PLACEMENT.END &&
      icon !== null &&
      buttonSizeComparator(size, [
        BUTTON_SIZES.DEFAULT,
        BUTTON_SIZES.LARGE,
        BUTTON_SIZES.EXTRA_LARGE,
      ]),
    "gap-0 grid-cols-auto": isIconOnlyButton,
    "h-5 w-5":
      (size === BUTTON_SIZES.EXTRA_SMALL ||
        size === BUTTON_SIZES.SMALL ||
        size === BUTTON_SIZES.DEFAULT) &&
      isIconOnlyButton,
    "h-6 w-6":
      (size === BUTTON_SIZES.LARGE || size === BUTTON_SIZES.EXTRA_LARGE) &&
      isIconOnlyButton,
  });

  const buttonSize = buttonSizeComparator(size, [
    BUTTON_SIZES.EXTRA_SMALL,
    BUTTON_SIZES.SMALL,
  ])
    ? "h-4"
    : "h-5";

  const loader = (
    <Loader
      wrapperClassName="mx-auto"
      loaderPrimaryColor={`${BUTTON_LOADER_CLASSES[colorAndVariant].LOADER_PRIMARY_COLOR}`}
      loaderSecondaryColor={`${BUTTON_LOADER_CLASSES[colorAndVariant].LOADER_SECONDARY_COLOR}`}
      height={buttonSize}
      width={buttonSize}
    />
  );
  const disabledIconClass = disabledIconClassGenerator(colorAndVariant);

  const iconStyles = twClassNames(
    isNotValidVariant
      ? "icon-neutral-strongest"
      : {
          [BUTTON_ICON_COLORS[colorAndVariantAndIcon]]: !disabled,
          "icon-neutral-inverse-default":
            !BUTTON_ICON_COLORS[colorAndVariantAndIcon], // if no color class is present, keep the default icon color
          [disabledIconClass]: disabled,
        }
  );

  const renderIcon = icon ? (
    <div className={iconStyles}>
      {React.cloneElement(icon, {
        height: BUTTON_ICON_SIZES[`${isIconOnlyButton}-${size}`],
        className: twClassNames(
          BUTTON_ICON_SIZES_CLASS[`${isIconOnlyButton}-${size}`],
          icon.props.className
        ),
      })}
    </div>
  ) : null;

  const effectiveChildren =
    loading && !disabled && variant !== BUTTON_VARIANTS.MINIMAL ? (
      <span className={effectiveChildrenClasses}>
        {iconPlacement === BUTTON_ICON_PLACEMENT.START && loader}
        {isIconOnlyButton === false && loaderText}
        {iconPlacement === BUTTON_ICON_PLACEMENT.END && loader}
      </span>
    ) : (
      <span className={effectiveChildrenClasses}>
        {iconPlacement === BUTTON_ICON_PLACEMENT.START && renderIcon}
        {children}
        {iconPlacement === BUTTON_ICON_PLACEMENT.END && renderIcon}
      </span>
    );

  return { effectiveChildren };
};

export default getEffectiveChildren;
