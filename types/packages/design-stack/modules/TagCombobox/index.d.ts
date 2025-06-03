/**
 * Represents a single option item within the ComboboxTag.
 * @typedef {Object} ComboboxTagOption
 * @property {string} label - The text label displayed for the option. This is also used for filtering.
 * @property {string|number} value - The unique value associated with the option.
 * @property {string} [image] - URL of an image to display next to the option label.
 * @property {boolean} [disabled] - If true, the option cannot be selected.
 * @property {boolean} [hasDismissButton] - If true, displays a dismiss button on the tag (relevant for selected items).
 * @property {boolean} [isError] - If true, styles the tag to indicate an error state (relevant for selected items).
 * @property {string} [modifier] - Additional CSS class modifier for the tag (relevant for selected items).
 * @property {React.ReactNode} [visualLabel] - Custom React node to render as the label, overriding the default text label rendering.
 */
/**
 * Props for the ComboboxTag component.
 * @typedef {Object} ComboboxTagProps
 * @property {React.ElementType} [MenuContainer=ComboboxOptionGroup] - Component used to render the dropdown menu container. Defaults to `ComboboxOptionGroup`.
 * @property {React.ReactNode} addNewItemComponent - Component to display at the bottom of the dropdown when the current query doesn't exactly match any existing option, allowing users to add a new item.
 * @property {React.ReactNode} [children] - Additional custom content to be rendered inside the dropdown menu, below the options and potentially the `addNewItemComponent`.
 * @property {object} [comboboxItemProps] - Props passed down to each `ComboboxOptionItem` component within the dropdown.
 * @property {string} [comboboxItemProps.wrapperClassName] - Additional CSS classes for the wrapper of each `ComboboxOptionItem`.
 * @property {object} [comboboxOptionGroupProps] - Props passed down to the `MenuContainer` component (typically `ComboboxOptionGroup`).
 * @property {boolean} [comboboxOptionGroupProps.hasStickyItem] - If true, indicates the group might have sticky items (relevant for styling/layout).
 * @property {string} [comboboxOptionGroupProps.wrapperClassName] - Additional CSS classes for the wrapper of the `MenuContainer`.
 * @property {object} [comboboxProps] - Props passed down to the underlying `Combobox` component.
 * @property {(optionA: ComboboxTagOption, optionB: ComboboxTagOption) => number} [comparator] - Custom comparison function for sorting or determining equality between options. Used for filtering and managing selections.
 * @property {number} [debounceThreeshold=0] - Debounce time in milliseconds for the input change handler. Useful for performance optimization with frequent input changes.
 * @property {Array<ComboboxTagOption>|ComboboxTagOption} [defaultValue] - The initial selected value(s) for an uncontrolled component.
 * @property {(value: ComboboxTagOption) => void} [deleteOnBackspace] - Callback function invoked when the backspace key is pressed in an empty input field, typically used to remove the last selected tag. Receives the tag to be potentially deleted.
 * @property {string} [id] - Unique HTML ID attribute for the root element of the component.
 * @property {string} [infoText] - Text displayed in a tooltip when hovering over an info icon (if applicable, depends on underlying Combobox implementation).
 * @property {boolean} [isMandatory=false] - If true, indicates the field is required, often visually marked (e.g., with an asterisk).
 * @property {React.ReactNode} [label] - Label text or node displayed above the combobox input.
 * @property {string} [noOptionsText='No options available'] - Text displayed in the dropdown when the `options` array is empty or filtering results in no matches initially.
 * @property {string} [noResultText='No results found'] - Text displayed in the dropdown when the user's input query matches no available options.
 * @property {function(selectedOptions: Array<ComboboxTagOption>): void} [onChange] - Callback function invoked when the selected value(s) change. Receives the new array of selected options. Required for controlled components.
 * @property {function(): void} [onClearAll] - Callback function invoked when the "Clear All" action is triggered (if available).
 * @property {function(inputValue: string): void} [onInputChange] - Callback function invoked when the text input value changes. Receives the current input string.
 * @property {function(currentQuery: string): void} [onOptionGroupClose] - Callback function invoked when the dropdown menu closes. Receives the input query value at the time of closing.
 * @property {function(): void} [onOptionGroupOpen] - Callback function invoked when the dropdown menu opens.
 * @property {function(optionToRemove: ComboboxTagOption): void} [onTagCrossClick] - Callback function invoked when the dismiss ('x') button on a selected tag is clicked. Receives the option corresponding to the tag.
 * @property {Array<ComboboxTagOption>} [options=[]] - Array of available options to display in the dropdown.
 * @property {string} [placeholder='Placeholder'] - Placeholder text displayed in the input field when it's empty and not focused.
 * @property {React.Ref<HTMLButtonElement | HTMLInputElement>} [triggerRef] - Ref object or callback ref to attach to the trigger element (the input/button that opens the dropdown).
 * @property {boolean} [useVirtualisation=true] - If true, uses `react-virtuoso` to render the dropdown list, improving performance for large lists.
 * @property {Array<ComboboxTagOption>|ComboboxTagOption} [value] - The currently selected value(s). Required for controlled components. Must be updated via `onChange`.
 * @property {object} [virtuosoProps] - Props passed down to the `Virtuoso` component when `useVirtualisation` is true.
 * @property {number} [virtuosoProps.fixedItemHeight] - Specifies a fixed height for each item, required for certain `Virtuoso` optimizations. See `react-virtuoso` documentation.
 */
