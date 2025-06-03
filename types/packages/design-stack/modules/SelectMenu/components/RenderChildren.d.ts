/**
 * @typedef {Object} RenderChildrenProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the select list box of the selectMenu component
 * @property {(event: React.MouseEvent<any>) => void} onOpenChange? - Callback function when selectMenu options open/close
 * @property {boolean} open - Internal state indicating if the select menu options is open close
 */
import React from "react";
/**
 * @type {React.FC<RenderChildrenProps>}
 */
declare const RenderChildren: {
    ({ children: any, onOpenChange: any, open }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the select list box of the selectMenu component */
        children: any;
        /** Callback function when selectMenu options open/close */
        onOpenChange: any;
        /** Internal state indicating if the select menu options is open close */
        open: any;
    };
    defaultProps: {
        onOpenChange: any;
    };
};
export default RenderChildren;
