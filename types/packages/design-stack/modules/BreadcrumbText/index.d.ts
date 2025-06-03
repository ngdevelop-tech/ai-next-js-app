/**
 * Represents a single text item within a breadcrumb trail.
 * It visually indicates the current page's location within a navigational hierarchy or differentiates between active and inactive states.
 *
 * @typedef {Object} BreadcrumbTextProps
 * @property {React.ReactNode} [children] - The content to be displayed within the breadcrumb item. Typically text, but can be any renderable node.
 * @property {string} [id] - An optional unique identifier for the root `<span>` element of the component.
 * @property {boolean} [isActive=false] - If `true`, styles the item as the currently active page in the breadcrumb trail. Defaults to `false`.
 * @property {string} [wrapperClassName] - An optional CSS class name to apply custom styles to the root `<span>` element.
 */
import React from "react";
/**
 * Renders a text item for use within a BreadcrumbContainer.
 * Applies specific styling based on whether the item is marked as active.
 *
 * @type {React.FC<BreadcrumbTextProps>}
 * @param {BreadcrumbTextProps} props - The props for the BreadcrumbText component.
 * @returns {React.ReactElement} The rendered span element representing the breadcrumb text.
 */
declare const BreadcrumbText: {
    ({ children: any, id: any, isActive: any, wrapperClassName: any, ...props }: any): React.ReactElement;
    propTypes: {
        /** The content to be displayed within the breadcrumb item. Typically text, but can be any renderable node. */
        children: any;
        /** An optional unique identifier for the root `<span>` element. */
        id: any;
        /** If `true`, styles the item as the currently active page in the breadcrumb trail. Defaults to `false`. */
        isActive: any;
        /** An optional CSS class name to apply custom styles to the root `<span>` element. */
        wrapperClassName: any;
    };
    defaultProps: {
        id: any;
        isActive: boolean;
        children: any;
        wrapperClassName: string;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-breadcrumbcontainer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96c229-breadcrumbs/b/4635b4
 * @end
 */
export default BreadcrumbText;
