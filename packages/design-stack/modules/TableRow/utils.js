import { KEYBOARD_KEYS } from '../../shared/keyEnums';
import { getAllFocusableElements } from '../../utils/common';

export const handleKeyDown = (
  e,
  onRowClick,
  tableRef,
  rowRef,
  useEnhancedKeyboardNavigation
) => {
  if (!useEnhancedKeyboardNavigation) return;

  const rowElementRef = rowRef;

  switch (e.key) {
    case KEYBOARD_KEYS.ENTER:
      onRowClick?.(e);
      break;
    case KEYBOARD_KEYS.ARROW_UP:
      tableRef?.current?.previousElementSibling?.focus();
      rowElementRef.current = null;
      break;
    case KEYBOARD_KEYS.ARROW_DOWN:
      tableRef?.current?.nextElementSibling?.focus();
      rowElementRef.current = null;
      break;
    case KEYBOARD_KEYS.ARROW_LEFT: {
      const intractiveElementArr = getAllFocusableElements(
        tableRef.current,
        "input, button, [role='button'], [role='link'], a, select, textarea"
      );
      const newRowIndex =
        Array.from(intractiveElementArr).indexOf(rowElementRef.current) - 1;
      if (newRowIndex >= 0) {
        intractiveElementArr[newRowIndex].focus();
        if (tableRef.current.parentNode.nodeName !== 'THEAD') {
          intractiveElementArr[newRowIndex].setAttribute('tabindex', '0');
          intractiveElementArr[newRowIndex].addEventListener('blur', () => {
            intractiveElementArr[newRowIndex].setAttribute('tabindex', '-1');
            rowElementRef.current = null;
          });
        }

        rowElementRef.current = intractiveElementArr[newRowIndex];
      } else {
        tableRef?.current?.focus();
        rowElementRef.current = null;
      }
      break;
    }
    case KEYBOARD_KEYS.ARROW_RIGHT: {
      const intractiveElementArr = getAllFocusableElements(
        tableRef.current,
        "input, button, [role='button'], [role='link'], a, select, textarea"
      );
      const newRowIndex =
        Array.from(intractiveElementArr).indexOf(rowElementRef.current) + 1;
      if (newRowIndex < intractiveElementArr.length) {
        intractiveElementArr[newRowIndex].focus();
        if (tableRef.current.parentNode.nodeName !== 'THEAD') {
          intractiveElementArr[newRowIndex].setAttribute('tabindex', '0');
          intractiveElementArr[newRowIndex].addEventListener('blur', () => {
            intractiveElementArr[newRowIndex].setAttribute('tabindex', '-1');
            rowElementRef.current = null;
          });
        }

        rowElementRef.current = intractiveElementArr[newRowIndex];
      }
      break;
    }
    default:
  }
};
