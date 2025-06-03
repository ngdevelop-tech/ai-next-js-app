import React, { isValidElement } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";

export const renderSingleOptions = (opts, placeholder, errorText) => {
  if (opts?.value && opts?.label)
    return (
      <span
        className={twClassNames("flex items-center truncate", {
          "text-danger-strongest": errorText,
        })}
      >
        {opts?.image && (
          <img
            className="mr-2 h-6 w-6 shrink-0 rounded-full"
            src={opts.image}
            alt=""
          />
        )}
        {opts?.label}
      </span>
    );
  return placeholder;
};

export const renderMultiOptions = (opts, placeholder, errorText) => {
  if (opts.length)
    return opts?.map((val, index) => (
      <span
        key={val.value}
        className={twClassNames("mr-1 inline", {
          "inline-flex": isValidElement(val.label),
          "text-danger-strongest": errorText,
        })}
      >
        {val.label}
        {index < opts.length - 1 ? "," : null}
      </span>
    ));
  return placeholder;
};
