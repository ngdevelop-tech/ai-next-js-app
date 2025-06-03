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
import React from "react";
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
declare const Tabs: {
    ({ defaultIndex: any, disableFullWidthBorder: any, id: any, isContained: any, isFullWidth: any, isSlideableTabs: any, label: any, navigationClassName: any, onTabChange: any, shape: any, smallTabsTheme: any, tabsArray: any, wrapperClassName: any, }: any): React.ReactElement;
    propTypes: {
        /** The zero-based index of the tab to be active by default. */
        defaultIndex: any;
        /** If `true`, removes the full-width bottom border. */
        disableFullWidthBorder: any;
        /** Optional ID for the tabs container. */
        id: any;
        /** If `true`, renders tabs in a contained, full-width, equally spaced layout. */
        isContained: any;
        /** If `true`, tabs expand to fill available horizontal space equally. */
        isFullWidth: any;
        /** If `true`, enables horizontal scrolling with arrows when tabs overflow (unless `isContained`). */
        isSlideableTabs: any;
        /** Accessible label for the tabs navigation (visually hidden). */
        label: any;
        /** Custom CSS class(es) for the tab list container (`role="tablist"`). */
        navigationClassName: any;
        /** Callback function fired when a tab is selected, receiving the selected tab object. */
        onTabChange: any;
        /** Sets the visual style of the tabs ('simple' or 'pill'). */
        shape: any;
        /** Applies a theme for smaller tabs ('dark' or 'light'), e.g., for code snippet toolbars. */
        smallTabsTheme: any;
        /**
         * Array of tab objects. Each object requires an `id` or `name`, and can optionally include `icon` and `count`.
         * `id` is preferred for selection logic.
         */
        tabsArray: any;
        /** Custom CSS class(es) for the outermost wrapper div. */
        wrapperClassName: any;
    };
    defaultProps: {
        defaultIndex: number;
        disableFullWidthBorder: boolean;
        id: string;
        isContained: boolean;
        isFullWidth: boolean;
        isSlideableTabs: boolean;
        label: string;
        navigationClassName: string;
        onTabChange: any;
        shape: string;
        smallTabsTheme: any;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tabs--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/14b34e-tabs/b/620909
 * @end
 */
export default Tabs;
