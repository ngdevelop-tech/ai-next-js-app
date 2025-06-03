import { useContext, useEffect, useId, useRef, useState } from 'react';

import { ComboboxContextData } from '../ComboBox/context';

const useComboboxAddNewItem = ({ showQuery }) => {
  const [width, setWidth] = useState({
    prefixWidth: '',
    suffixWidth: '',
    contentWidth: ''
  });
  const [truncated, setTruncated] = useState(false);
  const { query } = useContext(ComboboxContextData);
  const containerRef = useRef();
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const uniqueId = useId();

  const content = !showQuery ? '' : query;

  useEffect(() => {
    if (showQuery)
      setWidth((w) => ({
        ...w,
        prefixWidth: firstRef.current.offsetWidth,
        suffixWidth: thirdRef.current.offsetWidth
      }));
  }, [showQuery]);

  useEffect(() => {
    if (showQuery) {
      const maxWidth =
        containerRef.current.offsetWidth -
        width.prefixWidth +
        width.suffixWidth;

      setWidth((w) => ({
        ...w,
        contentWidth: maxWidth
      }));
    }
  }, [query, width.prefixWidth, width.suffixWidth, showQuery]);

  useEffect(() => {
    if (showQuery && secondRef && secondRef.current)
      setTruncated(
        secondRef.current.scrollWidth > secondRef.current.clientWidth
      );
  }, [secondRef, query, showQuery]);
  return {
    uniqueId,
    query,
    containerRef,
    firstRef,
    width,
    truncated,
    secondRef,
    content,
    thirdRef
  };
};

export default useComboboxAddNewItem;
