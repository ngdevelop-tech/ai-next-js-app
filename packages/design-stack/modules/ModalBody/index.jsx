/**
 * Represents the main content area within a Modal component.
 * It handles vertical scrolling automatically when the content exceeds the available space.
 *
 * @typedef {Object} ModalBodyProps
 * @property {React.ReactNode} children - The content to be rendered inside the modal body.
 * @property {boolean} [condensedPaddingBottom=false] - If true, removes the default bottom padding. Useful when the last element in the body has its own margin or padding.
 * @property {boolean} [condensedPaddingTop=false] - If true, removes the default top padding. Useful when the first element in the body has its own margin or padding.
 * @property {string} [id] - Optional unique identifier for the modal body container element.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the modal body container for custom styling.
 */

import React, { useEffect, useRef, useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * `ModalBody` component renders the main content area of a Modal.
 * It automatically enables vertical scrolling if the content overflows.
 *
 * @component
 * @type {React.FC<ModalBodyProps>}
 *
 * @example
 * <Modal isOpen={true} onClose={() => {}}>
 *   <ModalHeader title="Modal Title" />
 *   <ModalBody>
 *     <p>This is the main content of the modal.</p>
 *     <p>It can contain any valid React nodes.</p>
 *     {Array.from({ length: 20 }).map((_, i) => <p key={i}>Scrollable content line {i + 1}</p>)}
 *   </ModalBody>
 *   <ModalFooter>
 *     <Button appearance="primary">Confirm</Button>
 *   </ModalFooter>
 * </Modal>
 *
 * @see Modal
 * @see ModalHeader
 * @see ModalFooter
 *
 * @accessibility
 * When the content becomes scrollable, the component automatically adds `role="region"` and `aria-label="Scrollable content"`
 * to the body container to improve accessibility for screen reader users.
 */
const ModalBody = ({
  children,
  condensedPaddingBottom = false,
  condensedPaddingTop = false,
  id = null,
  wrapperClassName = "",
}) => {
  const bodyRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (bodyRef.current) {
        setIsScrollable(
          bodyRef.current.scrollHeight > bodyRef.current.clientHeight
        );
      }
    };

    checkScrollable();

    // Set up resize observer
    const resizeObserver = new ResizeObserver(checkScrollable);
    if (bodyRef.current) {
      resizeObserver.observe(bodyRef.current);
    }

    window.addEventListener("resize", checkScrollable);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", checkScrollable);
    };
  }, [children]);

  return (
    <div
      ref={bodyRef}
      {...(id !== null && { id })}
      className={twClassNames(
        "flex-1 overflow-y-auto p-6",
        {
          "pt-0": condensedPaddingTop,
          "pb-0": condensedPaddingBottom,
        },
        wrapperClassName
      )}
      role={isScrollable ? "region" : undefined}
      aria-label={isScrollable ? "Scrollable content" : undefined}
    >
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  /** The primary content to be displayed within the modal body. Can be any valid React node. */
  children: PropTypes.node.isRequired,
  /** If true, removes the default bottom padding (p-6) from the modal body. */
  condensedPaddingBottom: PropTypes.bool,
  /** If true, removes the default top padding (p-6) from the modal body. */
  condensedPaddingTop: PropTypes.bool,
  /** Optional `id` attribute for the modal body's root `div` element. */
  id: PropTypes.string,
  /** Optional CSS class(es) to apply to the modal body's root `div` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-modal--centered-with-container-scroll
 * @zeroHeight https://zeroheight.com/023d5159d/p/191258-modal/b/34324a
 * @end
 */

export default ModalBody;
