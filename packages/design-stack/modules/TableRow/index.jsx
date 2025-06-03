/**
 * @typedef {Object} TableRowProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the Table row
 * @property {boolean} hover? - If true ,styles are applied to row background and cursor on hover
 * @property {string} id? - The ID of the table row component to uniquely identify every table row
 * @property {(event: React.MouseEvent<any>) => void} onRowClick? - A callback triggered on clicking table row
 * @property {boolean} selected? - Updates background style for selected table row
 * @property {string} wrapperClassName? - A custom CSS class name to style the table row.
 */

import React, { forwardRef, useContext, useRef, useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TableContextData } from "../Table/context";

import { TableRowContextData } from "./context";
import useTableRow from "./useTableRow";
import { handleKeyDown } from "./utils";

/**
 * @type {React.ForwardRefExoticComponent<TableRowProps & React.RefAttributes<HTMLTableElement>>}
 */
const TableRow = forwardRef(
  (
    {
      children = null,
      hover = false,
      id = null,
      onRowClick = null,
      selected = false,
      wrapperClassName = "",
      ...rest
    },
    ref
  ) => {
    const { useEnhancedKeyboardNavigation } = useContext(TableContextData);
    const [focusedResizerCell, setFocusedResizerCell] = useState(null);
    const rowElementRef = useRef();
    const {
      isHeaderRow,
      setIsHeaderRow,
      handleFocusOut,
      handleFocus,
      currentRowElementRef,
    } = useTableRow();

    return (
      <TableRowContextData.Provider
        value={{
          isHeaderRow,
          setIsHeaderRow,
          focusedResizerCell,
          setFocusedResizerCell,
        }}
      >
        <tr
          role="row"
          onFocus={handleFocus}
          onBlur={handleFocusOut}
          tabIndex={!useEnhancedKeyboardNavigation && onRowClick ? 0 : -1}
          onKeyDown={e =>
            handleKeyDown(
              e,
              onRowClick,
              currentRowElementRef,
              rowElementRef,
              useEnhancedKeyboardNavigation
            )
          }
          className={twClassNames(
            {
              "cursor-pointer hover:bg-neutral-default-hover":
                hover || onRowClick,
              "bg-neutral-strong": selected,
            },
            "focus-visible:outline-offset-[-1px]",
            wrapperClassName
          )}
          {...(onRowClick && { onClick: e => onRowClick(e) })}
          data-test="row"
          {...(id !== null && { id })}
          ref={ref}
          {...rest}
        >
          {children}
        </tr>
      </TableRowContextData.Provider>
    );
  }
);

TableRow.propTypes = {
  /** Node containing the content that will be displayed within the Table row */
  children: PropTypes.node,
  /** If true ,styles are applied to row background and cursor on hover */
  hover: PropTypes.bool,
  /** The ID of the table row component to uniquely identify every table row */
  id: PropTypes.string,
  /** A callback triggered on clicking table row */
  onRowClick: PropTypes.func,
  /** Updates background style for selected table row */
  selected: PropTypes.bool,
  /** A custom CSS class name to style the table row. */
  wrapperClassName: PropTypes.string,
};
TableRow.defaultProps = {
  children: null,
  hover: false,
  id: null,
  onRowClick: null,
  selected: false,
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */

export default TableRow;
