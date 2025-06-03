/**
 * Props for the CTACardContent component.
 *
 * @typedef {Object} CTACardContentProps
 * @property {React.ReactNode} children - The child elements or content to be displayed within the CTA card content, typically action buttons or links.
 * @property {string} description - The descriptive text providing context or details below the header.
 * @property {string} header - The main title or heading for the CTA card content.
 * @property {('h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span')} [headerTagType='h2'] - Specifies the HTML heading tag type for the header. Defaults to 'h2'. Must be one of the values defined in `TAG_TYPES`.
 * @property {string} [id] - Optional unique identifier to be added to the root element of the component.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply to the component's root `div` element for custom styling.
 */
import React from "react";
/**
 * Renders the main content area within a CTACard, including a header, description, and children elements.
 * It adapts its padding and typography based on the size context provided by the parent CTACard.
 *
 * @type {React.FC<CTACardContentProps>}
 */
declare const CTACardContent: {
    ({ children: any, description: any, header: any, headerTagType, any, id, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** The child elements or content to be displayed within the CTA card content, typically action buttons or links. */
        children: any;
        /** The descriptive text providing context or details below the header. */
        description: any;
        /** The main title or heading for the CTA card content. */
        header: any;
        /** Specifies the HTML heading tag type for the header. Defaults to 'h2'. Must be one of the values defined in `TAG_TYPES`. */
        headerTagType: any;
        /** Optional unique identifier to be added to the root element of the component. */
        id: any;
        /** Optional custom CSS class name to apply to the component's root `div` element for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-ctacard--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/688da5-cta-card/b/4635b4
 * @end
 */
export default CTACardContent;
