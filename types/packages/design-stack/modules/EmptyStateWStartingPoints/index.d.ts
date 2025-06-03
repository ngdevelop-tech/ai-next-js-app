/**
 * @typedef {Object} EmptyStateWStartingPointsProps
 * @property {string} ctaText? - CTA text to be shown at end.
 * @property {any} data? - Array containing data for all the layout items
 * @property {string} background?
 * @property {string} description?
 * @property {any} icon?
 * @property {(event: React.MouseEvent<any>) => void} onClick?
 * @property {string} title?
 */
import React from "react";
/**
 * @type {React.FC<EmptyStateWStartingPointsProps>}
 */
declare const EmptyStateWStartingPoints: {
    ({ ctaText, any, data, any, handleCTAClick, any }: {
        ctaText?: string;
        any: any;
        data?: any[];
        handleCTAClick?: any;
    }): React.ReactElement;
    propTypes: {
        /** CTA text to be shown at end. */
        ctaText: any;
        /** Array containing data for all the layout items */
        data: any;
        /** Callback to triggered on clicking CTA text */
        handleCTAClick: any;
        /** Top heading for the component */
        heading: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Type of layout to show data in <b>two-column</b> or <b>single-column</b> */
        layout: any;
        /** Controls whether to show borders */
        showBorders: any;
        /** Sub heading for the component */
        subHeading: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-emptystatewstartingpoints--primary
 * @zeroHeight
 * @end
 */
export default EmptyStateWStartingPoints;
