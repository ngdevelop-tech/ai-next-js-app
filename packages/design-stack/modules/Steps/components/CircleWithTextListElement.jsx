/**
 * @typedef {Object} CircleWithTextListElementProps
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
 * @type {React.FC<CircleWithTextListElementProps>}
 */
const CircleWithTextListElement = ({
  onClick = null,
  step = [],
  stepIdx,
  stepsLength,
}) => {
  const onClickHandler = (event, activeStep) => {
    event.preventDefault();
    if (onClick) onClick(event, activeStep);
  };

  const connectorStyles = `absolute left-[15px] h-full border-y-0 border-x  ${
    stepIdx !== stepsLength ? "" : "hidden"
  }`;

  const stepItemsStyles = `relative ${
    step?.description ? "items-start" : "items-center"
  }`;

  const anchorAriaLabel = `Step: ${step.name} - ${step.status}`;
  const indicatorAriaLabel = `Step ${step.status}`;
  return (
    <li
      className={twClassNames(
        {
          "pr-8 md: pb-8": stepIdx !== stepsLength,
        },
        "group relative cursor-pointer"
      )}
    >
      {step.status === STEPS_STATUS.CURRENT_COMPLETED && (
        <>
          <div
            className={twClassNames("border-brand-stronger", connectorStyles)}
          />
          <a
            className={`flex items-start ${stepItemsStyles}`}
            onClick={e => onClickHandler(e, step)}
            href={step.href || "#"}
            aria-label={anchorAriaLabel}
          >
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-default group-hover:bg-brand-default-hover">
              <MdCheck
                className="h-5 w-5 icon-neutral-inverse-default"
                aria-hidden="true"
                aria-label={indicatorAriaLabel}
              />
            </span>
            <div className="ml-4">
              {step.name && (
                <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-brand-default">
                  {step.name}
                </p>
              )}
              {step.description && (
                <p className="text-sm font-normal leading-5 text-neutral-weaker">
                  {step.description}
                </p>
              )}
            </div>
          </a>
        </>
      )}
      {step.status === STEPS_STATUS.COMPLETE && (
        <>
          <div
            className={twClassNames("border-brand-stronger", connectorStyles)}
          />
          <a
            className={`flex items-start ${stepItemsStyles}`}
            onClick={e => onClickHandler(e, step)}
            href={step.href || "#"}
            aria-label={anchorAriaLabel}
          >
            <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-default group-hover:bg-brand-default-hover">
              <MdCheck
                className="h-5 w-5 icon-neutral-inverse-default"
                aria-hidden="true"
                aria-label={indicatorAriaLabel}
              />
            </span>
            <div className="ml-4">
              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-neutral-default">
                {step.name}
              </p>
              {step.description && (
                <p className="text-sm font-normal leading-5 text-neutral-weaker">
                  {step.description}
                </p>
              )}
            </div>
          </a>
        </>
      )}
      {step.status === STEPS_STATUS.CURRENT && (
        <>
          <div
            className={twClassNames("border-neutral-default", connectorStyles)}
          />

          <a
            className={`flex items-start ${stepItemsStyles}`}
            onClick={e => onClickHandler(e, step)}
            href={step.href || "#"}
            aria-current="step"
            aria-label={anchorAriaLabel}
          >
            <span className="relative  flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-stronger bg-neutral-default">
              <MdCircle
                className="h-2.5 w-2.5 rounded-full icon-brand-default"
                aria-hidden="true"
                aria-label={indicatorAriaLabel}
              />
            </span>
            <div className="ml-4">
              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-brand-default">
                {step.name}
              </p>
              {step.description && (
                <p className="text-sm font-normal leading-5 text-neutral-weaker">
                  {step.description}
                </p>
              )}
            </div>
          </a>
        </>
      )}
      {step.status === STEPS_STATUS.UPCOMING && (
        <>
          <div
            className={twClassNames("border-neutral-default", connectorStyles)}
          />

          <a
            className={`flex items-start ${stepItemsStyles}`}
            onClick={e => onClickHandler(e, step)}
            href={step.href || "#"}
            tabIndex={step.noFocus ? -1 : 0}
            aria-label={anchorAriaLabel}
          >
            <span className="group relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-neutral-strong bg-neutral-default group-hover:border-neutral-stronger">
              <MdCircle
                className="invisible h-2.5 w-2.5 rounded-full icon-neutral-weaker group-hover:visible"
                aria-hidden="true"
                aria-label={indicatorAriaLabel}
              />
            </span>
            <div className="ml-4">
              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-neutral-weaker">
                {step.name}
              </p>
              {step.description && (
                <p className="text-sm font-normal leading-5 text-neutral-weaker">
                  {step.description}
                </p>
              )}
            </div>
          </a>
        </>
      )}
    </li>
  );
};

CircleWithTextListElement.propTypes = {
  /** Callback function called on click of a step  */
  onClick: PropTypes.func,
  /** Step data which is to be rendered */
  step: STEP_TYPE,
  /* Index value of the current rendered step in a list of steps */
  stepIdx: PropTypes.number.isRequired,
  /* Length of the array of steps */
  stepsLength: PropTypes.number.isRequired,
};

export default CircleWithTextListElement;
