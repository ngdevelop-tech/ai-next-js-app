/**
 * @typedef {Object} SidebarPrimarySection
 * @property {string} sectionId - A unique identifier for the section. This should match the `section` prop of the `SidebarItem` components within this section.
 * @property {string} [sectionLabel] - An optional label displayed above the section's options when the sidebar is expanded.
 * @property {React.ReactNode} sectionOptions - The `SidebarItem` components or other React nodes belonging to this section.
 */

/**
 * @typedef {Object} SidebarProps
 * @property {string} [actionPanelTitle] - Title displayed above the CTAs in the action panel at the bottom of the expanded sidebar. Required if CTAs are provided.
 * @property {string} [ariaLabel="Main navigation"] - Accessible label for the navigation landmark (<nav> element). Helps screen reader users understand the purpose of the navigation.
 *   @accessibility Provides context for assistive technologies. Defaults to "Main navigation".
 *   @example "Product features navigation"
 * @property {string} [collapsibleButtonWrapperClassName] - Custom CSS class name to apply additional styles to the wrapper div of the collapse/expand button.
 * @property {string} [ctaOneLabel] - Label for the primary call-to-action button in the action panel. Requires `ctaOneOnClick` and `actionPanelTitle`.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [ctaOneOnClick] - Callback function executed when the primary CTA button is clicked. Requires `ctaOneLabel` and `actionPanelTitle`.
 * @property {string} [ctaTwoLabel] - Label for the secondary call-to-action button in the action panel. Requires `ctaTwoOnClick` and `actionPanelTitle`.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [ctaTwoOnClick] - Callback function executed when the secondary CTA button is clicked. Requires `ctaTwoLabel` and `actionPanelTitle`.
 * @property {string} [id] - Unique HTML id attribute applied to the root <nav> element of the sidebar.
 * @property {boolean} [isCollapsible=false] - If `true`, the sidebar can be collapsed and expanded via a button and hover/focus interactions.
 * @property {boolean} [isDefaultCollapsed=false] - If `true`, the sidebar will be initially rendered in its collapsed state. Only effective if `isCollapsible` is also `true`.
 * @property {string} [label] - **Deprecated.** Label for the sidebar component. Use `sidebarPrimarySections` instead.
 * @property {React.ReactNode} [navigationOptionsWithLabel] - **Deprecated.** Node containing navigation items. Use `sidebarPrimarySections` instead.
 * @property {(isCollapsed: boolean) => void} [onSidebarCollapse] - Callback function executed when the collapse/expand button is clicked. Receives the new collapsed state (`true` for collapsed, `false` for expanded) as an argument.
 * @property {(isHoverTriggered: boolean) => void} [onSidebarCollapseHover] - Callback function executed when the sidebar's collapsed state changes due to hover or focus interactions (only when `isCollapsible` is true). Receives `true` if hover/focus caused expansion, `false` otherwise.
 * @property {string} [outerWrapperClassName] - Custom CSS class name to apply additional styles to the outermost `div` wrapper containing the sidebar and the collapse button.
 * @property {React.ReactNode} [sidebarHeader] - Custom content to be displayed at the top of the sidebar when it is expanded. Typically used for logos, brand names, or main navigation links.
 * @property {React.ReactNode} [sidebarHeaderCollapsed] - Custom content to be displayed at the top of the sidebar when it is collapsed. Should be a compact version of `sidebarHeader`, often just an icon or small logo.
 * @property {string} [sidebarPrimaryLabel] - **Deprecated.** Primary label for the sidebar component. Use `sidebarPrimarySections` instead.
 * @property {React.ReactNode} [sidebarPrimaryNavigation] - **Deprecated.** Node containing primary navigation items. Use `sidebarPrimarySections` instead. <b>Note</b>: Refrain from using random keys when looping `SidebarItem`.
 * @property {SidebarPrimarySection[]} [sidebarPrimarySections] - An array of section objects defining the primary navigation structure. This is the preferred way to define sidebar content, replacing deprecated props like `label`, `navigationOptionsWithLabel`, `sidebarPrimaryLabel`, and `sidebarPrimaryNavigation`. Each object defines a section with an optional label and its navigation items. `sectionId` within each object should match the `section` prop of contained `SidebarItem`s. <b>Note</b>: Refrain from using random keys when looping `SidebarItem` within `sectionOptions`.
 * @property {React.ReactNode} [sidebarSecondaryNavigation] - Node containing secondary navigation items, typically displayed below the primary sections and action panel. Often used for settings, help, or logout links. <b>Note</b>: Refrain from using random keys when looping `SidebarItem`.
 * @property {string} [wrapperClassName] - Custom CSS class name to apply additional styles directly to the `nav` element of the sidebar.
 */

