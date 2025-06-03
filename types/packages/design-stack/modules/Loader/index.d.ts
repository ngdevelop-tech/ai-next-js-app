/**
 * @typedef {Object} LoaderComponentProps
 * @property {any} ariaLive?
 */
import React from "react";
/**
 * @type {React.FC<LoaderComponentProps>}
 */
declare const LoaderComponent: {
    ({ ariaBusy, any, ariaLive, any, id, any, label, any, labelPlacement, any, loaderPrimaryColor, any, loaderSecondaryColor, any, percentage, any, showLabel, any, size, any, variant, any, wrapperClassName, any, altText, any, }: any): React.ReactElement;
    propTypes: {
        /** Prop to give altText to the loader */
        altText: any;
        /** Boolean value to set aria-busy value */
        ariaBusy: any;
        ariaLive: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Label value to be displayed if showLabel is true */
        label: any;
        /** Position of the label. Bottom Placement is available only for medium and large loader sizes. */
        labelPlacement: any;
        /** The color of the progress (arc) part of the loader. */
        loaderPrimaryColor: any;
        /** The color of the remaining (full circle) part of the loader. */
        loaderSecondaryColor: any;
        /** The value of the progress indicator for the determinate variant. Value between 0 and 100. */
        percentage: any;
        /** Boolean value that determines if a label is to be shown.  */
        showLabel: any;
        /** The size of the loader component. */
        size: any;
        /** Determines loader variant that is to be used.  */
        variant: any;
        /** A custom CSS class to style the wrapper of the Loader component.  */
        wrapperClassName: any;
    };
    displayName: string;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-loader--primary
 * @zeroHeight
 * @end
 */
export default LoaderComponent;
