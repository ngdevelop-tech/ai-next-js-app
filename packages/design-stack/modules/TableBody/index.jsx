/**
 * @typedef {Object} TableBodyProps
 * @property {React.ReactNode} [children] - The content of the table body, typically `TableRow` components.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the `tbody` element for custom styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * Represents the body section (`<tbody>`) of a Table component.
 * It wraps the table rows (`TableRow`) and applies default styling.
 *
 * @component
 * @example
 * ```jsx
 * <Table>
 *   <TableHeader>...</TableHeader>
 *   <TableBody>
 *     <TableRow>...</TableRow>
 *     <TableRow>...</TableRow>
 *   </TableBody>
 * </Table>
 * ```
 * @type {React.ForwardRefExoticComponent<TableBodyProps & React.RefAttributes<HTMLTableSectionElement>>}
 */
const TableBody = React.forwardRef(
  ({ children = null, wrapperClassName = "" }, ref) => (
    <tbody
      className={twClassNames(
        "divide-y divide-neutral-default border-t",
        wrapperClassName
      )}
      ref={ref}
    >
      {children}
    </tbody>
  )
);

TableBody.propTypes = {
  /** The content of the table body, typically `TableRow` components. */
  children: PropTypes.node,
  /** Optional CSS class name(s) to apply to the `tbody` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */

export default TableBody;
