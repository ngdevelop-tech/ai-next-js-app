/**
 * @typedef {Object} RenderButtonChildrenProps
 * @property {boolean} truncated?
 */
import React from "react";
/**
 * @type {React.FC<RenderButtonChildrenProps>}
 */
declare const RenderButtonChildren: {
    ({ placeholder: any, truncated: any, value }: any): React.ReactElement;
    propTypes: {
        placeholder: React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
        truncated: any;
        value: React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
    };
    defaultProps: {
        value: any;
        placeholder: any;
        truncated: any;
    };
};
export default RenderButtonChildren;
