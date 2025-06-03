/**
 * @typedef {Object} RenderTextProps
 * @property {string} text - Text to be displayed within Tag
 * @property {boolean} withTruncateText - Shows dot prior to tag text
 */
import React from "react";
/**
 * @type {React.FC<RenderTextProps>}
 */
declare const RenderText: {
    ({ text: any, withTruncateText }: any): React.ReactElement;
    propTypes: {
        /** Text to be displayed within Tag */
        text: any;
        /** Shows dot prior to tag text */
        withTruncateText: any;
    };
};
export default RenderText;
