/**
 * @typedef {Object} SelectMenuValueItem
 * @property {string} [image] - Optional URL for an image associated with the item.
 * @property {string} label - The display text for the item.
 * @property {string|number} value - The unique value identifier for the item.
 */
/**
 * @typedef {Object} SelectMenuProps
 * @property {React.ReactNode} children - Components like `SelectMenu.Trigger`, `SelectMenu.Options`, `SelectMenu.Option`, etc., defining the structure and content.
 * @property {SelectMenuValueItem | SelectMenuValueItem[]} [defaultValue] - The initially selected value(s) for uncontrolled usage. The component manages its state internally. Not updated on re-render if provided.
 * @property {boolean} [disabled=false] - If true, the select menu interaction is disabled.
 * @property {string} [errorText] - Text displayed below the component to indicate an error state.
 * @property {React.ReactNode} [infoText] - Content displayed in a tooltip when an info icon (if present within `SelectMenu.Trigger`) is hovered or focused.
 * @property {boolean} [isMandatory=false] - If true, indicates that selecting a value is required (visual indicator only).
 * @property {boolean} [isMulti=false] - If true, allows multiple options to be selected.
 * @property {(value: SelectMenuValueItem | SelectMenuValueItem[] | null) => void} [onChange] - Callback function invoked when the selected value changes. Receives the new value(s) or null.
 * @property {(open: boolean) => void} [onOpenChange] - Callback function invoked when the dropdown menu's open state changes.
 * @property {SelectMenuValueItem | SelectMenuValueItem[]} [value] - The currently selected value(s) for controlled usage. The component's state is managed externally. Must be updated via `onChange` for changes to reflect.
 * @property {'default' | 'minimal'} [variant='default'] - The visual style variant of the select menu trigger.
 */
import React from "react";
/**
 * SelectMenu provides a customizable dropdown selection component, supporting single and multiple selections,
 * controlled and uncontrolled states, and various visual variants. It leverages Headless UI's Listbox
 * and Radix UI's Popover for robust functionality and accessibility.
 *
 * @example
 * ```jsx
 * const options = [
 *   { label: 'Option 1', value: '1' },
 *   { label: 'Option 2', value: '2' },
 * ];
 *
 * function MySelectMenu() {
 *   const [selectedValue, setSelectedValue] = useState(options[0]);
 *
 *   return (
 *     <SelectMenu value={selectedValue} onChange={setSelectedValue}>
 *       <SelectMenu.Trigger placeholder="Select an option" />
 *       <SelectMenu.Options>
 *         {options.map(option => (
 *           <SelectMenu.Option key={option.value} value={option}>
 *             {option.label}
 *           </SelectMenu.Option>
 *         ))}
 *       </SelectMenu.Options>
 *     </SelectMenu>
 *   );
 * }
 * ```
 *
 * @accessibility
 * Built on top of Headless UI Listbox and Radix UI Popover, ensuring WAI-ARIA patterns are followed for keyboard navigation and screen reader support.
 * Ensure `SelectMenu.Trigger` has appropriate labeling (e.g., `aria-label` or visible label association) if not using a placeholder.
 *
 * @type {React.FC<SelectMenuProps>}
 */
declare const SelectMenu: {
    ({ children: any, defaultValue: any, disabled: any, errorText: any, infoText: any, isMandatory: any, isMulti: any, onChange: any, onOpenChange: any, value: any, variant: any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the select list box of the selectMenu component */
        children: any;
        /** Default selected values for the selectMenu, and the value state will be controlled internally, means values doesnt get updated on re-render */
        defaultValue: any;
        /** The component is disabled if the passed value is true */
        disabled: any;
        /** The error message to be displayed */
        errorText: any;
        /** Info text to be passed to show in the tooltip body if the info icon is present. */
        infoText: any;
        /** Mention if the component is required or not */
        isMandatory: any;
        /** Multiple select enable or not */
        isMulti: any;
        /** Callback function when selectMenu value is changed */
        onChange: any;
        /** Callback function when selectMenu options open/close */
        onOpenChange: any;
        /** Default selected values for the selectMenu, and the value state will be controlled externally */
        value: any;
        /** Specifies type of variant of combobox trigger */
        variant: any;
    };
    defaultProps: {
        defaultValue: any;
        disabled: boolean;
        errorText: string;
        infoText: any;
        isMandatory: boolean;
        isMulti: boolean;
        onChange: any;
        onOpenChange: any;
        value: any;
        variant: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */
export default SelectMenu;
