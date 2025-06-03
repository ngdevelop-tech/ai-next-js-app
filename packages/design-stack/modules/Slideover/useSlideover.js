import { useCallback, useEffect, useRef } from 'react';

import { getAllFocusableElements } from '../../utils/common';

function useSlideover(onEscPress, show, initialFocusRef) {
  const containerRef = useRef();

  const handleIfEscapeClicked = useCallback(
    (event) => {
      if (event.key === 'Escape' && onEscPress) {
        onEscPress?.();
      }
    },
    [onEscPress]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleIfEscapeClicked);
    return () => {
      window.removeEventListener('keydown', handleIfEscapeClicked);
    };
  }, [handleIfEscapeClicked]);

  useEffect(() => {
    if (show) {
      if (initialFocusRef && initialFocusRef.current) {
        setTimeout(() => {
          initialFocusRef.current?.focus();
        }, 0);
      } else {
        const containerNode = containerRef.current;
        const focusableEls = getAllFocusableElements(
          containerNode,
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableEl = focusableEls[0];
        if (firstFocusableEl) {
          setTimeout(() => {
            firstFocusableEl?.focus();
          }, 0);
        }
      }
    }
  }, [containerRef, initialFocusRef, show]);

  return containerRef;
}

export default useSlideover;
