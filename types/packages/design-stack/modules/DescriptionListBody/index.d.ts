/**
 * Props for the DescriptionListBody component.
 * @typedef {Object} DescriptionListBodyProps
 * @property {React.ReactNode} [children=null] - The content to be rendered inside the description list body. Typically includes DescriptionListItem components.
 * @property {string} [id=null] - An optional unique identifier to be applied to the root `div` element.
 * @property {boolean} [isCard=false] - If `true`, applies specific padding styles suitable for card layouts. If `false`, applies default padding and margin.
 * @property {string} [wrapperClassName=''] - An optional CSS class name to apply custom styles to the root `div` element.
 */
import React from "react";
/**
 * DescriptionListBody serves as the container for the main content area within a DescriptionList component.
 * It handles the layout and styling, differentiating between standard and card-based presentations.
 *
 * @component
 * @type {React.FC<DescriptionListBodyProps>}
 * @param {DescriptionListBodyProps} props - The props for the DescriptionListBody component.
 * @returns {React.ReactElement} The rendered DescriptionListBody component.
 */
declare const DescriptionListBody: {
    ({ children, any, id, any, isCard, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within Description List Body */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Apply different styles for card type wrapper. */
        isCard: any;
        /** A custom CSS class name to style the Description List Body. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-descriptionlist--left-aligned-in-card
 * @zeroHeight https://zeroheight.com/023d5159d/p/0257f9-description-lists/b/4635b4
 * @end
 */
export default DescriptionListBody;
