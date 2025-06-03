import React from 'react';
export declare const getHeaderWidth: (ele: any, minw: any, maxw: any) => React.ReactElement;
declare function useTableCell(onSort: any, sortDirection: any, cellId: any, sortable: any, onWidthUpdate: any, variant: any, isResizable: any, isCurrentResizerFocused: any, minWidth: any, maxWidth: any, monospacedDigits: any, compressedHeaderDisplayStyles: any): {
    sortAttrs: {
        role: string;
        onClick: () => React.ReactElement;
        onKeyDown: (e: any) => void;
        tabIndex: number;
    };
    sortedColumn: any;
    colRef: React.RefObject<any>;
    trackerRef: React.RefObject<any>;
    resizerToggleRef: React.RefObject<any>;
    headerCellWidth: number;
    seperatorHeight: number;
    isDragging: boolean;
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
    isKeyboardDragging: boolean;
    setIsKeyboardDragging: React.Dispatch<React.SetStateAction<boolean>>;
    setHeaderCellWidth: React.Dispatch<React.SetStateAction<number>>;
    cellContentClassName: any;
};
export default useTableCell;
