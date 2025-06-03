/**
 * @typedef {Object} TabProps
 * @property {boolean} disableFullWidthBorder? - Whether to disable the full-width border for the tabs.
 * @property {boolean} isContained? - It makes full width and equally spaced Tabs.
 * @property {boolean} isCurrent? - Indicates if the item is currently active
 * @property {boolean} isFullWidth? - Whether the tabs should take full width or not.
 * @property {boolean} isSlideableTabs? - Whether the tabs should be slideable or not.
 * @property {(event: React.MouseEvent<any>) => void} onTabClick? - A callback that will be fired on a click of a tab
 * @property {(event: React.MouseEvent<any>) => void} scrollOnMount - Callback to bring current item into view
 * @property {string} shape? - Sets the shape of the tab.
 * @property {any} smallTabsTheme? - Specify if the smaller tabs are used, Only to be used for codesnippet toolbar with tabs
 * @property {Record<string, any>} tab? - Array of tab objects containing name, icon, and count properties.
 * @property {string} count?
 * @property {any} icon?
 * @property {string} id?
 * @property {string} name?
 */
import React from "react";
/**
 * @type {React.FC<TabProps>}
 */
declare const Tab: {
    ({ disableFullWidthBorder: any, isContained: any, isCurrent: any, isFullWidth: any, isSlideableTabs: any, onTabClick: any, scrollOnMount: any, shape: any, smallTabsTheme: any, tab: any, tabIdx: any, totalTabs: any, }: any): React.ReactElement;
    propTypes: {
        /** Whether to disable the full-width border for the tabs. */
        disableFullWidthBorder: any;
        /** It makes full width and equally spaced Tabs. */
        isContained: any;
        /** Indicates if the item is currently active */
        isCurrent: any;
        /** Whether the tabs should take full width or not. */
        isFullWidth: any;
        /** Whether the tabs should be slideable or not. */
        isSlideableTabs: any;
        /** A callback that will be fired on a click of a tab */
        onTabClick: any;
        /** Callback to bring current item into view */
        scrollOnMount: any;
        /** Sets the shape of the tab. */
        shape: any;
        /** Specify if the smaller tabs are used, Only to be used for codesnippet toolbar with tabs  */
        smallTabsTheme: any;
        /** Array of tab objects containing name, icon, and count properties. */
        tab: any;
        /** Indicates the index of the tab. */
        tabIdx: any;
        /** Indicates the total number of tabs. */
        totalTabs: any;
    };
    defaultProps: {
        disableFullWidthBorder: boolean;
        isContained: boolean;
        isCurrent: boolean;
        isFullWidth: boolean;
        isSlideableTabs: boolean;
        onTabClick: any;
        shape: string;
        smallTabsTheme: any;
        tabIdx: number;
        totalTabs: number;
    };
};
export default Tab;
