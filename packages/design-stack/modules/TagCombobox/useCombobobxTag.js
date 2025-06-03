import { useCallback, useEffect, useState } from 'react';

import { findLastActionItem } from '../ComboBox/utils';

const findUniqueBetweenTwoArray = (options, ourValue) =>
  options.filter((o1) => !ourValue.some((o2) => o1.value === o2.value));

const useComboboxTag = ({
  comboboxProps,
  defaultValue,
  deleteOnBackspaceRef,
  isControlledElement,
  value,
  options,
  onInputChange,
  onChange,
  onClearAll,
  onTagCrossClick,
  comparator,
  comboboxRef
}) => {
  const [visibleItems, setVisibleItems] = useState(options);
  const [currentSelected, setCurrentSelected] = useState(
    defaultValue || value || []
  );
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (value) setCurrentSelected(value);
  }, [value]);

  useEffect(() => {
    const filteration = () => {
      let filtered = [];
      if (typeof comparator === 'function') {
        filtered = options.filter((option) =>
          comparator(option, query, currentSelected)
        );
      } else {
        filtered = options.filter(
          (option) =>
            option.label.toLowerCase().includes(query.toLowerCase()) &&
            !currentSelected.some(
              (visibleOption) => visibleOption.value === option.value
            )
        );
      }
      setVisibleItems(filtered);
    };

    // runs for uncontrolled
    // runs for controlled and onInputChange is not present
    // doesn't run for controlled and onInputChange is present
    if (!isControlledElement || !onInputChange) filteration();
  }, [
    comparator,
    currentSelected,
    isControlledElement,
    onInputChange,
    options,
    query
  ]);

  useEffect(() => {
    // runs for controlled and onInputChange is present
    // here client will take care of filtering the options based on 'query', in their 'onInputChange' callback
    if (isControlledElement && onInputChange) {
      const filteredArray = findUniqueBetweenTwoArray(options, value);
      setVisibleItems(filteredArray);
    }
  }, [options, value, isControlledElement, onInputChange]);

  useEffect(() => {
    const handleBackspace = (event) => {
      if (
        !comboboxProps.disabled &&
        event.keyCode === 8 &&
        query.length <= 0 &&
        currentSelected.length
      ) {
        // When query.length <=0 and there is atleast 1 currentSelected value send callback to consumer with new value of selected items
        const filteredSelected = [...currentSelected];
        const removedItem = filteredSelected.pop();

        if (deleteOnBackspaceRef)
          deleteOnBackspaceRef.current?.(filteredSelected, removedItem);

        if (!isControlledElement) {
          setCurrentSelected(filteredSelected);
        }
      }
    };

    const tempRef = comboboxRef.current;

    tempRef.addEventListener('keydown', handleBackspace);

    return () => {
      tempRef.removeEventListener('keydown', handleBackspace);
    };
  }, [
    query,
    currentSelected,
    setCurrentSelected,
    deleteOnBackspaceRef,
    isControlledElement,
    comboboxProps.disabled,
    comboboxRef
  ]);

  const handleChange = async (inputValue) => {
    setQuery(inputValue.trim());

    if (onInputChange) {
      onInputChange(inputValue);
    }
  };

  const onChangeCombobox = useCallback(
    (val) => {
      const lastActionItemControlled = findLastActionItem(
        val,
        isControlledElement ? value : currentSelected
      );
      onChange(lastActionItemControlled, val);
      setCurrentSelected(isControlledElement ? currentSelected : val);
      setQuery('');
    },
    [currentSelected, isControlledElement, onChange, value]
  );

  const onClearAllRef = useCallback(() => {
    if (onClearAll) {
      onClearAll([]);
    }
    if (!isControlledElement) {
      setCurrentSelected([]);
    }
  }, [isControlledElement, onClearAll]);

  const onTagCloseRef = useCallback(
    (removedItem) => {
      // Create new array of currentSelected excluding the current item and pass that array to consumer
      const filteredSelected = currentSelected.filter(
        (item) => item.value !== removedItem.value
      );

      if (!isControlledElement) {
        setCurrentSelected(filteredSelected);
      }

      if (onTagCrossClick) onTagCrossClick(filteredSelected, removedItem);
    },
    [isControlledElement, onTagCrossClick, currentSelected]
  );

  return {
    visibleItems,
    currentSelected,
    query,
    onChangeCombobox,
    onClearAllRef,
    onTagCloseRef,
    setQuery,
    handleChange
  };
};

export default useComboboxTag;
