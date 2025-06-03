/**
 * @typedef {Object} CheckboxData
 * @property {string | React.ReactNode} [label] - The content to display as the label for the checkbox. Can be a string or a React node.
 * @property {string} value - A unique value associated with the checkbox, used for identification in forms or event handlers.
 * @property {string | React.ReactNode} [description] - Additional descriptive text displayed below or next to the label. Can be a string or a React node.
 */

/**
 * @typedef {Object} CheckboxProps
 * @property {string} [ariaLabel] - Provides an accessible label for the checkbox, especially useful when no visible label is present.
 * @property {boolean} [border=true] - Determines if the checkbox container should display top and bottom borders. Defaults to true.
 * @property {boolean} [checked] - Controls the checked state of the checkbox. Use this for controlled components, typically with an `onChange` handler. `undefined` means uncontrolled.
 * @property {CheckboxData} [data=null] - An object containing the `label`, `value`, and `description` for the checkbox. If provided, these values are used to render the label and description alongside the checkbox.
 * @property {boolean} [defaultChecked] - Sets the initial checked state of the checkbox for uncontrolled components. `undefined` means initially unchecked.
 * @property {'none' | 'block' | 'inline'} [description='none'] - Controls how the description (from `data.description`) is displayed relative to the label. Possible values are 'none', 'block', 'inline'. Defaults to 'none'.
 * @property {boolean} [disabled=false] - If true, the checkbox will be visually styled as disabled and will not respond to user interactions. Defaults to false.
 * @property {React.ReactNode} [icon=null] - An optional React node (e.g., an icon component) to display before the label text. Defaults to null.
 * @property {string} [id=null] - A unique identifier for the outer container div of the checkbox component. Defaults to null.
 * @property {boolean} [increaseTapArea=false] - If true, wraps the checkbox input within a larger label element to increase the clickable area, useful on touch devices. Only applies when `data` is null. Defaults to false.
 * @property {boolean} [indeterminate=false] - If true, sets the checkbox to an indeterminate visual state. This is a visual state only; the underlying `checked` value is not affected. Defaults to false.
 * @property {boolean} [isCard=false] - If true, applies card-like styling to the checkbox container, often used for selectable card patterns. Defaults to false.
 * @property {boolean} [isFullWidthLabel=false] - If true, allows the label and description container to occupy the full available width. Defaults to false.
 * @property {string} [name='checkbox'] - The name attribute for the checkbox input element. Used for form submission and identification. Defaults to 'checkbox'.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange=null] - Callback function invoked when the checkbox's checked state changes due to user interaction. Receives the standard React change event. Defaults to null.
 * @property {'left' | 'right'} [position='left'] - Determines the position of the checkbox input relative to the label and description. Possible values are 'left', 'right'. Defaults to 'left'.
 * @property {string} [wrapperClassName=''] - Additional CSS class names to apply to the outermost wrapper `div` element. Defaults to an empty string.
 */

import React, { useLayoutEffect, useRef } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  CHECKBOX_DESCRIPTION_VARIANT,
  CHECKBOX_POSITION_VARIANT,
} from "./constants/checkbox";

/**
 * Checkbox component renders a standard HTML checkbox input with enhanced styling and features.
 * It supports labels, descriptions, indeterminate states, card styles, and controlled/uncontrolled modes.
 * @type {React.FC<CheckboxProps>}
 */
