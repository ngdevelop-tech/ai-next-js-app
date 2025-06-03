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
/**
 * ActionPanel component displays content sections with optional titles, descriptions,
 * and call-to-action elements, often used for informational or promotional blocks.
 * It allows flexible layout options for the CTA content.
 * @type {React.FC<ActionPanelProps>}
 */
declare const ActionPanel: {
    ({ CTAContent, any, ctaContentPlacement, any, description, any, descriptionWrapperClassName, any, hasBorder, any, id, any, title, any, titleWrapperClassName, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional React node containing the call-to-action elements (e.g., buttons). */
        CTAContent: any;
        /** Specifies the placement of the CTA content relative to the title and description. Defaults to 'bottom'. */
        ctaContentPlacement: any;
        /** Optional React node containing the main descriptive text content. */
        description: any;
        /** Optional custom CSS class name to apply to the description's wrapping div. */
        descriptionWrapperClassName: any;
        /** Determines whether to render a border around the panel. Defaults to true. */
        hasBorder: any;
        /** Optional unique identifier attribute for the root element of the component. */
        id: any;
        /** Optional React node containing the title or heading content. */
        title: any;
        /** Optional custom CSS class name to apply to the title's wrapping p tag. */
        titleWrapperClassName: any;
        /** Optional custom CSS class name to apply to the root div element of the component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-actionpanel--primary
 * @zeroHeight
 * @end
 */
export default ActionPanel;
