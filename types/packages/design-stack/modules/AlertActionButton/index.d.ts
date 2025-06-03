/**
 * AlertActionButton component properties.
 * Inherits props from the underlying Button component.
 *
 * @typedef {Object} AlertActionButtonProps
 * @property {string} [ariaLabel] - Provides an accessible label for the button, especially useful for icon-only buttons.
 * @property {React.ReactNode} [children] - The content displayed within the button. Can be text, icons, or other elements.
 * @property {boolean} [disabled=false] - If `true`, the button will be disabled and non-interactive.
 * @property {string} [form] - The `id` of the form the button is associated with.
 * @property {boolean} [fullWidth=false] - If `true`, the button will expand to take up the full width of its container.
 * @property {React.ReactNode} [icon] - An icon element to be displayed within the button.
 * @property {'left' | 'right'} [iconPlacement='left'] - Specifies the position of the icon relative to the children. Defaults to 'left'.
 * @property {string} [id] - A unique identifier for the button element.
 * @property {boolean} [isIconOnlyButton=false] - If `true`, the button will render only the icon, adjusting padding and styles accordingly. `ariaLabel` is recommended in this case.
 * @property {string} [loaderText] - Text displayed next to the loader/spinner when the button is in the loading state.
 * @property {boolean} [loading=false] - If `true`, the button will display a loading indicator.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Callback function triggered when the button is clicked.
 * @property {string} [wrapperClassName] - Custom CSS class name(s) to apply to the button's wrapping element for additional styling.
 */
import React from "react";
/**
 * @type {React.ForwardRefExoticComponent<AlertActionButtonProps & React.RefAttributes<HTMLButtonElement>>}
 */
declare const AlertActionButton: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */
export default AlertActionButton;
