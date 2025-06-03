/**
 * @typedef {Object} ModalFooterProps
 * @property {string} backgroundColorClass? - A custom CSS class name to style the ModalFooter
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the ModalFooter
 * @property {boolean} condensedTop? - Specify whether to remove top padding or not
 * @property {boolean} condensedXAxis? - Specify whether to add top-bottom padding of 12px or not
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBorder? - Specify whether to apply top border to ModalFooter or not
 * @property {any} position? - Specify where to place ModalFooter content
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { POSITION } from "./constants/modalFooter";

/**
 * @type {React.FC<ModalFooterProps>}
 */
const ModalFooter = ({
  backgroundColorClass,
  children,
  condensedTop,
  condensedXAxis,
  id,
  isBorder,
  position,
}) => (
  <div
    className={twClassNames(
      "flex w-full space-x-3 space-y-0 rounded-b-lg px-6 py-4",
      backgroundColorClass,
      {
        "py-3": condensedXAxis,
        "pt-0": condensedTop,
        "justify-end": position === POSITION.RIGHT,
        "justify-center": position === POSITION.CENTER,
        "border-t border-neutral-strong": isBorder,
      }
    )}
    {...(id !== null && { id })}
  >
    {children}
  </div>
);

ModalFooter.propTypes = {
  /** A custom CSS class name to style the ModalFooter */
  backgroundColorClass: PropTypes.string,
  /** Node containing the content that will be displayed within the ModalFooter */
  children: PropTypes.node,
  /** Specify whether to remove top padding or not */
  condensedTop: PropTypes.bool,
  /** Specify whether to add top-bottom padding of 12px or not */
  condensedXAxis: PropTypes.bool,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Specify whether to apply top border to ModalFooter or not */
  isBorder: PropTypes.bool,
  /** Specify where to place ModalFooter content  */
  position: PropTypes.oneOf(Object.values(POSITION)),
};
ModalFooter.defaultProps = {
  backgroundColorClass: "",
  children: null,
  condensedTop: false,
  condensedXAxis: false,
  id: null,
  isBorder: false,
  position: POSITION.LEFT,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-modal--centered-with-container-scroll
 * @zeroHeight https://zeroheight.com/023d5159d/p/191258-modal/b/34324a
 * @end
 */

export default ModalFooter;
