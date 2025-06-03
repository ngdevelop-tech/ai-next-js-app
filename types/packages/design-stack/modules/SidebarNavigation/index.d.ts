/**
 * @typedef {Object} SidebarPrimarySection
 * @property {string} sectionId - A unique identifier for the section. This should match the `section` prop of the `SidebarItem` components within this section.
 * @property {string} [sectionLabel] - An optional label displayed above the section's options when the sidebar is expanded.
 * @property {React.ReactNode} sectionOptions - The `SidebarItem` components or other React nodes belonging to this section.
 */
/**
 * @typedef {Object} SidebarProps
 * @property {string} [actionPanelTitle] - Title displayed above the CTAs in the action panel at the bottom of the expanded sidebar. Required if CTAs are provided.
 * @property {string} [ariaLabel="Main navigation"] - Accessible label for the navigation landmark (<nav> element). Helps screen reader users understand the purpose of the navigation.
 *   @accessibility Provides context for assistive technologies. Defaults to "Main navigation".
 *   @example "Product features navigation"
 * @property {string} [collapsibleButtonWrapperClassName] - Custom CSS class name to apply additional styles to the wrapper div of the collapse/expand button.
 * @property {string} [ctaOneLabel] - Label for the primary call-to-action button in the action panel. Requires `ctaOneOnClick` and `actionPanelTitle`.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [ctaOneOnClick] - Callback function executed when the primary CTA button is clicked. Requires `ctaOneLabel` and `actionPanelTitle`.
 * @property {string} [ctaTwoLabel] - Label for the secondary call-to-action button in the action panel. Requires `ctaTwoOnClick` and `actionPanelTitle`.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [ctaTwoOnClick] - Callback function executed when the secondary CTA button is clicked. Requires `ctaTwoLabel` and `actionPanelTitle`.
 * @property {string} [id] - Unique HTML id attribute applied to the root <nav> element of the sidebar.
 * @property {boolean} [isCollapsible=false] - If `true`, the sidebar can be collapsed and expanded via a button and hover/focus interactions.
 * @property {boolean} [isDefaultCollapsed=false] - If `true`, the sidebar will be initially rendered in its collapsed state. Only effective if `isCollapsible` is also `true`.
 * @property {string} [label] - **Deprecated.** Label for the sidebar component. Use `sidebarPrimarySections` instead.
 * @property {React.ReactNode} [navigationOptionsWithLabel] - **Deprecated.** Node containing navigation items. Use `sidebarPrimarySections` instead.
 * @property {(isCollapsed: boolean) => void} [onSidebarCollapse] - Callback function executed when the collapse/expand button is clicked. Receives the new collapsed state (`true` for collapsed, `false` for expanded) as an argument.
 * @property {(isHoverTriggered: boolean) => void} [onSidebarCollapseHover] - Callback function executed when the sidebar's collapsed state changes due to hover or focus interactions (only when `isCollapsible` is true). Receives `true` if hover/focus caused expansion, `false` otherwise.
 * @property {string} [outerWrapperClassName] - Custom CSS class name to apply additional styles to the outermost `div` wrapper containing the sidebar and the collapse button.
 * @property {React.ReactNode} [sidebarHeader] - Custom content to be displayed at the top of the sidebar when it is expanded. Typically used for logos, brand names, or main navigation links.
 * @property {React.ReactNode} [sidebarHeaderCollapsed] - Custom content to be displayed at the top of the sidebar when it is collapsed. Should be a compact version of `sidebarHeader`, often just an icon or small logo.
 * @property {string} [sidebarPrimaryLabel] - **Deprecated.** Primary label for the sidebar component. Use `sidebarPrimarySections` instead.
 * @property {React.ReactNode} [sidebarPrimaryNavigation] - **Deprecated.** Node containing primary navigation items. Use `sidebarPrimarySections` instead. <b>Note</b>: Refrain from using random keys when looping `SidebarItem`.
 * @property {SidebarPrimarySection[]} [sidebarPrimarySections] - An array of section objects defining the primary navigation structure. This is the preferred way to define sidebar content, replacing deprecated props like `label`, `navigationOptionsWithLabel`, `sidebarPrimaryLabel`, and `sidebarPrimaryNavigation`. Each object defines a section with an optional label and its navigation items. `sectionId` within each object should match the `section` prop of contained `SidebarItem`s. <b>Note</b>: Refrain from using random keys when looping `SidebarItem` within `sectionOptions`.
 * @property {React.ReactNode} [sidebarSecondaryNavigation] - Node containing secondary navigation items, typically displayed below the primary sections and action panel. Often used for settings, help, or logout links. <b>Note</b>: Refrain from using random keys when looping `SidebarItem`.
 * @property {string} [wrapperClassName] - Custom CSS class name to apply additional styles directly to the `nav` element of the sidebar.
 */
