/**
 * Represents a single media item within the gallery.
 * @typedef {Object} GalleryMediaItem
 * @property {string | React.ReactNode} file - The media file content, can be a URL string or a React node (e.g., an image component).
 * @property {React.ReactNode} [icon] - An optional icon to display alongside the title/subtitle.
 * @property {string} id - A unique identifier for the media item.
 * @property {number} [loaderPercentage] - The progress percentage (0-100) if the status is 'UPLOADING'.
 * @property {string} [loaderVariant] - The variant/style of the loader (specific values depend on implementation).
 * @property {boolean} [selected=false] - Indicates if the media item is currently selected.
 * @property {typeof MEDIA_CARD_STATUS[keyof typeof MEDIA_CARD_STATUS]} [status] - The current status of the media item (e.g., 'DEFAULT', 'UPLOADING', 'ERROR'). See `MEDIA_CARD_STATUS`.
 * @property {string} [subTitle] - An optional subtitle displayed below the title. Often used for file size, dimensions, or error messages.
 * @property {string} title - The main title or filename for the media item.
 * @property {string} [titleHighlightClassName] - Optional CSS class to apply highlighting to parts of the title (e.g., the file extension).
 */

/**
 * Props for the GalleryMedia component.
 * @typedef {Object} GalleryMediaProps
 * @property {boolean} [checkboxAlwaysVisible=false] - If true, the selection checkbox is always visible, otherwise it appears on hover.
 * @property {Array<GalleryMediaItem>} [data=[]] - An array of media item objects to display in the gallery.
 * @property {string} [id=null] - An optional unique ID attribute to apply to the root wrapper element.
 * @property {(itemId: string) => void} [onCardClick=null] - Callback function invoked when a media card (excluding the checkbox area) is clicked. Receives the `id` of the clicked item.
 * @property {(isSelected: boolean, itemId: string) => void} [onChange=null] - Callback function invoked when the selection state of a media item changes via its checkbox. Receives the new selection state (`true` or `false`) and the `id` of the item.
 * @property {keyof typeof MEDIA_CARD_THUMBNAIL_RATIO} [ratio='16/9'] - Defines the aspect ratio for the media thumbnails. Defaults to '16/9'. Allowed values: '1/1', '16/9', '3/2', '4/3'.
 * @property {Object.<string, string>} [ratioConfig=MEDIA_CARD_THUMBNAIL_RATIO] - Configuration object mapping ratio keys (like '16/9') to CSS classes defining dimensions.
 * @property {boolean} [showExtensions=false] - If true, attempts to parse and display file extensions separately in the title.
 * @property {boolean} [withoutCheckbox=false] - If true, renders the media cards without selection checkboxes.
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to apply to the root wrapper element of the gallery.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { MEDIA_CARD_STATUS } from "../Gallery/constants/gallery";

import GalleryMediaCheckbox from "./components/GalleryMediaCheckbox";
import GalleryMediaThumbnail from "./components/GalleryMediaThumbnail";
import { MEDIA_CARD_THUMBNAIL_RATIO } from "./constants/galleryMedia";
import {
  renderFileWithExtension,
  renderFileWithoutExtension,
  renderSubTitle,
} from "./utils";

/**
 * Renders a grid of media items (images, files) with selection capabilities,
 * status indicators, and customizable aspect ratios. Each item is represented
 * as a card with a thumbnail, title, optional subtitle, and checkbox.
 *
 * @component
 * @param {GalleryMediaProps} props - The props for the GalleryMedia component.
 * @example
 * const mediaData = [
 *   { id: '1', title: 'image.png', file: '/path/to/image.png', selected: false },
 *   { id: '2', title: 'document.pdf', file: '/path/to/document.pdf', subTitle: '1.2 MB', status: 'DEFAULT' },
 *   { id: '3', title: 'archive.zip', file: '/path/to/archive.zip', status: 'ERROR', subTitle: 'Upload failed' }
 * ];
 *
 * <GalleryMedia
 *   data={mediaData}
 *   onChange={(isSelected, itemId) => console.log(itemId, isSelected)}
 *   onCardClick={(itemId) => console.log('Card clicked:', itemId)}
 *   ratio="1/1"
 *   showExtensions
 * />
 */
