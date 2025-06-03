/**
 * @typedef {Object} RenderChildrenProps
 * @property {React.ReactNode} data
 * @property {boolean} hideContentInSmallWidth - When true, the item's content will be hidden on small screen widths. This allows better display on smaller devices with limited space.
 */
/**
 * @type {React.FC<RenderChildrenProps>}
 */
declare function RenderChildren({ data, hideContentInSmallWidth }: {
    data: any;
    hideContentInSmallWidth: any;
}): any;
declare namespace RenderChildren {
    var propTypes: {
        /** The content to be displayed as the item's main content. This prop is required and must be provided.
        It can accept any React node like JSX element, or component. */
        data: any;
        /** When true, the item's content will be hidden on small screen widths. This allows better display on smaller devices with limited space. */
        hideContentInSmallWidth: any;
    };
}
export default RenderChildren;
