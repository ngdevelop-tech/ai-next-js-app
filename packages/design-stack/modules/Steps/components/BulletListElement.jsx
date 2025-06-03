/**
 * @typedef {Object} BulletListElementProps
 * @property {(event: React.MouseEvent<any>) => void} onClick? - Callback function called on click of a step
 */

import React from "react";
import { MdCircle } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { STEP_TYPE, STEPS_STATUS } from "../constants/steps";

/**
 * @type {React.FC<BulletListElementProps>}
 */
const BulletListElement = ({ onClick = null, step }) => {
  const onClickHandler = (event, activeStep) => {
    event.preventDefault();
    if (onClick) onClick(event, activeStep);
  };

  const anchorAriaLabel = `Step: ${step.name} - ${step.status}`;
  const indicatorAriaLabel = `Step ${step.status}`;

  return (
    <li className="cursor-pointer">
      <a
        onClick={e => onClickHandler(e, step)}
        href={step.href || "#"}
        className={twClassNames({
          "block h-2.5 w-2.5 rounded-full":
            step.status === STEPS_STATUS.COMPLETE ||
            step.status === STEPS_STATUS.CURRENT_COMPLETED ||
            step.status === STEPS_STATUS.UPCOMING,
          "relative flex items-center justify-center":
            step.status === STEPS_STATUS.CURRENT,
        })}
        {...(step.status === STEPS_STATUS.CURRENT && {
          "aria-current": "step",
        })}
        tabIndex={step.noFocus ? -1 : 0}
        aria-label={anchorAriaLabel}
      >
        {(step.status === STEPS_STATUS.COMPLETE ||
          step.status === STEPS_STATUS.CURRENT_COMPLETED ||
          step.status === STEPS_STATUS.UPCOMING) && (
          <MdCircle
            className={twClassNames("h-2.5 w-2.5 rounded-full", {
              "icon-brand-default hover:icon-brand-stronger":
                step.status === STEPS_STATUS.COMPLETE ||
                step.status === STEPS_STATUS.CURRENT_COMPLETED,
              "icon-neutral-weaker hover:icon-neutral-weak":
                step.status === STEPS_STATUS.UPCOMING,
            })}
            aria-hidden="true"
            aria-label={indicatorAriaLabel}
          />
        )}
        {step.status === STEPS_STATUS.CURRENT && (
          <>
            <span className="absolute flex h-5 w-5 p-px" aria-hidden="true">
              <span className="h-full w-full rounded-full bg-brand-weaker" />
            </span>
            <MdCircle
              className="relative h-2.5 w-2.5 rounded-full icon-brand-default"
              aria-hidden="true"
              aria-label={indicatorAriaLabel}
            />
          </>
        )}
        <span className="sr-only">{step.name}</span>
      </a>
    </li>
  );
};

BulletListElement.propTypes = {
  /** Callback function called on click of a step  */
  onClick: PropTypes.func,
  /** Step data which is to be rendered */
  step: STEP_TYPE.isRequired,
};

export default BulletListElement;
