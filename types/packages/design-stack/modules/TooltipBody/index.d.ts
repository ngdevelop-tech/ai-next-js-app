/**
 * @typedef {Object} TooltipBodyProps
 * @property {React.ReactNode} children? - The content to be displayed within the tooltip body. It can accept any React node, such as a string, JSX element, or component.
 * @property {string} id? - A cusom id to identify component uniquely.
 * @property {string} wrapperClassName? - Additional class name(s) to be applied to the wrapper element of tooltip body.
 */
import React from "react";
/**
 * @type {React.FC<TooltipBodyProps>}
 */
declare const TooltipBody: {
    ({ children, any, id, any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** The content to be displayed within the tooltip body. It can accept any React node, such as a string, JSX element, or component. */
        children: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /** Additional class name(s) to be applied to the wrapper element of tooltip body. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tooltip--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/767c4c-tooltip/b/4635b4
 * @end
 */
export default TooltipBody;
