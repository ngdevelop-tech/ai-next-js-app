/**
 * @typedef {Object} GalleryProps
 * @property {React.ReactNode} children - The content to be displayed within the gallery. Typically includes `Gallery.Header`, `Gallery.Body`, and `Gallery.Footer`.
 * @property {string} [id] - Optional unique identifier for the root element of the gallery.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply to the gallery's root wrapper element for custom styling.
 */

import React from "react";
import PropTypes from "prop-types";

import { GalleryContextProvider } from "./components/GalleryContext";

/**
 * The Gallery component serves as a container for displaying media or content collections.
 * It utilizes a context provider (`GalleryContextProvider`) to manage shared state or functionality
 * among its child components (e.g., Header, Body, Footer).
 *
 * @component
 * @param {GalleryProps} props - The props for the Gallery component.
 * @type {React.FC<GalleryProps>}
 */
const Gallery = ({ children, id, wrapperClassName }) => (
  <GalleryContextProvider>
    <div className={wrapperClassName} {...(id !== null && { id })}>
      {children}
    </div>
  </GalleryContextProvider>
);

Gallery.propTypes = {
  /** The content to be displayed within the gallery. Typically includes `Gallery.Header`, `Gallery.Body`, and `Gallery.Footer`. */
  children: PropTypes.node.isRequired,
  /** Optional unique identifier for the root element of the gallery. */
  id: PropTypes.string,
  /** Optional custom CSS class name to apply to the gallery's root wrapper element for custom styling. */
  wrapperClassName: PropTypes.string,
};
Gallery.defaultProps = {
  id: null,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gallery--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/4898d4-media-gallery/b/53ba1e
 * @end
 */

export default Gallery;
