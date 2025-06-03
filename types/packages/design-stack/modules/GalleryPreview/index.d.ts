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
import React from "react";
/**
 * GalleryPreview component displays content within a modal, often used for previewing media items
 * from a Gallery. It includes navigation arrows, optional top/bottom action bars, and zoom/pan capabilities.
 * Can be used standalone or integrated with the Gallery component.
 *
 * @component
 * @param {GalleryPreviewProps} props - Properties passed to the GalleryPreview component.
 * @returns {React.ReactElement | null} The rendered GalleryPreview component or null if not visible.
 */
declare const GalleryPreview: {
    ({ arrowsWrapperClassName: any, backdropWrapperClassName: any, bottomAction: any, bottomWrapperClassName: any, content: any, id: any, isContentPannable: any, isNextAvailable: any, isPrevAvailable: any, onClose: any, onNextClick: any, onPrevClick: any, topAction: any, visible: any, wrapperClassName: any, standalone, any, }: any): React.ReactElement;
    propTypes: {
        /** A custom CSS class name to style the wrapper of the forward and back arrow container. */
        arrowsWrapperClassName: any;
        /** A custom CSS class name to style the Modal. */
        backdropWrapperClassName: any;
        /** Node containing the bottom action bar that will be displayed within the `GalleryPreview` Modal component. Like, zoom in, zoom out, etc. */
        bottomAction: any;
        /** A custom CSS class name to style the `bottomAction` container. */
        bottomWrapperClassName: any;
        /** Node containing the content that will be displayed within the `GalleryPreview` Modal. */
        content: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Boolean value to be passed true if preview content is pannable */
        isContentPannable: any;
        /** Boolean value to be passed false if next image is not available */
        isNextAvailable: any;
        /** Boolean value to be passed false if prev image is not available */
        isPrevAvailable: any;
        /** A callback function triggered on clicking the close Modal button */
        onClose: any;
        /** A callback function triggered on clicking the forward arrow button */
        onNextClick: any;
        /** A callback function triggered on clicking the prev arrow button */
        onPrevClick: any;
        /** Boolean value to determine if GalleryPreview should be used standalone without Gallery component */
        standalone: any;
        /** Node containing the top action bar that will be displayed within the `GalleryPreview` Modal component. Like, back button, download, etc. */
        topAction: any;
        /** Boolean value to show the Gallery Preview Option */
        visible: any;
        /** A custom CSS class name to style the wrapper of the component. */
        wrapperClassName: any;
    };
    defaultProps: {
        arrowsWrapperClassName: string;
        backdropWrapperClassName: string;
        bottomAction: any;
        bottomWrapperClassName: string;
        id: any;
        isContentPannable: boolean;
        isNextAvailable: boolean;
        isPrevAvailable: boolean;
        onClose: any;
        onNextClick: any;
        onPrevClick: any;
        topAction: any;
        visible: boolean;
        wrapperClassName: string;
        standalone: boolean;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gallery--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/4898d4-media-gallery/b/53ba1e
 * @end
 */
export default GalleryPreview;
