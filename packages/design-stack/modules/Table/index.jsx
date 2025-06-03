/**
 * Represents the properties for the Table component.
 *
 * @typedef {Object} TableProps
 * @property {React.ReactNode} [children] - The main content of the table, typically includes `TableHeader` and `TableBody` components.
 * @property {string} [containerWrapperClass] - Custom CSS class name applied to the outermost `div` container wrapping the table. Useful for adding margins or specific layout constraints.
 * @property {string} [defaultSortedColumnId] - The `id` of the column that should be sorted by default when the table initially renders. This is used for uncontrolled sorting state.
 * @property {boolean} [hasBorder=true] - Determines if the table and its outer container should have a visible border.
 * @property {boolean} [hasCompressedHeader=false] - Reduces header padding, useful when headers contain icons (like sorting indicators) to maintain consistent height. Set to `true` if using sorting or icons in the header.
 * @property {boolean} [hasShadow=true] - Applies a shadow effect to the table's container for better visual separation.
 * @property {string | number} [id] - A unique identifier for the table element. Useful for testing and accessibility.
 * @property {boolean} [isMultiLineTable=false] - Allows text within table cells (`<td>`) to wrap onto multiple lines if it exceeds the cell width.
 * @property {boolean} [isResizable=false] - Enables column resizing functionality. If `true`, ensure each `TableCell` in the header has a unique `cellId` prop.
 * @property {boolean} [isSticky=false] - Makes the table header sticky. When `true`, `border-spacing` is set to `0`. Often used with `overflow-x-auto` on the container.
 * @property {boolean} [loading=false] - Displays a loading indicator or overlay over the table, signifying data is being fetched or processed.
 * @property {boolean} [showVerticalLines=false] - Renders vertical lines between columns in the table body. Also adds a border to the container if `hasBorder` is false.
 * @property {string} [sortedColumnId] - The `id` of the currently sorted column. Used for controlled sorting state, allowing external logic to manage sorting.
 * @property {string} [tableDescription] - A brief description of the table's content. This is rendered inside a `<caption>` element but visually hidden (`sr-only`), primarily for screen reader accessibility.
 * @accessibility Provides context to users of assistive technologies about the table's purpose.
 * @property {React.ReactNode} [tableFooterNode] - Content to be rendered below the main table body, typically used for pagination controls or summary information.
 * @property {string} [tableWrapperClass] - Custom CSS class name applied directly to the `<table>` element.
 * @property {boolean} [useEnhancedKeyboardNavigation=false] - Enables enhanced keyboard navigation features, such as row focusing and interaction, especially useful when table rows have click actions.
 */

