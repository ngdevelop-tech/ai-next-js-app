import React from "react";
declare function useResizeable(onResizeStop: any, onResizeStart: any, handle: any, resizeHandles: any): {
    onResizeStartCallback: (...props: any) => React.ReactElement;
    onResizeStopCallback: (...props: any) => React.ReactElement;
    defaultHandleProps: (__resizeHandleAxis: any, ref: any) => React.ReactElement;
    resizeRef: React.RefObject<any>;
};
export default useResizeable;
