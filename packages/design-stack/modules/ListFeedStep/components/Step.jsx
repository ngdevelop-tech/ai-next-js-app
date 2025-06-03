/**
 * @typedef {Object} StepProps
 * @property {any} children?
 * @property {string} connectorClassName?
 * @property {string} contentClassName?
 * @property {boolean} disabled?
 * @property {(event: React.MouseEvent<any>) => void} onClick?
 * @property {any} stepKey?
 * @property {string} wrapperClassname?
 */

import React, { forwardRef, useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  ICON_DESCRIPTION_GAP_CLASSES,
  LF_ICON_CLASSES,
  LF_ICON_CONTAINER_CLASSES,
  LF_MARGIN_CLASSES,
} from "../../ListFeedsNode/constants/listFeedsNode";
import { ListFeedStepsContext } from "../context/ListFeedStepsContext";

/**
 * @type {React.ForwardRefExoticComponent<StepProps & React.RefAttributes<HTMLDivElement>>}
 */
const Step = forwardRef(
  (
    {
      children,
      connectorClassName,
      contentClassName,
      disabled,
      onClick,
      stepKey,
      wrapperClassname,
    },
    ref
  ) => {
    const {
      activeStep,
      connectorActiveColor,
      feedIconContainerSize,
      feedIconSize,
      iconDescriptionGap,
      onStepClick,
      showConnector,
      spacing,
    } = useContext(ListFeedStepsContext);

    const isActive = activeStep === stepKey;

    return (
      <div
        ref={ref}
        className={twClassNames("flex h-full", wrapperClassname)}
        data-state={isActive ? "active" : "inactive"}
      >
        <div
          className={twClassNames(
            "relative flex items-start justify-center divide-neutral-strong transition-colors duration-300 ease-in-out",
            LF_ICON_CONTAINER_CLASSES[feedIconContainerSize],
            "max-h-full",
            showConnector ? "divide-x" : "divide-x-0",
            isActive ? connectorActiveColor : "",
            connectorClassName
          )}
        >
          <div
            className={twClassNames(
              "relative min-h-full w-1/2",
              LF_ICON_CLASSES[feedIconSize],
              "h-full"
            )}
          />
          <div
            className={twClassNames(
              "relative min-h-full w-1/2",
              LF_ICON_CLASSES[feedIconSize],
              "h-full"
            )}
          />
        </div>

        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          className={twClassNames(
            "flex grow cursor-pointer",
            LF_MARGIN_CLASSES[spacing],
            ICON_DESCRIPTION_GAP_CLASSES[iconDescriptionGap],
            disabled && "cursor-not-allowed opacity-50",
            contentClassName
          )}
          onClick={e => {
            if (!disabled) {
              onClick?.(e, stepKey);
              onStepClick?.(stepKey);
            }
          }}
          onKeyDown={e => {
            if (!disabled && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              onStepClick?.(stepKey);
            }
          }}
        >
          {typeof children === "function" ? children({ isActive }) : children}
        </div>
      </div>
    );
  }
);

Step.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  connectorClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  stepKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  wrapperClassname: PropTypes.string,
};

Step.defaultProps = {
  connectorClassName: "",
  contentClassName: "",
  disabled: false,
  onClick: undefined,
  wrapperClassname: "",
};

Step.displayName = "Step";

export default Step;
