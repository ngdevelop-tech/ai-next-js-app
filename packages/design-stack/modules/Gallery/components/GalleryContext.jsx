/**
 * @typedef {Object} GalleryContextProviderProps
 * @property {React.ReactNode} children - Node containing the gallery content
 */

import React, { useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";

import { GalleryContextData } from "../context";

const SCALE_VALUES = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5];

const defaultScaleValue = SCALE_VALUES[1];

function getNextOrSameElement(arr, element) {
  const index = arr.indexOf(element);
  return index !== -1 && index === arr.length - 1 ? element : arr[index + 1];
}
function getBeforeOrSameElement(arr, element) {
  const index = arr.indexOf(element);
  return index !== -1 && index === 0 ? element : arr[index - 1];
}

export const GalleryContextProvider = ({ children }) => {
  const [zoomValue, setZoomValue] = useState(defaultScaleValue);
  const [pdfCurrentPage, setPdfCurrentPage] = useState(1);
  const [pdfTotalPages, setPdfTotalPages] = useState(1);
  const [isFitScreenActive, setIsFitScreenActive] = useState(false);

  const onZoomClick = useCallback(action => {
    if (action === "zoomIn") {
      setZoomValue(value => getNextOrSameElement(SCALE_VALUES, value));
    } else if (action === "zoomOut") {
      setZoomValue(value => getBeforeOrSameElement(SCALE_VALUES, value));
    } else if (action === "reset") {
      setZoomValue(defaultScaleValue);
    }
  }, []);

  const onPdfPageChange = useCallback((action, payload) => {
    if (action === "pageChange") {
      setPdfCurrentPage(payload);
    } else if (action === "success") {
      setPdfTotalPages(payload);
    } else if (action === "error") {
      setPdfTotalPages(payload);
    }
  }, []);

  const onFitScreenClick = useCallback(() => {
    setZoomValue(defaultScaleValue);
    setIsFitScreenActive(!isFitScreenActive);
  }, [isFitScreenActive]);

  const resetFitScreen = useCallback(() => {
    setIsFitScreenActive(false);
  }, []);

  const memoizedContextValues = useMemo(() => {
    const index = SCALE_VALUES.indexOf(zoomValue);
    return {
      zoomValue,
      isMinZoomValue: index === 0,
      isMaxZoomValue: index === SCALE_VALUES.length - 1,
      onZoomClick,
      onPdfPageChange,
      pdfCurrentPage,
      pdfTotalPages,
      onFitScreenClick,
      isFitScreenActive,
      resetFitScreen,
    };
  }, [
    onZoomClick,
    zoomValue,
    pdfCurrentPage,
    pdfTotalPages,
    onPdfPageChange,
    onFitScreenClick,
    isFitScreenActive,
    resetFitScreen,
  ]);

  return (
    <GalleryContextData.Provider value={memoizedContextValues}>
      {children}
    </GalleryContextData.Provider>
  );
};

GalleryContextProvider.propTypes = {
  /** Node containing the gallery content */
  children: PropTypes.node.isRequired,
};
