import React from "react";
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-fileupload--base
 * @zeroHeight
 * @end
 */
declare const _default: React.MemoExoticComponent<{
    ({ accept: any, errorText: any, heading: any, icon: any, id: any, isUploading: any, label: any, linkText: any, multiple: any, onChange: any, subHeading: any, wrapperClassName: any, }: any): React.ReactElement;
    propTypes: {
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
        accept: any;
        /**
         * Error message to display below the component. Activates error styling if non-empty.
         * @type {string}
         */
        errorText: any;
        /**
         * Primary text label displayed within the component, usually after `linkText`.
         * @type {string}
         */
        heading: any;
        /**
         * Custom React node (e.g., icon component) displayed within the upload area.
         * @type {React.ReactNode}
         */
        icon: any;
        /**
         * Optional HTML `id` attribute for the main container `div`.
         * @type {string | null}
         */
        id: any;
        /**
         * Controls the loading state. If `true`, shows a loader, disables interactions,
         * and sets `aria-busy="true"`.
         * @type {boolean}
         */
        isUploading: any;
        /**
         * Unique identifier for the hidden file `input` and its `label`. Essential for accessibility.
         * @type {string}
         * @required
         */
        label: any;
        /**
         * Clickable text within the upload area prompting file selection.
         * @type {string}
         */
        linkText: any;
        /**
         * Allows selection of multiple files if `true`. Passed to the file input.
         * @type {boolean}
         */
        multiple: any;
        /**
         * Callback function executed with an array of accepted `File` objects upon selection/drop.
         * @type {(acceptedFiles: File[]) => void}
         * @required
         */
        onChange: any;
        /**
         * Secondary text displayed below the main text, often for hints or constraints.
         * @type {string}
         */
        subHeading: any;
        /**
         * Custom CSS class names for the root `div` element for styling.
         * @type {string}
         */
        wrapperClassName: any;
    };
    defaultProps: {
        errorText: string;
        heading: string;
        icon: import("react/jsx-runtime").JSX.Element;
        id: any;
        isUploading: boolean;
        linkText: string;
        multiple: boolean;
        subHeading: string;
        wrapperClassName: string;
    };
}>;
export default _default;
