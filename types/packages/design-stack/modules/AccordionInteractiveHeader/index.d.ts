/**
 * @typedef {Object} AccordionInteractiveHeaderProps Represents the props for the AccordionInteractiveHeader component.
 * @property {React.ReactNode} [asideContent] - Optional content displayed on the right side of the header, typically for actions or metadata.
 * @property {string} [chevronIconColor] - Optional CSS class to customize the color of the chevron icon.
 * @property {React.ReactNode} [children] - Optional content displayed below the title when the accordion is open.
 * @property {boolean} [controller] - If defined, controls the open/closed state of the accordion externally. `true` for open, `false` for closed. Used for controlled components.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Optional callback function executed when the header button is clicked. Only applicable in controlled mode.
 * @property {(event: React.KeyboardEvent<HTMLButtonElement>) => void} [onKeyDown] - Optional callback function executed when the Enter or Space key is pressed on the header button. Only applicable in controlled mode.
 * @property {React.ReactNode} [title] - The main title content displayed in the header.
 * @property {string} [titleWrapperClassName] - Optional custom CSS class name applied to the button element wrapping the title and chevron.
 * @property {React.ReactNode} [trigger] - Optional element displayed to the left of the main header content, often used for icons or checkboxes.
 * @property {string} [wrapperClassName] - Optional custom CSS class name applied to the main container div of the header.
 */
import React from "react";
/**
 * AccordionInteractiveHeader provides a clickable header for an accordion item.
 * It includes a title, an optional trigger element, optional aside content,
 * and a chevron icon indicating the open/closed state.
 * It can operate in controlled or uncontrolled mode via the `controller` prop.
 *
 * @type {React.FC<AccordionInteractiveHeaderProps>}
 * @param {AccordionInteractiveHeaderProps} props - The props for the component.
 */
declare const AccordionInteractiveHeader: {
    ({ asideContent, any, chevronIconColor, any, children, any, controller, any, onClick, any, onKeyDown, any, title, any, titleWrapperClassName, any, trigger, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional content displayed on the right side of the header, typically for actions or metadata. */
        asideContent: any;
        /** Optional CSS class to customize the color of the chevron icon. */
        chevronIconColor: any;
        /** Optional content displayed below the title when the accordion is open. */
        children: any;
        /** If defined, controls the open/closed state of the accordion externally. `true` for open, `false` for closed. Used for controlled components. */
        controller: any;
        /** Optional callback function executed when the header button is clicked. Only applicable in controlled mode. */
        onClick: any;
        /** Optional callback function executed when the Enter or Space key is pressed on the header button. Only applicable in controlled mode. */
        onKeyDown: any;
        /** The main title content displayed in the header. */
        title: any;
        /** Optional custom CSS class name applied to the button element wrapping the title and chevron. */
        titleWrapperClassName: any;
        /** Optional element displayed to the left of the main header content, often used for icons or checkboxes. */
        trigger: any;
        /** Optional custom CSS class name applied to the main container div of the header. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-accordion--controlled-simple-accordion
 * @zeroHeight https://zeroheight.com/023d5159d/p/724ed9-accordion/b/4635b4
 * @end
 */
export default AccordionInteractiveHeader;
