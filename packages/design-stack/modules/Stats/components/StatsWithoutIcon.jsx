import React from "react";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineArrowOutward,
} from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";

import { STATS_INC, VARIANTS_PROPTYPES } from "../constants/stats";

function StatsWithoutIcon({ monospacedDigits, option, textColor }) {
  return (
    <dd
      className={twClassNames(
        "mt-1 flex items-baseline justify-between md:block lg:flex",
        {
          "tabular-nums": monospacedDigits,
        }
      )}
    >
      <div
        className={twClassNames(
          "flex items-baseline text-2xl font-semibold text-neutral-default",
          textColor
        )}
      >
        {option.stat}
        {option.statSubText && (
          <span className="ml-2 text-sm font-medium text-neutral-weaker">
            {option.statSubText}
          </span>
        )}
      </div>
      <div
        className={twClassNames(
          option.changeType === STATS_INC
            ? "bg-success-weaker text-success-strong"
            : "bg-danger-weaker text-danger-stronger",
          "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
        )}
      >
        {option.changeType === STATS_INC ? (
          <MdOutlineArrowDropUp
            className="-ml-1 mr-0.5 h-5 w-5 shrink-0 self-center icon-success-strong"
            aria-hidden="true"
          />
        ) : (
          <MdOutlineArrowDropDown
            className="-ml-1 mr-0.5 h-5 w-5 shrink-0 self-center icon-danger-strong"
            aria-hidden="true"
          />
        )}

        <span className="sr-only">
          {`${option.changeType === STATS_INC ? "Increased " : "Decreased "}by`}
        </span>
        {option.change}
      </div>
    </dd>
  );
}

StatsWithoutIcon.propTypes = VARIANTS_PROPTYPES;

export default StatsWithoutIcon;
