/**
 * @typedef {Object} ComboboxStickyItemProps
 * @property {React.ReactNode} [children=null] - The content to be rendered inside the sticky item container. Typically used for actions or summaries related to the combobox options.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the root `span` element for custom styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * A container component designed to stick to the bottom of a Combobox list.
 * It's useful for displaying persistent actions or information related to the combobox options.
 *
 * @component ComboboxStickyItem
 * @type {React.FC<ComboboxStickyItemProps>}
 */
const ComboboxStickyItem = ({ children = null, wrapperClassName = "" }) => (
  <span
    className={twClassNames(
      // Base styles for the sticky item: fixed position, bottom alignment, full width, rounded bottom corners, border, background, and padding.
      "sticky bottom-0 left-0 w-full overflow-hidden rounded-b-md border border-neutral-default bg-raised-default py-1",
      wrapperClassName
    )}
  >
    {children}
  </span>
);

ComboboxStickyItem.propTypes = {
  /** The content to be rendered inside the sticky item container. Typically used for actions or summaries related to the combobox options. */
  children: PropTypes.node,
  /** Optional CSS class name(s) to apply to the root `span` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */

export default ComboboxStickyItem;
