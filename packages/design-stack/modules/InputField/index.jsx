/**
 * @typedef {Object} InputFieldProps
 * @property {React.ReactNode} [addOnAfter] - Node to render after the input field, outside the border.
 * @property {React.ReactNode} [addOnAfterInline] - Node to render after the input field, inside the border.
 * @property {string} [addOnAfterInlineWrapperClassName] - Custom CSS class for the inline add-on container after the input.
 * @property {React.ReactNode} [addOnBefore] - Node to render before the input field, outside the border.
 * @property {React.ReactNode} [addOnBeforeInline] - Node to render before the input field, inside the border.
 * @property {string} [addOnBeforeInlineWrapperClassName] - Custom CSS class for the inline add-on container before the input.
 * @property {string} [autoComplete='off'] - Specifies whether the browser should attempt to automatically complete the input. See MDN docs for possible values.
 * @property {string} [cornerHintText] - Optional text displayed in the top-right corner, usually for hints like character limits.
 * @property {string|number} [defaultValue] - The initial value of the input field when uncontrolled.
 * @property {string} [description] - Additional descriptive text displayed below the input field.
 * @property {boolean} [disabled=false] - If true, the input field is disabled and cannot be interacted with.
 * @property {string} [errorText] - If provided, displays an error message below the input and styles the input with an error state.
 * @property {string} id - A unique identifier for the input element. Required for accessibility and label association.
 * @property {React.ReactNode} [infoText] - If provided, displays an info icon next to the label with a tooltip containing this text.
 * @property {React.Ref<HTMLInputElement>} [inputRef] - A ref forwarded to the underlying HTML input element.
 * @property {boolean} [isMandatory=false] - If true, adds a red asterisk (*) after the label to indicate a required field.
 * @property {string} [label] - The text label displayed above the input field.
 * @property {function} [onBlur] - Callback function triggered when the input field loses focus.
 * @property {function} [onChange] - Callback function triggered when the value of the input field changes.
 * @property {function} [onFocus] - Callback function triggered when the input field gains focus.
 * @property {function} [onKeyDown] - Callback function triggered when a key is pressed down while the input field is focused.
 * @property {string} [placeholder] - Placeholder text displayed inside the input field when it's empty.
 * @property {boolean} [readonly=false] - If true, the input field's value cannot be edited by the user.
 * @property {string} [role='contentinfo'] - The ARIA role for the input field. (Note: Consider removing if not strictly necessary).
 * @property {string} [type='text'] - The type attribute for the HTML input element (e.g., 'text', 'password', 'email', 'number').
 * @property {string|number} [value] - The controlled value of the input field. Use with `onChange` for controlled components.
 * @property {string} [wrapperClassName] - Additional CSS classes to apply to the main container div wrapping the input and add-ons.
 * @property {object} [props] - Any other props will be spread onto the underlying HTML input element.
 */

import React, { forwardRef } from "react";
import { MdError, MdInfoOutline } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Tooltip from "../Tooltip";
import TooltipBody from "../TooltipBody";

/**
 * @component InputField
 * @description A versatile input component with support for labels, descriptions, error states, hints, icons, and add-ons.
 * It forwards refs to the underlying HTML input element.
 *
 * @type {React.ForwardRefExoticComponent<InputFieldProps & React.RefAttributes<HTMLInputElement>>}
 */
