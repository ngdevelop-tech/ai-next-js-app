/**
 * @typedef {Object} SliderFooterProps
 * @property {string} errorText? - Slider Component error message
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} infoText? - Slider Component informational message
 * @property {string} wrapperClassName? - A custom CSS class name to style the AlertTitle component.
 */
import React from "react";
/**
 * @type {React.FC<SliderFooterProps>}
 */
declare const SliderFooter: {
    ({ errorText, any, id, any, infoText, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Slider Component error message */
        errorText: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Slider Component informational message */
        infoText: any;
        /** A custom CSS class name to style the AlertTitle component. */
        wrapperClassName: any;
    };
};
export default SliderFooter;
