import React, { useId } from "react";
import { useIsDarkMode } from "@/packages/hooks";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import propTypes from "prop-types";

import * as AiLoader from "../constants/ai-loader.json";
import * as AiLoaderDark from "../constants/ai-loader-dark.json";
import {
  AI_LOADER_SIZES,
  LOADER_SIZE_NAME,
  LOADER_SIZES,
  LOADER_VARIANTS,
} from "../constants/loader";

const getColorToken = color =>
  color.includes("icon")
    ? color
    : `colors-${color.split("-").slice(1).join("-")}`;

const getLoaderDimensions = (size, isAiLoader) => {
  if (!isAiLoader || !AI_LOADER_SIZES.includes(size)) return "20px";
  return `${LOADER_SIZES[size].aiLoaderSize}px`;
};

const Loader = ({
  id = null,
  percentage = 50,
  primaryColor = "icon-brand-default",
  secondaryColor = "icon-neutral-weakest",
  showLabel = false,
  size = LOADER_SIZE_NAME.MEDIUM,
  variant = LOADER_VARIANTS.LOADER,
  altText = "Loading in progress",
}) => {
  const radius =
    LOADER_SIZES[size].loaderSize / 2 - LOADER_SIZES[size].strokeWidth / 2;
  const arcLength = 2 * Math.PI * radius;
  const isPercentageLoader = variant === LOADER_VARIANTS.PERCENTAGE_LOADER;
  const isAiLoader = variant === LOADER_VARIANTS.AILOADER;

  const { isDarkMode } = useIsDarkMode();

  const uniqueId = useId();
  const titleId = id ? `loader-title-${id}` : `loader-title-${uniqueId}`;
  const descId = id ? `loader-desc-${id}` : `loader-desc-${uniqueId}`;

  const getAriaLabel = () => {
    if (!isPercentageLoader) return altText || "Loading";
    return percentage !== 100
      ? `Loading in process, ${percentage}% out of 100`
      : "Loading complete";
  };

  const renderSvgLoader = () => (
    <svg
      width={LOADER_SIZES[size].loaderSize}
      height={LOADER_SIZES[size].loaderSize}
      viewBox={`0 0 ${LOADER_SIZES[size].loaderSize} ${LOADER_SIZES[size].loaderSize}`}
      className={isPercentageLoader ? "-rotate-90" : "animate-spin"}
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
    >
      <title id={titleId}>{getAriaLabel()}</title>
      <desc id={descId}>A circular loading indicator</desc>
      <circle cx="50%" cy="50%" r={radius} fill="transparent" />
      <circle
        cx="50%"
        cy="50%"
        r={radius}
        fill="transparent"
        stroke={`var(--${getColorToken(secondaryColor)})`}
        strokeWidth={LOADER_SIZES[size].strokeWidth}
      />
      <circle
        cx="50%"
        cy="50%"
        r={radius}
        fill="transparent"
        stroke={`var(--${getColorToken(primaryColor)})`}
        strokeWidth={LOADER_SIZES[size].strokeWidth}
        strokeDasharray={arcLength}
        strokeDashoffset={
          arcLength * (isPercentageLoader ? (100 - percentage) / 100 : 3 / 4)
        }
      />
    </svg>
  );

  const renderAiLoader = () => (
    <DotLottieReact
      data={isDarkMode ? AiLoaderDark : AiLoader}
      loop
      autoplay
      autoResizeCanvas
      style={{
        width: getLoaderDimensions(size, isAiLoader),
        height: getLoaderDimensions(size, isAiLoader),
      }}
    />
  );

  return (
    <div {...(id !== null && { id })}>
      {!isAiLoader && renderSvgLoader()}
      {isPercentageLoader ? (
        <span className="sr-only">
          {percentage !== 100
            ? `Loading in process, ${percentage}% out of 100`
            : null}
        </span>
      ) : (
        !showLabel && <span className="sr-only">Loading</span>
      )}
      {isAiLoader && renderAiLoader()}
    </div>
  );
};

Loader.propTypes = {
  /** Prop to give altText to the loader */
  altText: propTypes.string,
  /** Prop to add unique id attribute to root of the component. */
  id: propTypes.string,
  /** The value of the progress indicator for the determinate variant. Value between 0 and 100. */
  percentage: propTypes.oneOfType([propTypes.string, propTypes.number]),
  /** The color of the progress (arc) part of the loader. */
  primaryColor: propTypes.string,
  /** The color of the remaining (full circle) part of the loader. */
  secondaryColor: propTypes.string,
  /** Boolean value that determines if a label is to be shown. */
  showLabel: propTypes.bool,
  /** The size of the loader component. */
  size: propTypes.oneOf(Object.values(LOADER_SIZE_NAME)),
  /** Determines loader variant that is to be used. */
  variant: propTypes.oneOf(Object.values(LOADER_VARIANTS)),
};

export default Loader;
