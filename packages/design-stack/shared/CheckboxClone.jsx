import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

const CheckboxClone = ({ checked, active }) => (
  <div className="relative flex items-center">
    <div
      className={twClassNames(
        "h-4 w-4 rounded border border-neutral-strong bg-input-default",
        {
          "bg-brand-default border-none": checked,
          "ring-2 ring-offset-2 ring-brand-strong": active,
        }
      )}
    >
      {checked ? (
        <svg
          viewBox="0 0 16 16"
          fill="var(--icon-neutral-inverse-default)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" />
        </svg>
      ) : null}
    </div>
  </div>
);

CheckboxClone.propTypes = {
  active: PropTypes.bool,
  checked: PropTypes.bool,
};
CheckboxClone.defaultProps = {
  active: false,
  checked: false,
};

export default CheckboxClone;
