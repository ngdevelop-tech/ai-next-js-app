import { useCallback, useRef } from 'react';

import { KEYBOARD_KEYS } from '../../shared/keyEnums';
import listTreeCheckboxHelper from '../ListTree/utils';

const { bfsTraversal } = listTreeCheckboxHelper;
export const useListTreeRootWrapper = ({
  filteredUUIDs,
  focusIDPrefix,
  listData,
  onSelectCallback,
  openNodeMap,
  setOpenNodeMap
}) => {
  const wrapperRef = useRef(null);
  const focusDatasetName = 'data-focus-id';

  const getAllFocusAbleItems = useCallback(
    (idToFind) => {
      const focusableNodesNodeList = document.querySelectorAll(
        `[${focusDatasetName}^="${focusIDPrefix}"]`
      );
      const focusableNodes = [...focusableNodesNodeList];
      if (!idToFind) return { focusableNodes };
      const indexOfItem = focusableNodes.findIndex(
        (el) => el?.dataset?.focusId === focusIDPrefix + idToFind
      );
      return { focusableNodes, indexOfItem };
    },
    [focusIDPrefix]
  );

  const getFocusID = useCallback(() => {
    const { activeElement } = document;
    // get focus id from active element
    const focusId = activeElement?.dataset?.focusId;
    let parentFocusId;
    if (!focusId) {
      // if no focus id then get focus id from closet element which will always be listtreenode div
      parentFocusId = activeElement.closest(`[${focusDatasetName}]`)?.dataset
        ?.focusId;
    }
    const parsedFocusId = focusId?.replace(focusIDPrefix, '');
    const parsedParentFocusId = parentFocusId?.replace(focusIDPrefix, '');
    return { parsedFocusId, parsedParentFocusId };
  }, [focusIDPrefix]);

  const handleArrowRightPress = useCallback(
    (actionID) => {
      const item = wrapperRef?.current?.querySelector(
        `[${focusDatasetName}="${focusIDPrefix + actionID}"]`
      );
      if (item?.dataset?.hasChildren === 'false') {
        // focus the next node if node has no children
        const { focusableNodes: allFocusAbleItems, indexOfItem } =
          getAllFocusAbleItems(actionID);
        if (indexOfItem === -1) return;
        allFocusAbleItems[indexOfItem + 1]?.focus();
      } else if (!openNodeMap[actionID]) {
        // open node if the current focused node is in closed state
        setOpenNodeMap((prev) => {
          const newList = { ...prev };
          newList[actionID] = true;
          return newList;
        });
        setTimeout(() => {
          const item1 = wrapperRef?.current?.querySelector(
            `[${focusDatasetName}="${focusIDPrefix + actionID}"]`
          );
          item1.focus();
        }, 0);
      } else {
        // focus the next node if node is closed
        const { focusableNodes, indexOfItem } = getAllFocusAbleItems(actionID);
        if (indexOfItem === -1) return;
        focusableNodes[indexOfItem + 1]?.focus();
      }
    },
    [focusIDPrefix, getAllFocusAbleItems, openNodeMap, setOpenNodeMap]
  );

  const handleArrowLeftPress = useCallback(
    (actionID) => {
      const item = wrapperRef?.current?.querySelector(
        `[${focusDatasetName}="${focusIDPrefix + actionID}"]`
      );
      if (item?.dataset?.hasChildren === 'false') {
        // focus previous node if the current focused node has no children
        const { focusableNodes: allFocusableNodes, indexOfItem } =
          getAllFocusAbleItems(actionID);
        if (indexOfItem === -1) return;
        allFocusableNodes[indexOfItem - 1]?.focus();
      } else if (openNodeMap[actionID] === true) {
        // close node if the current focused node is in open state
        setOpenNodeMap((prev) => {
          const newList = { ...prev };
          newList[actionID] = false;
          return newList;
        });
        setTimeout(() => {
          const item1 = wrapperRef?.current?.querySelector(
            `[${focusDatasetName}="${focusIDPrefix + actionID}"]`
          );
          item1.focus();
        }, 0);
      } else {
        // focus previous node if the current focused node has no children
        const { focusableNodes, indexOfItem } = getAllFocusAbleItems(actionID);
        if (indexOfItem === -1) return;
        focusableNodes[indexOfItem - 1]?.focus();
      }
    },
    [focusIDPrefix, getAllFocusAbleItems, openNodeMap, setOpenNodeMap]
  );

  const handleSelectionPress = useCallback(
    (focusId) => {
      // init selection callback
      if (focusId) onSelectCallback(focusId);
    },
    [onSelectCallback]
  );

  const handleHomePress = useCallback(() => {
    // move focus to first element
    const { focusableNodes } = getAllFocusAbleItems();
    if (focusableNodes?.length > 0) focusableNodes[0]?.focus();
  }, [getAllFocusAbleItems]);

  const handleEndPress = useCallback(() => {
    // move focus to last element
    const { focusableNodes } = getAllFocusAbleItems();
    if (focusableNodes?.length > 0) focusableNodes?.at(-1)?.focus();
  }, [getAllFocusAbleItems]);

  const handleArrowUpPress = useCallback(
    (actionID) => {
      const { focusableNodes, indexOfItem } = getAllFocusAbleItems(actionID);
      if (indexOfItem === -1) return;
      focusableNodes[indexOfItem - 1]?.focus();
    },
    [getAllFocusAbleItems]
  );

  const handleArrowDownPress = useCallback(
    (actionID) => {
      const { focusableNodes, indexOfItem } = getAllFocusAbleItems(actionID);
      if (indexOfItem === -1) return;
      focusableNodes[indexOfItem + 1]?.focus();
    },
    [getAllFocusAbleItems]
  );

  const handleAsteriskPress = useCallback(() => {
    const newOpenNodeMap = { ...openNodeMap };
    bfsTraversal({ contents: listData }, (item) => {
      newOpenNodeMap[item?.uuid] = true;
      return true;
    });
    setOpenNodeMap(newOpenNodeMap);
  }, [listData, openNodeMap, setOpenNodeMap]);

  const getLastItemUsingDFS = useCallback((item) => {
    if (item?.contents?.length > 0) {
      return getLastItemUsingDFS(item?.contents?.at(-1));
    }
    return item?.uuid;
  }, []);

  const handleCtrlArrowDownPress = useCallback(() => {
    let id;
    const filteredUUIDsHierarchyArray =
      filteredUUIDs?.filteredUUIDsWithHierarchy
        ? Object.keys(filteredUUIDs?.filteredUUIDsWithHierarchy)
        : [];
    if (filteredUUIDsHierarchyArray?.length) {
      // if search enabled then get last search index using hierarchy array and get its last node
      const lastSearchItemID = filteredUUIDsHierarchyArray?.at(-1);
      id = getLastItemUsingDFS(filteredUUIDs?.searchedUUIDs[lastSearchItemID]);
    } else {
      // if search not enabled then use last data index and get its last node
      id = getLastItemUsingDFS(listData?.at(-1));
    }
    const newOpenNodeMap = { ...openNodeMap };
    const datasplit = id?.replaceAll('-', '').split('');
    datasplit.forEach((_, index) => {
      const parentIds = datasplit?.slice(0, index + 1)?.join('-');
      newOpenNodeMap[parentIds] = true;
    });
    setOpenNodeMap(newOpenNodeMap);
    // hold execution till all the hierarchial nodes are opened and then find dom node.
    setTimeout(() => {
      wrapperRef?.current
        ?.querySelector(`[${focusDatasetName}="${focusIDPrefix + id}"]`)
        ?.focus();
    }, 10);
  }, [
    filteredUUIDs?.filteredUUIDsWithHierarchy,
    filteredUUIDs?.searchedUUIDs,
    focusIDPrefix,
    getLastItemUsingDFS,
    listData,
    openNodeMap,
    setOpenNodeMap
  ]);

  const onKeyPress = useCallback(
    (e) => {
      const {
        ENTER,
        SPACE,
        ARROW_UP,
        ARROW_RIGHT,
        ARROW_DOWN,
        ARROW_LEFT,
        HOME,
        END
      } = KEYBOARD_KEYS;
      const { parsedFocusId: focusId, parsedParentFocusId: parentFocusId } =
        getFocusID();
      const actionID = focusId || parentFocusId;
      // if parent is list tree then only take action else ignore
      if (focusId !== undefined || parentFocusId !== undefined) {
        switch (e.key) {
          case ARROW_RIGHT:
            handleArrowRightPress(actionID);
            break;
          case ARROW_LEFT:
            handleArrowLeftPress(actionID);
            break;
          case SPACE:
            handleSelectionPress(focusId);
            break;
          case ENTER:
            handleSelectionPress(focusId);
            break;
          case HOME:
            handleHomePress();
            break;
          case END:
            handleEndPress();
            break;
          case ['*']:
            handleAsteriskPress();
            break;
          case ARROW_UP:
            if (e.ctrlKey || e.metaKey) {
              handleHomePress();
            } else {
              handleArrowUpPress(actionID);
            }
            break;
          case ARROW_DOWN:
            if (e.ctrlKey || e.metaKey) {
              handleCtrlArrowDownPress();
            } else {
              handleArrowDownPress(actionID);
            }
            break;
          default:
            break;
        }
      }
    },
    [
      getFocusID,
      handleArrowDownPress,
      handleArrowLeftPress,
      handleArrowRightPress,
      handleArrowUpPress,
      handleAsteriskPress,
      handleCtrlArrowDownPress,
      handleEndPress,
      handleHomePress,
      handleSelectionPress
    ]
  );

  return { wrapperRef, onKeyPress };
};
