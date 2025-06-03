/**
 * @typedef {Object} PannableContainerProps
 * @property {React.ReactNode} children - The content to be rendered inside the pannable container. This content will typically exceed the container's width, enabling horizontal panning.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the container element for custom styling.
 */

import React, { forwardRef } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { usePannableContainer } from "./usePannableContainer";

/**
 * A container component that allows users to pan horizontally through its content using mouse drag.
 * It's useful for displaying wide content like code blocks or tables within a constrained area.
 *
 * @component
 * @example
 * ```jsx
 * <PannableContainer wrapperClassName="my-custom-styles">
 *   <pre><code>{veryLongCodeString}</code></pre>
 * </PannableContainer>
 * ```
 *
 * @accessibility
 * The component uses `aria-hidden="true"` as it primarily provides a mouse-based interaction enhancement.
 * Ensure the underlying content is accessible and potentially provide alternative navigation methods if needed.
 * The cursor changes to indicate grabbability (`cursor-grab`, `cursor-grabbing`).
 *
 * @type {React.ForwardRefExoticComponent<PannableContainerProps & React.RefAttributes<HTMLDivElement>>}
 */
const PannableContainer = forwardRef(
  ({ children, wrapperClassName = "" }, ref) => {
    const {
      handleMouseLeave,
      handleMouseUp,
      handleMouseDown,
      handleMouseMove,
      scrollRef,
      clicking,
    } = usePannableContainer({ ref });
    return (
      <div
        aria-hidden
        ref={scrollRef}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={twClassNames(
          "relative overflow-hidden",
          {
            "cursor-pointer": !clicking,
            "cursor-grab": clicking,
          },
          wrapperClassName
        )}
      >
        {children}
      </div>
    );
  }
);

PannableContainer.propTypes = {
  /** The content to be rendered inside the pannable container. This content will typically exceed the container's width, enabling horizontal panning. */
  children: PropTypes.node.isRequired,
  /** Optional CSS class name(s) to apply to the container element for custom styling. */
  wrapperClassName: PropTypes.string,
};

export default PannableContainer;
