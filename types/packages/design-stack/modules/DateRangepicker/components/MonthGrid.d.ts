/**
 * @typedef {Object} MonthGridProps
 * @property {any} maxMonth?
 * @property {any} maxYear?
 * @property {any} minMonth?
 * @property {any} minYear?
 * @property {any} onClick?
 * @property {any} year?
 */
import React from "react";
/**
 * @type {React.FC<MonthGridProps>}
 */
declare const MonthGrid: {
    ({ minMonth: any, maxMonth: any, minYear: any, maxYear: any, onClick: any, state: any, }: any): React.ReactElement;
    propTypes: {
        maxMonth: any;
        maxYear: any;
        minMonth: any;
        minYear: any;
        onClick: any;
        state: any;
    };
    defaultProps: {
        onClick: () => void;
        minMonth: number;
        maxMonth: number;
        maxYear: number;
        minYear: number;
    };
};
export default MonthGrid;
