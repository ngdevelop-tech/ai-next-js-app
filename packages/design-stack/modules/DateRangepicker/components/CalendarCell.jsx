/**
 * @typedef {Object} CalendarCellProps
 * @property {any} currentDate
 */

import React, { useContext, useRef } from "react";
import { mergeProps, useCalendarCell, useFocusRing } from "react-aria";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { isSameDay } from "@internationalized/date";
import Proptypes from "prop-types";

import { PickerLevelContext } from "../context/PickerLevelContext";

export function CalendarCell({ state, date, currentDate }) {
  const { triggerRef } = useContext(PickerLevelContext);
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
  let singleDateRange = false;

  if (state.highlightedRange) {
    isSelectionStart = isSameDay(date, state.highlightedRange.start);
    isSelectionEnd = isSameDay(date, state.highlightedRange.end);
    singleDateRange = isSameDay(
      state.highlightedRange.start,
      state.highlightedRange.end
    );
  }
  const updatedCellProps = {
    ...cellProps,
    onKeyDown: e => {
      if (state.anchorDate === null && e.key === "Escape")
        triggerRef.current.click();
    },
  };
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <td
      {...updatedCellProps}
      className={twClassNames("relative", {
        "z-10": isFocusVisible,
        "z-0": !isFocusVisible,
      })}
    >
      <div
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={twClassNames(
          "group mx-auto h-12 w-full font-normal outline-none",
          {
            disabled: isDisabled,
            "bg-neutral-strongest border-y-4 border-neutral-inverse-default font-semibold":
              isSelected,

            // gradient when in selected state
            "rounded-l-full bg-gradient-to-r from-[var(--bg-raised-default)_50%] to-[var(--bg-neutral-strongest)_50%]":
              isSelectionStart && !isOutsideVisibleRange,
            "rounded-r-full bg-gradient-to-r from-[var(--bg-neutral-strongest)_50%] to-[var(--bg-raised-default)_50%]":
              isSelectionEnd && !isOutsideVisibleRange,
            "bg-gradient-to-r from-bg-raised-default to-bg-raised-default":
              singleDateRange,
            "bg-raised-default": singleDateRange,
          }
        )}
      >
        <div
          className={twClassNames(
            "flex h-full w-full cursor-default items-center justify-center text-sm leading-5 text-neutral-default",
            {
              "cursor-pointer": !isDisabled && !isInvalid,
              "text-neutral-weakest cursor-not-allowed":
                isDisabled && !isInvalid,

              // Focus ring, visible while the cell has keyboard focus.
              "ring-brand-stronger ring-2 ring-offset-2": isFocusVisible,

              // Current date styles
              "text-brand-default font-semibold": currentDate,

              // Darker selection background for the start and end.
              "bg-neutral-inverse-default text-neutral-inverse-default rounded-full w-5/6 mx-auto":
                (isSelectionStart || isSelectionEnd) && !isOutsideVisibleRange,
              "bg-neutral-inverse-default text-neutral-inverse-default w-5/6 mx-auto":
                (isSelectionStart || isSelectionEnd) && !isInvalid,

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
    anchorDate: Proptypes.oneOfType([Proptypes.shape({}), Proptypes.string]),
    highlightedRange: Proptypes.shape({
      end: Proptypes.oneOfType([Proptypes.shape({}), Proptypes.string]),
      start: Proptypes.oneOfType([Proptypes.shape({}), Proptypes.string]),
    }),
  }),
};

CalendarCell.defaultProps = {
  state: {},
  date: {},
};
