import { useEffect, useRef, useState } from 'react';

import { closestMultipleOfStep, isWithinRange } from './utils';

const useSlider = ({
  minRange,
  maxRange,
  defaultValue,
  value,
  stepper,
  onChange
}) => {
  const isStepperVariant = !!stepper.stepperCount;
  const stepperRange = isStepperVariant
    ? (maxRange.value - minRange.value) / (stepper.stepperCount - 1)
    : 0;
  const modifiedDefaultValue = isStepperVariant
    ? closestMultipleOfStep(defaultValue, stepperRange, minRange.value)
    : defaultValue;
  const updatedDefaultValue =
    defaultValue && isWithinRange(minRange, maxRange, defaultValue)
      ? [modifiedDefaultValue].flat()
      : [minRange.value];

  const [sliderValue, setSliderValue] = useState(updatedDefaultValue);
  const [isPointerFocus, setIsPointerFocus] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const thumbRef = useRef(null);

  useEffect(() => {
    if (value !== undefined && isWithinRange(minRange, maxRange, value)) {
      const modifiedValue = isStepperVariant
        ? closestMultipleOfStep(value, stepperRange, minRange.value)
        : value;
      setSliderValue([modifiedValue].flat());
    }
  }, [value, minRange, maxRange, stepperRange, isStepperVariant]);

  const onValueChange = (option) => {
    setSliderValue(option);
    onChange?.(option);
  };

  const handleBlur = () => {
    thumbRef.current?.blur();
  };

  useEffect(() => {
    const removeFocus = () => setIsPointerFocus(false);

    const addFocus = () => {
      if (thumbRef.current !== document.activeElement) setIsPointerFocus(true);
    };

    document.addEventListener('pointerdown', removeFocus);
    document.addEventListener('pointerup', addFocus);

    return () => {
      document.removeEventListener('pointerdown', removeFocus);
      document.removeEventListener('pointerup', addFocus);
    };
  }, []);

  const handleMouseOver = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);

  return {
    onValueChange,
    sliderValue,
    stepperRange,
    handleBlur,
    handleMouseLeave,
    handleMouseOver,
    isMouseOver,
    thumbRef,
    isPointerFocus
  };
};

export default useSlider;
