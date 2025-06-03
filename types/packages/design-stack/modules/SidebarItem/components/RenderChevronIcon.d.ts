/**
 * @typedef {Object} RenderChevronIconProps
 * @property {boolean} current - Indicates if the item is currently active
 * @property {boolean} isExpanded - Indicates if the item is expanded
 * @property {boolean} isNestedItem? - Indicates if the item is a nested item
 * @property {(event: React.MouseEvent<any>) => void} onChevronClickHandler - A callback used to handle onClick event of the icon
 */
/**
 * @type {React.FC<RenderChevronIconProps>}
 */
declare function RenderChevronIcon({ current, isExpanded, isNestedItem, onChevronClickHandler, }: {
    current: any;
    isExpanded: any;
    isNestedItem: any;
    onChevronClickHandler: any;
}): import("react/jsx-runtime").JSX.Element;
declare namespace RenderChevronIcon {
    var propTypes: {
        /** Indicates if the item is currently active */
        current: any;
        /** Indicates if the item is expanded */
        isExpanded: any;
        /** Indicates if the item is a nested item */
        isNestedItem: any;
        /** A callback used to handle onClick event of the icon  */
        onChevronClickHandler: any;
    };
    var defaultProps: {
        isNestedItem: any;
    };
}
export default RenderChevronIcon;
