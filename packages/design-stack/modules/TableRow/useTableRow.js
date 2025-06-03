import { useContext, useEffect, useRef, useState } from 'react';

import { TableContextData, useTable } from '../Table/context';
import { removeTabindexfromInteractiveElements } from '../Table/utils';

function useTableRow() {
  const [isHeaderRow, setIsHeaderRow] = useState(false);
  const currentRowElementRef = useRef();
  const {
    useEnhancedKeyboardNavigation,
    isFirstRow,
    setIsFirstRow,
    setShowResizer,
    sortDirection,
    controlledSortedColumnId
  } = useContext(TableContextData);

  const { tableRef } = useTable();

  useEffect(() => {
    const firstRow = tableRef?.current?.lastChild?.querySelector(
      'tr[data-test="row"]'
    );
    if (useEnhancedKeyboardNavigation) {
      removeTabindexfromInteractiveElements(tableRef?.current?.lastChild);
      if (isFirstRow !== firstRow) {
        isFirstRow?.setAttribute('tabindex', '-1');
        firstRow?.setAttribute('tabindex', '0');
        setIsFirstRow(firstRow);
      }
    }
  }, [
    tableRef,
    isFirstRow,
    useEnhancedKeyboardNavigation,
    setIsFirstRow,
    sortDirection,
    controlledSortedColumnId
  ]);

  const handleFocus = (e) => {
    if (isHeaderRow) {
      setShowResizer(true);
    }
    if (useEnhancedKeyboardNavigation) {
      currentRowElementRef.current = e.currentTarget;
      e.currentTarget.setAttribute('tabindex', '0');
    }
  };
  const handleFocusOut = (e) => {
    if (isHeaderRow) {
      setShowResizer(false);
    }
    if (isFirstRow !== e.currentTarget && useEnhancedKeyboardNavigation) {
      e.currentTarget.setAttribute('tabindex', '-1');
    }
  };
  return {
    isHeaderRow,
    setIsHeaderRow,
    handleFocusOut,
    handleFocus,
    currentRowElementRef
  };
}

export default useTableRow;
