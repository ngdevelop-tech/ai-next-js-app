/**
 * @typedef {Object} GalleryZoomInOutProps
 * @property {React.ReactNode} fitToScreenNode? - Node containing the content that will be representing fit screen handler
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {React.ReactNode} zoomInNode - Node containing the content that will be representing zoom in handler
 * @property {React.ReactNode} zoomOutNode - Node containing the content that will be representing zoom out handler
 */
/**
 * @type {React.FC<GalleryZoomInOutProps>}
 */
declare function GalleryZoomInOut({ id, zoomInNode, zoomOutNode, fitToScreenNode, }: {
    id?: any;
    zoomInNode: any;
    zoomOutNode: any;
    fitToScreenNode?: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace GalleryZoomInOut {
    var propTypes: {
        /** Node containing the content that will be representing fit screen handler */
        fitToScreenNode: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Node containing the content that will be representing zoom in handler */
        zoomInNode: any;
        /** Node containing the content that will be representing zoom out handler */
        zoomOutNode: any;
    };
}
export default GalleryZoomInOut;
