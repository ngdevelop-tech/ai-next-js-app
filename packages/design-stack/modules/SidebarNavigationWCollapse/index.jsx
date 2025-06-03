/**
 * @typedef {Object} SidebarNavigationItem
 * @property {string} id - Unique identifier for the navigation item.
 * @property {React.ReactNode} icon - Icon to display for the navigation item.
 * @property {string} label - Text label for the navigation item. Used for display and accessibility (e.g., aria-label).
 * @property {string} path - The navigation path associated with the item.
 * @property {boolean} [active] - Indicates if the item is currently active/selected.
 */

/**
 * @typedef {Object} SidebarNavigationWCollapseProps
 * @property {number} collapsedCutoff - Cutoff value in pixels to trigger collapsed sidebar. Below this width, the sidebar shows only icons with tooltips.
 * @property {string} [id] - Optional unique identifier for the root element of the component.
 * @property {(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>, item: SidebarNavigationItem) => void} [onClick] - Callback function triggered when a sidebar item is clicked. Receives the event and the clicked item's data.
 * @property {SidebarNavigationItem[]} [sidebarPrimaryNavigation] - Array of navigation items for the primary section.
 * @property {SidebarNavigationItem[]} [sidebarSecondaryNavigation] - Array of navigation items for the secondary section, typically placed at the bottom.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply to the root `div` element for additional styling.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import useWindowSize from "../../../hooks/src/useWindowSize";
import Button from "../Button";
import Tooltip from "../Tooltip";

/**
 * Renders a sidebar navigation component that collapses to an icon-only view
 * below a specified viewport width (`collapsedCutoff`). It supports primary and
 * secondary navigation sections.
 *
 * @component
 * @example
 * const primaryNav = [
 *   { id: 'dashboard', icon: <DashboardIcon />, label: 'Dashboard', path: '/dashboard', active: true },
 *   { id: 'reports', icon: <ReportsIcon />, label: 'Reports', path: '/reports' },
 * ];
 * const secondaryNav = [
 *   { id: 'settings', icon: <SettingsIcon />, label: 'Settings', path: '/settings' },
 * ];
 *
 * <SidebarNavigationWCollapse
 *   collapsedCutoff={768}
 *   sidebarPrimaryNavigation={primaryNav}
 *   sidebarSecondaryNavigation={secondaryNav}
 *   onClick={(e, item) => console.log('Clicked:', item.label)}
 * />
 *
 * @see Tooltip
 * @see Button
 * @accessibility
 * - Uses `role="button"` and `tabIndex={0}` for non-button elements acting as clickable items.
 * - Uses `onKeyDown` to handle Enter key presses for accessibility on non-button elements.
 * - Uses `aria-label` on buttons in collapsed view via Tooltip's `triggerAriaLabel`.
 * - Tooltips provide accessible names for icon-only buttons in the collapsed state.
 * @type {React.FC<SidebarNavigationWCollapseProps>}
 */
