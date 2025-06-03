/**
 * @typedef {Object} TableHeadProps
 * @property {React.ReactNode} children? - Content to be rendered within Table head
 * @property {string} wrapperClassName? - A custom CSS class name to style the table head.
 */
import React from "react";
/**
 * @type {React.FC<TableHeadProps>}
 */
declare const TableHead: {
    ({ children, any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** Content to be rendered within Table head */
        children: any;
        /** A custom CSS class name to style the table head. */
        wrapperClassName: any;
    };
    defaultProps: {
        children: any;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-table--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/448750-tables/b/4635b4
 * @end
 */
export default TableHead;
