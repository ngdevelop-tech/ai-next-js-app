/**
 * @typedef {Object} PaginationProps
 * @property {string} [activeLinkClass] - Custom CSS class name to style the active page number link. Applied to the currently selected page number element.
 * @property {number} [count=100] - Total number of items available across all pages. Used to calculate the total number of pages.
 * @property {number} [defaultPageNumber=1] - The initial page number to display when the component mounts (uncontrolled). If `pageNumber` is provided, this prop is ignored.
 * @property {boolean} [hideDetailsString=false] - If true, hides the text displaying the range of items currently shown (e.g., "Showing 1 to 25 of 100 results").
 * @property {string} [id] - Custom ID attribute for the root element of the component. Useful for targeting the component with specific styles or tests.
 * @property {string} [inActiveLinkClass] - Custom CSS class name to style the inactive page number links. Applied to all page number elements that are not the currently selected page.
 * @property {boolean} [isCentered=false] - If true, renders a centered version of the pagination controls. Useful for layouts where pagination should be prominently displayed in the center.
 * @property {(event: React.MouseEvent<HTMLAnchorElement>) => void} [onNextClick] - Callback function invoked when the "Next" button is clicked. Receives the click event as an argument.
 * @property {(page: number, event: React.MouseEvent<HTMLAnchorElement>) => void} [onPageNumberClick] - Callback function invoked when a specific page number link is clicked. Receives the target page number and the click event as arguments.
 * @property {(event: React.MouseEvent<HTMLAnchorElement>) => void} [onPreviousClick] - Callback function invoked when the "Previous" button is clicked. Receives the click event as an argument.
 * @property {number} [pageNumber] - The currently active page number (controlled). When provided, the component's state is managed externally. Changes require updating this prop.
 * @property {number} [pageSize=25] - The maximum number of items to display per page. Used to calculate the total number of pages based on the `count`.
 * @property {boolean} [withNumber=true] - If true, displays the page number links. If false, only shows the "Previous" and "Next" buttons.
 * @property {string} [wrapperClassName] - Custom CSS class name applied to the root `div` element of the component. Allows for custom styling of the pagination container.
 */
import React from "react";
/**
 * Renders a pagination control component.
 *
 * Allows users to navigate through pages of content. It can display page numbers,
 * previous/next buttons, and information about the current item range.
 * Supports both controlled (using `pageNumber`) and uncontrolled (using `defaultPageNumber`) modes.
 *
 * @component
 * @param {PaginationProps} props - The props for the Pagination component.
 *
 * @example
 * // Uncontrolled pagination
 * <Pagination count={150} pageSize={10} />
 *
 * @example
 * // Controlled pagination
 * const [currentPage, setCurrentPage] = useState(1);
 * <Pagination
 *   count={200}
 *   pageSize={20}
 *   pageNumber={currentPage}
 *   onPageNumberClick={(page) => setCurrentPage(page)}
 *   onNextClick={() => setCurrentPage(currentPage + 1)}
 *   onPreviousClick={() => setCurrentPage(currentPage - 1)}
 * />
 *
 * @example
 * // Centered pagination without numbers
 * <Pagination count={50} pageSize={5} isCentered withNumber={false} />
 *
 * @accessibility
 * The component uses `aria-label` attributes for navigation landmarks ("Pagination-container", "Pagination")
 * and descriptive text for screen readers ("Go to previous page", "Go to next page").
 * Disabled buttons have `aria-disabled="true"` and `tabIndex="-1"` to prevent focus.
 * The active page link can be styled distinctly using `activeLinkClass` for visual clarity.
 *
 * @type {React.FC<PaginationProps>}
 */
declare const Pagination: {
    ({ activeLinkClass, any, count, any, defaultPageNumber, any, hideDetailsString, any, id, any, inActiveLinkClass, any, isCentered, any, onNextClick, any, onPageNumberClick, any, onPreviousClick, any, pageNumber, any, pageSize, any, withNumber, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** A custom CSS class name to style the active page number in pagination. */
        activeLinkClass: any;
        /** Total number of results in pagination. */
        count: any;
        /** Current page number, default is undefined and it is uncontrolled. */
        defaultPageNumber: any;
        /** Hide string with pagination details. */
        hideDetailsString: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /** A custom CSS class name to style all the page numbers in pagination. */
        inActiveLinkClass: any;
        /** Place pagination number in the center of the sreen. */
        isCentered: any;
        /** Callback function called when next page button clicked. */
        onNextClick: any;
        /** Callback function called when a particular page number button clicked */
        onPageNumberClick: any;
        /** Callback function called when previous page button clicked. */
        onPreviousClick: any;
        /** Current page number, default is undefined and it is controlled from consumer. */
        pageNumber: any;
        /** Total number of items per page, default is 25. */
        pageSize: any;
        /** The pagination with numbers or with next/previous buttons only. */
        withNumber: any;
        /** A custom CSS class name to style the root of the component. */
        wrapperClassName: any;
    };
    defaultProps: {
        activeLinkClass: string;
        count: number;
        defaultPageNumber: number;
        hideDetailsString: boolean;
        id: any;
        inActiveLinkClass: string;
        isCentered: boolean;
        onNextClick: any;
        onPageNumberClick: any;
        onPreviousClick: any;
        pageNumber: any;
        pageSize: number;
        withNumber: boolean;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-pagination--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/75224b-pagination/b/4635b4
 * @end
 */
export default Pagination;
