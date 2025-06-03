/**
 * @typedef {Object} CalendarCellProps
 * @property {any} currentDate
 */
export declare function CalendarCell({ state: any, date: any, currentDate }: any): any;
export declare namespace CalendarCell {
    var propTypes: {
        currentDate: any;
        date: any;
        state: any;
    };
    var defaultProps: {
        state: {};
        date: {};
    };
}
