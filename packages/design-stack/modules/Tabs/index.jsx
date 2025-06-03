/**
 * @typedef {'simple' | 'pill'} TabShape
 * The visual shape of the tabs.
 * - `simple`: Standard tabs with an underline indicator.
 * - `pill`: Tabs styled as pills with a background indicator.
 */

/**
 * @typedef {'dark' | 'light'} SmallTabsTheme
 * Predefined themes for smaller tabs, typically used within components like CodeSnippet toolbars.
 */

/**
 * @typedef {Object} TabItem
 * Represents a single tab within the tabs array.
 * @property {string} id - A unique identifier for the tab. Used for selection logic if present.
 * @property {string} name - The display name of the tab. Used as a fallback identifier if `id` is not present.
 * @property {React.ReactNode | Function} [icon] - An optional icon to display next to the tab name. Can be a React node or a render function.
 * @property {string | number} [count] - An optional count or badge to display with the tab name.
 */

/**
 * @typedef {Object} TabsProps
 * Props for the Tabs component.
 * @property {number} [defaultIndex=0] - The zero-based index of the tab to be active by default on initial render.
 * @property {boolean} [disableFullWidthBorder=false] - If `true`, removes the bottom border that spans the full width of the tabs container. Has no effect when `shape` is 'pill'.
 * @property {string} [id] - An optional ID for the tabs container. If provided along with `label`, it helps associate the label with the tabs for accessibility.
 * @property {boolean} [isContained=false] - If `true`, renders the tabs within a contained element with rounded corners and a shadow, typically spanning the full width with equally spaced tabs.
 * @property {boolean} [isFullWidth=false] - If `true`, each tab will grow to fill the available horizontal space equally.
 * @property {boolean} [isSlideableTabs=true] - If `true` and the tabs overflow their container, enables horizontal scrolling with navigation arrows (unless `isContained` is true).
 * @property {string} [label] - An accessible label for the tabs navigation. Recommended for screen reader users. It's visually hidden but announced by screen readers.
 * @property {string} [navigationClassName] - Custom CSS class name(s) to apply to the direct container of the tabs (`role="tablist"`).
 * @property {(selectedTab: TabItem) => void} [onTabChange] - Callback function invoked when a tab is selected. Receives the selected tab object (`TabItem`) as an argument.
 * @property {TabShape} [shape='simple'] - Sets the visual style of the tabs. See `TabShape` type for possible values.
 * @property {SmallTabsTheme} [smallTabsTheme] - Applies a specific theme for smaller tabs, intended for use cases like code snippet toolbars. See `SmallTabsTheme` type for possible values.
 * @property {TabItem[]} tabsArray - An array of objects defining the tabs to be rendered. See `TabItem` type for object structure. This prop is required.
 * @property {string} [wrapperClassName] - Custom CSS class name(s) to apply to the outermost wrapper `div` of the Tabs component.
 */

import React, { useRef, useState } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";

import Tab from "./components/Tab";
import { SMALL_TABS_CLASSES, TAB_SHAPE } from "./constants/tabs";
import { useScrollTabs } from "./useScrollTabs";
import useTabs from "./useTabs";

/**
 * Renders a set of tabs for navigating between different content sections.
 * Supports various styles (simple, pill), optional icons and counts, full width, contained layout, and horizontal scrolling for overflow.
 *
 * @component
 * @param {TabsProps} props - Props for configuring the Tabs component.
 *
 * @example
 * const tabsData = [
 *   { id: 'tab1', name: 'Details', icon: <InfoIcon /> },
 *   { id: 'tab2', name: 'Settings', count: 5 },
 *   { id: 'tab3', name: 'Users' },
 * ];
 *
 * <Tabs
 *   tabsArray={tabsData}
 *   onTabChange={(selectedTab) => console.log('Selected Tab:', selectedTab.name)}
 *   label="User Management Tabs"
 *   shape="pill"
 * />
 *
 * @accessibility
 * - Uses `role="tablist"` for the tab container and `role="tab"` for individual tabs (handled within the `Tab` component).
 * - The `label` prop provides an accessible name for the tab list via `aria-label`.
 * - Keyboard navigation (Arrow keys, Home, End) and selection (Enter, Space) are typically expected for tab lists and should be handled appropriately if not using native browser focus management or a library that provides it. (Note: Current implementation relies on click handlers).
 * - Focus management ensures the active tab is focusable.
 *
 * @see {@link Tab} - The child component used to render individual tabs.
 * @see {@link https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/|WAI-ARIA Tabs Pattern} - For accessibility best practices.
 *
 * @type {React.FC<TabsProps>}
 */
