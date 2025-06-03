/**
 * @typedef {Object} SlideoverFooterProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the SlideoverFooter component.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBorder? - A boolean prop to determine whether to show a border at the top of the SlideoverFooter.
 * @property {any} position? - Determines the position of the content inside the SlideoverFooter. It can be one of the following values from the POSITION constant: 'left', 'right', or 'center'.
 * @property {string} wrapperClassName? - A custom CSS class name to style the SlideoverFooter component
 */
import React from "react";
/**
 * @type {React.FC<SlideoverFooterProps>}
 */
declare const SlideoverFooter: {
    ({ children: any, id: any, isBorder: any, position: any, wrapperClassName: any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the SlideoverFooter component. */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** A boolean prop to determine whether to show a border at the top of the SlideoverFooter. */
        isBorder: any;
        /** Determines the position of the content inside the SlideoverFooter. It can be one of the following values from the POSITION constant: 'left', 'right', or 'center'. */
        position: any;
        /** A custom CSS class name to style the SlideoverFooter component */
        wrapperClassName: any;
    };
    defaultProps: {
        children: any;
        id: any;
        isBorder: boolean;
        position: string;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-slideover--resizeable-example
 * @zeroHeight https://zeroheight.com/023d5159d/p/544a29-slide-over/b/051181
 * @end
 */
export default SlideoverFooter;
