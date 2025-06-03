/**
 * Represents the data structure for a single option within the Combobox.
 *
 * @typedef {Object} ComboboxOptionData
 * @property {string} [altText] - Alt text for the option's image, if applicable.
 * @property {string} [image] - URL or path to an image associated with the option.
 * @property {boolean} [isGroupLabelOption=false] - If true, this option acts as a non-selectable label for a group of options.
 * @property {string} label - The primary text displayed for the option. This is also used for filtering.
 * @property {string} [name] - The name attribute, often used when the option represents an input element (like in multi-select).
 * @property {string|number} value - The unique value associated with the option, used for identification and form submission.
 * @property {React.ReactNode} [visualLabel] - Optional custom React node to render as the option's label, overriding the default text rendering of `label`.
 */
/**
 * Props for the ComboboxOptionItem component.
 *
 * @typedef {Object} ComboboxOptionItemProps
 * @property {('left'|'right')} [checkPosition='left'] - Determines the position of the checkmark (or checkbox in multi-select) relative to the option label.
 * @property {boolean} [disabled=false] - If true, the option cannot be selected and will appear visually disabled.
 * @property {boolean} [haveGroups=false] - Indicates if the options list is structured with groups, affecting styling (e.g., margin).
 * @property {boolean} [imageInvertOnHover=false] - If true, inverts the colors of the option's image when the item is hovered or active.
 * @property {string} [imgWrapperClassName=''] - Custom CSS class name to apply to the wrapper div around the option's image.
 * @property {boolean | null} [isMultiOverrideValue=null] - Explicitly overrides the `isMulti` context value for this specific option. Useful for special cases within a multi-select Combobox.
 * @property {boolean | null} [isTagverrideValue=null] - Explicitly overrides the `isTag` context value for this specific option.
 * @property {() => void} [onActive] - Callback function executed when the option becomes active (e.g., via keyboard navigation or hover).
 * @property {(event: React.SyntheticEvent<HTMLImageElement, Event>) => void} [onImageError] - Callback function executed if the option's image fails to load.
 * @property {ComboboxOptionData} option - The data object representing the option to be rendered.
 * @property {boolean} [shouldCloseCombobox=false] - If true, clicking this option will close the Combobox dropdown, overriding the default behavior determined by `shouldCloseOnSelect` in the main Combobox.
 * @property {string} [wrapperClassName=''] - Custom CSS class name to apply to the root element (`Combobox.Option`) of the item.
 */
import React from "react";
/**
 * Renders a single selectable item within the Combobox dropdown.
 * It handles different display variations based on props like `isMulti`, `isTag`,
 * `checkPosition`, and the presence of images or custom labels.
 * It also manages active/selected states and disabled appearance.
 * Can also render group labels if `option.isGroupLabelOption` is true.
 *
 * @type {React.ForwardRefExoticComponent<ComboboxOptionItemProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const ComboboxOptionItem: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */
export default ComboboxOptionItem;
