/**
 * Represents a single option item within the ComboboxTag.
 * @typedef {Object} ComboboxTagOption
 * @property {string} label - The text label displayed for the option. This is also used for filtering.
 * @property {string|number} value - The unique value associated with the option.
 * @property {string} [image] - URL of an image to display next to the option label.
 * @property {boolean} [disabled] - If true, the option cannot be selected.
 * @property {boolean} [hasDismissButton] - If true, displays a dismiss button on the tag (relevant for selected items).
 * @property {boolean} [isError] - If true, styles the tag to indicate an error state (relevant for selected items).
 * @property {string} [modifier] - Additional CSS class modifier for the tag (relevant for selected items).
 * @property {React.ReactNode} [visualLabel] - Custom React node to render as the label, overriding the default text label rendering.
 */

/**
 * Props for the ComboboxTag component.
 * @typedef {Object} ComboboxTagProps
 * @property {React.ElementType} [MenuContainer=ComboboxOptionGroup] - Component used to render the dropdown menu container. Defaults to `ComboboxOptionGroup`.
 * @property {React.ReactNode} addNewItemComponent - Component to display at the bottom of the dropdown when the current query doesn't exactly match any existing option, allowing users to add a new item.
 * @property {React.ReactNode} [children] - Additional custom content to be rendered inside the dropdown menu, below the options and potentially the `addNewItemComponent`.
 * @property {object} [comboboxItemProps] - Props passed down to each `ComboboxOptionItem` component within the dropdown.
 * @property {string} [comboboxItemProps.wrapperClassName] - Additional CSS classes for the wrapper of each `ComboboxOptionItem`.
 * @property {object} [comboboxOptionGroupProps] - Props passed down to the `MenuContainer` component (typically `ComboboxOptionGroup`).
 * @property {boolean} [comboboxOptionGroupProps.hasStickyItem] - If true, indicates the group might have sticky items (relevant for styling/layout).
 * @property {string} [comboboxOptionGroupProps.wrapperClassName] - Additional CSS classes for the wrapper of the `MenuContainer`.
 * @property {object} [comboboxProps] - Props passed down to the underlying `Combobox` component.
 * @property {(optionA: ComboboxTagOption, optionB: ComboboxTagOption) => number} [comparator] - Custom comparison function for sorting or determining equality between options. Used for filtering and managing selections.
 * @property {number} [debounceThreeshold=0] - Debounce time in milliseconds for the input change handler. Useful for performance optimization with frequent input changes.
 * @property {Array<ComboboxTagOption>|ComboboxTagOption} [defaultValue] - The initial selected value(s) for an uncontrolled component.
 * @property {(value: ComboboxTagOption) => void} [deleteOnBackspace] - Callback function invoked when the backspace key is pressed in an empty input field, typically used to remove the last selected tag. Receives the tag to be potentially deleted.
 * @property {string} [id] - Unique HTML ID attribute for the root element of the component.
 * @property {string} [infoText] - Text displayed in a tooltip when hovering over an info icon (if applicable, depends on underlying Combobox implementation).
 * @property {boolean} [isMandatory=false] - If true, indicates the field is required, often visually marked (e.g., with an asterisk).
 * @property {React.ReactNode} [label] - Label text or node displayed above the combobox input.
 * @property {string} [noOptionsText='No options available'] - Text displayed in the dropdown when the `options` array is empty or filtering results in no matches initially.
 * @property {string} [noResultText='No results found'] - Text displayed in the dropdown when the user's input query matches no available options.
 * @property {function(selectedOptions: Array<ComboboxTagOption>): void} [onChange] - Callback function invoked when the selected value(s) change. Receives the new array of selected options. Required for controlled components.
 * @property {function(): void} [onClearAll] - Callback function invoked when the "Clear All" action is triggered (if available).
 * @property {function(inputValue: string): void} [onInputChange] - Callback function invoked when the text input value changes. Receives the current input string.
 * @property {function(currentQuery: string): void} [onOptionGroupClose] - Callback function invoked when the dropdown menu closes. Receives the input query value at the time of closing.
 * @property {function(): void} [onOptionGroupOpen] - Callback function invoked when the dropdown menu opens.
 * @property {function(optionToRemove: ComboboxTagOption): void} [onTagCrossClick] - Callback function invoked when the dismiss ('x') button on a selected tag is clicked. Receives the option corresponding to the tag.
 * @property {Array<ComboboxTagOption>} [options=[]] - Array of available options to display in the dropdown.
 * @property {string} [placeholder='Placeholder'] - Placeholder text displayed in the input field when it's empty and not focused.
 * @property {React.Ref<HTMLButtonElement | HTMLInputElement>} [triggerRef] - Ref object or callback ref to attach to the trigger element (the input/button that opens the dropdown).
 * @property {boolean} [useVirtualisation=true] - If true, uses `react-virtuoso` to render the dropdown list, improving performance for large lists.
 * @property {Array<ComboboxTagOption>|ComboboxTagOption} [value] - The currently selected value(s). Required for controlled components. Must be updated via `onChange`.
 * @property {object} [virtuosoProps] - Props passed down to the `Virtuoso` component when `useVirtualisation` is true.
 * @property {number} [virtuosoProps.fixedItemHeight] - Specifies a fixed height for each item, required for certain `Virtuoso` optimizations. See `react-virtuoso` documentation.
 */

