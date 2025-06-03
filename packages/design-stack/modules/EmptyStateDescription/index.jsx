/**
 * @typedef {Object} EmptyStateDescriptionProps
 * @property {any} align? - Alignment of the text. Variants can be 'left' or 'center'
 * @property {any} children? - Node containing the content that will be displayed within the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the EmptyStateDescription component.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TEXT_ALIGN } from "../EmptyState/constants/emptyState";

/**
 * @type {React.FC<EmptyStateDescriptionProps>}
 */
const EmptyStateDescription = ({
  align = TEXT_ALIGN.CENTER,
  children,
  id = null,
  wrapperClassName = "",
}) => (
  <div
    className={twClassNames(
      "text-sm font-normal leading-5 text-neutral-weaker",
      {
        "text-left": align === TEXT_ALIGN.LEFT,
        "text-center": align === TEXT_ALIGN.CENTER,
      },
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    {children}
  </div>
);

EmptyStateDescription.propTypes = {
  /** Alignment of the text. Variants can be 'left' or 'center' */
  align: PropTypes.oneOf(Object.values(TEXT_ALIGN)),
  /** Node containing the content that will be displayed within the component */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A custom CSS class name to style the EmptyStateDescription component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */

export default EmptyStateDescription;
