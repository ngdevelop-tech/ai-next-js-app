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
declare const StackedListCommon: {
    ({ actions: any, contentAside: any, icon: any, id: any, subTitle: any, title: any, titleWrapperClassName: any, }: any): React.ReactElement;
    propTypes: {
        /** The actions prop represents additional actions or buttons to be included in the StackedListCommon.
         * It can accept any valid React node, such as a string, JSX element, or component.
         * Typically displayed on the right side.
         */
        actions: any;
        /** The contentAside prop represents optional content that appears beside the main content of StackedListCommon.
         * It can accept any valid React node, such as a string, JSX element, or component.
         * Often used for status indicators or timestamps, positioned absolutely by default.
         */
        contentAside: any;
        /** The icon prop represents an optional icon to be displayed with the StackedListCommon.
         * It can accept any valid React node, such as an SVG, JSX element, or component.
         * Displayed to the left of the title/subtitle section.
         */
        icon: any;
        /** An optional unique identifier to be added to the root `div` element.
         * Useful for targeting the component for testing (e.g., `data-testid`) or accessibility (`aria-labelledby`, `aria-describedby`).
         */
        id: any;
        /** The subTitle prop represents the subtitle or additional information of the StackedListCommon.
         * It can accept any valid React node, such as a string, JSX element, or component.
         * Displayed below the main title with weaker emphasis.
         */
        subTitle: any;
        /** The title prop represents the main title of the StackedListCommon.
         * It can accept any valid React node, such as a string, JSX element, or component.
         * Displayed prominently as the primary text.
         */
        title: any;
        /** Optional CSS class names to apply specifically to the wrapper `div` containing the title.
         * Allows for custom styling overrides or additions to the title container.
         */
        titleWrapperClassName: any;
    };
    defaultProps: {
        actions: any;
        contentAside: any;
        icon: any;
        id: any;
        subTitle: any;
        title: any;
        titleWrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-stackedlist--avatar-groups-with-actions
 * @zeroHeight https://zeroheight.com/023d5159d/p/0614e9-stacked-lists/b/4635b4
 * @end
 */
export default StackedListCommon;
