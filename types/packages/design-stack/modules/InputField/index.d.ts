/**
 * @typedef {Object} InputFieldProps
 * @property {React.ReactNode} [addOnAfter] - Node to render after the input field, outside the border.
 * @property {React.ReactNode} [addOnAfterInline] - Node to render after the input field, inside the border.
 * @property {string} [addOnAfterInlineWrapperClassName] - Custom CSS class for the inline add-on container after the input.
 * @property {React.ReactNode} [addOnBefore] - Node to render before the input field, outside the border.
 * @property {React.ReactNode} [addOnBeforeInline] - Node to render before the input field, inside the border.
 * @property {string} [addOnBeforeInlineWrapperClassName] - Custom CSS class for the inline add-on container before the input.
 * @property {string} [autoComplete='off'] - Specifies whether the browser should attempt to automatically complete the input. See MDN docs for possible values.
 * @property {string} [cornerHintText] - Optional text displayed in the top-right corner, usually for hints like character limits.
 * @property {string|number} [defaultValue] - The initial value of the input field when uncontrolled.
 * @property {string} [description] - Additional descriptive text displayed below the input field.
 * @property {boolean} [disabled=false] - If true, the input field is disabled and cannot be interacted with.
 * @property {string} [errorText] - If provided, displays an error message below the input and styles the input with an error state.
 * @property {string} id - A unique identifier for the input element. Required for accessibility and label association.
 * @property {React.ReactNode} [infoText] - If provided, displays an info icon next to the label with a tooltip containing this text.
 * @property {React.Ref<HTMLInputElement>} [inputRef] - A ref forwarded to the underlying HTML input element.
 * @property {boolean} [isMandatory=false] - If true, adds a red asterisk (*) after the label to indicate a required field.
 * @property {string} [label] - The text label displayed above the input field.
 * @property {function} [onBlur] - Callback function triggered when the input field loses focus.
 * @property {function} [onChange] - Callback function triggered when the value of the input field changes.
 * @property {function} [onFocus] - Callback function triggered when the input field gains focus.
 * @property {function} [onKeyDown] - Callback function triggered when a key is pressed down while the input field is focused.
 * @property {string} [placeholder] - Placeholder text displayed inside the input field when it's empty.
 * @property {boolean} [readonly=false] - If true, the input field's value cannot be edited by the user.
 * @property {string} [role='contentinfo'] - The ARIA role for the input field. (Note: Consider removing if not strictly necessary).
 * @property {string} [type='text'] - The type attribute for the HTML input element (e.g., 'text', 'password', 'email', 'number').
 * @property {string|number} [value] - The controlled value of the input field. Use with `onChange` for controlled components.
 * @property {string} [wrapperClassName] - Additional CSS classes to apply to the main container div wrapping the input and add-ons.
 * @property {object} [props] - Any other props will be spread onto the underlying HTML input element.
 */
import React from "react";
/**
 * @component InputField
 * @description A versatile input component with support for labels, descriptions, error states, hints, icons, and add-ons.
 * It forwards refs to the underlying HTML input element.
 *
 * @type {React.ForwardRefExoticComponent<InputFieldProps & React.RefAttributes<HTMLInputElement>>}
 */
declare const InputField: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-inputfield--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/795ae0-input-field/b/4635b4
 * @end
 */
export default InputField;
