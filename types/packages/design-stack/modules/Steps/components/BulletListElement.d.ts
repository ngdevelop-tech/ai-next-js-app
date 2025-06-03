/**
 * @typedef {Object} BulletListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 */
import React from "react";
/**
 * @type {React.FC<BulletListElementProps>}
 */
declare const BulletListElement: {
    ({ onClick, any, step }: any): React.ReactElement;
    propTypes: {
        /** Callback function called on click of a step  */
        onClick: any;
        /** Step data which is to be rendered */
        step: any;
    };
};
export default BulletListElement;
