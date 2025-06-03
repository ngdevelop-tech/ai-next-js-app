/**
 * Represents an individual option within a SelectMenu.
 * It handles rendering based on whether the menu is multi-select or single-select,
 * displays checkmarks or checkboxes accordingly, and supports grouping.
 *
 * @typedef {Object} SelectMenuOptionItemProps
 * @property {('left'|'right')} [checkPosition='left'] - Controls the position ('left' or 'right') of the check icon when an item is selected in a single-select menu.
 * @property {boolean} [disabled=false] - If true, the option item will be disabled and cannot be selected.
 * @property {boolean} [haveGroups=false] - Indicates if the options data contains groups, used for styling adjustments.
 * @property {boolean | null} [isMultiOverrideValue=null] - Allows overriding the multi-select behavior determined by the parent SelectMenu context for this specific option. If set, it forces the option to render as either multi-select (true) or single-select (false), ignoring the context. If null, it inherits the context's behavior.
 * @property {object} option - The data object representing the option item.
 * @property {string} [option.image] - URL of an image to display next to the option label.
 * @property {boolean} [option.isGroupLabelOption] - If true, this option acts as a non-selectable label for a group.
 * @property {string} option.label - The text label displayed for the option. This is required.
 * @property {string} [option.name] - The name attribute, often used when the option is part of a form (e.g., for the checkbox in multi-select).
 * @property {string | number} option.value - The unique value associated with the option. This is required.
 * @property {React.ReactNode} [option.visualNode] - A custom React node to render instead of the plain text label.
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to apply to the wrapper element of the option item.
 */

import React, { forwardRef, useContext } from "react";
import { MdCheck } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Listbox } from "@headlessui/react";
import PropTypes from "prop-types";

import CheckboxClone from "../../shared/CheckboxClone";
import GroupOptionLabel from "../../shared/GroupOptionLabel";
import { CHECK_POSITION } from "../SelectMenu/constants/selectMenu";
import { SelectMenuContextData } from "../SelectMenu/selectMenuContext";

/**
 * Renders an individual option within a SelectMenu component.
 *
 * This component adapts its appearance based on the SelectMenu's configuration (single/multi-select)
 * and the properties of the option data provided. It integrates with Headless UI's Listbox.Option
 * for accessibility and state management.
 *
 * @component
 * @example
 * // Single select option
 * <SelectMenuOptionItem
 *   option={{ label: 'Option 1', value: '1' }}
 *   checkPosition="right"
 * />
 *
 * @example
 * // Multi select option (within a SelectMenu context where isMulti is true)
 * <SelectMenuOptionItem
 *   option={{ label: 'Option A', value: 'a', name: 'optionA' }}
 * />
 *
 * @example
 * // Disabled option
 * <SelectMenuOptionItem
 *   option={{ label: 'Disabled Option', value: 'disabled' }}
 *   disabled={true}
 * />
 *
 * @example
 * // Option with an image
 * <SelectMenuOptionItem
 *   option={{ label: 'User Option', value: 'user1', image: '/path/to/avatar.png' }}
 * />
 *
 * @see SelectMenu
 * @see {@link https://headlessui.com/react/listbox#listbox-option} Headless UI Listbox.Option documentation
 *
 * @accessibility
 * - Integrates with Headless UI Listbox for managing ARIA attributes (`aria-selected`, `role="option"`).
 * - Handles focus states (`active`) visually.
 * - Disabled state uses `aria-disabled` via Headless UI and visual styling.
 * - In multi-select mode, renders a visually hidden but accessible checkbox input.
 *
 * @type {React.ForwardRefExoticComponent<SelectMenuOptionItemProps & React.RefAttributes<HTMLLIElement>>}
 */
