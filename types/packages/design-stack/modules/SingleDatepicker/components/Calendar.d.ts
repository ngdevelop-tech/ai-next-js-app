/**
 * @typedef {Object} CalendarProps
 * @property {any} isLoading?
 * @property {any} era?
 * @property {any} month?
 * @property {any} year?
 */
export declare function Calendar(props: any): any;
export declare namespace Calendar {
    var propTypes: {
        isLoading: any;
        maxValue: any;
        minValue: any;
    };
    var defaultProps: {
        isLoading: boolean;
        minValue: any;
        maxValue: any;
    };
}
