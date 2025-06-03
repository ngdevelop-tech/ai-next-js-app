/**
 * @typedef {Object} ComboBoxOption
 * @property {string} [image] - Optional URL for an image associated with the option.
 * @property {string} label - The text displayed for the option.
 * @property {string|number} value - The unique value identifying the option.
 */

/**
 * @typedef {Object} ComboBoxProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the Combobox component (e.g., `ComboboxLabel`, `ComboboxTrigger`, `ComboboxContent`).
 * @property {ComboBoxOption | ComboBoxOption[]} [defaultValue] - Default selected value(s) for the combobox. Use this for uncontrolled components where the state is managed internally. Can be a single option object or an array of option objects for multi-select.
 * @property {boolean} [disabled=false] - If true, the component is disabled and interaction is prevented.
 * @property {string} [errorText] - An error message to display below the combobox, indicating a validation error.
 * @property {string} [id] - A unique identifier attribute for the root element of the component.
 * @property {React.ReactNode} [infoText] - Informational text displayed in a tooltip when an info icon (if present via `ComboboxLabel`) is hovered or focused.
 * @property {React.Ref<HTMLInputElement>} [inputRef] - A ref forwarded to the underlying combobox input element.
 * @property {boolean} [isLoading=false] - If true, displays a loading indicator, typically used when fetching options asynchronously.
 * @property {boolean} [isLoadingRight=false] - If true, displays a loading indicator on the right side of the input.
 * @property {boolean} [isMandatory=false] - If true, indicates that the field is required (often visually represented by an asterisk).
 * @property {boolean} [isMulti=false] - If true, allows multiple options to be selected.
 * @property {boolean} [isTag=false] - Internal prop for building TagCombobox. Enables tag-like selection behavior. Do not use directly.
 * @property {string} [loadingText='Loading'] - Text displayed when `isLoading` is true.
 * @property {string} [noOptionsText='No options available'] - Text displayed within the dropdown when there are no options to show.
 * @property {string} [noResultFoundText='No results found'] - Text displayed within the dropdown when filtering yields no matching options.
 * @property {(selectedValue: ComboBoxOption | ComboBoxOption[], lastActionItem?: ComboBoxOption) => void} [onChange] - Callback function invoked when the selected value changes. Receives the new selected value(s). For multi-select, it also receives the specific item that was last added or removed.
 * @property {() => void} [onClearAll] - Callback function invoked when the 'Clear All' button (if present) is clicked. Primarily for controlled multi-select components.
 * @property {(isOpen: boolean) => void} [onOpenChange] - Callback function invoked when the combobox dropdown opens or closes. Receives a boolean indicating the new open state.
 * @property {boolean} [shouldRetainSearchQuery=false] - If true, the search query in the input is not cleared when an option is selected. Useful for controlled components where filtering logic might depend on the persistent query.
 * @property {ComboBoxOption | ComboBoxOption[]} [value] - The currently selected value(s) for the combobox. Use this for controlled components where the state is managed externally. Can be a single option object or an array of option objects for multi-select.
 * @property {'default' | 'minimal'} [variant='default'] - Specifies the visual style variant of the combobox trigger.
 */

import React, { forwardRef, useRef, useState } from "react";
import { Combobox } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import RenderChildren from "./components/RenderChildren";
import { COMBOBOX_VARIANTS } from "./constants/comboBox";
import { ComboboxContextData } from "./context";
import { compareBy, findLastActionItem } from "./utils";

/**
 * Note: Use the ComboboxLabel sub-component, even when the label is not present.
 * Thus, specifying the ariaLabel via ComboboxLabel without any children.
 * &lt;ComboboxLabel ariaLabel="label" />
 */
/**
 * Combobox component allowing users to select one or multiple options from a list,
 * with typeahead filtering and customizable appearance.
 * @type {React.ForwardRefExoticComponent<ComboBoxProps & React.RefAttributes<HTMLDivElement>>}
 */
