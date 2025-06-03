/**
 * @typedef {Object} BulletAndTextListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 */
import React from "react";
/**
 * @type {React.FC<BulletAndTextListElementProps>}
 */
declare const BulletAndTextListElement: {
    ({ onClick, any, step }: any): React.ReactElement;
    propTypes: {
        /** Callback function called on click of a step  */
        onClick: any;
        /** Step data which is to be rendered */
        step: any;
    };
};
export default BulletAndTextListElement;
