/**
 * Represents a button specifically designed to be part of an input group.
 * It inherits properties from the base Button component and adds styling
 * appropriate for placement alongside input fields.
 *
 * @typedef {Object} InputGroupButtonProps
 * @property {string} [childWrapperClassName] - Optional custom CSS class name to apply to the span wrapping the children.
 * @property {React.ReactNode} children - The content to be displayed inside the button. Typically text or icons.
 * @property {string} [id] - Optional unique identifier for the root button element.
 * @property {'start' | 'end' | 'middle' | 'standalone'} [position='start'] - Specifies the button's position within the input group, affecting its border radius. Defaults to 'start'.
 * @property {import('../Button').ButtonProps} [props] - Additional props to pass down to the underlying Button component.
 */
import React from "react";
/**
 * InputGroupButton component.
 *
 * @type {React.FC<InputGroupButtonProps>}
 */
declare const InputGroupButton: {
    ({ children: any, childWrapperClassName, any, id, any, position, any, ...props }: any): React.ReactElement;
    propTypes: {
        /** Optional custom CSS class name to apply to the span wrapping the children. */
        childWrapperClassName: any;
        /** The content to be displayed inside the button. Typically text or icons. */
        children: any;
        /** Optional unique id attribute for the root button element. */
        id: any;
        /** Specifies the button's position within an input group, affecting border radius. */
        position: any;
    };
};
export default InputGroupButton;
