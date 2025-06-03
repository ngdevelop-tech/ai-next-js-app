/**
 * @typedef {Object} KeyValueProps
 * @property {string} label - Label text to be shown
 * @property {string} labelClassNames? - A custom CSS class name to style the label node
 * @property {boolean} monospacedDigits? - Boolean prop to use numeric glyphs that have uniform/tabular widths (rather than proportional).
 * @property {any} value? - Value text to be shown
 * @property {string} valueClassNames? - A custom CSS class name to style the value node
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<KeyValueProps>}
 */
const KeyValue = ({
  label,
  labelClassNames = "",
  value,
  valueClassNames = "",
  monospacedDigits = false,
}) => (
  <>
    <div
      className={twClassNames(
        "text-sm font-medium text-neutral-weaker",
        labelClassNames
      )}
    >
      {label}
    </div>
    <div
      className={twClassNames("text-sm text-neutral-default", valueClassNames, {
        "tabular-nums": monospacedDigits,
      })}
    >
      {value}
    </div>
  </>
);

KeyValue.propTypes = {
  /** Label text to be shown */
  label: PropTypes.string.isRequired,
  /** A custom CSS class name to style the label node */
  labelClassNames: PropTypes.string,
  /** Boolean prop to use numeric glyphs that have uniform/tabular widths (rather than proportional). */
  monospacedDigits: PropTypes.bool,
  /** Value text to be shown */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** A custom CSS class name to style the value node */
  valueClassNames: PropTypes.string,
};

export default KeyValue;
