/**
 * Represents the properties for the BreadcrumbContents component.
 * Each BreadcrumbContents typically represents a single item within a Breadcrumb trail.
 *
 * @typedef {Object} BreadcrumbContentsProps
 * @property {React.ReactNode} [children] - The primary content to be displayed for this breadcrumb item. This could be text, a link, or any other React node.
 * @property {string} [id] - An optional unique identifier to be applied to the root `<li>` element of the component. Useful for testing or accessibility purposes.
 * @property {boolean} [isActive=false] - Indicates if this breadcrumb item represents the currently active page or section. Active items are typically styled differently and may not be interactive links. Defaults to `false`.
 * @property {string} [labelClassName] - An optional CSS class name to apply specifically to the `BreadcrumbText` component wrapping the `children`. Allows for custom styling of the breadcrumb item's text content.
 * @property {React.ReactNode} [seperatorIcon=<MdChevronRight />] - The icon component or node to be used as a visual separator between breadcrumb items. Defaults to the `MdChevronRight` icon.
 * @property {boolean} [showSeperatorIcon=true] - Determines whether the `seperatorIcon` should be displayed after this breadcrumb item. Typically set to `false` for the last item in the breadcrumb trail. Defaults to `true`.
 * @property {string} [wrapperClassName] - An optional CSS class name to apply to the root `<li>` element of the component. Allows for custom styling of the entire breadcrumb item container.
 */
import React from "react";
/**
 * BreadcrumbContents component represents a single item within a breadcrumb navigation trail.
 * It displays the provided children as the item's content and optionally shows a separator icon.
 * The styling and behavior can be customized via props like `isActive`, `labelClassName`, and `wrapperClassName`.
 *
 * @component
 * @param {BreadcrumbContentsProps} props - The props for the BreadcrumbContents component.
 * @returns {React.ReactElement} The rendered list item element representing a breadcrumb item.
 *
 * @example
 * // Basic usage
 * <BreadcrumbContents>Home</BreadcrumbContents>
 *
 * @example
 * // Active breadcrumb item
 * <BreadcrumbContents isActive>Products</BreadcrumbContents>
 *
 * @example
 * // Custom separator and class names
 * <BreadcrumbContents
 *   seperatorIcon={<CustomIcon />}
 *   labelClassName="my-label-style"
 *   wrapperClassName="my-wrapper-style"
 * >
 *   Category
 * </BreadcrumbContents>
 */
declare const BreadcrumbContents: {
    ({ children, any, id, any, isActive, any, labelClassName, any, seperatorIcon, any, showSeperatorIcon, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the BreadcrumbContents. */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Indicates if this breadcrumb item represents the currently active page or section. */
        isActive: any;
        /** An optional CSS class name to apply specifically to the `BreadcrumbText` component wrapping the `children`. */
        labelClassName: any;
        /** The icon component or node to be used as a visual separator between breadcrumb items. */
        seperatorIcon: any;
        /** Determines whether the `seperatorIcon` should be displayed after this breadcrumb item. */
        showSeperatorIcon: any;
        /** An optional CSS class name to apply to the root `<li>` element of the component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-breadcrumbcontainer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96c229-breadcrumbs/b/4635b4
 * @end
 */
export default BreadcrumbContents;
