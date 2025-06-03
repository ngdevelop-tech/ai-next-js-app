/**
 * @typedef {Object} GalleryPreviewPdfProps
 * @property {string} src?
 */
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
/**
 * @type {React.FC<GalleryPreviewPdfProps>}
 */
declare function GalleryPreviewPdf({ src }: {
    src?: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace GalleryPreviewPdf {
    var propTypes: {
        src: any;
    };
}
export default GalleryPreviewPdf;
