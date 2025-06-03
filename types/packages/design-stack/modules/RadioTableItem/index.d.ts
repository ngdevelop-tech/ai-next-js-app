/**
 * @typedef {import('../RadioGroup/constant/radioGroup').BORDER_TYPES} BorderType
 */
/**
 * @typedef {Object} RadioTableColumn
 * @property {string} [label] - The primary text content for the column cell.
 * @property {string} [description] - Additional descriptive text for the column cell, usually displayed below or alongside the label.
 */
/**
 * @typedef {Object} RadioTableOption
 * @property {string|number} value - The unique value associated with this radio item, used for form submission and state management.
 * @property {string} label - The primary text label displayed next to the radio input.
 * @property {string} [description] - Additional descriptive text displayed below or alongside the label.
 * @property {RadioTableColumn[]} [columns] - An array of objects defining additional columns to display in the table row, relevant when `singleColumn` is false.
 */
/**
 * Represents a single selectable item within a RadioTableGroup, displayed as a table row.
 * It includes a radio button, a primary label/description, and optional additional data columns.
 *
 * @typedef {Object} RadioTableItemProps
 * @property {BorderType} [borderType=''] - Defines the border style for the table row. Accepts values from `BORDER_TYPES`.
 *   @see BORDER_TYPES
 * @property {boolean} [disabled=false] - If `true`, the radio item is visually disabled and cannot be interacted with or selected.
 * @property {string} [id=null] - An optional unique identifier for the root element of the component.
 * @property {boolean} [inlineDescription=true] - If `true`, the description text is displayed inline with the label. If `false`, it appears on a new line below the label.
 * @property {RadioTableOption} option - The data object representing the radio item. Contains `value`, `label`, `description`, and optional `columns`.
 * @property {boolean} [singleColumn=false] - If `true`, only the primary label and description are displayed, ignoring the `columns` data. If `false`, additional columns defined in the `option.columns` array are rendered.
 * @property {string} [wrapperClassName=''] - An optional CSS class name to apply to the wrapper element of the radio table item for custom styling.
 */
import React from "react";
/**
 * Renders a single row within a RadioTableGroup. It functions as a radio button
 * presented in a table-like format, allowing selection of one option from a list.
 * Each item displays a label, an optional description, and potentially additional data columns.
 *
 * @component
 * @type {React.FC<RadioTableItemProps>}
 *
 * @param {RadioTableItemProps} props - The props for the RadioTableItem component.
 *
 * @example
 * // Example usage within a RadioGroup
 * <RadioGroup defaultValue="option1">
 *   <RadioTableItem
 *     option={{
 *       value: 'option1',
 *       label: 'Option 1 Label',
 *       description: 'Description for option 1.',
 *       columns: [
 *         { label: 'Col 1 Data', description: 'Detail 1' },
 *         { label: 'Col 2 Data' }
 *       ]
 *     }}
 *   />
 *   <RadioTableItem
 *     option={{
 *       value: 'option2',
 *       label: 'Option 2 Label',
 *       description: 'Description for option 2.'
 *     }}
 *     singleColumn={true}
 *     disabled={true}
 *   />
 * </RadioGroup>
 *
 * @see RadioGroup
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/radiobutton/|WAI-ARIA Radio Group Pattern} - For accessibility guidelines.
 *
 * @accessibility
 * - Uses `RadioGroupPrimitive.Item` from Radix UI, which handles ARIA attributes like `role="radio"`, `aria-checked`, and keyboard navigation within the group.
 * - The `disabled` prop correctly sets the `aria-disabled` attribute.
 * - Focus visibility is handled via CSS `group-focus-visible` styles.
 * - Ensure labels and descriptions provide clear context for each option.
 */
declare const RadioTableItem: {
    ({ borderType, any, disabled, any, id, any, inlineDescription, any, option: any, singleColumn, any, wrapperClassName, any, ...props }: any): React.ReactElement;
    propTypes: {
        /** Defines the border style for the table row. Accepts values from `BORDER_TYPES`. */
        borderType: any;
        /** If `true`, the radio item is visually disabled and cannot be interacted with or selected. */
        disabled: any;
        /** An optional unique identifier for the root element of the component. */
        id: any;
        /** If `true`, the description text is displayed inline with the label. If `false`, it appears on a new line below the label. */
        inlineDescription: any;
        /**
         * The data object representing the radio item.
         * - `value`: (Required) Unique value for the item.
         * - `label`: (Required) Primary text label.
         * - `description`: Optional descriptive text.
         * - `columns`: Optional array of objects for additional columns (`{ label?: string, description?: string }`).
         */
        option: any;
        /** If `true`, only the primary label and description are displayed, ignoring the `columns` data. If `false`, additional columns defined in the `option.columns` array are rendered. */
        singleColumn: any;
        /** An optional CSS class name to apply to the wrapper element of the radio table item for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-radiogroup--simple-list
 * @zeroHeight https://zeroheight.com/023d5159d/p/57cc40-radio-groups/b/4635b4
 * @end
 */
export default RadioTableItem;
