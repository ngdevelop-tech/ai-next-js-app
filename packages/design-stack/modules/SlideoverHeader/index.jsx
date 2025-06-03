/**
 * @typedef {Object} SlideoverHeaderProps
 * @property {React.ReactNode} Icon? - Node containing the content that will be displayed within the icon section of SlideoverHeader component.
 * @property {boolean} dismissButton? - A boolean prop to determine whether to show a dismiss button (close button) in the header.
 * @property {string} dismissIconWrapperClassName? - A custom CSS class name to style the dismiss icon container of SlideoverHeader component
 * @property {(event: React.MouseEvent<any>) => void} handleDismissClick? - A function to handle the click event of the dismiss button.
 * @property {string} heading? - The main heading text to be displayed in the header.
 * @property {any} headingTag? - The HTML heading tag to use for the heading text.
 * @property {string} headingWrapperClassName? - A custom CSS class name to style the heading element of SlideoverHeader component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBorder? - A boolean prop to determine whether to show a border at the bottom of the header.
 * @property {boolean} isEllipsisHeader? - A boolean prop to determine whether the heading should be truncated with an ellipsis when it overflows.
 * @property {boolean} lightText? - A boolean prop to determine whether the text in the header should be displayed in white or the default color.
 * @property {string} subHeading? - A subheading text to be displayed below the main heading.
 * @property {string} subheadingWrapperClassName? - Additional CSS class(es) to customize the styling of the subheading element.
 * @property {string} wrapperClassName? - A custom CSS class name to style the wrapper container of SlideoverHeader component
 */

import React from "react";
import { MdClose } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<SlideoverHeaderProps>}
 */
const SlideoverHeader = ({
  Icon = null,
  dismissButton = true,
  dismissIconWrapperClassName = "",
  handleDismissClick = null,
  heading = "",
  headingTag: HeadingTag = "h3",
  headingWrapperClassName = "",
  id = null,
  isBorder = false,
  isEllipsisHeader = true,
  lightText = false,
  subHeading = "",
  subheadingWrapperClassName = "",
  wrapperClassName = "",
}) => (
  <div
    className={twClassNames(
      `sticky left-0 top-0 flex w-full bg-neutral-default px-6 py-4 sm:flex sm:items-start`,
      {
        "border-b border-neutral-strong": isBorder,
      },
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    {Icon ? (
      <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10">
        {Icon}
      </div>
    ) : null}

    <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
      {heading || dismissButton ? (
        <div
          className={`flex w-full  ${twClassNames({
            "justify-between": heading,
            "justify-end": !heading,
          })}`}
        >
          {heading && (
            <HeadingTag
              className={twClassNames(
                "text-lg font-medium leading-6 text-neutral-default",
                isEllipsisHeader
                  ? "relative mr-8 line-clamp-2 overflow-hidden break-all pr-4"
                  : "",
                {
                  "text-neutral-inverse-default": lightText,
                },
                headingWrapperClassName
              )}
            >
              {heading}
            </HeadingTag>
          )}

          {dismissButton && (
            <button
              type="button"
              className={twClassNames(
                " rounded-md focus:outline-none focus:ring-2 focus:ring-brand-strong focus:ring-offset-2",
                {
                  "bg-tansparent": lightText,
                  "bg-neutral-default": !lightText,
                }
              )}
              onClick={() => {
                if (handleDismissClick) handleDismissClick?.();
              }}
            >
              <span className="sr-only">Close</span>
              <MdClose
                className={twClassNames(
                  "h-6 w-6",
                  {
                    "icon-neutral-weak hover:icon-neutral-default": !lightText,
                    "icon-neutral-weakest hover:icon-neutral-inverse-default":
                      lightText,
                  },
                  dismissIconWrapperClassName
                )}
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      ) : null}

      {subHeading ? (
        <div className="mt-2">
          <p
            className={twClassNames(
              " text-left text-sm",
              {
                "text-neutral-inverse-default": lightText,
                "text-neutral-weaker": !lightText,
              },
              subheadingWrapperClassName
            )}
          >
            {subHeading}
          </p>
        </div>
      ) : null}
    </div>
  </div>
);

SlideoverHeader.propTypes = {
  /** Node containing the content that will be displayed within the icon section of SlideoverHeader component. */
  Icon: PropTypes.node,
  /** A boolean prop to determine whether to show a dismiss button (close button) in the header. */
  dismissButton: PropTypes.bool,
  /**  A custom CSS class name to style the dismiss icon container of SlideoverHeader component */
  dismissIconWrapperClassName: PropTypes.string,
  /** A function to handle the click event of the dismiss button. */
  handleDismissClick: PropTypes.func,
  /** The main heading text to be displayed in the header. */
  heading: PropTypes.string,
  /** The HTML heading tag to use for the heading text. */
  headingTag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  /**  A custom CSS class name to style the heading element of SlideoverHeader component */
  headingWrapperClassName: PropTypes.string,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A boolean prop to determine whether to show a border at the bottom of the header. */
  isBorder: PropTypes.bool,
  /** A boolean prop to determine whether the heading should be truncated with an ellipsis when it overflows. */
  isEllipsisHeader: PropTypes.bool,
  /** A boolean prop to determine whether the text in the header should be displayed in white or the default color. */
  lightText: PropTypes.bool,
  /** A subheading text to be displayed below the main heading. */
  subHeading: PropTypes.string,
  /** Additional CSS class(es) to customize the styling of the subheading element. */
  subheadingWrapperClassName: PropTypes.string,
  /**  A custom CSS class name to style the wrapper container of SlideoverHeader component */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-slideover--resizeable-example
 * @zeroHeight https://zeroheight.com/023d5159d/p/544a29-slide-over/b/051181
 * @end
 */

export default SlideoverHeader;
