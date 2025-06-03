/**
 * @typedef {Object} PageHeadingsActionsProps
 * @property {React.ReactNode} actions? - A custom node that can include action buttons or any other interactive elements.
 * @property {boolean} loading? - Show the loading state of the component
 */

import React from "react";
import PropTypes from "prop-types";

import SkeletonLoader from "../../SkeletonLoader";

export function PageHeadingsActions({ loading = false, actions = null }) {
  return (
    <div className="mt-5 flex lg:ml-4 lg:mt-0 ">
      {actions && loading ? (
        <SkeletonLoader wrapperClassName="w-32 h-6" animate />
      ) : (
        <>{actions}</>
      )}
    </div>
  );
}

PageHeadingsActions.propTypes = {
  /** A custom node that can include action buttons or any other interactive elements. */
  actions: PropTypes.node,
  /** Show the loading state of the component */
  loading: PropTypes.bool,
};
