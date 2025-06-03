/**
 * @typedef {Object} TwoColumnLayoutProps
 * @property {(event: React.MouseEvent<any>) => void} handleClick? - Callback triggered on clicking title
 * @property {Record<string, any>} item? - Item data containing lauout details
 * @property {string} background?
 * @property {string} description?
 * @property {any} icon?
 * @property {(event: React.MouseEvent<any>) => void} onClick?
 * @property {string} title?
 */
import React from "react";
/**
 * @type {React.FC<TwoColumnLayoutProps>}
 */
declare const TwoColumnLayout: {
    ({ handleClick: any, item }: any): React.ReactElement;
    propTypes: {
        /** Callback triggered on clicking title */
        handleClick: any;
        /** Item data containing lauout details */
        item: any;
    };
    defaultProps: {
        handleClick: any;
    };
};
export default TwoColumnLayout;
