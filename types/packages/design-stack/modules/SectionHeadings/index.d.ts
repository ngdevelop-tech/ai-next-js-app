/**
 * @typedef {import('../Tabs/constants/tabs').SMALL_TABS_CLASSES} SMALL_TABS_CLASSES
 * @typedef {import('../Tabs').TabsProps} TabsProps
 * @typedef {import('../../shared/EditingInline').EditingInlineProps} EditingInlineProps
 */
import React from "react";
/**
 * SectionHeadings component renders a standard section header layout,
 * often used for page titles or section titles within a page.
 * It supports an optional title, subtitle, description, inline editing for the title,
 * tabs for navigation, and a trailing node for additional actions or information.
 *
 * @component
 * @param {object} props - The props for the SectionHeadings component.
 * @param {string} [props.description] - A brief description displayed below the title and subtitle.
 * @param {string} [props.headerWrapperClassName] - Custom CSS class name for the main header container (title, subtitle, description, trailing node).
 * @param {string} [props.headingWrapperClassName] - Custom CSS class name specifically for the title element (h3).
 * @param {string} [props.id] - Unique identifier for the root `div` element.
 * @param {EditingInlineProps} [props.inlineEditingProps] - Props passed down to the `EditingInline` component when `isEditable` is true. Includes properties like `defaultElementText`, `elementText`, `onBlurCallback`, `onChangeCallback`, `wrapperClassname`.
 * @param {boolean} [props.isEditable=false] - If true, the title becomes editable using the `EditingInline` component.
 * @param {boolean} [props.isTruncateTooltip=false] - If true, enables a tooltip to show the full title when it's truncated.
 * @param {React.ReactNode} [props.subSection] - Custom node rendered below the title/subtitle block, suitable for metadata or secondary information.
 * @param {string} [props.subTitle] - A subtitle displayed next to the main title, providing additional context.
 * @param {TabsProps} [props.tabsProps] - Props passed down to the `Tabs` component. If provided with a `tabsArray`, tabs will be rendered below the header. Includes properties like `defaultIndex`, `disableFullWidthBorder`, `id`, `isContained`, `isFullWidth`, `isSlideableTabs`, `label`, `navigationClassName`, `onTabChange`, `shape`, `smallTabsTheme`, `tabsArray`, `wrapperClassName`.
 * @param {string} [props.tabsWrapperClassName] - Custom CSS class name for the wrapper div containing the `Tabs` component.
 * @param {string} props.title - The main title text for the section heading. Required.
 * @param {React.ReactNode} [props.trailingHeadNode] - A node (e.g., buttons, badges) displayed on the right side of the header.
 * @param {string} [props.wrapperClassName] - Custom CSS class name for the outermost `div` element of the component.
 *
 * @example
 * // Simple Section Heading
 * <SectionHeadings title="Account Settings" />
 *
 * @example
 * // With Subtitle and Description
 * <SectionHeadings
 *   title="Profile"
 *   subTitle="Manage your public profile"
 *   description="Keep your profile information up to date."
 * />
 *
 * @example
 * // Editable Title
 * <SectionHeadings
 *   title="Project Name"
 *   isEditable
 *   inlineEditingProps={{
 *     elementText: "My Awesome Project",
 *     onBlurCallback: (newName) => console.log("New name:", newName),
 *   }}
 * />
 *
 * @example
 * // With Tabs
 * <SectionHeadings
 *   title="Reports"
 *   tabsProps={{
 *     tabsArray: [
 *       { name: 'Overview' },
 *       { name: 'Details' },
 *       { name: 'Settings' }
 *     ],
 *     onTabChange: (index) => console.log("Selected tab:", index),
 *   }}
 * />
 *
 * @example
 * // With Trailing Node
 * <SectionHeadings
 *   title="Users"
 *   trailingHeadNode={<Button variant="primary">Add User</Button>}
 * />
 *
 * @accessibility
 * The component renders the main title within an `<h3>` tag by default when not editable,
 * contributing to the document's semantic structure. Ensure the heading level is appropriate
 * for its context within the page hierarchy.
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sectionheadings--simple|Storybook SectionHeadings}
 * @see {@link https://zeroheight.com/023d5159d/p/32e782-section-headings/b/4635b4|Zeroheight Section Headings}
 */
declare const SectionHeadings: {
    ({ description, any, headerWrapperClassName, any, headingWrapperClassName, any, id, any, inlineEditingProps, any, isEditable, any, isTruncateTooltip, any, subSection, any, subTitle, any, tabsProps, any, tabsWrapperClassName, any, title: any, trailingHeadNode, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** A brief description displayed below the title and subtitle. */
        description: any;
        /** Custom CSS class name for the main header container (title, subtitle, description, trailing node). */
        headerWrapperClassName: any;
        /** Custom CSS class name specifically for the title element (h3). */
        headingWrapperClassName: any;
        /** Unique identifier for the root `div` element. */
        id: any;
        /** Props passed down to the `EditingInline` component when `isEditable` is true. */
        inlineEditingProps: any;
        /** If true, the title becomes editable using the `EditingInline` component. */
        isEditable: any;
        /** If true, enables a tooltip to show the full title when it's truncated. */
        isTruncateTooltip: any;
        /** Custom node rendered below the title/subtitle block, suitable for metadata or secondary information. */
        subSection: any;
        /** A subtitle displayed next to the main title, providing additional context. */
        subTitle: any;
        /** Props passed down to the `Tabs` component. If provided with a `tabsArray`, tabs will be rendered below the header. */
        tabsProps: any;
        /** Custom CSS class name for the wrapper div containing the `Tabs` component. */
        tabsWrapperClassName: any;
        /** The main title text for the section heading. Required. */
        title: any;
        /** A node (e.g., buttons, badges) displayed on the right side of the header. */
        trailingHeadNode: any;
        /** Custom CSS class name for the outermost `div` element of the component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sectionheadings--simple
 * @zeroHeight https://zeroheight.com/023d5159d/p/32e782-section-headings/b/4635b4
 * @end
 */
export default SectionHeadings;