const SelectMenuOptionItem = forwardRef(
  (
    {
      checkPosition,
      disabled,
      isMultiOverrideValue,
      option,
      wrapperClassName,
      haveGroups,
    },
    ref
  ) => {
    const selectMenuCtxData = useContext(SelectMenuContextData);
    const selectMenuCtx = { ...selectMenuCtxData };
    if (isMultiOverrideValue !== null) {
      selectMenuCtx.isMulti = isMultiOverrideValue;
    }

    if (option.isGroupLabelOption) {
      return <GroupOptionLabel option={option} />;
    }

    return (
      <Listbox.Option
        ref={ref}
        key={option.value}
        className={({ active }) =>
          twClassNames(
            "cursor-pointer bg-raised-default text-neutral-default",
            {
              "bg-raised-default-hover": active, // gray bg for all active states
              "py-2 pl-3 pr-9":
                checkPosition === CHECK_POSITION.RIGHT &&
                !selectMenuCtx.isMulti,
              "py-2 pl-8 pr-4":
                checkPosition === CHECK_POSITION.LEFT && !selectMenuCtx.isMulti,
              "py-2 pl-3": selectMenuCtx.isMulti,
              "text-neutral-weakest cursor-not-allowed": disabled,
              "last:mb-2": haveGroups,
            },
            "group relative select-none text-sm",
            wrapperClassName
          )
        }
        value={option}
        disabled={disabled}
      >
        {({ active, selected }) => (
          <>
            {!selectMenuCtx.isMulti ? (
              <div className="flex items-center">
                {option.image && (
                  <img
                    src={option.image}
                    alt=""
                    className="mr-2 h-6 w-6 shrink-0 rounded-full"
                  />
                )}

                <span
                  className={twClassNames(
                    {
                      "font-semibold": selected,
                      "font-normal": !selected,
                    },
                    "block truncate"
                  )}
                >
                  {option.visualNode || option.label}
                </span>
                {selected && (
                  <span
                    className={twClassNames(
                      {
                        "right-0 pr-4": checkPosition === CHECK_POSITION.RIGHT,
                        "left-0 pl-1.5": checkPosition === CHECK_POSITION.LEFT,
                      },
                      "absolute inset-y-0 flex items-center icon-brand-default"
                    )}
                  >
                    <MdCheck className="h-5 w-5" aria-hidden="true" />
                  </span>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <CheckboxClone checked={selected} active={active} />

                <label
                  htmlFor={option.name}
                  className="cursor-pointer truncate"
                >
                  {option.visualNode || option.label}
                </label>
              </div>
            )}
          </>
        )}
      </Listbox.Option>
    );
  }
);

SelectMenuOptionItem.propTypes = {
  /** Control the position of checked icon when an item is selected ('left' or 'right'). Only applicable in single-select mode. */
  checkPosition: PropTypes.oneOf(Object.values(CHECK_POSITION)),
  /** If true, makes the option item non-interactive and visually distinct. */
  disabled: PropTypes.bool,
  /** Indicates if the options list contains group labels, affecting bottom margin for styling. */
  haveGroups: PropTypes.bool,
  /** Overrides the parent SelectMenu's multi-select setting for this specific item. `null` inherits context behavior. */
  isMultiOverrideValue: PropTypes.bool,
  /** The data object for the option item. */
  option: PropTypes.shape({
    /** Optional URL for an image displayed alongside the label. */
    image: PropTypes.string,
    /** If true, renders this item as a non-selectable group heading. */
    isGroupLabelOption: PropTypes.bool,
    /** The text content of the option. Required. */
    label: PropTypes.string.isRequired,
    /** The `name` attribute, primarily for the checkbox in multi-select mode. */
    name: PropTypes.string,
    /** The unique value identifying this option. Required. */
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    /** Optional custom React node to render as the option's content instead of `label`. */
    visualNode: PropTypes.node,
  }).isRequired,
  /** Custom CSS classes to apply to the option's root element (`<li>`). */
  wrapperClassName: PropTypes.string,
};

SelectMenuOptionItem.defaultProps = {
  checkPosition: CHECK_POSITION.LEFT,
  disabled: false,
  isMultiOverrideValue: null,
  wrapperClassName: "",
  haveGroups: false,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */

export default SelectMenuOptionItem;
