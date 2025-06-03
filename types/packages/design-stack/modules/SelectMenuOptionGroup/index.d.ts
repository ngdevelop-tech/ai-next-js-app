/**
 * Represents the container for options within a SelectMenu, utilizing Radix Popover and Headless UI Listbox.
 * It handles the positioning, styling, and accessibility features of the dropdown options list.
 *
 * @typedef {Object} SelectMenuOptionGroupProps
 * @property {'start' | 'center' | 'end'} [alignment='start'] - Alignment of the options list relative to the trigger. Controls the `align` prop of `Popover.Content`.
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the select option group of the selectMenu component
 * @property {HTMLElement} [container=null] - The DOM element to portal the popover content into. Defaults to `document.body`.
 * @property {boolean} [hasStickyItem=false] - If true, adds padding to the bottom to accommodate a sticky item (like a footer button) within the options list.
 * @property {string} [maxWidth='80vw'] - Sets the maximum width of the options list container. Accepts any valid CSS width value.
 * @property {(event: React.KeyboardEvent<HTMLUListElement>) => void} [onKeyDown=null] - Callback function invoked when a key is pressed while the options list is focused.
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to apply to the `Listbox.Options` element for additional styling.
 *
 * @example
 * ```jsx
 * <SelectMenu>
 *   <SelectMenuButton>Options</SelectMenuButton>
 *   <SelectMenuOptionGroup>
 *     <SelectMenuOption value="1">Option 1</SelectMenuOption>
 *     <SelectMenuOption value="2">Option 2</SelectMenuOption>
 *   </SelectMenuOptionGroup>
 * </SelectMenu>
 * ```
 *
 * @see https://www.radix-ui.com/primitives/docs/components/popover#content - Radix Popover Content documentation
 * @see https://headlessui.com/react/listbox#listbox-options - Headless UI Listbox Options documentation
 */
import React from "react";
/**
 * @type {React.ForwardRefExoticComponent<SelectMenuOptionGroupProps & React.RefAttributes<HTMLUListElement>>}
 */
declare const SelectMenuOptionGroup: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */
export default SelectMenuOptionGroup;
