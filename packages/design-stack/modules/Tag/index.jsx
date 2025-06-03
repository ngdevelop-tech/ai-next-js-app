/**
 * @typedef {Object} AnchorProps
 * @property {string} href - The URL the link points to. This is required if `anchorProps` is provided.
 * @property {string} [name] - Specifies the name of an anchor.
 * @property {string} [rel] - Specifies the relationship between the current document and the linked document. Common values include 'noopener', 'noreferrer'.
 * @property {string} [target] - Specifies where to open the linked document (e.g., '_blank', '_self').
 * @property {string} [title] - Specifies extra information about an element, often shown as a tooltip.
 */

/**
 * @typedef {Object} TagProps
 * @property {AnchorProps} [anchorProps] - If provided, the Tag renders as an anchor (`<a>`) element. Requires `href`. Other anchor attributes like `target`, `rel`, `name`, `title` can also be passed.
 * @property {boolean} [disabled=false] - If `true`, the Tag is visually styled as disabled and interaction (click, dismiss) is disabled.
 * @property {string} [dismissLabel] - Custom accessible label for the dismiss button. Defaults to `${text} Dismiss Button`.
 * @property {boolean} [hasDismissButton=false] - If `true`, a dismiss button (cross icon) is shown on the right side of the Tag. Requires `onDismiss` callback.
 * @property {boolean} [hasDot=false] - If `true`, a small dot is displayed before the Tag text or icon.
 * @property {React.ReactNode} [icon] - An optional icon element to display before the Tag text.
 * @property {string} [id] - Optional unique identifier for the root `div` element of the Tag.
 * @property {'base' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'white'} [modifier='base'] - Specifies the color variant of the Tag.
 * @property {boolean} [monospacedDigits=false] - If `true`, uses tabular (monospaced) numerals for the Tag text, ensuring numbers align vertically.
 * @property {(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void} [onClick] - Callback function invoked when the Tag is clicked. Makes the Tag interactive.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onDismiss] - Callback function invoked when the dismiss button is clicked. Required if `hasDismissButton` is `true`.
 * @property {string} [role='status'] - The ARIA role for the Tag. Defaults to 'status' unless rendered as a link.
 * @property {'basic' | 'large'} [size='basic'] - Specifies the size variant of the Tag.
 * @property {string} [tagLabel] - Custom accessible label for the Tag itself. Defaults to the `text` prop value.
 * @property {string} [text=''] - The text content to display within the Tag.
 * @property {boolean} [withBorder=false] - If `true`, renders the Tag with a border and specific background/text colors, typically for input-like contexts.
 * @property {boolean} [withTruncateText=false] - If `true`, truncates the Tag text with an ellipsis if it exceeds the available width.
 * @property {string} [wrapperClassName] - Custom CSS class name to apply to the root `div` element of the Tag.
 */

import React from "react";
import { MdClose } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import RenderIcon from "./components/RenderIcon";
import RenderText from "./components/RenderText";
import {
  TAG_MODIFIER,
  TAG_MODIFYING_CLASS,
  TAG_SIZE,
  TAG_SIZE_CLASSES,
} from "./constants/tag";
import useTag from "./useTag";

/**
 * Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.
 * They can be interactive (clickable), dismissible, or used as links.
 *
 * @example
 * // Basic Tag
 * <Tag text="Default Tag" />
 *
 * @example
 * // Tag with icon and dismiss button
 * <Tag
 *   text="Dismissible Tag"
 *   icon={<MdInfo />}
 *   hasDismissButton
 *   onDismiss={() => console.log('Dismissed!')}
 * />
 *
 * @example
 * // Clickable Tag as a link
 * <Tag
 *   text="Link Tag"
 *   anchorProps={{ href: '#', target: '_blank' }}
 *   modifier="brand"
 * />
 *
 * @example
 * // Disabled Tag with border
 * <Tag
 *   text="Disabled Border Tag"
 *   withBorder
 *   disabled
 * />
 *
 * @accessibility
 * - When clickable, the Tag behaves like a button or link. Ensure `onClick` or `anchorProps` are used appropriately.
 * - The `role` prop can be used to define the semantic meaning (defaults to 'status').
 * - Use `tagLabel` for a custom accessible name if the `text` prop is not descriptive enough.
 * - Use `dismissLabel` to provide a clear accessible name for the dismiss button.
 * - `aria-disabled` is automatically applied when the `disabled` prop is true.
 *
 * @type {React.FC<TagProps>}
 */
