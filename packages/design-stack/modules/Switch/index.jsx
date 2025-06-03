/**
 * @typedef {Object} SwitchProps
 * @property {boolean} [checked] - The controlled checked state of the switch. Use `true` for checked, `false` for unchecked. Must be used in conjunction with `onChange`.
 * @property {React.ReactNode} [children] - Optional content to render alongside the switch, typically a label or description. If provided, this overrides the `label` and `description` props for rendering.
 * @property {boolean} [defaultValue] - The initial checked state when the switch is uncontrolled. Use `true` for checked, `false` for unchecked.
 * @property {string} [description] - A textual description for the switch, often used for accessibility or to provide more context. This is ignored if `children` are provided.
 * @property {boolean} [disabled=false] - If `true`, the switch will be visually disabled and non-interactive.
 * @property {boolean} [isShortToggle=false] - If `true`, renders a smaller version of the switch.
 * @property {string} [label] - The primary label for the switch, used for accessibility (aria-label). This is ignored if `children` are provided.
 * @property {(checked: boolean) => void} [onChange] - Callback function invoked when the switch's state changes. Receives the new checked state (`true` or `false`) as an argument. Required for controlled component behavior.
 * @property {(checked: boolean) => React.ReactNode} [toggleIcons] - Callback function to render custom icons inside the switch toggle based on its state. Receives the current checked state (`true` or `false`) and should return a `React.ReactNode`.
 * @property {string} [wrapperClassName] - Additional CSS class name(s) to apply to the root `div` element wrapping the switch.
 *
 * @example // Controlled Switch
 * import { Switch } from '@browserstack/design-stack';
 * import { useState } from 'react';
 *
 * function MyComponent() {
 *   const [isEnabled, setIsEnabled] = useState(false);
 *   return (
 *     <Switch
 *       label="Enable Feature"
 *       checked={isEnabled}
 *       onChange={setIsEnabled}
 *     />
 *   );
 * }
 *
 * @example // Uncontrolled Switch with default value
 * import { Switch } from '@browserstack/design-stack';
 *
 * function MyComponent() {
 *   return (
 *     <Switch
 *       label="Notifications"
 *       defaultValue={true}
 *       description="Receive email notifications"
 *     />
 *   );
 * }
 *
 * @example // Small Switch with custom icons
 * import { Switch } from '@browserstack/design-stack';
 * import { CheckIcon, XIcon } from '@heroicons/react/solid'; // Example icons
 *
 * function MyComponent() {
 *   return (
 *     <Switch
 *       label="Compact Mode"
 *       isShortToggle
 *       toggleIcons={(checked) => checked ? <CheckIcon className="h-3 w-3 text-white" /> : <XIcon className="h-3 w-3 text-neutral-strongest" />}
 *     />
 *   );
 * }
 *
 * @accessibility
 * The Switch component renders a `button` element with `role="switch"`.
 * It uses `aria-checked` to indicate its state.
 * The `label` prop is used for `aria-label`. If `label` is not provided but `children` are, ensure the children provide adequate labeling.
 * The `description` prop is used for `aria-describedby` if provided.
 * When disabled, `aria-disabled="true"` is set implicitly by the `disabled` attribute on the button.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Switch as HeadlessSwitch } from "@headlessui/react";
import PropTypes from "prop-types";

/**
 * A toggle switch component allowing users to switch between two states, typically on or off.
 * It leverages Headless UI for accessibility and state management.
 * @type {React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>}
 */
const Switch = React.forwardRef(
  (
    {
      checked = undefined,
      children = null,
      defaultValue = undefined,
      description = null,
      disabled = false,
      isShortToggle = false,
      label = null,
      onChange = null,
      toggleIcons = null,
      wrapperClassName = "",
      ...props
    },
    ref
  ) => {
    const onChangeHandler = updateState => {
      onChange?.(updateState);
    };

    const renderLabelContent = () => {
      if (children) return children;
      if (!label && !description) return null;
      return null;
    };

    const labelContent = renderLabelContent();

    return (
      <div className="flex items-center">
        {labelContent}
        <HeadlessSwitch
          checked={checked}
          defaultChecked={defaultValue}
          onChange={onChangeHandler}
          className={({ checked: headlessChecked }) =>
            twClassNames(
              isShortToggle
                ? [
                    "group relative inline-flex h-4 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2",
                  ]
                : [
                    "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-neutral-strongest transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2",
                  ],
              headlessChecked
                ? "bg-brand-default hover:bg-brand-default-hover"
                : "bg-neutral-inverse-weakest hover:bg-neutral-inverse-weaker-hover",
              "disabled:cursor-not-allowed",
              {
                "bg-brand-weak": headlessChecked && disabled,
                "bg-neutral-strongest-disabled": !headlessChecked && disabled,
              },
              wrapperClassName
            )
          }
          disabled={disabled}
          role="switch"
          aria-checked={checked}
          aria-label={label}
          aria-describedby={description}
          ref={ref}
          {...props}
        >
          {({ checked: headlessChecked }) => (
            <>
              <span
                aria-hidden="true"
                className={twClassNames(
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-input-default shadow ring-0 duration-200 ease-in-out",
                  headlessChecked ? "translate-x-5" : "translate-x-0",
                  isShortToggle
                    ? "absolute left-0 border border-neutral-default transition-transform"
                    : "transition",
                  { "bg-input-default-disabled": disabled }
                )}
              >
                {toggleIcons?.(checked)}
              </span>
            </>
          )}
        </HeadlessSwitch>
      </div>
    );
  }
);

Switch.propTypes = {
  /** The controlled checked state of the switch. */
  checked: PropTypes.bool,
  /** Optional content to render alongside the switch, typically a label or description. Overrides `label` and `description` props for rendering. */
  children: PropTypes.node,
  /** The initial checked state when the switch is uncontrolled. */
  defaultValue: PropTypes.bool,
  /** A textual description for the switch, used for accessibility (aria-describedby). Ignored if `children` are provided. */
  description: PropTypes.string,
  /** If `true`, the switch will be visually disabled and non-interactive. */
  disabled: PropTypes.bool,
  /** If `true`, renders a smaller version of the switch. */
  isShortToggle: PropTypes.bool,
  /** The primary label for the switch, used for accessibility (aria-label). Ignored if `children` are provided. */
  label: PropTypes.string,
  /** Callback function invoked when the switch's state changes. Receives the new checked state (`true` or `false`). */
  onChange: PropTypes.func,
  /** Callback function to render custom icons inside the switch toggle based on its state. Receives the current checked state. */
  toggleIcons: PropTypes.func,
  /** Additional CSS class name(s) to apply to the root `div` element. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-switch--controlled
 * @zeroHeight https://zeroheight.com/023d5159d/p/318810-toggle--switch/b/4635b4
 * @end
 */

export default Switch;
