/**
 * @typedef {Object} SliderToolTipProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed along with Slider Tooltip component
 * @property {boolean} screenReadTooltip? - Enable screen reader on slider tooltip content
 * @property {string} thumbId - The thumbId is used to handle multiple instacnes of slider for adding event listeners
 * @property {string} tooltipUnit? - A unit to represent the type of value shown on tooltip
 * @property {number} totalValue? - The totalValue is used to handle the placement of tooltip
 * @property {number} value? - The Slider current value to display within the Slider Tooltip component
 */
import React from "react";
/**
 * @type {React.FC<SliderToolTipProps>}
 */
declare const SliderToolTip: {
    ({ children: any, thumbId: any, tooltipUnit: any, totalValue: any, value: any, screenReadTooltip: any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed along with Slider Tooltip component */
        children: any;
        /** Enable screen reader on slider tooltip content */
        screenReadTooltip: any;
        /** The thumbId is used to handle multiple instacnes of slider for adding event listeners */
        thumbId: any;
        /** A unit to represent the type of value shown on tooltip */
        tooltipUnit: any;
        /** The totalValue is used to handle the placement of tooltip */
        totalValue: any;
        /** The Slider current value to display within the Slider Tooltip component */
        value: any;
    };
    defaultProps: {
        children: any;
        value: any;
        tooltipUnit: string;
        totalValue: number;
        screenReadTooltip: boolean;
    };
};
export default SliderToolTip;
