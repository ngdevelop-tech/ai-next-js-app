/**
 * Props for the ComboboxOptionGroup component.
 *
 * @typedef {Object} ComboboxOptionGroupProps
 * @property {React.ReactNode} [addNewItemComponent=null] - Optional React node to display below the options list, typically used for an "Add New Item" action.
 * @property {('start'|'center'|'end')} [alignment='start'] - Controls the alignment of the popover content relative to the trigger element. Corresponds to the `align` prop of `@radix-ui/react-popover`.
 * @property {React.ReactNode | React.ReactNode[]} children - The option items (e.g., `ComboboxOption`) or groups to display within the dropdown.
 * @property {boolean} [hasStickyItem=false] - If true, indicates that the list contains a sticky item (like `addNewItemComponent`), adjusting padding to ensure visibility when scrolling.
 * @property {string} [maxWidth='80vw'] - Sets the maximum width of the dropdown popover. Accepts any valid CSS width value.
 * @property {boolean} [shouldInertElements=false] - If true, makes elements outside the popover inert, improving accessibility by trapping focus and preventing interaction with background elements. Corresponds to the `modal` prop of `@headlessui/react/Combobox.Options`.
 * @property {boolean} [showNoOptionItem=false] - If true, displays a "No options" or "No results found" message when the options list is empty or the search query yields no results.
 * @property {string} [wrapperClassName=''] - An optional CSS class name to apply custom styles to the main wrapper element (`Combobox.Options`).
 */
import React from "react";
/**
 * Renders the dropdown container for Combobox options, handling layout, scrolling,
 * and conditional display of messages like "No options found".
 * It integrates with Headless UI Combobox and Radix UI Popover for functionality.
 *
 * @type {React.FC<ComboboxOptionGroupProps>}
 */
declare const ComboboxOptionGroup: {
    ({ addNewItemComponent, any, alignment, any, children: any, hasStickyItem, any, maxWidth, any, showNoOptionItem, any, wrapperClassName, any, shouldInertElements, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional React node to display below the options list, typically used for an "Add New Item" action. */
        addNewItemComponent: any;
        /** Controls the alignment of the popover content relative to the trigger element. Corresponds to the `align` prop of `@radix-ui/react-popover`. */
        alignment: any;
        /** The option items (e.g., `ComboboxOption`) or groups to display within the dropdown. */
        children: any;
        /** If true, indicates that the list contains a sticky item (like `addNewItemComponent`), adjusting padding to ensure visibility when scrolling. */
        hasStickyItem: any;
        /** Sets the maximum width of the dropdown popover. Accepts any valid CSS width value. */
        maxWidth: any;
        /** If true, makes elements outside the popover inert, improving accessibility by trapping focus and preventing interaction with background elements. Corresponds to the `modal` prop of `@headlessui/react/Combobox.Options`. */
        shouldInertElements: any;
        /** If true, displays a "No options" or "No results found" message when the options list is empty or the search query yields no results. */
        showNoOptionItem: any;
        /** An optional CSS class name to apply custom styles to the main wrapper element (`Combobox.Options`). */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */
export default ComboboxOptionGroup;
