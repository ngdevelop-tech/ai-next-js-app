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

import React, { forwardRef, useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { ALERT_VARIANTS } from "../Alert/constants/alert";
import { AlertContextData } from "../Alert/context";
import WrappedButton from "../Button";
import { BUTTON_DEFAULT_PROPS } from "../Button/constants/button";

/**
 * @type {React.ForwardRefExoticComponent<AlertActionButtonProps & React.RefAttributes<HTMLButtonElement>>}
 */
const AlertActionButton = forwardRef(
  (
    {
      children = "",
      id = null,
      wrapperClassName = "",
      ariaLabel = "",
      disabled = false,
      form = null,
      fullWidth = false,
      icon = null,
      iconPlacement = "left",
      isIconOnlyButton = false,
      loaderText = "Loading",
      loading = false,
      onClick = null,
      ...rest
    },
    ref
  ) => {
    const { variant } = useContext(AlertContextData);

    return (
      <WrappedButton
        {...rest}
        ref={ref}
        colors="white"
        size="small"
        variant="minimal"
        wrapperClassName={twClassNames(
          "px-2 py-1.5",
          "focus-visible:ring-2 focus-visible:ring-offset-2",
          {
            "text-success-strong hover:text-success-strong hover:bg-success-weakest-hover focus-visible:ring-success-stronger focus-visible:ring-offset-success-weakest":
              variant === ALERT_VARIANTS.SUCCESS,
            "text-danger-stronger hover:text-danger-stronger hover:bg-danger-weakest-hover focus-visible:ring-danger-stronger  focus-visible:ring-offset-danger-weakest":
              variant === ALERT_VARIANTS.ERROR,
            "text-attention-strong hover:text-attention-strong hover:bg-attention-weakest-hover focus-visible:ring-attention-stronger focus-visible:ring-offset-attention-weakest":
              variant === ALERT_VARIANTS.WARNING,
            "text-brand-stronger hover:text-brand-stronger hover:bg-brand-weakest-hover focus-visible:ring-brand-stronger focus-visible:ring-offset-brand-weakest":
              variant === ALERT_VARIANTS.INFO,
          },
          wrapperClassName
        )}
        {...(id !== null && { id })}
      >
        {children}
      </WrappedButton>
    );
  }
);

AlertActionButton.propTypes = {
  /** Provides an accessible label for the button */
  ariaLabel: PropTypes.string,

  /** The content displayed within the button */
  children: PropTypes.node,

  /** If `true`, the button will be disabled */
  disabled: PropTypes.bool,

  /** The `id` of the form the button belongs to */
  form: PropTypes.string,

  /** If `true`, the button occupies the full width of its container */
  fullWidth: PropTypes.bool,

  /** Icon element to display */
  icon: PropTypes.node,

  /** Position of the icon relative to the children */
  iconPlacement: PropTypes.oneOf(["left", "right"]),

  /** Unique identifier for the button */
  id: PropTypes.string,

  /** If `true`, renders only the icon */
  isIconOnlyButton: PropTypes.bool,

  /** Text to display during loading state */
  loaderText: PropTypes.string,

  /** If `true`, shows a loading indicator */
  loading: PropTypes.bool,

  /** Click event handler */
  onClick: PropTypes.func,

  /** Custom CSS class name(s) for the wrapper */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */

export default AlertActionButton;
