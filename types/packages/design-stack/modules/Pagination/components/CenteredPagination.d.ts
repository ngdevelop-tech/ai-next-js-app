/**
 * @typedef {Object} CenteredPaginationProps
 * @property {string} activeLinkClass? - A custom CSS class name to style the active page number in pagination.
 * @property {number} currentPage? - Current selected page number
 * @property {string} id? - A cusom id to identify component uniquely.
 * @property {string} inActiveLinkClass? - A custom CSS class name to style all the page numbers in pagination.
 * @property {boolean} isNextDisabled? - Specifies if next button is disabled or not
 * @property {boolean} isPrevDisabled? - Specifies if prev button is disabled or not
 * @property {(event: React.MouseEvent<any>) => void} nextClick? - Callback function called when next page button clicked.
 * @property {(event: React.MouseEvent<any>) => void} pageNumberClick? - Callback function called when a particular page number button clicked
 * @property {(event: React.MouseEvent<any>) => void} prevClick? - Callback function called when previous page button clicked.
 * @property {any} totalPages? - Array of page numbers based on count and pageSize
 */
import React from "react";
/**
 * @type {React.FC<CenteredPaginationProps>}
 */
declare const CenteredPagination: {
    ({ id: any, activeLinkClass: any, currentPage: any, inActiveLinkClass: any, nextClick: any, pageNumberClick: any, prevClick: any, totalPages: any, wrapperClassName: any, isNextDisabled: any, isPrevDisabled: any, }: any): React.ReactElement;
    propTypes: {
        /** A custom CSS class name to style the active page number in pagination. */
        activeLinkClass: any;
        /** Current selected page number */
        currentPage: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /** A custom CSS class name to style all the page numbers in pagination. */
        inActiveLinkClass: any;
        /** Specifies if next button is disabled or not */
        isNextDisabled: any;
        /** Specifies if prev button is disabled or not */
        isPrevDisabled: any;
        /** Callback function called when next page button clicked. */
        nextClick: any;
        /** Callback function called when a particular page number button clicked */
        pageNumberClick: any;
        /** Callback function called when previous page button clicked. */
        prevClick: any;
        /** Array of page numbers based on count and pageSize */
        totalPages: any;
        /** A custom CSS class name to style the root of the component. */
        wrapperClassName: any;
    };
    defaultProps: {
        activeLinkClass: string;
        currentPage: number;
        id: any;
        inActiveLinkClass: string;
        nextClick: any;
        pageNumberClick: any;
        prevClick: any;
        totalPages: any[];
        wrapperClassName: string;
        isNextDisabled: boolean;
        isPrevDisabled: boolean;
    };
};
export default CenteredPagination;
