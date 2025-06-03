/**
 * @typedef {Object} EmptyStateDescriptionProps
 * @property {any} align? - Alignment of the text. Variants can be 'left' or 'center'
 * @property {any} children? - Node containing the content that will be displayed within the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the EmptyStateDescription component.
 */
import React from "react";
/**
 * @type {React.FC<EmptyStateDescriptionProps>}
 */
declare const EmptyStateDescription: {
    ({ align, any, children: any, id, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Alignment of the text. Variants can be 'left' or 'center' */
        align: any;
        /** Node containing the content that will be displayed within the component */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** A custom CSS class name to style the EmptyStateDescription component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */
export default EmptyStateDescription;
