/**
 * @typedef {Object} SliderProps
 * @property {any} defaultValue? - Current slider value, defaultValue is undefined and it is uncontrolled.
 * @property {boolean} disabled? - The component is disabled if the passed value is true
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {Record<string, any>} maxRange? - The maximum value of the slider
 * @property {string} label?
 * @property {number} value?
 */

import React, { useId } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import PropTypes from "prop-types";

import SliderStep from "./components/SliderStep";
import SliderToolTip from "./components/SliderToolTip";
import useSlider from "./useSlider";

/**
 * @type {React.FC<SliderProps>}
 */
const Slider = ({
  defaultValue = undefined,
  disabled = false,
  id = null,
  minRange = { label: "0%", value: 0 },
  maxRange = { label: "100%", value: 100 },
  onChange = null,
  tooltipUnit = "",
  value = undefined,
  wrapperClassName = "",
  screenReadTooltip = false,
  showRange = true,
  step = 1,
  stepper = { stepperCount: 0, stepperLabel: [] },
}) => {
  const thumbId = useId();
  const {
    onValueChange,
    sliderValue,
    stepperRange,
    handleBlur,
    handleMouseLeave,
    handleMouseOver,
    isMouseOver,
    thumbRef,
    isPointerFocus,
  } = useSlider({
    minRange,
    maxRange,
    defaultValue,
    value,
    stepper,
    onChange,
  });

  const getCurrentStepLabel = () => {
    if (stepper.stepperLabel && stepper.stepperLabel.length > 0) {
      const stepIndex = Math.floor(
        (sliderValue[0] - minRange.value) /
          ((maxRange.value - minRange.value) / (stepper.stepperCount - 1))
      );
      return stepper.stepperLabel[stepIndex] || "";
    }
    return "";
  };

  const currentStepLabel = getCurrentStepLabel();
  return (
    <div
      className={twClassNames(wrapperClassName)}
      {...(id !== null && { id })}
    >
      <SliderPrimitive.Root
        className={twClassNames(
          "relative my-1 flex h-5 w-full cursor-pointer items-center",
          {
            "cursor-not-allowed": disabled,
          }
        )}
        defaultValue={defaultValue}
        min={minRange.value}
        max={maxRange.value}
        onValueChange={onValueChange}
        value={sliderValue}
        disabled={disabled}
        step={stepperRange || step || 1}
        onValueCommit={handleBlur}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <SliderPrimitive.Track className="relative mx-0.5 h-0.5 flex-1 rounded-sm bg-neutral-strongest">
          <SliderPrimitive.Range
            className={twClassNames(
              "absolute h-full rounded-full bg-brand-default",
              {
                "bg-brand-default-hover": isMouseOver,
                "bg-neutral-strongest": disabled,
              }
            )}
          />
          {stepper.stepperCount >= 2 && (
            <div
              style={{ minWidth: `${24 * (stepper.stepperCount - 1)}px` }}
              className="flex h-full items-center justify-between"
            >
              {new Array(stepper.stepperCount).fill("").map((_, index) => (
                <SliderStep
                  key={Math.random() * 1000}
                  label={stepper.stepperLabel?.[index]}
                  currentValue={sliderValue[0]}
                  disabled={disabled}
                  stepperRange={stepperRange}
                  index={index}
                  isMouseOver={isMouseOver}
                  stepper={stepper}
                />
              ))}
            </div>
          )}
        </SliderPrimitive.Track>
        <SliderToolTip
          value={sliderValue[0]}
          thumbId={thumbId}
          totalValue={maxRange.value + minRange.value}
          tooltipUnit={tooltipUnit}
          screenReadTooltip={screenReadTooltip}
        >
          <SliderPrimitive.Thumb
            role="slider"
            ref={thumbRef}
            id={thumbId}
            onClick={handleBlur}
            aria-label={`${currentStepLabel} in range ${minRange.label} to ${maxRange.label}`}
            aria-valuetext={currentStepLabel}
            className={twClassNames(
              "block h-4 w-4 cursor-pointer rounded-full border-2 border-brand-stronger bg-input-default focus:h-5 focus:w-5 focus:outline-none",
              {
                "focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-brand-strong":
                  isPointerFocus,
                "border-brand-stronger active:cursor-grabbing hover:cursor-grab active:h-5 active:w-5":
                  !disabled,
                "border-brand-strongest": isMouseOver,
                "border-neutral-default hover:border-neutral-default cursor-not-allowed":
                  disabled,
              }
            )}
          >
            <div className="absolute -inset-1 h-6 w-6 rounded-full focus:outline-none" />
          </SliderPrimitive.Thumb>
        </SliderToolTip>
      </SliderPrimitive.Root>
      {!stepper.stepperLabel?.length && showRange ? (
        <div
          className={twClassNames(
            "flex justify-between text-sm font-normal text-neutral-weak",
            {
              " text-neutral-weaker": disabled,
            }
          )}
        >
          <span>{minRange.label}</span>
          <span>{maxRange.label}</span>
        </div>
      ) : null}
    </div>
  );
};

Slider.propTypes = {
  /** Current slider value, defaultValue is undefined and it is uncontrolled. */
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** The component is disabled if the passed value is true */
  disabled: PropTypes.bool,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** The maximum value of the slider */
  maxRange: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
  /** The minimum value of the slider */
  minRange: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
  /** Callback function when slider value is changed */
  onChange: PropTypes.func,
  /** Enable screen reader on slider tooltip content */
  screenReadTooltip: PropTypes.bool,
  /** The component minimum and maximum range is shown if passed value is true */
  showRange: PropTypes.bool,
  /** The component stepping interval value */
  step: PropTypes.number,
  /** */
  stepper: PropTypes.shape({
    stepperCount: PropTypes.number.isRequired,
    stepperLabel: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  /** A unit to represent the type of value shown on tooltip */
  tooltipUnit: PropTypes.string,
  /** Default slider value, and the value state will be controlled externally */
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /** A custom CSS class name to style the root of the component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://63a3f85277e81b426be0fdf8-pldkjnwtee.chromatic.com
 * @zeroHeight https://zeroheight.com/023d5159d/p/327cd0-button/b/4635b4
 * @end
 */

export default Slider;