import React, { useMemo, useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { TableContextData } from "./context";
import useTable from "./useTable";

/**
 * Note: <strong>Drag and drop implementation guidelines</strong>: https://browserstack.atlassian.net/wiki/spaces/ENG/pages/4045308874/Drag+and+Drop+guidelines
 */

/**
 * Renders a data table with features like sorting, resizing, sticky headers, and enhanced keyboard navigation.
 * It uses a context provider (`TableContextData`) to share table state and configuration with its descendants (e.g., `TableHeader`, `TableRow`, `TableCell`).
 *
 * @component
 * @param {TableProps} props - The props for the Table component.
 * @example
 * ```jsx
 * <Table tableDescription="List of users" hasBorder={true} isSticky={true}>
 *   <TableHeader>
 *     <TableRow>
 *       <TableCell header sortable columnId="name">Name</TableCell>
 *       <TableCell header sortable columnId="email">Email</TableCell>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>John Doe</TableCell>
 *       <TableCell>john.doe@example.com</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary Storybook Documentation}
 * @see {@link https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4 Zeroheight Design Specs}
 * @type {React.FC<TableProps>}
 */
const Table = ({
  hasShadow = true,
  hasBorder = true,
  children = null,
  containerWrapperClass = "",
  defaultSortedColumnId = null,
  id = null,
  isResizable = false,
  isSticky = false,
  hasCompressedHeader = false,
  sortedColumnId = undefined,
  tableDescription = null,
  tableFooterNode = null,
  tableWrapperClass = "",
  useEnhancedKeyboardNavigation = false,
  showVerticalLines = false,
  isMultiLineTable = false,
  loading = false,
}) => {
  const { sortedColumn, setSortedColumn, tableRef } = useTable(
    useEnhancedKeyboardNavigation,
    sortedColumnId,
    defaultSortedColumnId
  );
  const [isFirstRow, setIsFirstRow] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);
  const [showResizer, setShowResizer] = useState(false);

  // Check if any cell in the table is merged
  const hasMergedCells = useMemo(() => {
    const findMergedCells = element => {
      // If no children, return false
      if (!element?.props?.children) return false;

      // If it's a TableCell with rowspan/colspan > 1
      if (element.props.rowspan > 1 || element.props.colspan > 1) {
        return true;
      }

      // Recursively check children
      if (Array.isArray(element.props.children)) {
        return element.props.children.some(findMergedCells);
      }
      return findMergedCells(element.props.children);
    };

    return React.Children.toArray(children).some(findMergedCells);
  }, [children]);

  return (
    <TableContextData.Provider
      value={{
        tableRef,
        isFirstRow,
        setIsFirstRow,
        sortedColumn,
        setSortedColumn,
        sortDirection,
        setSortDirection,
        showResizer,
        setShowResizer,
        useEnhancedKeyboardNavigation,
        controlledSortedColumnId: sortedColumnId,
        isResizableTableCells: isResizable,
        hasCompressedHeader,
        showVerticalLines,
        isMultiLineTable,
        hasMergedCells,
        loading,
      }}
    >
      <div
        className={twClassNames(
          {
            "border border-neutral-default": hasBorder || showVerticalLines,
            "shadow-sm": hasShadow,
          },
          "overflow-hidden overflow-x-auto bg-neutral-default md:rounded-lg",
          containerWrapperClass
        )}
      >
        <table
          ref={tableRef}
          id={id || undefined}
          className={twClassNames(
            "min-w-full divide-neutral-default",
            {
              "border-separate border-spacing-0": isSticky,
              "w-max table-fixed": isResizable,
            },
            tableWrapperClass
          )}
          role="grid"
        >
          {!!tableDescription && (
            <caption className="sr-only">{tableDescription}</caption>
          )}
          {children}
        </table>
        {tableFooterNode}
      </div>
    </TableContextData.Provider>
  );
};
Table.propTypes = {
  /** Node containing the content that will be displayed within the table component */
  children: PropTypes.node,
  /** A custom CSS class name to style the outer container wrapper of the table */
  containerWrapperClass: PropTypes.string,
  /** Determines which column should be sorted by default */
  defaultSortedColumnId: PropTypes.string,
  /** Determines whether to add a border to the table */
  hasBorder: PropTypes.bool,
  /** Determines whether the header has icon or not to maintain consistent header height. Note:To be passed true for table having sorting or floating icon. */
  hasCompressedHeader: PropTypes.bool,
  /** Determines whether to add a shadow effect to the table */
  hasShadow: PropTypes.bool,
  /** The ID of the table component to uniquely identify every table */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** A custom CSS class name to enable multiple lines in a table cell */
  isMultiLineTable: PropTypes.bool,
  /** Specifies if the table has cells that can have resizing action attached to it.If yes, please provide unique cellId prop in TableCell component */
  isResizable: PropTypes.bool,
  /** If true, there will be no border spacing inside the table */
  isSticky: PropTypes.bool,
  /** Show the loading state of the component */
  loading: PropTypes.bool,
  /** It controls the visibility of vertical lines of a row */
  showVerticalLines: PropTypes.bool,
  /** While using table sorting a sortedColumnId can be passed here */
  sortedColumnId: PropTypes.string,
  /** A brief description of the table */
  tableDescription: PropTypes.string,
  /** Node containing the content that will be displayed within the  bottom side of the Table allowing the addition of custom footer or pagination */
  tableFooterNode: PropTypes.node,
  /** A custom CSS class name to style the wrapper of the table */
  tableWrapperClass: PropTypes.string,
  /** Pass it as true whenever there is a table row click and you want enhanced keyboard navigation */
  useEnhancedKeyboardNavigation: PropTypes.bool,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */

export default Table;