import React, { useCallback, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";

import SidebarNavigationActionPanel from "./components/SidebarNavigationActionPanel";
import { SIDEBAR_EXPANSION_DELAY } from "./constants/sidebarNavigation";
import { SidebarNavigationContextData } from "./sidebarNavigationContext";
import useSidebarNavigation from "./useSidebarNavigation";

/**
 * Sidebar Navigation provides a structured way to navigate through different sections of an application.
 * It can be configured to be collapsible and supports primary/secondary navigation sections,
 * a header area, and an optional action panel with CTAs.
 *
 * @component
 * @example
 * // Basic Sidebar with primary sections
 * <Sidebar
 *   isCollapsible
 *   sidebarHeader={<BrandLogo />}
 *   sidebarHeaderCollapsed={<BrandIcon />}
 *   sidebarPrimarySections={[
 *     {
 *       sectionId: 'dashboard',
 *       sectionOptions: <SidebarItem label="Dashboard" icon={<DashboardIcon />} href="/dashboard" />
 *     },
 *     {
 *       sectionId: 'products',
 *       sectionLabel: 'Manage',
 *       sectionOptions: (
 *         <>
 *           <SidebarItem label="Products" icon={<ProductIcon />} href="/products" section="products" />
 *           <SidebarItem label="Orders" icon={<OrderIcon />} href="/orders" section="products" />
 *         </>
 *       )
 *     }
 *   ]}
 *   sidebarSecondaryNavigation={
 *     <SidebarItem label="Settings" icon={<SettingsIcon />} href="/settings" />
 *   }
 * />
 *
 * @example
 * // Sidebar with Action Panel
 * <Sidebar
 *   // ... other props
 *   actionPanelTitle="Need Help?"
 *   ctaOneLabel="Contact Support"
 *   ctaOneOnClick={() => console.log('Contact clicked')}
 *   ctaTwoLabel="View Docs"
 *   ctaTwoOnClick={() => window.open('/docs', '_blank')}
 * />
 *
 * @param {SidebarProps} props - The props for the Sidebar component.
 * @returns {React.ReactElement} The rendered Sidebar component.
 * @see SidebarItem
 * @accessibility
 * - Uses a `<nav>` element for semantic structure.
 * - `aria-label` prop provides context for the navigation landmark.
 * - Interactive elements like `SidebarItem` and the collapse button should be keyboard accessible.
 * - Ensures sufficient color contrast for text and icons.
 */
const Sidebar = ({
  actionPanelTitle = "",
  ariaLabel = "Main navigation",
  collapsibleButtonWrapperClassName = "",
  ctaOneLabel = "",
  ctaOneOnClick = null,
  ctaTwoLabel = "",
  ctaTwoOnClick = null,
  id = null,
  isCollapsible = false,
  isDefaultCollapsed = false,
  label = "",
  navigationOptionsWithLabel = null,
  onSidebarCollapse = null,
  onSidebarCollapseHover = null,
  outerWrapperClassName = "",
  sidebarHeader = null,
  sidebarHeaderCollapsed = null,
  sidebarPrimarySections = null,
  sidebarPrimaryLabel = "",
  sidebarPrimaryNavigation = null,
  sidebarSecondaryNavigation = null,
  wrapperClassName = "",
}) => {
  const {
    sectionArray,
    setIsCollapsedOnHover,
    setIsCollapsed,
    isCollapsedStateActive,
    isCollapsedOnHover,
    isCollapsed,
    showItemsInExpandedState,
  } = useSidebarNavigation({
    isCollapsible,
    isDefaultCollapsed,
    sidebarPrimarySections,
    sidebarPrimaryLabel,
    sidebarPrimaryNavigation,
    label,
    navigationOptionsWithLabel,
    onSidebarCollapseHover,
  });

  let timeoutId;

  const sidebarSectionLabel = useCallback(
    sectionLabel => {
      if (sectionLabel) {
        if (isCollapsedStateActive) {
          return (
            <div className="my-2.5 flex h-1 w-1 self-center rounded-full bg-neutral-inverse-weakest" />
          );
        }
        return (
          <h2
            className={twClassNames(
              "mb-1 whitespace-nowrap pl-4 text-xs font-semibold leading-4 text-neutral-weaker opacity-100 transition-opacity duration-300 ease-in-out"
            )}
          >
            {sectionLabel}
          </h2>
        );
      }
      return null;
    },
    [isCollapsedStateActive]
  );

  useEffect(() => {
    // Function to handle changes in screen size
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
        onSidebarCollapse?.(true);
        setIsCollapsedOnHover(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onSidebarCollapse, setIsCollapsed, setIsCollapsedOnHover]);

  return (
    <SidebarNavigationContextData.Provider
      value={{ isCollapsedStateActive, showItemsInExpandedState }}
    >
      <div
        className={twClassNames("relative", outerWrapperClassName)}
        // actions when sidebar is collapsed using button
        // open on hover inside sidebar
        onMouseOver={() => {
          if (isCollapsedOnHover && isCollapsed && !timeoutId) {
            timeoutId = setTimeout(() => {
              setIsCollapsedOnHover(false);
            }, SIDEBAR_EXPANSION_DELAY);
          }
        }}
        // close on outside hover
        onMouseLeave={() => {
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = undefined;
          }

          if (!isCollapsedOnHover && isCollapsed) {
            setIsCollapsedOnHover(true);
          }
        }}
        // open on focus inside sidebar
        onFocus={() => {
          if (isCollapsedOnHover && isCollapsed) {
            setIsCollapsedOnHover(false);
          }
        }}
        // close on focus outside sidebar
        onBlur={e => {
          if (
            e.target.tagName !== "INPUT" && // ignore blur event fired from header combobox new item selection from mouse
            !e.currentTarget.contains(e.relatedTarget) &&
            !isCollapsedOnHover &&
            isCollapsed
          ) {
            setIsCollapsedOnHover(true);
          }
        }}
      >
        <nav
          className={twClassNames(
            "fixed inset-y-0 z-100 flex min-h-0 flex-1 flex-col space-y-2 border-r border-neutral-default bg-neutral-default py-4 transition-all duration-300 ease-in-out",
            isCollapsedStateActive ? "w-14" : "w-64", // change width as per collapsible state
            { "pt-6": isCollapsible },
            wrapperClassName
          )}
          {...(id !== null && { id })}
          aria-label={ariaLabel}
        >
          <div
            className={twClassNames(
              "flex flex-1 flex-col overflow-y-auto overflow-x-hidden",
              {
                "overflow-hidden": isCollapsedStateActive,
              }
            )}
          >
            <div className="flex flex-1 list-none flex-col space-y-3 pb-3">
              {/* show appropritae header based on sidebar state */}
              {showItemsInExpandedState
                ? sidebarHeader
                : sidebarHeaderCollapsed}

              {sectionArray
                ? sectionArray.map(
                    ({ sectionLabel, sectionId, sectionOptions }) => (
                      <div
                        key={sectionLabel}
                        className="flex flex-col [&:not(:last-child)]:pb-2"
                      >
                        {sidebarSectionLabel(sectionLabel)}
                        {sectionOptions && (
                          <ul
                            data-test={`side-bar-navigation-${sectionId}`}
                            role="tree"
                            aria-label={`side-bar-navigation-${sectionId}`}
                            className="flex shrink-0 flex-col gap-1 px-2"
                          >
                            {sectionOptions}
                          </ul>
                        )}
                      </div>
                    )
                  )
                : null}
            </div>

            {((ctaOneLabel && ctaOneOnClick) ||
              (ctaTwoLabel && ctaTwoOnClick)) &&
            actionPanelTitle &&
            showItemsInExpandedState ? (
              <div className="flex shrink-0 flex-col px-2">
                <SidebarNavigationActionPanel
                  title={actionPanelTitle}
                  ctaOneLabel={ctaOneLabel}
                  ctaOneOnClick={ctaOneOnClick}
                  ctaTwoLabel={ctaTwoLabel}
                  ctaTwoOnClick={ctaTwoOnClick}
                />
              </div>
            ) : null}

            {sidebarSecondaryNavigation ? (
              <ul
                data-test="side-bar-navigation-secondary"
                role="tree"
                aria-label="side-bar-navigation-secondary"
                className="flex shrink-0 flex-col px-2"
              >
                {sidebarSecondaryNavigation}
              </ul>
            ) : null}
          </div>
        </nav>
        {isCollapsible && (
          <Button
            wrapperClassName={twClassNames(
              "absolute top-[5px] z-100 flex -translate-x-3 cursor-pointer items-center justify-center p-0 transition-all duration-300 ease-in-out",
              isCollapsedStateActive ? "left-14" : "left-64", // positioning based on sidebar width (collapsed/expanded)
              collapsibleButtonWrapperClassName
            )}
            // toggle collapsed state on button click
            onClick={() => {
              onSidebarCollapse?.(!isCollapsed);
              setIsCollapsed(!isCollapsed);
              setIsCollapsedOnHover(!isCollapsedStateActive);
            }}
            // stop nav focus events when button is in focus
            onFocus={e => {
              e.stopPropagation();
            }}
            // stop nav hover events when button is hovered
            onMouseOver={e => {
              e.stopPropagation();
            }}
            aria-label="sidebar expand collapse button"
            variant="rounded"
            colors="white"
            isIconOnlyButton
            icon={
              isCollapsed ? (
                <MdKeyboardArrowRight className="h-5 w-5" />
              ) : (
                <MdKeyboardArrowLeft className="h-5 w-5" />
              )
            }
          >
            <span
              className="absolute"
              style={{
                insetInline: "-6px",
                insetBlockStart: "0px",
                insetBlockEnd: "-12px",
              }}
            />
          </Button>
        )}
      </div>
    </SidebarNavigationContextData.Provider>
  );
};

Sidebar.propTypes = {
  /** Action panel title. */
  actionPanelTitle: PropTypes.string,
  /**
   * Accessible label for the navigation landmark. This helps screen reader users understand
   * the purpose of the navigation. If not provided or empty, defaults to "Main navigation".
   * @example
   * ariaLabel="Product navigation"
   */
  ariaLabel: PropTypes.string,
  /** A custom CSS class name to style the collapsible button. */
  collapsibleButtonWrapperClassName: PropTypes.string,
  /** The first CTA label. */
  ctaOneLabel: PropTypes.string,
  /** The first CTA onClick function. */
  ctaOneOnClick: PropTypes.func,
  /** The second CTA label. */
  ctaTwoLabel: PropTypes.string,
  /** The second CTA onClick function. */
  ctaTwoOnClick: PropTypes.func,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** Specify if the sidebar can be colapsed */
  isCollapsible: PropTypes.bool,
  /** Specify if the default sidebar state */
  isDefaultCollapsed: PropTypes.bool,
  /** Label for the sidebar component. Cannot be used in combination with `sidebarPrimarySections`. `label` and `navigationOptionsWithLabel` props to be deprecated soon. */
  label: PropTypes.string,
  /** Node containing the content that will be displayed within the navigation options section of the sidebar. Cannot be used in combination with `sidebarPrimarySections`. `label` and `navigationOptionsWithLabel` props to be deprecated soon. */
  navigationOptionsWithLabel: PropTypes.node,
  /** Callback on clicking collapsible button */
  onSidebarCollapse: PropTypes.func,
  /** Callback on hovering of sidebar */
  onSidebarCollapseHover: PropTypes.func,
  /** A custom CSS class name to style the wrapper of the entire sidebar. */
  outerWrapperClassName: PropTypes.string,
  /** Node containing the content that will be displayed within the header section of the sidebar */
  sidebarHeader: PropTypes.node,
  /** Node containing the content that will be displayed within the header section of the collapsed sidebar */
  sidebarHeaderCollapsed: PropTypes.node,
  /** Primary label for the sidebar component. Cannot be used in combination with `sidebarPrimarySections`. `sidebarPrimaryLabel` and `sidebarPrimaryNavigation` props to be deprecated soon. */
  sidebarPrimaryLabel: PropTypes.string,
  /** Node containing the content that will be displayed within the primary navigation section of the sidebar. Cannot be used in combination with `sidebarPrimarySections`. `sidebarPrimaryLabel` and `sidebarPrimaryNavigation` props to be deprecated soon. <b>Note</b>: Refrain from using adding random keys on looping SidebarItem */
  sidebarPrimaryNavigation: PropTypes.node,
  /** Array of sections to be displayed. Use either primary/navigation props or `sidebarPrimarySections`. `sectionId` should match `section` prop of contained `SidebarItem`. Refrain from using adding random keys on looping SidebarItem */
  sidebarPrimarySections: PropTypes.arrayOf(
    PropTypes.shape({
      sectionId: PropTypes.string,
      sectionLabel: PropTypes.string,
      sectionOptions: PropTypes.node,
    })
  ),
  /** 'Node containing the content that will be displayed within the the secondary navigation section of the sidebar.<b>Note</b>: Refrain from using adding random keys on looping SidebarItem */
  sidebarSecondaryNavigation: PropTypes.node,
  /** A custom CSS class name to style the sidebar. */
  wrapperClassName: PropTypes.string,
};
Sidebar.defaultProps = {
  actionPanelTitle: "",
  collapsibleButtonWrapperClassName: "",
  ctaOneLabel: "",
  ctaOneOnClick: null,
  ctaTwoLabel: "",
  ctaTwoOnClick: null,
  id: null,
  isCollapsible: false,
  isDefaultCollapsed: false,
  label: "",
  navigationOptionsWithLabel: null,
  onSidebarCollapse: null,
  onSidebarCollapseHover: null,
  outerWrapperClassName: "",
  sidebarHeader: null,
  sidebarHeaderCollapsed: null,
  sidebarPrimarySections: null,
  sidebarPrimaryLabel: "",
  sidebarPrimaryNavigation: null,
  sidebarSecondaryNavigation: null,
  wrapperClassName: "",
  ariaLabel: "Main navigation",
};

Sidebar.displayName = "SidebarNavigation";

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-sidebarnavigation--sidebarwith-brand-image
 * @zeroHeight https://zeroheight.com/023d5159d/p/40ed73-sidebar-navigation/b/4635b4
 * @end
 */

export default Sidebar;
