import { useCallback, useEffect, useMemo, useState } from 'react';

export const useScrollTabs = (containerRef, tabsArray, isSlideableTabs) => {
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScrollPos, setMaxScrollPos] = useState(0);

  const disablePrev = useMemo(() => scrollPos <= 0, [scrollPos]);
  const disableNext = useMemo(
    () => scrollPos >= maxScrollPos - 1,
    [scrollPos, maxScrollPos]
  );

  const updateOverflowState = useCallback(() => {
    if (isSlideableTabs) {
      const container = containerRef.current;
      if (container) {
        setIsOverflowed(container.scrollWidth > container.clientWidth);
        const { scrollWidth, offsetWidth } = container;
        const newMaxScrollPos = scrollWidth - offsetWidth;
        setMaxScrollPos(newMaxScrollPos);
      }
    }
  }, [containerRef, isSlideableTabs]);

  useEffect(() => {
    if (isSlideableTabs) {
      updateOverflowState();
      window.addEventListener('resize', updateOverflowState);
    }

    return () => {
      if (isSlideableTabs) {
        window.removeEventListener('resize', updateOverflowState);
      }
    };
  }, [isSlideableTabs, updateOverflowState]);

  useEffect(() => {
    if (isSlideableTabs) {
      updateOverflowState();
    }
  }, [tabsArray, containerRef, isSlideableTabs, updateOverflowState]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollLeft, offsetWidth, scrollWidth } = container;
      const newScrollPos = scrollLeft;
      const newMaxScrollPos = scrollWidth - offsetWidth;
      setScrollPos(newScrollPos);
      setMaxScrollPos(newMaxScrollPos);
    }
  };

  const scroll = (type = 'next') => {
    const container = containerRef.current;
    const items = container.querySelectorAll('.tabs-item');
    const itemWidth = items[0].offsetWidth;

    const newScrollPos =
      type === 'next'
        ? Math.min(scrollPos + itemWidth * 2, maxScrollPos)
        : Math.max(scrollPos - itemWidth * 2, 0);

    container.scrollTo({
      left: newScrollPos,
      behavior: 'smooth'
    });

    setScrollPos(newScrollPos);
  };

  const scrollOnMount = (element) => {
    const container = containerRef.current;
    const currentRef = element.current;
    container.scrollTo({
      left: currentRef.offsetLeft - 50,
      behavior: 'smooth'
    });
  };

  return {
    isOverflowed,
    scroll,
    handleScroll,
    disablePrev,
    disableNext,
    scrollOnMount
  };
};
