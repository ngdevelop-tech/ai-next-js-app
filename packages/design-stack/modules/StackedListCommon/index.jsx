/**
 * @typedef {Object} StackedListCommonProps
 * @property {React.ReactNode} [actions] - Optional actions (e.g., buttons, links) displayed typically on the right side of the component. Accepts any valid React node.
 * @property {React.ReactNode} [contentAside] - Optional content displayed alongside the main title/subtitle, often positioned absolutely to the top-right. Accepts any valid React node.
 * @property {React.ReactNode} [icon] - An optional icon element displayed to the left of the title and subtitle. Accepts any valid React node (e.g., an SVG component, `<img>` tag).
 * @property {string} [id] - An optional unique identifier to be added to the root `div` element. Useful for targeting the component for testing or accessibility purposes.
 * @property {React.ReactNode} [subTitle] - The subtitle or secondary text displayed below the main title. Accepts any valid React node.
 * @property {React.ReactNode} [title] - The main title text displayed prominently. Accepts any valid React node.
 * @property {string} [titleWrapperClassName] - Optional CSS class names to apply specifically to the wrapper `div` containing the title. Useful for custom styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * StackedListCommon provides a flexible layout structure for displaying list items
 * with optional icons, titles, subtitles, aside content, and actions.
 * It arranges these elements in a standard row format, commonly used within lists or cards.
 *
 * @example
 * // Basic usage with title and subtitle
 * <StackedListCommon title="Item Title" subTitle="Item Subtitle" />
 *
 * @example
 * // Usage with icon, title, subtitle, and actions
 * <StackedListCommon
 *   icon={<MyIcon />}
 *   title="Interactive Item"
 *   subTitle="This item has actions"
 *   actions={<button>Click Me</button>}
 * />
 *
 * @example
 * // Usage with aside content
 * <StackedListCommon
 *   title="Item with Aside Info"
 *   subTitle="Details here"
 *   contentAside={<span>Status: Active</span>}
 * />
 *
 * @type {React.FC<StackedListCommonProps>}
 */
const StackedListCommon = ({
  actions,
  contentAside,
  icon,
  id,
  subTitle,
  title,
  titleWrapperClassName,
}) => (
  <div
    className={twClassNames("flex flex-row items-center", {
      "md:mt-8": contentAside && !title,
    })}
    {...(id !== null && { id })}
  >
    {icon && <span className=" mr-3  shrink-0">{icon}</span>}
    <div className=" flex-1 overflow-hidden text-sm">
      <div
        className={twClassNames(
          "text-wrap pr-12 font-medium text-neutral-default md:pr-4",
          titleWrapperClassName
        )}
      >
        {title}
      </div>
      <div className="text-sm text-neutral-weaker">{subTitle}</div>
    </div>
    {contentAside && (
      <div className=" absolute right-4 top-4 text-neutral-weaker">
        {contentAside}
      </div>
    )}
    {actions}
  </div>
);

StackedListCommon.propTypes = {
  /** The actions prop represents additional actions or buttons to be included in the StackedListCommon.
   * It can accept any valid React node, such as a string, JSX element, or component.
   * Typically displayed on the right side.
   */
  actions: PropTypes.node,

  /** The contentAside prop represents optional content that appears beside the main content of StackedListCommon.
   * It can accept any valid React node, such as a string, JSX element, or component.
   * Often used for status indicators or timestamps, positioned absolutely by default.
   */
  contentAside: PropTypes.node,

  /** The icon prop represents an optional icon to be displayed with the StackedListCommon.
   * It can accept any valid React node, such as an SVG, JSX element, or component.
   * Displayed to the left of the title/subtitle section.
   */
  icon: PropTypes.node,

  /** An optional unique identifier to be added to the root `div` element.
   * Useful for targeting the component for testing (e.g., `data-testid`) or accessibility (`aria-labelledby`, `aria-describedby`).
   */
  id: PropTypes.string,

  /** The subTitle prop represents the subtitle or additional information of the StackedListCommon.
   * It can accept any valid React node, such as a string, JSX element, or component.
   * Displayed below the main title with weaker emphasis.
   */
  subTitle: PropTypes.node,

  /** The title prop represents the main title of the StackedListCommon.
   * It can accept any valid React node, such as a string, JSX element, or component.
   * Displayed prominently as the primary text.
   */
  title: PropTypes.node,

  /** Optional CSS class names to apply specifically to the wrapper `div` containing the title.
   * Allows for custom styling overrides or additions to the title container.
   */
  titleWrapperClassName: PropTypes.string,
};

StackedListCommon.defaultProps = {
  actions: null,
  contentAside: null,
  icon: null,
  id: null,
  subTitle: null,
  title: null,
  titleWrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stackedlist--avatar-groups-with-actions
 * @zeroHeight https://zeroheight.com/023d5159d/p/0614e9-stacked-lists/b/4635b4
 * @end
 */

export default StackedListCommon;
