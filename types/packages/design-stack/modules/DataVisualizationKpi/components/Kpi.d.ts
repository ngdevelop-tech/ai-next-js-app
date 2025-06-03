/**
 * @typedef {Object} KpiProps
 * @property {React.ReactNode} badgeNode? - Node containing badge for Kpi data
 * @property {string} description? - Description for Kpi data
 * @property {any} direction? - Specify whether stat data should be shown in horizontal direction or vertical
 * @property {boolean} isBadgeBeforeDescription? - Specify whether Badge should come before description of Kpi data or not
 * @property {React.ReactNode} leadingIconNode? - Leadling node with Kpi data description
 * @property {any} stat? - Stat for Kpi data
 * @property {string} title? - Title for Kpi data
 * @property {React.ReactNode} trailingIconNode? - Trailing node with Kpi data description
 */
import React from "react";
/**
 * @type {React.FC<KpiProps>}
 */
declare const Kpi: {
    ({ badgeNode, any, description, any, direction, any, isBadgeBeforeDescription, any, leadingIconNode, any, stat, any, title, any, trailingIconNode, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing badge for Kpi data */
        badgeNode: any;
        /** Description for Kpi data */
        description: any;
        /** Specify whether stat data should be shown in horizontal direction or vertical */
        direction: any;
        /** Specify whether Badge should come before description of Kpi data or not */
        isBadgeBeforeDescription: any;
        /** Leadling node with Kpi data description */
        leadingIconNode: any;
        /** Stat for Kpi data */
        stat: any;
        /** Title for Kpi data */
        title: any;
        /** Trailing node with Kpi data description */
        trailingIconNode: any;
    };
};
export default Kpi;
