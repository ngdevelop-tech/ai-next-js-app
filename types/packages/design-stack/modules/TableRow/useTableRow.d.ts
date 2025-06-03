import React from 'react';
declare function useTableRow(): {
    isHeaderRow: boolean;
    setIsHeaderRow: React.Dispatch<React.SetStateAction<boolean>>;
    handleFocusOut: (e: any) => React.ReactElement;
    handleFocus: (e: any) => React.ReactElement;
    currentRowElementRef: React.RefObject<unknown>;
};
export default useTableRow;
