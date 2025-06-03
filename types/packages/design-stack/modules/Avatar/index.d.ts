/**
 * Represents the properties for the Avatar component.
 * @typedef {Object} AvatarProps
 * @property {string} [altText=''] - Alternative text for the image avatar, used for accessibility. Required if `avatarType` is `AVATAR_TYPE.IMAGE`.
 * @property {string} [avatarContentWrapperClassName=''] - Custom CSS class name(s) to apply to the inner content element (img, span, svg).
 * @property {React.ReactNode} [avatarNode=null] - Optional React node to render complex custom content within the avatar container. Overrides default rendering based on `avatarType`.
 * @property {typeof AVATAR_TYPE[keyof typeof AVATAR_TYPE]} [avatarType=AVATAR_TYPE.IMAGE] - Determines the type of avatar to render.
 *   - `AVATAR_TYPE.IMAGE`: Renders an image using the `content` prop as the `src`.
 *   - `AVATAR_TYPE.PLACEHOLDER`: Renders a generic placeholder icon.
 *   - `AVATAR_TYPE.INITIALS`: Renders initials provided in the `content` prop.
 * @property {typeof AVATAR_BORDER_RADIUS[keyof typeof AVATAR_BORDER_RADIUS]} [borderRadius=AVATAR_BORDER_RADIUS.ROUNDED_NONE] - Controls the border radius (shape) of the avatar.
 * @property {string} [content=''] - The primary content for the avatar.
 *   - If `avatarType` is `IMAGE`, this should be the image URL.
 *   - If `avatarType` is `INITIALS`, this should be the initials string (e.g., "JD").
 * @property {string} [id=null] - An optional unique identifier for the root element of the component.
 * @property {(event: React.SyntheticEvent<HTMLImageElement, Event>) => void} [onImageError=null] - Callback function triggered if the image specified in `content` fails to load when `avatarType` is `IMAGE`.
 * @property {typeof AVATAR_SIZE[keyof typeof AVATAR_SIZE]} [size=AVATAR_SIZE.EXTRA_SMALL] - Controls the dimensions (height and width) of the avatar.
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to apply to the outermost `div` container of the Avatar component.
 */
import React from "react";
/**
 * Avatar component displays user profile pictures, initials, or placeholders.
 * It supports different shapes, sizes, and types (image, initials, placeholder).
 *
 * @component
 * @param {AvatarProps} props - Properties passed to the Avatar component.
 * @returns {React.ReactElement} The rendered Avatar component.
 */
declare const Avatar: {
    ({ altText, any, avatarContentWrapperClassName, any, avatarNode, any, avatarType, any, borderRadius, any, content, any, id, any, size, any, wrapperClassName, any, onImageError, any, }: any): React.ReactElement;
    propTypes: {
        /** Provide alt text to img url if avatar type image is selected. */
        altText: any;
        /** Provide styles to avatar content. */
        avatarContentWrapperClassName: any;
        /** Node element that can be used to build complex variations within avatar element. */
        avatarNode: any;
        /** Controls the variant(shape) of the avatar. */
        avatarType: any;
        /** Controls the border radius of the avatar. */
        borderRadius: any;
        /** Provide img url if avatar type image is selected OR provide initials data if avatar type initials is selected. */
        content: any;
        /** A cusom id to identify component uniquely. */
        id: any;
        /**  Fallback function when url fails to load image */
        onImageError: any;
        /** Controls the size of the avatar. */
        size: any;
        /** A custom CSS class name to style the Avatar component. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-avatar--primary
 * @zeroHeight
 * @end
 */
export default Avatar;