const Checkbox = ({
  ariaLabel = "",
  border = true,
  checked = undefined,
  data = null,
  defaultChecked = undefined,
  description = CHECKBOX_DESCRIPTION_VARIANT.NONE,
  disabled = false,
  icon = null,
  id = null,
  increaseTapArea = false,
  indeterminate = false,
  isCard = false,
  isFullWidthLabel = false,
  name = "checkbox",
  onChange = null,
  position = CHECKBOX_POSITION_VARIANT.LEFT,
  wrapperClassName = "",
  ...props
}) => {
  const ref = useRef();

  useLayoutEffect(() => {
    if (ref) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const handleChange = event => {
    if (disabled) return;
    if (onChange) onChange(event);
  };

  const inputCheckbox = () => (
    <input
      ref={ref}
      id={`${name}${data?.value || ""}`}
      name={`${name}${data?.value || ""}`}
      type="checkbox"
      className={twClassNames(
        "h-4 w-4 rounded border-neutral-stronger bg-input-default checked:bg-brand-default hover:bg-input-default-hover checked:hover:bg-brand-default-hover focus:ring-brand-default checked:focus:bg-brand-default focus-visible:ring-offset-neutral-default focus:[&:not(:focus-visible)]:[box-shadow:none]",
        {
          "border-neutral-stronger disabled:bg-input-default-disabled checked:disabled:bg-brand-default-disabled cursor-not-allowed":
            disabled,
        }
      )}
      defaultChecked={defaultChecked}
      checked={checked}
      onChange={e => handleChange(e)}
      disabled={disabled}
      {...(ariaLabel ? { "aria-label": ariaLabel } : {})}
      {...props}
    />
  );

  return (
    <div
      {...(id !== null && { id })}
      className={twClassNames(
        "pt-0",
        {
          "border-t border-b border-neutral-default divide-y divide-neutral-default py-4":
            border && !isCard,
          "cursor-not-allowed": disabled,
        },
        wrapperClassName
      )}
    >
      <div
        className={twClassNames("relative flex items-start", {
          "flex-row-reverse": position === CHECKBOX_POSITION_VARIANT.RIGHT,
          "pl-2 mb-2 py-4": isCard,
        })}
      >
        <div className={twClassNames("flex h-5 items-center")}>
          {increaseTapArea && data === null ? (
            <label
              htmlFor={`${name}${data?.value || ""}`}
              className="flex h-6 w-6 items-center justify-center"
            >
              {inputCheckbox()}
            </label>
          ) : (
            inputCheckbox()
          )}
        </div>
        {data ? (
          <div
            className={twClassNames("min-w-0 flex-1 text-sm", {
              "ml-3":
                position === CHECKBOX_POSITION_VARIANT.LEFT &&
                (data.label ||
                  (data.description &&
                    description !== CHECKBOX_DESCRIPTION_VARIANT.NONE)),
            })}
          >
            <label
              htmlFor={`${name}${data.value}`}
              className={twClassNames(
                "select-none font-medium text-neutral-weak",
                {
                  "text-neutral-weakest": disabled,
                  "flex flex-row items-center gap-1.5": icon,
                  block: isFullWidthLabel,
                }
              )}
            >
              {icon}
              {data.label}
            </label>
            <p
              id={`${name}-${data.value}`}
              className={twClassNames("text-neutral-weaker", {
                "text-neutral-weakest": disabled,
                "ml-2":
                  description === CHECKBOX_DESCRIPTION_VARIANT.INLINE &&
                  data.label,
                inline: description === CHECKBOX_DESCRIPTION_VARIANT.INLINE,
                block: description === CHECKBOX_DESCRIPTION_VARIANT.BLOCK,
                hidden: description === CHECKBOX_DESCRIPTION_VARIANT.NONE,
              })}
            >
              {data.description}
            </p>
          </div>
        ) : null}

        <span
          className={twClassNames(
            checked || defaultChecked
              ? "border border-brand-strong"
              : "border-2 border-transparent",
            "pointer-events-none absolute -inset-px rounded-lg",
            { hidden: !isCard }
          )}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  /** Provides an accessible label for the checkbox, especially useful when no visible label is present. */
  ariaLabel: PropTypes.string,
  /** Determines if the checkbox container should display top and bottom borders. */
  border: PropTypes.bool,
  /** Controls the checked state of the checkbox. Use this for controlled components, typically with an `onChange` handler. `undefined` means uncontrolled. */
  checked: PropTypes.bool,
  /** An object containing the `label`, `value`, and `description` for the checkbox. */
  data: PropTypes.shape({
    /** Additional descriptive text displayed below or next to the label. Can be a string or a React node. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The content to display as the label for the checkbox. Can be a string or a React node. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A unique value associated with the checkbox, used for identification. */
    value: PropTypes.string.isRequired,
  }),
  /** Sets the initial checked state of the checkbox for uncontrolled components. `undefined` means initially unchecked. */
  defaultChecked: PropTypes.bool,
  /** Controls how the description (from `data.description`) is displayed relative to the label. Possible values: 'none', 'block', 'inline'. */
  description: PropTypes.oneOf(Object.values(CHECKBOX_DESCRIPTION_VARIANT)),
  /** If true, the checkbox will be visually styled as disabled and will not respond to user interactions. */
  disabled: PropTypes.bool,
  /** An optional React node (e.g., an icon component) to display before the label text. */
  icon: PropTypes.node,
  /** A unique identifier for the outer container div of the checkbox component. */
  id: PropTypes.string,
  /** If true, wraps the checkbox input within a larger label element to increase the clickable area. Only applies when `data` is null. */
  increaseTapArea: PropTypes.bool,
  /** If true, sets the checkbox to an indeterminate visual state. This is a visual state only. */
  indeterminate: PropTypes.bool,
  /** If true, applies card-like styling to the checkbox container. */
  isCard: PropTypes.bool,
  /** If true, allows the label and description container to occupy the full available width. */
  isFullWidthLabel: PropTypes.bool,
  /** The name attribute for the checkbox input element. Used for form submission and identification. */
  name: PropTypes.string,
  /** Callback function invoked when the checkbox's checked state changes. Receives the standard React change event. */
  onChange: PropTypes.func,
  /** Determines the position of the checkbox input relative to the label. Possible values: 'left', 'right'. */
  position: PropTypes.oneOf(Object.values(CHECKBOX_POSITION_VARIANT)),
  /** Additional CSS class names to apply to the outermost wrapper `div` element. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-checkbox--checkbox-primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/299126-checkbox/b/4635b4
 * @end
 */

export default Checkbox;
