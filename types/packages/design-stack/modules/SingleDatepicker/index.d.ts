/**
 * Represents the properties for the SingleDatepicker component.
 * @typedef {Object} SingleDatepickerProps
 * @property {'start' | 'center' | 'end'} [align='end'] - The preferred alignment of the popover content relative to the trigger.
 *   - `'start'`: Aligns the popover to the start edge of the trigger.
 *   - `'center'`: Centers the popover relative to the trigger.
 *   - `'end'`: Aligns the popover to the end edge of the trigger.
 * @property {number} [crossOffset=0] - The offset of the popover content along the cross axis, relative to the trigger.
 * @property {boolean} [disabled=false] - If `true`, the datepicker input and trigger button will be disabled.
 * @property {string} [errorMessage=''] - An error message to display below the datepicker input. If provided, the input border will indicate an error state.
 * @property {string} [id=null] - The base ID for the datepicker elements. If not provided, a unique ID will be generated.
 * @property {(date: import('@internationalized/date').CalendarDate) => boolean} [isDateUnavailable=() => {}] - A function to determine if a specific date is unavailable for selection. It receives a `CalendarDate` object and should return `true` if the date is unavailable.
 * @property {boolean} [isLoading=false] - If `true`, displays a loading indicator within the calendar popover.
 * @property {boolean} [isMandatory=false] - If `true`, adds a visual indicator (asterisk) to the label signifying that the field is required.
 * @property {string} [label=''] - The label text displayed above the datepicker input.
 * @property {number} [offset=0] - The offset of the popover content along the main axis, relative to the trigger.
 * @property {(date: import('@internationalized/date').CalendarDate | null) => void} [onChange=() => {}] - Callback function invoked when the selected date changes. It receives the new `CalendarDate` object or `null` if the date is cleared.
 * @property {string} [popoverWrapperClassName=''] - Additional CSS class name(s) to apply to the popover content wrapper element.
 * @property {'top' | 'right' | 'bottom' | 'left'} [side='bottom'] - The preferred side of the trigger element where the popover content should appear.
 *   - `'top'`: Positions the popover above the trigger.
 *   - `'right'`: Positions the popover to the right of the trigger.
 *   - `'bottom'`: Positions the popover below the trigger.
 *   - `'left'`: Positions the popover to the left of the trigger.
 * @property {string} [wrapperClassName=''] - Additional CSS class name(s) to apply to the main wrapper `div` element of the datepicker.
 * @property {import('@internationalized/date').CalendarDate} [value] - The currently selected date. Controlled prop.
 * @property {import('@internationalized/date').CalendarDate} [defaultValue] - The initially selected date. Uncontrolled prop.
 * @property {import('@internationalized/date').CalendarDate} [minValue] - The minimum allowed date that can be selected.
 * @property {import('@internationalized/date').CalendarDate} [maxValue] - The maximum allowed date that can be selected.
 * @property {string} [granularity] - The smallest unit that can be selected (e.g., 'day', 'month', 'year'). Defaults according to the visible date fields.
 * @property {boolean} [hideTimeZone] - Whether to hide the time zone abbreviation.
 * @property {number} [hourCycle] - The hour cycle (12 or 24) to use for formatting times.
 * @property {boolean} [shouldForceLeadingZeros] - Whether to force leading zeros in date and time segments.
 * @property {string} [placeholderValue] - A placeholder date that influences the format of the placeholder shown when no value is selected.
 */
import React from "react";
/**
 * A single date picker component that allows users to select a date from a calendar interface.
 * It leverages `react-aria` and `react-stately` for accessibility and state management,
 * and `@radix-ui/react-popover` for the calendar dropdown.
 *
 * @component
 * @type {React.FC<SingleDatepickerProps>}
 * @param {SingleDatepickerProps} props - The props for the SingleDatepicker component.
 *
 * @example
 * ```jsx
 * import { SingleDatepicker } from '@browserstack/design-stack';
 * import { today, getLocalTimeZone } from '@internationalized/date';
 * import { useState } from 'react';
 *
 * function MyDatePicker() {
 *   const [date, setDate] = useState(today(getLocalTimeZone()));
 *
 *   return (
 *     <SingleDatepicker
 *       label="Select Date"
 *       value={date}
 *       onChange={setDate}
 *       minValue={today(getLocalTimeZone())}
 *       isMandatory
 *     />
 *   );
 * }
 * ```
 *
 * @see https://react-spectrum.adobe.com/react-aria/useDatePicker.html
 * @see https://react-spectrum.adobe.com/react-stately/useDatePickerState.html
 * @see https://www.radix-ui.com/docs/primitives/components/popover
 *
 * @accessibility
 * - Uses `react-aria` hooks which handle ARIA attributes (`aria-label`, `aria-labelledby`, `aria-describedby`, `aria-invalid`, etc.) for the input field, button, and calendar.
 * - Provides keyboard navigation within the date field and the calendar popover.
 * - Supports screen readers.
 * - The `label` prop is associated with the input field using `aria-labelledby`.
 * - The `errorMessage` prop is associated with the input field using `aria-describedby` when present.
 * - The trigger button has an `aria-label` for clarity.
 */
declare const SingleDatepicker: {
    ({ wrapperClassName, any, errorMessage, any, disabled, any, id, any, onChange, any }: {
        wrapperClassName?: string;
        any: any;
        errorMessage?: string;
        disabled?: boolean;
        id?: any;
        onChange?: any;
    }): React.ReactElement;
    propTypes: {
        /** The preferred alignment of the popover content. */
        align: any;
        /** The offset of the popover content along the cross axis. */
        crossOffset: any;
        /** If `true`, the datepicker is disabled. */
        disabled: any;
        /** Error message to display. */
        errorMessage: any;
        /** The base ID for the component. */
        id: any;
        /** Function to determine if a date is unavailable. */
        isDateUnavailable: any;
        /** If `true`, shows a loading state in the calendar. */
        isLoading: any;
        /** If `true`, marks the field as mandatory. */
        isMandatory: any;
        /** Label for the datepicker. */
        label: any;
        /** The offset of the popover content along the main axis. */
        offset: any;
        /** Callback function when the date changes. */
        onChange: any;
        /** Class name for the popover wrapper. */
        popoverWrapperClassName: any;
        /** The preferred side for the popover content. */
        side: any;
        /** Class name for the main wrapper element. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-singledatepicker--primary
 * @zeroHeight
 * @end
 */
export default SingleDatepicker;
