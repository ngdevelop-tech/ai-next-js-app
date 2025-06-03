/**
 * Represents the container for options within a SelectMenu, utilizing Radix Popover and Headless UI Listbox.
 * It handles the positioning, styling, and accessibility features of the dropdown options list.
 *
 * @typedef {Object} SelectMenuOptionGroupProps
 * @property {'start' | 'center' | 'end'} [alignment='start'] - Alignment of the options list relative to the trigger. Controls the `align` prop of `Popover.Content`.
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the select option group of the selectMenu component
 * @property {HTMLElement} [container=null] - The DOM element to portal the popover content into. Defaults to `document.body`.
 * @property {boolean} [hasStickyItem=false] - If true, adds padding to the bottom to accommodate a sticky item (like a footer button) within the options list.
 * @property {string} [maxWidth='80vw'] - Sets the maximum width of the options list container. Accepts any valid CSS width value.
 * @property {(event: React.KeyboardEvent<HTMLUListElement>) => void} [onKeyDown=null] - Callback function invoked when a key is pressed while the options list is focused.
 * @property {string} [wrapperClassName=''] - Custom CSS class name(s) to apply to the `Listbox.Options` element for additional styling.
 *
 * @example
 * ```jsx
 * <SelectMenu>
 *   <SelectMenuButton>Options</SelectMenuButton>
 *   <SelectMenuOptionGroup>
 *     <SelectMenuOption value="1">Option 1</SelectMenuOption>
 *     <SelectMenuOption value="2">Option 2</SelectMenuOption>
 *   </SelectMenuOptionGroup>
 * </SelectMenu>
 * ```
 *
 * @see https://www.radix-ui.com/primitives/docs/components/popover#content - Radix Popover Content documentation
 * @see https://headlessui.com/react/listbox#listbox-options - Headless UI Listbox Options documentation
 */

import React, { forwardRef, Fragment, useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Listbox, Transition } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import { SelectMenuContextData } from "../SelectMenu/selectMenuContext";

import { OPTION_GROUP_ALIGNMENT } from "./constants/selectMenuOptionGroup";

/**
 * @type {React.ForwardRefExoticComponent<SelectMenuOptionGroupProps & React.RefAttributes<HTMLUListElement>>}
 */
const SelectMenuOptionGroup = forwardRef(
  (
    {
      alignment,
      children,
      hasStickyItem,
      onKeyDown,
      maxWidth,
      wrapperClassName,
      container,
      // shouldInertElements
    },
    ref
  ) => {
    const { width } = useContext(SelectMenuContextData);

    return (
      <Popover.Portal {...(container !== null && { container })}>
        <Popover.Content
          asChild
          style={{
            minWidth: `${width}px`,
            maxWidth,
          }}
          align={alignment}
        >
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className={twClassNames(
                "z-500 my-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-default bg-raised-default py-1 shadow-lg outline-none",
                {
                  "pb-[43px] scroll-pb-[43px]": hasStickyItem,
                },
                wrapperClassName
              )}
              ref={ref}
              onKeyDown={onKeyDown}
              // modal={shouldInertElements} // TODO: Add this prop when headless upgrade
            >
              {children}
            </Listbox.Options>
          </Transition>
        </Popover.Content>
      </Popover.Portal>
    );
  }
);

SelectMenuOptionGroup.propTypes = {
  /** Alignment of the Select Menu Options list relative to the trigger. */
  alignment: PropTypes.oneOf(Object.values(OPTION_GROUP_ALIGNMENT)),
  /** Content to be displayed within the option group, typically `SelectMenuOption` components. */
  children: PropTypes.node.isRequired,
  /** The DOM element to portal the popover content into. */
  container: PropTypes.node,
  /** If true, adds padding to accommodate a sticky item at the bottom. */
  hasStickyItem: PropTypes.bool,
  /** Maximum width of the options list container (CSS value). */
  maxWidth: PropTypes.string,
  /** Callback function for keydown events on the options list. */
  onKeyDown: PropTypes.func,
  /** Specifies whether to enable accessibility features like scroll locking, focus trapping, and making other elements inert. */
  // shouldInertElements: PropTypes.bool,
  /** Custom CSS class name(s) for the `Listbox.Options` wrapper. */
  wrapperClassName: PropTypes.string,
};

SelectMenuOptionGroup.defaultProps = {
  alignment: OPTION_GROUP_ALIGNMENT.START,
  wrapperClassName: "",
  maxWidth: "80vw",
  hasStickyItem: false,
  onKeyDown: null,
  container: null,
  // shouldInertElements: false
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */

export default SelectMenuOptionGroup;
