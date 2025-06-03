import { useLayoutEffect, useRef, useState } from 'react';

function useTruncateText(wrapperClassName, children) {
  const [truncatedDataTooltip, setTruncatedDataTooltip] = useState(false);
  const headerNameRef = useRef(null);
  const parentContainerSize = useRef(headerNameRef);
  const showHeaderTooltip = () => {
    const element = headerNameRef.current;
    if (element !== null) {
      // Using a brief delay using setTimeout ensures the element is fully rendered and measured.
      if (element.offsetHeight > 0 && element.offsetWidth > 0) {
        const result =
          element.offsetHeight < element.scrollHeight ||
          element.offsetWidth < element.scrollWidth;
        setTruncatedDataTooltip(result);
      } else {
        setTimeout(() => {
          const result =
            element.offsetHeight < element.scrollHeight ||
            element.offsetWidth < element.scrollWidth;
          setTruncatedDataTooltip(result);
        }, 0);
      }
    } else {
      setTruncatedDataTooltip(false);
    }
  };

  useLayoutEffect(() => {
    showHeaderTooltip();
  }, [children, wrapperClassName]);

  useLayoutEffect(() => {
    showHeaderTooltip();
  }, [parentContainerSize]);

  return { headerNameRef, truncatedDataTooltip, setTruncatedDataTooltip };
}

export default useTruncateText;
