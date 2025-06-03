/**
 * @typedef {Object} CircleListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 * @property {number} stepIdx
 * @property {number} stepsLength
 */
import React from "react";
/**
 * @type {React.FC<CircleListElementProps>}
 */
declare const CircleListElement: {
    ({ onClick, any, step: any, stepIdx: any, stepsLength }: any): React.ReactElement;
    propTypes: {
        /** Callback function called on click of a step  */
        onClick: any;
        /** Step data which is to be rendered */
        step: any;
        stepIdx: any;
        stepsLength: any;
    };
};
export default CircleListElement;
