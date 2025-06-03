/**
 * @typedef {Object} DescriptionListHeaderProps
 * @property {React.ReactNode} heading? - Node containing the content that will be displayed within the heading of Description List
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {boolean} isCard? - Apply different styles for card type wrapper.
 * @property {React.ReactNode} subHeading? - Node containing the content that will be displayed within the sub-heading of Description List.
 * @property {string} wrapperClassName? - A custom CSS class name to style the List Header.
 */
import React from "react";
/**
 * @type {React.FC<DescriptionListHeaderProps>}
 */
declare const DescriptionListHeader: {
    ({ heading, any, id, any, isCard, any, subHeading, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the heading of Description List */
        heading: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Apply different styles for card type wrapper. */
        isCard: any;
        /** Node containing the content that will be displayed within the sub-heading of Description List. */
        subHeading: any;
        /** A custom CSS class name to style the List Header. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-descriptionlist--left-aligned-in-card
 * @zeroHeight https://zeroheight.com/023d5159d/p/0257f9-description-lists/b/4635b4
 * @end
 */
export default DescriptionListHeader;
