/**
 * @typedef {Object} PanelListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 * @property {number} stepIdx
 * @property {number} stepsLength
 */

import React from "react";
import { MdCheck } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { STEP_TYPE, STEPS_STATUS } from "../constants/steps";

/**
 * @type {React.FC<PanelListElementProps>}
 */
const PanelListElement = ({ onClick = null, step, stepIdx, stepsLength }) => {
  const onClickHandler = (event, activeStep) => {
    event.preventDefault();
    if (onClick) onClick(event, activeStep);
  };
  const commonStyleClass = "flex items-start px-6 py-5 text-sm font-medium";
  const panelItemStyles = twClassNames(
    stepIdx === 0 ? "rounded-t-md border-b-0 md:rounded-none" : "",
    stepIdx === 3 ? "border-b-0" : "",
    stepIdx === stepsLength ? "rounded-b-md border-t-0 md:rounded-none" : "",
    "foucs:outline-offset-0 group relative z-10 block h-full border border-neutral-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-strong lg:border-0"
  );

  const anchorAriaLabel = `Step: ${step.name} - ${step.status}`;
  const indicatorAriaLabel = `Step ${step.status}`;

  return (
    <li className="relative cursor-pointer lg:flex-1">
      {step.status === STEPS_STATUS.CURRENT_COMPLETED && (
        <a
          href={step.href || "#"}
          className={panelItemStyles}
          onClick={e => onClickHandler(e, step)}
          aria-label={anchorAriaLabel}
        >
          <span
            className="absolute left-0 top-0 h-full border-x-2 border-y-0 border-brand-stronger lg:bottom-0 lg:top-auto lg:h-1 lg:w-full lg:border-b-4 lg:border-l-0"
            aria-hidden="true"
          />
          <span
            className={twClassNames(
              stepIdx !== 0 ? "lg:pl-9" : "",
              commonStyleClass
            )}
          >
            <span className="shrink-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-default">
                <MdCheck
                  className="h-6 w-6 icon-neutral-inverse-default"
                  aria-hidden="true"
                  aria-label={indicatorAriaLabel}
                />
              </span>
            </span>
            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
              <span className="text-sm font-medium text-brand-default">
                {step.name}
              </span>
              <span className="text-sm font-medium text-neutral-weaker">
                {step.description}
              </span>
            </span>
          </span>
        </a>
      )}
      {step.status === STEPS_STATUS.COMPLETE && (
        <a
          href={step.href || "#"}
          className={panelItemStyles}
          onClick={e => onClickHandler(e, step)}
          aria-label={anchorAriaLabel}
        >
          <span
            className="absolute left-0 top-0 h-full border-x-2 border-y-0 border-transparent group-hover:border-neutral-strong lg:bottom-0 lg:top-auto  lg:h-1 lg:w-full lg:border-b-4 lg:border-l-0"
            aria-hidden="true"
          />
          <span
            className={twClassNames(
              stepIdx !== 0 ? "lg:pl-9" : "",
              commonStyleClass
            )}
          >
            <span className="shrink-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-default">
                <MdCheck
                  className="h-6 w-6 icon-neutral-inverse-default"
                  aria-hidden="true"
                  aria-label={indicatorAriaLabel}
                />
              </span>
            </span>
            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
              <span className="text-sm font-medium">{step.name}</span>
              <span className="text-sm font-medium text-neutral-weaker">
                {step.description}
              </span>
            </span>
          </span>
        </a>
      )}
      {step.status === STEPS_STATUS.CURRENT && (
        <a
          href={step.href || "#"}
          aria-current="step"
          className={panelItemStyles}
          onClick={e => onClickHandler(e, step)}
          aria-label={anchorAriaLabel}
        >
          <span
            className="absolute left-0 top-0 h-full border-x-2 border-y-0 border-brand-stronger lg:bottom-0 lg:top-auto lg:h-1 lg:w-full lg:border-b-4 lg:border-l-0"
            aria-hidden="true"
            aria-label={indicatorAriaLabel}
          />
          <span
            className={twClassNames(
              stepIdx !== 0 ? "lg:pl-9" : "",
              commonStyleClass
            )}
          >
            <span className="shrink-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-stronger">
                <span className="text-brand-default">{stepIdx + 1}</span>
              </span>
            </span>
            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
              <span className="text-sm font-medium text-brand-default">
                {step.name}
              </span>
              <span className="text-sm font-medium text-neutral-weaker">
                {step.description}
              </span>
            </span>
          </span>
        </a>
      )}
      {step.status === STEPS_STATUS.UPCOMING && (
        <a
          href={step.href || "#"}
          className={panelItemStyles}
          onClick={e => onClickHandler(e, step)}
          tabIndex={step.noFocus ? -1 : 0}
          aria-label={anchorAriaLabel}
        >
          <span
            className="absolute left-0 top-0 h-full border-x-2 border-y-0 border-transparent group-hover:border-neutral-strong lg:bottom-0 lg:top-auto  lg:h-1 lg:w-full lg:border-b-4 lg:border-l-0"
            aria-hidden="true"
            aria-label={indicatorAriaLabel}
          />
          <span
            className={twClassNames(
              stepIdx !== 0 ? "lg:pl-9" : "",
              commonStyleClass
            )}
          >
            <span className="shrink-0">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-strong">
                <span className="text-neutral-weaker">{stepIdx + 1}</span>
              </span>
            </span>
            <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
              <span className="text-sm font-medium text-neutral-weaker">
                {step.name}
              </span>
              <span className="text-sm font-medium text-neutral-weaker">
                {step.description}
              </span>
            </span>
          </span>
        </a>
      )}
      {stepIdx !== 0 ? (
        <>
          {/* Separator */}
          <div
            className="absolute inset-0 hidden w-3 lg:block"
            aria-hidden="true"
          >
            <svg
              className="h-full w-full text-neutral-inverse-weakest"
              viewBox="0 0 12 82"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0.5 0V31L10.5 41L0.5 51V82"
                stroke="currentcolor"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </>
      ) : null}
    </li>
  );
};

PanelListElement.propTypes = {
  /** Callback function called on click of a step  */
  onClick: PropTypes.func,
  /** Step data which is to be rendered */
  step: STEP_TYPE.isRequired,
  /* Index value of the current rendered step in a list of steps */
  stepIdx: PropTypes.number.isRequired,
  /* Length of the array of steps */
  stepsLength: PropTypes.number.isRequired,
};

export default PanelListElement;
