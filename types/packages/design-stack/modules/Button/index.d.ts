/**
 * Represents the properties for the Button component.
 * @typedef {Object} ButtonProps
 * @property {string} [ariaLabel] - Provides an accessible label for the button, especially useful for icon-only buttons.
 * @property {React.ReactNode} [children] - The content to be rendered inside the button. Can be text, icons, or other elements.
 * @property {('primary'|'secondary'|'tertiary'|'minimal'|'white'|'success'|'danger'|'attention')} [colors='primary'] - Controls the color scheme of the button. Determines background, text, and border colors based on the theme.
 * @property {boolean} [disabled=false] - If `true`, the button will be visually styled as disabled and will not respond to user interactions.
 * @property {string} [form] - The `id` of the form the button is associated with. Allows submitting or resetting a form from outside the form element.
 * @property {boolean} [fullWidth=false] - If `true`, the button will expand to occupy the full width of its parent container.
 * @property {boolean} [hasFocusWhenDisabled=false] - If `true`, the button can receive focus even when it is disabled. Useful for accessibility in certain scenarios.
 * @property {React.ReactNode} [icon] - A React node (typically an icon component) to be displayed within the button.
 * @property {('left'|'right')} [iconPlacement='left'] - Determines the position of the icon relative to the button's children (text content).
 * @property {string} [id] - A unique identifier for the button element in the DOM.
 * @property {boolean} [isIconOnlyButton=false] - If `true`, the button will be styled to display only the icon, adjusting padding and potentially shape. `ariaLabel` is highly recommended when `true`.
 * @property {string} [loaderText] - Custom text to be displayed alongside the loading spinner when `loading` is `true`. Defaults depend on the button `type`.
 * @property {boolean} [loading=false] - If `true`, the button will display a loading indicator (spinner) and its content will be hidden or replaced by `loaderText`. The button will also be disabled.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Callback function executed when the button is clicked. Receives the React synthetic event.
 * @property {('xs'|'sm'|'md'|'lg')} [size='md'] - Controls the overall size (padding, font size) of the button.
 * @property {('button'|'submit'|'reset')} [type='button'] - Specifies the button's behavior. 'submit' triggers form submission, 'reset' clears form fields, 'button' has no default behavior.
 * @property {('primary'|'secondary'|'tertiary'|'minimal')} [variant='primary'] - Controls the visual style variant of the button (e.g., filled, outlined, text-only).
 * @property {string} [wrapperClassName] - An optional CSS class name to apply to the root button element for custom styling.
 */
import React from "react";
/**
 * A versatile button component supporting various styles, sizes, states (loading, disabled),
 * and functionalities like icon integration and form association.
 * It adheres to accessibility guidelines and provides customization options.
 *
 * @type {React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>}
 */
declare const Button: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-button--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/327cd0-button/b/4635b4
 * @end
 */
export default Button;
