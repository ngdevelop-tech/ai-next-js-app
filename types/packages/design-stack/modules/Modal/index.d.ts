/**
 * @typedef {Object} ModalProps
 * @property {string} [ariaLabel='Modal'] - Provides an accessible name for the modal dialog. Defaults to "Modal".
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the Modal
 * @property {string} [dialogWrapperClassName=''] - Custom CSS class name applied to the outermost element (`Dialog`) of the Modal.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {(event?: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => void} onClose? - Callback function invoked when the modal requests to be closed (e.g., close button click, overlay click if `shouldCloseOnOverlayClick` is true, or Escape key press).
 * @property {(event?: React.MouseEvent<HTMLDivElement>) => void} onOverlayClick? - Callback function invoked specifically when the modal overlay (the backdrop) is clicked.
 * @property {boolean} [shouldCloseOnOverlayClick=true] - Determines if the modal should close when the overlay is clicked.
 * @property {boolean} [show=false] - Controls the visibility of the modal. Set to `true` to show the modal, `false` to hide it.
 * @property {'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'} [size='lg'] - Defines the maximum width of the modal. Accepts predefined size keys.
 * @property {string} [wrapperClassName=''] - Custom CSS class name applied to the `Dialog.Description` element which wraps the `children`.
 */
import React from "react";
/**
 * A Modal component for displaying content in a layer above the main page.
 * It includes features like transitions, overlay click handling, and customizable sizing.
 *
 * @example
 * ```jsx
 * import React, { useState } from 'react';
 * import { Modal, Button } from '@browserstack/design-stack';
 *
 * function MyComponent() {
 *   const [isOpen, setIsOpen] = useState(false);
 *
 *   return (
 *     <>
 *       <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
 *       <Modal
 *         show={isOpen}
 *         onClose={() => setIsOpen(false)}
 *         ariaLabel="Example Modal"
 *         size="md"
 *       >
 *         <div className="p-4">
 *           <h3 className="text-lg font-medium leading-6 text-gray-900">Modal Title</h3>
 *           <div className="mt-2">
 *             <p className="text-sm text-gray-500">
 *               This is the content of the modal.
 *             </p>
 *           </div>
 *           <div className="mt-4">
 *             <Button variant="secondary" onClick={() => setIsOpen(false)}>
 *               Close
 *             </Button>
 *           </div>
 *         </div>
 *       </Modal>
 *     </>
 *   );
 * }
 * ```
 *
 * @see https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-modal--centered-with-container-scroll Storybook - Modal
 * @see https://zeroheight.com/023d5159d/p/191258-modal/b/34324a Zeroheight - Modal
 *
 * @accessibility
 * - Uses `Dialog` from Headless UI, which handles ARIA attributes (`role="dialog"`, `aria-modal="true"`) automatically.
 * - Manages focus trapping within the modal.
 * - Allows setting a custom `ariaLabel` for better screen reader announcements.
 * - Closes on 'Escape' key press.
 *
 * @type {React.ForwardRefExoticComponent<ModalProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const Modal: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-modal--centered-with-container-scroll
 * @zeroHeight https://zeroheight.com/023d5159d/p/191258-modal/b/34324a
 * @end
 */
export default Modal;
