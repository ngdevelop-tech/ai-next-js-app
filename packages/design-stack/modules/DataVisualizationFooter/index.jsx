/**
 * Props for the DataVisualizationFooter component.
 * @typedef {Object} DataVisualizationFooterProps
 * @property {string} [footerDescription] - Optional description text displayed in the footer.
 * @property {HyperlinkProps} [footerlinkProps] - Optional object containing props to be passed down to the underlying `Hyperlink` component. See `HyperlinkProps` for available options.
 * @property {string} [footerlinkText] - Optional text for the link displayed in the footer. If provided, a link will be rendered.
 * @property {string} [id] - Optional unique identifier to be added to the root `div` element.
 * @property {string} [wrapperClassName] - Optional custom CSS class name(s) to apply to the root `div` element for custom styling.
 */

import React from "react";
import { MdEast } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Hyperlink, { HyperlinkProps } from "../Hyperlink";

/**
 * Renders a footer section typically used below data visualizations.
 * It can display a description and a call-to-action link.
 *
 * @component
 * @param {DataVisualizationFooterProps} props - Props for the DataVisualizationFooter component.
 * @returns {React.ReactElement} The rendered DataVisualizationFooter component.
 * @type {React.FC<DataVisualizationFooterProps>}
 */
const DataVisualizationFooter = ({
  footerDescription = "",
  footerlinkProps = {},
  footerlinkText = "",
  id = null,
  wrapperClassName = "",
}) => (
  <div {...(id !== null && { id })} className={twClassNames(wrapperClassName)}>
    {(footerlinkText?.length > 0 || footerDescription?.length > 0) && (
      <div className="mt-4 rounded-b-md bg-neutral-strong px-6 py-3.5  ">
        <div className="flex flex-col items-baseline justify-between sm:flex-row">
          {footerDescription?.length > 0 && (
            <p className="text-base font-normal leading-6 text-neutral-weak">
              {footerDescription}
            </p>
          )}

          {footerlinkText?.length > 0 && (
            <Hyperlink
              {...footerlinkProps}
              wrapperClassName={twClassNames(
                "text-sm font-medium leading-5",
                wrapperClassName
              )}
            >
              {footerlinkText}
              <span aria-hidden="true" className="ml-1">
                <MdEast className="h-4 w-4 icon-brand-default" />
              </span>
            </Hyperlink>
          )}
        </div>
      </div>
    )}
  </div>
);

DataVisualizationFooter.propTypes = {
  /** Optional description text displayed in the footer. */
  footerDescription: PropTypes.string,
  /** Optional object containing props to be passed down to the underlying `Hyperlink` component. See `HyperlinkProps` for available options. */
  footerlinkProps: PropTypes.shape(HyperlinkProps),
  /** Optional text for the link displayed in the footer. If provided, a link will be rendered. */
  footerlinkText: PropTypes.string,
  /** Optional unique identifier to be added to the root `div` element. */
  id: PropTypes.string,
  /** Optional custom CSS class name(s) to apply to the root `div` element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-datavisualization--primary
 * @zeroHeight
 * @end
 */

export default DataVisualizationFooter;
