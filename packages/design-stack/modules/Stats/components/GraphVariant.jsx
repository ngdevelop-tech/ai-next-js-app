import React from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";

import Hyperlink from "../../Hyperlink";
import { STATS_INC, VARIANTS_PROPTYPES } from "../constants/stats";

function GraphVariant({ monospacedDigits, option, textColor }) {
  return (
    <dd
      className={twClassNames("flex flex-col", {
        "tabular-nums": monospacedDigits,
      })}
    >
      <div className="flex items-baseline pb-4 pt-2">
        {option.stat && (
          <p
            className={twClassNames(
              "text-2xl font-semibold text-neutral-default",
              textColor
            )}
          >
            {option.stat}
          </p>
        )}
        {option.statSubText && (
          <p className="ml-2 text-sm font-medium text-neutral-weaker">
            {option.statSubText}
          </p>
        )}
        {option.change && (
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
                className="h-5 w-5 shrink-0 self-center icon-success-weak"
                aria-hidden="true"
              />
            ) : (
              <MdOutlineArrowDropDown
                className="h-5 w-5 shrink-0 self-center icon-danger-weak"
                aria-hidden="true"
              />
            )}
            <span className="sr-only">
              {`${
                option.changeType === STATS_INC ? "Increased " : "Decreased "
              }by`}
            </span>
            {option.change}
          </p>
        )}
      </div>
      {option?.graph && (
        <div className={twClassNames("max-h-[248px] min-h-[100px]")}>
          {option.graph}
        </div>
      )}
      {option.link && (
        <div className="absolute inset-x-0 bottom-0 bg-neutral-strong p-4 sm:px-6">
          <Hyperlink
            href={option.link}
            wrapperClassName="text-sm font-medium text-brand-default"
            aria-label={`Read more about ${option.linkText}`}
          >
            {option.linkText}
          </Hyperlink>
        </div>
      )}
    </dd>
  );
}
GraphVariant.propTypes = VARIANTS_PROPTYPES;
export default GraphVariant;
