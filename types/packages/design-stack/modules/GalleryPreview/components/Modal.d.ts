/**
 * Properties for the Modal component.
 * @typedef {Object} ModalProps
 * @property {string} [backdropWrapperClassName] - Optional CSS class name to apply to the modal's backdrop overlay element. @default ''
 * @property {React.ReactNode} [children] - The content to be rendered inside the modal dialog panel. @default null
 * @property {string} [dialogWrapperClassName] - Optional CSS class name to apply to the main `Dialog` component wrapper. @default ''
 * @property {(event?: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => void} [onClose] - Optional callback function invoked when the modal requests to be closed (e.g., via the Headless UI Dialog's default close behavior like Escape key). Note: This component doesn't render a close button itself.
 * @property {(event?: React.MouseEvent<HTMLDivElement>) => void} [onOverlayClick] - Optional callback function invoked when the backdrop overlay is clicked. Note: Headless UI Dialog calls `onClose` on overlay click by default. This prop might be redundant or intended for specific logic alongside `onClose`.
 * @property {boolean} [show=false] - Controls the visibility of the modal. If `true`, the modal and its backdrop are rendered and transitioned in. @default false
 * @property {string} [wrapperClassName] - Optional CSS class name to apply to the `Dialog.Panel` which wraps the `children`. @default ''
 */
import React from "react";
/**
 * A generic Modal component built using Headless UI's Dialog and Transition components.
 * It provides a basic structure for modal dialogs with transitions and backdrop.
 *
 * @component
 * @param {ModalProps} props - Properties passed to the Modal component.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the underlying Headless UI Dialog element.
 * @returns {React.ReactElement | null} The rendered Modal component or null if `show` is false.
 */
declare const Modal: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default Modal;
