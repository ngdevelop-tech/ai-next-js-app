/**
 * @typedef {Object} PageHeadingsTabsProps
 * @property {boolean} loading? - Show the loading state of the component
 * @property {Record<string, any>} tabsProps? - Object of props belonging to the Tabs component
 * @property {number} defaultIndex? - Index for default active tab.
 * @property {boolean} disableFullWidthBorder? - Whether to disable the full-width border for the tabs.
 * @property {string} id? - Unique ID for the tabs component.
 * @property {boolean} isContained? - It makes full width and equally spaced Tabs.
 * @property {boolean} isFullWidth? - Whether the tabs should take full width or not.
 * @property {boolean} isSlideableTabs? - Whether the tabs should be slideable or not.
 * @property {string} label? - Label for tabs.
 * @property {string} navigationClassName? - A custom CSS class name to style the navigation section of the tabs component.
 * @property {(event: React.MouseEvent<any>) => void} onTabChange? - Callback fired when tab is changed.
 * @property {string} shape? - Sets the shape of the tab.
 * @property {any} smallTabsTheme? - Specify if the smaller tabs are used, Only to be used for codesnippet toolbar with tabs.
 * @property {any} tabsArray? - Array of tab objects containing name, icon, and count properties.
 * @property {string} count?
 * @property {any} icon?
 * @property {string} name?
 */

import React from "react";
import PropTypes from "prop-types";

import SkeletonLoader from "../../SkeletonLoader";
import Tabs from "../../Tabs";
import { SMALL_TABS_CLASSES } from "../../Tabs/constants/tabs";

export function PageHeadingsTabs({
  loading = false,
  tabsWrapperClassName = "",
  tabsProps = null,
}) {
  // 81 -> 80 - w-20
  const showTabs = tabsProps?.tabsArray?.length > 0;
  return (
    <div className={tabsWrapperClassName}>
      {showTabs && loading ? (
        <div className=" my-4 flex h-5 justify-start gap-4 ">
          <SkeletonLoader wrapperClassName="w-[calc(100%-93%)] h-5" animate />
          <SkeletonLoader wrapperClassName="w-[calc(100%-93%)] h-5" animate />
        </div>
      ) : (
        <>{showTabs && <Tabs {...tabsProps} isSlideableTabs />}</>
      )}
    </div>
  );
}

PageHeadingsTabs.propTypes = {
  /** Show the loading state of the component */
  loading: PropTypes.bool,
  /** Object of props belonging to the Tabs component */
  tabsProps: PropTypes.shape({
    /** Index for default active tab. */
    defaultIndex: PropTypes.number,
    /** Whether to disable the full-width border for the tabs. */
    disableFullWidthBorder: PropTypes.bool,
    /** Unique ID for the tabs component. */
    id: PropTypes.string,
    /** It makes full width and equally spaced Tabs. */
    isContained: PropTypes.bool,
    /** Whether the tabs should take full width or not. */
    isFullWidth: PropTypes.bool,
    /** Whether the tabs should be slideable or not. */
    isSlideableTabs: PropTypes.bool,
    /** Label for tabs. */
    label: PropTypes.string,
    /** A custom CSS class name to style the navigation section of the tabs component. */
    navigationClassName: PropTypes.string,
    /** Callback fired when tab is changed. */
    onTabChange: PropTypes.func,
    /** Sets the shape of the tab. */
    shape: PropTypes.string,
    /** Specify if the smaller tabs are used, Only to be used for codesnippet toolbar with tabs. */
    smallTabsTheme: PropTypes.oneOf(Object.keys(SMALL_TABS_CLASSES)),
    /** Array of tab objects containing name, icon, and count properties. */
    tabsArray: PropTypes.arrayOf(
      PropTypes.shape({
        count: PropTypes.string,
        icon: PropTypes.oneOfType([
          PropTypes.object,
          PropTypes.node,
          PropTypes.func,
        ]),
        name: PropTypes.string,
      })
    ).isRequired,
    /** A custom CSS class name to style the tabs component. */
    wrapperClassName: PropTypes.string,
  }),
  /** A custom CSS class name to style the wrapper of the Tabs */
  tabsWrapperClassName: PropTypes.string,
};
