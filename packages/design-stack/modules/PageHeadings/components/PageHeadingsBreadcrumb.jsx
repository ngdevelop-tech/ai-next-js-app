/**
 * @typedef {Object} PageHeadingsBreadcrumbProps
 * @property {React.ReactNode} breadcrumbNode? - A custom node representing the breadcrumb navigation at the top.
 * @property {boolean} loading? - Show the loading state of the component
 */

import React from "react";
import PropTypes from "prop-types";

import SkeletonLoader from "../../SkeletonLoader";

export function PageHeadingsBreadcrumb({
  loading = false,
  breadcrumbNode = null,
}) {
  return (
    <>
      {breadcrumbNode && loading ? (
        <div className="h-5 w-full py-0.5 ">
          <SkeletonLoader wrapperClassName="w-[calc(100%-82%)] h-4" animate />
        </div>
      ) : (
        <> {breadcrumbNode}</>
      )}
    </>
  );
}

PageHeadingsBreadcrumb.propTypes = {
  /** A custom node representing the breadcrumb navigation at the top. */
  breadcrumbNode: PropTypes.node,
  /** Show the loading state of the component */
  loading: PropTypes.bool,
};
