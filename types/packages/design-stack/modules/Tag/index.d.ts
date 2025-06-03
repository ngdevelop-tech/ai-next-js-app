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
declare const Tag: {
    ({ anchorProps, any, disabled, any, dismissLabel, any, hasDismissButton, any, hasDot, any, icon, any, id, any, modifier, any, monospacedDigits, any, onClick, any, onDismiss, any, role, any, size, any, tagLabel, any, text, any, withBorder, any, withTruncateText, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /**
         * If provided, the Tag renders as an anchor (`<a>`) element. Requires `href`.
         * Other anchor attributes like `target`, `rel`, `name`, `title` can also be passed.
         * @type {PropTypes.shape({ href: PropTypes.string.isRequired, name: PropTypes.string, rel: PropTypes.string, target: PropTypes.string, title: PropTypes.string })}
         */
        anchorProps: any;
        /** If `true`, the Tag is visually styled as disabled and interaction (click, dismiss) is disabled. */
        disabled: any;
        /** Custom accessible label for the dismiss button. Defaults to `${text} Dismiss Button`. */
        dismissLabel: any;
        /** If `true`, a dismiss button (cross icon) is shown on the right side of the Tag. Requires `onDismiss` callback. */
        hasDismissButton: any;
        /** If `true`, a small dot is displayed before the Tag text or icon. */
        hasDot: any;
        /** An optional icon element to display before the Tag text. */
        icon: any;
        /** Optional unique identifier for the root `div` element of the Tag. */
        id: any;
        /**
         * Specifies the color variant of the Tag.
         * @type {'base' | 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'white'}
         */
        modifier: any;
        /** If `true`, uses tabular (monospaced) numerals for the Tag text, ensuring numbers align vertically. */
        monospacedDigits: any;
        /** Callback function invoked when the Tag is clicked. Makes the Tag interactive. */
        onClick: any;
        /** Callback function invoked when the dismiss button is clicked. Required if `hasDismissButton` is `true`. */
        onDismiss: any;
        /** The ARIA role for the Tag. Defaults to 'status' unless rendered as a link. */
        role: any;
        /**
         * Specifies the size variant of the Tag.
         * @type {'basic' | 'large'}
         */
        size: any;
        /** Custom accessible label for the Tag itself. Defaults to the `text` prop value. */
        tagLabel: any;
        /** The text content to display within the Tag. */
        text: any;
        /** If `true`, renders the Tag with a border and specific background/text colors, typically for input-like contexts. */
        withBorder: any;
        /** If `true`, truncates the Tag text with an ellipsis if it exceeds the available width. */
        withTruncateText: any;
        /** Custom CSS class name to apply to the root `div` element of the Tag. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-tag--primary
 * @zeroHeight
 * @end
 */
export default Tag;
