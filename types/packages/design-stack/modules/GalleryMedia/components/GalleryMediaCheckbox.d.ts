/**
 * Props for the GalleryMediaCheckbox component.
 * @typedef {Object} GalleryMediaCheckboxProps
 * @property {boolean} [checkboxAlwaysVisible=false] - If true, the checkbox is always visible. Otherwise, it appears on hover/focus.
 * @property {React.ReactNode} children - The content to be rendered inside the checkbox container (typically the media thumbnail).
 * @property {{label: string, title: string}} data - Data associated with the checkbox, used for accessibility attributes.
 * @property {string} data.label - A label for the checkbox, often the item ID, used for `aria-describedby`.
 * @property {string} data.title - The title associated with the checkbox, used for `aria-label` on the checkbox input and potentially the button.
 * @property {string} [dimension=''] - CSS class(es) defining the dimensions (width/height) of the component, usually based on aspect ratio.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange=null] - Callback function invoked when the checkbox state changes. Receives the change event.
 * @property {() => void} [onClick=null] - Callback function invoked when the main area (excluding the checkbox) is clicked. If provided, the container becomes a button.
 * @property {boolean} [selected=false] - Indicates whether the checkbox is currently checked/selected.
 * @property {typeof MEDIA_CARD_STATUS[keyof typeof MEDIA_CARD_STATUS]} [status=MEDIA_CARD_STATUS.LOADING] - The status of the associated media item, affecting border styles (e.g., 'ERROR' status adds a danger border).
 * @property {boolean} [withoutCheckbox=false] - If true, the checkbox input is not rendered.
 */
import React from "react";
/**
 * A component that wraps media content (children) within a selectable container.
 * It includes a checkbox for selection, manages hover/focus states to show/hide
 * the checkbox (unless `checkboxAlwaysVisible` is true), and applies different
 * border styles based on selection and status. Can optionally act as a button
 * if `onClick` is provided.
 *
 * @component
 * @param {GalleryMediaCheckboxProps} props - The props for the GalleryMediaCheckbox component.
 */
declare const GalleryMediaCheckbox: {
    ({ checkboxAlwaysVisible, any, children: any, data, any, dimension, any, onChange, any, onClick, any, selected, any, status, any, withoutCheckbox, any, }: any): React.ReactElement;
    propTypes: {
        /**  Boolean value to determine to show checkbox on the card all the time. */
        checkboxAlwaysVisible: any;
        /** Node containing the content that will be displayed within the card */
        children: any;
        /** Data for related to card  */
        data: any;
        /** A custom CSS class name to style the dimensions of card. */
        dimension: any;
        /** A callback function triggered on changing checkbox state. */
        onChange: any;
        /** A callback function triggered on click of `GalleryMedia` card.  */
        onClick: any;
        /** Specify if card is selected or not */
        selected: any;
        /** Status of Gallery Media card */
        status: any;
        /** Specify if the card should have a checkbox or not */
        withoutCheckbox: any;
    };
};
export default GalleryMediaCheckbox;
