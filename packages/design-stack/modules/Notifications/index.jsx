/**
 * Represents a notification message displayed to the user, often used for temporary alerts or updates.
 * This component manages its own focus and provides accessibility features like ARIA attributes.
 *
 * @component
 * @example
 * // Basic notification
 * <Notifications title="Update Available" description="A new version has been released." />
 *
 * @example
 * // Notification with actions and close handler
 * <Notifications
 *   title="File Uploaded"
 *   description="Your document 'report.pdf' was successfully uploaded."
 *   headerIcon={<MdCheckCircle />}
 *   actionButtons={(toast) => (
 *     <>
 *       <Button appearance="primary" size="small" onClick={() => console.log('View file', toast?.id)}>View</Button>
 *       <Button appearance="secondary" size="small" onClick={() => console.log('Dismiss', toast?.id)}>Dismiss</Button>
 *     </>
 *   )}
 *   handleClose={(toast) => console.log('Notification closed:', toast?.id)}
 * />
 *
 * @example
 * // Condensed notification
 * <Notifications
 *   title="Quick Action Required"
 *   isCondensed={true}
 *   actionButtons={(toast) => <Button appearance="minimal" size="small" onClick={() => console.log('Action taken', toast?.id)}>Action</Button>}
 *   handleClose={(toast) => console.log('Condensed notification closed:', toast?.id)}
 * />
 *
 * @typedef {Object} NotificationsProps
 * @property {(toast: object | null) => React.ReactNode} [actionButtons] - A render prop function that receives the toast context (if available) and should return React nodes representing action buttons. Displayed below the description in the standard view or next to the title in the condensed view.
 * @property {React.ReactNode} [body] - **Internal Use Only:** The main content node for the component. Not intended for general consumption.
 * @property {string} [bodyClassName] - **Internal Use Only:** CSS class name for the body wrapper. Not intended for general consumption.
 * @property {string} [description] - A short description or additional information related to the notification. Displayed below the title. Not visible when `isCondensed` is true.
 * @property {React.ReactNode} [footer] - **Internal Use Only:** The footer content node for the component. Not intended for general consumption.
 * @property {string} [footerClassName] - **Internal Use Only:** CSS class name for the footer wrapper. Not intended for general consumption.
 * @property {(toast: object | null) => void} [handleClose] - Callback function triggered when the close (cross) button is clicked. Receives the toast context (if available). It also handles returning focus to the element that was active before the notification appeared.
 * @property {React.ReactNode} [headerIcon] - An icon element to be displayed to the left of the title and description. Not visible when `isCondensed` is true.
 * @property {string} [id] - A unique identifier for the root element of the notification. Useful for testing or specific targeting.
 * @property {boolean} [isCondensed=false] - If true, displays a condensed version showing only the title, close button, and action buttons (if provided, placed next to the title). Description and header icon are hidden.
 * @property {string} [title] - The main title or heading for the notification. Always visible.
 * @property {string} [wrapperClassName] - Custom CSS class name(s) to apply to the root `div` element of the component for additional styling.
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-notifications--basic|Storybook Notification}
 * @see {@link https://zeroheight.com/023d5159d/p/39e376-notification/b/4635b4|Zeroheight Notification}
 *
 * @accessibility
 * - The component root has `role="alert"` and `aria-live="polite"` to announce the notification content to screen readers.
 * - The component container is focusable (`tabIndex={-1}`) and receives focus when rendered to draw attention.
 * - The close button has an `aria-label` ("Close") for screen readers.
 * - When the notification is closed via the `handleClose` function, focus is programmatically returned to the element that had focus before the notification appeared, ensuring a smooth user experience.
 */

import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

import { NotificationsContextData } from "./context";

/**
 * @type {React.ForwardRefExoticComponent<NotificationsProps & React.RefAttributes<HTMLDivElement>>}
 */
const Notifications = forwardRef(
  (
    {
      actionButtons = null,
      body = null,
      bodyClassName = "",
      description = "",
      footer = null,
      footerClassName = "",
      handleClose = null,
      headerIcon = null,
      id = null,
      isCondensed = false,
      title = "",
      wrapperClassName = "",
    },
    ref
  ) => {
    const toastCtx = useContext(NotificationsContextData);
    let toastRef = useRef(null);
    toastRef = ref || toastRef;

    const [lastActiveElement, setLastActiveElement] = useState(null);

    useEffect(() => {
      setLastActiveElement(document.activeElement);
    }, []);

    useEffect(() => {
      if (toastRef && toastRef.current) {
        toastRef.current.focus(); // Focus on the toast when it renders
      }
    }, [toastRef]);

    return (
      <div
        ref={toastRef}
        {...(id !== null && { id })}
        className={twClassNames(
          "pointer-events-auto z-700 rounded-lg bg-raised-default shadow-lg ring-1 ring-neutral-default focus-visible:outline-none",
          wrapperClassName
        )}
        role="alert"
        tabIndex={-1}
        aria-live="polite"
      >
        <div className="flex w-full items-start p-4 ">
          {!isCondensed && headerIcon && (
            <div className="mr-3 shrink-0">{headerIcon}</div>
          )}

          <div className={twClassNames("w-0 flex-1 pt-0.5")}>
            <div className="line-clamp-2 break-words text-sm font-medium text-neutral-default">
              {title}
            </div>

            {!isCondensed && description && (
              <div className="mt-1 break-keep text-sm text-neutral-weaker">
                {description}
              </div>
            )}

            {!isCondensed && actionButtons && (
              <div className={twClassNames("mt-3 flex space-x-3")}>
                {actionButtons?.(toastCtx?.toast || null)}
              </div>
            )}
          </div>

          {isCondensed && actionButtons && (
            <div className="ml-3 flex shrink-0">
              {actionButtons?.(toastCtx?.toast || null)}
            </div>
          )}

          <button
            type="button"
            className="ml-4 rounded-md bg-raised-default text-neutral-weakest hover:bg-raised-default-hover hover:text-neutral-weaker focus:outline-none focus:ring-2 focus:ring-brand-strong focus:ring-offset-2"
            onClick={() => {
              if (handleClose) {
                handleClose(toastCtx?.toast || null);
                lastActiveElement.focus();
              }
            }}
            aria-label="Close" // Add aria-label for accessibility
          >
            <span className="sr-only">Close</span>
            <MdClose
              className="h-5 w-5 icon-neutral-weak hover:icon-neutral-default"
              aria-hidden="true"
            />
          </button>
        </div>
        {body && (
          <div
            className={twClassNames(
              "p-4 ",
              {
                "rounded-md": !footer,
              },
              bodyClassName
            )}
          >
            {body}
          </div>
        )}
        {footer && (
          <div className={twClassNames("rounded-b-md p-4", footerClassName)}>
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Notifications.propTypes = {
  actionButtons: PropTypes.func,
  body: PropTypes.node,
  bodyClassName: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.node,
  footerClassName: PropTypes.string,
  handleClose: PropTypes.func,
  headerIcon: PropTypes.node,
  id: PropTypes.string,
  isCondensed: PropTypes.bool,
  title: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-notifications--basic
 * @zeroHeight https://zeroheight.com/023d5159d/p/39e376-notification/b/4635b4
 * @end
 */

export default Notifications;
