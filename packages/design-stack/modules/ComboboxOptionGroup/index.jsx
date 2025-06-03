/**
 * Props for the ComboboxOptionGroup component.
 *
 * @typedef {Object} ComboboxOptionGroupProps
 * @property {React.ReactNode} [addNewItemComponent=null] - Optional React node to display below the options list, typically used for an "Add New Item" action.
 * @property {('start'|'center'|'end')} [alignment='start'] - Controls the alignment of the popover content relative to the trigger element. Corresponds to the `align` prop of `@radix-ui/react-popover`.
 * @property {React.ReactNode | React.ReactNode[]} children - The option items (e.g., `ComboboxOption`) or groups to display within the dropdown.
 * @property {boolean} [hasStickyItem=false] - If true, indicates that the list contains a sticky item (like `addNewItemComponent`), adjusting padding to ensure visibility when scrolling.
 * @property {string} [maxWidth='80vw'] - Sets the maximum width of the dropdown popover. Accepts any valid CSS width value.
 * @property {boolean} [shouldInertElements=false] - If true, makes elements outside the popover inert, improving accessibility by trapping focus and preventing interaction with background elements. Corresponds to the `modal` prop of `@headlessui/react/Combobox.Options`.
 * @property {boolean} [showNoOptionItem=false] - If true, displays a "No options" or "No results found" message when the options list is empty or the search query yields no results.
 * @property {string} [wrapperClassName=''] - An optional CSS class name to apply custom styles to the main wrapper element (`Combobox.Options`).
 */

import React, { Children, Fragment, useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Combobox, Transition } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import { ComboboxContextData } from "../ComboBox/context";

import { OPTION_GROUP_ALIGNMENT } from "./constants/comboboxOptionGroup";

/**
 * Renders the dropdown container for Combobox options, handling layout, scrolling,
 * and conditional display of messages like "No options found".
 * It integrates with Headless UI Combobox and Radix UI Popover for functionality.
 *
 * @type {React.FC<ComboboxOptionGroupProps>}
 */
const ComboboxOptionGroup = ({
  addNewItemComponent = null,
  alignment = OPTION_GROUP_ALIGNMENT.START,
  children,
  hasStickyItem = false,
  maxWidth = "80vw",
  showNoOptionItem = false,
  wrapperClassName = "",
  shouldInertElements = false,
}) => {
  const { width, query, isTag, noOptionsText, noResultFoundText } =
    useContext(ComboboxContextData);
  let childrenLength = Children.toArray(children)?.flat().length;
  if (hasStickyItem) {
    childrenLength -= 1;
  }

  return (
    <Popover.Portal>
      <Popover.Content
        asChild
        style={{
          minWidth: `${width}px`,
          maxWidth,
        }}
        onOpenAutoFocus={e => {
          e.preventDefault();
        }}
        align={alignment}
      >
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options
            static
            className={twClassNames(
              "relative z-500 my-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-default bg-raised-default py-1 shadow-lg outline-none",
              {
                "pb-[42px] scroll-pb-[42px]": hasStickyItem,
              },
              wrapperClassName
            )}
            modal={shouldInertElements}
          >
            {!isTag ? (
              <>
                {children}
                {(childrenLength === 0 || showNoOptionItem) && (
                  <Combobox.Option
                    disabled
                    className={twClassNames(
                      "group relative cursor-pointer select-none py-2 pl-3 pr-9 text-sm text-neutral-weaker"
                    )}
                  >
                    {query.length > 0 ? noResultFoundText : noOptionsText}
                  </Combobox.Option>
                )}
                {addNewItemComponent}
              </>
            ) : (
              children
            )}
          </Combobox.Options>
        </Transition>
      </Popover.Content>
    </Popover.Portal>
  );
};

ComboboxOptionGroup.propTypes = {
  /** Optional React node to display below the options list, typically used for an "Add New Item" action. */
  addNewItemComponent: PropTypes.node,
  /** Controls the alignment of the popover content relative to the trigger element. Corresponds to the `align` prop of `@radix-ui/react-popover`. */
  alignment: PropTypes.oneOf(Object.values(OPTION_GROUP_ALIGNMENT)),
  /** The option items (e.g., `ComboboxOption`) or groups to display within the dropdown. */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  /** If true, indicates that the list contains a sticky item (like `addNewItemComponent`), adjusting padding to ensure visibility when scrolling. */
  hasStickyItem: PropTypes.bool,
  /** Sets the maximum width of the dropdown popover. Accepts any valid CSS width value. */
  maxWidth: PropTypes.string,
  /** If true, makes elements outside the popover inert, improving accessibility by trapping focus and preventing interaction with background elements. Corresponds to the `modal` prop of `@headlessui/react/Combobox.Options`. */
  shouldInertElements: PropTypes.bool,
  /** If true, displays a "No options" or "No results found" message when the options list is empty or the search query yields no results. */
  showNoOptionItem: PropTypes.bool,
  /** An optional CSS class name to apply custom styles to the main wrapper element (`Combobox.Options`). */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */

export default ComboboxOptionGroup;
