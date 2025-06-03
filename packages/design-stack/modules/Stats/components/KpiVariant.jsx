import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { VARIANTS_PROPTYPES } from "../constants/stats";

function KpiVariant({ monospacedDigits, option, textColor }) {
  return (
    <dd
      className={twClassNames(
        "mt-1 text-xl font-semibold tracking-tight text-neutral-default",
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

KpiVariant.propTypes = VARIANTS_PROPTYPES;
export default KpiVariant;
