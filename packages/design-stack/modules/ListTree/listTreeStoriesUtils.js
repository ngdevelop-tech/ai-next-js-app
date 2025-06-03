import { createContext } from 'react';
import { arrayMove } from '@dnd-kit/sortable';

export const handleDragEnd = (
  event,
  setHideDragOverlay,
  setDroppedId,
  setDraggedRowData,
  setTableData,
  items
) => {
  const { over, active } = event;
  setHideDragOverlay(true);
  setDroppedId(over?.id);
  setDraggedRowData({
    active,
    over
  });

  if (over && over?.data?.current?.sortable && active?.id !== over?.id) {
    setTableData((prevData) => {
      const oldIndex = items.indexOf(active?.id);
      const newIndex = items.indexOf(over?.id);
      return arrayMove(prevData, oldIndex, newIndex);
    });
  }
};

export const handleDragEndMultiple = (
  checkedItemsArray,
  event,
  setHideDragOverlay,
  setDroppedId,
  setDraggedRowData,
  setTableData,
  isCheckedItemDragged,
  items
) => {
  const { over, active } = event;
  setHideDragOverlay(true);
  setDroppedId(over?.id);
  const draggedRowDataValues = {
    active: {
      ...active,
      droppedIds: isCheckedItemDragged
        ? checkedItemsArray.map((el) => parseInt(el, 10))
        : [active.id]
    },
    over
  };
  setDraggedRowData(draggedRowDataValues);

  // `Dropped row id/ids ${draggedRowDataValues.active.droppedIds.join(',')} to id ${over.id}`

  const deleteObjectsById = (inputArray, idsToDelete) => {
    const result = {
      filteredArray: [],
      removedItems: []
    };
    inputArray.forEach((obj) => {
      if (idsToDelete.includes(obj.id)) {
        result.removedItems.push(obj);
      } else {
        result.filteredArray.push(obj);
      }
    });
    return result;
  };

  if (over && over?.data?.current?.sortable && active?.id !== over?.id) {
    if (isCheckedItemDragged === false) {
      setTableData((prevData) => {
        const oldIndex = items.indexOf(active?.id);
        const newIndex = items.indexOf(over?.id);
        return arrayMove(prevData, oldIndex, newIndex);
      });
    } else {
      // handle multiple drop reordering inside of a table
      setTableData((prevData) => {
        const prevDataCopied = [...prevData];
        const { filteredArray, removedItems } = deleteObjectsById(
          prevDataCopied,
          draggedRowDataValues.active.droppedIds
        );
        let indexOfItemDropped = filteredArray.findIndex(
          (el) => el.id === over.id
        );
        const indexOfOver = items.indexOf(draggedRowDataValues.over.id);
        const indexOfActive = items.indexOf(draggedRowDataValues.active.id);
        if (indexOfOver > indexOfActive) {
          // if the drop is below then add the items below the active item (item its dropped on)
          indexOfItemDropped += 1;
        }
        filteredArray.splice(indexOfItemDropped, 0, ...removedItems);
        return filteredArray;
      });
    }
  }
};

export const handleClickOption = (
  e,
  setTableData,
  draggedRowData,
  setDroppedId,
  action
) => {
  if (action === 'Copy Test Cases') {
    //  copy API Call
  } else if (action === 'Move Test Cases') {
    //  move API call
    if (draggedRowData?.active?.droppedIds?.length > 0) {
      setTableData((prevData) =>
        prevData.filter(
          (item) => !draggedRowData.active.droppedIds.includes(item.id)
        )
      );
    } else {
      setTableData((prevData) =>
        prevData.filter((item) => item.id !== draggedRowData.active.id)
      );
    }
  }
  setDroppedId(null);
};

export const handleClickOptionMultiple = (
  e,
  setTableData,
  draggedRowData,
  setDroppedId,
  setCheckedItem,
  action
) => {
  if (action === 'Copy Test Cases') {
    //  copy API Call
  } else if (action === 'Move Test Cases') {
    //  move API call
    if (draggedRowData?.active?.droppedIds?.length > 0) {
      setCheckedItem((prev) => {
        const data = { ...prev };
        draggedRowData.active.droppedIds.forEach((el) => {
          if (data[el]) {
            data[el] = false;
          }
        });
        return data;
      });
      setTableData((prevData) =>
        prevData.filter(
          (item) => !draggedRowData.active.droppedIds.includes(item.id)
        )
      );
    } else {
      setTableData((prevData) =>
        prevData.filter((item) => item.id !== draggedRowData.active.id)
      );
    }
  }
  setDroppedId(null);
};

