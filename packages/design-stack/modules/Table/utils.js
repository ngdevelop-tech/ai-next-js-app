import { getAllFocusableElements } from '../../utils/common';

export const removeTabindexfromInteractiveElements = (parent) => {
  const interactiveElementsArr = getAllFocusableElements(
    parent,
    "input, button, [role='button'], [role='link'], a, select, textarea"
  );
  interactiveElementsArr?.forEach((element) => {
    if (element && element.getAttribute('tabindex') !== '-1') {
      element.setAttribute('tabindex', '-1');
    }
  });
};
