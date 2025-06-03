/**
 * @typedef {Object} SidebarNavigationItem
 * @property {string} id - Unique identifier for the navigation item.
 * @property {React.ReactNode} icon - Icon to display for the navigation item.
 * @property {string} label - Text label for the navigation item. Used for display and accessibility (e.g., aria-label).
 * @property {string} path - The navigation path associated with the item.
 * @property {boolean} [active] - Indicates if the item is currently active/selected.
 */
/**
 * @typedef {Object} SidebarNavigationWCollapseProps
 * @property {number} collapsedCutoff - Cutoff value in pixels to trigger collapsed sidebar. Below this width, the sidebar shows only icons with tooltips.
 * @property {string} [id] - Optional unique identifier for the root element of the component.
 * @property {(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>, item: SidebarNavigationItem) => void} [onClick] - Callback function triggered when a sidebar item is clicked. Receives the event and the clicked item's data.
 * @property {SidebarNavigationItem[]} [sidebarPrimaryNavigation] - Array of navigation items for the primary section.
 * @property {SidebarNavigationItem[]} [sidebarSecondaryNavigation] - Array of navigation items for the secondary section, typically placed at the bottom.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply to the root `div` element for additional styling.
 */
import React from "react";
/**
 * Renders a sidebar navigation component that collapses to an icon-only view
 * below a specified viewport width (`collapsedCutoff`). It supports primary and
 * secondary navigation sections.
 *
 * @component
 * @example
 * const primaryNav = [
 *   { id: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard', path: '/dashboard', active: true },
 *   { id: 'reports', icon: <ReportsIcon />, label: 'Reports', path: '/reports' },
 * ];
 * const secondaryNav = [
 *   { id: 'settings', icon: <SettingsIcon />, label: 'Settings', path: '/settings' },
 * ];
 *
 * <SidebarNavigationWCollapse
 *   collapsedCutoff={768}
 *   sidebarPrimaryNavigation={primaryNav}
 *   sidebarSecondaryNavigation={secondaryNav}
 *   onClick={(e, item) => console.log('Clicked:', item.label)}
 * />
 *
 * @see Tooltip
 * @see Button
 * @accessibility
 * - Uses `role="button"` and `tabIndex={0}` for non-button elements acting as clickable items.
 * - Uses `onKeyDown` to handle Enter key presses for accessibility on non-button elements.
 * - Uses `aria-label` on buttons in collapsed view via Tooltip's `triggerAriaLabel`.
 * - Tooltips provide accessible names for icon-only buttons in the collapsed state.
 * @type {React.FC<SidebarNavigationWCollapseProps>}
 */
declare const SidebarNavigationWCollapse: {
    ({ collapsedCutoff: any, id, any, onClick, any, sidebarPrimaryNavigation, any, sidebarSecondaryNavigation, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Cutoff value in pixels to trigger collapsed sidebar */
        collapsedCutoff: any;
        /** Optional unique identifier for the root element of the component. */
        id: any;
        /** Callback function triggered when a sidebar item is clicked. Receives the event and the clicked item's data. */
        onClick: any;
        /** Array of navigation items for the primary section. */
        sidebarPrimaryNavigation: any;
        /** Array of navigation items for the secondary section, typically placed at the bottom. */
        sidebarSecondaryNavigation: any;
        /** Optional custom CSS class name to apply to the root `div` element for additional styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigationwcollapse--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4
 * @end
 */
export default SidebarNavigationWCollapse;
