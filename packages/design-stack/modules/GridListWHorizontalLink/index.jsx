/**
 * Represents a grid list item with optional image, title, subtitle, tag, and footer,
 * often used to display items in a list or grid format where the entire item acts as a link.
 *
 * @typedef {Object} GridListWHorizontalLinkProps
 * @property {string} [ariaLabel='Grid list'] - Provides an accessible label for the component, describing its purpose. Defaults to 'Grid list'.
 * @property {React.ReactNode} [gridListFooter=null] - Optional content displayed at the bottom of the grid list item. If provided, the layout adjusts to accommodate the footer.
 * @property {React.ReactNode} [gridTag=null] - Optional tag element displayed next to the title, often used for status indicators or categorization.
 * @property {string} [id=null] - Optional unique identifier for the root element of the component.
 * @property {React.ReactNode} [image=null] - Optional image or icon element displayed within the grid list item. Its position (left or right) is controlled by `isImageOnRight`.
 * @property {boolean} [isImageOnRight=false] - Determines the position of the image. If `true`, the image is displayed on the right side; otherwise, it's on the left. Defaults to `false`.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Callback function executed when the grid list item (or the button overlay if no footer is present) is clicked. Receives the click event as an argument.
 * @property {string | React.ReactNode} [subTitle=null] - The secondary text or content displayed below the title. Can be a simple string or a complex React node. If it's a string and `gridListFooter` is present, it clamps to 2 lines; otherwise, it truncates.
 * @property {string} [title=''] - The primary heading or title for the grid list item. Defaults to an empty string.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the main container `div` for custom styling. Defaults to an empty string.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<GridListWHorizontalLinkProps>}
 */
const GridListWHorizontalLink = ({
  ariaLabel = "Grid list",
  gridListFooter = null,
  gridTag = null,
  id = null,
  image = null,
  isImageOnRight = false,
  onClick = () => {},
  subTitle = null,
  title = "",
  wrapperClassName = "",
}) => {
  const handleClick = e => {
    e.preventDefault();
    onClick?.();
  };

  return (
    <div
      className={twClassNames(
        "relative rounded-lg border border-neutral-default bg-neutral-default shadow-sm",
        wrapperClassName,
        {
          " hover:border-neutral-strong focus-within:ring-2 focus-within:ring-brand-strong focus-within:ring-offset-2":
            !gridListFooter,
          "flex flex-col justify-between": gridListFooter,
        }
      )}
      {...(id !== null && { id })}
    >
      <div className="flex items-center space-x-3 px-6 py-5">
        {!isImageOnRight && image}
        <div className="min-w-0 flex-1">
          {!gridListFooter && (
            <button
              type="button"
              className=" absolute inset-0 cursor-pointer focus:outline-none"
              aria-label={ariaLabel}
              onClick={e => handleClick(e)}
            />
          )}
          {title ? (
            <div className="flex items-center gap-3">
              <div className="text-left text-sm font-medium text-neutral-default">
                {title}
              </div>
              {gridTag}
            </div>
          ) : null}
          <>
            {typeof subTitle === "string" ? (
              <div
                className={twClassNames(
                  "text-left text-sm text-neutral-weaker",
                  {
                    "line-clamp-2": gridListFooter,
                    truncate: !gridListFooter,
                  }
                )}
              >
                {subTitle}
              </div>
            ) : (
              subTitle
            )}
          </>
        </div>
        {isImageOnRight && image}
      </div>
      {gridListFooter}
    </div>
  );
};

GridListWHorizontalLink.propTypes = {
  /** Provides an accessible label for the component, describing its purpose. */
  ariaLabel: PropTypes.string,
  /** Optional content displayed at the bottom of the grid list item. If provided, the layout adjusts. */
  gridListFooter: PropTypes.node,
  /** Optional tag element displayed next to the title (e.g., for status). */
  gridTag: PropTypes.node,
  /** Optional unique identifier for the root element. */
  id: PropTypes.string,
  /** Optional image or icon element. Position controlled by `isImageOnRight`. */
  image: PropTypes.node,
  /** If `true`, displays the image on the right; otherwise, on the left. */
  isImageOnRight: PropTypes.bool,
  /** Callback function executed on click. Receives the click event. */
  onClick: PropTypes.func,
  /** Secondary text or content below the title. Can be a string or React node. */
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** The primary heading or title for the item. */
  title: PropTypes.string,
  /** Optional CSS class name(s) for the main container `div`. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gridlistwhorizontallink--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/642c17-grid-lists/b/4635b4
 * @end
 */

export default GridListWHorizontalLink;
