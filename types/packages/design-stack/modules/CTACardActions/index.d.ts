/**
 * Props for the CTACardActions component.
 * @typedef {Object} CTACardActionsProps
 * @property {string} [id] - Optional unique identifier for the root element.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} onPrimayBtnClick - Callback function executed when the primary button is clicked. Receives the click event as an argument.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onSecondaryBtnClick] - Optional callback function executed when the secondary button is clicked. Receives the click event as an argument.
 * @property {import('../Button').ButtonProps} [primaryBtnProps] - Optional object containing props to be passed down to the primary `Button` component (e.g., `variant`, `colors`, `disabled`).
 * @property {React.ReactNode} primaryBtnText - The content (text or React node) to be displayed within the primary action button.
 * @property {import('../Button').ButtonProps} [secondaryBtnProps] - Optional object containing props to be passed down to the secondary `Button` component. Defaults like `variant: 'minimal'` and `colors: 'white'` are applied if provided.
 * @property {React.ReactNode} [secondaryBtnText] - Optional content (text or React node) to be displayed within the secondary action button. If provided, the secondary button is rendered.
 */
import React from "react";
/**
 * Renders the action buttons (primary and optional secondary) for a CTACard.
 * It consumes the `size` from `CTACardContextData` to adjust button sizes accordingly.
 * @component
 * @param {CTACardActionsProps} props - Props for configuring the CTACardActions.
 * @example
 * <CTACardActions
 *   primaryBtnText="Get Started"
 *   onPrimayBtnClick={() => console.log('Primary clicked')}
 *   secondaryBtnText="Learn More"
 *   onSecondaryBtnClick={() => console.log('Secondary clicked')}
 * />
 */
declare const CTACardActions: {
    ({ id, any, onPrimayBtnClick: any, onSecondaryBtnClick, any, primaryBtnProps, any, primaryBtnText: any, secondaryBtnProps, any, secondaryBtnText, any, }: any): React.ReactElement;
    propTypes: {
        /** Optional unique identifier for the root element. */
        id: any;
        /** Callback function executed when the primary button is clicked. */
        onPrimayBtnClick: any;
        /** Optional callback function executed when the secondary button is clicked. */
        onSecondaryBtnClick: any;
        /** Optional props passed down to the primary `Button` component. See `Button` component for available props. */
        primaryBtnProps: any;
        /** The content (text or React node) for the primary action button. */
        primaryBtnText: any;
        /** Optional props passed down to the secondary `Button` component. See `Button` component for available props. */
        secondaryBtnProps: any;
        /** Optional content (text or React node) for the secondary action button. Renders the button if provided. */
        secondaryBtnText: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-ctacard--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/688da5-cta-card/b/4635b4
 * @end
 */
export default CTACardActions;
