/**
 * @typedef {Object} SelectMenuValueItem
 * @property {string} [image] - Optional URL for an image associated with the item.
 * @property {string} label - The display text for the item.
 * @property {string|number} value - The unique value identifier for the item.
 */

/**
 * @typedef {Object} SelectMenuProps
 * @property {React.ReactNode} children - Components like `SelectMenu.Trigger`, `SelectMenu.Options`, `SelectMenu.Option`, etc., defining the structure and content.
 * @property {SelectMenuValueItem | SelectMenuValueItem[]} [defaultValue] - The initially selected value(s) for uncontrolled usage. The component manages its state internally. Not updated on re-render if provided.
 * @property {boolean} [disabled=false] - If true, the select menu interaction is disabled.
 * @property {string} [errorText] - Text displayed below the component to indicate an error state.
 * @property {React.ReactNode} [infoText] - Content displayed in a tooltip when an info icon (if present within `SelectMenu.Trigger`) is hovered or focused.
 * @property {boolean} [isMandatory=false] - If true, indicates that selecting a value is required (visual indicator only).
 * @property {boolean} [isMulti=false] - If true, allows multiple options to be selected.
 * @property {(value: SelectMenuValueItem | SelectMenuValueItem[] | null) => void} [onChange] - Callback function invoked when the selected value changes. Receives the new value(s) or null.
 * @property {(open: boolean) => void} [onOpenChange] - Callback function invoked when the dropdown menu's open state changes.
 * @property {SelectMenuValueItem | SelectMenuValueItem[]} [value] - The currently selected value(s) for controlled usage. The component's state is managed externally. Must be updated via `onChange` for changes to reflect.
 * @property {'default' | 'minimal'} [variant='default'] - The visual style variant of the select menu trigger.
 */

import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import RenderChildren from "./components/RenderChildren";
import { SELECTMENU_VARIANTS } from "./constants/selectMenu";
import { SelectMenuContextData } from "./selectMenuContext";

/**
 * SelectMenu provides a customizable dropdown selection component, supporting single and multiple selections,
 * controlled and uncontrolled states, and various visual variants. It leverages Headless UI's Listbox
 * and Radix UI's Popover for robust functionality and accessibility.
 *
 * @example
 * ```jsx
 * const options = [
 *   { label: 'Option 1', value: '1' },
 *   { label: 'Option 2', value: '2' },
 * ];
 *
 * function MySelectMenu() {
 *   const [selectedValue, setSelectedValue] = useState(options[0]);
 *
 *   return (
 *     <SelectMenu value={selectedValue} onChange={setSelectedValue}>
 *       <SelectMenu.Trigger placeholder="Select an option" />
 *       <SelectMenu.Options>
 *         {options.map(option => (
 *           <SelectMenu.Option key={option.value} value={option}>
 *             {option.label}
 *           </SelectMenu.Option>
 *         ))}
 *       </SelectMenu.Options>
 *     </SelectMenu>
 *   );
 * }
 * ```
 *
 * @accessibility
 * Built on top of Headless UI Listbox and Radix UI Popover, ensuring WAI-ARIA patterns are followed for keyboard navigation and screen reader support.
 * Ensure `SelectMenu.Trigger` has appropriate labeling (e.g., `aria-label` or visible label association) if not using a placeholder.
 *
 * @type {React.FC<SelectMenuProps>}
 */
const SelectMenu = ({
  children,
  defaultValue,
  disabled,
  errorText,
  infoText,
  isMandatory,
  isMulti,
  onChange,
  onOpenChange,
  value,
  variant,
}) => {
  const [width, setWidth] = useState(0);
  const [showCount, setShowCount] = useState(false);
  const [open, setOpen] = useState(false);
  const listBoxBy = (o, n) => {
    if (o && n) return o.value === n.value;
    return null;
  };
  const listBoxOnChange = val => {
    if (onChange) onChange(val);
  };
  return (
    <SelectMenuContextData.Provider
      value={{
        isMulti,
        setWidth,
        width,
        showCount,
        setShowCount,
        errorText,
        open,
        setOpen,
        disabled,
        isMandatory,
        infoText,
        variant,
      }}
    >
      <Popover.Root open={open}>
        <Listbox
          value={value}
          defaultValue={defaultValue ?? undefined}
          onChange={listBoxOnChange}
          multiple={isMulti}
          by={listBoxBy}
          disabled={disabled}
        >
          {({ open: dropdownOpen }) => (
            <RenderChildren open={dropdownOpen} onOpenChange={onOpenChange}>
              {children}
            </RenderChildren>
          )}
        </Listbox>
        {errorText && (
          <p className="mt-2 text-sm text-danger-default">{errorText}</p>
        )}
      </Popover.Root>
    </SelectMenuContextData.Provider>
  );
};

SelectMenu.propTypes = {
  /** Node containing the content that will be displayed within the select list box of the selectMenu component */
  children: PropTypes.node.isRequired,
  /** Default selected values for the selectMenu, and the value state will be controlled internally, means values doesnt get updated on re-render */
  defaultValue: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ),
    PropTypes.shape({
      image: PropTypes.string,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ]),
  /** The component is disabled if the passed value is true */
  disabled: PropTypes.bool,
  /** The error message to be displayed */
  errorText: PropTypes.string,
  /** Info text to be passed to show in the tooltip body if the info icon is present. */
  infoText: PropTypes.node,
  /** Mention if the component is required or not */
  isMandatory: PropTypes.bool,
  /** Multiple select enable or not */
  isMulti: PropTypes.bool,
  /** Callback function when selectMenu value is changed */
  onChange: PropTypes.func,
  /** Callback function when selectMenu options open/close */
  onOpenChange: PropTypes.func,
  /** Default selected values for the selectMenu, and the value state will be controlled externally */
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ),
    PropTypes.shape({
      image: PropTypes.string,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ]),
  /** Specifies type of variant of combobox trigger */
  variant: PropTypes.oneOf(Object.values(SELECTMENU_VARIANTS)),
};

SelectMenu.defaultProps = {
  defaultValue: null,
  disabled: false,
  errorText: "",
  infoText: null,
  isMandatory: false,
  isMulti: false,
  onChange: null,
  onOpenChange: null,
  value: undefined,
  variant: SELECTMENU_VARIANTS.DEFAULT,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */

export default SelectMenu;
