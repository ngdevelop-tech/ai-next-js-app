import React from 'react';
declare function useSidebarItem(currentId: any, handleNavigationClick: any, nav: any, onChevronIconClick: any): {
    current: boolean;
    onChevronClickHandler: (e: any) => React.ReactElement;
    handleClick: (event: any, currentNav: any, parentNav: {}, any: any) => React.ReactElement;
    isExpanded: any;
    isIconPresent: any;
    isNestedItem: any;
    leftArrowClick: () => React.ReactElement;
    rightArrowClick: () => React.ReactElement;
    updateItemsRef: (id: any, elememnt: any) => React.ReactElement;
    itemClickHandler: (event: any) => React.ReactElement;
};
export default useSidebarItem;
