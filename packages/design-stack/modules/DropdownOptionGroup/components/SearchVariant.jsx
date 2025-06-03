import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import DropdownOptionItem from "../../DropdownOptionItem";

const SearchVariant = ({ searchWrapperClassName = "", children }) => (
  <div
    role="menu"
    aria-label="search results"
    tabIndex={0}
    className={twClassNames("overflow-y-auto", searchWrapperClassName)}
  >
    {children.length ? (
      children
    ) : (
      <DropdownOptionItem
        disabled
        key="not_found"
        option={{ body: "No result found", id: "not_found" }}
      />
    )}
  </div>
);

export const searchVariantProps = {
  /** Node containing the content that will be displayed within the DropdownOptionGroup search variant. */
  children: PropTypes.node.isRequired,
  /** A custom CSS class name to style the DropdownOptionGroup items. */
  searchWrapperClassName: PropTypes.string,
};
SearchVariant.propTypes = searchVariantProps;

export default SearchVariant;
