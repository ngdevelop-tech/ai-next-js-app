/**
 * @typedef {Object} RenderIconProps
 * @property {boolean} disabled - Shows disabled state of Tag
 * @property {boolean} hasDot - Shows dot prior to tag text
 * @property {React.ReactNode} icon? - Node containing the content that will be displayed within the tag component.
 * @property {string} modifier - Different colour variants of Tag
 * @property {boolean} withBorder - Shows variant of Tag with border
 */
import React from "react";
/**
 * @type {React.FC<RenderIconProps>}
 */
declare const RenderIcon: {
    ({ disabled: any, hasDot: any, icon, any, modifier: any, withBorder: any, }: any): React.ReactElement;
    propTypes: {
        /** Shows disabled state of Tag */
        disabled: any;
        /** Shows dot prior to tag text */
        hasDot: any;
        /** Node containing the content that will be displayed within the tag component. */
        icon: any;
        /** Different colour variants of Tag */
        modifier: any;
        /** Shows variant of Tag with border */
        withBorder: any;
    };
};
export default RenderIcon;
