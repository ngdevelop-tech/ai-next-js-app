/**
 * @typedef {Object} MonthGridProps
 * @property {any} maxMonth?
 * @property {any} maxYear?
 * @property {any} minMonth?
 * @property {any} minYear?
 * @property {any} onClick?
 * @property {any} year?
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import Proptype from "prop-types";

import { MONTHS_DATA, PICKER_LEVELS } from "../const/DateRangepickerconst";
import { PickerLevelContext } from "../context/PickerLevelContext";

/**
 * @type {React.FC<MonthGridProps>}
 */
const MonthGrid = ({
  minMonth,
  maxMonth,
  minYear,
  maxYear,
  onClick,
  state,
}) => {
  const { setCurrentPicker } = useContext(PickerLevelContext);

  // logic for selection of year and month :

  // if default value is set then pick the state.value.start digits
  // else current time period's month and year
  const selectedYear = state.value?.start?.year || new Date().getFullYear();
  const selectedMonth = state.value?.start?.month || new Date().getMonth() + 1;

  const handleClick = monthNumber => {
    setCurrentPicker(PICKER_LEVELS[2]);
    onClick(monthNumber);
  };

  return (
    <div className="mx-3.5 my-16 grid grid-cols-3 gap-2.5 pb-0.5 text-sm font-normal leading-5 text-neutral-default">
      {MONTHS_DATA.map(month => (
        <button
          key={month.name}
          type="button"
          disabled={
            (month.number > maxMonth && selectedYear === maxYear) ||
            (month.number < minMonth && selectedYear === minYear)
          }
          onClick={() => handleClick(month.number)}
          className={twClassNames("h-11 w-24", {
            "text-neutral-weakest cursor-not-allowed":
              (month.number > maxMonth && selectedYear === maxYear) ||
              (month.number < minMonth && selectedYear === minYear),
            "text-brand-default font-semibold":
              month.number === new Date().getMonth() + 1 &&
              selectedYear === new Date().getFullYear(),
            "text-neutral-inverse-default bg-neutral-inverse-default rounded font-normal":
              month.number === selectedMonth,
          })}
          aria-label={
            month.number === selectedMonth
              ? `${month.name}, selected`
              : month.name
          }
        >
          {month.name}
        </button>
      ))}
    </div>
  );
};

MonthGrid.propTypes = {
  maxMonth: Proptype.number,
  maxYear: Proptype.number,
  minMonth: Proptype.number,
  minYear: Proptype.number,
  onClick: Proptype.func,
  state: Proptype.shape({
    value: Proptype.shape({
      start: Proptype.shape({
        month: Proptype.number,
        year: Proptype.number,
      }),
    }),
  }).isRequired,
};

MonthGrid.defaultProps = {
  onClick: () => {},
  minMonth: 1,
  maxMonth: 12,
  maxYear: 3000,
  minYear: 1,
};

export default MonthGrid;
