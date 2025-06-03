/**
 * @typedef {Object} GalleryPreviewPdfProps
 * @property {string} src?
 */

import React, { useCallback, useContext, useEffect, useState } from "react";
import { Document, PasswordResponses, pdfjs } from "react-pdf";
import PropTypes from "prop-types";

import { GalleryContextData } from "../Gallery/context";

import PageWithObserver from "./components/PageWithObserver";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url
// ).toString();

const DEFAULT_WIDTH = 800;

const getMaxScreenWidth = () =>
  // Below functions return the max screen width in pixels
  // Subtracting 100 to account for the prev/next button width
  Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) -
  100;
/**
 * @type {React.FC<GalleryPreviewPdfProps>}
 */
function GalleryPreviewPdf({ src = null }) {
  const [totalPages, setTotalPages] = useState();
  const [visiblePages, setVisiblePages] = useState({});
  const [documentLoadError, setDocumentLoadError] = useState(null);
  const { zoomValue, onPdfPageChange, isFitScreenActive, resetFitScreen } =
    useContext(GalleryContextData);

  function onDocumentLoadSuccess({ numPages }) {
    resetFitScreen();
    setVisiblePages({ 1: true });
    setTotalPages(numPages);
    setDocumentLoadError(null); // Clear any previous error
    onPdfPageChange?.("success", numPages);
  }

  function onDocumentLoadError(error) {
    setDocumentLoadError(error.message);
    onPdfPageChange?.("error", null);
  }

  function onPasswordPrompt(callback, reason) {
    function callbackProxy(password) {
      // Cancel button handler
      if (password === null) {
        setDocumentLoadError("Error: Unable to open protected PDF.");
        return;
      }
      callback(password);
    }

    switch (reason) {
      case PasswordResponses.NEED_PASSWORD: {
        // eslint-disable-next-line no-alert
        const password = prompt("Enter the password to open this PDF file.");
        callbackProxy(password);
        break;
      }
      case PasswordResponses.INCORRECT_PASSWORD: {
        // eslint-disable-next-line no-alert
        const password = prompt("Invalid password. Please try again.");
        callbackProxy(password);
        break;
      }
      default:
    }
  }

  const setPageVisibility = useCallback((pageNumber, isIntersecting) => {
    setVisiblePages(prevVisiblePages => ({
      ...prevVisiblePages,
      [pageNumber]: isIntersecting,
    }));
  }, []);

  useEffect(() => {
    // Filter pages currently visible
    const visiblePageArray = Object.entries(visiblePages)
      .filter(([key, value]) => key && value)
      .map(([key]) => key);

    // Although many pages can be visible at a time, we only show one current page number
    const visiblePageNo = visiblePageArray[1] || visiblePageArray[0];

    onPdfPageChange?.("pageChange", visiblePageNo);
  }, [visiblePages, onPdfPageChange]);

  return (
    <div className="h-[95vh] overflow-scroll">
      <div className="mb-2 flex flex-col pb-2">
        <div className="mb-2">
          <Document
            file={src}
            error={`Error: ${documentLoadError}`}
            loading={documentLoadError ?? "Loading PDF..."}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            onSourceError={onDocumentLoadError}
            onPassword={onPasswordPrompt}
            className="flex flex-col text-neutral-inverse-default"
          >
            {Array.from(new Array(totalPages), (_, index) => (
              <PageWithObserver
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                setPageVisibility={setPageVisibility}
                width={isFitScreenActive ? getMaxScreenWidth() : DEFAULT_WIDTH}
                className="mx-0 my-4 [&:first-child]:mt-0"
                scale={zoomValue}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

GalleryPreviewPdf.propTypes = {
  src: PropTypes.string,
};

export default GalleryPreviewPdf;
