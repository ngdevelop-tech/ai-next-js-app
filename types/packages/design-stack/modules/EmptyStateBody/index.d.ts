/**
 * @typedef {Object} EmptyStateBodyProps
 * @property {React.ReactNode} children - The child elements of the component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isBordered? - Determines if the body has top and bottom border
 * @property {any} layout? - Determines the layout for the EmptyStateBody. Variants can be 'singleColumnLayout' and 'twoColumnLayout'
 * @property {string} title? - Title for the EmptyStateBody component
 * @property {string} wrapperClassName? - Additional style class names to EmptyStateBody component
 */
import React from "react";
/**
 * @type {React.FC<EmptyStateBodyProps>}
 */
declare const EmptyStateBody: {
    ({ children: any, id, any, isBordered, any, layout, any, title, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** The child elements of the component */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Determines if the body has top and bottom border */
        isBordered: any;
        /** Determines the layout for the EmptyStateBody. Variants can be 'singleColumnLayout' and 'twoColumnLayout' */
        layout: any;
        /** Title for the EmptyStateBody component */
        title: any;
        /** Additional style class names to EmptyStateBody component */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */
export default EmptyStateBody;
