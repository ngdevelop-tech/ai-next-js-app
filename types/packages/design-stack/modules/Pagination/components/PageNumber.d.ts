/**
 * @typedef {Object} PageNumberProps
 * @property {string} activeLinkClass? - A custom CSS class name to style the active page number in pagination.
 * @property {number} currentPage? - Current selected page number
 * @property {string} ellipsesClass? - A custom CSS class name to style all the page with ellipses in pagination.
 * @property {string} inActiveLinkClass? - A custom CSS class name to style all the page numbers in pagination.
 * @property {(event: React.MouseEvent<any>) => void} pageNumberClick? - Callback function called when a particular page number button clicked
 * @property {number[]} totalPages? - Array of page numbers based on count and pageSize
 */
import React from "react";
/**
 * @type {React.FC<PageNumberProps>}
 */
declare const PageNumber: {
    ({ activeLinkClass: any, currentPage: any, ellipsesClass: any, inActiveLinkClass: any, pageNumberClick: any, totalPages: any, }: any): React.ReactElement;
    propTypes: {
        /** A custom CSS class name to style the active page number in pagination. */
        activeLinkClass: any;
        /** Current selected page number */
        currentPage: any;
        /** A custom CSS class name to style all the page with ellipses in pagination. */
        ellipsesClass: any;
        /** A custom CSS class name to style all the page numbers in pagination. */
        inActiveLinkClass: any;
        /** Callback function called when a particular page number button clicked */
        pageNumberClick: any;
        /** Array of page numbers based on count and pageSize */
        totalPages: any;
    };
    defaultProps: {
        activeLinkClass: string;
        currentPage: number;
        ellipsesClass: string;
        inActiveLinkClass: string;
        pageNumberClick: any;
        totalPages: any[];
    };
};
export default PageNumber;
