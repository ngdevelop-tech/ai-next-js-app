/**
 * @typedef {Object} SidebarItemNavChild
 * @property {React.ReactNode} [badge] - Optional badge component to display next to the child item label.
 * @property {string | number} id - Unique identifier for the child navigation item.
 * @property {string} [label] - The text label displayed for the child navigation item.
 * @property {React.ReactNode} [menuNode] - Optional custom React node to render instead of the default anchor tag structure.
 * @property {string} [path] - The URL path the child navigation item links to. Required if `menuNode` is not provided.
 * @property {React.ElementType} [activeIcon] - Optional icon component displayed when the child item is active.
 * @property {React.ElementType} [inActiveIcon] - Optional icon component displayed when the child item is inactive.
 */

/**
 * @typedef {Object} SidebarItemNav
 * @property {React.ElementType} [activeIcon] - Optional icon component displayed when the item is active or contains the active child.
 * @property {React.ElementType} [inActiveIcon] - Optional icon component displayed when the item is inactive.
 * @property {React.ReactNode} [badge] - Optional badge component to display next to the item label.
 * @property {SidebarItemNavChild[]} [childrens] - An array of child navigation item objects to be rendered in a nested list when the item is expanded.
 * @property {string | number} id - Unique identifier for the navigation item.
 * @property {boolean} [isDefaultExpanded] - If true, the item will be expanded by default (only applicable if it has children).
 * @property {string} [label] - The text label displayed for the navigation item.
 * @property {React.ReactNode} [menuNode] - Optional custom React node to render instead of the default anchor tag structure. If provided, `path`, `label`, `activeIcon`, `inActiveIcon`, `badge`, and `childrens` might be ignored for the root item rendering.
 * @property {string} [path] - The URL path the navigation item links to. Required if `menuNode` is not provided.
 */

/**
 * @typedef {Object} SidebarItemProps
 * @property {(string | number)} [currentId] - The ID of the currently active item in the entire sidebar navigation. Used to determine active styles.
 * @property {(event: React.MouseEvent<HTMLAnchorElement>, navItem: SidebarItemNav | SidebarItemNavChild) => void} [handleNavigationClick] - A callback function triggered when any navigation item (root or child) is clicked. Receives the click event and the corresponding nav data object.
 * @property {string} [id] - Optional unique HTML id attribute to apply to the root `<li>` element.
 * @property {'brand' | 'simple'} [modifier='simple'] - Specifies the visual variant of the item. 'brand' applies brand-specific styling, 'simple' applies default styling.
 * @property {SidebarItemNav} nav - An object containing the data for the sidebar item, including its label, path, icons, potential children, and other configuration.
 * @property {(isExpanded: boolean, navData: SidebarItemNav) => void} [onChevronIconClick] - Callback function invoked when the chevron icon (for expandable items) is clicked. Receives the new expanded state (true/false) and the nav data object of the item.
 * @property {string} section - A string identifier for the section this item belongs to, used for keyboard navigation context (e.g., navigating between items using arrow keys).
 */

import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  handleKeyDown,
  // setFocusToNextTreeitem,
  // setFocusToPreviousTreeitem
} from "../../utils/sideBarItem";
import { SidebarNavigationContextData } from "../SidebarNavigation/sidebarNavigationContext";

import RenderChevronIcon from "./components/RenderChevronIcon";
import { MODIFIER_CLASSNAMES, SIDEBAR_MODIFIER } from "./constants/sidebarItem";
import useSidebarItem from "./useSidebarItem";

const printIcon = (Icon, classes) => <Icon className={classes} />;

/**
 * Represents a single item within the SidebarNavigation component.
 * It can be a simple link, an expandable item with children, or render a custom node.
 * Handles rendering, active state indication, expansion/collapse of nested items,
 * and keyboard navigation within its scope.
 *
 * @component
 * @param {SidebarItemProps} props - The props for the SidebarItem component.
 * @returns {JSX.Element | null} The rendered sidebar item element or null if nav prop is not provided.
 *
 * @example
 * const navItem = {
 *   id: 'dashboard',
 *   label: 'Dashboard',
 *   path: '/dashboard',
 *   inActiveIcon: HomeIconInactive,
 *   activeIcon: HomeIconActive,
 * };
 * <SidebarItem
 *   nav={navItem}
 *   currentId={selectedItemId}
 *   handleNavigationClick={handleItemClick}
 *   section="main"
 *   modifier="brand"
 * />
 *
 * @example
 * const navParentItem = {
 *   id: 'settings',
 *   label: 'Settings',
 *   inActiveIcon: SettingsIconInactive,
 *   activeIcon: SettingsIconActive,
 *   childrens: [
 *     { id: 'profile', label: 'Profile', path: '/settings/profile' },
 *     { id: 'billing', label: 'Billing', path: '/settings/billing' },
 *   ],
 * };
 * <SidebarItem
 *   nav={navParentItem}
 *   currentId={selectedItemId}
 *   handleNavigationClick={handleItemClick}
 *   section="main"
 * />
 *
 * @accessibility
 * - Uses `role="treeitem"` for semantic structure within the navigation tree.
 * - Uses `aria-current="true"` to indicate the currently active item.
 * - Uses `aria-expanded` to indicate the state of expandable items.
 * - Uses `aria-owns` to associate the parent item with its group of children (`ul`).
 * - Supports keyboard navigation:
 *   - `Enter` or `Space`: Activates the item (navigates or toggles expansion).
 *   - `ArrowDown`: Moves focus to the next item in the tree.
 *   - `ArrowUp`: Moves focus to the previous item in the tree.
 *   - `ArrowRight`: Expands a collapsed item or moves to the first child if already expanded.
 *   - `ArrowLeft`: Collapses an expanded item or moves focus to the parent item if collapsed/no children.
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigation--sidebarwith-brand-image|Storybook Example}
 * @see {@link https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4|Zeroheight Design Specs}
 */
