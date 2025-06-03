/**
 * @typedef {Object} SingleColumnLayoutProps
 * @property {(event: React.MouseEvent<any>) => void} handleClick? - Callback triggered on clicking title
 * @property {Record<string, any>} item? - Item data containing lauout details
 * @property {string} background?
 * @property {string} description?
 * @property {string} href?
 * @property {any} icon?
 * @property {(event: React.MouseEvent<any>) => void} onClick?
 * @property {string} title?
 */
import React from "react";
/**
 * @type {React.FC<SingleColumnLayoutProps>}
 */
declare const SingleColumnLayout: {
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
export default SingleColumnLayout;
