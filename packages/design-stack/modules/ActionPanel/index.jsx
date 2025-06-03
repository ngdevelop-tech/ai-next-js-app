/**
 * Props for the ActionPanel component.
 * @typedef {Object} ActionPanelProps
 * @property {React.ReactNode} [CTAContent] - Optional React node containing the call-to-action elements (e.g., buttons).
 * @property {('bottom'|'bottom-right'|'right')} [ctaContentPlacement='bottom'] - Specifies the placement of the CTA content relative to the title and description. Defaults to 'bottom'.
 * @property {React.ReactNode} [description] - Optional React node containing the main descriptive text content.
 * @property {string} [descriptionWrapperClassName] - Optional custom CSS class name to apply to the description's wrapping div.
 * @property {boolean} [hasBorder=true] - Determines whether to render a border around the panel. Defaults to true.
 * @property {string} [id] - Optional unique identifier attribute for the root element of the component.
 * @property {React.ReactNode} [title] - Optional React node containing the title or heading content.
 * @property {string} [titleWrapperClassName] - Optional custom CSS class name to apply to the title's wrapping p tag.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply to the root div element of the component.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { CTA_PLACEMENT } from "./constants/actionPanel";

/**
 * ActionPanel component displays content sections with optional titles, descriptions,
 * and call-to-action elements, often used for informational or promotional blocks.
 * It allows flexible layout options for the CTA content.
 * @type {React.FC<ActionPanelProps>}
 */
const ActionPanel = ({
  CTAContent = null,
  ctaContentPlacement = "bottom",
  description = null,
  descriptionWrapperClassName = "",
  hasBorder = true,
  id = null,
  title = null,
  titleWrapperClassName = "",
  wrapperClassName = "",
}) => {
  if (!title && !description && !CTAContent) return null;

  return (
    <div
      className={twClassNames(
        "flex flex-col justify-between gap-5 rounded-lg bg-neutral-default p-6 shadow-sm",
        {
          "border border-neutral-default": hasBorder,
          "flex-row": ctaContentPlacement !== CTA_PLACEMENT.BOTTOM,
          "items-end": ctaContentPlacement === CTA_PLACEMENT.BOTTOM_RIGHT,
        },
        wrapperClassName
      )}
      {...(id !== null && { id })}
    >
      <div>
        {title && (
          <p
            className={twClassNames(
              "text-base font-semibold leading-6 text-neutral-default",
              titleWrapperClassName
            )}
          >
            {title}
          </p>
        )}
        {description && (
          <div
            className={twClassNames(
              "mt-2 max-w-xl text-sm font-normal leading-5 text-neutral-weaker",
              descriptionWrapperClassName
            )}
          >
            <p>{description}</p>
          </div>
        )}
      </div>
      {CTAContent && <div>{CTAContent}</div>}
    </div>
  );
};

ActionPanel.propTypes = {
  /** Optional React node containing the call-to-action elements (e.g., buttons). */
  CTAContent: PropTypes.node,
  /** Specifies the placement of the CTA content relative to the title and description. Defaults to 'bottom'. */
  ctaContentPlacement: PropTypes.oneOf(Object.values(CTA_PLACEMENT)),
  /** Optional React node containing the main descriptive text content. */
  description: PropTypes.node,
  /** Optional custom CSS class name to apply to the description's wrapping div. */
  descriptionWrapperClassName: PropTypes.string,
  /** Determines whether to render a border around the panel. Defaults to true. */
  hasBorder: PropTypes.bool,
  /** Optional unique identifier attribute for the root element of the component. */
  id: PropTypes.string,
  /** Optional React node containing the title or heading content. */
  title: PropTypes.node,
  /** Optional custom CSS class name to apply to the title's wrapping p tag. */
  titleWrapperClassName: PropTypes.string,
  /** Optional custom CSS class name to apply to the root div element of the component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-actionpanel--primary
 * @zeroHeight
 * @end
 */

export default ActionPanel;
