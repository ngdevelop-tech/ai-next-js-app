/**
 * @typedef {Object} SimpleListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 * @property {number} stepIdx
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { STEP_TYPE, STEPS_STATUS } from "../constants/steps";

/**
 * @type {React.FC<SimpleListElementProps>}
 */
const SimpleListElement = ({ onClick = null, step, stepIdx }) => {
  const onClickHandler = (event, activeStep) => {
    event.preventDefault();
    if (onClick) onClick(event, activeStep);
  };

  const anchorAriaLabel = `Step: ${step.name} - ${step.status}`;

  return (
    <li className="cursor-pointer md:flex-1">
      <a
        onClick={e => onClickHandler(e, step)}
        href={step.href || "#"}
        className={twClassNames("flex flex-col border-l-4 py-2 pl-4", {
          "group border-brand-stronger hover:border-brand-strong md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0":
            step.status === STEPS_STATUS.COMPLETE ||
            step.status === STEPS_STATUS.CURRENT_COMPLETED,
          "border-brand-stronger md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0":
            step.status === STEPS_STATUS.CURRENT,
          "group border-neutral-default hover:border-neutral-strong md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0":
            step.status === STEPS_STATUS.UPCOMING,
        })}
        aria-label={anchorAriaLabel}
        {...(step.status === STEPS_STATUS.CURRENT && {
          "aria-current": "step",
        })}
        tabIndex={step.noFocus ? -1 : 0}
      >
        <span
          className={twClassNames("text-sm font-medium", {
            "text-brand-default group-hover:text-brand-stronger":
              step.status === STEPS_STATUS.COMPLETE ||
              step.status === STEPS_STATUS.CURRENT_COMPLETED,
            "text-brand-default": step.status === STEPS_STATUS.CURRENT,
            "text-neutral-weaker group-hover:text-neutral-weak":
              step.status === STEPS_STATUS.UPCOMING,
          })}
        >
          Step - {stepIdx + 1}
        </span>
        <span className="text-sm font-medium text-neutral-default">
          {step.name}
        </span>
      </a>
    </li>
  );
};

SimpleListElement.propTypes = {
  /** Callback function called on click of a step  */
  onClick: PropTypes.func,
  /** Step data which is to be rendered */
  step: STEP_TYPE.isRequired,
  /* Index value of the current rendered step in a list of steps */
  stepIdx: PropTypes.number.isRequired,
};

export default SimpleListElement;
