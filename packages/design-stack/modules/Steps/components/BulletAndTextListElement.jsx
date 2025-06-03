/**
 * @typedef {Object} BulletAndTextListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 */

import React from "react";
import { MdCheckCircle, MdCircle } from "react-icons/md";
import PropTypes from "prop-types";

import { STEP_TYPE, STEPS_STATUS } from "../constants/steps";

/**
 * @type {React.FC<BulletAndTextListElementProps>}
 */
const BulletAndTextListElement = ({ onClick = null, step }) => {
  const onClickHandler = (event, activeStep) => {
    event.preventDefault();
    if (onClick) onClick(event, activeStep);
  };

  const anchorAriaLabel = `Step: ${step.name} - ${step.status}`;
  const indicatorAriaLabel = `Step ${step.status}`;

  return (
    <li className="cursor-pointer">
      {step.status === STEPS_STATUS.CURRENT_COMPLETED && (
        <a
          href={step.href || "#"}
          className="group"
          onClick={e => onClickHandler(e, step)}
          aria-label={anchorAriaLabel}
        >
          <span className="flex items-start">
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
              <MdCheckCircle
                className="h-full w-full icon-brand-default group-hover:icon-brand-stronger"
                aria-hidden="true"
                aria-label={indicatorAriaLabel}
              />
            </span>
            <span className="ml-3 text-sm font-medium text-brand-default">
              {step.name}
            </span>
          </span>
        </a>
      )}
      {step.status === STEPS_STATUS.COMPLETE && (
        <a
          href={step.href || "#"}
          className="group"
          onClick={e => onClickHandler(e, step)}
          aria-label={anchorAriaLabel}
        >
          <span className="flex items-start">
            <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
              <MdCheckCircle
                className="h-full w-full icon-brand-default group-hover:icon-brand-stronger"
                aria-hidden="true"
                aria-label={indicatorAriaLabel}
              />
            </span>
            <span className="ml-3 text-sm font-medium text-neutral-weaker group-hover:text-neutral-default">
              {step.name}
            </span>
          </span>
        </a>
      )}
      {step.status === STEPS_STATUS.CURRENT && (
        <a
          href={step.href || "#"}
          className="flex items-start"
          aria-current="step"
          onClick={e => onClickHandler(e, step)}
          aria-label={anchorAriaLabel}
        >
          <span
            className="relative flex h-5 w-5 shrink-0 items-center justify-center"
            aria-hidden="true"
            aria-label={indicatorAriaLabel}
          >
            <span className="absolute h-4 w-4 rounded-full bg-brand-weaker" />
            <span className="relative block h-2 w-2 rounded-full bg-brand-default" />
          </span>
          <span className="ml-3 text-sm font-medium text-brand-default">
            {step.name}
          </span>
        </a>
      )}
      {step.status === STEPS_STATUS.UPCOMING && (
        <a
          href={step.href || "#"}
          className="group"
          onClick={e => onClickHandler(e, step)}
          tabIndex={step.noFocus ? -1 : 0}
          aria-label={anchorAriaLabel}
        >
          <div className="flex items-start">
            <div
              className="relative flex h-5 w-5 shrink-0 items-center justify-center"
              aria-hidden="true"
            >
              <MdCircle
                className="h-2 w-2 rounded-full icon-neutral-weaker group-hover:icon-neutral-weak"
                aria-hidden="true"
                aria-label={indicatorAriaLabel}
              />
            </div>
            <p className="ml-3 text-sm font-medium text-neutral-weaker group-hover:text-neutral-default">
              {step.name}
            </p>
          </div>
        </a>
      )}
    </li>
  );
};

BulletAndTextListElement.propTypes = {
  /** Callback function called on click of a step  */
  onClick: PropTypes.func,
  /** Step data which is to be rendered */
  step: STEP_TYPE.isRequired,
};

export default BulletAndTextListElement;
