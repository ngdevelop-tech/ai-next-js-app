/**
 * @typedef {Object} BreadcrumbContainerProps
 * @property {string} [ariaLabel] - Provides an accessible label for the navigation landmark. Defaults to null. It's recommended to provide a descriptive label (e.g., "Breadcrumb").
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the BreadcrumbContainer component.
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 */

import React from "react";
import PropTypes from "prop-types";

/**
 * BreadcrumbContainer serves as a wrapper for a set of breadcrumb items.
 * It renders a <nav> element with an ordered list (<ol>) containing the breadcrumb trail,
 * ensuring proper semantics and accessibility.
 *
 * @type {React.FC<BreadcrumbContainerProps>}
 */
const BreadcrumbContainer = ({
  ariaLabel = null,
  children = null,
  id = null,
}) => (
  <nav {...(id && { id })} {...(ariaLabel && { "aria-label": ariaLabel })}>
    <ol className="group flex flex-wrap items-center">{children}</ol>
  </nav>
);

BreadcrumbContainer.propTypes = {
  /** Provide label to the component. */
  ariaLabel: PropTypes.string,
  /** Node containing the content that will be displayed within the BreadcrumbContainer component.  */
  children: PropTypes.node,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-breadcrumbcontainer--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/96c229-breadcrumbs/b/4635b4
 * @end
 */

export default BreadcrumbContainer;
