/**
 * @typedef {Object} YearGridProps
 * @property {any} maxYear?
 * @property {any} minYear?
 * @property {any} onClick?
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import Proptype from "prop-types";

import { PICKER_LEVELS } from "../const/DateRangepickerconst";
import { PickerLevelContext } from "../context/PickerLevelContext";

/**
 * @type {React.FC<YearGridProps>}
 */
const YearGrid = props => {
  const { years, minYear, maxYear, onClick, state } = props;
  const { setCurrentPicker } = useContext(PickerLevelContext);

  const handleClick = year => {
    setCurrentPicker(PICKER_LEVELS[1]);
    onClick(year);
  };

  return (
    <div className="mx-3.5 my-16 grid grid-cols-3 gap-2.5 pb-0.5 text-sm font-normal leading-5 text-neutral-default">
      {years.map(year => (
        <button
          key={`unique-year-${year}`}
          type="button"
          disabled={year > maxYear || year < minYear}
          onClick={() => handleClick(year)}
          className={twClassNames("h-11 w-24", {
            "text-neutral-weakest cursor-not-allowed":
              year > maxYear || year < minYear,
            "text-brand-default font-semibold":
              year === new Date().getFullYear(),
            "text-neutral-inverse-default bg-neutral-inverse-default rounded font-normal":
              year === (state.value?.start.year || new Date().getFullYear()),
          })}
          aria-label={
            year === (state.value?.start.year || new Date().getFullYear())
              ? `${year}, selected`
              : year
          }
        >
          {year}
        </button>
      ))}
    </div>
  );
};

YearGrid.propTypes = {
  maxYear: Proptype.number,
  minYear: Proptype.number,
  onClick: Proptype.func,
  state: Proptype.shape({
    value: Proptype.shape({
      start: Proptype.shape({
        year: Proptype.number,
      }),
    }),
  }).isRequired,
  years: Proptype.arrayOf(Proptype.number),
};

YearGrid.defaultProps = {
  years: [],
  onClick: () => {},
  maxYear: 3000,
  minYear: 1,
};

export default YearGrid;
