import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import propTypes from "prop-types";

import Loader from "../Loader";

/**
 * @component FileUpload
 * @description A component providing a user interface for file uploads via drag-and-drop or click selection.
 * It handles visual states for loading and errors and integrates with `react-dropzone`.
 *
 * @param {object} props - Component props.
 * @param {object} props.accept - Defines acceptable file types. Keys are MIME types or extensions, values are arrays of extensions. Example: `{'image/png': ['.png']}`.
 * @param {string} [props.errorText] - Error message to display, triggering error styling.
 * @param {string} [props.heading] - Primary text within the upload area.
 * @param {React.ReactNode} [props.icon] - Custom icon element.
 * @param {string | null} [props.id] - Optional ID for the root element.
 * @param {boolean} [props.isUploading] - If true, shows loader and disables interaction.
 * @param {string} props.label - Required identifier for accessibility (links label and input).
 * @param {string} [props.linkText] - Clickable text to initiate file selection.
 * @param {boolean} [props.multiple] - Allows multiple file selection if true.
 * @param {(acceptedFiles: File[]) => void} props.onChange - Callback invoked with selected/dropped valid files.
 * @param {string} [props.subHeading] - Secondary descriptive text.
 * @param {string} [props.wrapperClassName] - Custom CSS classes for the root element.
 * @returns {React.ReactElement} The rendered FileUpload component.
 */
const FileUpload = ({
  accept,
  errorText,
  heading,
  icon,
  id,
  isUploading,
  label,
  linkText,
  multiple,
  onChange,
  subHeading,
  wrapperClassName,
}) => {
  const onChangeHandler = useCallback(
    file => {
      onChange(file);
    },
    [onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onChangeHandler,
    noClick: isUploading,
    noKeyboard: isUploading,
    accept,
  });

  return (
    <>
      <div
        {...(id !== null && { id })}
        className={twClassNames(
          "flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-neutral-strong bg-input-default text-center focus-visible:outline-none",
          wrapperClassName,
          {
            "hover:bg-neutral-default-hover active:border-brand-strong":
              !isUploading,
            "cursor-not-allowed": isUploading,
            "ring-danger-weak ring-2 border-0 focus:ring": errorText,
            "focus:border-brand-strong focus:border-dashed": !errorText,
          }
        )}
        {...getRootProps({
          onClick: evt => evt.preventDefault(),
          ...(errorText && {
            "aria-invalid": true,
            "aria-describedby": `${label}-error-wrap`,
          }),
        })}
        role="button"
        aria-busy={isUploading}
      >
        <div className="px-6 py-5">
          {isUploading ? (
            <>
              <Loader
                wrapperClassName="h-8 w-8 mx-auto"
                loaderPrimaryColor="icon-brand-default"
              />
              <p className="mt-2 text-sm font-medium leading-5 text-neutral-weaker">
                {heading}
              </p>
            </>
          ) : (
            <>
              <label htmlFor={label}>
                {icon}
                <div className="mt-1 flex items-center justify-center gap-1">
                  <p className="text-xs font-medium leading-4 text-brand-default">
                    {linkText}
                  </p>
                  <p className="text-sm font-medium leading-5 text-neutral-weak">
                    {heading}
                  </p>
                </div>
                <p className="text-xs font-normal leading-4 text-neutral-weaker">
                  {subHeading}
                </p>
              </label>
              <input
                id={label}
                type="file"
                className="hidden"
                multiple={multiple}
                accept={accept}
                {...getInputProps({ "data-testid": "file-input" })}
              />
            </>
          )}
        </div>
      </div>
      {errorText && (
        <p
          className="mt-2 text-sm text-danger-default"
          id={`${label}-error-wrap`}
        >
          {errorText}
        </p>
      )}
    </>
  );
};

FileUpload.propTypes = {
  /**
   * Defines the file types the component accepts, passed to `react-dropzone`.
   * Keys are MIME types (e.g., 'image/jpeg') or file extensions (e.g., '.pdf'),
   * and values are arrays of corresponding file extensions.
   * @type {Object.<string, string[]>}
   * @property {string[]} mimeOrExtension - An array of file extensions (e.g., `['.jpg', '.jpeg']`).
   * @example { 'image/png': ['.png'], 'application/pdf': ['.pdf'] }
   * @see https://react-dropzone.js.org/#section-accepting-specific-file-types
   * @required
   */
  accept: propTypes.shape({}).isRequired,
  /**
   * Error message to display below the component. Activates error styling if non-empty.
   * @type {string}
   */
  errorText: propTypes.string,
  /**
   * Primary text label displayed within the component, usually after `linkText`.
   * @type {string}
   */
  heading: propTypes.string,
  /**
   * Custom React node (e.g., icon component) displayed within the upload area.
   * @type {React.ReactNode}
   */
  icon: propTypes.node,
  /**
   * Optional HTML `id` attribute for the main container `div`.
   * @type {string | null}
   */
  id: propTypes.string,
  /**
   * Controls the loading state. If `true`, shows a loader, disables interactions,
   * and sets `aria-busy="true"`.
   * @type {boolean}
   */
  isUploading: propTypes.bool,
  /**
   * Unique identifier for the hidden file `input` and its `label`. Essential for accessibility.
   * @type {string}
   * @required
   */
  label: propTypes.string.isRequired,
  /**
   * Clickable text within the upload area prompting file selection.
   * @type {string}
   */
  linkText: propTypes.string,
  /**
   * Allows selection of multiple files if `true`. Passed to the file input.
   * @type {boolean}
   */
  multiple: propTypes.bool,
  /**
   * Callback function executed with an array of accepted `File` objects upon selection/drop.
   * @type {(acceptedFiles: File[]) => void}
   * @required
   */
  onChange: propTypes.func.isRequired,
  /**
   * Secondary text displayed below the main text, often for hints or constraints.
   * @type {string}
   */
  subHeading: propTypes.string,
  /**
   * Custom CSS class names for the root `div` element for styling.
   * @type {string}
   */
  wrapperClassName: propTypes.string,
};

FileUpload.defaultProps = {
  errorText: "",
  heading: "",
  icon: <MdOutlineInsertPhoto className="mx-auto h-6 w-6 icon-neutral-weak" />,
  id: null,
  isUploading: false,
  linkText: "",
  multiple: false,
  subHeading: "",
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-fileupload--base
 * @zeroHeight
 * @end
 */

export default React.memo(FileUpload);
