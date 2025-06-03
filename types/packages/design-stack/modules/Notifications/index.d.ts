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
import React from "react";
/**
 * @type {React.ForwardRefExoticComponent<NotificationsProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const Notifications: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-notifications--basic
 * @zeroHeight https://zeroheight.com/023d5159d/p/39e376-notification/b/4635b4
 * @end
 */
export default Notifications;
