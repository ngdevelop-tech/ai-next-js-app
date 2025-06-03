import { useRef, useState } from 'react';

export const usePannableContainer = ({ ref }) => {
  const [clicking, setClicking] = useState(false);
  const [previousX, setPreviousX] = useState(0);
  const [previousY, setPreviousY] = useState(0);
  let scrollRef = useRef(null);
  if (ref) scrollRef = ref;

  const handleMouseDown = (e) => {
    e.preventDefault();
    setPreviousX(e.clientX);
    setPreviousY(e.clientY);
    setClicking(true);
  };

  const handleMouseUp = () => {
    setClicking(false);
  };

  const handleMouseMove = (e) => {
    if (clicking) {
      e.preventDefault();
      const scrollElement = scrollRef?.current;
      if (scrollElement) {
        scrollElement.scrollLeft += previousX - e.clientX;
        scrollElement.scrollTop += previousY - e.clientY;
      }
      setPreviousX(e.clientX);
      setPreviousY(e.clientY);
    }
  };

  const handleMouseLeave = () => {
    setClicking(false);
  };

  return {
    scrollRef,
    clicking,
    handleMouseLeave,
    handleMouseUp,
    handleMouseDown,
    handleMouseMove
  };
};
