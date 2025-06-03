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
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import CenteredPagination from "./components/CenteredPagination";
import NextPrevButtons from "./components/NextPrevButtons";
import PageNumber from "./components/PageNumber";
import usePagination from "./usePagination";

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
const Pagination = ({
  activeLinkClass = "",
  count = 100,
  defaultPageNumber = 1,
  hideDetailsString = false,
  id = null,
  inActiveLinkClass = "",
  isCentered = false,
  onNextClick = null,
  onPageNumberClick = null,
  onPreviousClick = null,
  pageNumber = undefined,
  pageSize = 25,
  withNumber = true,
  wrapperClassName = "",
}) => {
  const { prevClick, nextClick, pageNumberClick, currentPage, totalPages } =
    usePagination({
      defaultPageNumber,
      onNextClick,
      onPageNumberClick,
      onPreviousClick,
      pageNumber,
      pageSize,
      count,
    });

  const isNextDisabled = currentPage === totalPages[totalPages.length - 1];
  const isPrevDisabled = currentPage === 1;

  if (isCentered) {
    return (
      <CenteredPagination
        {...(id !== null && { id })}
        wrapperClassName={wrapperClassName}
        prevClick={prevClick}
        nextClick={nextClick}
        currentPage={currentPage}
        totalPages={totalPages}
        pageNumberClick={pageNumberClick}
        activeLinkClass={activeLinkClass}
        inActiveLinkClass={inActiveLinkClass}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
    );
  }

  return (
    <div
      {...(id !== null && { id })}
      className={twClassNames(
        "flex items-center justify-between border-t border-neutral-default px-0 py-3 sm:px-6",
        wrapperClassName
      )}
      role="navigation"
      aria-label="Pagination-container"
    >
      <div className="hidden sm:block">
        <p
          className={twClassNames("text-sm text-neutral-weak", {
            hidden: hideDetailsString,
          })}
        >
          Showing{" "}
          <span className="font-medium">
            {currentPage * pageSize - pageSize + 1}
          </span>{" "}
          to{" "}
          <span className="font-medium">
            {totalPages.length === currentPage ? count : currentPage * pageSize}
          </span>{" "}
          of <span className="font-medium">{count}</span> results{" "}
        </p>
      </div>
      <NextPrevButtons
        hasNumber={withNumber}
        nextClick={nextClick}
        prevClick={prevClick}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
      />
      <nav
        className={twClassNames(
          "isolate hidden -space-x-px  rounded-md shadow-sm sm:inline-flex",
          {
            "sm:hidden": !withNumber,
          }
        )}
        role="navigation"
        aria-label="Pagination"
      >
        <a
          href="/"
          className={twClassNames(
            "relative inline-flex items-center rounded-l-md border border-neutral-strong bg-input-default p-2  text-sm font-medium text-neutral-weaker hover:bg-input-default-hover focus-visible:outline-none focus-visible:outline-brand-strong focus-visible:ring-1 focus-visible:ring-brand-strong",
            {
              "bg-input-default-disabled text-neutral-weakest cursor-not-allowed hover:bg-input-default-disabled hover:text-neutral-weakest focus-visible:ring-0 focus-visible:outline-0  focus-visible:border-0":
                isPrevDisabled,
            }
          )}
          aria-disabled={isPrevDisabled}
          tabIndex={isPrevDisabled && -1}
          onClick={prevClick}
        >
          <span className="sr-only">Go to previous page</span>
          <MdChevronLeft
            className={twClassNames("h-5 w-5", {
              "icon-neutral-weak": !isPrevDisabled,
              "icon-neutral-weaker": isPrevDisabled,
            })}
            aria-hidden="true"
          />
        </a>
        <PageNumber
          currentPage={currentPage}
          totalPages={totalPages}
          pageNumberClick={pageNumberClick}
          inActiveLinkClass={`inline-flex items-center border border-neutral-strong  px-4 py-2 text-sm font-medium text-neutral-weaker bg-input-default hover:bg-input-default-hover focus-visible:z-15 ${inActiveLinkClass}`}
          activeLinkClass={`border-0 z-10 bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${activeLinkClass}`}
          ellipsesClass="border-neutral-strong bg-input-default text-neutral-weaker inline-flex items-center border px-4 py-2 text-sm font-medium"
        />
        <a
          href="/"
          className={twClassNames(
            "relative inline-flex items-center rounded-r-md border border-neutral-strong bg-input-default p-2 text-sm font-medium text-neutral-weaker hover:bg-input-default-hover focus-visible:border-brand-strong focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-strong",
            {
              "bg-input-default-disabled text-neutral-weakest cursor-not-allowed hover:bg-input-default-disabled hover:text-neutral-weakest focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0":
                isNextDisabled,
            }
          )}
          aria-disabled={isNextDisabled}
          tabIndex={isNextDisabled && -1}
          onClick={nextClick}
        >
          <span className="sr-only">Go to next page</span>
          <MdChevronRight
            className={twClassNames("h-5 w-5 ", {
              "icon-neutral-weak": !isNextDisabled,
              "icon-neutral-weaker": isNextDisabled,
            })}
            aria-hidden="true"
          />
        </a>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  /** A custom CSS class name to style the active page number in pagination. */
  activeLinkClass: PropTypes.string,
  /** Total number of results in pagination. */
  count: PropTypes.number,
  /** Current page number, default is undefined and it is uncontrolled. */
  defaultPageNumber: PropTypes.number,
  /** Hide string with pagination details. */
  hideDetailsString: PropTypes.bool,
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /** A custom CSS class name to style all the page numbers in pagination. */
  inActiveLinkClass: PropTypes.string,
  /** Place pagination number in the center of the sreen. */
  isCentered: PropTypes.bool,
  /** Callback function called when next page button clicked. */
  onNextClick: PropTypes.func,
  /** Callback function called when a particular page number button clicked */
  onPageNumberClick: PropTypes.func,
  /** Callback function called when previous page button clicked. */
  onPreviousClick: PropTypes.func,
  /** Current page number, default is undefined and it is controlled from consumer. */
  pageNumber: PropTypes.number,
  /** Total number of items per page, default is 25. */
  pageSize: PropTypes.number,
  /** The pagination with numbers or with next/previous buttons only. */
  withNumber: PropTypes.bool,
  /** A custom CSS class name to style the root of the component. */
  wrapperClassName: PropTypes.string,
};

Pagination.defaultProps = {
  activeLinkClass: "",
  count: 100,
  defaultPageNumber: 1,
  hideDetailsString: false,
  id: null,
  inActiveLinkClass: "",
  isCentered: false,
  onNextClick: null,
  onPageNumberClick: null,
  onPreviousClick: null,
  pageNumber: undefined,
  pageSize: 25,
  withNumber: true,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-pagination--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/75224b-pagination/b/4635b4
 * @end
 */

export default Pagination;
