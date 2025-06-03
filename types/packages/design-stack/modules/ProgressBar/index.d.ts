/**
 * @typedef {Object} ProgressBarProps
 * @property {number} currentStep? - Active progression in the progress bar
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} label? - Provide label to overall Step component for accessibility
 * @property {number} percentage? - Percentage of achieve progress
 * @property {string[]} steps? - List of items to be covered in steps
 * @property {string} title? - Provide title to Progress component
 * @property {string} wrapperClassName? - A custom CSS class name to style the progress bar
 */
import React from "react";
/**
 * @type {React.FC<ProgressBarProps>}
 */
declare const ProgressBar: {
    ({ currentStep, any, id, any, label, any, percentage, any, steps, any, title, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Active progression in the progress bar */
        currentStep: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Provide label to overall Step component for accessibility */
        label: any;
        /** Percentage of achieve progress */
        percentage: any;
        /** List of items to be covered in steps */
        steps: any;
        /** Provide title to Progress component */
        title: any;
        /** A custom CSS class name to style the progress bar */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-progressbar--primary
 * @zeroHeight
 * @end
 */
export default ProgressBar;