import React, { useEffect } from "react";
import { Virtuoso } from "react-virtuoso";
import { useLatestRef } from "@/packages/hooks";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Combobox from "../ComboBox";
import ComboboxOptionGroup from "../ComboboxOptionGroup";
import ComboboxOptionItem from "../ComboboxOptionItem";
import ComboboxTagTrigger from "../TagComboBoxTrigger";

import useComboboxTag from "./useCombobobxTag";

/**
 * A multi-select combobox component that displays selected options as tags within the input area.
 * It supports searching, selecting from a list, adding new items (optional), and virtualization for long lists.
 * Can be used as a controlled or uncontrolled component.
 *
 * @component
 * @example
 * const options = [
 *   { label: 'Apple', value: 'apple' },
 *   { label: 'Banana', value: 'banana' },
 *   { label: 'Orange', value: 'orange' },
 * ];
 *
 * // Uncontrolled example
 * <ComboboxTag
 *   label="Fruits"
 *   options={options}
 *   defaultValue={[options[0]]}
 *   addNewItemComponent={<ComboboxOptionItem option={{ label: 'Add new fruit...', value: 'add_new' }} />}
 *   placeholder="Select or add fruits"
 * />
 *
 * @example
 * // Controlled example
 * const [selectedFruits, setSelectedFruits] = useState([options[1]]);
 * <ComboboxTag
 *   label="Fruits"
 *   options={options}
 *   value={selectedFruits}
 *   onChange={setSelectedFruits}
 *   addNewItemComponent={<ComboboxOptionItem option={{ label: 'Add new fruit...', value: 'add_new' }} />}
 *   placeholder="Select or add fruits"
 * />
 *
 * @see Combobox
 * @see ComboboxTagTrigger
 * @see ComboboxOptionItem
 * @see ComboboxOptionGroup
 * @see https://zeroheight.com/023d5159d/p/9218f2-multi-select-combo-box-with-badge/b/4635b4
 *
 * @type {React.FC<ComboboxTagProps>}
 */
