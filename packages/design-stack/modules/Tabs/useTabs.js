import { useEffect } from 'react';

function useTabs(tabsArray, setSelectedTab, onTabChange, defaultIndex) {
  const onTabClickHandler = (event, clickedTab) => {
    const thisTab =
      clickedTab ||
      (event.currentTarget?.id
        ? tabsArray.find((tab) => tab.id === event.currentTarget.id)
        : tabsArray.find((tab) => tab.name === event.currentTarget.value));
    setSelectedTab(thisTab);
    onTabChange?.(thisTab, event);
  };

  useEffect(() => {
    if (tabsArray?.length && tabsArray[defaultIndex])
      setSelectedTab(tabsArray[defaultIndex]);
  }, [defaultIndex, setSelectedTab, tabsArray]);

  return { onTabClickHandler };
}

export default useTabs;
