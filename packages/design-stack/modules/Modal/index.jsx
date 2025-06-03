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

import React, { forwardRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { MODAL_SIZE, MODAL_SIZE_CLASSES } from "./constants/modal";
import useModal from "./useModal";

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
const Modal = forwardRef(
  (
    {
      ariaLabel = "Modal",
      children = null,
      dialogWrapperClassName = "",
      id = null,
      onClose = null,
      onOverlayClick = null,
      shouldCloseOnOverlayClick = true,
      show = false,
      size = MODAL_SIZE.LG,
      wrapperClassName = "",
    },
    ref
  ) => {
    useModal({ show, onClose });

    return (
      <Transition.Root show={show}>
        <Dialog
          as="div"
          className={twClassNames("relative z-400", dialogWrapperClassName)}
          onClose={() => {
            if (shouldCloseOnOverlayClick && onClose) onClose();
          }}
          initialFocus={ref}
          aria-label={ariaLabel}
          onClick={e => {
            if (onOverlayClick) onOverlayClick();
            if (!shouldCloseOnOverlayClick) {
              e.stopPropagation();
            }
          }}
          ref={ref}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-inverse-weakest  opacity-75 transition-opacity" />
          </Transition.Child>

          <div
            className="fixed inset-0 overflow-y-auto"
            {...(id !== null && { id })}
          >
            <div className="flex min-h-full items-center justify-center p-4 text-center md:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-0 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-4 translate-y-0 scale-95"
              >
                <Dialog.Panel className="contents">
                  <Dialog.Description
                    className={twClassNames(
                      "relative flex max-h-[75vh] flex-col overflow-auto rounded-lg bg-neutral-default text-left shadow-xl transition-all sm:my-8 sm:w-full",
                      MODAL_SIZE_CLASSES[size],
                      wrapperClassName
                    )}
                    as="div"
                  >
                    {children}
                  </Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
);

Modal.propTypes = {
  /** Provides an accessible name for the modal dialog. Defaults to "Modal". */
  ariaLabel: PropTypes.string,
  /** Node containing the content that will be displayed within the Modal */
  children: PropTypes.node,
  /** Custom CSS class name applied to the outermost element (`Dialog`) of the Modal. */
  dialogWrapperClassName: PropTypes.string,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Callback function invoked when the modal requests to be closed (e.g., close button click, overlay click if `shouldCloseOnOverlayClick` is true, or Escape key press). */
  onClose: PropTypes.func,
  /** Callback function invoked specifically when the modal overlay (the backdrop) is clicked. */
  onOverlayClick: PropTypes.func,
  /** Determines if the modal should close when the overlay is clicked. */
  shouldCloseOnOverlayClick: PropTypes.bool,
  /** Controls the visibility of the modal. Set to `true` to show the modal, `false` to hide it. */
  show: PropTypes.bool,
  /** Values to decide the size of modal. */
  size: PropTypes.oneOf(Object.values(MODAL_SIZE)),
  /** Custom CSS class name applied to the `Dialog.Description` element which wraps the `children`. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-modal--centered-with-container-scroll
 * @zeroHeight https://zeroheight.com/023d5159d/p/191258-modal/b/34324a
 * @end
 */

export default Modal;