const ComboboxTag = ({
  addNewItemComponent,
  comboboxProps = {},
  comboboxItemProps = {},
  comboboxOptionGroupProps = {},
  comparator = null,
  debounceThreeshold = 0,
  id = null,
  isMandatory = false,
  infoText = "",
  label = "",
  defaultValue = undefined,
  MenuContainer = ComboboxOptionGroup,
  noResultText = "No results found",
  noOptionsText = "No options available",
  options = [],
  onInputChange = null,
  value = undefined,
  onChange = null,
  onTagCrossClick = null,
  deleteOnBackspace = null,
  onClearAll = null,
  placeholder = "Placeholder",
  onOptionGroupClose = null,
  onOptionGroupOpen = null,
  virtuosoProps = {},
  useVirtualisation = true,
  triggerRef = null,
  children = null,
}) => {
  const comboboxRef = useRef();
  const isControlledElement = !!value;
  const firstRender = useRef(false);
  const deleteOnBackspaceRef = useLatestRef(deleteOnBackspace);

  const {
    visibleItems,
    currentSelected,
    query,
    onChangeCombobox,
    onClearAllRef,
    onTagCloseRef,
    setQuery,
    handleChange,
  } = useComboboxTag({
    defaultValue,
    deleteOnBackspaceRef,
    isControlledElement,
    value,
    options,
    onInputChange,
    onChange,
    onClearAll,
    onTagCrossClick,
    comparator,
    comboboxProps,
    debounceThreeshold,
    comboboxRef,
  });

  // this is calculated based on the max height of ComboboxOptionGroup(240px)
  const maxHeightOfList =
    36 * visibleItems?.length > 200 ? "200px" : 36 * visibleItems?.length;

  const isExactMatch = useMemo(
    () => options.find(item => item.label === query),
    [query, options]
  );

  useEffect(() => {
    firstRender.current = true;
  }, []);

  const virtuosoRef = React.useRef(null);
  const currentItemNumber = useRef({ index: 0 });

  const keyDownCallback = e => {
    let preloadIndex = -1;
    if (e.code === "ArrowUp") {
      preloadIndex = currentItemNumber.current.index - 3;
      virtuosoRef.current?.scrollIntoView({
        index: preloadIndex >= 0 ? preloadIndex : 0,
        behavior: "auto",
      });
    } else if (e.code === "ArrowDown") {
      preloadIndex = currentItemNumber.current.index + 3;
      virtuosoRef.current?.scrollIntoView({
        index:
          preloadIndex <= visibleItems.length + 1
            ? preloadIndex
            : visibleItems.length + 1,
        behavior: "auto",
      });
    }
  };

  return (
    <Combobox
      isMandatory={isMandatory}
      isTag
      infoText={infoText}
      value={isControlledElement ? value : currentSelected}
      onChange={e => {
        setQuery("");
        onChangeCombobox?.(e);
      }}
      {...comboboxProps}
      onOpenChange={status => {
        if (status && firstRender.current) {
          onOptionGroupOpen?.();
        }
        if (!status && firstRender.current) {
          onOptionGroupClose?.(query);
          setQuery("");
        }
      }}
      ref={comboboxRef}
      {...(id !== null && { id })}
    >
      {label}
      <ComboboxTagTrigger
        placeholder={placeholder}
        onInputValueChange={e => {
          handleChange(e.target.value);
        }}
        onKeyDown={keyDownCallback}
        onTagClose={onTagCloseRef}
        currentSelected={currentSelected}
        onClearAll={onClearAllRef}
        ref={triggerRef}
      />
      <MenuContainer
        {...comboboxOptionGroupProps}
        wrapperClassName={twClassNames(
          comboboxOptionGroupProps.wrapperClassName,
          { "overflow-hidden": useVirtualisation }
        )}
      >
        {!useVirtualisation && visibleItems.length > 0
          ? visibleItems.map(opt => (
              <ComboboxOptionItem
                key={opt.value}
                disabled={opt.disabled ? opt.disabled : false}
                {...comboboxItemProps}
                option={opt}
              />
            ))
          : null}
        {useVirtualisation && visibleItems.length > 0 ? (
          <Virtuoso
            style={{
              height: maxHeightOfList,
            }}
            {...virtuosoProps}
            data={visibleItems}
            role="group"
            itemContent={(index, opt) => (
              <ComboboxOptionItem
                onKeyDown={keyDownCallback}
                onActive={() => {
                  currentItemNumber.current.index = index;
                }}
                key={opt.value}
                disabled={opt.disabled ? opt.disabled : false}
                {...comboboxItemProps}
                wrapperClassName={
                  opt.disabled
                    ? `cursor-not-allowed ${
                        comboboxItemProps?.wrapperClassName || ""
                      }`
                    : comboboxItemProps?.wrapperClassName || ""
                }
                option={opt}
                checkPosition="right"
              />
            )}
            ref={virtuosoRef}
          />
        ) : null}
        {visibleItems.length <= 0 ? (
          <div
            className={twClassNames(
              "group relative cursor-pointer select-none py-2 pl-3 pr-9 text-sm text-neutral-weaker"
            )}
          >
            {query.length > 0 ? noResultText : noOptionsText}
          </div>
        ) : null}

        {query.length > 0 && !isExactMatch && addNewItemComponent}
        {children}
      </MenuContainer>
    </Combobox>
  );
};

