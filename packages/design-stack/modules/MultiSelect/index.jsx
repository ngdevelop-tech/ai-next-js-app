import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import { DATA_PROPTYPES, MULTISELECT_TYPES } from "./constants/multiSelect";
import { MultiSelectContextData } from "./context";

/**
 * @typedef {import('./constants/multiSelect').MultiSelectData} MultiSelectData
 * Represents the data structure for a single option within the MultiSelect.
 * It includes properties like id, label, icon, etc., and potentially `subCategories`.
 */

/**
 * @typedef {object} SelectedOptions
 * Represents the state of selected options across different levels.
 * Keys are dynamically generated based on the `levels` prop (e.g., 'level1', 'level2').
 * For ADVANCED_SELECTOR type, a nested level key (e.g., 'levelN_1') might exist.
 * @property {MultiSelectData | null} [level1] - Selected option for level 1.
 * @property {MultiSelectData | null} [level2] - Selected option for level 2.
 * @property {MultiSelectData | null} [levelN] - Selected option for level N.
 * @property {MultiSelectData | null} [levelN_1] - Selected option for the nested level in ADVANCED_SELECTOR.
 */

/**
 * The MultiSelect component provides a hierarchical selection interface, typically within a popover.
 * It allows users to navigate through multiple levels of options defined by the `data` prop
 * and make selections, managed via the `selectedOptions` state.
 *
 * It uses a context (`MultiSelectContextData`) to share state and actions with its subcomponents
 * (like Trigger, Content, Level - which should be passed as children).
 *
 * @component
 * @example
 * const data = [
 *   { id: '1', label: 'Option 1', subCategories: [
 *       { id: '1-1', label: 'Sub Option 1.1' },
 *       { id: '1-2', label: 'Sub Option 1.2' }
 *     ]
 *   },
 *   { id: '2', label: 'Option 2' },
 * ];
 *
 * <MultiSelect data={data} levels={2} onChange={(selection) => console.log('Selection changed:', selection)}>
 *   <MultiSelect.Trigger>
 *     <button>Open Selector</button>
 *   </MultiSelect.Trigger>
 *   <MultiSelect.Content>
 *     <MultiSelect.Level level={1} />
 *     <MultiSelect.Level level={2} />
 *   </MultiSelect.Content>
 * </MultiSelect>
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - Required. Subcomponents like `MultiSelect.Trigger`, `MultiSelect.Content`, `MultiSelect.Level` that structure the UI.
 * @param {MultiSelectData[]} props.data - Required. An array of data objects for the first level. Each object can contain a `subCategories` array for nested levels, following the `MultiSelectData` structure.
 * @param {SelectedOptions} [props.defaultValue] - Optional. The initial selection state. If not provided, the first option of each level is selected by default. Keys should match level identifiers (e.g., `level1`, `level2`).
 * @param {string} [props.id] - Optional. A unique identifier for the root element, useful for accessibility and testing.
 * @param {number} [props.levels=3] - Optional. The maximum number of hierarchical levels to render and manage.
 * @param {boolean} [props.minimal=false] - Optional. If true, suggests a minimal visual style (actual implementation depends on subcomponents like `MultiSelect.Trigger`).
 * @param {(selectedOptions: SelectedOptions, levelChanged: number) => void} [props.onChange] - Optional. Callback function triggered when a selection changes. Receives the complete current selection state and the 1-based level number where the change occurred.
 * @param {(isOpen: boolean) => void} [props.onOpenChange] - Optional. Callback function triggered when the popover's open state changes (controlled by `Popover.Root`). Receives the new open state (`true` or `false`).
 * @param {'default' | 'advanced-selector'} [props.type='default'] - Optional. Specifies the variant of the MultiSelect. `'advanced-selector'` enables specific behaviors, potentially for the last level (like handling `actionIcons`). See `MULTISELECT_TYPES`.
 * @see MultiSelect.Trigger
 * @see MultiSelect.Content
 * @see MultiSelect.Level
 * @see DATA_PROPTYPES
 * @see MULTISELECT_TYPES
 * @accessibility
 * - Ensure the trigger element provided via `MultiSelect.Trigger` is keyboard accessible (focusable and operable with Enter/Space).
 * - The popover content (`MultiSelect.Content`) should manage focus appropriately when opened.
 * - List items within levels should be navigable using arrow keys.
 * - Use `aria-` attributes where necessary if default Radix UI Popover accessibility needs enhancement for this specific use case.
 */