const SidebarItem = ({
  currentId = null,
  handleNavigationClick = null,
  id = null,
  modifier = SIDEBAR_MODIFIER.SIMPLE,
  nav = null,
  onChevronIconClick = null,
  section,
}) => {
  const {
    current,
    onChevronClickHandler,
    handleClick,
    isExpanded,
    isIconPresent,
    isNestedItem,
    leftArrowClick,
    rightArrowClick,
    updateItemsRef,
    itemClickHandler,
  } = useSidebarItem(currentId, handleNavigationClick, nav, onChevronIconClick);

  // handle case where SidebarItem is used w/o parent SidebarNavigation
  const {
    isCollapsedStateActive: isSidebarNavInCollapsedState,
    showItemsInExpandedState,
  } = useContext(SidebarNavigationContextData) || {
    isCollapsedStateActive: false,
    showItemsInExpandedState: true,
  };

  return (
    <>
      {nav ? (
        <li
          key={nav.id}
          {...(id !== null && { id })}
          role="none"
          className="list-none"
          ref={el => updateItemsRef(nav.id, el)}
        >
          <a
            href={nav.path}
            role="treeitem"
            aria-selected={current}
            aria-current={current}
            {...(isNestedItem && {
              "aria-expanded": isExpanded,
              "aria-owns": `group-${nav.id}`,
            })}
            className={twClassNames(
              `group flex h-9 items-center justify-between rounded-md p-2 text-sm font-semibold leading-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong`,
              {
                [MODIFIER_CLASSNAMES[modifier].ACTIVE_ITEM_CLASS]: current,
                [MODIFIER_CLASSNAMES[modifier].INACTIVE_ITEM_CLASS]: !current,
              }
            )}
            onKeyDown={e =>
              handleKeyDown(
                e,
                section,
                itemClickHandler,
                leftArrowClick,
                rightArrowClick
              )
            }
            onClick={e => itemClickHandler(e)}
          >
            <div className="flex items-center gap-2">
              {isIconPresent ? (
                <>
                  {printIcon(
                    current ? nav.activeIcon : nav.inActiveIcon,
                    `flex-shrink-0  ${
                      current
                        ? MODIFIER_CLASSNAMES[modifier].ACTIVE_ICON_CLASS
                        : MODIFIER_CLASSNAMES[modifier].INACTIVE_ICON_CLASS
                    }`
                  )}
                </>
              ) : (
                <RenderChevronIcon
                  current={current}
                  isExpanded={isExpanded}
                  isNestedItem={!!isNestedItem}
                  onChevronClickHandler={onChevronClickHandler}
                />
              )}
              {/* show item label and rest of content for sidebar expanded state */}
              <span
                className={twClassNames(
                  "whitespace-nowrap opacity-100 transition-opacity duration-300 ease-in-out",
                  { "opacity-0": isSidebarNavInCollapsedState }
                )}
              >
                {nav.label}
              </span>
            </div>

            <div
              className={twClassNames(
                "flex items-center gap-3 opacity-100 transition-opacity duration-300 ease-in-out",
                { "opacity-0": isSidebarNavInCollapsedState }
              )}
            >
              {nav.badge}
              {isIconPresent && (
                <RenderChevronIcon
                  current={current}
                  isExpanded={isExpanded}
                  isNestedItem={!!isNestedItem}
                  onChevronClickHandler={onChevronClickHandler}
                />
              )}
            </div>
          </a>

          {/* show children for sidebar expanded state only */}
          {isNestedItem && isExpanded && (
            <ul id={`group-${nav.id}`} className="mt-1 space-y-1" role="group">
              {nav.childrens.map(subNav => (
                <li
                  role="none"
                  className="list-none"
                  key={subNav.id}
                  ref={el => updateItemsRef(subNav.id, el)}
                  {...(subNav?.id !== null && { id: subNav.id })}
                >
                  {subNav.menuNode ? (
                    <div
                      className={twClassNames({
                        "mx-2": showItemsInExpandedState,
                      })}
                      role="treeitem"
                      aria-selected={current}
                    >
                      {subNav.menuNode}
                    </div>
                  ) : (
                    <a
                      href={subNav.path}
                      role="treeitem"
                      aria-selected={currentId === subNav.id}
                      aria-current={currentId === subNav.id}
                      className={twClassNames(
                        "group flex w-full items-center justify-between rounded-md py-2 pl-11 pr-2 text-sm font-normal leading-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong",
                        {
                          [MODIFIER_CLASSNAMES[modifier].ACTIVE_ITEM_CLASS]:
                            currentId === subNav.id,
                          [MODIFIER_CLASSNAMES[modifier].INACTIVE_ITEM_CLASS]:
                            !(currentId === subNav.id),
                          "pl-2": subNav.activeIcon || subNav.inActiveIcon,
                        }
                      )}
                      onKeyDown={e =>
                        handleKeyDown(e, section, () => handleClick(e, subNav))
                      }
                      onClick={e => handleClick(e, subNav)}
                    >
                      <div className="flex items-center gap-2">
                        {(subNav.activeIcon || subNav.inActiveIcon) &&
                          printIcon(
                            current ? subNav.activeIcon : subNav.inActiveIcon,
                            `flex-shrink-0 ${
                              currentId === subNav.id
                                ? MODIFIER_CLASSNAMES[modifier]
                                    .ACTIVE_ICON_CLASS
                                : MODIFIER_CLASSNAMES[modifier]
                                    .INACTIVE_ICON_CLASS
                            }`
                          )}
                        <span
                          className={twClassNames(
                            "whitespace-nowrap opacity-100 transition-opacity duration-300 ease-in-out",
                            { "opacity-0": isSidebarNavInCollapsedState }
                          )}
                        >
                          {subNav.label}
                        </span>
                      </div>
                      <div
                        className={twClassNames(
                          "flex items-center gap-3 opacity-100 transition-opacity duration-300 ease-in-out",
                          { "opacity-0": isSidebarNavInCollapsedState }
                        )}
                      >
                        {subNav.badge}
                      </div>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ) : null}
    </>
  );
};

SidebarItem.propTypes = {
  /** Item id of current active item in the sidebar navigation. */
  currentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** A callback function triggered when the sidebar item is clicked. Passes event and nav object. */
  handleNavigationClick: PropTypes.func,
  /** Prop to add unique id attribute to root `<li>` element of the component. */
  id: PropTypes.string,
  /** Specifies whether the item is 'brand' or 'simple' variant, to apply additional styles accordingly. */
  modifier: PropTypes.oneOf([SIDEBAR_MODIFIER.BRAND, SIDEBAR_MODIFIER.SIMPLE]),
  /** An object containing data related to the sidebar item and its nested children. */
  nav: PropTypes.shape({
    /** Optional icon component displayed when the item is active or contains the active child. */
    activeIcon: PropTypes.elementType,
    /** Optional badge component to display next to the item label. */
    badge: PropTypes.node,
    /** An array of child navigation item objects. */
    childrens: PropTypes.arrayOf(
      PropTypes.shape({
        /** Optional badge component for the child item. */
        badge: PropTypes.node,
        /** Unique identifier for the child navigation item. */
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        /** Text label for the child navigation item. */
        label: PropTypes.string,
        /** Optional custom React node to render for the child item. */
        menuNode: PropTypes.node,
        path: PropTypes.string,
      })
    ),
    /** Unique identifier for the navigation item. */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /** Optional icon component displayed when the item is inactive. */
    inActiveIcon: PropTypes.elementType,
    /** If true, the item will be expanded by default (if it has children). */
    isDefaultExpanded: PropTypes.bool,
    /** Text label for the navigation item. */
    label: PropTypes.string,
    /** Optional custom React node to render instead of the default item structure. */
    menuNode: PropTypes.node,
    /** URL path the navigation item links to. */
    path: PropTypes.string,
  }),
  /** Callback function on click of chevron icon with item's current expanded state and nav data */
  onChevronIconClick: PropTypes.func,
  /** Specifies the section the item is part of, used for keyboard navigation context. */
  section: PropTypes.string.isRequired,
};

SidebarItem.defaultProps = {
  currentId: null,
  handleNavigationClick: null,
  id: null,
  modifier: SIDEBAR_MODIFIER.SIMPLE,
  nav: null,
  onChevronIconClick: null,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigation--sidebarwith-brand-image
 * @zeroHeight https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4
 * @end
 */

export default SidebarItem;
