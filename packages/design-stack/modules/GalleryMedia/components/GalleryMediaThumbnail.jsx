/**
 * Represents the possible statuses for a media card thumbnail.
 * @typedef {'image' | 'error' | 'loading' | 'video' | 'pdf' | 'doc'} MediaCardStatus
 */

/**
 * Represents the possible variants for the loader component.
 * @typedef {'spinner' | 'percentage-loader'} LoaderVariant
 */

/**
 * @typedef {Object} GalleryMediaItem
 * @property {(string | React.ReactNode)} [file] - The media file content. Can be a URL string for images/videos or a React node for custom rendering.
 * @property {React.ReactNode} [icon] - Custom icon to display (currently unused in this component but potentially part of the item structure).
 * @property {string} [id] - Unique identifier for the media item.
 * @property {number} [loaderPercentage] - The percentage value for the percentage loader variant (0-100). Required when `loaderVariant` is 'percentage-loader'.
 * @property {LoaderVariant} [loaderVariant] - The type of loader to display when status is 'loading'. Defaults to 'spinner'.
 * @property {boolean} [selected] - Indicates if the media item is currently selected.
 * @property {MediaCardStatus} [status] - The current status of the media item, determining how the thumbnail is rendered.
 * @property {string} [subTitle] - Subtitle text for the media item (currently unused in this component).
 * @property {string} [title] - Title text for the media item (currently unused in this component).
 */

/**
 * @typedef {Object} GalleryMediaThumbnailProps
 * @property {GalleryMediaItem} [item] - Data object containing properties for the media thumbnail.
 */

import React from "react";
import { MdDescription, MdPictureAsPdf, MdWarning } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { MEDIA_CARD_STATUS } from "../../Gallery/constants/gallery";
import Loader from "../../Loader";
import { LOADER_VARIANTS } from "../../Loader/constants/loader";

import CircleThumbnailIcon from "./CircleThumbnailIcon";

/**
 * Renders an image thumbnail.
 * @param {(string | React.ReactNode)} file - The image source (URL string) or a React node.
 * @param {boolean} isFileString - True if the file is a URL string.
 * @returns {React.ReactNode} The image thumbnail element.
 */
const renderImage = (file, isFileString) => (
  <div
    className="h-full rounded-sm bg-cover bg-no-repeat"
    style={isFileString ? { backgroundImage: `url(${file})` } : null}
  >
    {!isFileString ? file : null}
  </div>
);

/**
 * Renders an error state thumbnail.
 * @returns {React.ReactNode} The error thumbnail element.
 */
const renderError = () => (
  <div className="h-full">
    <div className="flex h-full flex-col justify-around">
      <MdWarning
        className="mx-auto h-6 w-6 icon-danger-strong"
        aria-hidden="true"
      />
    </div>
  </div>
);

/**
 * Renders a loading state thumbnail.
 * @param {(string | React.ReactNode)} file - The background image/content (URL string or React node) if available during loading.
 * @param {boolean} isFileString - True if the file is a URL string.
 * @param {LoaderVariant} loaderVariant - The type of loader to display.
 * @param {number} loaderPercentage - The percentage for the percentage loader.
 * @returns {React.ReactNode} The loading thumbnail element.
 */
const renderLoading = (file, isFileString, loaderVariant, loaderPercentage) => (
  <div
    className={twClassNames("flex h-full justify-center", {
      "bg-cover bg-no-repeat rounded-sm": file,
    })}
    style={
      loaderVariant === LOADER_VARIANTS.PERCENTAGE_LOADER && file
        ? {
            backgroundImage: `linear-gradient( rgba(0,0,0,${
              (100 - loaderPercentage) / 100
            }), rgba(0,0,0,${(100 - loaderPercentage) / 100}) ), url(${
              isFileString ? file : ""
            })`,
          }
        : null
    }
  >
    {!isFileString ? (
      <div
        style={{
          backgroundImage: `linear-gradient( rgba(0,0,0,${
            (100 - loaderPercentage) / 100
          }), rgba(0,0,0,${(100 - loaderPercentage) / 100}) )`,
        }}
        className="absolute flex h-full w-full items-center justify-center"
      >
        <div className="absolute flex h-full w-full items-center justify-center overflow-hidden">
          {file}
        </div>
      </div>
    ) : null}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader variant={loaderVariant} percentage={loaderPercentage} ariaBusy />
    </div>
  </div>
);

