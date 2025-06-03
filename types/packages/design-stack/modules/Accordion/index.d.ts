/**
 * @typedef {Object} AccordionProps
 * @property {React.ReactNode} children - The content to be rendered inside the Accordion, typically including `Accordion.Button` and `Accordion.Panel`.
 * @property {boolean} [defaultOpen=false] - If `true`, the Accordion will be open by default on initial render.
 * @property {string} [id] - Optional unique identifier for the root element of the Accordion.
 * @property {string} [wrapperClassName] - Optional CSS class name to apply to the Accordion's root `div` element for custom styling.
 */
import React from 'react';
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
declare const Accordion: {
    ({ children: any, defaultOpen, any, id, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** The content to be rendered inside the Accordion, typically including `Accordion.Button` and `Accordion.Panel`. */
        children: any;
        /** If `true`, the Accordion will be open by default on initial render. */
        defaultOpen: any;
        /** Optional unique identifier for the root element of the Accordion. */
        id: any;
        /** Optional CSS class name to apply to the Accordion's root `div` element for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-accordion--controlled-simple-accordion
 * @zeroHeight https://zeroheight.com/023d5159d/p/724ed9-accordion/b/4635b4
 * @end
 */
export default Accordion;
