/**
 * @typedef {'block' | 'inline'} RadioGroupDirection - Defines the layout direction of the radio items.
 *   - `block`: Items are stacked vertically.
 *   - `inline`: Items are placed horizontally.
 */

/**
 * @typedef {'default' | 'small-card' | 'large-card'} RadioGroupType - Defines the visual style variant of the radio items.
 *   - `default`: Standard radio button style.
 *   - `small-card`: Radio items styled as small cards.
 *   - `large-card`: Radio items styled as large cards.
 */

/**
 * @typedef {Object} RadioGroupProps
 * @property {React.ReactNode} [children] - The `RadioItem` components to be rendered within the group.
 * @property {string} [columnWrapperClassName] - Custom CSS class name applied to the wrapper element containing the `RadioItem` components. Useful for custom styling, especially grid layouts.
 * @property {string | number} [defaultValue] - The value of the `RadioItem` that should be checked initially when the component mounts. Use this for uncontrolled components where the state is managed internally.
 * @property {string} [description] - A descriptive text displayed below the label to provide additional context or instructions for the radio group.
 * @property {RadioGroupDirection} [direction='block'] - Controls the layout direction of the `RadioItem` components within the group. See `RadioGroupDirection`.
 * @property {string} [errorText] - If provided, displays an error message below the radio group, indicating a validation error. Also associates the error message with the group using `aria-describedby`.
 * @property {string} id - A unique identifier for the radio group. This ID is used for associating the label and error messages with the input elements for accessibility. **Required**.
 * @property {boolean} [isMandatory=false] - If `true`, adds a visual indicator (usually an asterisk) to the label, signifying that selecting an option is required. Note: This is a visual cue only and does not enforce validation.
 * @property {string} [label] - The main label text for the radio group. It is associated with the group using `htmlFor` and `id`.
 * @property {(value: string | number) => void} [onChange] - Callback function invoked when the selected radio item changes. Receives the `value` of the newly selected `RadioItem`. Required for controlled components.
 * @property {RadioGroupType} [type='default'] - Controls the visual variant of the `RadioItem` components within the group. See `RadioGroupType`.
 * @property {string | number} [value] - The currently selected value for controlled components. The state must be managed externally and updated via the `onChange` handler. `defaultValue` is ignored if `value` is provided.
 * @property {string} [wrapperClassName] - Custom CSS class name applied to the outermost `div` element of the `RadioGroup` component.
 */

import React, { useState } from "react";
import { MdError } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import PropTypes from "prop-types";

import { DIRECTIONS, RADIO_WRAPPER_STYLES, TYPES } from "./constant/radioGroup";
import { RadioGroupContextData } from "./context";

/**
 * RadioGroup component provides a way to group multiple RadioItem components,
 * allowing users to select only one option from a set. It supports different layouts,
 * styles, and accessibility features.
 *
 * It can be used as a controlled component by managing the `value` prop and `onChange` callback,
 * or as an uncontrolled component using the `defaultValue` prop.
 *
 * @component
 * @type {React.FC<RadioGroupProps>}
 *
 * @example
 * // Uncontrolled RadioGroup
 * <RadioGroup id="color-options" label="Choose a color" defaultValue="red">
 *   <RadioItem value="red" label="Red" />
 *   <RadioItem value="blue" label="Blue" />
 * </RadioGroup>
 *
 * @example
 * // Controlled RadioGroup with error
 * const [selectedValue, setSelectedValue] = useState('option1');
 * <RadioGroup
 *   id="settings"
 *   label="Select Setting"
 *   value={selectedValue}
 *   onChange={setSelectedValue}
 *   errorText={!selectedValue ? "Please select an option" : ""}
 *   isMandatory
 * >
 *   <RadioItem value="option1" label="Option 1" />
 *   <RadioItem value="option2" label="Option 2" description="This is option 2" />
 * </RadioGroup>
 *
 * @see RadioItem
 * @accessibility
 * - Uses `role="radiogroup"` on the root element.
 * - Associates the `label` with the group using `aria-labelledby`.
 * - If `errorText` is provided, it's linked using `aria-describedby`.
 * - Manages focus navigation between `RadioItem` components using arrow keys as per WAI-ARIA practices.
 */
