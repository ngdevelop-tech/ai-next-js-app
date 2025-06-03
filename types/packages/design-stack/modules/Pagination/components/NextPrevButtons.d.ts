/**
 * @typedef {Object} NextPrevButtonsProps
 * @property {boolean} hasNumber? - The pagination with numbers or with next/previous buttons only.
 * @property {boolean} isNextDisabled? - Specifies if next button is disabled or not
 * @property {boolean} isPrevDisabled? - Specifies if previous button is disabled or not
 * @property {(event: React.MouseEvent<any>) => void} nextClick? - Callback function called when next page button clicked.
 * @property {(event: React.MouseEvent<any>) => void} prevClick? - Callback function called when previous page button clicked.
 */
import React from "react";
/**
 * @type {React.FC<NextPrevButtonsProps>}
 */
declare const NextPrevButtons: {
    ({ hasNumber: any, isNextDisabled: any, isPrevDisabled: any, nextClick: any, prevClick: any, }: any): React.ReactElement;
    propTypes: {
        /** The pagination with numbers or with next/previous buttons only. */
        hasNumber: any;
        /** Specifies if next button is disabled or not */
        isNextDisabled: any;
        /** Specifies if previous button is disabled or not */
        isPrevDisabled: any;
        /** Callback function called when next page button clicked. */
        nextClick: any;
        /** Callback function called when previous page button clicked. */
        prevClick: any;
    };
    defaultProps: {
        hasNumber: boolean;
        isNextDisabled: boolean;
        isPrevDisabled: boolean;
        nextClick: any;
        prevClick: any;
    };
};
export default NextPrevButtons;
