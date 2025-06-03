/**
 * @typedef {Object} PannableContainerProps
 * @property {React.ReactNode} children - The content to be rendered inside the pannable container. This content will typically exceed the container's width, enabling horizontal panning.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the container element for custom styling.
 */
import React from "react";
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
declare const PannableContainer: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default PannableContainer;
