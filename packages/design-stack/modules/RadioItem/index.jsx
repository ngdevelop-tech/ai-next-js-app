/**
 * @typedef {Object} RadioItemOption
 * @property {string} [description] - Optional text displayed below the label to provide additional context. Only shown if `withDescription` is true.
 * @property {string} label - The primary text label displayed next to the radio button. This is required.
 * @property {string|number} value - The unique value associated with this radio item. This value is used when the radio group's state changes. This is required.
 */

/**
 * @typedef {Object} RadioItemProps
 * @property {boolean} [disabled=false] - If `true`, the radio item will be visually styled as disabled and cannot be interacted with or selected.
 * @property {string} [id] - An optional unique identifier for the root `div` element and the underlying `input` element. If not provided, the `option.value` is used as the `id`.
 * @property {boolean} [inlineDescription=false] - If `true` and `withDescription` is also `true`, the description text will be displayed on the same line as the label, rather than below it.
 * @property {RadioItemOption} option - An object containing the core data for the radio item: `value`, `label`, and optionally `description`.
 * @property {boolean} [rightAligned=false] - If `true`, the radio button control will be positioned to the right of the label and description, instead of the default left alignment.
 * @property {boolean} [withDescription=false] - If `true` and the `option` object contains a `description`, it will be displayed. By default, descriptions are hidden.
 * @property {string} [wrapperClassName=''] - An optional CSS class name to apply to the root `div` element wrapping the radio item for custom styling.
 */

import React, { useContext, useMemo } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import PropTypes from "prop-types";

import { RadioGroupContextData } from "../RadioGroup/context";

/**
 * Represents a single selectable option within a RadioGroup.
 * It displays a radio button control alongside a label and an optional description.
 * It should always be used as a child of the `RadioGroup` component.
 *
 * @component
 * @type {React.FC<RadioItemProps>}
 *
 * @param {RadioItemProps} props - The props for the RadioItem component.
 *
 * @example
 * // Basic usage within a RadioGroup
 * <RadioGroup defaultValue="apple">
 *   <RadioItem option={{ label: 'Apple', value: 'apple' }} />
 *   <RadioItem option={{ label: 'Banana', value: 'banana' }} />
 * </RadioGroup>
 *
 * @example
 * // With description
 * <RadioGroup defaultValue="cat">
 *   <RadioItem
 *     option={{ label: 'Cat', value: 'cat', description: 'A small domesticated carnivorous mammal.' }}
 *     withDescription
 *   />
 *   <RadioItem
 *     option={{ label: 'Dog', value: 'dog', description: 'A domesticated descendant of the wolf.' }}
 *     withDescription
 *   />
 * </RadioGroup>
 *
 * @example
 * // Disabled item
 * <RadioGroup defaultValue="one">
 *   <RadioItem option={{ label: 'One', value: 'one' }} />
 *   <RadioItem option={{ label: 'Two', value: 'two' }} disabled />
 * </RadioGroup>
 *
 * @see RadioGroup
 * @see {@link https://www.radix-ui.com/primitives/docs/components/radio-group#item Radix UI Radio Group Item}
 *
 * @accessibility
 * - Associates the `label` with the radio input using `htmlFor`.
 * - Uses `aria-disabled` to indicate disabled state.
 * - Provides an `aria-label` for screen readers based on the `value`.
 * - Manages focus visibility using `focus-visible` styles.
 */
const RadioItem = ({
  disabled = false,
  id = null,
  inlineDescription = false,
  option,
  rightAligned = false,
  withDescription = false,
  wrapperClassName = "",
  ...props
}) => {
  const { value, label, description } = option;
  const { activeOption } = useContext(RadioGroupContextData);
  const checked = useMemo(() => activeOption === value, [activeOption, value]);
  return (
    <div
      className={twClassNames(
        "inline-flex",
        {
          "cursor-not-allowed": disabled,
        },
        wrapperClassName
      )}
      {...(id !== null && { id })}
    >
      <RadioGroupPrimitive.Item
        className={twClassNames(
          "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border bg-input-default hover:bg-input-default-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2",
          {
            "order-last mx-3": rightAligned,
            "border-neutral-stronger": !checked,
            "bg-brand-default hover:bg-brand-default-hover border-transparent":
              checked,
            "bg-input-default-disabled border-neutral-default cursor-not-allowed":
              disabled,
            "bg-brand-default-disabled hover:bg-brand-default-disabled border-transparent":
              checked && disabled,
          }
        )}
        value={value}
        disabled={disabled}
        id={id || value}
        aria-label={`radio with value ${value}`}
        {...props}
      >
        <span
          className={twClassNames("h-1.5 w-1.5 rounded-full bg-input-default", {
            "bg-input-default-disabled": disabled,
          })}
        />
      </RadioGroupPrimitive.Item>
      <div
        className={twClassNames("ml-3 flex gap-1 text-sm", {
          "flex-col": !inlineDescription,
          "flex-1 ml-0": rightAligned,
          "cursor-not-allowed": disabled,
        })}
        aria-disabled={disabled}
      >
        {label && (
          <label
            htmlFor={id || value}
            className={twClassNames("font-medium text-neutral-default", {
              "text-neutral-weakest": disabled,
            })}
          >
            {label}
          </label>
        )}
        {withDescription && description && (
          <p
            id={`${value}-description`}
            className={twClassNames("text-neutral-weaker", {
              "text-neutral-weakest": disabled,
            })}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

RadioItem.propTypes = {
  /** If `true`, the radio item will be visually styled as disabled and cannot be interacted with or selected. */
  disabled: PropTypes.bool,
  /** An optional unique identifier for the root `div` element and the underlying `input` element. If not provided, the `option.value` is used as the `id`. */
  id: PropTypes.string,
  /** If `true` and `withDescription` is also `true`, the description text will be displayed on the same line as the label, rather than below it. */
  inlineDescription: PropTypes.bool,
  /**
   * An object containing the core data for the radio item.
   * @type {RadioItemOption}
   */
  option: PropTypes.shape({
    /** Optional text displayed below the label to provide additional context. Only shown if `withDescription` is true. */
    description: PropTypes.string,
    /** The primary text label displayed next to the radio button. This is required. */
    label: PropTypes.string.isRequired,
    /** The unique value associated with this radio item. This value is used when the radio group's state changes. This is required. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  /** If `true`, the radio button control will be positioned to the right of the label and description, instead of the default left alignment. */
  rightAligned: PropTypes.bool,
  /** If `true` and the `option` object contains a `description`, it will be displayed. By default, descriptions are hidden. */
  withDescription: PropTypes.bool,
  /** An optional CSS class name to apply to the root `div` element wrapping the radio item for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-radiogroup--simple-list
 * @zeroHeight https://zeroheight.com/023d5159d/p/57cc40-radio-groups/b/4635b4
 * @end
 */

export default RadioItem;
