/**
 * @typedef {Object} YearGridProps
 * @property {any} maxYear?
 * @property {any} minYear?
 * @property {any} onClick?
 */
/**
 * @type {React.FC<YearGridProps>}
 */
declare const YearGrid: {
    (props: any): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        maxYear: any;
        minYear: any;
        onClick: any;
        state: any;
        years: any;
    };
    defaultProps: {
        years: any[];
        onClick: () => void;
        maxYear: number;
        minYear: number;
    };
};
export default YearGrid;