import React from "react";
/**
 * A multi-select combobox component that displays selected options as tags within the input area.
 * It supports searching, selecting from a list, adding new items (optional), and virtualization for long lists.
 * Can be used as a controlled or uncontrolled component.
 *
 * @component
 * @example
 * const options = [
 *   { label: 'Apple', value: 'apple' },
 *   { label: 'Banana', value: 'banana' },
 *   { label: 'Orange', value: 'orange' },
 * ];
 *
 * // Uncontrolled example
 * <ComboboxTag
 *   label="Fruits"
 *   options={options}
 *   defaultValue={[options[0]]}
 *   addNewItemComponent={<ComboboxOptionItem option={{ label: 'Add new fruit...', value: 'add_new' }} />}
 *   placeholder="Select or add fruits"
 * />
 *
 * @example
 * // Controlled example
 * const [selectedFruits, setSelectedFruits] = useState([options[1]]);
 * <ComboboxTag
 *   label="Fruits"
 *   options={options}
 *   value={selectedFruits}
 *   onChange={setSelectedFruits}
 *   addNewItemComponent={<ComboboxOptionItem option={{ label: 'Add new fruit...', value: 'add_new' }} />}
 *   placeholder="Select or add fruits"
 * />
 *
 * @see Combobox
 * @see ComboboxTagTrigger
 * @see ComboboxOptionItem
 * @see ComboboxOptionGroup
 * @see https://zeroheight.com/023d5159d/p/9218f2-multi-select-combo-box-with-badge/b/4635b4
 *
 * @type {React.FC<ComboboxTagProps>}
 */
declare const ComboboxTag: {
    ({ addNewItemComponent: any, comboboxProps, any, comboboxItemProps, any, comboboxOptionGroupProps, any, comparator, any, debounceThreeshold, any, id, any, isMandatory, any, infoText, any, label, any, defaultValue, any, MenuContainer, any, noResultText, any, noOptionsText, any, options, any, onInputChange, any, value, any, onChange, any, onTagCrossClick, any, deleteOnBackspace, any, onClearAll, any, placeholder, any, onOptionGroupClose, any, onOptionGroupOpen, any, virtuosoProps, any, useVirtualisation, any, triggerRef, any, children, any, }: any): React.ReactElement;
    propTypes: {
        /** Component used to render the dropdown menu container. */
        MenuContainer: any;
        /** Component to display for adding a new item when the query doesn't match existing options. */
        addNewItemComponent: any;
        /** Additional content rendered inside the dropdown menu. */
        children: any;
        /** Props passed down to each `ComboboxOptionItem`. */
        comboboxItemProps: any;
        /** Props passed down to the `MenuContainer` component. */
        comboboxOptionGroupProps: any;
        /** Props passed down to the underlying `Combobox` component. */
        comboboxProps: any;
        /** Custom comparison function for options. */
        comparator: any;
        /** Debounce time in ms for input changes. */
        debounceThreeshold: any;
        /** Initial selected value(s) for uncontrolled mode. */
        defaultValue: any;
        /** Callback when backspace is pressed in an empty input. */
        deleteOnBackspace: any;
        /** Unique HTML ID attribute for the root element. */
        id: any;
        /** Info text to be passed to show in the tooltip body if the info icon is present. */
        infoText: any;
        /** Prop to mark the component field as required or not. */
        isMandatory: any;
        label: any;
        noOptionsText: any;
        noResultText: any;
        /** Callback function invoked when the selection changes (controlled mode). `(selectedOptions: Array<ComboboxTagOption>) => void` */
        onChange: any;
        /** Callback function invoked when the "Clear All" action is triggered. `() => void` */
        onClearAll: any;
        /** Callback function invoked when the text input value changes. `(inputValue: string) => void` */
        onInputChange: any;
        /** Callback invoked when the dropdown menu closes. `(currentQuery: string) => void` */
        onOptionGroupClose: any;
        /** Callback invoked when the dropdown menu opens. `() => void` */
        onOptionGroupOpen: any;
        /** Callback invoked when a tag's dismiss button is clicked. `(optionToRemove: ComboboxTagOption) => void` */
        onTagCrossClick: any;
        /** Array of available options. */
        options: any;
        /** Placeholder text for the input field. */
        placeholder: any;
        showNoResult: any;
        triggerRef: any;
        /** Enable/disable list virtualization. */
        useVirtualisation: any;
        /** Currently selected value(s) (controlled mode). */
        value: any;
        virtuosoProps: any;
    };
    displayName: string;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-comboboxtag--controlled-tag-combobox
 * @zeroHeight https://zeroheight.com/023d5159d/p/9218f2-multi-select-combo-box-with-badge/b/4635b4
 * @end
 */
export default ComboboxTag;
