/**
 * @typedef {Object} StepProps
 * @property {any} children?
 * @property {string} connectorClassName?
 * @property {string} contentClassName?
 * @property {boolean} disabled?
 * @property {(event: React.MouseEvent<any>) => void} onClick?
 * @property {any} stepKey?
 * @property {string} wrapperClassname?
 */
import React from "react";
/**
 * @type {React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>}
 */
declare const Step: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default Step;
