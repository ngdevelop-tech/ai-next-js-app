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

import React, { forwardRef, Fragment } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

/**
 * A generic Modal component built using Headless UI's Dialog and Transition components.
 * It provides a basic structure for modal dialogs with transitions and backdrop.
 *
 * @component
 * @param {ModalProps} props - Properties passed to the Modal component.
 * @param {React.Ref<HTMLDivElement>} ref - Forwarded ref to the underlying Headless UI Dialog element.
 * @returns {React.ReactElement | null} The rendered Modal component or null if `show` is false.
 */
const Modal = forwardRef(
  (
    {
      backdropWrapperClassName,
      children,
      dialogWrapperClassName,
      onClose,
      onOverlayClick,
      show,
      wrapperClassName,
    },
    ref
  ) => (
    <Transition.Root show={show}>
      <Dialog
        as="div"
        className={twClassNames("relative z-400", dialogWrapperClassName)}
        onClose={() => {
          if (onClose) onClose();
          if (onOverlayClick) onOverlayClick();
        }}
        initialFocus={ref}
      >
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={twClassNames(
              "fixed inset-0 bg-neutral-inverse-weakest transition-opacity",
              backdropWrapperClassName
            )}
          />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel
                className={twClassNames(
                  "relative flex max-h-[85vh] flex-col rounded-lg bg-neutral-default text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl",
                  wrapperClassName
                )}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
);

Modal.propTypes = {
  /** A custom CSS class name to style the backdrop of Modal. */
  backdropWrapperClassName: PropTypes.string,
  /** Node containing the content that will be displayed within the Modal */
  children: PropTypes.node,
  /** A custom CSS class name to style the wrapper of the component. */
  dialogWrapperClassName: PropTypes.string,
  /** Callback fired when close button is clicked. */
  onClose: PropTypes.func,
  /** Callback fired when overlay is clicked. */
  onOverlayClick: PropTypes.func,
  /** Boolean value that toggles if we want to show slideover or not. */
  show: PropTypes.bool,
  /** A custom CSS class name to style the wrapper of the children. */
  wrapperClassName: PropTypes.string,
};
Modal.defaultProps = {
  backdropWrapperClassName: "",
  children: null,
  dialogWrapperClassName: "",
  onClose: null,
  onOverlayClick: null,
  show: false,
  wrapperClassName: "",
};

export default Modal;
