/**
 * @typedef {Object} SliderProps
 * @property {any} defaultValue? - Current slider value, defaultValue is undefined and it is uncontrolled.
 * @property {boolean} disabled? - The component is disabled if the passed value is true
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {Record<string, any>} maxRange? - The maximum value of the slider
 * @property {string} label?
 * @property {number} value?
 */
import React from "react";
/**
 * @type {React.FC<SliderProps>}
 */
declare const Slider: {
    ({ defaultValue, any, disabled, any, id, any, minRange, maxRange, onChange, any, tooltipUnit, any, value, any, wrapperClassName, any, screenReadTooltip, any, showRange, any, step, any, stepper, }: any): React.ReactElement;
    propTypes: {
        /** Current slider value, defaultValue is undefined and it is uncontrolled. */
        defaultValue: any;
        /** The component is disabled if the passed value is true */
        disabled: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** The maximum value of the slider */
        maxRange: any;
        /** The minimum value of the slider */
        minRange: any;
        /** Callback function when slider value is changed */
        onChange: any;
        /** Enable screen reader on slider tooltip content */
        screenReadTooltip: any;
        /** The component minimum and maximum range is shown if passed value is true */
        showRange: any;
        /** The component stepping interval value */
        step: any;
        /** */
        stepper: any;
        /** A unit to represent the type of value shown on tooltip */
        tooltipUnit: any;
        /** Default slider value, and the value state will be controlled externally */
        value: any;
        /** A custom CSS class name to style the root of the component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://63a3f85277e81b426be0fdf8-pldkjnwtee.chromatic.com
 * @zeroHeight https://zeroheight.com/023d5159d/p/327cd0-button/b/4635b4
 * @end
 */
export default Slider;
