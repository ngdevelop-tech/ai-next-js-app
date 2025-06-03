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

import { MONTHS_DATA, PICKER_LEVELS } from "../const/singleDatepicker";
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

  // Focused date would either be the selected date or the date present at the
  // top bar showing year
  const focusedYear = state.focusedDate?.year;
  const focusedMonth = state.focusedDate?.month;

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
            (month.number > maxMonth && focusedYear === maxYear) ||
            (month.number < minMonth && focusedYear === minYear)
          }
          onClick={() => handleClick(month.number)}
          className={twClassNames("h-11 w-24", {
            "text-neutral-weakest cursor-not-allowed":
              (month.number > maxMonth && focusedYear === maxYear) ||
              (month.number < minMonth && focusedYear === minYear),
            "text-brand-default font-semibold":
              month.number === new Date().getMonth() + 1 &&
              focusedYear === new Date().getFullYear(),
            "text-neutral-inverse-default bg-neutral-inverse-default rounded font-normal":
              month.number === focusedMonth,
          })}
          aria-label={
            month.number === focusedMonth
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
    focusedDate: Proptype.shape({
      month: Proptype.number,
      year: Proptype.number,
    }),
    value: Proptype.shape({
      month: Proptype.number,
      year: Proptype.number,
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
