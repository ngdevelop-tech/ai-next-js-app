/**
 * @typedef {Object} SkeletonLoaderProps
 * @property {boolean} animate?
 * @property {React.ReactNode} icon?
 * @property {any} iconSize?
 * @property {string} id?
 * @property {any} shape?
 * @property {string} wrapperClassName?
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { ICON_SIZE_CLASSES, LOADER_SHAPE } from "./constant/skeletonLoader";

/**
 * @type {React.FC<SkeletonLoaderProps>}
 */
const SkeletonLoader = ({
  animate,
  icon,
  iconSize,
  id,
  shape,
  wrapperClassName,
}) => (
  <div
    {...(id !== null && { id })}
    className={twClassNames("h-4 w-20 bg-neutral-strongest", wrapperClassName, {
      // adding wrapperClassName before as the below styles should not get overidden
      "flex items-center justify-center": icon,
      "animate-pulse": animate,
      "rounded-full aspect-square w-auto": shape === LOADER_SHAPE.CIRCLE,
    })}
  >
    {icon && (
      <div
        className={twClassNames(
          "icon-neutral-inverse-default",
          ICON_SIZE_CLASSES[iconSize]
        )}
      >
        {React.cloneElement(icon, {
          className: twClassNames(
            icon.props.className,
            ICON_SIZE_CLASSES[iconSize]
          ),
        })}
      </div>
    )}
  </div>
);

SkeletonLoader.propTypes = {
  animate: PropTypes.bool,
  icon: PropTypes.node,
  iconSize: PropTypes.oneOf(Object.keys(ICON_SIZE_CLASSES)),
  id: PropTypes.string,
  shape: PropTypes.oneOf(Object.values(LOADER_SHAPE)),
  wrapperClassName: PropTypes.string,
};
SkeletonLoader.defaultProps = {
  animate: false,
  icon: null,
  iconSize: "M",
  id: null,
  shape: LOADER_SHAPE.RECTANGLE,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-skeletonloader--primary
 * @zeroHeight
 * @end
 */

export default SkeletonLoader;
