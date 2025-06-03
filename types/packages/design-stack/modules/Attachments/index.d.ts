/**
 * Represents a single attachment item within the Attachments list.
 * @typedef {Object} AttachmentItem
 * @property {string} id - A unique identifier for the attachment item. Used as the key for rendering.
 * @property {string} fileName - The name of the file to be displayed.
 * @property {React.ReactNode} [icon] - An optional React node (e.g., an icon component) specific to this attachment. If provided, it overrides the default `icon` prop of the `Attachments` component.
 * @property {React.ReactNode} [actions] - Optional React node(s) representing actions for this attachment (e.g., download or delete buttons/links).
 */
/**
 * The Attachments component renders a list of files or items,
 * each with an optional icon, filename, and associated actions.
 * It provides a consistent layout for displaying attached resources.
 * @type {React.FC<AttachmentsProps>}
 */
declare const Attachments: {
    ({ attachments, icon, id, wrapperClassName, }: {
        attachments?: any[];
        icon?: import("react/jsx-runtime").JSX.Element;
        id?: any;
        wrapperClassName?: string;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /**
         * An array of objects specifying each attachment's details.
         * Each object in the array represents one attachment item in the list.
         */
        attachments: any;
        /**
         * A default React node (e.g., an icon component) to be displayed for each attachment
         * if the individual attachment object does not provide its own `icon`.
         */
        icon: any;
        /**
         * An optional unique identifier string to be applied as the `id` attribute
         * to the root `div` element of the component.
         */
        id: any;
        /**
         * Optional CSS class name(s) to apply to the root `div` element
         * for custom styling purposes.
         */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-attachments--primary
 * @zeroHeight
 * @end
 */
export default Attachments;
