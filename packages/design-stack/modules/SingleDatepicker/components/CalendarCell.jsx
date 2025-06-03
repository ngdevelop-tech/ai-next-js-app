/**
 * @typedef {Object} CalendarCellProps
 * @property {any} currentDate
 */

import React, { useRef } from "react";
import { mergeProps, useCalendarCell, useFocusRing } from "react-aria";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { isSameDay } from "@internationalized/date";
import Proptypes from "prop-types";

export function CalendarCell({ state, date, currentDate }) {
  const ref = useRef();
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    formattedDate,
    isInvalid,
  } = useCalendarCell({ date }, state, ref);

  let isSelectionStart = isSelected;
  let isSelectionEnd = isSelected;

  if (state.highlightedRange) {
    isSelectionStart = isSameDay(date, state.highlightedRange.start);
    isSelectionEnd = isSameDay(date, state.highlightedRange.end);
  }

  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <td
      {...cellProps}
      className={`relative ${isFocusVisible ? "z-10" : "z-0"}`}
    >
      <div
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={twClassNames(
          "group mx-auto h-12 w-full font-normal outline-none",
          {
            disabled: isDisabled,
            "border-y-4 border-transparent font-semibold": isSelected,
          }
        )}
      >
        <div
          className={twClassNames(
            "flex h-full w-full cursor-default items-center justify-center text-sm leading-5 text-neutral-default",
            {
              "text-neutral-weakest cursor-not-allowed":
                isDisabled && !isInvalid,

              // Focus ring, visible while the cell has keyboard focus.
              "ring-brand-stronger ring-2 ring-offset-2": isFocusVisible,

              // Current date styles
              "text-brand-default font-semibold": currentDate,

              // Darker selection background for the start and end.
              "bg-neutral-inverse-default text-neutral-inverse-default rounded-full w-5/6 mx-auto":
                (isSelectionStart || isSelectionEnd) && !isOutsideVisibleRange,
              "bg-neutral-inverse-default hover:bg-danger-default-hover text-neutral-inverse-default w-5/6 mx-auto":
                (isSelectionStart || isSelectionEnd) && isInvalid,

              // Hover state for non-selected cells.
              "hover:bg-neutral-strong-hover": !isSelected && !isDisabled,

              // dates outside of current month
              "bg-neutral-stronger cursor-not-allowed text-neutral-default":
                isOutsideVisibleRange,
            }
          )}
        >
          {formattedDate}
        </div>
      </div>
    </td>
  );
}

CalendarCell.propTypes = {
  currentDate: Proptypes.bool.isRequired,
  date: Proptypes.shape({
    calendar: Proptypes.shape({
      getDaysInMonth: Proptypes.func,
    }),
    day: Proptypes.number,
  }),
  state: Proptypes.shape({
    highlightedRange: Proptypes.shape({
      end: Proptypes.oneOfType([Proptypes.shape({}), Proptypes.string]),
      start: Proptypes.oneOfType([Proptypes.shape({}), Proptypes.string]),
    }),
    triggerRef: Proptypes.shape({
      current: {},
    }),
  }),
};

CalendarCell.defaultProps = {
  state: {},
  date: {},
};
