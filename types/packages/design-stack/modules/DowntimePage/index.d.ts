/**
 * @typedef {Object} DowntimePageProps
 * @property {React.ReactNode} footer? - Node containing the footer that will be displayed within the DowntimePage.
 * @property {React.ReactNode} icon? - Node containing the Icon that will be displayed within the DowntimePage.
 * @property {React.ReactNode} subTitle - Node containing the subTitle that will be displayed within the DowntimePage.
 * @property {React.ReactNode} title - Node containing the title that will be displayed within the DowntimePage.
 * @property {string} wrapperClassName? - A custom CSS class name to style the DowntimePage.
 */
import React from "react";
/**
 * @type {React.FC<DowntimePageProps>}
 */
declare const DowntimePage: {
    ({ footer, any, icon, any, subTitle: any, title: any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the footer that will be displayed within the DowntimePage. */
        footer: any;
        /** Node containing the Icon that will be displayed within the DowntimePage. */
        icon: any;
        /** Node containing the subTitle that will be displayed within the DowntimePage. */
        subTitle: any;
        /** Node containing the title that will be displayed within the DowntimePage. */
        title: any;
        /** A custom CSS class name to style the DowntimePage. */
        wrapperClassName: any;
    };
};
export default DowntimePage;
