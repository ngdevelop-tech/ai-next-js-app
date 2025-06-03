/**
 * @typedef {Object} CalendarGridProps
 * @property {any} visibleRange?
 */

import React from "react";
import { useCalendarGrid } from "react-aria";
import Proptypes from "prop-types";

import { CalendarCell } from "./CalendarCell";

export function CalendarGrid({ state, ...props }) {
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = 6;

  const isTodaysDate = dateObj => {
    const today = new Date();
    return !!(
      today.getMonth() + 1 === dateObj.month &&
      today.getDate() === dateObj.day &&
      today.getFullYear() === dateObj.year
    );
  };

  return (
    <table {...gridProps} cellPadding="0" className="flex-1">
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th
              className="h-12 w-12 text-center text-sm font-normal leading-5 text-neutral-weaker"
              key={`${day}-${index + 1}`}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map(weekIndex => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    key={`${date}-${i + 1}`}
                    state={state}
                    date={date}
                    currentDate={isTodaysDate(date)}
                  />
                ) : (
                  <td key={`${date}-${i + 1}`} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CalendarGrid.propTypes = {
  state: Proptypes.shape({
    getDatesInWeek: Proptypes.func,
    visibleRange: Proptypes.shape({}),
  }).isRequired,
};
