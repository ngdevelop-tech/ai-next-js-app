/**
 * @typedef {Object} StepItem
 * @property {string} id - Unique identifier for the step.
 * @property {string} name - The main label or title for the step.
 * @property {string} [description] - Optional description providing more details about the step.
 * @property {('upcoming'|'current'|'complete')} status - The current status of the step.
 */

/**
 * @typedef {Object} StepsProps
 * @property {('simple'|'bullets'|'panels-with-borders'|'circles'|'bullets-and-text'|'circle-with-text')} [format='simple'] - Specifies the visual style and layout of the steps. Defaults to 'simple'.
 * @property {string} [id] - Optional unique identifier for the root element of the component.
 * @property {string} [label=''] - Provides an accessible label for the navigation element wrapping the steps. Defaults to an empty string.
 * @property {(event: React.MouseEvent<HTMLLIElement>, step: StepItem, stepIdx: number) => void} [onClick] - Optional callback function triggered when a step item is clicked. Receives the click event, the step data object, and the step index.
 * @property {StepItem[]} steps - An array of step objects to be displayed. Each object represents a single step in the process.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the main container div for custom styling. Defaults to an empty string.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import BulletAndTextListElement from "./components/BulletAndTextListElement";
import BulletListElement from "./components/BulletListElement";
import CircleListElement from "./components/CircleListElement";
import CircleWithTextListElement from "./components/CircleWithTextListElement";
import PanelListElement from "./components/PanelListElement";
import SimpleListElement from "./components/SimpleListElement";
import {
  STEPS_BULLETS_CLASSES,
  STEPS_FORMAT,
  STEPS_STATUS,
  STEPS_WRAPPER_CLASSES,
} from "./constants/steps";

/**
 * Steps component displays a list of steps in a process, visually indicating the current, completed, and upcoming steps.
 * It supports various visual formats and provides accessibility features.
 *
 * @component
 * @type {React.FC<StepsProps>}
 *
 * @example
 * const stepsData = [
 *   { id: '01', name: 'Step 1', description: 'Details for step 1', status: 'complete' },
 *   { id: '02', name: 'Step 2', description: 'Details for step 2', status: 'current' },
 *   { id: '03', name: 'Step 3', description: 'Details for step 3', status: 'upcoming' },
 * ];
 *
 * <Steps
 *   steps={stepsData}
 *   format="circles"
 *   label="Application Process"
 *   onClick={(event, step, index) => console.log('Clicked step:', step.name, 'at index:', index)}
 * />
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-steps--simple-list Storybook}
 * @see {@link https://zeroheight.com/023d5159d/p/8223ad-steps/b/4635b4 Zeroheight}
 *
 * @accessibility
 * - Uses a `nav` element to wrap the steps list for semantic structure.
 * - The `aria-label` attribute on the `nav` element should be set via the `label` prop to describe the purpose of the steps navigation.
 * - Individual steps use appropriate ARIA attributes (handled internally by list element components) based on their status (e.g., `aria-current="step"` for the current step).
 */
const Steps = ({
  id = null,
  label = "",
  onClick = null,
  steps,
  format = STEPS_FORMAT.SIMPLE,
  wrapperClassName = "",
}) => (
  <div
    className={twClassNames(
      {
        "lg:border-t lg:border-b lg:border-neutral-default":
          format === STEPS_FORMAT.PANELS_WITH_BORDERS,
        "py-12 px-4 sm:px-6 lg:px-8": format === STEPS_FORMAT.BULLETS_AND_TEXT,
      },
      wrapperClassName
    )}
    {...(id !== null && { id })}
  >
    <nav
      aria-label={label}
      className={twClassNames(STEPS_WRAPPER_CLASSES[format])}
    >
      {format === STEPS_FORMAT.BULLETS && (
        <div className="text-sm font-medium">
          Step{" "}
          {steps.findIndex(step => step.status === STEPS_STATUS.CURRENT) + 1} of{" "}
          {steps.length}
        </div>
      )}
      <ol className={twClassNames(STEPS_BULLETS_CLASSES[format])}>
        {steps.map((step, stepIdx) => {
          switch (format) {
            case STEPS_FORMAT.SIMPLE:
              return (
                <SimpleListElement
                  key={step.id}
                  step={step}
                  stepIdx={stepIdx}
                  onClick={onClick}
                />
              );
            case STEPS_FORMAT.BULLETS:
              return (
                <BulletListElement
                  key={step.id}
                  step={step}
                  onClick={onClick}
                />
              );
            case STEPS_FORMAT.PANELS_WITH_BORDERS:
              return (
                <PanelListElement
                  key={step.id}
                  stepsLength={steps.length - 1}
                  step={step}
                  stepIdx={stepIdx}
                  onClick={onClick}
                />
              );
            case STEPS_FORMAT.CIRCLES:
              return (
                <CircleListElement
                  key={step.id}
                  stepsLength={steps.length - 1}
                  step={step}
                  stepIdx={stepIdx}
                  onClick={onClick}
                />
              );
            case STEPS_FORMAT.BULLETS_AND_TEXT:
              return (
                <BulletAndTextListElement
                  step={step}
                  onClick={onClick}
                  key={step.id}
                />
              );
            case STEPS_FORMAT.CIRCLE_WITH_TEXT:
              return (
                <CircleWithTextListElement
                  key={step.id}
                  stepsLength={steps.length - 1}
                  step={step}
                  stepIdx={stepIdx}
                  onClick={onClick}
                />
              );
            default:
              return <p>No steps variant selected</p>;
          }
        })}
      </ol>
    </nav>
  </div>
);

Steps.propTypes = {
  /** Specifies the visual style and layout of the steps. */
  format: PropTypes.oneOf(Object.values(STEPS_FORMAT)),
  /** Optional unique identifier for the root element of the component. */
  id: PropTypes.string,
  /** Provides an accessible label for the navigation element wrapping the steps. */
  label: PropTypes.string,
  /** Optional callback function triggered when a step item is clicked. */
  onClick: PropTypes.func,
  /** An array of step objects to be displayed. */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      /** Optional description providing more details about the step. */
      description: PropTypes.string,
      /** Unique identifier for the step. */
      id: PropTypes.string.isRequired,
      /** The main label or title for the step. */
      name: PropTypes.string.isRequired,
      /** The current status of the step. */
      status: PropTypes.oneOf(Object.values(STEPS_STATUS)).isRequired,
    })
  ).isRequired,
  /** Optional CSS class name(s) to apply to the main container div for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-steps--simple-list
 * @zeroHeight https://zeroheight.com/023d5159d/p/8223ad-steps/b/4635b4
 * @end
 */

export default Steps;