const SidebarNavigationWCollapse = ({
  collapsedCutoff,
  id = null,
  onClick = null,
  sidebarPrimaryNavigation = [],
  sidebarSecondaryNavigation = [],
  wrapperClassName = "",
}) => {
  const handleClick = (e, item) => {
    e.preventDefault();
    onClick?.(e, item);
  };

  const viewPortDimensions = useWindowSize();

  return (
    <div
      {...(id !== null && { id })}
      className={twClassNames(
        "fixed inset-y-0 z-100 flex min-h-0 w-64 flex-1 flex-col space-y-2 border-r border-neutral-default px-2 pt-6",
        {
          "px-1 w-fit": viewPortDimensions.width < collapsedCutoff,
        },
        wrapperClassName
      )}
    >
      <div className="flex flex-1 flex-col space-y-5 overflow-y-auto pb-2">
        {sidebarPrimaryNavigation && (
          <div className="flex flex-1 flex-col overflow-y-auto">
            {sidebarPrimaryNavigation.map(item => (
              <React.Fragment key={item.id}>
                <div className="mt-1">
                  {viewPortDimensions.width < collapsedCutoff ? (
                    <Tooltip
                      theme="dark"
                      content={
                        <p className="px-4 text-sm leading-5 text-neutral-inverse-weak">
                          {item.label}
                        </p>
                      }
                      triggerAriaLabel={item.label}
                    >
                      <Button
                        fullWidth
                        variant="secondary"
                        colors="white"
                        onClick={e => handleClick(e, item)}
                        wrapperClassName={twClassNames(
                          "flex items-center justify-items-start rounded-md p-2 text-sm font-medium icon-neutral-weak",
                          {
                            "bg-neutral-stronger": item.active,
                          }
                        )}
                        ariaLabel={item.label}
                      >
                        {item.icon}
                      </Button>
                    </Tooltip>
                  ) : (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={e => handleClick(e, item)}
                      onKeyDown={e => {
                        if (e.key === "Enter") handleClick(e, item);
                      }}
                      className={twClassNames(
                        "flex w-full items-center justify-items-start rounded-md p-2 text-sm font-medium icon-neutral-weak",
                        {
                          "bg-neutral-stronger": item.active,
                        }
                      )}
                    >
                      {item.icon}
                      <div
                        className={twClassNames(
                          "ml-4 text-sm font-medium leading-5 text-neutral-weak",
                          {
                            "text-neutral-default": item.active,
                          }
                        )}
                      >
                        {item.label}
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      {sidebarSecondaryNavigation && (
        <div className="flex shrink-0 flex-col pb-2">
          {sidebarSecondaryNavigation.map(item => (
            <React.Fragment key={item.id}>
              <div className="mt-1">
                {viewPortDimensions.width < collapsedCutoff ? (
                  <Tooltip
                    theme="dark"
                    content={
                      <p className="px-4 text-sm leading-5 text-neutral-inverse-weak">
                        {item.label}
                      </p>
                    }
                    triggerAriaLabel={item.label}
                  >
                    <Button
                      fullWidth
                      variant="secondary"
                      colors="white"
                      onClick={e => handleClick(e, item)}
                      wrapperClassName={twClassNames(
                        "flex items-center justify-items-start rounded-md p-2 text-sm font-medium icon-neutral-weaker",
                        {
                          "bg-neutral-stronger": item.active,
                        }
                      )}
                      ariaLabel={item.label}
                    >
                      {item.icon}
                    </Button>
                  </Tooltip>
                ) : (
                  <div
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => {
                      if (e.key === "Enter") handleClick(e, item);
                    }}
                    onClick={e => handleClick(e, item)}
                    className={twClassNames(
                      "flex w-full items-center justify-items-start rounded-md p-2 text-sm font-medium icon-neutral-weaker",
                      {
                        "bg-neutral-stronger": item.active,
                      }
                    )}
                  >
                    {item.icon}
                    <div className="ml-4 text-sm font-medium leading-5 text-neutral-weak">
                      {item.label}
                    </div>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

SidebarNavigationWCollapse.propTypes = {
  /** Cutoff value in pixels to trigger collapsed sidebar */
  collapsedCutoff: PropTypes.number.isRequired,
  /** Optional unique identifier for the root element of the component. */
  id: PropTypes.string,
  /** Callback function triggered when a sidebar item is clicked. Receives the event and the clicked item's data. */
  onClick: PropTypes.func,
  /** Array of navigation items for the primary section. */
  sidebarPrimaryNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      /** Icon to display for the navigation item. */
      icon: PropTypes.node,
      /** Unique identifier for the navigation item. */
      id: PropTypes.string,
      /** Text label for the navigation item. Used for display and accessibility. */
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  /** Array of navigation items for the secondary section, typically placed at the bottom. */
  sidebarSecondaryNavigation: PropTypes.arrayOf(
    PropTypes.shape({
      /** Icon to display for the navigation item. */
      icon: PropTypes.node,
      /** Unique identifier for the navigation item. */
      id: PropTypes.string,
      /** Text label for the navigation item. Used for display and accessibility. */
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  /** Optional custom CSS class name to apply to the root `div` element for additional styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigationwcollapse--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4
 * @end
 */

export default SidebarNavigationWCollapse;
