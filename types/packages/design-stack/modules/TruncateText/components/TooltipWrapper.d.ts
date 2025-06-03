/**
 * @typedef {Object} TooltipWrapperProps
 * @property {string} ariaLabel? - Aria label for the trigger of tooltip
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the tooltip trigger section of the truncateText Component
 * @property {Record<string, any>} headerTooltipProps? - Props for passing props to the tooltip
 * @property {boolean} isTooltipToBeWrapped? - Determins if the children will be wrapper with tooltip
 * @property {React.ReactNode} tooltipContent? - Node containing the content that will be displayed within the tooltip body section of the truncateText Component
 */
import React from "react";
/**
 * @type {React.FC<TooltipWrapperProps>}
 */
declare const TooltipWrapper: {
    ({ ariaLabel: any, children: any, headerTooltipProps: any, isTooltipToBeWrapped: any, tooltipContent: any, }: any): React.ReactElement;
    propTypes: {
        /** Aria label for the trigger of tooltip */
        ariaLabel: any;
        /** Node containing the content that will be displayed within the tooltip trigger section of the truncateText Component */
        children: any;
        /** Props for passing props to the tooltip */
        headerTooltipProps: any;
        /** Determins if the children will be wrapper with tooltip */
        isTooltipToBeWrapped: any;
        /** Node containing the content that will be displayed within the tooltip body section of the truncateText Component */
        tooltipContent: any;
    };
    defaultProps: {
        ariaLabel: string;
        children: any;
        headerTooltipProps: {};
        isTooltipToBeWrapped: boolean;
        tooltipContent: any;
    };
};
export default TooltipWrapper;
