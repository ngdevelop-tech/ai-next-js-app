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
/**
 * @type {React.FC<SliderStepProps>}
 */
declare const SliderStep: {
    ({ currentValue: any, disabled: any, label: any, index: any, isMouseOver: any, stepper: any, stepperRange: any, }: any): React.ReactElement;
    propTypes: {
        /** The Slider current value to display within the Slider Tooltip component */
        currentValue: any;
        /** Disabled boolean value to change label color */
        disabled: any;
        /** The Stepper current index value to handle label placement */
        index: any;
        /** Value to change stepper background color when mouse over the slider */
        isMouseOver: any;
        /** The Stepper Slider label for each step */
        label: any;
        /** The Stepper Slider details of number of stepper and its label */
        stepper: any;
        /** The Stepper Slider interval value based on range between minimum value and maximum value  */
        stepperRange: any;
    };
    defaultProps: {
        disabled: boolean;
        label: string;
        stepper: {
            stepperCount: number;
            stepperLabel: any[];
        };
    };
};
export default SliderStep;
