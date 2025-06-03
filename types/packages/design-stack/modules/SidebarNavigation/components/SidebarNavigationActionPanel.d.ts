/**
 * @typedef {Object} SidebarNavigationActionPanelProps
 * @property {string} ctaOneLabel - The first CTA label.
 * @property {(event: React.MouseEvent<any>) => void} ctaOneOnClick - The first CTA onClick function.
 * @property {string} ctaTwoLabel? - The second CTA label.
 * @property {(event: React.MouseEvent<any>) => void} ctaTwoOnClick? - The second CTA onClick function.
 * @property {string} title - The title of the ActionPanel.
 */
import React from "react";
/**
 * @type {React.FC<SidebarNavigationActionPanelProps>}
 */
declare const SidebarNavigationActionPanel: {
    ({ ctaOneLabel: any, ctaOneOnClick: any, ctaTwoLabel: any, ctaTwoOnClick: any, title: any, }: any): React.ReactElement;
    propTypes: {
        /** The first CTA label. */
        ctaOneLabel: any;
        /** The first CTA onClick function. */
        ctaOneOnClick: any;
        /** The second CTA label. */
        ctaTwoLabel: any;
        /** The second CTA onClick function. */
        ctaTwoOnClick: any;
        /** The title of the ActionPanel. */
        title: any;
    };
    defaultProps: {
        ctaTwoLabel: string;
        ctaTwoOnClick: any;
    };
};
export default SidebarNavigationActionPanel;
