/**
 * @typedef {Object} AlertProps
 * @property {boolean} [accentBorder=false] - If true, displays a prominent border on the left side based on the alert variant.
 * @property {React.ReactNode} children - The main content of the alert. Typically includes `Alert.Title`, `Alert.Description`, and optionally `Alert.Footer`.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [dismissCallback] - Optional callback function triggered when the dismiss button is clicked.
 * @property {React.ReactNode} [icon] - Custom icon element to display. If omitted, a default icon based on the `variant` is shown.
 * @property {string} [id] - Optional unique identifier for the alert container element.
 * @property {boolean} [isDismiss=false] - If true, displays a dismiss button ('x') on the right side of the alert.
 * @property {React.ReactNode} [link] - Optional link element, typically an `Alert.Link`, to include within the alert for navigation or actions.
 * @property {boolean} [show=true] - Controls the visibility of the alert. Set to `false` to hide the alert with a transition.
 * @property {typeof ALERT_VARIANTS[keyof typeof ALERT_VARIANTS]} [variant='info'] - The style variant of the alert, determining its background color, border color, and default icon.
 * @property {string} [wrapperClassName=''] - Optional additional CSS class names to apply to the main alert container `div`.
 */

import React, { Fragment, useState } from "react";
import { MdClose } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";

import WrappedButton from "../Button";

import {
  ALERT_DEFAULT_ICON,
  ALERT_LINK_POSITION,
  ALERT_VARIANTS,
} from "./constants/alert";
import { AlertContextData } from "./context";

/**
 * Displays contextual messages for typical user actions with the handful of available and flexible alert messages.
 * Alerts provide immediate feedback or important information related to user actions or system status.
 * They can be configured with different variants (success, error, warning, info), optional icons, dismiss buttons, and links.
 *
 * @type {React.FC<AlertProps>}
 */
