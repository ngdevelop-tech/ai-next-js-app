import { twClassNames } from "@/packages/utils/tailwindUtils";

import { SMALL_TABS_CLASSES, TAB_SHAPE } from "./constants/tabs";

export const effectiveClasses = ({
  isCurrent,
  isContained,
  tabIdx,
  shape,
  smallTabsTheme,
  totalTabs,
  isFullWidth,
  isSlideableTabs,
  disableFullWidthBorder,
}) =>
  twClassNames(
    "tabs-item focus:z-10",
    isSlideableTabs
      ? "focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-strong"
      : "focus-visible:outline-brand-strong",
    isContained && isCurrent
      ? "text-neutral-default"
      : "text-neutral-weaker hover:text-neutral-weak",
    {
      "rounded-l-lg": isContained && tabIdx === 0,
      "rounded-r-lg": isContained && tabIdx === totalTabs - 1,
      "group relative min-w-0 flex-1 overflow-hidden bg-neutral-default px-4 py-4 text-center text-sm font-medium hover:bg-neutral-default-hover":
        isContained,
      "group whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex border-transparent text-neutral-weaker hover:text-neutral-weak hover:border-neutral-strong":
        shape === TAB_SHAPE.SIMPLE && !isContained,
      "hover:text-brand-default hover:border-brand-strong":
        shape === TAB_SHAPE.SIMPLE && !isContained && isCurrent,
      "whitespace-nowrap px-3 py-2 font-medium text-sm rounded-md text-neutral-weaker hover:text-neutral-weak":
        shape === TAB_SHAPE.PILL && !isContained,

      "border-brand-strong text-brand-default":
        shape === TAB_SHAPE.SIMPLE && isCurrent && !isContained,

      "bg-brand-weaker text-brand-strong hover:text-brand-strong":
        shape === TAB_SHAPE.PILL && isCurrent && !isContained,

      [`w-1/${totalTabs} flex justify-center`]: isFullWidth && !isContained,

      "focus-visible:-mb-px": isSlideableTabs && !disableFullWidthBorder,

      "px-4 py-0 items-center text-neutral-default h-9 font-normal":
        smallTabsTheme,
    },
    smallTabsTheme &&
      isCurrent &&
      `${SMALL_TABS_CLASSES[smallTabsTheme]}font-medium`
  );
