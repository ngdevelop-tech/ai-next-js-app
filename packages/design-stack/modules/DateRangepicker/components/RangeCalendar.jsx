/**
 * @typedef {Object} RangeCalendarProps
 * @property {any} isLoading?
 * @property {any} era?
 * @property {any} month?
 * @property {any} year?
 */

import React, { useContext, useRef } from "react";
import { useLocale, useRangeCalendar } from "react-aria";
import { useRangeCalendarState } from "react-stately";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { createCalendar } from "@internationalized/date";
import Proptype from "prop-types";

import Button from "../../Button";
import Loader from "../../Loader";
import {
  COMMON_CLASS_NAMES,
  PICKER_LEVELS,
} from "../const/DateRangepickerconst";
import { PickerLevelContext } from "../context/PickerLevelContext";

import { CalendarButton, TimePickerCarouselButton } from "./Button";
import { CalendarGrid } from "./CalendarGrid";
import MonthGrid from "./MonthGrid";
import YearGrid from "./YearGrid";

export function RangeCalendar(props) {
  const { years, currentPicker, setCurrentPicker } =
    useContext(PickerLevelContext);
  const { minValue, maxValue, isLoading } = props;
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef();
  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useRangeCalendar(props, state, ref);

  const jumpToPreviousYear = () => {
    if (years.currentPage === 1 || years.currentData()[0] <= minValue?.year)
      return;
    years.prev();
  };

  const jumpToNextYear = () => {
    if (
      years.maxPage === years.currentPage ||
      years.currentData()[11] >= maxValue?.year
    )
      return;
    years.next();
  };

  return (
    <div
      {...calendarProps}
      ref={ref}
      className="relative inline-block outline-0"
    >
      {isLoading ? (
        <div className="mx-36 my-40 py-3.5">
          <Loader height="h-9" width="w-9" wrapperClassName="mx-1.5" />
        </div>
      ) : (
        <>
          <div className="flex items-center pb-4">
            <p className="ml-2 flex-1 py-2">
              {/* date picker dropdown view */}
              <Button
                type="button"
                variant="minimal"
                aria-label="Month selector"
                colors="white"
                wrapperClassName={twClassNames(
                  "px-1 text-base font-semibold leading-6 text-neutral-default outline-none",
                  {
                    "bg-neutral-stronger": currentPicker === PICKER_LEVELS[1],
                  }
                )}
                onClick={() => setCurrentPicker(PICKER_LEVELS[1])}
              >
                {title.split(" ")[0]}
              </Button>
              <Button
                onClick={() => setCurrentPicker(PICKER_LEVELS[0])}
                type="button"
                variant="minimal"
                aria-label="Year selector"
                colors="white"
                wrapperClassName={twClassNames(
                  "-mx-1 px-1 text-base font-semibold leading-6 text-neutral-default outline-none ",
                  {
                    "bg-neutral-stronger": currentPicker === PICKER_LEVELS[0],
                  }
                )}
              >
                {title.split(" ")[1]}
              </Button>
            </p>
            {/* year picker carousel button */}
            {currentPicker === PICKER_LEVELS[0] && (
              <>
                <TimePickerCarouselButton
                  isLeft
                  onClick={jumpToPreviousYear}
                  disableChevron={
                    years.currentPage === 1 ||
                    years.currentData()[0] <= minValue?.year
                  }
                  {...prevButtonProps}
                >
                  <MdChevronLeft
                    className={twClassNames(COMMON_CLASS_NAMES, {
                      "icon-neutral-weaker":
                        years.currentPage === 1 ||
                        years.currentData()[0] <= minValue?.year,
                      "hover:icon-neutral-weak": !(
                        years.currentPage === 1 ||
                        years.currentData()[0] <= minValue?.year
                      ),
                    })}
                  />
                </TimePickerCarouselButton>
                <TimePickerCarouselButton
                  isLeft={false}
                  onClick={jumpToNextYear}
                  disableChevron={
                    years.maxPage === years.currentPage ||
                    years.currentData()[11] >= maxValue?.year
                  }
                  {...nextButtonProps}
                >
                  <MdChevronRight
                    className={twClassNames(COMMON_CLASS_NAMES, {
                      "icon-neutral-weaker":
                        years.maxPage === years.currentPage ||
                        years.currentData()[11] >= maxValue?.year,
                      "hover:icon-neutral-weak": !(
                        years.maxPage === years.currentPage ||
                        years.currentData()[11] >= maxValue?.year
                      ),
                    })}
                  />
                </TimePickerCarouselButton>
              </>
            )}
            {/* month picker carousel button */}
            {currentPicker === PICKER_LEVELS[1] && (
              <>
                <TimePickerCarouselButton
                  isLeft
                  {...prevButtonProps}
                  disableChevron={
                    title.split(" ")[1] - 1 < minValue?.year ||
                    title.split(" ")[1] <= 1
                  }
                  {...nextButtonProps}
                  onClick={() => {
                    if (
                      title.split(" ")[1] - 1 < minValue?.year ||
                      title.split(" ")[1] <= 1
                    )
                      return;
                    const date = state.focusedDate.set({
                      year: Number(title.split(" ")[1]) - 1,
                    });
                    state.setFocusedDate(date);
                  }}
                >
                  <MdChevronLeft
                    aria-hidden="true"
                    className={twClassNames(COMMON_CLASS_NAMES, {
                      "hover:icon-neutral-weak": !(
                        title.split(" ")[1] - 1 < minValue?.year ||
                        title.split(" ")[1] <= 1
                      ),
                      "icon-neutral-weaker":
                        title.split(" ")[1] - 1 < minValue?.year ||
                        title.split(" ")[1] <= 1,
                    })}
                  />
                </TimePickerCarouselButton>
                <TimePickerCarouselButton
                  isLeft={false}
                  disableChevron={
                    Number(title.split(" ")[1]) + 1 > maxValue?.year ||
                    Number(title.split(" ")[1]) + 1 > 3000
                  }
                  {...nextButtonProps}
                  onClick={() => {
                    if (
                      Number(title.split(" ")[1]) + 1 > maxValue?.year ||
                      Number(title.split(" ")[1]) + 1 > 3000
                    )
                      return;
                    const date = state.focusedDate.set({
                      year: Number(title.split(" ")[1]) + 1,
                    });
                    state.setFocusedDate(date);
                  }}
                >
                  <MdChevronRight
                    className={twClassNames(COMMON_CLASS_NAMES, {
                      "hover:icon-neutral-weak": !(
                        Number(title.split(" ")[1]) + 1 > maxValue?.year ||
                        Number(title.split(" ")[1]) + 1 > 3000
                      ),
                      "icon-neutral-weaker":
                        Number(title.split(" ")[1]) + 1 > maxValue?.year ||
                        Number(title.split(" ")[1]) + 1 > 3000,
                    })}
                  />
                </TimePickerCarouselButton>
              </>
            )}
            {/* date picker carousel button */}
            {currentPicker === PICKER_LEVELS[2] && (
              <>
                <CalendarButton
                  disableChevron={state.isPreviousVisibleRangeInvalid()}
                  {...prevButtonProps}
                >
                  <MdChevronLeft
                    className={twClassNames(COMMON_CLASS_NAMES, {
                      "icon-neutral-weaker":
                        state.isPreviousVisibleRangeInvalid(),
                      "hover:icon-neutral-weak":
                        !state.isPreviousVisibleRangeInvalid(),
                    })}
                  />
                </CalendarButton>
                <CalendarButton
                  disableChevron={state.isNextVisibleRangeInvalid()}
                  {...nextButtonProps}
                >
                  <MdChevronRight
                    className={twClassNames(COMMON_CLASS_NAMES, {
                      "icon-neutral-weaker": state.isNextVisibleRangeInvalid(),
                      "hover:icon-neutral-weak":
                        !state.isNextVisibleRangeInvalid(),
                    })}
                  />
                </CalendarButton>
              </>
            )}
          </div>

          {/* year picker dropdown view */}
          {currentPicker === PICKER_LEVELS[0] && (
            <YearGrid
              state={state}
              value={state.value}
              years={years.currentData()}
              minYear={minValue?.year}
              maxYear={maxValue?.year}
              onClick={targetYear => {
                const date = state.focusedDate.set({ year: targetYear });
                state.setFocusedDate(date);
              }}
            />
          )}

          {/* month picker dropdown view */}
          {currentPicker === PICKER_LEVELS[1] && (
            <MonthGrid
              state={state}
              minMonth={minValue?.month}
              maxMonth={maxValue?.month}
              minYear={minValue?.year}
              maxYear={maxValue?.year}
              onClick={targetMonth => {
                const date = state.focusedDate.set({ month: targetMonth });
                state.setFocusedDate(date);
                state.setFocused(false);
              }}
            />
          )}
          {currentPicker === PICKER_LEVELS[2] && <CalendarGrid state={state} />}
        </>
      )}
    </div>
  );
}

RangeCalendar.propTypes = {
  isLoading: Proptype.bool,
  maxValue: Proptype.shape({
    day: Proptype.number,
    era: Proptype.string,
    month: Proptype.number,
    year: Proptype.number,
  }),
  minValue: Proptype.shape({
    day: Proptype.number,
    era: Proptype.string,
    month: Proptype.number,
    year: Proptype.number,
  }),
};

RangeCalendar.defaultProps = {
  isLoading: false,
  maxValue: null,
  minValue: null,
};
