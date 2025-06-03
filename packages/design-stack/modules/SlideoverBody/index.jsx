/**
 * @typedef {Object} SlideoverBodyProps
 * @property {React.ReactNode} [children] - The primary content to be rendered within the slideover body.
 * @property {string} [id] - Optional unique identifier for the root `div` element.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the root `div` element for custom styling.
 */

import React, { useCallback, useEffect, useRef } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

const INTERACTIVE_ELEMENTS_SELECTOR = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex="0"]',
].join(", ");

/**
 * `SlideoverBody` component renders the main content area of a Slideover.
 *
 * It manages focus behavior internally: if the content area contains interactive elements
 * (like buttons, links, inputs), the body itself is not focusable. If it contains only static content,
 * the body becomes focusable (`tabindex="0"`) to ensure keyboard users can scroll the content if needed.
 *
 * @component
 * @param {SlideoverBodyProps} props - The props for the SlideoverBody component.
 *
 * @example
 * // Basic usage
 * <SlideoverBody>
 *   <p>This is the main content of the slideover.</p>
 *   <button>Click Me</button>
 * </SlideoverBody>
 *
 * @example
 * // With custom styling and ID
 * <SlideoverBody id="my-slideover-content" wrapperClassName="custom-padding">
 *   <p>Static content only.</p>
 * </SlideoverBody>
 *
 * @accessibility
 * - Uses `role="region"` and `aria-label="Slideover content"` to define the content area semantically.
 * - Dynamically manages `tabindex` based on the presence of interactive child elements to ensure proper keyboard navigation and scrollability.
 *
 * @type {React.FC<SlideoverBodyProps>}
 */
const SlideoverBody = ({
  id = null,
  children = null,
  wrapperClassName = "",
}) => {
  const bodyRef = useRef(null);

  const updateFocusability = useCallback(() => {
    const element = bodyRef.current;
    if (!element) return;

    const hasInteractiveElements = Array.from(element.children).some(
      child =>
        child.matches?.(INTERACTIVE_ELEMENTS_SELECTOR) ||
        child.querySelector?.(INTERACTIVE_ELEMENTS_SELECTOR)
    );

    const shouldBeFocusable = !hasInteractiveElements;
    const isFocusable = element.getAttribute("tabindex") === "0";

    if (shouldBeFocusable !== isFocusable) {
      if (shouldBeFocusable) {
        element.setAttribute("tabindex", "0");
      } else {
        element.removeAttribute("tabindex");
      }
    }
  }, []);

  useEffect(() => {
    updateFocusability();

    const observer = new MutationObserver(updateFocusability);
    const element = bodyRef.current;

    if (element) {
      observer.observe(element, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["disabled", "tabindex"],
      });
    }

    return () => observer.disconnect();
  }, [updateFocusability]);

  return (
    <div
      ref={bodyRef}
      className={twClassNames("flex-1 overflow-y-auto py-4", wrapperClassName)}
      role="region"
      aria-label="Slideover content"
      {...(id && { id })}
    >
      {children}
    </div>
  );
};

SlideoverBody.propTypes = {
  /** The primary content to be rendered within the slideover body. */
  children: PropTypes.node,
  /** Optional unique identifier for the root `div` element. */
  id: PropTypes.string,
  /** Optional CSS class name(s) to apply to the root `div` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-slideover--resizeable-example
 * @zeroHeight https://zeroheight.com/023d5159d/p/544a29-slide-over/b/051181
 * @end
 */

export default React.memo(SlideoverBody);
