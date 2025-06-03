import { KEYBOARD_KEYS } from '../../shared/keyEnums';

export const getVisibleTreeitems = (
  level,
  extraFilterCallback = null,
  selectors = ''
) => {
  const treeNode = document.querySelector(
    `[data-test="multi-selector-level${level}"]`
  );

  const treeList =
    treeNode?.querySelectorAll(`[role="button"],[role="menu"]${selectors}`) ||
    [];
  return extraFilterCallback
    ? Array.from(treeList).filter(extraFilterCallback)
    : treeList;
};

export const setFocusToNextTreeitem = (
  treeitem,
  visibleTreeitems,
  section = 0,
  moveToNextTree = false,
  onFocusOut = null
) => {
  let nextItem = false;

  for (let i = visibleTreeitems.length - 1; i >= 0; i -= 1) {
    const ti = visibleTreeitems[i];
    if (ti === treeitem) {
      break;
    }
    nextItem = ti;
  }
  if (nextItem) {
    nextItem.focus();
  } else if (moveToNextTree) {
    const nextTree = getVisibleTreeitems(section + 1);
    if (nextTree.length > 0) {
      nextTree[0]?.focus();
      onFocusOut?.();
    }
  }
};

export const setFocusToPreviousTreeitem = (
  treeitem,
  visibleTreeitems,
  section = 0,
  moveToPrevTree = false,
  onFocusOut = null
) => {
  let prevItem = false;

  for (let i = 0; i < visibleTreeitems.length; i += 1) {
    const ti = visibleTreeitems[i];
    if (ti === treeitem) {
      break;
    }
    prevItem = ti;
  }

  if (prevItem) {
    prevItem.focus();
  } else if (moveToPrevTree) {
    const prevTree = getVisibleTreeitems(section - 1);
    if (prevTree.length > 0) {
      prevTree[0]?.focus();
      onFocusOut?.();
    }
  }
};

const fetchUpDownNodes = (level, excludeType, jumpTwice = true) => {
  const visibleTreeitems = Array.from(getVisibleTreeitems(level));
  let first =
    visibleTreeitems
      .map((item) => item.getAttribute('data-id'))
      .indexOf(excludeType) - 1;
  const last =
    visibleTreeitems
      .map((item) => item.getAttribute('data-id'))
      .lastIndexOf(excludeType) + 1;
  if (jumpTwice) {
    let prevToFirst = first - 1;
    while (
      prevToFirst >= 0 &&
      visibleTreeitems[prevToFirst].getAttribute('data-id') ===
        visibleTreeitems[first].getAttribute('data-id')
    ) {
      first = prevToFirst;
      prevToFirst -= 1;
    }
  }
  return {
    up: first >= 0 ? visibleTreeitems[first] : visibleTreeitems[0],
    down: last + 1 < visibleTreeitems.length ? visibleTreeitems[last] : null
  };
};

export const handleOnKeyDown = ({ event, level, onEnter }) => {
  const {
    ENTER,
    SPACE,
    RIGHT,
    ARROW_RIGHT,
    LEFT,
    ARROW_LEFT,
    ARROW_UP,
    ARROW_DOWN
  } = KEYBOARD_KEYS;
  const tgt = event.currentTarget;
  let flag = false;
  const { key } = event;
  const visibleTreeitems = getVisibleTreeitems(level);

  if (event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  switch (key) {
    case SPACE:
    case ENTER:
      onEnter?.();
      flag = true;
      break;

    case ARROW_DOWN:
      setFocusToNextTreeitem(tgt, visibleTreeitems);
      flag = true;
      break;

    case ARROW_UP:
      setFocusToPreviousTreeitem(tgt, visibleTreeitems);
      flag = true;
      break;

    case RIGHT:
    case ARROW_RIGHT:
      getVisibleTreeitems(level + 1)[0]?.focus();
      flag = true;
      break;

    case LEFT:
    case ARROW_LEFT:
      getVisibleTreeitems(level - 1)[0]?.focus();
      flag = true;
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

export const handleOnKeyDownHorizontal = ({
  event,
  level,
  onEnter,
  row,
  onFocusOut = null,
  jumpTwice,
  dataId,
  filteringFunction
}) => {
  const {
    ENTER,
    SPACE,
    RIGHT,
    ARROW_RIGHT,
    LEFT,
    ARROW_LEFT,
    ARROW_UP,
    ARROW_DOWN
  } = KEYBOARD_KEYS;
  const tgt = event.currentTarget;
  let flag = false;
  const { key } = event;
  let visibleTreeitemsForUpDown;
  let visibleTreeitemsForRightLeft;
  let defaultFilteringFunction = (item) => item.getAttribute('data-id') === row;
  if (filteringFunction) defaultFilteringFunction = filteringFunction;
  if (event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  switch (key) {
    case SPACE:
    case ENTER:
      onEnter?.();
      flag = true;
      break;

    case RIGHT:
    case ARROW_RIGHT:
      visibleTreeitemsForRightLeft = getVisibleTreeitems(
        level,
        defaultFilteringFunction,
        dataId ? `,[data-id="${dataId}"]` : undefined
      );
      setFocusToNextTreeitem(
        tgt,
        visibleTreeitemsForRightLeft,
        level,
        true,
        onFocusOut
      );
      flag = true;
      break;

    case LEFT:
    case ARROW_LEFT:
      visibleTreeitemsForRightLeft = getVisibleTreeitems(
        level,
        defaultFilteringFunction,
        dataId ? `,[data-id="${dataId}"]` : undefined
      );
      setFocusToPreviousTreeitem(
        tgt,
        visibleTreeitemsForRightLeft,
        level,
        true,
        onFocusOut
      );
      flag = true;
      break;

    case ARROW_DOWN:
      visibleTreeitemsForUpDown = fetchUpDownNodes(level, row, jumpTwice);
      if (visibleTreeitemsForUpDown.down) {
        visibleTreeitemsForUpDown.down.focus();
        onFocusOut?.();
      }
      flag = true;
      break;

    case ARROW_UP:
      visibleTreeitemsForUpDown = fetchUpDownNodes(level, row, jumpTwice);
      if (visibleTreeitemsForUpDown.up) {
        visibleTreeitemsForUpDown.up?.focus();
        onFocusOut?.();
      }
      flag = true;
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};
