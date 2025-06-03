/**
 * Represents a single attachment item within the Attachments list.
 * @typedef {Object} AttachmentItem
 * @property {string} id - A unique identifier for the attachment item. Used as the key for rendering.
 * @property {string} fileName - The name of the file to be displayed.
 * @property {React.ReactNode} [icon] - An optional React node (e.g., an icon component) specific to this attachment. If provided, it overrides the default `icon` prop of the `Attachments` component.
 * @property {React.ReactNode} [actions] - Optional React node(s) representing actions for this attachment (e.g., download or delete buttons/links).
 */

/**
 * Props for the Attachments component.
 * @typedef {Object} AttachmentsProps
 * @property {AttachmentItem[]} [attachments=[]] - An array of attachment objects to be displayed in the list. Each object should conform to the `AttachmentItem` type.
 * @property {React.ReactNode} [icon=<MdOutlineAttachFile />] - A default React node (e.g., an icon component) to be displayed for each attachment if the individual `AttachmentItem` does not provide its own icon.
 * @property {string} [id=null] - An optional unique identifier string to be applied to the root `div` element of the component.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the root `div` element for custom styling.
 */

import React from "react";
import { MdOutlineAttachFile } from "react-icons/md";
import PropTypes from "prop-types";

/**
 * The Attachments component renders a list of files or items,
 * each with an optional icon, filename, and associated actions.
 * It provides a consistent layout for displaying attached resources.
 * @type {React.FC<AttachmentsProps>}
 */
const Attachments = ({
  attachments = [],
  icon = (
    <MdOutlineAttachFile className="h-5 w-5 font-light icon-neutral-weaker" />
  ),
  id = null,
  wrapperClassName = "",
}) => (
  <div className={wrapperClassName} {...(id !== null && { id })}>
    <ul
      className="divide-y divide-neutral-strong rounded-md border border-neutral-strong bg-input-default sm:col-span-2"
      aria-label="List of attached files"
    >
      {attachments.map(attachment => (
        <li
          className="flex items-center justify-between py-2 pl-3 pr-4 text-sm"
          key={attachment.id}
          aria-label={`Action For ${attachment.fileName}`}
        >
          <div className="flex w-full flex-1 items-center">
            {attachment?.icon ?? icon}
            <span className="ml-2 w-0 flex-1 truncate">
              {attachment.fileName}
            </span>
          </div>
          <div className="ml-4 shrink-0">{attachment?.actions}</div>
        </li>
      ))}
    </ul>
  </div>
);

Attachments.propTypes = {
  /**
   * An array of objects specifying each attachment's details.
   * Each object in the array represents one attachment item in the list.
   */
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      /** Optional React node(s) representing actions for this specific attachment (e.g., download/delete buttons). */
      actions: PropTypes.node,
      /** The name of the file to be displayed for this attachment. This is required. */
      fileName: PropTypes.string.isRequired,
      /** An optional React node (e.g., an icon) specific to this attachment, overriding the default `icon` prop. */
      icon: PropTypes.node,
      /** A unique identifier string for this attachment item. Used as the React key. This is required. */
      id: PropTypes.string.isRequired,
    })
  ),
  /**
   * A default React node (e.g., an icon component) to be displayed for each attachment
   * if the individual attachment object does not provide its own `icon`.
   */
  icon: PropTypes.node,
  /**
   * An optional unique identifier string to be applied as the `id` attribute
   * to the root `div` element of the component.
   */
  id: PropTypes.string,
  /**
   * Optional CSS class name(s) to apply to the root `div` element
   * for custom styling purposes.
   */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-attachments--primary
 * @zeroHeight
 * @end
 */

export default Attachments;
