/**
 * Properties for the GalleryPreview component.
 * @typedef {Object} GalleryPreviewProps
 * @property {string} [arrowsWrapperClassName] - Optional CSS class name to apply to the container wrapping the navigation arrows.
 * @property {string} [backdropWrapperClassName] - Optional CSS class name to apply to the modal's backdrop element.
 * @property {React.ReactNode} [bottomAction] - Optional React node to render as the bottom action bar within the modal (e.g., zoom controls).
 * @property {string} [bottomWrapperClassName] - Optional CSS class name to apply to the container wrapping the `bottomAction`.
 * @property {React.ReactNode} content - The main content to display within the preview modal. This is typically an image, video, or document viewer.
 * @property {string} [id] - Optional unique identifier to apply to the root element of the component.
 * @property {boolean} [isContentPannable=false] - If `true`, allows the content within the modal to be panned (useful for large images). @default false
 * @property {boolean} [isNextAvailable=true] - If `false`, hides the "next" navigation arrow. @default true
 * @property {boolean} [isPrevAvailable=true] - If `false`, hides the "previous" navigation arrow. @default true
 * @property {(event: React.MouseEvent<HTMLElement>) => void} [onClose] - Optional callback function invoked when the modal's close button is clicked or the overlay is clicked.
 * @property {(event: React.MouseEvent<HTMLElement>) => void} [onNextClick] - Optional callback function invoked when the "next" navigation arrow is clicked.
 * @property {(event: React.MouseEvent<HTMLElement>) => void} [onPrevClick] - Optional callback function invoked when the "previous" navigation arrow is clicked.
 * @property {boolean} [standalone=false] - If `true`, the component manages its own state (zoom, PDF pages) via context. If `false`, it relies on the context provided by a parent `Gallery` component. @default false
 * @property {React.ReactNode} [topAction] - Optional React node to render as the top action bar within the modal (e.g., back button, download button).
 * @property {boolean} [visible=false] - Controls the visibility of the preview modal. If `true`, the modal is shown. @default false
 * @property {string} [wrapperClassName] - Optional CSS class name to apply to the main wrapper `div` of the component.
 */

import React, { useCallback, useContext, useMemo, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";
import { GalleryContextData } from "../Gallery/context";

import Modal from "./components/Modal";

// Scale values for zoom functionality
const SCALE_VALUES = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5];
const defaultScaleValue = SCALE_VALUES[1];

/**
 * GalleryPreview component displays content within a modal, often used for previewing media items
 * from a Gallery. It includes navigation arrows, optional top/bottom action bars, and zoom/pan capabilities.
 * Can be used standalone or integrated with the Gallery component.
 *
 * @component
 * @param {GalleryPreviewProps} props - Properties passed to the GalleryPreview component.
 * @returns {React.ReactElement | null} The rendered GalleryPreview component or null if not visible.
 */
