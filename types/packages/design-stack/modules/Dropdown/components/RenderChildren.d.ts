/**
 * @typedef {Object} RenderChildrenProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the component.
 * @property {(event: React.MouseEvent<any>) => void} onOpenChange? - Callback function when dropdown options open/close.
 * @property {boolean} open - Determines if the dropdown is open.
 */
import React from "react";
/**
 * @type {React.FC<RenderChildrenProps>}
 */
declare const RenderChildren: {
    ({ children: any, open: any, onOpenChange }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the component. */
        children: any;
        /** Callback function when dropdown options open/close. */
        onOpenChange: any;
        /** Determines if the dropdown is open. */
        open: any;
    };
    defaultProps: {
        onOpenChange: any;
    };
};
export default RenderChildren;
