/**
 * @typedef {Object} SlideoverFooterProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the SlideoverFooter component.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBorder? - A boolean prop to determine whether to show a border at the top of the SlideoverFooter.
 * @property {any} position? - Determines the position of the content inside the SlideoverFooter. It can be one of the following values from the POSITION constant: 'left', 'right', or 'center'.
 * @property {string} wrapperClassName? - A custom CSS class name to style the SlideoverFooter component
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { SLIDEOVER_FOOTER_ALIGNMENT } from "../Slideover/constants/slideover";

/**
 * @type {React.FC<SlideoverFooterProps>}
 */
const SlideoverFooter = ({
  children,
  id,
  isBorder,
  position,
  wrapperClassName,
}) => (
  <div
    className={twClassNames(
      "sticky bottom-0 left-0 w-full space-x-3 space-y-2 px-6 py-4 sm:flex sm:space-y-0",
      {
        "sm:justify-end": position === SLIDEOVER_FOOTER_ALIGNMENT.RIGHT,
        "sm:justify-center": position === SLIDEOVER_FOOTER_ALIGNMENT.CENTER,
        "border-t border-neutral-strong": isBorder,
      },
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    {children}
  </div>
);

SlideoverFooter.propTypes = {
  /** Node containing the content that will be displayed within the SlideoverFooter component. */
  children: PropTypes.node,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A boolean prop to determine whether to show a border at the top of the SlideoverFooter. */
  isBorder: PropTypes.bool,
  /** Determines the position of the content inside the SlideoverFooter. It can be one of the following values from the POSITION constant: 'left', 'right', or 'center'. */
  position: PropTypes.oneOf(Object.values(SLIDEOVER_FOOTER_ALIGNMENT)),
  /** A custom CSS class name to style the SlideoverFooter component */
  wrapperClassName: PropTypes.string,
};

SlideoverFooter.defaultProps = {
  children: null,
  id: null,
  isBorder: false,
  position: SLIDEOVER_FOOTER_ALIGNMENT.LEFT,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-slideover--resizeable-example
 * @zeroHeight https://zeroheight.com/023d5159d/p/544a29-slide-over/b/051181
 * @end
 */

export default SlideoverFooter;
