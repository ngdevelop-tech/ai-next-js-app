/**
 * @typedef {Object} GalleryPreviewPdfPageNumberProps
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 */

import React, { useContext } from "react";
import PropTypes from "prop-types";

import { GalleryContextData } from "../Gallery/context";

/**
 * @type {React.FC<GalleryPreviewPdfPageNumberProps>}
 */
function GalleryPreviewPdfPageNumber({ id = null }) {
  const { pdfCurrentPage, pdfTotalPages } = useContext(GalleryContextData);

  return (
    <>
      {pdfTotalPages && pdfCurrentPage ? (
        <div
          className="mr-4 flex items-center justify-center rounded bg-neutral-default px-4 text-neutral-default shadow-md focus:z-10 focus:ring-offset-0"
          {...(id !== null && { id })}
        >
          Page {pdfCurrentPage} of {pdfTotalPages}
        </div>
      ) : null}
    </>
  );
}

GalleryPreviewPdfPageNumber.propTypes = {
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
};

export default GalleryPreviewPdfPageNumber;
