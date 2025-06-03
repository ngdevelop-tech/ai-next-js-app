/**
 * Represents the properties for the Banner component.
 * @typedef {Object} BannerProps
 * @property {('extreme'|'centered')} [align='extreme'] - Controls the alignment of the banner content. Defaults to 'extreme'.
 *    - 'extreme': Aligns content to the start and end of the banner.
 *    - 'centered': Centers the content within the banner.
 * @property {React.ReactNode} [bannerIcon=null] - An optional icon or image element displayed before the description text.
 * @property {React.ReactNode} [ctaButton=null] - An optional button or interactive element displayed typically after the description or at the end of the banner.
 * @property {string} [description=''] - The main text content displayed within the banner.
 * @property {string} [headerID=''] - An optional ID attribute to assign to the root element of the banner for accessibility or targeting.
 * @property {boolean} [isDismissButton=true] - Determines if a dismiss button should be displayed, allowing the user to close the banner. Defaults to true.
 * @property {('brand'|'info'|'success'|'warning'|'critical')} [modifier='brand'] - Controls the visual style (background color, text color, etc.) of the banner based on predefined themes. Defaults to 'brand'.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onDismissClick=null] - Callback function executed when the dismiss button is clicked. Receives the click event as an argument.
 * @property {('relative'|'fixed-top'|'fixed-bottom')} [placement='relative'] - Controls the positioning of the banner on the page. Defaults to 'relative'.
 *    - 'relative': Positioned according to the normal flow of the document.
 *    - 'fixed-top': Fixed position at the top of the viewport.
 *    - 'fixed-bottom': Fixed position at the bottom of the viewport.
 * @property {boolean} [shouldTextTruncate=true] - If true, the description text will be truncated with an ellipsis if it exceeds the available space. Defaults to true.
 * @property {string} [wrapperClassName=''] - An optional CSS class name to apply to the root banner element for custom styling.
 */
import React from "react";
/**
 * Banner component displays prominent messages or announcements to users.
 * It can be configured with different styles, placements, and actions like dismissal.
 *
 * @component
 * @param {BannerProps} props - The props for the Banner component.
 * @returns {React.ReactElement} The rendered Banner component.
 */
declare const Banner: {
    ({ align, any, bannerIcon, any, ctaButton, any, description, any, headerID, any, isDismissButton, any, modifier, any, onDismissClick, any, placement, any, shouldTextTruncate, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Controls the alignment of the banner items. */
        align: any;
        /** A custom React node containing an icon or image to be displayed before the description. */
        bannerIcon: any;
        /** A custom React node containing a button to be displayed after the description. */
        ctaButton: any;
        /** Descriptiion to be displayed in the Banner. */
        description: any;
        /** Used to assign custom id to Banner. */
        headerID: any;
        /** Determines whether the Banner can be dismissed or closed by the user. */
        isDismissButton: any;
        /** Controls the background colour of the Banner. */
        modifier: any;
        /** A callback function triggered when the dismiss button is clicked. */
        onDismissClick: any;
        /** Controls the placement of the Banner. */
        placement: any;
        /** Controls whether to truncate the text or not */
        shouldTextTruncate: any;
        /** A custom CSS class name to style the Banner component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-banner--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/804788-banner/b/4635b4
 * @end
 */
export default Banner;
