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
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import PageNumber from "./PageNumber";

const BUTTON_CLASS =
  "text-neutral-weaker pt-4 hover:border-neutral-strong hover:text-neutral-weak inline-flex items-center border-t-2 border-transparent text-sm font-medium focus-visible:outline-brand-strong";

/**
 * @type {React.FC<CenteredPaginationProps>}
 */
const CenteredPagination = ({
  id,
  activeLinkClass,
  currentPage,
  inActiveLinkClass,
  nextClick,
  pageNumberClick,
  prevClick,
  totalPages,
  wrapperClassName,
  isNextDisabled,
  isPrevDisabled,
}) => (
  <nav
    {...(id !== null && { id })}
    className={twClassNames(
      "flex items-center justify-between border-t border-neutral-default px-0",
      wrapperClassName
    )}
  >
    <div className="-mt-px flex w-0 flex-1">
      <a
        href="/"
        className={twClassNames(`${BUTTON_CLASS} pr-1`, {
          "text-neutral-weakest hover:text-neutral-weakest hover:border-t-2 hover:border-transparent cursor-not-allowed focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-0":
            isPrevDisabled,
        })}
        onClick={prevClick}
        disabled={isPrevDisabled}
        aria-disabled={isPrevDisabled}
        tabIndex={isPrevDisabled && -1}
        aria-label="Go to previous page"
      >
        <MdArrowBack
          className="mr-3 h-5 w-5 icon-neutral-weaker"
          aria-hidden="true"
        />
        Previous
      </a>
    </div>
    <div className="hidden md:-mt-px md:flex">
      <PageNumber
        currentPage={currentPage}
        totalPages={totalPages}
        pageNumberClick={pageNumberClick}
        inActiveLinkClass={`inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-neutral-weaker hover:border-neutral-strong hover:text-neutral-weak hover:bg-input-default-hover ${inActiveLinkClass}`}
        activeLinkClass={`inline-flex items-center border-t-2 border-brand-strong px-4 pt-4 text-sm font-medium text-brand-default ${activeLinkClass}`}
        ellipsesClass="text-neutral-weaker inline-flex items-center px-4 pt-4 text-sm font-medium"
      />
    </div>
    <div className="-mt-px flex w-0 flex-1 justify-end">
      <a
        href="/"
        className={twClassNames(`${BUTTON_CLASS} pl-1`, {
          "text-neutral-weakest hover:text-neutral-weakest hover:border-t-2 hover:border-transparent cursor-not-allowed focus-visible:outline-0 focus-visible:border-0 focus-visible:ring-0":
            isNextDisabled,
        })}
        aria-disabled={isNextDisabled}
        tabIndex={isNextDisabled && -1}
        onClick={nextClick}
        disabled={isNextDisabled}
        aria-label="Go to next page"
      >
        Next
        <MdArrowForward
          className="ml-3 h-5 w-5 icon-neutral-weaker"
          aria-hidden="true"
        />
      </a>
    </div>
  </nav>
);
CenteredPagination.propTypes = {
  /** A custom CSS class name to style the active page number in pagination. */
  activeLinkClass: PropTypes.string,
  /** Current selected page number */
  currentPage: PropTypes.number,
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /** A custom CSS class name to style all the page numbers in pagination. */
  inActiveLinkClass: PropTypes.string,
  /** Specifies if next button is disabled or not */
  isNextDisabled: PropTypes.bool,
  /** Specifies if prev button is disabled or not */
  isPrevDisabled: PropTypes.bool,
  /** Callback function called when next page button clicked. */
  nextClick: PropTypes.func,
  /** Callback function called when a particular page number button clicked */
  pageNumberClick: PropTypes.func,
  /** Callback function called when previous page button clicked. */
  prevClick: PropTypes.func,
  /** Array of page numbers based on count and pageSize */
  totalPages: PropTypes.arrayOf(PropTypes.shape({})),
  /** A custom CSS class name to style the root of the component. */
  wrapperClassName: PropTypes.string,
};

CenteredPagination.defaultProps = {
  activeLinkClass: "",
  currentPage: 1,
  id: null,
  inActiveLinkClass: "",
  nextClick: null,
  pageNumberClick: null,
  prevClick: null,
  totalPages: [],
  wrapperClassName: "",
  isNextDisabled: false,
  isPrevDisabled: false,
};

export default CenteredPagination;
