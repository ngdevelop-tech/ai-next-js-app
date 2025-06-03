/**
 * Props for the AccordionSimpleHeader component.
 *
 * @typedef {Object} AccordionSimpleHeaderProps
 * @property {string} [chevronIconColor] - Optional CSS class to customize the color of the chevron icon. Defaults to `icon-neutral-weak`.
 * @property {boolean} [controller] - If provided, determines the open/closed state of the accordion, making it a controlled component. `true` for open, `false` for closed.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Optional callback function executed when the header button is clicked.
 * @property {(event: React.KeyboardEvent<HTMLButtonElement>) => void} [onKeyDown] - Optional callback function executed when a key is pressed while the header button is focused, specifically handles 'Enter' or 'Space'.
 * @property {string} title - The text content to display as the header title. This is required.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply additional styles to the main wrapper `Disclosure.Button` element.
 */
import React from "react";
/**
 * AccordionSimpleHeader provides a clickable header for an accordion item,
 * typically used within a Headless UI DisclosureButton component. It displays a title
 * and a chevron icon indicating the open/closed state.
 * It supports both controlled (state managed externally via `controller` prop)
 * and uncontrolled (state managed internally by Headless UI DisclosureButton) modes.
 *
 * @type {React.FC<AccordionSimpleHeaderProps>}
 * @param {AccordionSimpleHeaderProps} props - The props for the component.
 */
declare const AccordionSimpleHeader: {
    ({ chevronIconColor, any, controller, any, onClick, any, onKeyDown, any, title: any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional CSS class to customize the color of the chevron icon. */
        chevronIconColor: any;
        /** If provided, determines the open/closed state (controlled component). `true` for open, `false` for closed. */
        controller: any;
        /** Optional callback function executed when the header button is clicked. Receives the click event. */
        onClick: any;
        /** Optional callback function executed on keydown ('Enter' or 'Space'). Receives the keyboard event. */
        onKeyDown: any;
        /** The text content to display as the header title. Required. */
        title: any;
        /** Optional custom CSS class name for the wrapper button element. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-accordion--controlled-simple-accordion
 * @zeroHeight https://zeroheight.com/023d5159d/p/724ed9-accordion/b/4635b4
 * @end
 */
export default AccordionSimpleHeader;
