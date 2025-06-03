/**
 * @typedef {Object} SidebarHeaderProps
 * @property {string} [brandImage] - The URL or path to the image representing the brand logo or icon displayed in the header. If provided, an `<img>` tag will be rendered.
 * @property {string} [brandImageClass] - Optional custom CSS class name(s) to apply custom styles specifically to the brand image (`<img>` tag).
 * @property {string} [brandImageContainerClass] - Optional custom CSS class name(s) to apply custom styles to the container `<div>` wrapping the brand image.
 * @property {React.ReactNode} [children] - Any valid React node(s) to be rendered within the sidebar header, typically placed below the brand image if present.
 * @property {string} [id] - Optional unique identifier to be applied to the root `<div>` element and potentially nested elements for testing or accessibility purposes.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * Renders the header section of a sidebar, optionally displaying a brand image and custom children content.
 *
 * @component
 * @example
 * // Example with brand image and children
 * <SidebarHeader
 *   brandImage="/path/to/logo.png"
 *   brandImageClass="custom-logo-style"
 *   id="main-sidebar-header"
 * >
 *   <UserProfile name="John Doe" />
 * </SidebarHeader>
 *
 * @example
 * // Example with only children
 * <SidebarHeader>
 *   <h3>Application Title</h3>
 * </SidebarHeader>
 *
 * @param {SidebarHeaderProps} props - The props for the SidebarHeader component.
 * @returns {React.ReactElement} The rendered sidebar header element.
 * @type {React.FC<SidebarHeaderProps>}
 */
const SidebarHeader = ({
  brandImage,
  brandImageClass,
  brandImageContainerClass,
  children,
  id,
}) => (
  <div {...(id !== null && { id })}>
    {brandImage?.length ? (
      <div
        className={twClassNames(
          "flex shrink-0 items-center px-2",
          brandImageContainerClass
        )}
        {...(id !== null && { id })}
      >
        <img
          className={twClassNames("h-8 w-auto", brandImageClass)}
          src={brandImage}
          alt="sidebar-nav-icon"
        />
      </div>
    ) : null}
    {children && (
      <div {...(id !== null && { id })} className="px-2 pt-1">
        {children}
      </div>
    )}
  </div>
);

SidebarHeader.propTypes = {
  /** The URL or path to the image representing the brand logo or icon displayed in the header. */
  brandImage: PropTypes.string,
  /** Optional custom CSS class name(s) to apply custom styles specifically to the brand image (`<img>` tag). */
  brandImageClass: PropTypes.string,
  /** Optional custom CSS class name(s) to apply custom styles to the container `<div>` wrapping the brand image. */
  brandImageContainerClass: PropTypes.string,
  /** Any valid React node(s) to be rendered within the sidebar header. */
  children: PropTypes.node,
  /** Optional unique identifier for the root element. */
  id: PropTypes.string,
};

SidebarHeader.defaultProps = {
  brandImage: "",
  brandImageClass: "",
  brandImageContainerClass: "",
  children: null,
  id: null,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigation--sidebarwith-brand-image
 * @zeroHeight https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4
 * @end
 */

export default SidebarHeader;
