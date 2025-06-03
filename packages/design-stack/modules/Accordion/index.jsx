/**
 * @typedef {Object} AccordionProps
 * @property {React.ReactNode} children - The content to be rendered inside the Accordion, typically including `Accordion.Button` and `Accordion.Panel`.
 * @property {boolean} [defaultOpen=false] - If `true`, the Accordion will be open by default on initial render.
 * @property {string} [id] - Optional unique identifier for the root element of the Accordion.
 * @property {string} [wrapperClassName] - Optional CSS class name to apply to the Accordion's root `div` element for custom styling.
 */

import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import PropTypes from 'prop-types';

/**
 * The Accordion component provides a way to toggle the visibility of content sections.
 * It utilizes the Headless UI Disclosure component internally.
 *
 * @component
 * @param {AccordionProps} props - The props for the Accordion component.
 * @example
 * ```jsx
 * <Accordion>
 *   <Accordion.Button>Click Me</Accordion.Button>
 *   <Accordion.Panel>Content goes here</Accordion.Panel>
 * </Accordion>
 * ```
 * @type {React.FC<AccordionProps>}
 */
const Accordion = ({
  children,
  defaultOpen = false,
  id = null,
  wrapperClassName = "",
}) => (
  <Disclosure as={Fragment} defaultOpen={defaultOpen}>
    <div className={wrapperClassName} {...(id !== null && { id })}>
      {children}
    </div>
  </Disclosure>
);

Accordion.propTypes = {
  /** The content to be rendered inside the Accordion, typically including `Accordion.Button` and `Accordion.Panel`. */
  children: PropTypes.node.isRequired,
  /** If `true`, the Accordion will be open by default on initial render. */
  defaultOpen: PropTypes.bool,
  /** Optional unique identifier for the root element of the Accordion. */
  id: PropTypes.string,
  /** Optional CSS class name to apply to the Accordion's root `div` element for custom styling. */
  wrapperClassName: PropTypes.string
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-accordion--controlled-simple-accordion
 * @zeroHeight https://zeroheight.com/023d5159d/p/724ed9-accordion/b/4635b4
 * @end
 */

export default Accordion;
