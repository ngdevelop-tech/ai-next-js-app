/**
 * @typedef {Object} PageHeadingsSubsectionProps
 * @property {boolean} loading? - Show the loading state of the component
 * @property {React.ReactNode} subSection? - A custom node representing a subsection or subheading to be included in the heading.
 */

import React from "react";
import PropTypes from "prop-types";

import SkeletonLoader from "../../SkeletonLoader";

export function PageHeadingsSubsection({ loading = false, subSection = null }) {
  return (
    <>
      {subSection && loading ? (
        <div className="flex h-5 w-full justify-start gap-6 py-0.5">
          <SkeletonLoader wrapperClassName="w-[calc(100%-92%)] h-4" animate />
          <SkeletonLoader wrapperClassName="w-[calc(100%-92%)] h-4" animate />
        </div>
      ) : (
        <> {subSection}</>
      )}
    </>
  );
}

PageHeadingsSubsection.propTypes = {
  /** Show the loading state of the component */
  loading: PropTypes.bool,
  /** A custom node representing a subsection or subheading to be included in the heading. */
  subSection: PropTypes.node,
};
