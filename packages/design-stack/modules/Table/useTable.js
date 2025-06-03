import { useEffect, useRef, useState } from 'react';

function useTable(
  useEnhancedKeyboardNavigation,
  sortedColumnId,
  defaultSortedColumnId
) {
  const tableRef = useRef(null);
  const [sortedColumn, setSortedColumn] = useState(
    sortedColumnId ?? defaultSortedColumnId
  );

  useEffect(() => {
    setSortedColumn(sortedColumnId ?? defaultSortedColumnId);
  }, [sortedColumnId, defaultSortedColumnId]);

  return { sortedColumn, setSortedColumn, tableRef };
}

export default useTable;
