import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { VARIANTS_PROPTYPES } from "../constants/stats";

function Simple({ monospacedDigits, option, textColor }) {
  return (
    <dd
      className={twClassNames(
        "mt-1 text-3xl font-semibold tracking-tight text-neutral-default",
        {
          "tabular-nums": monospacedDigits,
        },
        textColor
      )}
    >
      {option.stat}
    </dd>
  );
}

Simple.propTypes = VARIANTS_PROPTYPES;

export default Simple;
