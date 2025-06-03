/**
 * @typedef {Object} LoaderComponentProps
 * @property {any} ariaLive?
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import propTypes from "prop-types";

import Loader from "./components/Loader";
import {
  ARIA_LIVE_OPTIONS,
  LOADER_LABEL_PLACEMENT,
  LOADER_SIZE_NAME,
  LOADER_VARIANTS,
} from "./constants/loader";

/**
 * @type {React.FC<LoaderComponentProps>}
 */
const LoaderComponent = ({
  ariaBusy = true,
  ariaLive = ARIA_LIVE_OPTIONS.POLITE,
  id = null,
  label = "Loading",
  labelPlacement = LOADER_LABEL_PLACEMENT.RIGHT,
  loaderPrimaryColor = "icon-brand-default",
  loaderSecondaryColor = "icon-neutral-weakest",
  percentage = 50,
  showLabel = false,
  size = LOADER_SIZE_NAME.MEDIUM,
  variant = LOADER_VARIANTS.LOADER,
  wrapperClassName = "",
  altText = "circle",
}) => (
  <div
    {...(id !== null && { id })}
    role="status"
    className={twClassNames(
      `flex items-center justify-center`,
      {
        "flex-col":
          labelPlacement === LOADER_LABEL_PLACEMENT.BOTTOM &&
          size !== LOADER_SIZE_NAME.SMALL,
        "flex-row": labelPlacement === LOADER_LABEL_PLACEMENT.RIGHT,
        "gap-2": showLabel,
      },
      wrapperClassName
    )}
    aria-busy={ariaBusy}
    aria-live={ariaLive}
  >
    <Loader
      variant={variant}
      percentage={percentage}
      size={size}
      primaryColor={loaderPrimaryColor}
      secondaryColor={loaderSecondaryColor}
      showLabel={showLabel}
      altText={altText}
    />

    {showLabel && (
      <span
        className={twClassNames("font-normal text-neutral-weaker", {
          "text-xs":
            size === LOADER_SIZE_NAME.SMALL || size === LOADER_SIZE_NAME.MEDIUM,
          "text-sm": size === LOADER_SIZE_NAME.LARGE,
          "leading-5":
            size === LOADER_SIZE_NAME.MEDIUM || size === LOADER_SIZE_NAME.LARGE,
          "leading-8":
            size === LOADER_SIZE_NAME.LARGE &&
            labelPlacement === LOADER_LABEL_PLACEMENT.RIGHT,
          "leading-4": size === LOADER_SIZE_NAME.SMALL,
        })}
      >
        {percentage !== 100 ? label : null}
      </span>
    )}
  </div>
);

LoaderComponent.propTypes = {
  /** Prop to give altText to the loader */
  altText: propTypes.string,
  /** Boolean value to set aria-busy value */
  ariaBusy: propTypes.bool,
  ariaLive: propTypes.oneOf(Object.values(ARIA_LIVE_OPTIONS)),
  /** Prop to add unique id attribute to root of the component. */
  id: propTypes.string,
  /** Label value to be displayed if showLabel is true */
  label: propTypes.oneOfType([propTypes.string, propTypes.node]),
  /** Position of the label. Bottom Placement is available only for medium and large loader sizes. */
  labelPlacement: propTypes.oneOf(Object.values(LOADER_LABEL_PLACEMENT)),
  /** The color of the progress (arc) part of the loader. */
  loaderPrimaryColor: propTypes.string,
  /** The color of the remaining (full circle) part of the loader. */
  loaderSecondaryColor: propTypes.string,
  /** The value of the progress indicator for the determinate variant. Value between 0 and 100. */
  percentage: propTypes.oneOfType([propTypes.string, propTypes.number]),
  /** Boolean value that determines if a label is to be shown.  */
  showLabel: propTypes.bool,
  /** The size of the loader component. */
  size: propTypes.oneOf(Object.values(LOADER_SIZE_NAME)),
  /** Determines loader variant that is to be used.  */
  variant: propTypes.oneOf(Object.values(LOADER_VARIANTS)),
  /** A custom CSS class to style the wrapper of the Loader component.  */
  wrapperClassName: propTypes.string,
};
LoaderComponent.displayName = "Loader";

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-loader--primary
 * @zeroHeight
 * @end
 */

export default LoaderComponent;
