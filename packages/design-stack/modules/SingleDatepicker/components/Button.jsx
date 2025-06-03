/**
 * @typedef {Object} CalendarButtonProps
 * @property {any} children
 * @property {any} disableChevron
 */

import React, { useRef } from "react";
import { mergeProps, useButton, useFocusRing } from "react-aria";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import Proptypes from "prop-types";

export function CalendarButton(props) {
  const { children, disableChevron } = props;
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  const { focusProps } = useFocusRing();
  return (
    <button
      type="button"
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={twClassNames("rounded-full p-2 outline-none", {
        "cursor-not-allowed": disableChevron,
        "active:bg-neutral-strongest focus:ring-brand-stronger focus:ring-2":
          !disableChevron,
      })}
    >
      {children}
    </button>
  );
}

CalendarButton.propTypes = {
  children: Proptypes.node.isRequired,
  disableChevron: Proptypes.bool.isRequired,
};

export function TimePickerCarouselButton(props) {
  const { children, disableChevron, onClick, isLeft } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? "Previous" : "Next"}
      className={twClassNames("rounded-full p-2 outline-none", {
        "cursor-not-allowed": disableChevron,
        "active:bg-neutral-strongest focus:ring-brand-stronger focus:ring-2":
          !disableChevron,
      })}
    >
      {children}
    </button>
  );
}
TimePickerCarouselButton.propTypes = {
  children: Proptypes.node.isRequired,
  disableChevron: Proptypes.bool.isRequired,
  isLeft: Proptypes.bool,
  onClick: Proptypes.func.isRequired,
};

TimePickerCarouselButton.defaultProps = {
  isLeft: false,
};
