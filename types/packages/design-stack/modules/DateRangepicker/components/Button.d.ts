/**
 * @typedef {Object} CalendarButtonProps
 * @property {any} children
 * @property {any} disableChevron
 */
export declare function CalendarButton(props: any): any;
export declare namespace CalendarButton {
    var propTypes: {
        children: any;
        disableChevron: any;
    };
}
export declare function TimePickerCarouselButton(props: any): any;
export declare namespace TimePickerCarouselButton {
    var propTypes: {
        children: any;
        disableChevron: any;
        isLeft: any;
        onClick: any;
    };
    var defaultProps: {
        isLeft: boolean;
    };
}
