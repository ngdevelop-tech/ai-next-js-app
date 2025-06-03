/**
 * Represents an individual option within a SelectMenu.
 * It handles rendering based on whether the menu is multi-select or single-select,
 * displays checkmarks or checkboxes accordingly, and supports grouping.
 *
 * @typedef {Object} SelectMenuOptionItemProps
 * @property {('left'|'right')} [checkPosition='left'] - Controls the position ('left' or 'right') of the check icon when an item is selected in a single-select menu.
 * @property {boolean} [disabled=false] - If true, the option item will be disabled and cannot be selected.
 * @property {boolean} [haveGroups=false] - Indicates if the options data contains groups, used for styling adjustments.
 * @property {boolean | null} [isMultiOverrideValue=null] - Allows overriding the multi-select behavior determined by the parent SelectMenu context for this specific option. If set, it forces the option to render as either multi-select (true) or single-select (false), ignoring the context. If null, it inherits the context's behavior.
 * @property {object} option - The data object representing the option item.
 * @property {string} [option.image] - URL of an image to display next to the option label.
 * @property {boolean} [option.isGroupLabelOption] - If true, this option acts as a non-selectable label for a group.
 * @property {string} option.label - The text label displayed for the option. This is required.
 * @property {string} [option.name] - The name attribute, often used when the option is part of a form (e.g., for the checkbox in multi-select).
 * @property {string | number} option.value - The unique value associated with the option. This is required.
 * @property {React.ReactNode} [option.visualNode] - A custom React node to render instead of the plain text label.
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to apply to the wrapper element of the option item.
 */
import React from "react";
/**
 * Renders an individual option within a SelectMenu component.
 *
 * This component adapts its appearance based on the SelectMenu's configuration (single/multi-select)
 * and the properties of the option data provided. It integrates with Headless UI's Listbox.Option
 * for accessibility and state management.
 *
 * @component
 * @example
 * // Single select option
 * <SelectMenuOptionItem
 *   option={{ label: 'Option 1', value: '1' }}
 *   checkPosition="right"
 * />
 *
 * @example
 * // Multi select option (within a SelectMenu context where isMulti is true)
 * <SelectMenuOptionItem
 *   option={{ label: 'Option A', value: 'a', name: 'optionA' }}
 * />
 *
 * @example
 * // Disabled option
 * <SelectMenuOptionItem
 *   option={{ label: 'Disabled Option', value: 'disabled' }}
 *   disabled={true}
 * />
 *
 * @example
 * // Option with an image
 * <SelectMenuOptionItem
 *   option={{ label: 'User Option', value: 'user1', image: '/path/to/avatar.png' }}
 * />
 *
 * @see SelectMenu
 * @see {@link https://headlessui.com/react/listbox#listbox-option} Headless UI Listbox.Option documentation
 *
 * @accessibility
 * - Integrates with Headless UI Listbox for managing ARIA attributes (`aria-selected`, `role="option"`).
 * - Handles focus states (`active`) visually.
 * - Disabled state uses `aria-disabled` via Headless UI and visual styling.
 * - In multi-select mode, renders a visually hidden but accessible checkbox input.
 *
 * @type {React.ForwardRefExoticComponent<SelectMenuOptionItemProps & React.RefAttributes<HTMLLIElement>>}
 */
declare const SelectMenuOptionItem: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */
export default SelectMenuOptionItem;