/**
 * Renders a video thumbnail.
 * @param {(string | React.ReactNode)} file - The video poster/preview (URL string) or a React node.
 * @param {boolean} isFileString - True if the file is a URL string.
 * @returns {React.ReactNode} The video thumbnail element.
 */
const renderVideo = (file, isFileString) => (
  <div
    className={twClassNames(
      "h-full overflow-hidden rounded-sm bg-cover bg-no-repeat",
      {
        relative: !isFileString,
      }
    )}
    style={isFileString ? { backgroundImage: `url(${file})` } : null}
  >
    {!isFileString ? (
      <div className="absolute flex h-full w-full items-center justify-center overflow-hidden">
        {file}
      </div>
    ) : null}
    <div className="flex h-full flex-col justify-around">
      <div className="mx-auto" aria-hidden="true">
        <CircleThumbnailIcon />
      </div>
    </div>
  </div>
);

/**
 * Renders a PDF document thumbnail.
 * @returns {React.ReactNode} The PDF thumbnail element.
 */
const renderPdf = () => (
  <div className="h-full">
    <div className="flex h-full flex-col justify-around">
      <MdPictureAsPdf
        className="mx-auto h-6 w-6 icon-neutral-strong"
        aria-hidden="true"
      />
    </div>
  </div>
);

/**
 * Renders a generic document thumbnail.
 * @returns {React.ReactNode} The document thumbnail element.
 */
const renderDoc = () => (
  <div className="h-full">
    <div className="flex h-full flex-col justify-around">
      <MdDescription
        className="mx-auto h-6 w-6 icon-neutral-strong"
        aria-hidden="true"
      />
    </div>
  </div>
);

/**
 * Displays a thumbnail preview for various media types within a gallery context.
 * It renders different content based on the `status` property of the `item` prop,
 * handling image, video, PDF, document, loading, and error states.
 * @param {GalleryMediaThumbnailProps} props - The component props.
 * @returns {React.ReactNode} The rendered media thumbnail.
 */
const GalleryMediaThumbnail = ({ item = null }) => {
  const { file, loaderPercentage, loaderVariant, status } = item || {};
  const isFileString = typeof file === "string";

  switch (status) {
    case MEDIA_CARD_STATUS.IMAGE:
      return renderImage(file, isFileString);
    case MEDIA_CARD_STATUS.ERROR:
      return renderError();
    case MEDIA_CARD_STATUS.LOADING:
      return renderLoading(file, isFileString, loaderVariant, loaderPercentage);
    case MEDIA_CARD_STATUS.VIDEO:
      return renderVideo(file, isFileString);
    case MEDIA_CARD_STATUS.PDF:
      return renderPdf();
    case MEDIA_CARD_STATUS.DOC:
      return renderDoc();
    default:
      return (
        <div className="h-full text-lg font-normal leading-none text-neutral-default">
          Unsupported format
        </div>
      );
  }
};

GalleryMediaThumbnail.propTypes = {
  /** Data object containing properties for the media thumbnail. */
  item: PropTypes.shape({
    /** The media file content. Can be a URL string for images/videos or a React node for custom rendering. */
    file: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Custom icon to display (currently unused in this component). */
    icon: PropTypes.node,
    /** Unique identifier for the media item. */
    id: PropTypes.string,
    /** The percentage value for the percentage loader variant (0-100). Required when `loaderVariant` is 'percentage-loader'. */
    loaderPercentage: PropTypes.number,
    /** The type of loader to display when status is 'loading'. */
    loaderVariant: PropTypes.oneOf(Object.values(LOADER_VARIANTS)),
    /** Indicates if the media item is currently selected. */
    selected: PropTypes.bool,
    /** The current status of the media item, determining how the thumbnail is rendered. */
    status: PropTypes.oneOf(Object.values(MEDIA_CARD_STATUS)),
    /** Subtitle text for the media item (currently unused in this component). */
    subTitle: PropTypes.string,
    /** Title text for the media item (currently unused in this component). */
    title: PropTypes.string,
  }),
};

export default GalleryMediaThumbnail;
