/**
 * @typedef {Object} SelectMenuLabelProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the label section of the selectMenu component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the wrapper of SelectMenuLabel
 */
import React from "react";
/**
 * @type {React.FC<SelectMenuLabelProps>}
 */
declare const SelectMenuLabel: {
    ({ children, any, id, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the label section of the selectMenu component */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** A custom CSS class name to style the wrapper of SelectMenuLabel */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */
export default SelectMenuLabel;
