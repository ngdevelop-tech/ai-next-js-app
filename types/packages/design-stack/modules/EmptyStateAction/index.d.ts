/**
 * @typedef {Object} EmptyStateActionProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the EmptyStateAction component.
 */
import React from "react";
/**
 * @type {React.FC<EmptyStateActionProps>}
 */
declare const EmptyStateAction: {
    ({ children: any, id, any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the component */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** A custom CSS class name to style the EmptyStateAction component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */
export default EmptyStateAction;
