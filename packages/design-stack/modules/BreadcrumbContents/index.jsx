/**
 * Represents the properties for the BreadcrumbContents component.
 * Each BreadcrumbContents typically represents a single item within a Breadcrumb trail.
 *
 * @typedef {Object} BreadcrumbContentsProps
 * @property {React.ReactNode} [children] - The primary content to be displayed for this breadcrumb item. This could be text, a link, or any other React node.
 * @property {string} [id] - An optional unique identifier to be applied to the root `<li>` element of the component. Useful for testing or accessibility purposes.
 * @property {boolean} [isActive=false] - Indicates if this breadcrumb item represents the currently active page or section. Active items are typically styled differently and may not be interactive links. Defaults to `false`.
 * @property {string} [labelClassName] - An optional CSS class name to apply specifically to the `BreadcrumbText` component wrapping the `children`. Allows for custom styling of the breadcrumb item's text content.
 * @property {React.ReactNode} [seperatorIcon=<MdChevronRight />] - The icon component or node to be used as a visual separator between breadcrumb items. Defaults to the `MdChevronRight` icon.
 * @property {boolean} [showSeperatorIcon=true] - Determines whether the `seperatorIcon` should be displayed after this breadcrumb item. Typically set to `false` for the last item in the breadcrumb trail. Defaults to `true`.
 * @property {string} [wrapperClassName] - An optional CSS class name to apply to the root `<li>` element of the component. Allows for custom styling of the entire breadcrumb item container.
 */

import React from "react";
import { MdChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import BreadcrumbText from "../BreadcrumbText";

/**
 * BreadcrumbContents component represents a single item within a breadcrumb navigation trail.
 * It displays the provided children as the item's content and optionally shows a separator icon.
 * The styling and behavior can be customized via props like `isActive`, `labelClassName`, and `wrapperClassName`.
 *
 * @component
 * @param {BreadcrumbContentsProps} props - The props for the BreadcrumbContents component.
 * @returns {React.ReactElement} The rendered list item element representing a breadcrumb item.
 *
 * @example
 * // Basic usage
 * <BreadcrumbContents>Home</BreadcrumbContents>
 *
 * @example
 * // Active breadcrumb item
 * <BreadcrumbContents isActive>Products</BreadcrumbContents>
 *
 * @example
 * // Custom separator and class names
 * <BreadcrumbContents
 *   seperatorIcon={<CustomIcon />}
 *   labelClassName="my-label-style"
 *   wrapperClassName="my-wrapper-style"
 * >
 *   Category
 * </BreadcrumbContents>
 */
const BreadcrumbContents = ({
  children = null,
  id = null,
  isActive = false,
  labelClassName = "",
  seperatorIcon = <MdChevronRight />,
  showSeperatorIcon = true,
  wrapperClassName = "",
}) => (
  <li
    {...(id !== null && { id })}
    className={twClassNames(
      "mr-4 flex text-sm font-medium hover:text-neutral-weak",
      {
        "text-neutral-weak cursor-text font-medium": isActive,
        "text-neutral-weaker cursor-pointer": !isActive,
      },
      wrapperClassName
    )}
  >
    <BreadcrumbText
      isActive
      wrapperClassName={twClassNames("mr-2", labelClassName)}
    >
      {children}
    </BreadcrumbText>
    {!isActive && showSeperatorIcon ? (
      <BreadcrumbText
        aria-hidden
        isActive
        wrapperClassName="ml-2 flex items-center cursor-default icon-neutral-weaker hover:icon-neutral-weaker w-5 justify-center"
      >
        {seperatorIcon}
      </BreadcrumbText>
    ) : null}
  </li>
);

BreadcrumbContents.propTypes = {
  /** Node containing the content that will be displayed within the BreadcrumbContents. */
  children: PropTypes.node,

  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,

  /** Indicates if this breadcrumb item represents the currently active page or section. */
  isActive: PropTypes.bool,

  /** An optional CSS class name to apply specifically to the `BreadcrumbText` component wrapping the `children`. */
  labelClassName: PropTypes.string,

  /** The icon component or node to be used as a visual separator between breadcrumb items. */
  seperatorIcon: PropTypes.node,

  /** Determines whether the `seperatorIcon` should be displayed after this breadcrumb item. */
  showSeperatorIcon: PropTypes.bool,

  /** An optional CSS class name to apply to the root `<li>` element of the component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-breadcrumbcontainer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96c229-breadcrumbs/b/4635b4
 * @end
 */

export default BreadcrumbContents;
