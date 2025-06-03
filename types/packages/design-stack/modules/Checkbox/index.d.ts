/**
 * @typedef {Object} CheckboxData
 * @property {string | React.ReactNode} [label] - The content to display as the label for the checkbox. Can be a string or a React node.
 * @property {string} value - A unique value associated with the checkbox, used for identification in forms or event handlers.
 * @property {string | React.ReactNode} [description] - Additional descriptive text displayed below or next to the label. Can be a string or a React node.
 */
/**
 * @typedef {Object} CheckboxProps
 * @property {string} [ariaLabel] - Provides an accessible label for the checkbox, especially useful when no visible label is present.
 * @property {boolean} [border=true] - Determines if the checkbox container should display top and bottom borders. Defaults to true.
 * @property {boolean} [checked] - Controls the checked state of the checkbox. Use this for controlled components, typically with an `onChange` handler. `undefined` means uncontrolled.
 * @property {CheckboxData} [data=null] - An object containing the `label`, `value`, and `description` for the checkbox. If provided, these values are used to render the label and description alongside the checkbox.
 * @property {boolean} [defaultChecked] - Sets the initial checked state of the checkbox for uncontrolled components. `undefined` means initially unchecked.
 * @property {'none' | 'block' | 'inline'} [description='none'] - Controls how the description (from `data.description`) is displayed relative to the label. Possible values are 'none', 'block', 'inline'. Defaults to 'none'.
 * @property {boolean} [disabled=false] - If true, the checkbox will be visually styled as disabled and will not respond to user interactions. Defaults to false.
 * @property {React.ReactNode} [icon=null] - An optional React node (e.g., an icon component) to display before the label text. Defaults to null.
 * @property {string} [id=null] - A unique identifier for the outer container div of the checkbox component. Defaults to null.
 * @property {boolean} [increaseTapArea=false] - If true, wraps the checkbox input within a larger label element to increase the clickable area, useful on touch devices. Only applies when `data` is null. Defaults to false.
 * @property {boolean} [indeterminate=false] - If true, sets the checkbox to an indeterminate visual state. This is a visual state only; the underlying `checked` value is not affected. Defaults to false.
 * @property {boolean} [isCard=false] - If true, applies card-like styling to the checkbox container, often used for selectable card patterns. Defaults to false.
 * @property {boolean} [isFullWidthLabel=false] - If true, allows the label and description container to occupy the full available width. Defaults to false.
 * @property {string} [name='checkbox'] - The name attribute for the checkbox input element. Used for form submission and identification. Defaults to 'checkbox'.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange=null] - Callback function invoked when the checkbox's checked state changes due to user interaction. Receives the standard React change event. Defaults to null.
 * @property {'left' | 'right'} [position='left'] - Determines the position of the checkbox input relative to the label and description. Possible values are 'left', 'right'. Defaults to 'left'.
 * @property {string} [wrapperClassName=''] - Additional CSS class names to apply to the outermost wrapper `div` element. Defaults to an empty string.
 */
import React from "react";
/**
 * Checkbox component renders a standard HTML checkbox input with enhanced styling and features.
 * It supports labels, descriptions, indeterminate states, card styles, and controlled/uncontrolled modes.
 * @type {React.FC<CheckboxProps>}
 */
declare const Checkbox: {
    ({ ariaLabel, any, border, any, checked, any, data, any, defaultChecked, any, description, any, disabled, any, icon, any, id, any, increaseTapArea, any, indeterminate, any, isCard, any, isFullWidthLabel, any, name, any, onChange, any, position, any, wrapperClassName, any, ...props }: any): React.ReactElement;
    propTypes: {
        /** Provides an accessible label for the checkbox, especially useful when no visible label is present. */
        ariaLabel: any;
        /** Determines if the checkbox container should display top and bottom borders. */
        border: any;
        /** Controls the checked state of the checkbox. Use this for controlled components, typically with an `onChange` handler. `undefined` means uncontrolled. */
        checked: any;
        /** An object containing the `label`, `value`, and `description` for the checkbox. */
        data: any;
        /** Sets the initial checked state of the checkbox for uncontrolled components. `undefined` means initially unchecked. */
        defaultChecked: any;
        /** Controls how the description (from `data.description`) is displayed relative to the label. Possible values: 'none', 'block', 'inline'. */
        description: any;
        /** If true, the checkbox will be visually styled as disabled and will not respond to user interactions. */
        disabled: any;
        /** An optional React node (e.g., an icon component) to display before the label text. */
        icon: any;
        /** A unique identifier for the outer container div of the checkbox component. */
        id: any;
        /** If true, wraps the checkbox input within a larger label element to increase the clickable area. Only applies when `data` is null. */
        increaseTapArea: any;
        /** If true, sets the checkbox to an indeterminate visual state. This is a visual state only. */
        indeterminate: any;
        /** If true, applies card-like styling to the checkbox container. */
        isCard: any;
        /** If true, allows the label and description container to occupy the full available width. */
        isFullWidthLabel: any;
        /** The name attribute for the checkbox input element. Used for form submission and identification. */
        name: any;
        /** Callback function invoked when the checkbox's checked state changes. Receives the standard React change event. */
        onChange: any;
        /** Determines the position of the checkbox input relative to the label. Possible values: 'left', 'right'. */
        position: any;
        /** Additional CSS class names to apply to the outermost wrapper `div` element. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-checkbox--checkbox-primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/299126-checkbox/b/4635b4
 * @end
 */
export default Checkbox;
