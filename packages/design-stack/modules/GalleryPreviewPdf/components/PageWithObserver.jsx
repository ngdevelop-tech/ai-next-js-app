/**
 * @typedef {Object} PageWithObserverProps
 * @property {number} pageNumber? - Which page from PDF file should be displayed, by page number.
 * @property {(event: React.MouseEvent<any>) => void} setPageVisibility? - Callback to set page visibility.
 */

import React, { useCallback, useState } from "react";
// import { Page } from "react-pdf";
import PropTypes from "prop-types";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

const observerConfig = {
  // How much of the page needs to be visible to consider page visible
  // Setting a lower value so that pageNumber indicator doesn't disappear on highly zoomed in pages
  threshold: 0.05,
};

/**
 * @type {React.FC<PageWithObserverProps>}
 */
function PageWithObserver({
  pageNumber = null,
  setPageVisibility = null,
  ...otherProps
}) {
  const [page, setPage] = useState();

  const onIntersectionChange = useCallback(
    ([entry]) => {
      setPageVisibility(pageNumber, entry.isIntersecting);
    },
    [pageNumber, setPageVisibility]
  );

  useIntersectionObserver(page, observerConfig, onIntersectionChange);
  return null;

  // return <Page canvasRef={setPage} pageNumber={pageNumber} {...otherProps} />;
}

export default PageWithObserver;

PageWithObserver.propTypes = {
  /** Which page from PDF file should be displayed, by page number. */
  pageNumber: PropTypes.number,
  /** Callback to set page visibility. */
  setPageVisibility: PropTypes.func,
};
