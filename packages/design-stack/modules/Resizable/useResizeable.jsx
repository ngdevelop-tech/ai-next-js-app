import React, { useRef } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";

import { RESIZEABLE_DIRECTIONS } from "./constants/resizeable";

function useResizeable(onResizeStop, onResizeStart, handle, resizeHandles) {
  const resizeRef = useRef(null);
  const onResizeStartCallback = (...props) => {
    if (!handle && resizeRef.current) resizeRef.current.style.opacity = 1;
    onResizeStart?.(...props);
  };
  const onResizeStopCallback = (...props) => {
    if (!handle) resizeRef?.current?.removeAttribute("style");
    onResizeStop?.(...props);
  };

  const defaultHandleProps = (__resizeHandleAxis, ref) => (
    <span
      className={twClassNames("group absolute", {
        "px-1 top-0 h-full left-0 -translate-x-1.5 hover:cursor-col-resize":
          resizeHandles?.includes(RESIZEABLE_DIRECTIONS.W),
        "px-1 top-0 h-full right-0 translate-x-1.5 hover:cursor-col-resize":
          resizeHandles?.includes(RESIZEABLE_DIRECTIONS.E),
        "py-1 bottom-0 h-1 left-0 w-full translate-y-1 hover:cursor-row-resize":
          resizeHandles?.includes(RESIZEABLE_DIRECTIONS.S),
        "py-1 top-0 h-1 left-0 w-full -translate-y-1 hover:cursor-row-resize":
          resizeHandles?.includes(RESIZEABLE_DIRECTIONS.N),
      })}
      ref={ref}
    >
      <span
        className={twClassNames(
          "block bg-brand-default opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          {
            "w-0.5 h-full":
              resizeHandles?.includes(RESIZEABLE_DIRECTIONS.E) ||
              resizeHandles?.includes(RESIZEABLE_DIRECTIONS.W),
            "w-full h-0.5":
              resizeHandles?.includes(RESIZEABLE_DIRECTIONS.S) ||
              resizeHandles?.includes(RESIZEABLE_DIRECTIONS.N),
          }
        )}
        ref={resizeRef}
      />
    </span>
  );
  return {
    onResizeStartCallback,
    onResizeStopCallback,
    defaultHandleProps,
    resizeRef,
  };
}

export default useResizeable;