const InputField = forwardRef(
  (
    {
      addOnAfter = null,
      addOnAfterInline = null,
      addOnAfterInlineWrapperClassName = "",
      addOnBefore = null,
      addOnBeforeInline = null,
      addOnBeforeInlineWrapperClassName = "",
      autoComplete = "off",
      cornerHintText = "",
      defaultValue = undefined,
      description = "",
      disabled = false,
      errorText = "",
      id,
      infoText = null,
      inputRef = null,
      isMandatory = false,
      label = "",
      onBlur = () => {},
      onChange = () => {},
      onFocus = () => {},
      onKeyDown = () => {},
      placeholder = "",
      readonly = false,
      role = "contentinfo",
      type = "text",
      value,
      wrapperClassName,
      ...props
    },
    ref
  ) => (
    <div>
      {(label || cornerHintText) && (
        <div className="mb-1 flex">
          <label
            htmlFor={id}
            id={`${id}label-wrap`}
            className="block text-sm font-medium text-neutral-weak"
          >
            {label}
          </label>
          {isMandatory && (
            <span className="ml-0.5 text-sm text-danger-default">*</span>
          )}
          {infoText && (
            <Tooltip
              theme="dark"
              content={<TooltipBody>{infoText}</TooltipBody>}
              delay={500}
              triggerWrapperClassName={twClassNames("inline-flex")}
            >
              <button
                type="button"
                className="px-1 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-strong"
                aria-label="info-icon"
              >
                <MdInfoOutline className="h-4 w-4 icon-neutral-weak hover:icon-neutral-strong" />
              </button>
            </Tooltip>
          )}
          {cornerHintText && (
            <span className="ml-auto text-sm text-neutral-weaker">
              {cornerHintText}
            </span>
          )}
        </div>
      )}
      <div
        className={twClassNames(
          "flex w-full rounded-md shadow-sm",
          wrapperClassName
        )}
      >
        {addOnBefore}
        <div
          className={twClassNames(
            "flex w-full items-center rounded-md border border-neutral-strong bg-input-default",
            {
              "border-danger-weak focus-within:ring-1 focus-within:ring-danger-strong focus-within:border-danger-strong focus-within:outline-danger-strong":
                errorText,
              "focus-within:ring-1 focus-within:ring-brand-strong focus-within:border-brand-strong":
                !errorText,
              "border-neutral-default bg-input-default-disabled": disabled,
              "bg-clip-padding bg-input-default-disabled": readonly,
              "rounded-l-none": addOnBefore,
              "rounded-r-none": addOnAfter,
            }
          )}
        >
          {addOnBeforeInline && (
            <div
              className={twClassNames(
                "pl-3",
                addOnBeforeInlineWrapperClassName
              )}
            >
              {addOnBeforeInline}
            </div>
          )}
          <input
            aria-invalid={!!errorText}
            aria-describedby={id + (errorText ? "error-wrap" : "label-wrap")}
            defaultValue={defaultValue}
            value={value}
            disabled={disabled}
            onChange={onChange}
            onKeyDown={onKeyDown}
            type={type}
            ref={ref || inputRef}
            name={label}
            id={id}
            className={twClassNames(
              "block w-full flex-1 border-none border-neutral-strong bg-input-default text-neutral-default placeholder:text-neutral-weaker hover:bg-neutral-default-hover focus:ring-0 disabled:cursor-not-allowed sm:text-sm",
              {
                "text-danger-strongest placeholder:text-neutral-weaker":
                  errorText,
                "disabled:text-neutral-weaker disabled:bg-input-default-disabled":
                  disabled,
                "bg-input-default-disabled bg-clip-padding": readonly,
                "rounded-l-md": !addOnBefore && !addOnBeforeInline,
                "rounded-r-md": !addOnAfter && !addOnAfterInline,
              }
            )}
            placeholder={placeholder}
            readOnly={readonly}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete={autoComplete}
            {...props}
          />

          {(addOnAfterInline || errorText) && (
            <div
              className={twClassNames(
                "flex items-center gap-1 pr-3",
                addOnAfterInlineWrapperClassName
              )}
            >
              {errorText && (
                <MdError
                  className="h-5 w-5 icon-danger-weak"
                  aria-hidden="true"
                />
              )}
              {addOnAfterInline}
            </div>
          )}
        </div>
        {addOnAfter}
      </div>
      {errorText && (
        <p
          className="mt-2 text-sm text-danger-default"
          id={`${id}error-wrap`}
          aria-live="assertive"
        >
          {errorText}
        </p>
      )}
      {description && (
        <p className="mt-2 text-sm text-neutral-weaker">{description}</p>
      )}
    </div>
  )
);

InputField.propTypes = {
  /** Node to render after the input field, outside the border. */
  addOnAfter: PropTypes.node,
  /** Node to render after the input field, inside the border. */
  addOnAfterInline: PropTypes.node,
  /** Custom CSS class for the inline add-on container after the input. */
  addOnAfterInlineWrapperClassName: PropTypes.string,
  /** Node to render before the input field, outside the border. */
  addOnBefore: PropTypes.node,
  /** Node to render before the input field, inside the border. */
  addOnBeforeInline: PropTypes.node,
  /** Custom CSS class for the inline add-on container before the input. */
  addOnBeforeInlineWrapperClassName: PropTypes.string,
  /**
   * Specifies whether the browser should attempt to automatically complete the input.
   * Common values: 'on', 'off', 'name', 'email', 'username', 'new-password', 'current-password', etc.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   * @default 'off'
   */
  autoComplete: PropTypes.string,
  /** Optional text displayed in the top-right corner, usually for hints like character limits. */
  cornerHintText: PropTypes.string,
  /** The initial value of the input field when uncontrolled. */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional descriptive text displayed below the input field. */
  description: PropTypes.string,
  /** If true, the input field is disabled and cannot be interacted with. @default false */
  disabled: PropTypes.bool,
  /** If provided, displays an error message below the input and styles the input with an error state. */
  errorText: PropTypes.string,
  /** A unique identifier for the input element. Required for accessibility and label association. */
  id: PropTypes.string.isRequired,
  /** If provided, displays an info icon next to the label with a tooltip containing this text. */
  infoText: PropTypes.node,
  /** A ref forwarded to the underlying HTML input element. */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
  /** If true, adds a red asterisk (*) after the label to indicate a required field. @default false */
  isMandatory: PropTypes.bool,
  /** The text label displayed above the input field. */
  label: PropTypes.string,
  /** Callback function triggered when the input field loses focus. `(event: React.FocusEvent<HTMLInputElement>) => void` */
  onBlur: PropTypes.func,
  /** Callback function triggered when the value of the input field changes. `(event: React.ChangeEvent<HTMLInputElement>) => void` */
  onChange: PropTypes.func,
  /** Callback function triggered when the input field gains focus. `(event: React.FocusEvent<HTMLInputElement>) => void` */
  onFocus: PropTypes.func,
  /** Callback function triggered when a key is pressed down while the input field is focused. `(event: React.KeyboardEvent<HTMLInputElement>) => void` */
  onKeyDown: PropTypes.func,
  /** Placeholder text displayed inside the input field when it's empty. */
  placeholder: PropTypes.string,
  /** If true, the input field's value cannot be edited by the user. @default false */
  readonly: PropTypes.bool,
  /** The ARIA role for the input field. (Note: Consider removing if not strictly necessary). @default 'contentinfo' */
  role: PropTypes.string,
  /**
   * The type attribute for the HTML input element.
   * Common values: 'text', 'password', 'email', 'number', 'search', 'tel', 'url'.
   * @default 'text'
   */
  type: PropTypes.string,
  /** The controlled value of the input field. Use with `onChange` for controlled components. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Additional CSS classes to apply to the main container div wrapping the input and add-ons. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-inputfield--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/795ae0-input-field/b/4635b4
 * @end
 */

export default InputField;
