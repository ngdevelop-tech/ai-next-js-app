/**
 * @typedef {Object} DateFieldProps
 * @property {boolean} disabled?
 * @property {string} errorMessage?
 */

import React, { useRef } from "react";
import { useDateField, useDateSegment } from "react-aria";
import { useDateFieldState } from "react-stately";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { createCalendar } from "@internationalized/date";
import PropTypes from "prop-types";

export function DateField(props) {
  const state = useDateFieldState({
    ...props,
    locale: "en-US",
    createCalendar,
  });

  const { disabled, errorMessage } = props;

  const ref = useRef();
  const { fieldProps } = useDateField(props, state, ref);
  return (
    <div
      {...fieldProps}
      ref={ref}
      className="flex w-fit items-center gap-1"
      aria-label="Enter valid date"
    >
      {state.segments.map((segment, i) => (
        <DateSegment
          disabled={disabled}
          key={`${i + 1}`}
          segment={segment}
          state={state}
          errorState={!!errorMessage}
        />
      ))}
    </div>
  );
}

DateField.propTypes = {
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

DateField.defaultProps = {
  disabled: false,
  errorMessage: "",
};

function DateSegment({ segment, state, errorState, disabled }) {
  const ref = useRef();
  const { segmentProps } = useDateSegment(segment, state, ref);
  return (
    <div
      {...(disabled ? null : { ...segmentProps })}
      ref={ref}
      className="group w-fit rounded-sm uppercase outline-none focus:bg-brand-weaker-hover focus:text-neutral-inverse-default"
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      {segment.isPlaceholder ? (
        <span
          aria-hidden="true"
          className={twClassNames(
            "pointer-events-none block w-full text-sm font-normal leading-5 text-neutral-weaker group-focus:text-neutral-default",
            {
              "text-neutral-default": state.value,
            }
          )}
        >
          {segment.placeholder}
        </span>
      ) : (
        <span
          className={twClassNames(
            "m-0 block w-fit text-sm font-normal leading-5 text-neutral-weaker group-focus:text-neutral-default",
            {
              "text-neutral-default": state.value,
              "text-neutral-weaker": disabled,
              "text-danger-strongest": errorState && state.value,
            }
          )}
        >
          {segment.text.replace(/(^|\D)(\d)(?!\d)/g, "$10$2")}
        </span>
      )}
    </div>
  );
}

DateSegment.propTypes = {
  disabled: PropTypes.bool,
  errorState: PropTypes.bool,
  segment: PropTypes.shape({
    isEditable: PropTypes.bool,
    isPlaceholder: PropTypes.bool,
    maxValue: PropTypes.number,
    placeholder: PropTypes.string,
    text: PropTypes.string,
  }),
  state: PropTypes.shape({
    value: PropTypes.shape({}),
  }),
};

DateSegment.defaultProps = {
  segment: {},
  state: {},
  errorState: false,
  disabled: false,
};
