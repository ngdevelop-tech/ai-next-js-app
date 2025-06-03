/**
 * @typedef {Object} ComboBoxOption
 * @property {string} [image] - Optional URL for an image associated with the option.
 * @property {string} label - The text displayed for the option.
 * @property {string|number} value - The unique value identifying the option.
 */
/**
 * @typedef {Object} ComboBoxProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the Combobox component (e.g., `ComboboxLabel`, `ComboboxTrigger`, `ComboboxContent`).
 * @property {ComboBoxOption | ComboBoxOption[]} [defaultValue] - Default selected value(s) for the combobox. Use this for uncontrolled components where the state is managed internally. Can be a single option object or an array of option objects for multi-select.
 * @property {boolean} [disabled=false] - If true, the component is disabled and interaction is prevented.
 * @property {string} [errorText] - An error message to display below the combobox, indicating a validation error.
 * @property {string} [id] - A unique identifier attribute for the root element of the component.
 * @property {React.ReactNode} [infoText] - Informational text displayed in a tooltip when an info icon (if present via `ComboboxLabel`) is hovered or focused.
 * @property {React.Ref<HTMLInputElement>} [inputRef] - A ref forwarded to the underlying combobox input element.
 * @property {boolean} [isLoading=false] - If true, displays a loading indicator, typically used when fetching options asynchronously.
 * @property {boolean} [isLoadingRight=false] - If true, displays a loading indicator on the right side of the input.
 * @property {boolean} [isMandatory=false] - If true, indicates that the field is required (often visually represented by an asterisk).
 * @property {boolean} [isMulti=false] - If true, allows multiple options to be selected.
 * @property {boolean} [isTag=false] - Internal prop for building TagCombobox. Enables tag-like selection behavior. Do not use directly.
 * @property {string} [loadingText='Loading'] - Text displayed when `isLoading` is true.
 * @property {string} [noOptionsText='No options available'] - Text displayed within the dropdown when there are no options to show.
 * @property {string} [noResultFoundText='No results found'] - Text displayed within the dropdown when filtering yields no matching options.
 * @property {(selectedValue: ComboBoxOption | ComboBoxOption[], lastActionItem?: ComboBoxOption) => void} [onChange] - Callback function invoked when the selected value changes. Receives the new selected value(s). For multi-select, it also receives the specific item that was last added or removed.
 * @property {() => void} [onClearAll] - Callback function invoked when the 'Clear All' button (if present) is clicked. Primarily for controlled multi-select components.
 * @property {(isOpen: boolean) => void} [onOpenChange] - Callback function invoked when the combobox dropdown opens or closes. Receives a boolean indicating the new open state.
 * @property {boolean} [shouldRetainSearchQuery=false] - If true, the search query in the input is not cleared when an option is selected. Useful for controlled components where filtering logic might depend on the persistent query.
 * @property {ComboBoxOption | ComboBoxOption[]} [value] - The currently selected value(s) for the combobox. Use this for controlled components where the state is managed externally. Can be a single option object or an array of option objects for multi-select.
 * @property {'default' | 'minimal'} [variant='default'] - Specifies the visual style variant of the combobox trigger.
 */
import React from "react";
/**
 * Note: Use the ComboboxLabel sub-component, even when the label is not present.
 * Thus, specifying the ariaLabel via ComboboxLabel without any children.
 * &lt;ComboboxLabel ariaLabel="label" />
 */
/**
 * Combobox component allowing users to select one or multiple options from a list,
 * with typeahead filtering and customizable appearance.
 * @type {React.ForwardRefExoticComponent<ComboBoxProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const ComboBox: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */
export default ComboBox;
