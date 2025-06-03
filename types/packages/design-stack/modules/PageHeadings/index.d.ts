/**
 * @fileoverview This file defines the PageHeadings component, a standard header element
 * used across applications to display page titles, breadcrumbs, actions, and optional tabs.
 * It provides structure and consistency for page headers.
 *
 * @component PageHeadings
 * @description Renders a page header section including breadcrumbs, title, badges, actions, subsections, and tabs.
 * It supports customization through various props and themes.
 *
 * @example
 * // Basic usage with a title
 * <PageHeadings heading="My Page Title" />
 *
 * @example
 * // Usage with breadcrumbs, actions, and tabs
 * <PageHeadings
 *   heading="Dashboard"
 *   breadcrumbNode={<Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Dashboard' }]} />}
 *   actions={<Button variant="primary">New Item</Button>}
 *   tabsProps={{
 *     tabsArray: [{ name: 'Overview' }, { name: 'Settings' }],
 *     onTabChange: (index) => console.log('Tab changed to:', index),
 *   }}
 * />
 *
 * @see Related Components: {@link Tabs}, {@link Breadcrumbs}, {@link Button}
 * @see Design System Documentation: {@link https://zeroheight.com/023d5159d/p/598716-page-headings/b/4635b4}
 * @see Storybook Example: {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-pageheadings--primary}
 *
 * @accessibility
 * - Ensures proper heading structure (implicitly uses h1 or similar via `PageHeadingsTitleAndBadge`).
 * - `id` prop allows associating the header with other elements using `aria-labelledby` or `aria-describedby`.
 * - Interactive elements like actions and tabs should follow their respective accessibility guidelines.
 */
/**
 * @typedef {import('../Tabs/constants/tabs').SMALL_TABS_CLASSES} SMALL_TABS_CLASSES
 * @typedef {import('./constants/pageHeadings').PAGE_HEADINGS_THEME} PAGE_HEADINGS_THEME
 */
/**
 * @typedef {Object} InlineEditingProps - Props to enable and configure inline editing for the heading.
 * @property {string} [defaultElementText] - The default text displayed when the element is not being edited.
 * @property {string} [elementText] - The current text value of the element, typically controlled state.
 * @property {(event: React.FocusEvent<HTMLElement>) => void} [onBlurCallback] - Callback function triggered when the editable element loses focus.
 * @property {(event: React.ChangeEvent<HTMLElement> | string) => void} [onChangeCallback] - Callback function triggered when the text content changes. Receives either a change event or the new string value.
 * @property {string} [wrapperClassname] - Custom CSS class name for the wrapper of the inline editable element.
 */
/**
 * @typedef {Object} TabItem - Represents a single tab within the Tabs component.
 * @property {string} [count] - A count badge to display next to the tab name.
 * @property {React.ReactNode | React.FC<any>} [icon] - An icon component or node to display within the tab.
 * @property {string} name - The display name of the tab. Required.
 */
/**
 * @typedef {Object} TabsProps - Props passed down to the underlying Tabs component.
 * @property {number} [defaultIndex=0] - The index of the tab that should be active by default.
 * @property {boolean} [disableFullWidthBorder=false] - If true, removes the bottom border that spans the full width of the tabs container.
 * @property {string} [id] - Unique identifier for the Tabs component.
 * @property {boolean} [isContained=false] - If true, tabs will be equally spaced and contained within the available width.
 * @property {boolean} [isFullWidth=false] - If true, the tabs container will occupy the full available width.
 * @property {boolean} [isSlideableTabs=false] - If true, enables horizontal scrolling for tabs when they overflow the container.
 * @property {string} [label] - An accessible label for the tabs navigation (e.g., "Page Sections").
 * @property {string} [navigationClassName] - Custom CSS class name for the navigation (tab list) part of the Tabs component.
 * @property {(index: number) => void} [onTabChange] - Callback function executed when the active tab changes. Receives the index of the newly selected tab.
 * @property {string} [shape] - Defines the visual shape or style of the tabs (specific values depend on the Tabs component implementation).
 * @property {keyof SMALL_TABS_CLASSES} [smallTabsTheme] - Applies a specific theme for smaller tab variants.
 * @property {TabItem[]} tabsArray - An array of TabItem objects defining the tabs to be rendered. Required.
 * @property {string} [wrapperClassName] - Custom CSS class name for the main wrapper of the Tabs component.
 */
