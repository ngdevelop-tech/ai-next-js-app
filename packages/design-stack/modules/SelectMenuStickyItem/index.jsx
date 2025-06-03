/**
 * @typedef {Object} SelectMenuStickyItemProps
 * @property {React.ReactNode} [children] - The content to be rendered inside the sticky item container. Typically includes actionable elements like buttons or links related to the SelectMenu options.
 * @property {string} [id] - An optional unique identifier for the root `span` element. Useful for targeting the element for testing or specific styling.
 * @property {string} [wrapperClassName] - An optional CSS class name to apply custom styles to the root `span` element, allowing for visual customization beyond the default styles.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * `SelectMenuStickyItem` is a container component designed to hold content that should remain fixed
 * at the bottom of a `SelectMenu` component, typically used for actions like "Apply" or "Cancel".
 * It ensures that critical actions are always visible, even when the list of options is long.
 *
 * @component
 * @type {React.FC<SelectMenuStickyItemProps>}
 *
 * @param {SelectMenuStickyItemProps} props - The props for the component.
 *
 * @example
 * // Example usage within a SelectMenu
 * <SelectMenu>
 *   <SelectMenuList>
 *     // ... SelectMenuItem components ...
 *   </SelectMenuList>
 *   <SelectMenuStickyItem>
 *     <Button variant="primary">Apply</Button>
 *     <Button variant="secondary">Cancel</Button>
 *   </SelectMenuStickyItem>
 * </SelectMenu>
 *
 * @accessibility
 * Ensure that interactive elements placed within `SelectMenuStickyItem` (like buttons)
 * are focusable and have appropriate ARIA attributes if necessary, maintaining keyboard
 * navigation and screen reader compatibility within the parent `SelectMenu`.
 * The sticky nature itself doesn't inherently introduce accessibility issues, but the
 * contained elements must be accessible.
 *
 * @see See related components like `SelectMenu`, `SelectMenuList`, `SelectMenuItem`.
 */
const SelectMenuStickyItem = ({
  children = null,
  id = null,
  wrapperClassName = "",
}) => (
  <span
    className={twClassNames(
      "fixed bottom-0 left-0 w-full overflow-hidden rounded-b-md border border-neutral-default bg-raised-default py-1",
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    {children}
  </span>
);

SelectMenuStickyItem.propTypes = {
  /** The content to be rendered inside the sticky item container. Typically includes actionable elements. */
  children: PropTypes.node,
  /** An optional unique identifier for the root `span` element. */
  id: PropTypes.string,
  /** An optional CSS class name to apply custom styles to the root `span` element. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */

export default SelectMenuStickyItem;
