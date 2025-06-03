/**
 * @typedef {Object} ModalHeaderProps
 * @property {boolean} dismissButton? - Specify whether to show dismiss button or not
 * @property {(event: React.MouseEvent<any>) => void} handleDismissClick? - Callback triggered on clicking dismiss button
 * @property {string} heading? - Text representing the heading of ModalHeader
 * @property {React.ReactNode} icon? - Node representing the leftmost icon of ModalHeader
 * @property {string} iconWrapperClassname? - A custom CSS class name to style the wrapper of icon node
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBorder? - Specify whether to apply bottom border to ModalHeader or not
 * @property {React.ReactNode} leftAlignedButtonsNode? - Node containing the Action buttons below sub heading
 * @property {any} subHeading? - Node or text representing the sub heading of ModalHeader
 * @property {string} wrapperClassName? - A custom CSS class name to style the root of ModalHeader
 */
import React from "react";
/**
 * @type {React.FC<ModalHeaderProps>}
 */
declare const ModalHeader: {
    ({ dismissButton, any, handleDismissClick, any, heading, any, icon, any, iconWrapperClassname, any, id, any, isBorder, any, leftAlignedButtonsNode, any, subHeading, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Specify whether to show dismiss button or not */
        dismissButton: any;
        /** Callback triggered on clicking dismiss button */
        handleDismissClick: any;
        /** Text representing the heading of ModalHeader */
        heading: any;
        /** Node representing the leftmost icon of ModalHeader */
        icon: any;
        /** A custom CSS class name to style the wrapper of icon node */
        iconWrapperClassname: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Specify whether to apply bottom border to ModalHeader or not */
        isBorder: any;
        /** Node containing the Action buttons below sub heading */
        leftAlignedButtonsNode: any;
        /** Node or text representing the sub heading of ModalHeader */
        subHeading: any;
        /** A custom CSS class name to style the root of ModalHeader */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-modal--centered-with-container-scroll
 * @zeroHeight https://zeroheight.com/023d5159d/p/191258-modal/b/34324a
 * @end
 */
export default ModalHeader;
