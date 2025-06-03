/**
 * @typedef {import('../Tabs/constants/tabs').SMALL_TABS_CLASSES} SMALL_TABS_CLASSES
 * @typedef {import('../Tabs').TabsProps} TabsProps
 * @typedef {import('../../shared/EditingInline').EditingInlineProps} EditingInlineProps
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import EditingInline from "../../shared/EditingInline";
import EditingStaticElement from "../../shared/EditingStaticElement";
import Tabs from "../Tabs";
import { SMALL_TABS_CLASSES } from "../Tabs/constants/tabs";

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
const SectionHeadings = ({
  description = "",
  headerWrapperClassName = "",
  headingWrapperClassName = "",
  id = null,
  inlineEditingProps = null,
  isEditable = false,
  isTruncateTooltip = false,
  subSection = null,
  subTitle = "",
  tabsProps = null,
  tabsWrapperClassName = "",
  title,
  trailingHeadNode = <></>,
  wrapperClassName = "",
}) => {
  const staticElementClassname = twClassNames(
    "text-lg font-medium leading-6 text-neutral-default ",
    headingWrapperClassName
  );
  return (
    <div
      {...(id !== null && { id })}
      className={twClassNames(
        "border-b border-neutral-default",
        wrapperClassName
      )}
    >
      <div
        className={twClassNames(
          "pb-5 sm:flex sm:items-center sm:justify-between",
          headerWrapperClassName
        )}
      >
        <div
          className={twClassNames("w-auto", {
            "-m-2 flex-1 overflow-hidden p-2": isEditable,
          })}
          role="contentinfo"
        >
          {(subTitle || title) && (
            <div className="flex flex-wrap items-baseline">
              {title &&
                (isEditable ? (
                  <EditingInline
                    StaticElement={EditingStaticElement}
                    inlineEditingProps={inlineEditingProps}
                    staticElementClassname={staticElementClassname}
                    isTruncateTooltip={isTruncateTooltip}
                    tagName="h3"
                  />
                ) : (
                  <EditingStaticElement
                    tagName="h3"
                    heading={title}
                    wrapperClassName={staticElementClassname}
                    isTruncateTooltip={isTruncateTooltip}
                  />
                ))}
              {subTitle && (
                <p className="ml-2 mt-1 truncate text-sm text-neutral-weaker">
                  {subTitle}
                </p>
              )}
            </div>
          )}

          {subSection}

          {description && (
            <p className="mt-2 text-sm text-neutral-weaker">{description}</p>
          )}
        </div>
        <div className="ml-3">{trailingHeadNode}</div>
      </div>
      {tabsProps?.tabsArray?.length > 0 && (
        <div className={tabsWrapperClassName}>
          <Tabs {...tabsProps} isSlideableTabs />
        </div>
      )}
    </div>
  );
};

SectionHeadings.propTypes = {
  /** A brief description displayed below the title and subtitle. */
  description: PropTypes.string,
  /** Custom CSS class name for the main header container (title, subtitle, description, trailing node). */
  headerWrapperClassName: PropTypes.string,
  /** Custom CSS class name specifically for the title element (h3). */
  headingWrapperClassName: PropTypes.string,
  /** Unique identifier for the root `div` element. */
  id: PropTypes.string,
  /** Props passed down to the `EditingInline` component when `isEditable` is true. */
  inlineEditingProps: PropTypes.shape({
    /** Default text shown in the input field when editing starts. */
    defaultElementText: PropTypes.string,
    /** Current text value of the element (controlled). */
    elementText: PropTypes.string,
    /** Callback function triggered when the input field loses focus. Receives the final text value. */
    onBlurCallback: PropTypes.func,
    /** Callback function triggered when the input field value changes. Receives the event object. */
    onChangeCallback: PropTypes.func,
    /** Custom CSS class name for the `EditingInline` wrapper. */
    wrapperClassname: PropTypes.string,
  }),
  /** If true, the title becomes editable using the `EditingInline` component. */
  isEditable: PropTypes.bool,
  /** If true, enables a tooltip to show the full title when it's truncated. */
  isTruncateTooltip: PropTypes.bool,
  /** Custom node rendered below the title/subtitle block, suitable for metadata or secondary information. */
  subSection: PropTypes.node,
  /** A subtitle displayed next to the main title, providing additional context. */
  subTitle: PropTypes.string,
  /** Props passed down to the `Tabs` component. If provided with a `tabsArray`, tabs will be rendered below the header. */
  tabsProps: PropTypes.shape({
    /** Index of the tab to be active by default (uncontrolled). */
    defaultIndex: PropTypes.number,
    /** If true, removes the bottom border that spans the full width of the tabs container. */
    disableFullWidthBorder: PropTypes.bool,
    /** Unique identifier for the `Tabs` component root element. */
    id: PropTypes.string,
    /** If true, tabs will be spaced equally to fill the container width. */
    isContained: PropTypes.bool,
    /** If true, the tabs container will attempt to take the full width of its parent. */
    isFullWidth: PropTypes.bool,
    /** If true, enables horizontal scrolling for tabs when they overflow the container. */
    isSlideableTabs: PropTypes.bool,
    /** Accessible label for the tabs navigation container. */
    label: PropTypes.string,
    /** Custom CSS class name for the navigation (`<nav>`) element within the `Tabs` component. */
    navigationClassName: PropTypes.string,
    /** Callback function triggered when the active tab changes. Receives the index of the newly selected tab. */
    onTabChange: PropTypes.func,
    /** Defines the visual style (shape) of the tabs. */
    shape: PropTypes.string, // Consider adding specific shape values if available e.g., PropTypes.oneOf(['rounded', 'square'])
    /** Applies a theme for smaller tabs, typically used in toolbars. */
    smallTabsTheme: PropTypes.oneOf(Object.keys(SMALL_TABS_CLASSES)),
    /** Array of objects defining the tabs. Each object should have at least a `name`. `icon` and `count` are optional. */
    tabsArray: PropTypes.arrayOf(
      PropTypes.shape({
        /** Optional text (e.g., a count) displayed next to the tab name. */
        count: PropTypes.string,
        /** Optional icon element displayed before the tab name. */
        icon: PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.node,
          PropTypes.func,
        ]),
        /** The text label displayed for the tab. Required. */
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    /** Custom CSS class name for the wrapper `div` of the `Tabs` component. */
    wrapperClassName: PropTypes.string,
  }),
  /** Custom CSS class name for the wrapper div containing the `Tabs` component. */
  tabsWrapperClassName: PropTypes.string,
  /** The main title text for the section heading. Required. */
  title: PropTypes.string.isRequired,
  /** A node (e.g., buttons, badges) displayed on the right side of the header. */
  trailingHeadNode: PropTypes.node,
  /** Custom CSS class name for the outermost `div` element of the component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sectionheadings--simple
 * @zeroHeight https://zeroheight.com/023d5159d/p/32e782-section-headings/b/4635b4
 * @end
 */

export default SectionHeadings;
