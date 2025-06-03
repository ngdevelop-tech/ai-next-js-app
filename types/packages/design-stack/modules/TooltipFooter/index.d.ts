/**
 * @typedef {Object} TooltipFooterProps
 * @property {React.ReactNode} children? - The content to be displayed within the tooltip footer. It can accept any React node, such as a string, JSX element, or component.
 * @property {string} id? - A cusom id to identify component uniquely.
 * @property {any} position? - Sets the postion of the tooltip footer. The avaible positions are 'left', 'center', 'right'.
 * @property {string} wrapperClassName? - Additional class name(s) to be applied to the wrapper element of tooltip footer.
 */
import React from "react";
/**
 * @type {React.FC<TooltipFooterProps>}
 */
declare const TooltipFooter: {
    ({ children: any, id: any, position: any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** The content to be displayed within the tooltip footer. It can accept any React node, such as a string, JSX element, or component. */
        children: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /** Sets the postion of the tooltip footer. The avaible positions are 'left', 'center', 'right'.  */
        position: any;
        /** Additional class name(s) to be applied to the wrapper element of tooltip footer. */
        wrapperClassName: any;
    };
    defaultProps: {
        children: any;
        id: any;
        position: string;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tooltip--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/767c4c-tooltip/b/4635b4
 * @end
 */
export default TooltipFooter;
