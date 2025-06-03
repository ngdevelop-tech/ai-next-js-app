/**
 * Represents a single selectable item within a RadioGroup, visually styled as a card.
 * It can be rendered as either a small card or a stacked card based on the `type` prop of the parent `RadioGroup`.
 * This component integrates with `@radix-ui/react-radio-group` for accessibility and state management.
 *
 * @component
 * @example
 * const options = [
 *   { value: 'option1', primaryLabel: 'Option 1', description: 'Description for option 1' },
 *   { value: 'option2', primaryLabel: 'Option 2', secondaryLabel: 'Details', secondaryDescription: 'More details' }
 * ];
 *
 * <RadioGroup type="stacked" defaultValue="option1">
 *   {options.map(option => (
 *     <RadioCardItem key={option.value} option={option} />
 *   ))}
 * </RadioGroup>
 *
 * @param {RadioCardItemProps} props - The props for the RadioCardItem component.
 * @returns {React.ReactElement} The rendered RadioCardItem component.
 *
 * @typedef {Object} RadioCardItemProps
 * @property {boolean} [disabled=false] - If `true`, the radio card item is visually disabled and cannot be interacted with or selected. Inherits from parent `RadioGroup` if set there.
 * @property {string} [id=null] - An optional unique identifier to apply to the root element of the radio card item.
 * @property {object} option - An object containing the data for the radio card item.
 * @property {string | number} option.value - The unique value associated with this radio item. This value is used to identify the selected item in the parent `RadioGroup`.
 * @property {string} option.primaryLabel - The main text label displayed on the card.
 * @property {string} [option.secondaryLabel] - Optional secondary text label, typically used in stacked cards for additional context.
 * @property {string} [option.description] - Optional descriptive text displayed below the primary label, primarily used in stacked cards.
 * @property {string} [option.secondaryDescription] - Optional secondary descriptive text, used alongside the secondary label in stacked cards.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the wrapper element for custom styling.
 * @property {any} [value] - (This seems redundant with option.value and likely managed by Radix) The value associated with the radio item.
 */
import React from "react";
/**
 * Internal component rendering either a small or stacked card based on context.
 * It receives props from the main RadioCardItem and context from RadioGroupContextData.
 * Handles rendering logic based on `type` and `checked` state.
 * Ensures accessibility attributes are correctly applied via `RadioGroupPrimitive.Item`.
 *
 * @type {React.FC<RadioCardItemProps>}
 * @see RadioGroup For usage within a group.
 * @see {@link https://www.radix-ui.com/primitives/docs/components/radio-group#item | Radix UI Radio Group Item} For underlying primitive details.
 * @accessibility
 * - Uses `RadioGroupPrimitive.Item` which handles ARIA attributes like `role="radio"`, `aria-checked`, and `tabindex`.
 * - `disabled` prop correctly sets `aria-disabled="true"` and prevents interaction.
 * - Labels are associated implicitly or explicitly depending on the card type.
 */
declare const RadioCardItem: {
    ({ disabled, any, id, any, option: any, wrapperClassName, any, ...props }: any): React.ReactElement;
    propTypes: {
        /** If `true`, the radio card item is visually disabled and cannot be interacted with or selected. */
        disabled: any;
        /** An optional unique identifier to apply to the root element of the radio card item. */
        id: any;
        /**
         * An object containing the data for the radio card item.
         * - `value`: (Required) The unique value for this item (string or number).
         * - `primaryLabel`: (Required) The main text label.
         * - `secondaryLabel`: (Optional) Secondary text label (for stacked cards).
         * - `description`: (Optional) Descriptive text below the primary label (for stacked cards).
         * - `secondaryDescription`: (Optional) Secondary descriptive text (for stacked cards).
         */
        option: any;
        /** Optional CSS class name(s) to apply to the wrapper element for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-radiogroup--simple-list
 * @zeroHeight https://zeroheight.com/023d5159d/p/57cc40-radio-groups/b/4635b4
 * @end
 */
export default RadioCardItem;
