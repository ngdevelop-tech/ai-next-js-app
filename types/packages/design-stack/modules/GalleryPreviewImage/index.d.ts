/**
 * Defines the props accepted by the GalleryPreviewImage component.
 * @typedef {Object} GalleryPreviewImageProps
 * @property {string} alt - Specifies the alternative text for the image, crucial for accessibility.
 * @property {string} [id] - Optional unique identifier to be applied to the root `<img>` element.
 * @property {string} src - The source URL path for the image file.
 * @property {string} [wrapperClassName] - Optional custom CSS class name(s) to apply to the `<img>` element for additional styling.
 */
/**
 * Renders an image optimized for gallery previews.
 * This component uses a custom hook (`useGalleryPreviewImage`) to calculate and apply
 * appropriate dimensions based on the image's natural size, ensuring it fits well
 * within its container while maintaining aspect ratio.
 *
 * @component
 * @param {GalleryPreviewImageProps} props - The props for the GalleryPreviewImage component.
 * @param {string} props.alt - Specifies the alternative text for the image.
 * @param {string} [props.id] - Optional unique identifier for the image element.
 * @param {string} props.src - The source URL of the image.
 * @param {string} [props.wrapperClassName] - Optional CSS class(es) for custom styling.
 * @returns {React.ReactElement} The rendered image element.
 */
declare function GalleryPreviewImage({ alt, id, src, wrapperClassName }: {
    alt: any;
    id?: any;
    src: any;
    wrapperClassName?: string;
}): import("react/jsx-runtime").JSX.Element;
declare namespace GalleryPreviewImage {
    var propTypes: {
        /** Specifies an alternate text for the image */
        alt: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Specifies the path to the image */
        src: any;
        /** A custom CSS class name to style image */
        wrapperClassName: any;
    };
}
export default GalleryPreviewImage;