const MultiSelect = props => {
  const {
    children,
    data,
    defaultValue = null,
    id = null,
    levels = 3,
    minimal = false,
    onChange = null,
    onOpenChange = null,
    popoverWrapperClassName = "",
    type = "default",
  } = props;

  const getDefaultSelections = inputData => {
    const selection = { level1: inputData[0] || null };
    Array.from({ length: levels }, (_, index) => index + 1).forEach(level => {
      if (level === 1) return;
      const levelStr = `level${level}`;
      const prevLevelStr = `level${level - 1}`;
      selection[levelStr] = selection[prevLevelStr]?.subCategories?.[0] || null;
    });

    if (type === MULTISELECT_TYPES.ADVANCED_SELECTOR) {
      const levelsStr = `level${levels}`;
      const newSubCategory = selection[levelsStr]?.subCategories?.[0] || null;
      if (newSubCategory?.actionIcons?.length > 0) {
        const [firstActionIcon] = newSubCategory.actionIcons;
        newSubCategory.actionIcon = firstActionIcon;
        newSubCategory.triggerIcon = newSubCategory.actionIcon?.icon;
      }
      const nestLevelsStr = `level${levels}_1`;
      selection[nestLevelsStr] = newSubCategory || null;
    }

    return { ...selection };
  };
  const [openPopover, setOpenPopover] = useState(false);

  /**
   * Holds the currently selected option for each level.
   * @type {[SelectedOptions, React.Dispatch<React.SetStateAction<SelectedOptions>>]}
   */
  const [selectedOptions, setSelectedOptions] = useState(
    defaultValue || getDefaultSelections(data)
  );

  /**
   * Updates the selected option for a given level and automatically selects
   * the first available option in subsequent levels. Handles special logic
   * for the 'advanced-selector' type.
   * @param {number} level - The 1-based level number where the selection occurred.
   * @param {MultiSelectData} option - The data object of the selected option.
   * @param {string} [subLevel=''] - An optional suffix for nested levels (e.g., '_1'), used internally for advanced types.
   */
  const selectOption = (level, option, subLevel = "") => {
    const newLevelStr = `level${level + subLevel}`;
    const newSelections = {
      ...selectedOptions,
      [newLevelStr]: option,
    };

    // Automatically select the first option in subsequent levels if available
    let currentLevel = level;
    while (currentLevel < levels) {
      const nextLevelKey = `level${currentLevel + 1}`;
      const levelsStr = `level${currentLevel}`;
      const currentOptionSubCategories =
        newSelections[levelsStr]?.subCategories || [];

      // Select the first option of the next level, if it exists
      newSelections[nextLevelKey] = currentOptionSubCategories[0] || null;
      if (
        type === MULTISELECT_TYPES.ADVANCED_SELECTOR &&
        currentLevel + 1 === levels
      ) {
        const newSubCategory = newSelections[nextLevelKey]?.subCategories?.[0];
        if (newSubCategory?.actionIcons?.length > 0) {
          const [firstActionIcon] = newSubCategory.actionIcons;
          newSubCategory.actionIcon = firstActionIcon;
          newSubCategory.triggerIcon = newSubCategory.actionIcon?.icon;
        }
        const nestLevelsStr = `${nextLevelKey}_1`;
        newSelections[nestLevelsStr] = newSubCategory || null;
      }
      currentLevel += 1;
    }

    setSelectedOptions(newSelections);

    onChange?.(newSelections, level);
  };

  return (
    <MultiSelectContextData.Provider
      value={{
        data,
        id,
        minimal,
        selectOption,
        selectedOptions,
        type,
        closeSelector: () => setOpenPopover(false),
        openPopover,
        popoverWrapperClassName,
        levels,
      }}
    >
      <Popover.Root
        open={openPopover}
        onOpenChange={() => {
          setOpenPopover(openedPopover => {
            onOpenChange?.(!openedPopover);
            return !openedPopover;
          });
        }}
        defaultOpen={false}
      >
        {children}
      </Popover.Root>
    </MultiSelectContextData.Provider>
  );
};

export const MultiSelectProps = {
  /** Other subcomponents and pieces */
  children: PropTypes.node.isRequired,
  /** Node containing the content that will be displayed within the Multiselect component. */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      ...DATA_PROPTYPES,
      subCategories: PropTypes.shape(DATA_PROPTYPES),
    })
  ).isRequired,
  /** Initial selection value passed to the selector.By default selector picks 1st option of every level. */
  defaultValue: PropTypes.shape({
    level1: DATA_PROPTYPES,
    level2: DATA_PROPTYPES,
    level3: DATA_PROPTYPES,
  }),
  /** Unique identifier for the dropdown. */
  id: PropTypes.string,
  /** Maximum number of levels that should be present in the selector */
  levels: PropTypes.number,
  /** Determines if the dropdown is minimal. */
  minimal: PropTypes.bool,
  /** Callback called on any new selection with data and level selected */
  onChange: PropTypes.func,
  /** Callback called popover opening and closing with its states */
  onOpenChange: PropTypes.func,
  /** A custom CSS class name to style the popover element. */
  popoverWrapperClassName: PropTypes.string,
  /** Prop to indicate type of component. */
  type: PropTypes.oneOf(Object.values(MULTISELECT_TYPES)),
};

MultiSelect.propTypes = MultiSelectProps;

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-multiselect--primary
 * @zeroHeight
 * @end
 */

export default MultiSelect;
