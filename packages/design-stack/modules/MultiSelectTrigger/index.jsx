import React, { useContext } from "react";
import { MdChevronRight, MdUnfoldMore } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import { MULTISELECT_TYPES } from "../MultiSelect/constants/multiSelect";
import { MultiSelectContextData } from "../MultiSelect/context";
import TruncateText from "../TruncateText";

const MultiSelectTrigger = ({ shouldUseTriggerData }) => {
  const { selectedOptions, minimal, type } = useContext(MultiSelectContextData);

  const labelSeperator = (
    <MdChevronRight size={20} className="icon-neutral-weaker" />
  );

  const labelKeys = { label: "title", icon: "icon" };
  if (shouldUseTriggerData || type === MULTISELECT_TYPES.ADVANCED_SELECTOR) {
    labelKeys.label = "triggerLabel";
    labelKeys.icon = "triggerIcon";
  }
  const labelsForAllLevel = Object.values(selectedOptions)
    .filter(level => level && level[labelKeys.label])
    .map(level => ({
      label: level[labelKeys.label],
      icon: level[labelKeys.icon],
    }));

  return (
    <Popover.Trigger
      asChild
      className={twClassNames(
        "flex min-w-[240px] max-w-[480px] items-center gap-2 rounded-md border border-neutral-strong bg-input-default px-3 py-[9px] text-sm font-medium text-neutral-weak shadow-sm hover:bg-input-default-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-stronger disabled:cursor-not-allowed disabled:border-neutral-default disabled:bg-input-default-disabled disabled:shadow-none",
        {
          "bg-transparent border-0 shadow-none p-1": minimal,
        }
      )}
    >
      <button type="button" className="flex justify-between">
        <div className="flex items-center justify-center gap-2">
          {labelsForAllLevel
            ? labelsForAllLevel.map((level, i) => (
                <>
                  <div className="flex gap-2">
                    <div className="shrink-0">{level.icon}</div>
                    <TruncateText
                      tooltipAriaLabel={level.label}
                      hidetooltipTriggerIcon
                    >
                      {level.label}
                    </TruncateText>
                  </div>
                  {i < labelsForAllLevel.length - 1 && labelSeperator}
                </>
              ))
            : "Select..."}
        </div>
        <MdUnfoldMore size={20} className="icon-neutral-weak" />
      </button>
    </Popover.Trigger>
  );
};

export const MultiSelectTriggerProps = {
  /** Should use data provided in triggerLabel and triggerIcon keys or simply the title and icon keys. */
  shouldUseTriggerData: PropTypes.bool,
};

MultiSelectTrigger.propTypes = MultiSelectTriggerProps;

MultiSelectTrigger.defaultProps = {
  shouldUseTriggerData: false,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-multiselect--primary
 * @zeroHeight
 * @end
 */

export default MultiSelectTrigger;
