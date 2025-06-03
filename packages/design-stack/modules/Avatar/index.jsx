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
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  AVATAR_BORDER_RADIUS,
  AVATAR_SIZE,
  AVATAR_TYPE,
} from "./constants/avatar";

/**
 * Avatar component displays user profile pictures, initials, or placeholders.
 * It supports different shapes, sizes, and types (image, initials, placeholder).
 *
 * @component
 * @param {AvatarProps} props - Properties passed to the Avatar component.
 * @returns {React.ReactElement} The rendered Avatar component.
 */
const Avatar = ({
  altText = "",
  avatarContentWrapperClassName = "",
  avatarNode = null,
  avatarType = AVATAR_TYPE.IMAGE,
  borderRadius = AVATAR_BORDER_RADIUS.ROUNDED_NONE,
  content = "",
  id = null,
  size = AVATAR_SIZE.EXTRA_SMALL,
  wrapperClassName = "",
  onImageError = null,
}) => {
  const computeAvatarSize = () => {
    switch (size) {
      case AVATAR_SIZE.EXTRA_SMALL:
        return "h-6 w-6";
      case AVATAR_SIZE.SMALL:
        return "h-8 w-8";
      case AVATAR_SIZE.DEFAULT:
        return "h-10 w-10";
      case AVATAR_SIZE.LARGE:
        return "h-12 w-12";
      case AVATAR_SIZE.EXTRA_LARGE:
        return "h-14 w-14";
      default:
        return "h-10 w-10";
    }
  };

  return (
    <div className={wrapperClassName} {...(id !== null && { id })}>
      {avatarType === AVATAR_TYPE.IMAGE && (
        <img
          className={twClassNames(
            "inline-block",
            computeAvatarSize(),
            borderRadius,
            avatarContentWrapperClassName
          )}
          src={content}
          alt={altText}
          onError={onImageError}
        />
      )}
      {avatarType === AVATAR_TYPE.PLACEHOLDER && (
        <span
          className={twClassNames(
            "inline-block overflow-hidden rounded-full bg-neutral-stronger",
            computeAvatarSize(),
            borderRadius,
            avatarContentWrapperClassName
          )}
        >
          <svg
            className="h-full w-full icon-neutral-weaker"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </span>
      )}
      {avatarType === AVATAR_TYPE.INITIALS && (
        <span
          className={twClassNames(
            "inline-flex items-center justify-center rounded-full bg-neutral-inverse-weakest",
            computeAvatarSize(),
            borderRadius,
            avatarContentWrapperClassName
          )}
        >
          <span className="text-xs font-medium leading-none text-neutral-inverse-default">
            {content}
          </span>
        </span>
      )}
      {avatarNode}
    </div>
  );
};

Avatar.propTypes = {
  /** Provide alt text to img url if avatar type image is selected. */
  altText: PropTypes.string,
  /** Provide styles to avatar content. */
  avatarContentWrapperClassName: PropTypes.string,
  /** Node element that can be used to build complex variations within avatar element. */
  avatarNode: PropTypes.node,
  /** Controls the variant(shape) of the avatar. */
  avatarType: PropTypes.oneOf(Object.values(AVATAR_TYPE)),
  /** Controls the border radius of the avatar. */
  borderRadius: PropTypes.oneOf(Object.values(AVATAR_BORDER_RADIUS)),
  /** Provide img url if avatar type image is selected OR provide initials data if avatar type initials is selected. */
  content: PropTypes.string,
  /** A cusom id to identify component uniquely. */
  id: PropTypes.string,
  /**  Fallback function when url fails to load image */
  onImageError: PropTypes.func,
  /** Controls the size of the avatar. */
  size: PropTypes.oneOf(Object.values(AVATAR_SIZE)),
  /** A custom CSS class name to style the Avatar component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-avatar--primary
 * @zeroHeight
 * @end
 */

export default Avatar;
