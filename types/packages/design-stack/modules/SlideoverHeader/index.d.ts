/**
 * @typedef {Object} SlideoverHeaderProps
 * @property {React.ReactNode} Icon? - Node containing the content that will be displayed within the icon section of SlideoverHeader component.
 * @property {boolean} dismissButton? - A boolean prop to determine whether to show a dismiss button (close button) in the header.
 * @property {string} dismissIconWrapperClassName? - A custom CSS class name to style the dismiss icon container of SlideoverHeader component
 * @property {(event: React.MouseEvent<any>) => void} handleDismissClick? - A function to handle the click event of the dismiss button.
 * @property {string} heading? - The main heading text to be displayed in the header.
 * @property {any} headingTag? - The HTML heading tag to use for the heading text.
 * @property {string} headingWrapperClassName? - A custom CSS class name to style the heading element of SlideoverHeader component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBorder? - A boolean prop to determine whether to show a border at the bottom of the header.
 * @property {boolean} isEllipsisHeader? - A boolean prop to determine whether the heading should be truncated with an ellipsis when it overflows.
 * @property {boolean} lightText? - A boolean prop to determine whether the text in the header should be displayed in white or the default color.
 * @property {string} subHeading? - A subheading text to be displayed below the main heading.
 * @property {string} subheadingWrapperClassName? - Additional CSS class(es) to customize the styling of the subheading element.
 * @property {string} wrapperClassName? - A custom CSS class name to style the wrapper container of SlideoverHeader component
 */
import React from "react";
/**
 * @type {React.FC<SlideoverHeaderProps>}
 */
declare const SlideoverHeader: {
    ({ Icon, any, dismissButton, any, dismissIconWrapperClassName, any, handleDismissClick, any, heading, any, headingTag: HeadingTag, headingWrapperClassName, any, id, any, isBorder, any, isEllipsisHeader, any, lightText, any, subHeading, any, subheadingWrapperClassName, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the icon section of SlideoverHeader component. */
        Icon: any;
        /** A boolean prop to determine whether to show a dismiss button (close button) in the header. */
        dismissButton: any;
        /**  A custom CSS class name to style the dismiss icon container of SlideoverHeader component */
        dismissIconWrapperClassName: any;
        /** A function to handle the click event of the dismiss button. */
        handleDismissClick: any;
        /** The main heading text to be displayed in the header. */
        heading: any;
        /** The HTML heading tag to use for the heading text. */
        headingTag: any;
        /**  A custom CSS class name to style the heading element of SlideoverHeader component */
        headingWrapperClassName: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** A boolean prop to determine whether to show a border at the bottom of the header. */
        isBorder: any;
        /** A boolean prop to determine whether the heading should be truncated with an ellipsis when it overflows. */
        isEllipsisHeader: any;
        /** A boolean prop to determine whether the text in the header should be displayed in white or the default color. */
        lightText: any;
        /** A subheading text to be displayed below the main heading. */
        subHeading: any;
        /** Additional CSS class(es) to customize the styling of the subheading element. */
        subheadingWrapperClassName: any;
        /**  A custom CSS class name to style the wrapper container of SlideoverHeader component */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-slideover--resizeable-example
 * @zeroHeight https://zeroheight.com/023d5159d/p/544a29-slide-over/b/051181
 * @end
 */
export default SlideoverHeader;
