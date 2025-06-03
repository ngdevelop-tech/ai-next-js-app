import { useContext, useEffect, useMemo, useRef, useState } from 'react';

import { GalleryContextData } from '../Gallery/context';

export const useGalleryPreviewImage = (src) => {
  const { zoomValue } = useContext(GalleryContextData);
  const [initialWidth, setInitialWidth] = useState(null);
  const [initialHeight, setInitialHeight] = useState(null);
  const imgRef = useRef(null);

  const getImageDimensions = () => {
    const newWidth = imgRef?.current?.width;
    const newHeight = imgRef?.current?.height;
    if (initialWidth === null) {
      setInitialWidth(newWidth);
      setInitialHeight(newHeight);
    }
  };

  const scrollToCenter = () => {
    const container = imgRef?.current?.parentNode;
    const elementToCenter = imgRef?.current;
    const centerX = (container.offsetWidth - elementToCenter.offsetWidth) / 2;
    const centerY = (container.offsetHeight - elementToCenter.offsetHeight) / 2;
    container.scrollLeft = Math.abs(centerX);
    container.scrollTop = Math.abs(centerY);
  };

  useEffect(() => {
    setInitialWidth(null);
    setInitialHeight(null);
    if (imgRef.current) {
      imgRef.current.onload = getImageDimensions;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  useEffect(() => {
    scrollToCenter();
  }, [zoomValue]);

  const newWidth = useMemo(() => {
    const calculatedWith = initialWidth * zoomValue;
    if (!calculatedWith) return 0;
    return calculatedWith;
  }, [initialWidth, zoomValue]);

  const newHeight = useMemo(() => {
    const calculatedHeight = initialHeight * zoomValue;
    if (!calculatedHeight) return 0;
    return calculatedHeight;
  }, [initialHeight, zoomValue]);

  return { imgRef, getImageDimensions, newWidth, newHeight };
};
