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

import React, { useContext, useMemo } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import PropTypes from "prop-types";

import {
  BORDER_TYPES,
  RADIO_TABLE_BORDER_STYLE,
} from "../RadioGroup/constant/radioGroup";
import { RadioGroupContextData } from "../RadioGroup/context";

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
const RadioTableItem = ({
  borderType = "",
  disabled = false,
  id = null,
  inlineDescription = true,
  option,
  singleColumn = false,
  wrapperClassName = "",
  ...props
}) => {
  const { value, label, description, columns } = option;
  const { activeOption } = useContext(RadioGroupContextData);
  const checked = useMemo(() => activeOption === value, [activeOption, value]);

  return (
    <RadioGroupPrimitive.Item
      className={twClassNames(
        "group relative flex w-full cursor-pointer flex-col border border-neutral-default bg-neutral-default p-4 hover:bg-neutral-default-hover focus:outline-none md:pl-4 md:pr-6",
        RADIO_TABLE_BORDER_STYLE[borderType],
        {
          "bg-brand-weakest border-brand-weaker": checked,
          "md:grid md:grid-cols-3": !singleColumn,
          "cursor-not-allowed bg-neutral-default-disabled": disabled,
        },
        wrapperClassName
      )}
      value={value}
      disabled={disabled}
      {...props}
      {...(id !== null && { id })}
    >
      <span className={twClassNames("flex text-sm")}>
        <span
          className={twClassNames(
            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-neutral-stronger bg-input-default hover:bg-input-default-hover group-focus-visible:ring-2 group-focus-visible:ring-brand-strong group-focus-visible:ring-offset-2",
            {
              "bg-brand-default hover:bg-brand-default-hover border-transparent":
                checked,
              "bg-input-default-disabled border-neutral-default": disabled,
              "bg-brand-default-disabled border-transparent":
                checked && disabled,
            }
          )}
          aria-hidden="true"
        >
          <span
            className={twClassNames(
              "h-1.5 w-1.5 rounded-full bg-input-default",
              {
                "bg-input-default-disabled": disabled,
              }
            )}
          />
        </span>

        <div
          className={twClassNames("flex text-left", {
            "flex-col items-baseline": !inlineDescription,
          })}
        >
          <span
            className={twClassNames(
              "ml-3 block text-sm font-medium text-neutral-default",
              {
                "text-brand-strongest": checked,
                "text-neutral-weakest": disabled,
              }
            )}
          >
            {label}
          </span>
          <span
            className={twClassNames("ml-3 block text-sm text-neutral-weaker", {
              "text-brand-strong": checked,
              "text-neutral-weakest": disabled,
            })}
          >
            {description}
          </span>
        </div>
      </span>
      {!singleColumn &&
        columns.map((column, i) => (
          <span
            className={twClassNames(
              "ml-6 pl-1 text-sm sm:text-left md:ml-0 md:pl-0 md:text-center",
              { "md:text-right": i === columns.length - 1 }
            )}
          >
            {column.label && (
              <span
                className={twClassNames("font-medium text-neutral-default", {
                  "text-brand-strongest": checked,
                  "text-neutral-weakest": disabled,
                })}
              >
                {column.label}
              </span>
            )}
            {column.description && (
              <span
                className={twClassNames("text-neutral-weaker", {
                  "text-brand-strong": checked,
                  "text-neutral-weakest": disabled,
                })}
              >
                {column.description}
              </span>
            )}
          </span>
        ))}
    </RadioGroupPrimitive.Item>
  );
};

RadioTableItem.propTypes = {
  /** Defines the border style for the table row. Accepts values from `BORDER_TYPES`. */
  borderType: PropTypes.oneOf(Object.values(BORDER_TYPES)),
  /** If `true`, the radio item is visually disabled and cannot be interacted with or selected. */
  disabled: PropTypes.bool,
  /** An optional unique identifier for the root element of the component. */
  id: PropTypes.string,
  /** If `true`, the description text is displayed inline with the label. If `false`, it appears on a new line below the label. */
  inlineDescription: PropTypes.bool,
  /**
   * The data object representing the radio item.
   * - `value`: (Required) Unique value for the item.
   * - `label`: (Required) Primary text label.
   * - `description`: Optional descriptive text.
   * - `columns`: Optional array of objects for additional columns (`{ label?: string, description?: string }`).
   */
  option: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        label: PropTypes.string,
      })
    ),
    description: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  /** If `true`, only the primary label and description are displayed, ignoring the `columns` data. If `false`, additional columns defined in the `option.columns` array are rendered. */
  singleColumn: PropTypes.bool,
  /** An optional CSS class name to apply to the wrapper element of the radio table item for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-radiogroup--simple-list
 * @zeroHeight https://zeroheight.com/023d5159d/p/57cc40-radio-groups/b/4635b4
 * @end
 */

export default RadioTableItem;
