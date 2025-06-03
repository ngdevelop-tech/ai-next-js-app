/**
 * @typedef {Object} StackedListItemProps
 * @property {React.ReactNode} [actions] - Optional actions or buttons associated with the list item, typically displayed on the right side. Accepts any valid React node.
 * @property {React.ReactNode} children - The main content of the list item. Can be a single node or an array of nodes.
 * @property {boolean} [focusParentOnChildFocused=false] - If true, applies focus styling to the entire list item when any interactive element within it receives focus. Useful for highlighting the active item.
 * @property {boolean} [hideContentInSmallWidth=false] - If true, hides the secondary content (when multiple children are provided) on smaller screen widths to optimize space.
 * @property {string} [id] - Optional unique identifier for the list item's root `li` element.
 * @property {boolean} [isCard=false] - If true, styles the list item with card-like appearance, including hover effects.
 * @property {string} [wrapperClassName] - Optional additional CSS class names to apply to the list item's root `li` element for custom styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import RenderChildren from "./components/RenderChildren";

/**
 * `StackedListItem` represents a single item within a `StackedList`.
 * It arranges content and optional actions in a flexible layout that adapts to different screen sizes.
 *
 * @component
 * @example
 * // Basic usage with text content
 * <StackedListItem>Item Content</StackedListItem>
 *
 * @example
 * // With multiple children and actions
 * <StackedListItem actions={<Button size="small">Action</Button>}>
 *   <Avatar name="John Doe" />
 *   <div>
 *     <p>John Doe</p>
 *     <p className="text-sm text-neutral-secondary-default">john.doe@example.com</p>
 *   </div>
 * </StackedListItem>
 *
 * @example
 * // As a card with focus behavior
 * <StackedListItem isCard focusParentOnChildFocused>
 *   <a href="#">Clickable Item Content</a>
 * </StackedListItem>
 *
 * @see StackedList - The parent component used to group `StackedListItem` components.
 * @accessibility
 * - Ensures proper list item semantics using the `<li>` tag.
 * - When `focusParentOnChildFocused` is true, provides visual feedback for keyboard navigation within the list.
 * @type {React.FC<StackedListItemProps>}
 */
const StackedListItem = ({
  actions = null,
  children,
  focusParentOnChildFocused = false,
  hideContentInSmallWidth = false,
  id = null,
  isCard = false,
  wrapperClassName = "",
}) => (
  <li
    className={twClassNames(
      "relative flex flex-wrap items-center overflow-hidden px-4 py-5",
      {
        "px-6 hover:bg-neutral-default-hover cursor-pointer": isCard,
        "[&:has(:focus-visible)]:ring-2 [&:has(:focus-visible)]:ring-inset [&:has(:focus-visible)]:ring-brand-strong cursor-pointer hover:bg-neutral-default-hover":
          focusParentOnChildFocused,
      },
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    <div className="block max-w-full flex-1 flex-wrap justify-between gap-3 md:flex">
      {children.length > 1 ? (
        <RenderChildren
          data={children}
          hideContentInSmallWidth={hideContentInSmallWidth}
        />
      ) : (
        children
      )}
    </div>
    {actions && <div className="shrink-0 pl-3">{actions}</div>}
  </li>
);

StackedListItem.propTypes = {
  /**
   * Optional actions or buttons associated with the list item.
   * Typically displayed on the right side. Accepts any valid React node (e.g., `<Button>`, `<IconButton>`).
   * @type {React.ReactNode}
   */
  actions: PropTypes.node,

  /**
   * The main content of the list item. This is required.
   * Can be a single React node or an array of nodes. If an array is provided,
   * the layout might adjust based on `hideContentInSmallWidth`.
   * @type {React.ReactNode}
   */
  children: PropTypes.node.isRequired,

  /**
   * If true, applies focus styling (e.g., a ring) to the entire list item
   * when any focusable element inside it (like a link or button) receives focus.
   * Defaults to `false`.
   * @type {boolean}
   */
  focusParentOnChildFocused: PropTypes.bool,

  /**
   * If true, hides secondary content elements (when `children` is an array)
   * on smaller viewports to save space. The definition of "secondary" depends
   * on the `RenderChildren` component's implementation. Defaults to `false`.
   * @type {boolean}
   */
  hideContentInSmallWidth: PropTypes.bool,

  /**
   * Optional unique identifier to apply to the root `<li>` element.
   * Useful for targeting the element for testing or specific styling.
   * @type {string}
   */
  id: PropTypes.string,

  /**
   * If true, styles the list item with a background on hover, giving it a
   * card-like interactive feel. Defaults to `false`.
   * @type {boolean}
   */
  isCard: PropTypes.bool,

  /**
   * Optional string of additional CSS class names to apply to the root `<li>` element.
   * Allows for further customization via Tailwind or custom CSS.
   * @type {string}
   */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stackedlist--avatar-groups-with-actions
 * @zeroHeight https://zeroheight.com/023d5159d/p/0614e9-stacked-lists/b/4635b4
 * @end
 */

export default StackedListItem;
