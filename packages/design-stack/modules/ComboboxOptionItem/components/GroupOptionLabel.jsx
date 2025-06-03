/**
 * Represents the properties for the GroupOptionLabel component.
 * @typedef {Object} GroupOptionLabelProps
 * @property {Object} option - The option object representing the group.
 * @property {string} option.label - The label text to display for the group header.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * Renders a non-interactive list item used as a header for a group of options
 * within a Combobox or similar list structure. It displays the group's label.
 *
 * @type {React.FC<GroupOptionLabelProps>}
 */
const GroupOptionLabel = ({ option = { label: "" } }) => (
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

export default GroupOptionLabel;
