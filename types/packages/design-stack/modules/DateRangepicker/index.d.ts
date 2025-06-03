/**
 * Represents the properties for the DateRangepicker component.
 * @typedef {Object} DateRangepickerProps
 * @property {'start' | 'center' | 'end'} [align='end'] - The preferred alignment against the trigger. May change when collisions occur.
 * @property {number} [crossOffset=0] - An offset distance perpendicular to the trigger alignment side.
 * @property {boolean} [disabled=false] - Whether the date range picker is disabled.
 * @property {(isFocused: boolean) => void} [endDateOnFocusChange] - Handler that is called when the focus state of the end date field changes.
 * @property {(e: React.KeyboardEvent) => void} [endDateOnKeyDown] - Handler that is called when a key is pressed while the end date field is focused.
 * @property {string} [errorMessage=''] - Error message to display below the date fields.
 * @property {string} [id] - The unique ID of the date range picker.
 * @property {(date: import('@internationalized/date').CalendarDate) => boolean} [isDateUnavailable] - Function to determine if a date is unavailable.
 * @property {boolean} [isLoading=false] - Whether the calendar is in a loading state.
 * @property {boolean} [isMandatory=false] - Whether the field is mandatory, indicated by an asterisk (*).
 * @property {string} [label=''] - The label for the date range picker.
 * @property {number} [offset=0] - The distance offset between the trigger and the popover content.
 * @property {(value: import('react-stately').DateRangePickerState['value']) => void} [onBlur] - Handler that is called when the element loses focus, specifically when focus moves outside the component. Receives the current date range value.
 * @property {(value: import('react-stately').DateRangePickerState['value']) => void} [onChange] - Handler that is called when the selected date range changes. Receives the new date range value.
 * @property {string} [popoverWrapperClassName=''] - Additional CSS class name for the popover content wrapper.
 * @property {'top' | 'right' | 'bottom' | 'left'} [side='bottom'] - The preferred side of the trigger to render against. Will be flipped when collisions occur.
 * @property {(isFocused: boolean) => void} [startDateOnFocusChange] - Handler that is called when the focus state of the start date field changes.
 * @property {(e: React.KeyboardEvent) => void} [startDateOnKeyDown] - Handler that is called when a key is pressed while the start date field is focused.
 * @property {string} [wrapperClassName=''] - Additional CSS class name for the main wrapper div.
 */
/**
 * DateRangepicker component allows users to select a start and end date from a calendar interface.
 * It integrates with react-aria and react-stately for accessibility and state management,
 * and uses Radix UI Popover for the dropdown calendar.
 *
 * @component
 * @param {DateRangepickerProps} props - The props for the DateRangepicker component.
 * @returns {React.ReactElement} The rendered DateRangepicker component.
 */
declare const DateRangepicker: {
    (props: any): import("react/jsx-runtime").JSX.Element;
    propTypes: {
        /** The preferred alignment against the trigger. May change when collisions occur. */
        align: any;
        /** An offset distance perpendicular to the trigger alignment side. */
        crossOffset: any;
        /** Whether the date range picker is disabled. */
        disabled: any;
        /** Handler that is called when the focus state of the end date field changes. */
        endDateOnFocusChange: any;
        /** Handler that is called when a key is pressed while the end date field is focused. */
        endDateOnKeyDown: any;
        /** Error message to display below the date fields. */
        errorMessage: any;
        /** The unique ID of the date range picker. */
        id: any;
        /** Function to determine if a date is unavailable. Receives a CalendarDate object. */
        isDateUnavailable: any;
        /** Whether the calendar is in a loading state. */
        isLoading: any;
        /** Whether the field is mandatory, indicated by an asterisk (*). */
        isMandatory: any;
        /** The label for the date range picker. */
        label: any;
        /** The distance offset between the trigger and the popover content. */
        offset: any;
        /** Handler called when focus moves outside the component. Receives the current date range value. */
        onBlur: any;
        /** Handler called when the selected date range changes. Receives the new date range value. */
        onChange: any;
        /** Additional CSS class name for the popover content wrapper. */
        popoverWrapperClassName: any;
        /** The preferred side of the trigger to render against. Will be flipped when collisions occur. */
        side: any;
        /** Handler that is called when the focus state of the start date field changes. */
        startDateOnFocusChange: any;
        /** Handler that is called when a key is pressed while the start date field is focused. */
        startDateOnKeyDown: any;
        /** Additional CSS class name for the main wrapper div. */
        wrapperClassName: any;
    };
    defaultProps: {
        wrapperClassName: string;
        errorMessage: string;
        disabled: boolean;
        onChange: () => void;
        onBlur: () => void;
        isDateUnavailable: () => void;
        id: any;
        offset: number;
        crossOffset: number;
        align: string;
        side: string;
        label: string;
        isLoading: boolean;
        isMandatory: boolean;
        popoverWrapperClassName: string;
        startDateOnFocusChange: any;
        startDateOnKeyDown: any;
        endDateOnFocusChange: any;
        endDateOnKeyDown: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-daterangepicker--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/33589f-date-picker/b/4635b4
 * @end
 */
export default DateRangepicker;
