/**
 * Props for the DescriptionList component.
 * @typedef {Object} DescriptionListProps
 * @property {React.ReactNode} [children=null] - The content of the description list, typically `DescriptionList.Item` components.
 * @property {string} [id=null] - An optional unique identifier for the root `div` element. Useful for accessibility or targeting specific instances.
 * @property {boolean} [isCard=true] - If `true`, the list is rendered with card styling (shadow and rounded corners). Set to `false` for a plain list.
 * @property {string} [wrapperClassName=''] - An optional CSS class name to apply to the root `div` element for custom styling.
 */
import React from "react";
/**
 * Renders a list of terms and descriptions, often used for displaying key-value pairs or metadata.
 * It can be styled as a card or as a plain list. Child elements are typically `DescriptionList.Item`.
 *
 * @param {DescriptionListProps} props - The props for the DescriptionList component.
 * @returns {React.ReactElement} The rendered DescriptionList component.
 * @type {React.FC<DescriptionListProps>}
 */
declare const DescriptionList: {
    ({ children: any, id: any, isCard: any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the DescriptionList component. */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Determines whether the DescriptionList is presented as a card. */
        isCard: any;
        /** A custom CSS class name to style the wrapper of the DescriptionList. */
        wrapperClassName: any;
    };
    defaultProps: {
        children: any;
        id: any;
        isCard: boolean;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-descriptionlist--left-aligned-in-card
 * @zeroHeight https://zeroheight.com/023d5159d/p/0257f9-description-lists/b/4635b4
 * @end
 */
export default DescriptionList;
