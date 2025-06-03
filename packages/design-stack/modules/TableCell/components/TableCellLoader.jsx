/**
 * @typedef {Object} TableCellLoaderProps
 * @property {string} loadingVariant? - Show which type of loading state in the cell
 */

import React from "react";
import PropTypes from "prop-types";

import SkeletonLoader from "../../SkeletonLoader";
import { CELL_LOADING_VARIANT } from "../constant/tableCell";

export function TableCellLoader({ loadingVariant }) {
  switch (loadingVariant) {
    case CELL_LOADING_VARIANT.LONG_CELL:
      return <SkeletonLoader wrapperClassName="h-5 w-full max-w-80" animate />;
    case CELL_LOADING_VARIANT.SHORT_CELL:
      return <SkeletonLoader wrapperClassName="h-5 w-full max-w-32" animate />;
    case CELL_LOADING_VARIANT.TITLE_AND_DESCRIPTION:
      return (
        <div className="flex w-full  max-w-80 flex-col gap-1">
          <SkeletonLoader wrapperClassName="h-5 w-full" animate />
          <SkeletonLoader wrapperClassName="h-5 w-1/2" animate />
        </div>
      );
    case CELL_LOADING_VARIANT.TITLE_AND_DESCRIPTION_WITH_AVATAR:
      return (
        <div className="flex w-full items-center gap-4 ">
          <div className="w-8">
            <SkeletonLoader wrapperClassName="h-8 w-8 rounded-full" animate />
          </div>
          <div className="flex w-full max-w-80 flex-col gap-1">
            <SkeletonLoader wrapperClassName="h-5 w-full" animate />
            <SkeletonLoader wrapperClassName="h-5 w-1/2" animate />
          </div>
        </div>
      );
    case CELL_LOADING_VARIANT.TARGET_CIRCLE:
      return <SkeletonLoader wrapperClassName="h-5 w-5 rounded-full" animate />;
    case CELL_LOADING_VARIANT.CHECKBOX:
      return <SkeletonLoader wrapperClassName="h-5 w-5" animate />;
    default:
      return <SkeletonLoader wrapperClassName="h-5 w-full max-w-80" animate />;
  }
}

TableCellLoader.propTypes = {
  /** Show which type of loading state in the cell */
  loadingVariant: PropTypes.string,
};

TableCellLoader.defaultProps = {
  loadingVariant: CELL_LOADING_VARIANT.LONG_CELL,
};
