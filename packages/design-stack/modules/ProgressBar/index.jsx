/**
 * @typedef {Object} ProgressBarProps
 * @property {number} currentStep? - Active progression in the progress bar
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} label? - Provide label to overall Step component for accessibility
 * @property {number} percentage? - Percentage of achieve progress
 * @property {string[]} steps? - List of items to be covered in steps
 * @property {string} title? - Provide title to Progress component
 * @property {string} wrapperClassName? - A custom CSS class name to style the progress bar
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<ProgressBarProps>}
 */
const ProgressBar = ({
  currentStep = 0,
  id = null,
  label = "",
  percentage = 0.0,
  steps = [],
  title = "",
  wrapperClassName = "",
}) => (
  <div {...(id !== null && { id })}>
    {title && (
      <p className="text-sm font-medium text-neutral-default">{title}</p>
    )}
    <div
      className={twClassNames("mt-6", wrapperClassName)}
      role="progressbar"
      aria-label={label}
      aria-valuenow={percentage}
      aria-valuetext={steps[currentStep - 1]}
      tabIndex={0}
    >
      <div className="overflow-hidden rounded-full bg-neutral-strongest">
        <div
          className="h-2 rounded-full bg-brand-default"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {steps && steps.length > 0 && (
        <div className="mt-6 hidden grid-flow-col text-sm font-medium text-neutral-weaker sm:grid">
          {steps.map((step, stepIndex) => (
            <div
              key={step}
              className={twClassNames(
                stepIndex === steps.length - 1 ? "text-right" : "text-center",
                stepIndex === 0 && "text-left text-brand-default",
                stepIndex < currentStep && "text-brand-default"
              )}
            >
              {step}
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);

ProgressBar.propTypes = {
  /** Active progression in the progress bar */
  currentStep: PropTypes.number,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Provide label to overall Step component for accessibility */
  label: PropTypes.string,
  /** Percentage of achieve progress */
  percentage: PropTypes.number,
  /** List of items to be covered in steps */
  steps: PropTypes.arrayOf(PropTypes.string),
  /** Provide title to Progress component */
  title: PropTypes.string,
  /** A custom CSS class name to style the progress bar */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-progressbar--primary
 * @zeroHeight
 * @end
 */

export default ProgressBar;
