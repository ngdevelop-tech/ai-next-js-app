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

import React, { useEffect, useRef, useState } from "react";
import { useDateRangePicker } from "react-aria";
import { useDateRangePickerState } from "react-stately";
import { MdCalendarToday } from "react-icons/md";
import { useYearpicker } from "@/packages/hooks";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as Popover from "@radix-ui/react-popover";
import Proptypes from "prop-types";

import { DateField } from "./components/DateField";
import { RangeCalendar } from "./components/RangeCalendar";
import { PICKER_LEVELS, YEARS_DATA } from "./const/DateRangepickerconst";
import { PickerLevelContext } from "./context/PickerLevelContext";

/**
 * DateRangepicker component allows users to select a start and end date from a calendar interface.
 * It integrates with react-aria and react-stately for accessibility and state management,
 * and uses Radix UI Popover for the dropdown calendar.
 *
 * @component
 * @param {DateRangepickerProps} props - The props for the DateRangepicker component.
 * @returns {React.ReactElement} The rendered DateRangepicker component.
 */
const DateRangepicker = props => {
  const state = useDateRangePickerState(props);
  const ref = useRef();
  const triggerRef = useRef();
  const { labelProps, startFieldProps, endFieldProps, calendarProps } =
    useDateRangePicker(props, state, ref);

  const {
    label,
    errorMessage,
    disabled,
    id,
    offset,
    onBlur,
    crossOffset,
    align,
    side,
    wrapperClassName,
    isLoading,
    isMandatory,
    popoverWrapperClassName,
    startDateOnFocusChange,
    startDateOnKeyDown,
    endDateOnFocusChange,
    endDateOnKeyDown,
  } = props;
  const [currentPicker, setCurrentPicker] = useState(PICKER_LEVELS[2]);
  const [openPopover, setOpenPopover] = useState(false);

  const years = useYearpicker(YEARS_DATA, 12);
  useEffect(
    () =>
      state.value.start !== null
        ? years.jump(state.value.start.year / 12 + 1)
        : years.jump(new Date().getFullYear() / 12 + 1),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.value.start]
  );

  useEffect(() => {
    if (state.value.start !== null && state.value.end !== null)
      triggerRef.current?.click();
  }, [state.value, state.start, state.end]);

  const handleBlur = event => {
    const { relatedTarget } = event;
    if (ref?.current?.contains(relatedTarget)) {
      return;
    }
    onBlur?.(state.value);
  };

  return (
    <PickerLevelContext.Provider
      value={{
        years,
        currentPicker,
        setCurrentPicker,
        triggerRef,
      }}
    >
      <div
        className={twClassNames(wrapperClassName)}
        {...(id !== null && { id })}
      >
        {label && (
          <span
            {...labelProps}
            className="break-all text-sm font-medium leading-5 text-neutral-weak"
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
            onBlur={handleBlur}
            ref={ref}
            className={twClassNames(
              "flex w-full justify-between rounded-md border border-neutral-strong focus-within:border-brand-strong focus-within:ring-1 focus-within:ring-brand-strong",
              {
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
                "flex w-full items-center rounded-md rounded-r-none bg-input-default p-1 py-2 pl-3 hover:bg-neutral-default-hover",
                {
                  "bg-input-default-disabled": disabled,
                }
              )}
            >
              <DateField
                onFocusChange={startDateOnFocusChange}
                onKeyDown={startDateOnKeyDown}
                aria-label="some reader text"
                {...startFieldProps}
                disabled={disabled}
                errorMessage={errorMessage}
              />
              <span
                aria-hidden="true"
                className={twClassNames("px-2 text-neutral-weaker", {
                  "text-neutral-weaker": disabled,
                  "text-danger-strongest":
                    errorMessage && (state.value.start || state.value.end),
                })}
              >
                –
              </span>
              <DateField
                onFocusChange={endDateOnFocusChange}
                onKeyDown={endDateOnKeyDown}
                {...endFieldProps}
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
                    "-ml-px rounded-r-md border-l border-neutral-strong bg-input-default px-3.5 hover:bg-neutral-default-hover focus:border-2 focus:outline-brand-strong",
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
                    <RangeCalendar
                      isLoading={isLoading}
                      {...calendarProps}
                      autoFocus={false}
                    />
                  </div>
                  <Popover.Close ref={triggerRef} aria-hidden="true" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </div>
        {errorMessage && (
          <p className="mt-1.5 break-all text-sm font-normal leading-5 text-danger-default">
            {errorMessage}
          </p>
        )}
      </div>
    </PickerLevelContext.Provider>
  );
};

DateRangepicker.propTypes = {
  /** The preferred alignment against the trigger. May change when collisions occur. */
  align: Proptypes.oneOf(["start", "center", "end"]),
  /** An offset distance perpendicular to the trigger alignment side. */
  crossOffset: Proptypes.number,
  /** Whether the date range picker is disabled. */
  disabled: Proptypes.bool,
  /** Handler that is called when the focus state of the end date field changes. */
  endDateOnFocusChange: Proptypes.func,
  /** Handler that is called when a key is pressed while the end date field is focused. */
  endDateOnKeyDown: Proptypes.func,
  /** Error message to display below the date fields. */
  errorMessage: Proptypes.string,
  /** The unique ID of the date range picker. */
  id: Proptypes.string,
  /** Function to determine if a date is unavailable. Receives a CalendarDate object. */
  isDateUnavailable: Proptypes.func,
  /** Whether the calendar is in a loading state. */
  isLoading: Proptypes.bool,
  /** Whether the field is mandatory, indicated by an asterisk (*). */
  isMandatory: Proptypes.bool,
  /** The label for the date range picker. */
  label: Proptypes.string,
  /** The distance offset between the trigger and the popover content. */
  offset: Proptypes.number,
  /** Handler called when focus moves outside the component. Receives the current date range value. */
  onBlur: Proptypes.func,
  /** Handler called when the selected date range changes. Receives the new date range value. */
  onChange: Proptypes.func,
  /** Additional CSS class name for the popover content wrapper. */
  popoverWrapperClassName: Proptypes.string,
  /** The preferred side of the trigger to render against. Will be flipped when collisions occur. */
  side: Proptypes.oneOf(["top", "right", "bottom", "left"]),
  /** Handler that is called when the focus state of the start date field changes. */
  startDateOnFocusChange: Proptypes.func,
  /** Handler that is called when a key is pressed while the start date field is focused. */
  startDateOnKeyDown: Proptypes.func,
  /** Additional CSS class name for the main wrapper div. */
  wrapperClassName: Proptypes.string,
};

DateRangepicker.defaultProps = {
  wrapperClassName: "",
  errorMessage: "",
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
  isDateUnavailable: () => {},
  id: null,
  offset: 0,
  crossOffset: 0,
  align: "end",
  side: "bottom",
  label: "",
  isLoading: false,
  isMandatory: false,
  popoverWrapperClassName: "",
  startDateOnFocusChange: null,
  startDateOnKeyDown: null,
  endDateOnFocusChange: null,
  endDateOnKeyDown: null,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-daterangepicker--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/33589f-date-picker/b/4635b4
 * @end
 */

export default DateRangepicker;
