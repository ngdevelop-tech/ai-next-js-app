/**
 * @typedef {Object} SelectMenuTriggerProps
 * @property {React.ReactNode} [leadingIcon] - Node containing the content that will be displayed as a leading icon in SelectMenu Trigger.
 * @property {string} [placeholder] - The placeholder text to display when no value is selected. Defaults to an empty string.
 * @property {React.ReactNode} [triggerIcon] - The icon displayed on the right side of the trigger. Defaults to `MdUnfoldMore`.
 * @property {string} [wrapperClassName] - Additional CSS classes to apply to the trigger button wrapper.
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Any other props are spread onto the underlying button element.
 */
import React from "react";
/**
 * SelectMenuTrigger serves as the interactive element that opens the SelectMenu options list.
 * It displays the currently selected value(s) or a placeholder, and includes icons for interaction cues.
 * This component must be used as a child of `SelectMenu`. It leverages Radix UI Popover and Headless UI Listbox internally.
 *
 * @example
 * <SelectMenu value={selectedOption} onChange={setSelectedOption}>
 *   <SelectMenuTrigger placeholder="Select an option" />
 *   <SelectMenuContent>
 *     <SelectMenuItem value="option1">Option 1</SelectMenuItem>
 *     <SelectMenuItem value="option2">Option 2</SelectMenuItem>
 *   </SelectMenuContent>
 * </SelectMenu>
 *
 * @accessibility
 * - Uses a standard HTML `<button>` element.
 * - Integrates with Headless UI Listbox for managing ARIA attributes related to listbox interactions (`aria-haspopup`, `aria-expanded`).
 * - Displays an error icon (`MdError`) when `errorText` is provided via context, signaling an invalid state.
 * - Disables the button visually and functionally when the `disabled` prop is true via context.
 *
 * @type {React.ForwardRefExoticComponent<SelectMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>}
 */
declare const SelectMenuTrigger: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */
export default SelectMenuTrigger;