const RadioGroup = ({
  children = null,
  columnWrapperClassName = "",
  defaultValue = undefined,
  description = "",
  direction = DIRECTIONS.BLOCK,
  errorText = "",
  id,
  isMandatory = false,
  label = "",
  onChange = null,
  type = TYPES.DEFAULT,
  value = undefined,
  wrapperClassName = "",
  ...props
}) => {
  const [activeOption, setActiveOption] = useState(defaultValue);
  const onValueChange = option => {
    onChange?.(option);
    if (!value) setActiveOption(option);
  };
  return (
    <RadioGroupContextData.Provider
      value={{ activeOption: value || activeOption, type, direction }}
    >
      <div className={wrapperClassName}>
        {label ? (
          <label
            htmlFor={id}
            id={`${id}label-wrap`}
            className={twClassNames(
              "block text-base font-medium text-neutral-weak",
              {
                "mb-4": !description.length,
                "text-sm mb-2": type === TYPES.SMALL_CARD,
              }
            )}
          >
            {label}
            {isMandatory && (
              <span className="ml-0.5 text-danger-default">*</span>
            )}
          </label>
        ) : (
          <span className="sr-only">Radio group label</span>
        )}
        {description && (
          <p className={twClassNames("mb-4 text-sm text-neutral-weaker")}>
            {description}
          </p>
        )}
        <RadioGroupPrimitive.Root
          id={id}
          name={id}
          aria-label={`id-${id}`}
          value={value ?? undefined}
          defaultValue={defaultValue ?? undefined}
          onValueChange={onValueChange}
          className={twClassNames(
            RADIO_WRAPPER_STYLES[type][direction],
            columnWrapperClassName
          )}
          {...props}
        >
          {children}
        </RadioGroupPrimitive.Root>
        {errorText && (
          <div className="mt-4 flex items-center gap-1 pr-3">
            <MdError
              className="-ml-0.5 h-5 w-5 icon-danger-weak"
              aria-hidden="true"
            />

            <p
              className="text-sm text-danger-default"
              id={`${id}errorText-wrap`}
            >
              {errorText}
            </p>
          </div>
        )}
      </div>
    </RadioGroupContextData.Provider>
  );
};

RadioGroup.propTypes = {
  /** The `RadioItem` components to be rendered within the group. */
  children: PropTypes.node,
  /** Custom CSS class name applied to the wrapper element containing the `RadioItem` components. */
  columnWrapperClassName: PropTypes.string,
  /** The value of the `RadioItem` that should be checked initially (uncontrolled). */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional descriptive text displayed below the label. */
  description: PropTypes.string,
  /** Controls the layout direction (`block` or `inline`) of the `RadioItem` components. */
  direction: PropTypes.oneOf(Object.values(DIRECTIONS)),
  /** Displays an error message below the group and associates it for accessibility. */
  errorText: PropTypes.string,
  /** A unique identifier for the radio group. **Required**. */
  id: PropTypes.string.isRequired,
  /** If `true`, adds a visual indicator (*) to the label signifying the field is required. */
  isMandatory: PropTypes.bool,
  /** The main label text for the radio group. */
  label: PropTypes.string,
  /** Callback function invoked when the selection changes. Receives the new value. Required for controlled components. */
  onChange: PropTypes.func,
  /** Controls the visual variant (`default`, `small-card`, `large-card`) of the `RadioItem` components. */
  type: PropTypes.oneOf(Object.values(TYPES)),
  /** The currently selected value (controlled). Must be used with `onChange`. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Custom CSS class name applied to the outermost `div` element. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-radiogroup--simple-list
 * @zeroHeight https://zeroheight.com/023d5159d/p/57cc40-radio-groups/b/4635b4
 * @end
 */

export default RadioGroup;
