/**
 * @typedef {Object} SidebarItemNavChild
 * @property {React.ReactNode} [badge] - Optional badge component to display next to the child item label.
 * @property {string | number} id - Unique identifier for the child navigation item.
 * @property {string} [label] - The text label displayed for the child navigation item.
 * @property {React.ReactNode} [menuNode] - Optional custom React node to render instead of the default anchor tag structure.
 * @property {string} [path] - The URL path the child navigation item links to. Required if `menuNode` is not provided.
 * @property {React.ElementType} [activeIcon] - Optional icon component displayed when the child item is active.
 * @property {React.ElementType} [inActiveIcon] - Optional icon component displayed when the child item is inactive.
 */
/**
 * @typedef {Object} SidebarItemNav
 * @property {React.ElementType} [activeIcon] - Optional icon component displayed when the item is active or contains the active child.
 * @property {React.ElementType} [inActiveIcon] - Optional icon component displayed when the item is inactive.
 * @property {React.ReactNode} [badge] - Optional badge component to display next to the item label.
 * @property {SidebarItemNavChild[]} [childrens] - An array of child navigation item objects to be rendered in a nested list when the item is expanded.
 * @property {string | number} id - Unique identifier for the navigation item.
 * @property {boolean} [isDefaultExpanded] - If true, the item will be expanded by default (only applicable if it has children).
 * @property {string} [label] - The text label displayed for the navigation item.
 * @property {React.ReactNode} [menuNode] - Optional custom React node to render instead of the default anchor tag structure. If provided, `path`, `label`, `activeIcon`, `inActiveIcon`, `badge`, and `childrens` might be ignored for the root item rendering.
 * @property {string} [path] - The URL path the navigation item links to. Required if `menuNode` is not provided.
 */
/**
 * @typedef {Object} SidebarItemProps
 * @property {(string | number)} [currentId] - The ID of the currently active item in the entire sidebar navigation. Used to determine active styles.
 * @property {(event: React.MouseEvent<HTMLAnchorElement>, navItem: SidebarItemNav | SidebarItemNavChild) => void} [handleNavigationClick] - A callback function triggered when any navigation item (root or child) is clicked. Receives the click event and the corresponding nav data object.
 * @property {string} [id] - Optional unique HTML id attribute to apply to the root `<li>` element.
 * @property {'brand' | 'simple'} [modifier='simple'] - Specifies the visual variant of the item. 'brand' applies brand-specific styling, 'simple' applies default styling.
 * @property {SidebarItemNav} nav - An object containing the data for the sidebar item, including its label, path, icons, potential children, and other configuration.
 * @property {(isExpanded: boolean, navData: SidebarItemNav) => void} [onChevronIconClick] - Callback function invoked when the chevron icon (for expandable items) is clicked. Receives the new expanded state (true/false) and the nav data object of the item.
 * @property {string} section - A string identifier for the section this item belongs to, used for keyboard navigation context (e.g., navigating between items using arrow keys).
 */
import React from "react";
/**
 * Represents a single item within the SidebarNavigation component.
 * It can be a simple link, an expandable item with children, or render a custom node.
 * Handles rendering, active state indication, expansion/collapse of nested items,
 * and keyboard navigation within its scope.
 *
 * @component
 * @param {SidebarItemProps} props - The props for the SidebarItem component.
 * @returns {JSX.Element | null} The rendered sidebar item element or null if nav prop is not provided.
 *
 * @example
 * const navItem = {
 *   id: 'dashboard',
 *   label: 'Dashboard',
 *   path: '/dashboard',
 *   inActiveIcon: HomeIconInactive,
 *   activeIcon: HomeIconActive,
 * };
 * <SidebarItem
 *   nav={navItem}
 *   currentId={selectedItemId}
 *   handleNavigationClick={handleItemClick}
 *   section="main"
 *   modifier="brand"
 * />
 *
 * @example
 * const navParentItem = {
 *   id: 'settings',
 *   label: 'Settings',
 *   inActiveIcon: SettingsIconInactive,
 *   activeIcon: SettingsIconActive,
 *   childrens: [
 *     { id: 'profile', label: 'Profile', path: '/settings/profile' },
 *     { id: 'billing', label: 'Billing', path: '/settings/billing' },
 *   ],
 * };
 * <SidebarItem
 *   nav={navParentItem}
 *   currentId={selectedItemId}
 *   handleNavigationClick={handleItemClick}
 *   section="main"
 * />
 *
 * @accessibility
 * - Uses `role="treeitem"` for semantic structure within the navigation tree.
 * - Uses `aria-current="true"` to indicate the currently active item.
 * - Uses `aria-expanded` to indicate the state of expandable items.
 * - Uses `aria-owns` to associate the parent item with its group of children (`ul`).
 * - Supports keyboard navigation:
 *   - `Enter` or `Space`: Activates the item (navigates or toggles expansion).
 *   - `ArrowDown`: Moves focus to the next item in the tree.
 *   - `ArrowUp`: Moves focus to the previous item in the tree.
 *   - `ArrowRight`: Expands a collapsed item or moves to the first child if already expanded.
 *   - `ArrowLeft`: Collapses an expanded item or moves focus to the parent item if collapsed/no children.
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigation--sidebarwith-brand-image|Storybook Example}
 * @see {@link https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4|Zeroheight Design Specs}
 */
declare const SidebarItem: {
    ({ currentId, any, handleNavigationClick, any, id, any, modifier, any, nav, any, onChevronIconClick, any, section: any, }: any): React.ReactElement;
    propTypes: {
        /** Item id of current active item in the sidebar navigation. */
        currentId: any;
        /** A callback function triggered when the sidebar item is clicked. Passes event and nav object. */
        handleNavigationClick: any;
        /** Prop to add unique id attribute to root `<li>` element of the component. */
        id: any;
        /** Specifies whether the item is 'brand' or 'simple' variant, to apply additional styles accordingly. */
        modifier: any;
        /** An object containing data related to the sidebar item and its nested children. */
        nav: any;
        /** Callback function on click of chevron icon with item's current expanded state and nav data */
        onChevronIconClick: any;
        /** Specifies the section the item is part of, used for keyboard navigation context. */
        section: any;
    };
    defaultProps: {
        currentId: any;
        handleNavigationClick: any;
        id: any;
        modifier: string;
        nav: any;
        onChevronIconClick: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigation--sidebarwith-brand-image
 * @zeroHeight https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4
 * @end
 */
export default SidebarItem;
