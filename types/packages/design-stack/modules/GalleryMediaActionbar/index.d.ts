/**
 * Represents the properties for the GalleryMediaActionbar component.
 *
 * @typedef {Object} GalleryMediaActionbarProps
 * @property {string} [id] - Optional unique identifier to be added to the root element of the component.
 * @property {React.ReactNode} [primaryActions] - Optional React nodes representing the primary actions (e.g., buttons, links) to be displayed, typically on the left side.
 * @property {React.ReactNode} [secondaryActions] - Optional React nodes representing the secondary actions (e.g., buttons, links) to be displayed, typically on the right side.
 * @property {boolean} [visible=false] - Controls the visibility of the action bar. If `true`, the action bar is rendered; otherwise, it's hidden. Defaults to `false`.
 * @property {string} [wrapperClassName] - Optional custom CSS class name(s) to be applied to the main wrapper `div` element for custom styling.
 */
import React from "react";
/**
 * GalleryMediaActionbar component displays a contextual action bar, typically shown when items in a gallery are selected.
 * It provides designated areas for primary and secondary actions.
 *
 * @component
 * @param {GalleryMediaActionbarProps} props - The props for the GalleryMediaActionbar component.
 * @returns {React.ReactElement | null} The rendered GalleryMediaActionbar component or null if not visible.
 * @example
 * <GalleryMediaActionbar
 *   visible={true}
 *   primaryActions={<Button>Delete</Button>}
 *   secondaryActions={<Button variant="secondary">Download</Button>}
 * />
 */
declare const GalleryMediaActionbar: {
    ({ id, any, primaryActions, any, secondaryActions, any, visible, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional unique identifier to be added to the root element of the component. */
        id: any;
        /** Optional React nodes representing the primary actions (e.g., buttons, links) to be displayed, typically on the left side. */
        primaryActions: any;
        /** Optional React nodes representing the secondary actions (e.g., buttons, links) to be displayed, typically on the right side. */
        secondaryActions: any;
        /** Controls the visibility of the action bar. If `true`, the action bar is rendered; otherwise, it's hidden. Defaults to `false`. */
        visible: any;
        /** Optional custom CSS class name(s) to be applied to the main wrapper `div` element for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gallery--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/4898d4-media-gallery/b/53ba1e
 * @end
 */
export default GalleryMediaActionbar;