import React from "react";
/**
 * Sidebar Navigation provides a structured way to navigate through different sections of an application.
 * It can be configured to be collapsible and supports primary/secondary navigation sections,
 * a header area, and an optional action panel with CTAs.
 *
 * @component
 * @example
 * // Basic Sidebar with primary sections
 * <Sidebar
 *   isCollapsible
 *   sidebarHeader={<BrandLogo />}
 *   sidebarHeaderCollapsed={<BrandIcon />}
 *   sidebarPrimarySections={[
 *     {
 *       sectionId: 'dashboard',
 *       sectionOptions: <SidebarItem label="Dashboard" icon={<DashboardIcon />} href="/dashboard" />
 *     },
 *     {
 *       sectionId: 'products',
 *       sectionLabel: 'Manage',
 *       sectionOptions: (
 *         <>
 *           <SidebarItem label="Products" icon={<ProductIcon />} href="/products" section="products" />
 *           <SidebarItem label="Orders" icon={<OrderIcon />} href="/orders" section="products" />
 *         </>
 *       )
 *     }
 *   ]}
 *   sidebarSecondaryNavigation={
 *     <SidebarItem label="Settings" icon={<SettingsIcon />} href="/settings" />
 *   }
 * />
 *
 * @example
 * // Sidebar with Action Panel
 * <Sidebar
 *   // ... other props
 *   actionPanelTitle="Need Help?"
 *   ctaOneLabel="Contact Support"
 *   ctaOneOnClick={() => console.log('Contact clicked')}
 *   ctaTwoLabel="View Docs"
 *   ctaTwoOnClick={() => window.open('/docs', '_blank')}
 * />
 *
 * @param {SidebarProps} props - The props for the Sidebar component.
 * @returns {React.ReactElement} The rendered Sidebar component.
 * @see SidebarItem
 * @accessibility
 * - Uses a `<nav>` element for semantic structure.
 * - `aria-label` prop provides context for the navigation landmark.
 * - Interactive elements like `SidebarItem` and the collapse button should be keyboard accessible.
 * - Ensures sufficient color contrast for text and icons.
 */
declare const Sidebar: {
    ({ actionPanelTitle, any, ariaLabel, any, collapsibleButtonWrapperClassName, any, ctaOneLabel, any, ctaOneOnClick, any, ctaTwoLabel, any, ctaTwoOnClick, any, id, any, isCollapsible, any, isDefaultCollapsed, any, label, any, navigationOptionsWithLabel, any, onSidebarCollapse, any, onSidebarCollapseHover, any, outerWrapperClassName, any, sidebarHeader, any, sidebarHeaderCollapsed, any, sidebarPrimarySections, any, sidebarPrimaryLabel, any, sidebarPrimaryNavigation, any, sidebarSecondaryNavigation, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Action panel title. */
        actionPanelTitle: any;
        /**
         * Accessible label for the navigation landmark. This helps screen reader users understand
         * the purpose of the navigation. If not provided or empty, defaults to "Main navigation".
         * @example
         * ariaLabel="Product navigation"
         */
        ariaLabel: any;
        /** A custom CSS class name to style the collapsible button. */
        collapsibleButtonWrapperClassName: any;
        /** The first CTA label. */
        ctaOneLabel: any;
        /** The first CTA onClick function. */
        ctaOneOnClick: any;
        /** The second CTA label. */
        ctaTwoLabel: any;
        /** The second CTA onClick function. */
        ctaTwoOnClick: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Specify if the sidebar can be colapsed */
        isCollapsible: any;
        /** Specify if the default sidebar state */
        isDefaultCollapsed: any;
        /** Label for the sidebar component. Cannot be used in combination with `sidebarPrimarySections`. `label` and `navigationOptionsWithLabel` props to be deprecated soon. */
        label: any;
        /** Node containing the content that will be displayed within the navigation options section of the sidebar. Cannot be used in combination with `sidebarPrimarySections`. `label` and `navigationOptionsWithLabel` props to be deprecated soon. */
        navigationOptionsWithLabel: any;
        /** Callback on clicking collapsible button */
        onSidebarCollapse: any;
        /** Callback on hovering of sidebar */
        onSidebarCollapseHover: any;
        /** A custom CSS class name to style the wrapper of the entire sidebar. */
        outerWrapperClassName: any;
        /** Node containing the content that will be displayed within the header section of the sidebar */
        sidebarHeader: any;
        /** Node containing the content that will be displayed within the header section of the collapsed sidebar */
        sidebarHeaderCollapsed: any;
        /** Primary label for the sidebar component. Cannot be used in combination with `sidebarPrimarySections`. `sidebarPrimaryLabel` and `sidebarPrimaryNavigation` props to be deprecated soon. */
        sidebarPrimaryLabel: any;
        /** Node containing the content that will be displayed within the primary navigation section of the sidebar. Cannot be used in combination with `sidebarPrimarySections`. `sidebarPrimaryLabel` and `sidebarPrimaryNavigation` props to be deprecated soon. <b>Note</b>: Refrain from using adding random keys on looping SidebarItem */
        sidebarPrimaryNavigation: any;
        /** Array of sections to be displayed. Use either primary/navigation props or `sidebarPrimarySections`. `sectionId` should match `section` prop of contained `SidebarItem`. Refrain from using adding random keys on looping SidebarItem */
        sidebarPrimarySections: any;
        /** 'Node containing the content that will be displayed within the the secondary navigation section of the sidebar.<b>Note</b>: Refrain from using adding random keys on looping SidebarItem */
        sidebarSecondaryNavigation: any;
        /** A custom CSS class name to style the sidebar. */
        wrapperClassName: any;
    };
    defaultProps: {
        actionPanelTitle: string;
        collapsibleButtonWrapperClassName: string;
        ctaOneLabel: string;
        ctaOneOnClick: any;
        ctaTwoLabel: string;
        ctaTwoOnClick: any;
        id: any;
        isCollapsible: boolean;
        isDefaultCollapsed: boolean;
        label: string;
        navigationOptionsWithLabel: any;
        onSidebarCollapse: any;
        onSidebarCollapseHover: any;
        outerWrapperClassName: string;
        sidebarHeader: any;
        sidebarHeaderCollapsed: any;
        sidebarPrimarySections: any;
        sidebarPrimaryLabel: string;
        sidebarPrimaryNavigation: any;
        sidebarSecondaryNavigation: any;
        wrapperClassName: string;
        ariaLabel: string;
    };
    displayName: string;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigation--sidebarwith-brand-image
 * @zeroHeight https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4
 * @end
 */
export default Sidebar;
