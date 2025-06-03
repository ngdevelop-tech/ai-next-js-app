/**
 * Represents the structure of a single option item.
 * @typedef {Object} Option
 * @property {string} [image] - URL of the image to display next to the option label.
 * @property {boolean} [isGroupLabelOption] - Indicates if this option acts as a label for a group.
 * @property {string} label - The primary text label for the option. This is also used as the default alt text for the image if `altText` is not provided.
 * @property {string} [name] - An optional name attribute, often used for form submission context.
 * @property {string|number} value - The unique value associated with the option.
 * @property {React.ReactNode} [visualLabel] - An optional React node to render as the label, overriding the default `label` string visually.
 */
/**
 * Props for the MultiOption component.
 * @typedef {Object} MultiOptionProps
 * @property {boolean} [active=false] - Determines if the option is currently highlighted (e.g., by keyboard navigation).
 * @property {string} [altText=''] - Alternative text for the option's image, defaults to `option.label`.
 * @property {('left'|'right')} [checkPosition='left'] - Specifies the position of the checkmark icon when the option is selected. Defaults to 'left'. See `CHECK_POSITION`.
 * @property {boolean} [imageInvertOnHover=false] - If true, inverts the color of the image when the option is active (hovered).
 * @property {string} [imgWrapperClassName=''] - Custom CSS class name(s) to apply to the image wrapper element.
 * @property {boolean} [isTag] - Internal prop, potentially used to modify styling or behavior if the option is rendered within a tag context.
 * @property {(event: React.SyntheticEvent<HTMLImageElement, Event>) => void} [onImageError] - Callback function triggered if the option image fails to load.
 * @property {Option} option - The data object representing the option to render.
 * @property {boolean} [selected=false] - Determines if the option is currently selected.
 */
import React from "react";
/**
 * Renders a single option item within a multi-select Combobox.
 * It displays the option label, an optional image, and a checkmark if selected.
 * @type {React.FC<MultiOptionProps>}
 */
declare const MultiOption: {
    ({ active, any, selected, any, imageInvertOnHover, any, imgWrapperClassName, any, onImageError, any, option: any, isTag, any, checkPosition, any, altText, any, }: any): React.ReactElement;
    propTypes: {
        /** Determines if a particular option is active */
        active: any;
        /** Alt Text for image */
        altText: any;
        /** Determines the position of the checkbox. */
        checkPosition: any;
        /** Determines whether to invert image on hover. */
        imageInvertOnHover: any;
        /** A custom CSS class name to style the image. */
        imgWrapperClassName: any;
        /** Prop to override the isTag value. */
        isTag: any;
        /** Function callback when there is an error with the image. */
        onImageError: any;
        /** Details of the option to be rendered. */
        option: any;
        /** Determines if the particular option is selected */
        selected: any;
    };
};
export default MultiOption;