const Tabs = ({
  defaultIndex,
  disableFullWidthBorder,
  id,
  isContained,
  isFullWidth,
  isSlideableTabs,
  label,
  navigationClassName,
  onTabChange,
  shape,
  smallTabsTheme,
  tabsArray,
  wrapperClassName,
}) => {
  const containerRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState(
    tabsArray ? tabsArray[0] : null
  );
  const {
    scrollOnMount,
    disableNext,
    disablePrev,
    scroll,
    handleScroll,
    isOverflowed,
  } = useScrollTabs(containerRef, tabsArray, isSlideableTabs);

  const { onTabClickHandler } = useTabs(
    tabsArray,
    setSelectedTab,
    onTabChange,
    defaultIndex
  );

  return (
    <>
      {tabsArray?.length ? (
        <div className={twClassNames("w-full", wrapperClassName)}>
          <div className={twClassNames("sm:hidden", navigationClassName)}>
            {label && (
              <label htmlFor={id} className="sr-only">
                {label}
              </label>
            )}
          </div>
          <div
            className={twClassNames(
              "flex h-full items-center space-x-2 sm:flex",
              {
                "border-neutral-default border-b":
                  !disableFullWidthBorder && shape !== TAB_SHAPE.PILL,
              }
            )}
          >
            {isSlideableTabs && isOverflowed && !isContained && (
              <Button
                variant="minimal"
                onClick={() => scroll("prev")}
                disabled={disablePrev}
                colors="white"
                aria-label="Previous Arrow"
                isIconOnlyButton
                icon={<MdOutlineChevronLeft className="h-6 w-6" />}
              />
            )}
            <div
              ref={containerRef}
              className={twClassNames(
                "-mb-px flex flex-1",
                {
                  "space-x-8": !isFullWidth,
                  "space-x-4": !isFullWidth && shape === TAB_SHAPE.PILL,
                  "border-0": isFullWidth,
                  "isolate flex divide-x divide-neutral-default rounded-lg shadow space-x-0":
                    isContained,
                  "overflow-y-scroll scrollbar-hide ":
                    isSlideableTabs && !isContained,
                },
                navigationClassName
              )}
              role="tablist"
              aria-label="Tabs"
              {...(isSlideableTabs && { onScroll: handleScroll })}
            >
              {tabsArray?.map((tab, index) => (
                <Tab
                  tab={tab}
                  key={tab.name}
                  isCurrent={
                    selectedTab?.id
                      ? selectedTab?.id === tab.id
                      : selectedTab?.name === tab.name
                  }
                  onTabClick={onTabClickHandler}
                  shape={shape}
                  isContained={isContained}
                  isFullWidth={isFullWidth}
                  totalTabs={tabsArray.length}
                  tabIdx={index}
                  scrollOnMount={scrollOnMount}
                  isSlideableTabs={isSlideableTabs}
                  disableFullWidthBorder={disableFullWidthBorder}
                  smallTabsTheme={smallTabsTheme}
                />
              ))}
            </div>
            {isSlideableTabs && isOverflowed && !isContained && (
              <Button
                variant="minimal"
                onClick={() => scroll()}
                disabled={disableNext}
                colors="white"
                aria-label="Next Arrow"
                isIconOnlyButton
                icon={<MdOutlineChevronRight className="h-6 w-6" />}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

Tabs.propTypes = {
  /** The zero-based index of the tab to be active by default. */
  defaultIndex: PropTypes.number,
  /** If `true`, removes the full-width bottom border. */
  disableFullWidthBorder: PropTypes.bool,
  /** Optional ID for the tabs container. */
  id: PropTypes.string,
  /** If `true`, renders tabs in a contained, full-width, equally spaced layout. */
  isContained: PropTypes.bool,
  /** If `true`, tabs expand to fill available horizontal space equally. */
  isFullWidth: PropTypes.bool,
  /** If `true`, enables horizontal scrolling with arrows when tabs overflow (unless `isContained`). */
  isSlideableTabs: PropTypes.bool,
  /** Accessible label for the tabs navigation (visually hidden). */
  label: PropTypes.string,
  /** Custom CSS class(es) for the tab list container (`role="tablist"`). */
  navigationClassName: PropTypes.string,
  /** Callback function fired when a tab is selected, receiving the selected tab object. */
  onTabChange: PropTypes.func,
  /** Sets the visual style of the tabs ('simple' or 'pill'). */
  shape: PropTypes.oneOf(Object.values(TAB_SHAPE)),
  /** Applies a theme for smaller tabs ('dark' or 'light'), e.g., for code snippet toolbars. */
  smallTabsTheme: PropTypes.oneOf(Object.keys(SMALL_TABS_CLASSES)),
  /**
   * Array of tab objects. Each object requires an `id` or `name`, and can optionally include `icon` and `count`.
   * `id` is preferred for selection logic.
   */
  tabsArray: PropTypes.arrayOf(
    PropTypes.shape({
      /** Optional count/badge displayed on the tab. */
      count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      /** Optional icon displayed on the tab. */
      icon: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.node,
        PropTypes.func,
      ]),
      /** Unique identifier for the tab. */
      id: PropTypes.string,
      /** Display name of the tab. Used as fallback identifier if `id` is missing. */
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  /** Custom CSS class(es) for the outermost wrapper div. */
  wrapperClassName: PropTypes.string,
};

Tabs.defaultProps = {
  defaultIndex: 0,
  disableFullWidthBorder: false,
  id: "",
  isContained: false,
  isFullWidth: false,
  isSlideableTabs: true,
  label: "",
  navigationClassName: "",
  onTabChange: null,
  shape: TAB_SHAPE.SIMPLE,
  smallTabsTheme: null,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tabs--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/14b34e-tabs/b/620909
 * @end
 */

export default Tabs;
