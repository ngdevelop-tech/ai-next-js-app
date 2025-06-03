import throttleFn from "@/packages/utils/throttleFn";
import { useCallback, useMemo, useRef } from "react";

export const useListFeedsNode = ref => {
  const footerNodeRef = useRef(null);
  const containerRef = useRef(null);
  const targetRef = ref;
  const combinedRefs = useCallback(
    node => {
      containerRef.current = node;
      if (ref) {
        if (typeof ref === "function") {
          ref(node);
        } else {
          targetRef.current = node;
        }
      }
    },
    [ref, targetRef]
  );
  const showHoverContainer = () => {
    if (footerNodeRef?.current) {
      footerNodeRef.current.style.opacity = "100";
      footerNodeRef.current.style.zIndex = "1";
    }
  };
  const hideHoverContainer = () => {
    if (footerNodeRef?.current) {
      footerNodeRef.current.style.opacity = "0";
      footerNodeRef.current.style.zIndex = "-1";
    }
  };
  const handleMouseMove = useCallback(e => {
    const containerRect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    if (
      containerRect.bottom - e.clientY < 40 &&
      containerRect.bottom < viewportHeight
    ) {
      showHoverContainer();
    } else {
      hideHoverContainer();
    }
  }, []);

  const throttledMouseMove = useMemo(
    () => throttleFn(handleMouseMove, 500, { trailing: false }),
    [handleMouseMove]
  );
  return {
    throttledMouseMove,
    footerNodeRef,
    hideHoverContainer,
    showHoverContainer,
    combinedRefs,
  };
};
