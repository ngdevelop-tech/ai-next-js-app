/**
 * @typedef {Object} TableFloatingIconProps
 * @property {React.ReactNode} children? - Set the Children to prop
 * @property {React.ReactNode} filterIcon? - Sets custom Filter Icon
 * @property {(event: React.MouseEvent<any>) => void} onIconClick - Sets click event handler for the table Icon button
 * @property {Record<string, any>} popoverConfig? - Set the popover module props
 */
/**
 * @type {React.FC<TableFloatingIconProps>}
 */
declare const TableFloatingIcon: {
    ({ onIconClick, popoverConfig, filterIcon, triggerIconClasses, children, }: {
        onIconClick: any;
        popoverConfig?: any;
        filterIcon?: import("react/jsx-runtime").JSX.Element;
        triggerIconClasses?: string;
        children?: any;
    }): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /** Set the Children to prop */
        children: any;
        /** Sets custom Filter Icon */
        filterIcon: any;
        /** Sets click event handler for the table Icon button */
        onIconClick: any;
        /** Set the popover module props */
        popoverConfig: any;
        /** Set the trigger class  properties */
        triggerIconClasses: any;
    };
};
export default TableFloatingIcon;
