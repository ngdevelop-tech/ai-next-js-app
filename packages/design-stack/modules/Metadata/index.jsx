/**
 * @typedef {Object} MetadataProps
 * @property {React.ReactNode} icon? - A custom React node representing an icon or image to be displayed prior the description.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} metaDescription? - The description or text content associated with the metadata.
 * @property {string} metaTitle? - The title of the wrapper span tag
 * @property {string} textColorClass? - A custom CSS class name to style the color of the metadata.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<MetadataProps>}
 */
const Metadata = ({
  icon = null,
  id = null,
  metaDescription = "",
  metaTitle = "",
  textColorClass = "",
}) => (
  <span
    title={metaTitle}
    className={twClassNames(
      "flex w-fit flex-row items-center justify-center gap-1.5 text-neutral-weaker",
      textColorClass
    )}
    {...(id !== null && { id })}
  >
    {icon}
    <span className={twClassNames("text-sm font-medium leading-5")}>
      {metaDescription}
    </span>
  </span>
);

Metadata.propTypes = {
  /** A custom React node representing an icon or image to be displayed prior the description. */
  icon: PropTypes.node,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** The description or text content associated with the metadata. */
  metaDescription: PropTypes.string,
  /** The title of the wrapper span tag */
  metaTitle: PropTypes.string,
  /** A custom CSS class name to style the color of the metadata. */
  textColorClass: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-metadata--primary
 * @zeroHeight
 * @end
 */

export default Metadata;
