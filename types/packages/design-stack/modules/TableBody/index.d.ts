/**
 * @typedef {Object} TableBodyProps
 * @property {React.ReactNode} [children] - The content of the table body, typically `TableRow` components.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the `tbody` element for custom styling.
 */
import React from "react";
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
declare const TableBody: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */
export default TableBody;
