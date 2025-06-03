/**
 * Represents the properties for the Badge component.
 * @typedef {Object} BadgeProps
 * @property {boolean} [hasDot=false] - If true, displays a small dot on the left side of the badge text. Defaults to false.
 * @property {React.ReactNode} [icon=null] - An optional icon element to display instead of the dot, positioned to the left of the badge text.
 * @property {string} [id=null] - An optional unique identifier for the badge element.
 * @property {'base'|'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'dark'|'light'} [modifier='base'] - Specifies the color variant of the badge. Defaults to 'base'.
 * @property {boolean} [monospacedDigits=false] - If true, uses numeric glyphs with uniform widths for the badge text. Defaults to false.
 * @property {'basic'|'large'} [size='basic'] - Specifies the size variant of the badge. Defaults to 'basic'.
 * @property {string} [text=''] - The text content to be displayed within the badge. Defaults to an empty string.
 * @property {boolean} [withBorder=false] - If true, applies a border and specific background/text styling to the badge. Defaults to false.
 * @property {string} [wrapperClassName=''] - An optional custom CSS class name to apply to the badge's root span element for additional styling. Defaults to an empty string.
 */
import React from "react";
/**
 * Badge component displays a small status descriptor or label.
 * It can include text, an optional icon or dot, and supports various color and size variants.
 * @type {React.FC<BadgeProps>}
 */
declare const Badge: {
    ({ hasDot, any, icon, any, id, any, modifier, any, monospacedDigits, any, size, any, text, any, withBorder, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Shows dot on left hand side of Badge text */
        hasDot: any;
        /** Icon to be displayed instead of dot prior to Badge text */
        icon: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /** Differnt colour variants of Badge */
        modifier: any;
        /** Boolean prop to use numeric glyphs that have uniform/tabular widths (rather than proportional). */
        monospacedDigits: any;
        /** Differnt size variants of Badge */
        size: any;
        /** Text to be displayed within Badge */
        text: any;
        /** Shows variant of Badge with border */
        withBorder: any;
        /** A custom CSS class name to style the Badge component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-badge--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/28fb97-badge/b/4635b4
 * @end
 */
export default Badge;