ComboboxTag.propTypes = {
  /** Component used to render the dropdown menu container. */
  MenuContainer: PropTypes.elementType,
  /** Component to display for adding a new item when the query doesn't match existing options. */
  addNewItemComponent: PropTypes.node.isRequired,
  /** Additional content rendered inside the dropdown menu. */
  children: PropTypes.node,
  /** Props passed down to each `ComboboxOptionItem`. */
  comboboxItemProps: PropTypes.shape({
    /** Additional CSS classes for the wrapper of each `ComboboxOptionItem`. */
    wrapperClassName: PropTypes.string,
  }),
  /** Props passed down to the `MenuContainer` component. */
  comboboxOptionGroupProps: PropTypes.shape({
    /** Indicates if the group might have sticky items. */
    hasStickyItem: PropTypes.bool,
    /** Additional CSS classes for the wrapper of the `MenuContainer`. */
    wrapperClassName: PropTypes.string,
  }),
  /** Props passed down to the underlying `Combobox` component. */
  comboboxProps: PropTypes.shape({}),
  /** Custom comparison function for options. */
  comparator: PropTypes.func,
  /** Debounce time in ms for input changes. */
  debounceThreeshold: PropTypes.number,
  /** Initial selected value(s) for uncontrolled mode. */
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
  /** Callback when backspace is pressed in an empty input. */
  deleteOnBackspace: PropTypes.func,
  /** Unique HTML ID attribute for the root element. */
  id: PropTypes.string,
  /** Info text to be passed to show in the tooltip body if the info icon is present. */
  infoText: PropTypes.string,
  /** Prop to mark the component field as required or not. */
  isMandatory: PropTypes.bool,
  label: PropTypes.node,
  noOptionsText: PropTypes.string,
  noResultText: PropTypes.string,
  /** Callback function invoked when the selection changes (controlled mode). `(selectedOptions: Array<ComboboxTagOption>) => void` */
  onChange: PropTypes.func,
  /** Callback function invoked when the "Clear All" action is triggered. `() => void` */
  onClearAll: PropTypes.func,
  /** Callback function invoked when the text input value changes. `(inputValue: string) => void` */
  onInputChange: PropTypes.func,
  /** Callback invoked when the dropdown menu closes. `(currentQuery: string) => void` */
  onOptionGroupClose: PropTypes.func,
  /** Callback invoked when the dropdown menu opens. `() => void` */
  onOptionGroupOpen: PropTypes.func,
  /** Callback invoked when a tag's dismiss button is clicked. `(optionToRemove: ComboboxTagOption) => void` */
  onTagCrossClick: PropTypes.func,
  /** Array of available options. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      hasDismissButton: PropTypes.bool,
      image: PropTypes.string,
      isError: PropTypes.bool,
      label: PropTypes.string.isRequired,
      modifier: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      visualLabel: PropTypes.node,
    })
  ),
  /** Placeholder text for the input field. */
  placeholder: PropTypes.string,
  showNoResult: PropTypes.bool,
  triggerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
  /** Enable/disable list virtualization. */
  useVirtualisation: PropTypes.bool,
  /** Currently selected value(s) (controlled mode). */
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        hasDismissButton: PropTypes.bool,
        image: PropTypes.string,
        label: PropTypes.string.isRequired,
        modifier: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ),
    PropTypes.shape({
      hasDismissButton: PropTypes.bool,
      image: PropTypes.string,
      label: PropTypes.string.isRequired,
      modifier: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ]),
  virtuosoProps: PropTypes.shape({
    fixedItemHeight: PropTypes.number,
  }),
};

ComboboxTag.displayName = "TagCombobox";

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-comboboxtag--controlled-tag-combobox
 * @zeroHeight https://zeroheight.com/023d5159d/p/9218f2-multi-select-combo-box-with-badge/b/4635b4
 * @end
 */

export default ComboboxTag;
