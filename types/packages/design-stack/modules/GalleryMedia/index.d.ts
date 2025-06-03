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
declare const GalleryMedia: {
    ({ data, any, id, any, ratio, any, showExtensions, any, checkboxAlwaysVisible, any, withoutCheckbox, any, onChange, any, onCardClick, any, ratioConfig, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /**  Boolean value to determine to show checkbox on the card all the time. */
        checkboxAlwaysVisible: any;
        /** Array of data for each card  */
        data: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** A callback function triggered on click of `GalleryMedia` card.  */
        onCardClick: any;
        /** A callback function triggered to register change in status of `GalleryMedia` checkbox. */
        onChange: any;
        /**  Defines the width and height of the card based on the ratio from `ratioConfig`. */
        ratio: any;
        /** Available config of ratio to define card width and height  */
        ratioConfig: any;
        /**  Adds file extensions to the card tile. */
        showExtensions: any;
        /**  Boolean value to determine to show card without checkbox. */
        withoutCheckbox: any;
        /** A custom CSS class name to style the wrapper of the component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gallery--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/4898d4-media-gallery/b/53ba1e
 * @end
 */
export default GalleryMedia;
