/**
 * @typedef {Object} BreadcrumbContainerProps
 * @property {string} [ariaLabel] - Provides an accessible label for the navigation landmark. Defaults to null. It's recommended to provide a descriptive label (e.g., "Breadcrumb").
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the BreadcrumbContainer component.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 */
import React from "react";
/**
 * BreadcrumbContainer serves as a wrapper for a set of breadcrumb items.
 * It renders a <nav> element with an ordered list (<ol>) containing the breadcrumb trail,
 * ensuring proper semantics and accessibility.
 *
 * @type {React.FC<BreadcrumbContainerProps>}
 */
declare const BreadcrumbContainer: {
    ({ ariaLabel, any, children, any, id, any, }: any): React.ReactElement;
    propTypes: {
        /** Provide label to the component. */
        ariaLabel: any;
        /** Node containing the content that will be displayed within the BreadcrumbContainer component.  */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-breadcrumbcontainer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96c229-breadcrumbs/b/4635b4
 * @end
 */
export default BreadcrumbContainer;
