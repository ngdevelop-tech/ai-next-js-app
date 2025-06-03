/**
 * Props for the CTACard component.
 * @typedef {Object} CTACardProps
 * @property {React.ReactNode} children - The content to be rendered inside the CTACard. Typically includes elements like text, images, or buttons.
 * @property {string} [id] - Optional unique identifier for the root element of the CTACard component.
 * @property {boolean} [isDismissable=false] - If true, displays a close button allowing the user to dismiss the card. Defaults to false.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClose] - Callback function invoked when the close button is clicked. Required if `isDismissable` is true.
 * @property {string} [wrapperClassName] - Optional CSS class name(s) to apply to the root `div` element for custom styling.
 */
import React from "react";
/**
 * CTACard is a container component used to display call-to-action information,
 * often featuring text, imagery, and action buttons. It can optionally be dismissable.
 *
 * @component
 * @returns {React.ReactElement} The rendered CTACard component.
 *
 * @example
 * <CTACard isDismissable onClose={() => console.log('Closed!')}>
 *   <p>This is a dismissable CTA card.</p>
 *   <Button>Click Me</Button>
 * </CTACard>
 */
declare const CTACard: {
    ({ children: any, id, any, isDismissable, any, onClose, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the CTA card component. */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Determines whether the CTACard can be dismissed or closed by the user. When set to true, a close button or icon will be displayed on the card */
        isDismissable: any;
        /** A callback function that is triggered when the user closes or dismisses the CTACard */
        onClose: any;
        /** A custom CSS class name to style the CTACard component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-ctacard--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/688da5-cta-card/b/4635b4
 * @end
 */
export default CTACard;
