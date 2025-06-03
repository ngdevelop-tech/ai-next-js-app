import React from 'react';
declare function useSidebarNavigation({ isCollapsible, isDefaultCollapsed, sidebarPrimarySections, sidebarPrimaryLabel, sidebarPrimaryNavigation, label, navigationOptionsWithLabel, onSidebarCollapseHover }: {
    isCollapsible: any;
    isDefaultCollapsed: any;
    sidebarPrimarySections: any;
    sidebarPrimaryLabel: any;
    sidebarPrimaryNavigation: any;
    label: any;
    navigationOptionsWithLabel: any;
    onSidebarCollapseHover: any;
}): {
    sectionArray: any[];
    showItemsInExpandedState: boolean;
    setIsCollapsedOnHover: React.Dispatch<any>;
    setIsCollapsed: React.Dispatch<any>;
    isCollapsedStateActive: any;
    isCollapsedOnHover: any;
    isCollapsed: any;
};
export default useSidebarNavigation;