const GalleryMedia = ({
  data = [],
  id = null,
  ratio = "16/9",
  showExtensions = false,
  checkboxAlwaysVisible = false,
  withoutCheckbox = false,
  onChange = null,
  onCardClick = null,
  ratioConfig = MEDIA_CARD_THUMBNAIL_RATIO,
  wrapperClassName = "",
}) => {
  const handleChange = (e, itemId) => {
    onChange?.(e.target.checked, itemId);
  };

  return (
    <div className={wrapperClassName} {...(id !== null && { id })}>
      {data.map(mediaItem => (
        <div
          key={mediaItem.id}
          className={`${ratioConfig[ratio].split(" ")[1]}`}
        >
          <GalleryMediaCheckbox
            data={{
              label: mediaItem.id,
              title: mediaItem.title,
            }}
            onClick={onCardClick ? () => onCardClick?.(mediaItem.id) : null}
            selected={mediaItem.selected}
            checkboxAlwaysVisible={checkboxAlwaysVisible}
            status={mediaItem.status}
            withoutCheckbox={withoutCheckbox}
            onChange={e => handleChange(e, mediaItem.id)}
            dimension={ratioConfig[ratio]}
          >
            <GalleryMediaThumbnail item={mediaItem} />
          </GalleryMediaCheckbox>

          <div className="mt-4 flex items-start justify-between">
            <div className="grow-0">
              {mediaItem.title && (
                <div className="text-sm font-normal leading-none text-neutral-default">
                  {showExtensions
                    ? renderFileWithExtension(
                        mediaItem.title,
                        mediaItem?.titleHighlightClassName || ""
                      )
                    : renderFileWithoutExtension(
                        mediaItem.title,
                        mediaItem?.titleHighlightClassName || ""
                      )}
                </div>
              )}
              {(mediaItem.status === MEDIA_CARD_STATUS.ERROR ||
                mediaItem.subTitle) && (
                <p
                  id={mediaItem.id || mediaItem.title}
                  className={twClassNames(
                    "mt-2 text-xs font-medium leading-4 text-neutral-weaker",
                    {
                      "text-danger-default":
                        mediaItem.status === MEDIA_CARD_STATUS.ERROR,
                    }
                  )}
                >
                  {renderSubTitle(mediaItem)}
                </p>
              )}
            </div>

            {mediaItem.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

GalleryMedia.propTypes = {
  /**  Boolean value to determine to show checkbox on the card all the time. */
  checkboxAlwaysVisible: PropTypes.bool,
  /** Array of data for each card  */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      icon: PropTypes.node,
      id: PropTypes.string,
      loaderPercentage: PropTypes.number,
      loaderVariant: PropTypes.string,
      selected: PropTypes.bool,
      status: PropTypes.oneOf(Object.values(MEDIA_CARD_STATUS)),
      subTitle: PropTypes.string,
      title: PropTypes.string,
      titleHighlightClassName: PropTypes.string,
    })
  ),
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A callback function triggered on click of `GalleryMedia` card.  */
  onCardClick: PropTypes.func,
  /** A callback function triggered to register change in status of `GalleryMedia` checkbox. */
  onChange: PropTypes.func,
  /**  Defines the width and height of the card based on the ratio from `ratioConfig`. */
  ratio: PropTypes.string,
  /** Available config of ratio to define card width and height  */
  ratioConfig: PropTypes.shape({
    "1/1": PropTypes.string,
    "16/9": PropTypes.string,
    "3/2": PropTypes.string,
    "4/3": PropTypes.string,
  }),
  /**  Adds file extensions to the card tile. */
  showExtensions: PropTypes.bool,

  /**  Boolean value to determine to show card without checkbox. */
  withoutCheckbox: PropTypes.bool,
  /** A custom CSS class name to style the wrapper of the component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gallery--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/4898d4-media-gallery/b/53ba1e
 * @end
 */

export default GalleryMedia;