export const TreeContext = createContext();

function getDragDepth(offset, indentationWidth) {
  return Math.round(offset / indentationWidth);
}

function getMaxDepth({ previousItem }) {
  if (previousItem) {
    return previousItem.indent + 1;
  }

  return 0;
}

function getMinDepth({ nextItem }) {
  if (nextItem) {
    return nextItem.indent;
  }

  return 0;
}

export const flattenTree = (tree) => {
  const flattened = [];

  const traverse = (nodes, parentId = null, indent = 1) => {
    nodes.forEach((node) => {
      const { uuid, name, label, contents } = node;
      const hasChild = contents && contents.length > 0;
      const childCount = hasChild ? contents.length : 0;

      flattened.push({
        uuid,
        name,
        label,
        parentId,
        indent,
        hasChild: !!hasChild,
        childCount: childCount || undefined,
        contents
      });

      if (hasChild) {
        traverse(contents, uuid, indent + 1);
      }
    });
  };

  traverse(tree);
  return flattened;
};

export function buildTree(data) {
  // Create a map to store the nodes by their uuid
  const nodeMap = new Map();

  // Create the root nodes array
  const rootNodes = [];

  // Initialize nodes and store them in the map
  data.forEach((item) => {
    // Initialize the contents array
    const newItem = item;
    newItem.contents = [];
    nodeMap.set(newItem.uuid, newItem);
  });

  // Build the tree by linking children to their parents
  data.forEach((item) => {
    if (item.parentId === null) {
      // If the item has no parent, it is a root node
      rootNodes.push(item);
    } else {
      // If the item has a parent, add it to the parent's contents array
      const parent = nodeMap.get(item.parentId);
      if (parent) {
        parent.contents.push(item);
      }
    }
  });

  return rootNodes;
}
// This function calculates the new depth and parent ID for an item being dragged within a hierarchical list,
// ensuring that the item's new position respects the constraints set by the adjacent items.
export function getProjection(
  items,
  activeId,
  overId,
  dragOffset,
  indentationWidth
) {
  const overItemIndex = items.findIndex(({ uuid }) => uuid === overId);
  const activeItemIndex = items.findIndex(({ uuid }) => uuid === activeId);
  const activeItem = items[activeItemIndex];
  const newItems = arrayMove(items.slice(), activeItemIndex, overItemIndex);
  const previousItem = newItems[overItemIndex - 1];
  const nextItem = newItems[overItemIndex + 1];
  const dragDepth = getDragDepth(dragOffset, indentationWidth);
  const projectedDepth = activeItem.indent + dragDepth;
  const maxDepth = getMaxDepth({ previousItem });
  const minDepth = getMinDepth({ nextItem });

  let depth = projectedDepth;

  if (projectedDepth >= maxDepth) {
    depth = maxDepth;
  } else if (projectedDepth < minDepth) {
    depth = minDepth;
  }

  function getParentId() {
    if (depth === 0 || !previousItem) {
      return null;
    }

    if (depth === previousItem.indent) {
      return previousItem.parentId;
    }

    if (depth > previousItem.indent) {
      return previousItem.uuid;
    }

    const newParent = newItems
      .slice(0, overItemIndex)
      .reverse()
      .find((item) => item.indent === depth)?.parentId;

    return newParent ?? null;
  }

  return { depth, maxDepth, minDepth, parentId: getParentId() };
}

export function flatten(items, parentId = null, depth = 1) {
  return items.reduce(
    (acc, item, index) => [
      ...acc,
      { uuid: item.uuid, parentId, indent: depth, index, ...item },
      ...flatten(item.contents || [], item.uuid, depth + 1)
    ],
    []
  );
}

export function removeChildrenOf(items, uuids) {
  const excludeparentIds = [...uuids];

  return items.filter((item) => {
    if (item.parentId && excludeparentIds.includes(item.parentId)) {
      if (item.contents && item.contents.length) {
        excludeparentIds.push(item.uuid);
      }
      return false;
    }

    return true;
  });
}

export function cloneDeep(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const clone = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    clone[key] = cloneDeep(obj[key]);
  });

  return clone;
}