const ComboBox = forwardRef(
  (
    {
      children,
      defaultValue = null,
      disabled = false,
      errorText = "",
      id = null,
      infoText = null,
      inputRef = null,
      isLoading = false,
      isLoadingRight = false,
      isMandatory = false,
      isMulti = false,
      isTag = false,
      loadingText = "Loading",
      noOptionsText = "No options available",
      noResultFoundText = "No results found",
      onChange = null,
      onClearAll = null,
      onOpenChange = null,
      shouldRetainSearchQuery = false,
      value = null,
      variant = COMBOBOX_VARIANTS.DEFAULT,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(0);
    const [query, setQuery] = useState("");
    const [currentSelectedValues, setCurrentSelectedValues] = useState([]);
    const isControlledElement = !!value;
    let comboInputRef = useRef();
    if (inputRef) comboInputRef = inputRef;

    return (
      <ComboboxContextData.Provider
        value={{
          isMulti,
          isMandatory,
          width,
          setWidth,
          errorText,
          value,
          onClearAll,
          open,
          setOpen,
          isLoading,
          loadingText,
          isLoadingRight,
          isControlledElement,
          disabled,
          query,
          setQuery,
          isTag,
          currentSelectedValues,
          setCurrentSelectedValues,
          noResultFoundText,
          noOptionsText,
          comboInputRef,
          infoText,
          variant,
          closeCombobox: () => setOpen(false),
        }}
      >
        <Popover.Root open={open}>
          <Combobox
            className="min-w-fit"
            ref={ref}
            as="div"
            value={value ?? undefined}
            defaultValue={defaultValue ?? undefined}
            onChange={selectedValue => {
              if (onChange) {
                onChange(
                  selectedValue,
                  isMulti
                    ? findLastActionItem(selectedValue, currentSelectedValues)
                    : selectedValue
                );
                // shouldRetainSearchQuery is true,then don't clear query on option change
                if (!isTag && !shouldRetainSearchQuery)
                  comboInputRef.current.value = "";
              }
              // shouldRetainSearchQuery is true,then don't clear query on option change
              if (query && !shouldRetainSearchQuery) setQuery("");
            }}
            multiple={isMulti || isTag}
            by={compareBy}
            disabled={disabled}
            {...(id !== null && { id })}
          >
            {({ open: dropdownOpen, value: selectedValues }) => (
              <RenderChildren
                open={dropdownOpen}
                onOpenChange={onOpenChange}
                selectedValues={selectedValues}
              >
                {children}
              </RenderChildren>
            )}
          </Combobox>
          {errorText && (
            <p className="mt-2 text-sm text-danger-default">{errorText}</p>
          )}
        </Popover.Root>
      </ComboboxContextData.Provider>
    );
  }
);

const valuePropType = PropTypes.oneOfType([
  PropTypes.arrayOf(
    PropTypes.shape({
      /** Optional URL for an image associated with the option. */
      image: PropTypes.string,
      /** The text displayed for the option. */
      label: PropTypes.string.isRequired,
      /** The unique value identifying the option. */
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  PropTypes.shape({
    /** Optional URL for an image associated with the option. */
    image: PropTypes.string,
    /** The text displayed for the option. */
    label: PropTypes.string.isRequired,
    /** The unique value identifying the option. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }),
]);

ComboBox.propTypes = {
  /** Node containing the content that will be displayed within the Combobox component (e.g., `ComboboxLabel`, `ComboboxTrigger`, `ComboboxContent`). */
  children: PropTypes.node.isRequired,
  /** Default selected value(s) for the combobox (uncontrolled). Can be a single option object or an array of option objects. */
  defaultValue: valuePropType,
  /** If true, the component is disabled and interaction is prevented. */
  disabled: PropTypes.bool,
  /** An error message to display below the combobox. */
  errorText: PropTypes.string,
  /** A unique identifier attribute for the root element. */
  id: PropTypes.string,
  /** Informational text displayed in a tooltip (requires info icon via `ComboboxLabel`). */
  infoText: PropTypes.node,
  /** A ref forwarded to the underlying combobox input element. */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
  /** If true, displays a loading indicator. */
  isLoading: PropTypes.bool,
  /** If true, displays a loading indicator on the right side. */
  isLoadingRight: PropTypes.bool,
  /** If true, indicates that the field is required. */
  isMandatory: PropTypes.bool,
  /** If true, allows multiple options to be selected. */
  isMulti: PropTypes.bool,
  /** Internal prop for building TagCombobox. Do not use directly. */
  isTag: PropTypes.bool,
  /** Text displayed when `isLoading` is true. */
  loadingText: PropTypes.string,
  /** Text displayed when there are no options available. */
  noOptionsText: PropTypes.string,
  /** Text displayed when filtering yields no matching options. */
  noResultFoundText: PropTypes.string,
  /** Callback function invoked when the selected value changes. Receives `(selectedValue, ?lastActionItem)`. */
  onChange: PropTypes.func,
  /** Callback function invoked when the 'Clear All' button is clicked (controlled multi-select). */
  onClearAll: PropTypes.func,
  /** Callback function invoked when the combobox dropdown opens or closes. Receives `(isOpen)`. */
  onOpenChange: PropTypes.func,
  /** If true, the search query is not cleared when an option is selected (controlled components). */
  shouldRetainSearchQuery: PropTypes.bool,
  /** The currently selected value(s) for the combobox (controlled). Can be a single option object or an array of option objects. */
  value: valuePropType,
  /** Specifies the visual style variant of the combobox trigger. */
  variant: PropTypes.oneOf(Object.values(COMBOBOX_VARIANTS)),
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */

export default ComboBox;
