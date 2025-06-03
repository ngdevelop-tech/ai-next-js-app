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
/**
 * Displays a thumbnail preview for various media types within a gallery context.
 * It renders different content based on the `status` property of the `item` prop,
 * handling image, video, PDF, document, loading, and error states.
 * @param {GalleryMediaThumbnailProps} props - The component props.
 * @returns {React.ReactNode} The rendered media thumbnail.
 */
declare const GalleryMediaThumbnail: {
    ({ item }: any): React.ReactElement;
    propTypes: {
        /** Data object containing properties for the media thumbnail. */
        item: any;
    };
};
export default GalleryMediaThumbnail;
