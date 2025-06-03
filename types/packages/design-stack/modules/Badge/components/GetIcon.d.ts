/**
 * Properties for the GetIcon component.
 * @typedef {Object} GetIconProps
 * @property {boolean} [hasDot=false] - If true, renders a small dot icon. Takes precedence over the `icon` prop.
 * @property {React.ReactNode} [icon] - Custom icon element to be rendered within the badge. Ignored if `hasDot` is true.
 * @property {keyof typeof BADGE_COLOUR_CLASSES} [modifier='neutral'] - Specifies the color variant of the icon, affecting its styling based on predefined themes.
 * @property {keyof typeof BADGE_SIZE} [size='medium'] - Specifies the size variant of the icon container, affecting its dimensions. Only applicable when `icon` is provided (not `hasDot`).
 */
import React from "react";
/**
 * Internal component responsible for rendering the appropriate icon (dot or custom)
 * within a Badge, based on the provided props. It handles styling variations
 * for different colors and sizes.
 *
 * @component
 * @param {GetIconProps} props - Properties passed to the GetIcon component.
 * @returns {React.ReactElement | string} The SVG element for the dot, a div containing the custom icon, or an empty string if neither is applicable.
 * @type {React.FC<GetIconProps>}
 */
declare const GetIcon: {
    ({ hasDot: any, icon: any, modifier: any, size }: any): React.ReactElement;
    propTypes: {
        /** Determines if dot has to be rendered in Badge. Takes precedence over `icon`. */
        hasDot: any;
        /** Node containing custom Icon to be displayed in Badge component. Ignored if `hasDot` is true. */
        icon: any;
        /** Specifies the color variant of the icon. */
        modifier: any;
        /** Specifies the size variant of the icon container (only applies when `icon` is used). */
        size: any;
    };
};
export default GetIcon;
