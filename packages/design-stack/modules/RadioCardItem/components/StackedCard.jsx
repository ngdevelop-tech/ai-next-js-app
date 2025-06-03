/**
 * @typedef {Object} StackedCardProps
 * @property {boolean} checked - Indicates if the item is checked
 * @property {string} description - Represents the descriptive label for the RadioItem
 * @property {any} direction - Represents the deirection of the card if inline it shows a circle
 * @property {boolean} disabled - Boolean indicating if the radio card is disabled
 * @property {string} primaryLabel - Represents primary label of the item
 * @property {string} secondaryDescription - Represents secondary description of the item
 * @property {string} secondaryLabel - Represents secondary label of the item
 */

import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { DIRECTIONS } from "../../RadioGroup/constant/radioGroup";

/**
 * @type {React.FC<StackedCardProps>}
 */
function StackedCard({
  checked,
  description,
  direction,
  disabled,
  primaryLabel,
  secondaryDescription,
  secondaryLabel,
}) {
  return (
    <>
      <span className={twClassNames("flex flex-1")}>
        <span className="flex flex-col items-baseline">
          <span
            className={twClassNames(
              "block text-sm font-medium text-neutral-default",
              {
                "text-neutral-weakest": disabled,
              }
            )}
          >
            {primaryLabel}
          </span>
          <span
            className={twClassNames(
              "flex items-center text-sm text-neutral-weaker",
              {
                "text-neutral-weakest": disabled,
              }
            )}
          >
            {description}
          </span>
          <span
            className={twClassNames(
              "mt-6 text-sm font-medium text-neutral-default",
              {
                hidden: direction === DIRECTIONS.BLOCK,
                "text-neutral-weakest": disabled,
              }
            )}
          >
            {secondaryLabel}
          </span>
        </span>
      </span>
      <span
        className={twClassNames(
          "mt-2 flex text-sm sm:mt-0 sm:flex-col sm:text-right",
          {
            hidden: direction === DIRECTIONS.INLINE,
          }
        )}
      >
        <span
          className={twClassNames("font-medium text-neutral-default", {
            "text-neutral-weakest": disabled,
          })}
        >
          {secondaryLabel}
        </span>
        <span
          className={twClassNames("text-neutral-weaker", {
            "text-neutral-weakest": disabled,
          })}
        >
          {secondaryDescription}
        </span>
      </span>
      {direction === DIRECTIONS.INLINE ? (
        <MdCheckCircle
          className={twClassNames(
            { invisible: !checked },
            "h-5 w-5 icon-brand-default",
            { "icon-brand-weaker": disabled }
          )}
          aria-hidden="true"
        />
      ) : null}
      <span
        className={twClassNames(
          "pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent focus:border",
          { "border-brand-strong": checked }
        )}
        aria-hidden="true"
      />
    </>
  );
}

StackedCard.propTypes = {
  /** Indicates if the item is checked */
  checked: PropTypes.bool.isRequired,
  /** Represents the descriptive label for the RadioItem */
  description: PropTypes.string.isRequired,
  /** Represents the deirection of the card if inline it shows a circle */
  direction: PropTypes.oneOf(Object.values(DIRECTIONS)).isRequired,
  /** Boolean indicating if the radio card is disabled */
  disabled: PropTypes.bool.isRequired,
  /** Represents primary label of the item */
  primaryLabel: PropTypes.string.isRequired,
  /** Represents secondary description of the item */
  secondaryDescription: PropTypes.string.isRequired,
  /** Represents secondary label of the item */
  secondaryLabel: PropTypes.string.isRequired,
};

export default StackedCard;
