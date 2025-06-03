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

import React, { useEffect, useRef, useState } from "react";
import { useDatePicker } from "react-aria";
import { useDatePickerState } from "react-stately";
import { MdCalendarToday } from "react-icons/md";
import { useYearpicker } from "@/packages/hooks";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as Popover from "@radix-ui/react-popover";
import Proptypes from "prop-types";

import { Calendar } from "./components/Calendar";
import { DateField } from "./components/DateField";
import { PICKER_LEVELS, YEARS_DATA } from "./const/singleDatepicker";
import { PickerLevelContext } from "./context/PickerLevelContext";

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
const SingleDatepicker = ({
  wrapperClassName = "",
  errorMessage = "",
  disabled = false,
  id = null,
  onChange = () => {},
  isDateUnavailable = () => {},
  offset = 0,
  crossOffset = 0,
  align = "end",
  side = "bottom",
  label = "",
  isLoading = false,
  isMandatory = false,
  popoverWrapperClassName = "",
  ...props
}) => {
  const state = useDatePickerState({
    wrapperClassName,
    errorMessage,
    disabled,
    id,
    onChange,
    isDateUnavailable,
    offset,
    crossOffset,
    align,
    side,
    label,
    isLoading,
    isMandatory,
    popoverWrapperClassName,
    ...props,
  });
  const ref = useRef();
  const triggerRef = useRef();
  const { labelProps, fieldProps, calendarProps } = useDatePicker(
    {
      wrapperClassName,
      errorMessage,
      disabled,
      id,
      onChange,
      isDateUnavailable,
      offset,
      crossOffset,
      align,
      side,
      label,
      isLoading,
      isMandatory,
      popoverWrapperClassName,
      ...props,
    },
    state,
    ref
  );

  const years = useYearpicker(YEARS_DATA, 12);
  useEffect(
    () =>
      state.value
        ? years.jump(state.value.year / 12 + 1)
        : years.jump(new Date().getFullYear() / 12 + 1),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.value]
  );

  useEffect(() => {
    triggerRef.current?.click();
  }, [state.value]);

  const [currentPicker, setCurrentPicker] = useState(PICKER_LEVELS[2]);
  const [openPopover, setOpenPopover] = useState(false);

  return (
    <PickerLevelContext.Provider
      value={{
        years,
        currentPicker,
        setCurrentPicker,
      }}
    >
      <div
        className={twClassNames(wrapperClassName)}
        {...(id !== null && { id })}
      >
        {label && (
          <span
            {...labelProps}
            className="mb-1 block break-all text-sm font-medium leading-5 text-neutral-weak"
          >
            {label}
            {isMandatory && (
              <span className="ml-0.5 text-danger-default">*</span>
            )}
          </span>
        )}
        <div
          className={twClassNames(wrapperClassName, {
            "cursor-not-allowed": disabled,
          })}
        >
          <div
            ref={ref}
            className={twClassNames(
              "flex w-full cursor-pointer justify-between rounded-md border border-neutral-strong focus-within:border-brand-strong focus-within:ring-1 focus-within:ring-brand-strong",
              {
                "border-danger-weak": errorMessage,
                "cursor-not-allowed": disabled,
                "focus-within:border-brand-strong focus-within:border-1":
                  !disabled,
                "border-danger-weak placeholder:text-neutral-weaker border focus-within:border-danger-strong focus-within:ring-1 focus-within:ring-danger-strong focus-within:border-1":
                  errorMessage,
                "border-brand-strong border ring-1 ring-brand-strong":
                  openPopover,
                "border border-danger-strong ring-1 ring-danger-strong ":
                  openPopover && errorMessage,
              }
            )}
          >
            <div
              className={twClassNames(
                "flex w-full items-center rounded-md rounded-r-none bg-input-default p-1 py-2.5 pl-3 hover:bg-neutral-default-hover",
                {
                  "bg-input-default-disabled": disabled,
                }
              )}
            >
              <DateField
                {...fieldProps}
                disabled={disabled}
                errorMessage={errorMessage}
              />
            </div>
            <Popover.Root
              open={openPopover}
              onOpenChange={() =>
                setOpenPopover(openedPopover => !openedPopover)
              }
              defaultOpen={false}
            >
              <Popover.Trigger asChild>
                <button
                  aria-label="calendar dropdown trigger"
                  type="button"
                  disabled={disabled}
                  className={twClassNames(
                    "-ml-px rounded-r-md border-l border-neutral-strong bg-input-default px-3.5  hover:bg-neutral-default-hover focus:border-2 focus:outline-brand-strong",
                    {
                      "cursor-not-allowed bg-input-default-disabled": disabled,
                    }
                  )}
                >
                  <MdCalendarToday
                    aria-hidden="true"
                    className={twClassNames("h-5 w-5 icon-neutral-weak", {
                      "icon-neutral-weaker": disabled,
                    })}
                  />
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content
                  align={align}
                  side={side}
                  sideOffset={crossOffset}
                  alignOffset={offset}
                  className={twClassNames("z-500", popoverWrapperClassName)}
                >
                  <div className="mt-2 rounded-md border border-neutral-default bg-raised-default p-3 shadow-lg">
                    <Calendar
                      isLoading={isLoading}
                      {...calendarProps}
                      autoFocus={false}
                    />
                  </div>
                  <Popover.Close
                    ref={triggerRef}
                    tabIndex={-1}
                    aria-hidden="true"
                    aria-label="Close DatePicker"
                  />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>
        {errorMessage && (
          <p className="mt-2 break-all text-sm font-normal leading-5 text-danger-default">
            {errorMessage}
          </p>
        )}
      </div>
    </PickerLevelContext.Provider>
  );
};

SingleDatepicker.propTypes = {
  /** The preferred alignment of the popover content. */
  align: Proptypes.oneOf(["start", "center", "end"]),
  /** The offset of the popover content along the cross axis. */
  crossOffset: Proptypes.number,
  /** If `true`, the datepicker is disabled. */
  disabled: Proptypes.bool,
  /** Error message to display. */
  errorMessage: Proptypes.string,
  /** The base ID for the component. */
  id: Proptypes.string,
  /** Function to determine if a date is unavailable. */
  isDateUnavailable: Proptypes.func,
  /** If `true`, shows a loading state in the calendar. */
  isLoading: Proptypes.bool,
  /** If `true`, marks the field as mandatory. */
  isMandatory: Proptypes.bool,
  /** Label for the datepicker. */
  label: Proptypes.string,
  /** The offset of the popover content along the main axis. */
  offset: Proptypes.number,
  /** Callback function when the date changes. */
  onChange: Proptypes.func,
  /** Class name for the popover wrapper. */
  popoverWrapperClassName: Proptypes.string,
  /** The preferred side for the popover content. */
  side: Proptypes.oneOf(["top", "right", "bottom", "left"]),
  /** Class name for the main wrapper element. */
  wrapperClassName: Proptypes.string,
  // Note: Props managed by react-stately/react-aria (like value, defaultValue, minValue, maxValue, etc.)
  // are implicitly included via {...props} spread but not explicitly listed here again
  // as their types are complex and handled by the underlying hooks.
  // Refer to SingleDatepickerProps JSDoc typedef for more details on these.
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-singledatepicker--primary
 * @zeroHeight
 * @end
 */

export default SingleDatepicker;
