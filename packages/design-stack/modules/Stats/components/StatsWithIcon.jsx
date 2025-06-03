import React from "react";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineArrowOutward,
} from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";

import Hyperlink from "../../Hyperlink";
import { STATS_INC, VARIANTS_PROPTYPES } from "../constants/stats";

function StatsWithIcon({ monospacedDigits, option, textColor }) {
  return (
    <dd
      className={twClassNames("ml-16 flex items-baseline pb-6 sm:pb-7", {
        "tabular-nums": monospacedDigits,
      })}
    >
      <p className={twClassNames("text-2xl font-semibold", textColor)}>
        {option.stat}
      </p>
      <p
        className={twClassNames(
          option.changeType === STATS_INC
            ? "text-success-default"
            : "text-danger-default",
          "ml-2 flex items-baseline text-sm font-semibold"
        )}
      >
        {option.changeType === STATS_INC ? (
          <MdOutlineArrowDropUp
            className="h-5 w-5 shrink-0 self-center icon-success-strong"
            aria-hidden="true"
          />
        ) : (
          <MdOutlineArrowDropDown
            className="h-5 w-5 shrink-0 self-center icon-danger-strong"
            aria-hidden="true"
          />
        )}

        <span className="sr-only">
          {`${option.changeType === STATS_INC ? "Increased " : "Decreased "}by`}
        </span>
        {option.change}
      </p>
      <div className="absolute inset-x-0 bottom-0 bg-neutral-strong p-4 sm:px-6">
        <Hyperlink
          href={option.link}
          wrapperClassName="text-sm font-medium text-brand-default"
          aria-label={`Read more about ${option.linkText}`}
        >
          {option.linkText}
        </Hyperlink>
      </div>
    </dd>
  );
}

StatsWithIcon.propTypes = VARIANTS_PROPTYPES;

export default StatsWithIcon;
