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

import React, { useContext, useMemo } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import PropTypes from "prop-types";

import { RADIO_CARD_STYLES, TYPES } from "../RadioGroup/constant/radioGroup";
import { RadioGroupContextData } from "../RadioGroup/context";

import StackedCard from "./components/StackedCard";

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
const RadioCardItem = ({
  disabled = false,
  id = null,
  option,
  wrapperClassName = "",
  ...props
}) => {
  const {
    value,
    primaryLabel,
    secondaryLabel,
    description,
    secondaryDescription,
  } = option;
  const { activeOption, type, direction } = useContext(RadioGroupContextData);
  const checked = useMemo(() => activeOption === value, [activeOption, value]);

  return (
    <RadioGroupPrimitive.Item
      className={twClassNames(
        "cursor-pointer border bg-input-default hover:bg-input-default-hover focus:outline-none",
        RADIO_CARD_STYLES[type][direction],
        {
          "cursor-not-allowed bg-input-default-disabled text-neutral-inverse-weakest":
            disabled,
          "bg-brand-default border-transparent text-neutral-inverse-default hover:bg-brand-default-hover":
            type === TYPES.SMALL_CARD && checked,
          "bg-brand-default-disabled hover:bg-brand-default-disabled":
            disabled && checked,
          "bg-input-default-disabled hover:bg-input-default-hover border-brand-weak text-neutral-weakest":
            type === TYPES.STACKED_CARD && disabled && checked,
        },
        wrapperClassName
      )}
      value={value}
      disabled={disabled}
      {...props}
      {...(id !== null && { id })}
    >
      {type === TYPES.SMALL_CARD && primaryLabel && (
        <label htmlFor={value} className="cursor-pointer">
          {primaryLabel}
        </label>
      )}
      {type === TYPES.STACKED_CARD && (
        <StackedCard
          disabled={disabled}
          checked={checked}
          description={description}
          direction={direction}
          primaryLabel={primaryLabel}
          secondaryDescription={secondaryDescription}
          secondaryLabel={secondaryLabel}
        />
      )}
    </RadioGroupPrimitive.Item>
  );
};

RadioCardItem.propTypes = {
  /** If `true`, the radio card item is visually disabled and cannot be interacted with or selected. */
  disabled: PropTypes.bool,

  /** An optional unique identifier to apply to the root element of the radio card item. */
  id: PropTypes.string,

  /**
   * An object containing the data for the radio card item.
   * - `value`: (Required) The unique value for this item (string or number).
   * - `primaryLabel`: (Required) The main text label.
   * - `secondaryLabel`: (Optional) Secondary text label (for stacked cards).
   * - `description`: (Optional) Descriptive text below the primary label (for stacked cards).
   * - `secondaryDescription`: (Optional) Secondary descriptive text (for stacked cards).
   */
  option: PropTypes.shape({
    /** The main descriptive text displayed below the primary label, primarily used in stacked cards. */
    description: PropTypes.string,
    /** The main text label displayed on the card. Required. */
    primaryLabel: PropTypes.string.isRequired,
    /** Optional secondary descriptive text, used alongside the secondary label in stacked cards. */
    secondaryDescription: PropTypes.string,
    /** Optional secondary text label, typically used in stacked cards for additional context. */
    secondaryLabel: PropTypes.string,
    /** The unique value associated with this radio item. Used to identify the selection. Required. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,

  /** Optional CSS class name(s) to apply to the wrapper element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-radiogroup--simple-list
 * @zeroHeight https://zeroheight.com/023d5159d/p/57cc40-radio-groups/b/4635b4
 * @end
 */

export default RadioCardItem;
