/**
 * @typedef {Object} EmptyStateIconProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the EmptyStateIcon component.
 */
import React from "react";
/**
 * @type {React.FC<EmptyStateIconProps>}
 */
declare const EmptyStateIcon: {
    ({ children: any, id: any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the component */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** A custom CSS class name to style the EmptyStateIcon component. */
        wrapperClassName: any;
    };
    defaultProps: {
        wrapperClassName: string;
        id: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */
export default EmptyStateIcon;
