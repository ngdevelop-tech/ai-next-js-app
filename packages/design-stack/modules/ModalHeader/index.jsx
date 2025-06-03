/**
 * @typedef {Object} ModalHeaderProps
 * @property {boolean} dismissButton? - Specify whether to show dismiss button or not
 * @property {(event: React.MouseEvent<any>) => void} handleDismissClick? - Callback triggered on clicking dismiss button
 * @property {string} heading? - Text representing the heading of ModalHeader
 * @property {React.ReactNode} icon? - Node representing the leftmost icon of ModalHeader
 * @property {string} iconWrapperClassname? - A custom CSS class name to style the wrapper of icon node
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBorder? - Specify whether to apply bottom border to ModalHeader or not
 * @property {React.ReactNode} leftAlignedButtonsNode? - Node containing the Action buttons below sub heading
 * @property {any} subHeading? - Node or text representing the sub heading of ModalHeader
 * @property {string} wrapperClassName? - A custom CSS class name to style the root of ModalHeader
 */

import React from "react";
import { MdClose } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<ModalHeaderProps>}
 */
const ModalHeader = ({
  dismissButton = true,
  handleDismissClick = null,
  heading = "",
  icon = null,
  iconWrapperClassname = "",
  id = null,
  isBorder = false,
  leftAlignedButtonsNode = null,
  subHeading = "",
  wrapperClassName = "",
}) => (
  <div
    className={twClassNames(
      "flex w-full items-start rounded-t-lg bg-neutral-default px-6 py-4",
      {
        "border-b border-neutral-strong": isBorder,
      },
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    {icon ? (
      <div className="w-auto">
        <div
          className={twClassNames(
            "ml-0 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-danger-weaker",
            iconWrapperClassname
          )}
        >
          {icon}
        </div>
      </div>
    ) : null}

    <div className="w-full text-left">
      {heading || dismissButton ? (
        <div
          className={twClassNames("flex w-full", {
            "justify-end": !heading,
          })}
        >
          {heading && (
            <h2
              className={twClassNames(
                "flex-1 text-lg font-medium leading-6 text-neutral-default",
                {
                  "mx-0 mr-3": dismissButton,
                }
              )}
            >
              {heading}
            </h2>
          )}

          {dismissButton ? (
            <button
              type="button"
              className={twClassNames(
                "absolute right-4 top-4 rounded-md bg-neutral-default text-neutral-weakest hover:text-neutral-weaker focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2"
              )}
              onClick={() => {
                if (handleDismissClick) handleDismissClick();
              }}
            >
              <span className="sr-only">Close</span>
              <MdClose
                className="h-6 w-6 icon-neutral-weak hover:icon-neutral-default"
                aria-hidden="true"
              />
            </button>
          ) : null}
        </div>
      ) : null}

      {subHeading ? (
        <div className="mt-2">
          <p className="text-sm text-neutral-weaker">{subHeading}</p>
        </div>
      ) : null}

      {leftAlignedButtonsNode}
    </div>
  </div>
);

ModalHeader.propTypes = {
  /** Specify whether to show dismiss button or not */
  dismissButton: PropTypes.bool,
  /** Callback triggered on clicking dismiss button */
  handleDismissClick: PropTypes.func,
  /** Text representing the heading of ModalHeader */
  heading: PropTypes.string,
  /** Node representing the leftmost icon of ModalHeader */
  icon: PropTypes.node,
  /** A custom CSS class name to style the wrapper of icon node */
  iconWrapperClassname: PropTypes.string,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Specify whether to apply bottom border to ModalHeader or not */
  isBorder: PropTypes.bool,
  /** Node containing the Action buttons below sub heading */
  leftAlignedButtonsNode: PropTypes.node,
  /** Node or text representing the sub heading of ModalHeader */
  subHeading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** A custom CSS class name to style the root of ModalHeader */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-modal--centered-with-container-scroll
 * @zeroHeight https://zeroheight.com/023d5159d/p/191258-modal/b/34324a
 * @end
 */

export default ModalHeader;
