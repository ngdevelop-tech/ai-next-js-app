/**
 * @typedef {Object} AlertLinkProps
 * @property {React.ReactNode} [children] - The content to be displayed within the link.
 * @property {string} [href='#'] - The URL that the hyperlink points to.
 * @property {string} [id] - A custom id to identify the component uniquely.
 * @property {boolean} isCSR?
 * @property {(event: React.MouseEvent<HTMLAnchorElement>) => void} [onClick] - Callback function triggered when the link is clicked.
 * @property {typeof ALERT_LINK_POSITION[keyof typeof ALERT_LINK_POSITION]} [position='end'] - Specifies the placement of the alert link relative to other content. Allowed values: 'inline', 'end'.
 * @property {string} [rel] - Specifies the relationship of the target object to the link object.
 * @property {'_self' | '_blank' | '_parent' | '_top'} [target] - Specifies where to open the linked document (e.g., '_blank', '_self').
 * @property {string} [wrapperClassName] - Custom CSS class name(s) to apply to the link wrapper element for additional styling.
 */
import React from "react";
/**
 * AlertLink component displays a hyperlink within an Alert component, styled according to the alert's variant.
 * It inherits context from the parent Alert to determine its appearance and behavior.
 *
 * @type {React.ForwardRefExoticComponent<AlertLinkProps & React.RefAttributes<HTMLElement>>}
 */
declare const AlertLink: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-alert--with-accent-border
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fe2d-alerts/b/4635b4
 * @end
 */
export default AlertLink;
