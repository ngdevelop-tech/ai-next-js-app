import { useEffect, useRef, useState } from 'react';

import { SIDEBAR_EXPANSION_DURATION } from './constants/sidebarNavigation';

function useSidebarNavigation({
  isCollapsible,
  isDefaultCollapsed,
  sidebarPrimarySections,
  sidebarPrimaryLabel,
  sidebarPrimaryNavigation,
  label,
  navigationOptionsWithLabel,
  onSidebarCollapseHover
}) {
  const [isCollapsed, setIsCollapsed] = useState(isDefaultCollapsed);
  const [isCollapsedOnHover, setIsCollapsedOnHover] =
    useState(isDefaultCollapsed);
  const isCollapsedStateActive =
    (!isCollapsed ? isCollapsed : isCollapsedOnHover) && isCollapsible;
  const [showItemsInExpandedState, setShowCollapsedItems] = useState(
    !isCollapsedStateActive
  );

  const clearTimeoutId = useRef();
  // sideBarHeader is conditionally rendered, actionPanel can break lines and change layout in opacity-0, so mocking our SIDEBAR_EXPANSION_DURATION as transition does not work here
  useEffect(() => {
    if (isCollapsedStateActive) {
      clearTimeout(clearTimeoutId?.current);
      setShowCollapsedItems(false);
      onSidebarCollapseHover?.(true);
    } else {
      clearTimeoutId.current = setTimeout(() => {
        setShowCollapsedItems(true);
        onSidebarCollapseHover?.(false);
      }, SIDEBAR_EXPANSION_DURATION - 100);
    }
  }, [isCollapsedStateActive, onSidebarCollapseHover]);

  let sectionArray = [];

  if (!sidebarPrimarySections) {
    if (sidebarPrimaryLabel || sidebarPrimaryNavigation) {
      sectionArray.push({
        sectionLabel: sidebarPrimaryLabel,
        sectionId: 'primary',
        sectionOptions: sidebarPrimaryNavigation
      });
    }
    if (label || navigationOptionsWithLabel) {
      sectionArray.push({
        sectionLabel: label,
        sectionId: 'label',
        sectionOptions: navigationOptionsWithLabel
      });
    }
  } else {
    sectionArray = [...sidebarPrimarySections];
  }

  return {
    sectionArray,
    showItemsInExpandedState,
    setIsCollapsedOnHover,
    setIsCollapsed,
    isCollapsedStateActive,
    isCollapsedOnHover,
    isCollapsed
  };
}
export default useSidebarNavigation;
