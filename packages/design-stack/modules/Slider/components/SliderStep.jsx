/**
 * @typedef {Object} SliderStepProps
 * @property {number} currentValue - The Slider current value to display within the Slider Tooltip component
 * @property {boolean} disabled? - Disabled boolean value to change label color
 * @property {number} index - The Stepper current index value to handle label placement
 * @property {boolean} isMouseOver - Value to change stepper background color when mouse over the slider
 * @property {any} label? - The Stepper Slider label for each step
 * @property {Record<string, any>} stepper? - The Stepper Slider details of number of stepper and its label
 * @property {number} stepperCount
 * @property {any} stepperLabel?
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<SliderStepProps>}
 */
const SliderStep = ({
  currentValue,
  disabled,
  label,
  index,
  isMouseOver,
  stepper,
  stepperRange,
}) => (
  <div className="relative flex h-5 w-full justify-center py-1.5 first:w-1/2 first:justify-start last:w-1/2 last:justify-end ">
    <div
      className={twClassNames(
        "h-full w-0.5 rounded-full bg-neutral-inverse-weakest ",
        {
          "bg-brand-default": currentValue > stepperRange * index,
          "bg-brand-default-hover":
            isMouseOver && currentValue > stepperRange * index,
          "bg-neutral-strongest": disabled,
        }
      )}
    />
    {!!label && (
      <p
        style={{ wordWrap: "break-word" }}
        className={twClassNames(
          "absolute top-5 w-full px-0.5 text-center text-xs leading-5 text-neutral-weak",
          {
            "text-left": index === 0,
            "text-right": index === stepper.stepperLabel.length - 1,
            "text-neutral-weaker": disabled,
          }
        )}
      >
        {label}
      </p>
    )}
  </div>
);

SliderStep.propTypes = {
  /** The Slider current value to display within the Slider Tooltip component */
  currentValue: PropTypes.number.isRequired,
  /** Disabled boolean value to change label color */
  disabled: PropTypes.bool,
  /** The Stepper current index value to handle label placement */
  index: PropTypes.number.isRequired,
  /** Value to change stepper background color when mouse over the slider */
  isMouseOver: PropTypes.bool.isRequired,
  /** The Stepper Slider label for each step */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The Stepper Slider details of number of stepper and its label */
  stepper: PropTypes.shape({
    stepperCount: PropTypes.number.isRequired,
    stepperLabel: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  /** The Stepper Slider interval value based on range between minimum value and maximum value  */
  stepperRange: PropTypes.number.isRequired,
};

SliderStep.defaultProps = {
  disabled: false,
  label: "",
  stepper: { stepperCount: 2, stepperLabel: [] },
};

export default SliderStep;
