/**
 * @typedef {Object} SliderLabelProps
 * @property {string} children - The child elements of the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the AlertTitle component.
 */
import React from "react";
/**
 * @type {React.FC<SliderLabelProps>}
 */
declare const SliderLabel: {
    ({ children: any, id, any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** The child elements of the component */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** A custom CSS class name to style the AlertTitle component. */
        wrapperClassName: any;
    };
};
export default SliderLabel;