const Alert = ({
  accentBorder = false,
  children,
  dismissCallback = null,
  icon = null,
  id = null,
  isDismiss = false,
  link = null,
  show = true,
  variant = ALERT_VARIANTS.INFO,
  wrapperClassName = "",
}) => {
  const [isTitlePresent, setIsTitlePresent] = useState(false);
  const [isDescriptionPresent, setIsDescriptionPresent] = useState(false);

  const AlertDefaultIcon = ALERT_DEFAULT_ICON[variant];

  return (
    <AlertContextData.Provider
      value={{
        isDismiss,
        variant,
        link,
        isTitlePresent,
        setIsTitlePresent,
        linkPosition: link?.props?.position || ALERT_LINK_POSITION.END,
        // to handle edge case: link is inline, but description is not present.
        isDescriptionPresent,
        setIsDescriptionPresent,
      }}
    >
      <Transition
        show={show}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          role="alert"
          {...(id !== null && { id })}
          className={twClassNames(
            "p-4",
            {
              "rounded-md": !accentBorder,
              "border-l-4 rounded-r-md": accentBorder,
              "bg-success-weakest border-success-default":
                variant === ALERT_VARIANTS.SUCCESS,
              "bg-danger-weakest border-danger-default":
                variant === ALERT_VARIANTS.ERROR,
              "bg-attention-weakest border-attention-default":
                variant === ALERT_VARIANTS.WARNING,
              "bg-brand-weakest border-brand-default":
                variant === ALERT_VARIANTS.INFO,
            },
            wrapperClassName
          )}
        >
          <div className="flex">
            {/* alert icon */}
            <div
              className={twClassNames("shrink-0", {
                "icon-success-weaker": variant === ALERT_VARIANTS.SUCCESS,
                "icon-danger-weaker": variant === ALERT_VARIANTS.ERROR,
                "icon-attention-weaker": variant === ALERT_VARIANTS.WARNING,
                "icon-brand-weaker": variant === ALERT_VARIANTS.INFO,
              })}
            >
              {icon || (
                <AlertDefaultIcon aria-hidden="true" className="h-5 w-5" />
              )}
            </div>

            {/* alert main body */}
            <div className="ml-3 flex-1 md:flex md:items-end">
              <div className="flex-1">
                {/* to handle edge case: link is inline, but title and description are not present */}
                {!isTitlePresent &&
                  !isDescriptionPresent &&
                  link &&
                  link?.props?.position === ALERT_LINK_POSITION.INLINE && (
                    <h3
                      className={twClassNames("text-sm font-medium", {
                        "text-success-strong":
                          variant === ALERT_VARIANTS.SUCCESS,
                        "text-danger-stronger":
                          variant === ALERT_VARIANTS.ERROR,
                        "text-attention-strong":
                          variant === ALERT_VARIANTS.WARNING,
                        "text-brand-stronger": variant === ALERT_VARIANTS.INFO,
                      })}
                    >
                      {link}
                    </h3>
                  )}
                {/* alert title */}
                {/* alert description */}
                {/* alert footer */}
                {children}
              </div>

              {/* alert link */}
              {link && link.props?.position === ALERT_LINK_POSITION.END && (
                <div className="shrink-0">{link}</div>
              )}
            </div>

            {/* dismiss icon */}
            {isDismiss && (
              <div className="-m-1.5 shrink-0 pl-3">
                <WrappedButton
                  ariaLabel="Alert dismiss button"
                  icon={
                    <MdClose
                      className={twClassNames("h-5 w-5", {
                        "icon-success-weak hover:icon-success-weak":
                          variant === ALERT_VARIANTS.SUCCESS,
                        "icon-danger-weak hover:icon-danger-weak":
                          variant === ALERT_VARIANTS.ERROR,
                        "icon-attention-weak hover:icon-attention-weak":
                          variant === ALERT_VARIANTS.WARNING,
                        "icon-brand-weak hover:icon-brand-weak":
                          variant === ALERT_VARIANTS.INFO,
                      })}
                      aria-hidden="true"
                    />
                  }
                  isIconOnlyButton
                  onClick={event => {
                    event.preventDefault();
                    if (dismissCallback) dismissCallback();
                  }}
                  size="extra-small"
                  variant="minimal"
                  wrapperClassName={twClassNames(
                    "focus-visible:ring-2 focus-visible:ring-offset-2",
                    {
                      "hover:bg-success-weakest-hover focus-visible:ring-success-stronger focus-visible:ring-offset-success-weakest":
                        variant === ALERT_VARIANTS.SUCCESS,
                      "hover:bg-danger-weakest-hover focus-visible:ring-danger-stronger  focus-visible:ring-offset-danger-weakest":
                        variant === ALERT_VARIANTS.ERROR,
                      "hover:bg-attention-weakest-hover focus-visible:ring-attention-stronger focus-visible:ring-offset-attention-weakest":
                        variant === ALERT_VARIANTS.WARNING,
                      "hover:bg-brand-weakest-hover focus-visible:ring-brand-stronger focus-visible:ring-offset-brand-weakest":
                        variant === ALERT_VARIANTS.INFO,
                    }
                  )}
                >
                  <span className="sr-only">Alert Dismiss</span>
                </WrappedButton>
              </div>
            )}
          </div>
        </div>
      </Transition>
    </AlertContextData.Provider>
  );
};

Alert.propTypes = {
  /** Whether to show a variant border on the left */
  accentBorder: PropTypes.bool,

  /** Node containing the content that will be displayed within the Alert. */
  children: PropTypes.node.isRequired,

  /** Callback function onClick of dismiss alert */
  dismissCallback: PropTypes.func,

  /** Custom icon for the alert. If not specified, variant based icon will be rendered by default */
  icon: PropTypes.node,

  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,

  /** Whether to show a dismiss button */
  isDismiss: PropTypes.bool,

  /** The link navigation from the alert. Recommended to use AlertLink */
  link: PropTypes.node,

  /** Whether the alert should be shown or hidden */
  show: PropTypes.bool,

  /** The severity of the alert. This defines the color and icon used */
  variant: PropTypes.oneOf(Object.values(ALERT_VARIANTS)),

  /** A custom CSS class name to style the Alert Component. */
  wrapperClassName: PropTypes.string,
};

export default Alert;
