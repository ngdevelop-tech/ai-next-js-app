/**
 * @typedef {Object} KeyValueProps
 * @property {string} label - Label text to be shown
 * @property {string} labelClassNames? - A custom CSS class name to style the label node
 * @property {boolean} monospacedDigits? - Boolean prop to use numeric glyphs that have uniform/tabular widths (rather than proportional).
 * @property {any} value? - Value text to be shown
 * @property {string} valueClassNames? - A custom CSS class name to style the value node
 */
import React from "react";
/**
 * @type {React.FC<KeyValueProps>}
 */
declare const KeyValue: {
    ({ label: any, labelClassNames, any, value: any, valueClassNames, any, monospacedDigits, any, }: any): React.ReactElement;
    propTypes: {
        /** Label text to be shown */
        label: any;
        /** A custom CSS class name to style the label node */
        labelClassNames: any;
        /** Boolean prop to use numeric glyphs that have uniform/tabular widths (rather than proportional). */
        monospacedDigits: any;
        /** Value text to be shown */
        value: any;
        /** A custom CSS class name to style the value node */
        valueClassNames: any;
    };
};
export default KeyValue;
