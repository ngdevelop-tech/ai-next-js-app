/**
 * @typedef {Object} SelectedValueShape
 * @property {string} [image] - Optional URL for an image associated with the value.
 * @property {string} label - The display label for the value.
 * @property {string|number} value - The actual value.
 */
/**
 * @typedef {Object} RenderChildrenProps
 * @property {React.ReactNode} children - The child elements to be rendered, typically the trigger and content of the ComboBox.
 * @property {(open: boolean) => void} [onOpenChange] - Callback function invoked when the open state changes.
 * @property {boolean} open - Controls the visibility state of the ComboBox dropdown.
 * @property {SelectedValueShape | SelectedValueShape[]} [selectedValues] - The currently selected value(s). Used only when `isTag` (from context) is false.
 */
import React from "react";
/**
 * Internal component responsible for managing the open state and selected values synchronization
 * based on props and context. It acts as a bridge between the parent component controlling
 * the ComboBox state and the internal ComboBox context.
 *
 * @type {React.FC<RenderChildrenProps>}
 */
declare const RenderChildren: {
    ({ children: any, open: any, onOpenChange: any, selectedValues }: any): React.ReactElement;
    propTypes: {
        /** The child elements to be rendered */
        children: any;
        /** Callback function invoked when the open state changes */
        onOpenChange: any;
        /** Controls the visibility state of the ComboBox dropdown */
        open: any;
        /**
         * The currently selected value(s).
         * Can be a single object or an array of objects, each conforming to the shape:
         * `{ image?: string, label: string, value: string | number }`.
         * This prop is primarily used when the ComboBox is not in 'tag' mode.
         */
        selectedValues: any;
    };
    defaultProps: {
        onOpenChange: any;
        selectedValues: any;
    };
};
export default RenderChildren;
