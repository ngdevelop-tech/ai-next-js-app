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
export declare function PageHeadingsTabs({ loading, any, tabsWrapperClassName, any, tabsProps, any, }: any): any;
export declare namespace PageHeadingsTabs {
    var propTypes: {
        /** Show the loading state of the component */
        loading: any;
        /** Object of props belonging to the Tabs component */
        tabsProps: any;
        /** A custom CSS class name to style the wrapper of the Tabs */
        tabsWrapperClassName: any;
    };
}
