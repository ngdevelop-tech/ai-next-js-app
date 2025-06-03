/**
 * @typedef {Object} ModalFooterProps
 * @property {string} backgroundColorClass? - A custom CSS class name to style the ModalFooter
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the ModalFooter
 * @property {boolean} condensedTop? - Specify whether to remove top padding or not
 * @property {boolean} condensedXAxis? - Specify whether to add top-bottom padding of 12px or not
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBorder? - Specify whether to apply top border to ModalFooter or not
 * @property {any} position? - Specify where to place ModalFooter content
 */
import React from "react";
/**
 * @type {React.FC<ModalFooterProps>}
 */
declare const ModalFooter: {
    ({ backgroundColorClass: any, children: any, condensedTop: any, condensedXAxis: any, id: any, isBorder: any, position: any, }: any): React.ReactElement;
    propTypes: {
        /** A custom CSS class name to style the ModalFooter */
        backgroundColorClass: any;
        /** Node containing the content that will be displayed within the ModalFooter */
        children: any;
        /** Specify whether to remove top padding or not */
        condensedTop: any;
        /** Specify whether to add top-bottom padding of 12px or not */
        condensedXAxis: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Specify whether to apply top border to ModalFooter or not */
        isBorder: any;
        /** Specify where to place ModalFooter content  */
        position: any;
    };
    defaultProps: {
        backgroundColorClass: string;
        children: any;
        condensedTop: boolean;
        condensedXAxis: boolean;
        id: any;
        isBorder: boolean;
        position: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-modal--centered-with-container-scroll
 * @zeroHeight https://zeroheight.com/023d5159d/p/191258-modal/b/34324a
 * @end
 */
export default ModalFooter;
