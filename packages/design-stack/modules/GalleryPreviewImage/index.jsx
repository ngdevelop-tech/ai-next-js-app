/**
 * Defines the props accepted by the GalleryPreviewImage component.
 * @typedef {Object} GalleryPreviewImageProps
 * @property {string} alt - Specifies the alternative text for the image, crucial for accessibility.
 * @property {string} [id] - Optional unique identifier to be applied to the root `<img>` element.
 * @property {string} src - The source URL path for the image file.
 * @property {string} [wrapperClassName] - Optional custom CSS class name(s) to apply to the `<img>` element for additional styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { useGalleryPreviewImage } from "./useGalleryPreviewImage";

/**
 * Renders an image optimized for gallery previews.
 * This component uses a custom hook (`useGalleryPreviewImage`) to calculate and apply
 * appropriate dimensions based on the image's natural size, ensuring it fits well
 * within its container while maintaining aspect ratio.
 *
 * @component
 * @param {GalleryPreviewImageProps} props - The props for the GalleryPreviewImage component.
 * @param {string} props.alt - Specifies the alternative text for the image.
 * @param {string} [props.id] - Optional unique identifier for the image element.
 * @param {string} props.src - The source URL of the image.
 * @param {string} [props.wrapperClassName] - Optional CSS class(es) for custom styling.
 * @returns {React.ReactElement} The rendered image element.
 */
function GalleryPreviewImage({ alt, id = null, src, wrapperClassName = "" }) {
  const { imgRef, getImageDimensions, newWidth, newHeight } =
    useGalleryPreviewImage(src);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={getImageDimensions}
      className={twClassNames("select-none", wrapperClassName)}
      style={{
        maxWidth: newWidth || "100%",
        width: newWidth || "auto",
        height: newHeight || "auto",
      }}
      {...(id !== null && { id })}
    />
  );
}

GalleryPreviewImage.propTypes = {
  /** Specifies an alternate text for the image */
  alt: PropTypes.string.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Specifies the path to the image */
  src: PropTypes.string.isRequired,
  /** A custom CSS class name to style image */
  wrapperClassName: PropTypes.string,
};

export default GalleryPreviewImage;
