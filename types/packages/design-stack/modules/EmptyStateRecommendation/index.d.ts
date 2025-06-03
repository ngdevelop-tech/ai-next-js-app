/**
 * @typedef {Object} EmptyStateRecommendationProps
 * @property {Record<string, any>} action? - Object containing details of the icon and text to be shown in the component
 * @property {any} icon?
 * @property {string} text?
 */
import React from "react";
/**
 * @type {React.FC<EmptyStateRecommendationProps>}
 */
declare const EmptyStateRecommendation: {
    ({ icon: any, id: any, title: any, description: any, onClick: any, isRounded: any, isBordered: any, action: any, wrapperClassName: any, }: any): React.ReactElement;
    propTypes: {
        /** Object containing details of the icon and text to be shown in the component */
        action: any;
        /** Description for the Recommendation */
        description: any;
        /** Node containing Icon /Image to be displayed */
        icon: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Determines whether the Recommendation component has border */
        isBordered: any;
        /** Determines whether the Recommendation component is rounded */
        isRounded: any;
        /** Callback function onClick when the Recommendation is clicked */
        onClick: any;
        /** Title for the Recommendation */
        title: any;
        /** A custom CSS class name to style the EmptyStateRecommendation component. */
        wrapperClassName: any;
    };
    defaultProps: {
        action: {
            icon: any;
            text: string;
        };
        id: any;
        isBordered: boolean;
        isRounded: boolean;
        onClick: any;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystate--primary
 * @zeroHeight
 * @end
 */
export default EmptyStateRecommendation;
