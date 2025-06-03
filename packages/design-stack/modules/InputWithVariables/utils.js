import { twClassNames } from "@/packages/utils/tailwindUtils";

export const getMentionInputClassName = ({
  disabled,
  readonly,
  wrapperClassName,
  errorText,
}) => {
  const COMMON_INPUT_STYLES =
    "px-3 py-2 sm:text-sm rounded-md border-neutral-strong";
  return {
    mentions: twClassNames("group inline-block w-full", wrapperClassName),
    mentions__input: twClassNames(
      COMMON_INPUT_STYLES,
      "text-transparent caret-neutral-weaker placeholder:text-neutral-weaker",
      {
        "border-danger-weak focus:ring-1 focus:ring-danger-strong focus:border-danger-strong placeholder:text-neutral-weaker":
          errorText,
        "focus:ring-1 focus:ring-brand-strong focus:border-brand-strong":
          !errorText,
        "border-neutral-default cursor-not-allowed": disabled,
      }
    ),
    mentions__highlighter: twClassNames(
      COMMON_INPUT_STYLES,
      "bg-input-default group-hover:bg-neutral-default-hover",
      { "bg-input-default-disabled": disabled },
      { "bg-clip-padding bg-input-default-disabled": readonly }
    ),
    mentions__highlighter__substring: twClassNames("text-neutral-default", {
      "text-neutral-weaker": disabled,
      "text-danger-strongest": errorText,
    }),
    mentions__suggestions__list:
      "w-64 flex flex-col overflow-y-auto rounded-md bg-neutral-default max-h-60 shadow-lg",
    mentions__suggestions__item:
      "flex cursor-pointer space-x-2 px-3 py-2.5 text-sm",
  };
};
