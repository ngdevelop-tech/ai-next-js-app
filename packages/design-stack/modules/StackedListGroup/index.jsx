/**
 * @typedef {Object} StackedListGroupProps
 * @property {React.ReactNode} children - The content to be rendered within the list group. Typically, this will be a list of `StackedListItem` components.
 * @property {React.ReactNode} [heading] - An optional heading element to display above the list. Can be a string or any valid React node.
 * @property {string} [id] - An optional unique identifier to apply to the root `div` element of the component. Useful for targeting the component with CSS or JavaScript.
 * @property {boolean} [isCard=false] - If `true`, the list group will be styled with a card-like appearance (shadow and rounded corners). Defaults to `false`.
 * @property {string} [wrapperClassName] - Optional CSS class names to apply to the `ul` element wrapping the list items. Useful for custom styling.
 */

import React, { isValidElement } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * `StackedListGroup` is a container component used to group related `StackedListItem` components.
 * It provides options for adding a heading, applying card styling, and customizing the wrapper element's class.
 *
 * @component
 * @param {StackedListGroupProps} props - The props for the StackedListGroup component.
 *
 * @example
 * // Basic usage with list items
 * <StackedListGroup>
 *   <StackedListItem>Item 1</StackedListItem>
 *   <StackedListItem>Item 2</StackedListItem>
 * </StackedListGroup>
 *
 * @example
 * // With a heading and card styling
 * <StackedListGroup heading="My List" isCard={true}>
 *   <StackedListItem>Item A</StackedListItem>
 *   <StackedListItem>Item B</StackedListItem>
 * </StackedListGroup>
 *
 * @see StackedListItem
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stackedlist--avatar-groups-with-actions Storybook}
 * @see {@link https://zeroheight.com/023d5159d/p/0614e9-stacked-lists/b/4635b4 Zeroheight}
 *
 * @accessibility
 * - The `heading` prop, if used, renders a `<strong>` tag. Ensure the heading level is appropriate within the page structure.
 * - The list itself is rendered using a `<ul>` element, which is semantically correct for lists.
 * - Ensure child `StackedListItem` components are accessible.
 * - If providing an `id`, ensure it is unique within the document.
 */
const StackedListGroup = ({
  children,
  heading = null,
  id = null,
  isCard = false,
  wrapperClassName = "",
}) => (
  <div {...(id !== null && { id })}>
    {heading && (
      <strong className="sticky top-0 z-100 block border-y border-neutral-default bg-neutral-strong px-6 py-1 text-sm font-medium text-neutral-weaker">
        {heading}
      </strong>
    )}
    <ul
      className={twClassNames(
        "divide-y divide-neutral-default bg-neutral-default",
        {
          "shadow rounded-md": isCard,
        },
        wrapperClassName
      )}
    >
      {React.Children.map(children, child => {
        if (isValidElement(child))
          return React.cloneElement(child, {
            isCard,
          });
        return child;
      })}
    </ul>
  </div>
);

StackedListGroup.propTypes = {
  /**
   * The children elements to be rendered within the list group.
   * This prop is required and typically expects `StackedListItem` components or other valid React nodes.
   * @type {React.ReactNode}
   * @required
   */
  children: PropTypes.node.isRequired,

  /**
   * An optional heading to display sticky at the top of the stacked list group.
   * Can be a simple string or any complex React node.
   * @type {React.ReactNode}
   */
  heading: PropTypes.node,

  /**
   * An optional unique identifier for the root `div` element of the component.
   * Useful for accessibility (e.g., `aria-labelledby`) or targeting via tests or CSS.
   * @type {string}
   */
  id: PropTypes.string,

  /**
   * Determines whether the list group should be styled as a card, adding shadow and rounded corners.
   * Set to `true` to enable card styling.
   * @type {boolean}
   * @default false
   */
  isCard: PropTypes.bool,

  /**
   * Optional additional CSS class names to apply to the `ul` element that wraps the list items.
   * Allows for further customization of the list's appearance.
   * @type {string}
   * @default ''
   */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stackedlist--avatar-groups-with-actions
 * @zeroHeight https://zeroheight.com/023d5159d/p/0614e9-stacked-lists/b/4635b4
 * @end
 */

export default StackedListGroup;
