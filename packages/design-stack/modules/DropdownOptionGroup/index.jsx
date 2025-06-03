import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Menu, Transition } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import { DropdownContextData } from "../Dropdown/context";

import DropdownSearchInput from "./components/DropdownSearchInput";
import SearchVariant from "./components/SearchVariant";

/**
 * @component DropdownOptionGroup
 * @description Renders the container for dropdown options, handling layout, search functionality, and transitions.
 * It integrates with Radix UI Popover and Headless UI Menu for accessibility and interaction patterns.
 *
 * @param {object} props - The component props.
 * @param {string} [props.ariaLabel] - Provides an accessible label for the dropdown menu group. Defaults to an empty string.
 * @param {React.ReactNode} props.children - The content to be rendered inside the dropdown group, typically `DropdownOption` components or similar. This is required.
 * @param {string} [props.wrapperClassName] - Custom CSS class name to apply to the main wrapper element (`Menu.Items`). Defaults to an empty string.
 * @param {string} [props.popoverContentClassName] - Custom CSS class name to apply to the Radix UI `Popover.Content` element. Defaults to an empty string.
 * @param {string} [props.searchWrapperClassName] - Custom CSS class name specifically for the wrapper around the children when search is enabled. Defaults to an empty string.
 * @param {boolean} [props.shouldInertElements=false] - If true, enables accessibility features like scroll locking, focus trapping, and making background elements inert when the dropdown is open. Defaults to `false`.
 * @param {object} [props.props] - Additional props passed down to the Radix UI `Popover.Content` component.
 *
 * @returns {React.ReactElement} The rendered DropdownOptionGroup component.
 */
const DropdownOptionGroup = ({
  ariaLabel = "",
  children,
  wrapperClassName = "",
  popoverContentClassName = "",
  searchWrapperClassName = "",
  shouldInertElements = false,
  ...props
}) => {
  const { align, side, isOpen, open, hasSearch, onSearch, container } =
    useContext(DropdownContextData);
  const conditionalProps = ariaLabel ? { "aria-label": ariaLabel } : {};

  return (
    <Popover.Portal {...(container !== null && { container })}>
      <Popover.Content
        {...props}
        className={twClassNames("z-500", popoverContentClassName)}
        asChild
        side={side}
        align={align}
        onOpenAutoFocus={e => e.preventDefault()}
      >
        <Transition
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          show={isOpen ?? open}
        >
          <Menu.Items
            className={twClassNames(
              "relative z-500 my-2 w-56 rounded-md border border-neutral-default bg-raised-default pb-1 shadow-lg outline-none focus:outline-none",
              { "pt-1": !hasSearch },
              wrapperClassName
            )}
            modal={shouldInertElements}
            {...conditionalProps}
          >
            {hasSearch ? (
              <>
                <DropdownSearchInput onSearch={onSearch} />
                <SearchVariant searchWrapperClassName={searchWrapperClassName}>
                  {children}
                </SearchVariant>
              </>
            ) : (
              children
            )}
          </Menu.Items>
        </Transition>
      </Popover.Content>
    </Popover.Portal>
  );
};

export const dropdownOptionGroupProps = {
  /**
   * Provides an accessible label for the dropdown menu group, enhancing screen reader support.
   * @type {string}
   */
  ariaLabel: PropTypes.string,
  /**
   * The content to be displayed within the DropdownOptionGroup. Typically includes `DropdownOption`
   * components or custom elements representing selectable items.
   * @type {React.ReactNode}
   * @required
   */
  children: PropTypes.node.isRequired,
  /**
   * Custom CSS class name applied to the Radix UI `Popover.Content` component, allowing for
   * fine-grained styling of the popover container itself.
   * @type {string}
   */
  popoverContentClassName: PropTypes.string,
  /**
   * Custom CSS class name applied specifically to the wrapper element (`div`) that contains the
   * `children` when the search input is enabled (`hasSearch` is true).
   * @type {string}
   */
  searchWrapperClassName: PropTypes.string,
  /**
   * Controls accessibility features when the dropdown is open. If set to `true`, it enables:
   * - **Scroll Locking:** Prevents scrolling of the background content.
   * - **Focus Trapping:** Keeps focus within the dropdown menu.
   * - **Inert:** Makes elements outside the dropdown non-interactive for screen readers and keyboard navigation.
   * Set to `false` to disable these features.
   * @type {boolean}
   * @default false
   */
  shouldInertElements: PropTypes.bool,
  /**
   * Custom CSS class name applied to the main wrapper element (`Menu.Items`), which contains
   * either the direct `children` or the search input and the search results wrapper.
   * @type {string}
   */
  wrapperClassName: PropTypes.string,
};
DropdownOptionGroup.propTypes = dropdownOptionGroupProps;

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-dropdown--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/854f04-dropdown/b/4635b4
 * @end
 */

export default DropdownOptionGroup;
