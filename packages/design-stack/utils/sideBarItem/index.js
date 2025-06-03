import { KEYBOARD_KEYS } from '../../shared/keyEnums';

export const getVisibleTreeitems = (section) => {
  const treeNode = document.querySelector(
    `[data-test="side-bar-navigation-${section}"]`
  );
  return treeNode?.querySelectorAll('[role="treeitem"]');
};

export const setFocusToNextTreeitem = (treeitem, section) => {
  const visibleTreeitems = getVisibleTreeitems(section);
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
  }
};

export const setFocusToPreviousTreeitem = (treeitem, section) => {
  const visibleTreeitems = getVisibleTreeitems(section);
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
  }
};

export const handleKeyDown = (
  event,
  section,
  onEnter,
  OnLeftArrow,
  onRightArrow
) => {
  const { ENTER, SPACE, RIGHT, ARROW_RIGHT, LEFT, ARROW_LEFT, HOME, END } =
    KEYBOARD_KEYS;
  const tgt = event.currentTarget;
  let flag = false;
  const { key } = event;
  const visibleTreeitems = getVisibleTreeitems(section);

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
      onRightArrow?.(tgt);
      flag = true;
      break;

    case LEFT:
    case ARROW_LEFT:
      OnLeftArrow?.(tgt);
      flag = true;
      break;

    case HOME:
      visibleTreeitems?.[0]?.focus();
      flag = true;
      break;

    case END:
      visibleTreeitems?.[visibleTreeitems.length - 1]?.focus();

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