/**
 * @typedef {Object} PageHeadingsProps
 * @property {React.ReactNode} [actions] - Custom React node, typically containing buttons or other interactive elements, displayed on the right side of the header.
 * @property {React.ReactNode} [breadcrumbNode] - Custom React node for displaying breadcrumb navigation above the main heading.
 * @property {React.ReactNode} [headerBadgesNode] - Custom React node for displaying badges or status indicators alongside the heading.
 * @property {string} [heading] - The main title text displayed in the header.
 * @property {string} [id] - An optional unique identifier for the root `div` element of the component. Useful for accessibility or targeting with CSS/JS.
 * @property {InlineEditingProps} [inlineEditingProps] - Configuration object for enabling inline editing of the heading. See `InlineEditingProps` typedef for details.
 * @property {boolean} [isEditable=false] - If true, enables inline editing functionality for the heading (requires `inlineEditingProps`).
 * @property {boolean} [isTruncateTooltip=false] - If true, truncates the heading text with an ellipsis and shows the full text in a tooltip on hover when it overflows.
 * @property {boolean} [loading=false] - If true, displays the component in a loading state, typically showing skeleton loaders.
 * @property {React.ReactNode} [subSection] - Custom React node displayed below the main heading, often used for subtitles or descriptions.
 * @property {TabsProps} [tabsProps] - Configuration object for rendering a `Tabs` component below the main header content. See `TabsProps` typedef for details. If provided, the bottom padding of the header is removed to accommodate the tabs.
 * @property {string} [tabsWrapperClassName] - Custom CSS class name applied to the wrapper element containing the `Tabs` component.
 * @property {PAGE_HEADINGS_THEME[keyof PAGE_HEADINGS_THEME]} [theme='light'] - Specifies the visual theme for the page header. Affects background and text colors. Allowed values: 'light', 'dark'.
 * @property {string} [wrapperClassName] - Custom CSS class name applied to the root `div` element of the component.
 */
import React from "react";
/**
 * @type {React.FC<PageHeadingsProps>}
 */
declare const PageHeadings: {
    ({ actions, any, breadcrumbNode, any, headerBadgesNode, any, heading, any, id, any, inlineEditingProps, any, isEditable, any, isTruncateTooltip, any, loading, any, subSection, any, tabsProps, any, tabsWrapperClassName, any, theme, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** React node containing actions (usually buttons) to be displayed at the top-right of the page header. */
        actions: any;
        /** React node for breadcrumb navigation, typically a Breadcrumb component instance. */
        breadcrumbNode: any;
        /** React node for badges to be displayed alongside the page heading. */
        headerBadgesNode: any;
        /** The main page title or heading text. */
        heading: any;
        /** Unique identifier for the component's root element. */
        id: any;
        /** Configuration object for enabling inline editing of the heading. */
        inlineEditingProps: any;
        /** Boolean flag to enable inline editing functionality for the heading. */
        isEditable: any;
        /** Boolean flag to enable truncation with tooltip for long headings. */
        isTruncateTooltip: any;
        /** Boolean flag to show loading state with skeleton placeholders. */
        loading: any;
        /** React node for subsection content displayed below the main heading. */
        subSection: any;
        /** Configuration object for the optional tabs component. */
        tabsProps: any;
        /** Custom CSS class name for the tabs wrapper element. */
        tabsWrapperClassName: any;
        /** Theme variant for the component styling. */
        theme: any;
        /** Custom CSS class name for the root wrapper element. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-pageheadings--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/598716-page-headings/b/4635b4
 * @end
 */
export default PageHeadings;
