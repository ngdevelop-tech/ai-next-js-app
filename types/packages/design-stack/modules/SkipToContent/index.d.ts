/**
 * @typedef {Object} SkipToContentProps
 * @property {string} children - Node containing the content that will be displayed within the SkiptoContent component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {Record<string, any>} target? - Reference of the element to be focused
 */
import React from "react";
/**
 * @type {React.FC<SkipToContentProps>}
 */
declare const SkipToContent: {
    ({ children: any, id, any, target: any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the SkiptoContent component */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Reference of the element to be focused */
        target: any;
        /** A custom CSS class name to style the wrapper of the SkiptoContent component */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-skiptocontent--skip-to-content-example
 * @zeroHeight
 * @end
 */
export default SkipToContent;
