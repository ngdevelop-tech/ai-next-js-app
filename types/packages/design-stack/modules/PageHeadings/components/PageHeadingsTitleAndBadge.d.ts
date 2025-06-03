/**
 * @typedef {Object} PageHeadingsTitleAndBadgeProps
 * @property {React.ReactNode} breadcrumbNode? - A custom node representing the breadcrumb navigation at the top.
 * @property {React.ReactNode} headerBadgesNode? - A custom node representing the badges along with the header.
 * @property {string} heading? - The main heading or TITLE.
 * @property {Record<string, any>} inlineEditingProps? - Object of props to support inlineEditing.
 * @property {string} defaultElementText?
 * @property {string} elementText?
 * @property {(event: React.MouseEvent<any>) => void} onBlurCallback?
 * @property {(event: React.MouseEvent<any>) => void} onChangeCallback?
 * @property {string} wrapperClassname?
 */
export declare function PageHeadingsTitleAndBadge({ breadcrumbNode, any, headerBadgesNode, any, heading, any, inlineEditingProps, any, isEditable, any, isTruncateTooltip, any, loading, any, theme, any, }: any): any;
export declare namespace PageHeadingsTitleAndBadge {
    var propTypes: {
        /** A custom node representing the breadcrumb navigation at the top. */
        breadcrumbNode: any;
        /** A custom node representing the badges along with the header. */
        headerBadgesNode: any;
        /** The main heading or TITLE. */
        heading: any;
        /** Object of props to support inlineEditing. */
        inlineEditingProps: any;
        /** Specifies whether the heading is editable or not. */
        isEditable: any;
        /** Specifies whether the heading has tooltip or not. */
        isTruncateTooltip: any;
        /** Show the loading state of the component */
        loading: any;
        /** A custom theme to apply specific styling to the page header. */
        theme: any;
    };
}
