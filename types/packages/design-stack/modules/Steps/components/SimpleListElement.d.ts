/**
 * @typedef {Object} SimpleListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 * @property {number} stepIdx
 */
import React from "react";
/**
 * @type {React.FC<SimpleListElementProps>}
 */
declare const SimpleListElement: {
    ({ onClick, any, step: any, stepIdx }: any): React.ReactElement;
    propTypes: {
        /** Callback function called on click of a step  */
        onClick: any;
        /** Step data which is to be rendered */
        step: any;
        stepIdx: any;
    };
};
export default SimpleListElement;
