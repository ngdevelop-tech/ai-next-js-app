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

import React, { forwardRef } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  BUTTON_COLORS,
  BUTTON_DEFAULT_PROPS,
  BUTTON_ICON_PLACEMENT,
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_VARIANTS,
} from "./constants/button";
import getEffectiveChildren from "./getEffectiveChildren";
import useButton from "./useButton";

/**
 * A versatile button component supporting various styles, sizes, states (loading, disabled),
 * and functionalities like icon integration and form association.
 * It adheres to accessibility guidelines and provides customization options.
 *
 * @type {React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>}
 */
const Button = forwardRef(
  (
    {
      ariaLabel = BUTTON_DEFAULT_PROPS.ariaLabel,
      children = BUTTON_DEFAULT_PROPS.children,
      colors = BUTTON_DEFAULT_PROPS.colors,
      disabled = BUTTON_DEFAULT_PROPS.disabled,
      form = BUTTON_DEFAULT_PROPS.form,
      fullWidth = BUTTON_DEFAULT_PROPS.fullWidth,
      hasFocusWhenDisabled = BUTTON_DEFAULT_PROPS.hasFocusWhenDisabled,
      icon = BUTTON_DEFAULT_PROPS.icon,
      iconPlacement = BUTTON_DEFAULT_PROPS.iconPlacement,
      id = BUTTON_DEFAULT_PROPS.id,
      isIconOnlyButton = BUTTON_DEFAULT_PROPS.isIconOnlyButton,
      loaderText = BUTTON_DEFAULT_PROPS.loaderText,
      loading = BUTTON_DEFAULT_PROPS.loading,
      onClick = BUTTON_DEFAULT_PROPS.onClick,
      size = BUTTON_DEFAULT_PROPS.size,
      type = BUTTON_DEFAULT_PROPS.type,
      variant = BUTTON_DEFAULT_PROPS.variant,
      wrapperClassName = BUTTON_DEFAULT_PROPS.wrapperClassName,
      ...props
    },
    ref
  ) => {
    const {
      getConditionalProps,
      buttonRef,
      handleClick,
      stylePicker,
      getIconOnlyBtnStyle,
      disabledIconClassGenerator,
    } = useButton({
      ariaLabel,
      colors,
      disabled,
      fullWidth,
      hasFocusWhenDisabled,
      isIconOnlyButton,
      loading,
      onClick,
      ref,
      size,
      variant,
    });

    const colorAndVariant = `${colors}-${variant}`;
    const colorAndVariantAndIcon = isIconOnlyButton
      ? `${colorAndVariant}-only-icon`
      : colorAndVariant;

    // append in the array if the variant is not valid
    const isNotValidVariant = [
      "white-secondary",
      "success-minimal",
      "danger-minimal",
      "attention-minimal",
    ].includes(colorAndVariant);

    const { effectiveChildren } = getEffectiveChildren({
      disabledIconClassGenerator,
      colorAndVariant,
      colorAndVariantAndIcon,
      isNotValidVariant,
      children,
      colors,
      disabled,
      icon,
      iconPlacement,
      isIconOnlyButton,
      loaderText,
      loading,
      size,
      variant,
    });

    const getLoadingText = () => {
      if (loaderText) return loaderText;
      return type === "submit" ? "Submitting..." : "Loading...";
    };

    return (
      <>
        {loading && (
          <div aria-live="polite" className="sr-only" role="status">
            {getLoadingText()}
          </div>
        )}
        <button
          {...props}
          {...getConditionalProps()}
          {...(id !== null && { id })}
          type={type === "submit" ? "submit" : "button"}
          ref={ref || buttonRef}
          aria-disabled={disabled}
          aria-busy={loading}
          onClick={handleClick}
          form={form}
          className={twClassNames(
            "group border border-transparent font-medium outline-none",
            stylePicker(),
            {
              "w-full": fullWidth === true,
            },
            getIconOnlyBtnStyle(),
            wrapperClassName
          )}
        >
          {effectiveChildren}
        </button>
      </>
    );
  }
);

Button.propTypes = {
  /** Provide label to the component. */
  ariaLabel: PropTypes.string,
  /** Effective children(content) to be rendered inside the button. */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Controls the color palette of the button. */
  colors: PropTypes.oneOf(Object.values(BUTTON_COLORS)),
  /** Boolean option that toggles whether a button is disabled or not. */
  disabled: PropTypes.bool,
  /** Controls the "form" attribute to specify the form the button belongs to. */
  form: PropTypes.string,
  /** Boolean option that toggles whether a button should occupy the full width of its container or not. */
  fullWidth: PropTypes.bool,
  /** Boolean option that focus should be shown on disabled button or not. */
  hasFocusWhenDisabled: PropTypes.bool,
  /** Icon to be displayed inside the button. */
  icon: PropTypes.node,
  /** Icon to be displayed on the left hand side or right hand side inside the button. */
  iconPlacement: PropTypes.oneOf(Object.values(BUTTON_ICON_PLACEMENT)),
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /** Boolean option that toggles whether a button should only render an icon or all of its effective children. */
  isIconOnlyButton: PropTypes.bool,
  /** Text to be displayed when button is under loading state. */
  loaderText: PropTypes.string,
  /** Boolean option that toggles whether a button is in loading state or not. */
  loading: PropTypes.bool,
  /** onClick callback that is triggered when the button element is clicked. */
  onClick: PropTypes.func,
  /** Controls the size of the button. */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  /** Controls the "type" attribute of the button. */
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  /** Controls the variant(shape) of the button. */
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  /** A custom CSS class name to style the Button component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-button--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/327cd0-button/b/4635b4
 * @end
 */

export default Button;
