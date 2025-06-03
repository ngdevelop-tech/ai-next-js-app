import { useEffect, useMemo, useRef, useState } from 'react';

function useSidebarItem(
  currentId,
  handleNavigationClick,
  nav,
  onChevronIconClick
) {
  const navChilds = useMemo(
    () =>
      nav.childrens && nav.childrens.length
        ? nav.childrens.map((subNav) => subNav.id)
        : [],
    [nav]
  );
  const current = currentId === nav.id;
  const isNestedItem = nav.childrens && nav.childrens.length;
  const isIconPresent = nav.activeIcon || nav.inActiveIcon;
  const [isExpanded, setIsExpanded] = useState(
    navChilds.includes(currentId) || nav.isDefaultExpanded || false
  );

  const itemsRef = useRef({});

  const updateItemsRef = (id, elememnt) => {
    itemsRef.current[id] = elememnt;
  };

  const handleClick = (event, currentNav, parentNav = {}) => {
    event.preventDefault();
    handleNavigationClick?.(currentNav, parentNav);
  };

  const onChevronClickHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newState = !isExpanded;
    onChevronIconClick?.(newState, nav);
    setIsExpanded(newState);
  };

  const itemClickHandler = (event) => {
    event.preventDefault();

    if (handleNavigationClick) {
      handleClick(event, nav);
      if (isNestedItem) {
        const newState = !isExpanded;
        onChevronIconClick?.(newState, nav);
        setIsExpanded(newState);
      }
    } else if (isNestedItem) onChevronClickHandler(event);
  };
  const rightArrowClick = () =>
    // node
    {
      if (isNestedItem) {
        if (isExpanded) {
          // for future use case of moving focus to next item
          // setFocusToNextTreeitem(node, section);
        } else {
          setIsExpanded(true);
        }
      }
    };

  const leftArrowClick = () =>
    // node
    {
      if (isNestedItem) {
        if (isExpanded) {
          setIsExpanded(false);
        } else {
          // for future use case of moving focus to previous item
          // setFocusToPreviousTreeitem(node, section);
        }
      }
    };

  // automatic expand when child item is selected
  useEffect(() => {
    if (navChilds.includes(currentId)) setIsExpanded(true);
  }, [currentId, navChilds]);

  // Scroll the currently selected item to appear inside the view
  useEffect(() => {
    if (itemsRef.current[currentId]) {
      itemsRef.current[currentId].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [currentId, isExpanded]);

  return {
    current,
    onChevronClickHandler,
    handleClick,
    isExpanded,
    isIconPresent,
    isNestedItem,
    leftArrowClick,
    rightArrowClick,
    updateItemsRef,
    itemClickHandler
  };
}

export default useSidebarItem;