const GalleryPreview = ({
  arrowsWrapperClassName,
  backdropWrapperClassName,
  bottomAction,
  bottomWrapperClassName,
  content,
  id,
  isContentPannable,
  isNextAvailable,
  isPrevAvailable,
  onClose,
  onNextClick,
  onPrevClick,
  topAction,
  visible,
  wrapperClassName,
  standalone = false,
}) => {
  const [zoomValue, setZoomValue] = useState(defaultScaleValue);
  const [pdfCurrentPage, setPdfCurrentPage] = useState(1);
  const [pdfTotalPages, setPdfTotalPages] = useState(1);
  const [isFitScreenActive, setIsFitScreenActive] = useState(false);

  const galleryContext = useContext(GalleryContextData);

  const handleZoomClick = useCallback(action => {
    if (action === "zoomIn") {
      setZoomValue(value => {
        const index = SCALE_VALUES.indexOf(value);
        return index < SCALE_VALUES.length - 1
          ? SCALE_VALUES[index + 1]
          : value;
      });
    } else if (action === "zoomOut") {
      setZoomValue(value => {
        const index = SCALE_VALUES.indexOf(value);
        return index > 0 ? SCALE_VALUES[index - 1] : value;
      });
    } else if (action === "reset") {
      setZoomValue(defaultScaleValue);
    }
  }, []);

  const handlePdfPageChange = useCallback((action, payload) => {
    if (action === "pageChange") {
      setPdfCurrentPage(payload);
    } else if (action === "success") {
      setPdfTotalPages(payload);
    } else if (action === "error") {
      setPdfTotalPages(payload);
    }
  }, []);

  const standaloneContext = useMemo(
    () => ({
      zoomValue,
      isMinZoomValue: SCALE_VALUES.indexOf(zoomValue) === 0,
      isMaxZoomValue:
        SCALE_VALUES.indexOf(zoomValue) === SCALE_VALUES.length - 1,
      onZoomClick: handleZoomClick,
      onPdfPageChange: handlePdfPageChange,
      pdfCurrentPage,
      pdfTotalPages,
      onFitScreenClick: () => {
        setZoomValue(defaultScaleValue);
        setIsFitScreenActive(!isFitScreenActive);
      },
      isFitScreenActive,
      resetFitScreen: () => setIsFitScreenActive(false),
    }),
    [
      zoomValue,
      pdfCurrentPage,
      pdfTotalPages,
      isFitScreenActive,
      handleZoomClick,
      handlePdfPageChange,
    ]
  );

  const contextValue = standalone ? standaloneContext : galleryContext;

  const handleNextClick = () => {
    contextValue.onZoomClick?.("reset");
    onNextClick?.();
  };

  const handlePrevClick = () => {
    contextValue.onZoomClick?.("reset");
    onPrevClick?.();
  };

  const handleOnClose = () => {
    contextValue.onPdfPageChange?.("error", null);
    contextValue.onZoomClick?.("reset");
    onClose?.();
  };

  const previewContent = (
    <div className={wrapperClassName} {...(id !== null && { id })}>
      <Modal
        backdropWrapperClassName={backdropWrapperClassName}
        onOverlayClick={handleOnClose}
        onClose={handleOnClose}
        wrapperClassName={twClassNames("static bg-transparent shadow-none", {
          "sm:max-w-none": isContentPannable,
        })}
        show={visible}
      >
        {topAction}
        {content ? (
          <div className="m-auto max-w-[calc(100%-8rem)]">{content}</div>
        ) : (
          <p className="text-center">No content to preview</p>
        )}
        <div
          className={twClassNames(
            "absolute top-1/2 mx-auto flex w-full justify-between",
            arrowsWrapperClassName
          )}
        >
          {isPrevAvailable && (
            <Button
              onClick={handlePrevClick}
              variant="minimal"
              wrapperClassName="absolute left-0 ml-3 focus:border-none bg-input-default"
              colors="white"
              icon={<MdChevronLeft className="mx-auto h-5 w-5" />}
              isIconOnlyButton
              aria-label="prev-slider-item-btn"
            />
          )}
          {isNextAvailable && (
            <Button
              onClick={handleNextClick}
              variant="minimal"
              wrapperClassName="absolute right-0 mr-3 focus:border-none bg-input-default"
              colors="white"
              icon={<MdChevronRight className="mx-auto h-5 w-5" />}
              isIconOnlyButton
              aria-label="next-slider-item-btn"
            />
          )}
        </div>
        <div
          className={twClassNames(
            "absolute bottom-3 left-0 z-10 flex w-full justify-center",
            bottomWrapperClassName
          )}
        >
          {bottomAction}
        </div>
      </Modal>
    </div>
  );

  // If standalone, wrap with context provider
  if (standalone) {
    return (
      <GalleryContextData.Provider value={contextValue}>
        {previewContent}
      </GalleryContextData.Provider>
    );
  }

  return previewContent;
};

GalleryPreview.propTypes = {
  /** A custom CSS class name to style the wrapper of the forward and back arrow container. */
  arrowsWrapperClassName: PropTypes.string,
  /** A custom CSS class name to style the Modal. */
  backdropWrapperClassName: PropTypes.string,
  /** Node containing the bottom action bar that will be displayed within the `GalleryPreview` Modal component. Like, zoom in, zoom out, etc. */
  bottomAction: PropTypes.node,
  /** A custom CSS class name to style the `bottomAction` container. */
  bottomWrapperClassName: PropTypes.string,
  /** Node containing the content that will be displayed within the `GalleryPreview` Modal. */
  content: PropTypes.node.isRequired,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Boolean value to be passed true if preview content is pannable */
  isContentPannable: PropTypes.bool,
  /** Boolean value to be passed false if next image is not available */
  isNextAvailable: PropTypes.bool,
  /** Boolean value to be passed false if prev image is not available */
  isPrevAvailable: PropTypes.bool,
  /** A callback function triggered on clicking the close Modal button */
  onClose: PropTypes.func,
  /** A callback function triggered on clicking the forward arrow button */
  onNextClick: PropTypes.func,
  /** A callback function triggered on clicking the prev arrow button */
  onPrevClick: PropTypes.func,
  /** Boolean value to determine if GalleryPreview should be used standalone without Gallery component */
  standalone: PropTypes.bool,
  /** Node containing the top action bar that will be displayed within the `GalleryPreview` Modal component. Like, back button, download, etc. */
  topAction: PropTypes.node,
  /** Boolean value to show the Gallery Preview Option */
  visible: PropTypes.bool,
  /** A custom CSS class name to style the wrapper of the component. */
  wrapperClassName: PropTypes.string,
};

GalleryPreview.defaultProps = {
  arrowsWrapperClassName: "",
  backdropWrapperClassName: "",
  bottomAction: null,
  bottomWrapperClassName: "",
  id: null,
  isContentPannable: false,
  isNextAvailable: true,
  isPrevAvailable: true,
  onClose: null,
  onNextClick: null,
  onPrevClick: null,
  topAction: null,
  visible: false,
  wrapperClassName: "",
  standalone: false,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gallery--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/4898d4-media-gallery/b/53ba1e
 * @end
 */

export default GalleryPreview;
