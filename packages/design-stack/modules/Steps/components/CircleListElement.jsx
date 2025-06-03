/**
 * @typedef {Object} CircleListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 * @property {number} stepIdx
 * @property {number} stepsLength
 */

import React from "react";
import { MdCheck, MdCircle } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { STEP_TYPE, STEPS_STATUS } from "../constants/steps";

/**
 * @type {React.FC<CircleListElementProps>}
 */
const CircleListElement = ({ onClick = null, step, stepIdx, stepsLength }) => {
  const onClickHandler = (event, activeStep) => {
    event.preventDefault();
    if (onClick) onClick(event, activeStep);
  };

  const anchorAriaLabel = `Step: ${step.name} - ${step.status}`;
  const indicatorAriaLabel = `Step ${step.status}`;

  return (
    <li
      className={twClassNames(
        {
          "pr-8 sm:pr-20": stepIdx !== stepsLength,
        },
        "relative cursor-pointer"
      )}
    >
      {step.status === STEPS_STATUS.CURRENT_COMPLETED && (
        <>
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-x-0 border-y border-brand-stronger" />
          </div>
          <a
            onClick={e => onClickHandler(e, step)}
            href={step.href || "#"}
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-default hover:bg-brand-default-hover"
            aria-label={anchorAriaLabel}
          >
            <MdCheck
              className="h-5 w-5 icon-neutral-inverse-default"
              aria-hidden="true"
              aria-label={indicatorAriaLabel}
            />
            <span className="sr-only">{step.name}</span>
          </a>
        </>
      )}
      {step.status === STEPS_STATUS.COMPLETE && (
        <>
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-x-0 border-y border-brand-stronger" />
          </div>
          <a
            onClick={e => onClickHandler(e, step)}
            href={step.href || "#"}
            className="relative flex h-8 w-8 items-center justify-center rounded-full bg-brand-default hover:bg-brand-default-hover"
            aria-label={anchorAriaLabel}
          >
            <MdCheck
              className="h-5 w-5 icon-neutral-inverse-default"
              aria-hidden="true"
              aria-label={indicatorAriaLabel}
            />
            <span className="sr-only">{step.name}</span>
          </a>
        </>
      )}
      {step.status === STEPS_STATUS.CURRENT && (
        <>
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-x-0 border-y border-neutral-default" />
          </div>
          <a
            onClick={e => onClickHandler(e, step)}
            href={step.href || "#"}
            className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-stronger bg-neutral-default"
            aria-current="step"
            aria-label={anchorAriaLabel}
          >
            <span
              className="h-2.5 w-2.5 rounded-full bg-brand-default"
              aria-hidden="true"
              aria-label={indicatorAriaLabel}
            />
            <span className="sr-only">{step.name}</span>
          </a>
        </>
      )}
      {step.status === STEPS_STATUS.UPCOMING && (
        <>
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-x-0 border-y border-neutral-default" />
          </div>
          <a
            onClick={e => onClickHandler(e, step)}
            href={step.href || "#"}
            className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-strong bg-neutral-default hover:border-neutral-stronger"
            tabIndex={step.noFocus ? -1 : 0}
            aria-label={anchorAriaLabel}
          >
            <MdCircle
              className="invisible h-2.5 w-2.5 rounded-full icon-neutral-weaker group-hover:visible"
              aria-hidden="true"
              aria-label={indicatorAriaLabel}
            />
            <span className="sr-only">{step.name}</span>
          </a>
        </>
      )}
    </li>
  );
};

CircleListElement.propTypes = {
  /** Callback function called on click of a step  */
  onClick: PropTypes.func,
  /** Step data which is to be rendered */
  step: STEP_TYPE.isRequired,
  /* Index value of the current rendered step in a list of steps */
  stepIdx: PropTypes.number.isRequired,
  /* Length of the array of steps */
  stepsLength: PropTypes.number.isRequired,
};

export default CircleListElement;
