/**
 * Represents the properties for the GalleryMediaActionbar component.
 *
 * @typedef {Object} GalleryMediaActionbarProps
 * @property {string} [id] - Optional unique identifier to be added to the root element of the component.
 * @property {React.ReactNode} [primaryActions] - Optional React nodes representing the primary actions (e.g., buttons, links) to be displayed, typically on the left side.
 * @property {React.ReactNode} [secondaryActions] - Optional React nodes representing the secondary actions (e.g., buttons, links) to be displayed, typically on the right side.
 * @property {boolean} [visible=false] - Controls the visibility of the action bar. If `true`, the action bar is rendered; otherwise, it's hidden. Defaults to `false`.
 * @property {string} [wrapperClassName] - Optional custom CSS class name(s) to be applied to the main wrapper `div` element for custom styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * GalleryMediaActionbar component displays a contextual action bar, typically shown when items in a gallery are selected.
 * It provides designated areas for primary and secondary actions.
 *
 * @component
 * @param {GalleryMediaActionbarProps} props - The props for the GalleryMediaActionbar component.
 * @returns {React.ReactElement | null} The rendered GalleryMediaActionbar component or null if not visible.
 * @example
 * <GalleryMediaActionbar
 *   visible={true}
 *   primaryActions={<Button>Delete</Button>}
 *   secondaryActions={<Button variant="secondary">Download</Button>}
 * />
 */
const GalleryMediaActionbar = ({
  id = null,
  primaryActions = null,
  secondaryActions = null,
  visible = false,
  wrapperClassName = "",
}) =>
  visible ? (
    <div
      className={twClassNames(
        "mb-5 flex w-full items-center justify-between border-b border-neutral-strong py-4",
        wrapperClassName
      )}
      {...(id !== null && { id })}
    >
      {primaryActions}
      {secondaryActions}
    </div>
  ) : null;

GalleryMediaActionbar.propTypes = {
  /** Optional unique identifier to be added to the root element of the component. */
  id: PropTypes.string,
  /** Optional React nodes representing the primary actions (e.g., buttons, links) to be displayed, typically on the left side. */
  primaryActions: PropTypes.node,
  /** Optional React nodes representing the secondary actions (e.g., buttons, links) to be displayed, typically on the right side. */
  secondaryActions: PropTypes.node,
  /** Controls the visibility of the action bar. If `true`, the action bar is rendered; otherwise, it's hidden. Defaults to `false`. */
  visible: PropTypes.bool,
  /** Optional custom CSS class name(s) to be applied to the main wrapper `div` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-gallery--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/4898d4-media-gallery/b/53ba1e
 * @end
 */

export default GalleryMediaActionbar;