const Tag = ({
  anchorProps = null,
  disabled = false,
  dismissLabel = "",
  hasDismissButton = false,
  hasDot = false,
  icon = null,
  id = null,
  modifier = TAG_MODIFIER.BASE,
  monospacedDigits = false,
  onClick = null,
  onDismiss = null,
  role = null,
  size = TAG_SIZE.BASIC,
  tagLabel = "",
  text = "",
  withBorder = false,
  withTruncateText = false,
  wrapperClassName = "",
}) => {
  const { DynamicTag, clickableTag, dismissIconStyles } = useTag({
    anchorProps,
    disabled,
    onClick,
    withBorder,
    modifier,
  });

  const handleClick = e => {
    onClick?.(e);
  };

  return (
    <div
      {...(id !== null && { id })}
      className={twClassNames("relative h-fit w-fit leading-none")}
    >
      <DynamicTag
        role={role || (DynamicTag === "a" ? "" : "status")}
        aria-disabled={disabled}
        aria-label={`${tagLabel || text}`}
        className={twClassNames(
          "inline-flex h-full w-full items-center rounded py-0.5 font-medium focus-visible:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-1",
          clickableTag &&
            !disabled &&
            TAG_MODIFYING_CLASS[modifier].BG_TEXT.HOVER,
          disabled
            ? TAG_MODIFYING_CLASS[modifier].BG_TEXT.DISABLED
            : TAG_MODIFYING_CLASS[modifier].BG_TEXT.DEFAULT,
          TAG_SIZE_CLASSES[size].BG_TEXT,
          {
            "gap-1.5 pl-2": icon || hasDot,
            "pr-5": hasDismissButton,
            "cursor-not-allowed": disabled,
            "tabular-nums": monospacedDigits,
            "border border-neutral-default bg-input-default text-neutral-default":
              withBorder,
            "text-neutral-weakest": withBorder && disabled,
            "bg-input-default-disabled":
              withBorder && disabled && ["white", "base"].includes(modifier),
            "hover:bg-input-default-hover":
              withBorder && clickableTag && !disabled,
          },
          wrapperClassName
        )}
        {...(clickableTag &&
          !disabled && {
            onClick: handleClick,
            onKeyDown: e => {
              if (e.key === "Enter" || e.key === " ") {
                handleClick(e);
              }
            },
          })}
        {...anchorProps}
      >
        <RenderIcon
          icon={icon}
          withBorder={withBorder}
          disabled={disabled}
          hasDot={hasDot}
          modifier={modifier}
        />
        <RenderText withTruncateText={withTruncateText} text={text} />
      </DynamicTag>
      {hasDismissButton && (
        <button
          role={role || "status"}
          aria-label={dismissLabel || `${text} Dismiss Button`}
          onClick={e => {
            onDismiss?.(e);
          }}
          type="button"
          disabled={disabled}
          className={twClassNames(
            "absolute right-0.5 inline-flex h-4 w-4 items-center justify-center rounded p-1 focus:outline-none",
            dismissIconStyles,
            TAG_SIZE_CLASSES[size].DISMISS_ICON,
            {
              "cursor-not-allowed": disabled,
              "m-px": withBorder,
            }
          )}
        >
          <MdClose className="h-4 w-4 shrink-0" />
        </button>
      )}
    </div>
  );
};

Tag.propTypes = {
  /**
   * If provided, the Tag renders as an anchor (`<a>`) element. Requires `href`.
   * Other anchor attributes like `target`, `rel`, `name`, `title` can also be passed.
   * @type {PropTypes.shape({ href: PropTypes.string.isRequired, name: PropTypes.string, rel: PropTypes.string, target: PropTypes.string, title: PropTypes.string })}
   */
  anchorProps: PropTypes.shape({
    href: PropTypes.string.isRequired,
    name: PropTypes.string,
    rel: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
  }),
  /** If `true`, the Tag is visually styled as disabled and interaction (click, dismiss) is disabled. */
  disabled: PropTypes.bool,
  /** Custom accessible label for the dismiss button. Defaults to `${text} Dismiss Button`. */
  dismissLabel: PropTypes.string,
  /** If `true`, a dismiss button (cross icon) is shown on the right side of the Tag. Requires `onDismiss` callback. */
  hasDismissButton: PropTypes.bool,
  /** If `true`, a small dot is displayed before the Tag text or icon. */
  hasDot: PropTypes.bool,
  /** An optional icon element to display before the Tag text. */
  icon: PropTypes.node,
  /** Optional unique identifier for the root `div` element of the Tag. */
  id: PropTypes.string,
  /**
   * Specifies the color variant of the Tag.
   * @type {'base' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'white'}
   */
  modifier: PropTypes.oneOf(Object.values(TAG_MODIFIER)),
  /** If `true`, uses tabular (monospaced) numerals for the Tag text, ensuring numbers align vertically. */
  monospacedDigits: PropTypes.bool,
  /** Callback function invoked when the Tag is clicked. Makes the Tag interactive. */
  onClick: PropTypes.func,
  /** Callback function invoked when the dismiss button is clicked. Required if `hasDismissButton` is `true`. */
  onDismiss: PropTypes.func,
  /** The ARIA role for the Tag. Defaults to 'status' unless rendered as a link. */
  role: PropTypes.string,
  /**
   * Specifies the size variant of the Tag.
   * @type {'basic' | 'large'}
   */
  size: PropTypes.oneOf(Object.values(TAG_SIZE)),
  /** Custom accessible label for the Tag itself. Defaults to the `text` prop value. */
  tagLabel: PropTypes.string,
  /** The text content to display within the Tag. */
  text: PropTypes.string,
  /** If `true`, renders the Tag with a border and specific background/text colors, typically for input-like contexts. */
  withBorder: PropTypes.bool,
  /** If `true`, truncates the Tag text with an ellipsis if it exceeds the available width. */
  withTruncateText: PropTypes.bool,
  /** Custom CSS class name to apply to the root `div` element of the Tag. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tag--primary
 * @zeroHeight
 * @end
 */

export default Tag;
