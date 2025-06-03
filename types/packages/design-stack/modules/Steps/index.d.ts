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
declare const Steps: {
    ({ id, any, label, any, onClick, any, steps: any, format, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Specifies the visual style and layout of the steps. */
        format: any;
        /** Optional unique identifier for the root element of the component. */
        id: any;
        /** Provides an accessible label for the navigation element wrapping the steps. */
        label: any;
        /** Optional callback function triggered when a step item is clicked. */
        onClick: any;
        /** An array of step objects to be displayed. */
        steps: any;
        /** Optional CSS class name(s) to apply to the main container div for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-steps--simple-list
 * @zeroHeight https://zeroheight.com/023d5159d/p/8223ad-steps/b/4635b4
 * @end
 */
export default Steps;
