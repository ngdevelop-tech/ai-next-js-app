/**
 * @typedef {Object} PageHeadingsTitleAndBadgeProps
 * @property {React.ReactNode} breadcrumbNode? - A custom node representing the breadcrumb navigation at the top.
 * @property {React.ReactNode} headerBadgesNode? - A custom node representing the badges along with the header.
 * @property {string} heading? - The main heading or TITLE.
 * @property {Record<string, any>} inlineEditingProps? - Object of props to support inlineEditing.
 * @property {string} defaultElementText?
 * @property {string} elementText?
 * @property {(event: React.MouseEvent<any>) => void} onBlurCallback?
 * @property {(event: React.MouseEvent<any>) => void} onChangeCallback?
 * @property {string} wrapperClassname?
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import EditingInline from "../../../shared/EditingInline";
import EditingStaticElement from "../../../shared/EditingStaticElement";
import SkeletonLoader from "../../SkeletonLoader";
import { PAGE_HEADINGS_THEME } from "../constants/pageHeadings";

export function PageHeadingsTitleAndBadge({
  breadcrumbNode = null,
  headerBadgesNode = null,
  heading = "",
  inlineEditingProps = null,
  isEditable = false,
  isTruncateTooltip = false,
  loading = false,
  theme = PAGE_HEADINGS_THEME.LIGHT,
}) {
  if ((heading || headerBadgesNode) && loading) {
    return (
      <div className="h-7 w-full py-0.5">
        <SkeletonLoader wrapperClassName="w-[calc(100%-72%)] h-6" animate />
      </div>
    );
  }

  const staticElementClassname = twClassNames("text-2xl font-bold leading-7 ", {
    "text-neutral-default": theme === PAGE_HEADINGS_THEME.LIGHT,
    "text-neutral-inverse-default": theme === PAGE_HEADINGS_THEME.DARK,
    "sm:truncate": !isTruncateTooltip,
  });
  return (
    <div className="flex items-center space-x-4">
      {heading &&
        (isEditable ? (
          <EditingInline
            StaticElement={EditingStaticElement}
            inlineEditingProps={inlineEditingProps}
            staticElementClassname={staticElementClassname}
            isTruncateTooltip={isTruncateTooltip}
            internalWrapperClassname={twClassNames("max-w-full", {
              "mt-2": breadcrumbNode,
            })}
          />
        ) : (
          <EditingStaticElement
            heading={heading}
            wrapperClassName={twClassNames(staticElementClassname, {
              "mt-2": breadcrumbNode,
            })}
            isTruncateTooltip={isTruncateTooltip}
          />
        ))}{" "}
      {headerBadgesNode && (
        <div className="mt-2 shrink-0">{headerBadgesNode}</div>
      )}
    </div>
  );
}

PageHeadingsTitleAndBadge.propTypes = {
  /** A custom node representing the breadcrumb navigation at the top. */
  breadcrumbNode: PropTypes.node,
  /** A custom node representing the badges along with the header. */
  headerBadgesNode: PropTypes.node,
  /** The main heading or TITLE. */
  heading: PropTypes.string,
  /** Object of props to support inlineEditing. */
  inlineEditingProps: PropTypes.shape({
    defaultElementText: PropTypes.string,
    elementText: PropTypes.string,
    onBlurCallback: PropTypes.func,
    onChangeCallback: PropTypes.func,
    wrapperClassname: PropTypes.string,
  }),
  /** Specifies whether the heading is editable or not. */
  isEditable: PropTypes.bool,
  /** Specifies whether the heading has tooltip or not. */
  isTruncateTooltip: PropTypes.bool,
  /** Show the loading state of the component */
  loading: PropTypes.bool,
  /** A custom theme to apply specific styling to the page header. */
  theme: PropTypes.oneOf(Object.values(PAGE_HEADINGS_THEME)),
};
