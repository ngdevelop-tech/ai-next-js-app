import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

const GroupOptionLabel = ({ option }) => (
  <>
    <li
      role="presentation"
      data-group-label={option.label}
      data-type="group"
      className={twClassNames(
        "group peer pointer-events-none relative select-none bg-raised-default pl-2 pr-9 pt-2 text-xs font-semibold uppercase leading-5 tracking-wide text-neutral-weaker peer-odd:pt-4 peer-even:pt-4"
      )}
    >
      {option.label}
    </li>
  </>
);

GroupOptionLabel.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string,
  }),
};

GroupOptionLabel.defaultProps = {
  option: {
    label: "",
  },
};

export default GroupOptionLabel;
