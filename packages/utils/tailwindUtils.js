import classNames from "classnames";
import { extendTailwindMerge } from "tailwind-merge";

import {
  BG_TOKENS,
  ICON_TOKENS,
  SURFACE_TOKENS,
  TEXT_TOKENS,
} from "./constants";

const textTokens = TEXT_TOKENS;

const iconTokens = ICON_TOKENS;

const surfaceTokens = SURFACE_TOKENS;

const backgroundTokens = BG_TOKENS;

function formatColors(theme) {
  const colors = [];
  Object.entries(theme).forEach(([key, color]) => {
    if (typeof color === "string") {
      colors.push(key);
    } else {
      const colorGroup = Object.keys(color).map(subKey =>
        subKey === "DEFAULT" ? "" : subKey
      );
      colors.push({ [key]: colorGroup });
    }
  });
  return colors;
}

const customTwMerge = extendTailwindMerge({
  classGroups: {
    color: [
      { text: formatColors(textTokens) },
      {
        icon: Object.keys(iconTokens),
      },
    ],
    backgroundColor: [
      { bg: formatColors(backgroundTokens) },
      {
        surface: Object.keys(surfaceTokens),
      },
    ],
  },
});

export const twClassNames = (...args) => customTwMerge(classNames(...args));
