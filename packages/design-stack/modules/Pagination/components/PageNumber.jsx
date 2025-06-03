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
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { getPageRange } from "../utils";

/**
 * @type {React.FC<PageNumberProps>}
 */
const PageNumber = ({
  activeLinkClass,
  currentPage,
  ellipsesClass,
  inActiveLinkClass,
  pageNumberClick,
  totalPages,
}) =>
  getPageRange(currentPage, totalPages).map((page, i) => {
    const key = page + i;
    return page === "..." ? (
      <span key={key} className={ellipsesClass}>
        ...
      </span>
    ) : (
      <a
        key={page}
        href="/"
        aria-label={`page ${page} of ${totalPages.length}`}
        className={twClassNames(
          "focus-visible:outline-brand-strong",
          inActiveLinkClass,
          {
            [activeLinkClass]: currentPage === page,
          }
        )}
        onClick={e => pageNumberClick?.(e, page)}
        aria-current={currentPage === page ? "page" : ""}
      >
        {page}
      </a>
    );
  });

PageNumber.propTypes = {
  /** A custom CSS class name to style the active page number in pagination. */
  activeLinkClass: PropTypes.string,
  /** Current selected page number */
  currentPage: PropTypes.number,
  /** A custom CSS class name to style all the page with ellipses in pagination. */
  ellipsesClass: PropTypes.string,
  /** A custom CSS class name to style all the page numbers in pagination. */
  inActiveLinkClass: PropTypes.string,
  /** Callback function called when a particular page number button clicked */
  pageNumberClick: PropTypes.func,
  /** Array of page numbers based on count and pageSize */
  totalPages: PropTypes.arrayOf(PropTypes.number),
};

PageNumber.defaultProps = {
  activeLinkClass: "",
  currentPage: 1,
  ellipsesClass: "",
  inActiveLinkClass: "",
  pageNumberClick: null,
  totalPages: [],
};

export default PageNumber;
