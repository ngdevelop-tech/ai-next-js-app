/**
 * Represents a grid list item primarily featuring an image, along with an optional label and subtext.
 * It can be interactive (clickable).
 *
 * @typedef {Object} GridListWImageProps
 * @property {string} [id=null] - Optional unique identifier for the root `div` element.
 * @property {string} [image=''] - The source URL for the image to be displayed. Defaults to an empty string.
 * @property {string} [imageClassName=''] - Optional CSS class name(s) to apply directly to the `img` element for custom styling. Defaults to an empty string.
 * @property {string} [imageWrapperClassName=''] - Optional CSS class name(s) to apply to the `div` element that wraps the image, useful for controlling aspect ratio or container styles. Defaults to an empty string.
 * @property {string} [label=''] - The main text label displayed below the image. Defaults to an empty string.
 * @property {(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void} [onClick=null] - Optional callback function executed when the component is clicked or activated via keyboard (Enter or Space). If provided, the component becomes interactive (focusable, clickable). Defaults to `null`.
 * @property {string} [subText=''] - Additional descriptive text displayed below the main label. Defaults to an empty string.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the root `div` element for overall custom styling. Defaults to an empty string.
 */

import React, { forwardRef } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * A component that displays an item in a grid list format, primarily featuring an image.
 * It supports an optional label, subtext, and click interaction.
 * The component forwards refs to the root `div` element.
 * @type {React.ForwardRefExoticComponent<GridListWImageProps & React.RefAttributes<HTMLDivElement>>}
 */
const GridListWImage = forwardRef(
  (
    {
      id = null,
      image = "",
      imageClassName = "",
      imageWrapperClassName = "",
      label = "",
      onClick = null,
      subText = "",
      wrapperClassName = "",
    },
    ref
  ) => {
    const handleClick = e => {
      onClick?.(e);
    };
    const interactiveProps = {
      onClick: handleClick,
      role: "button",
      tabIndex: 0,
      onKeyDown: e => {
        if (["enter", " "].includes(e.key?.toLowerCase())) handleClick(e);
      },
    };
    return (
      <div
        ref={ref}
        className={twClassNames(
          "rounded-lg",
          {
            "cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-stronger":
              onClick,
          },
          wrapperClassName
        )}
        {...(onClick && interactiveProps)}
        {...(id !== null && { id })}
      >
        <div
          className={twClassNames(
            "aspect-h-7 aspect-w-10 mb-2 block w-full overflow-hidden rounded-lg border border-neutral-default bg-neutral-stronger shadow-sm group-hover:opacity-75",
            imageWrapperClassName
          )}
        >
          <img
            src={image}
            alt=""
            className={twClassNames(
              "pointer-events-none object-cover",
              imageClassName
            )}
          />
        </div>
        {label ? (
          <div className="pointer-events-none block truncate text-sm font-medium text-neutral-default group-hover:opacity-75">
            {label}
          </div>
        ) : null}
        {subText ? (
          <div className="pointer-events-none block text-sm font-medium text-neutral-weaker">
            {subText}
          </div>
        ) : null}
      </div>
    );
  }
);

GridListWImage.propTypes = {
  /** Optional unique identifier for the root `div` element. */
  id: PropTypes.string,
  /** The source URL for the image to be displayed. Defaults to an empty string. */
  image: PropTypes.string,
  /** Optional CSS class name(s) to apply directly to the `img` element for custom styling. Defaults to an empty string. */
  imageClassName: PropTypes.string,
  /** Optional CSS class name(s) to apply to the `div` element that wraps the image, useful for controlling aspect ratio or container styles. Defaults to an empty string. */
  imageWrapperClassName: PropTypes.string,
  /** The main text label displayed below the image. Defaults to an empty string. */
  label: PropTypes.string,
  /** Optional callback function executed when the component is clicked or activated via keyboard (Enter or Space). If provided, the component becomes interactive (focusable, clickable). Defaults to `null`. */
  onClick: PropTypes.func,
  /** Additional descriptive text displayed below the main label. Defaults to an empty string. */
  subText: PropTypes.string,
  /** Optional CSS class name(s) to apply to the root `div` element for overall custom styling. Defaults to an empty string. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gridlistwimage--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/642c17-grid-lists/b/4635b4
 * @end
 */

export default GridListWImage;
