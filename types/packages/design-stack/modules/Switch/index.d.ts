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
/**
 * A toggle switch component allowing users to switch between two states, typically on or off.
 * It leverages Headless UI for accessibility and state management.
 * @type {React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLButtonElement>>}
 */
declare const Switch: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-switch--controlled
 * @zeroHeight https://zeroheight.com/023d5159d/p/318810-toggle--switch/b/4635b4
 * @end
 */
export default Switch;
