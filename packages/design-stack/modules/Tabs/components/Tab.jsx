/**
 * @typedef {Object} TabProps
 * @property {boolean} disableFullWidthBorder? - Whether to disable the full-width border for the tabs.
 * @property {boolean} isContained? - It makes full width and equally spaced Tabs.
 * @property {boolean} isCurrent? - Indicates if the item is currently active
 * @property {boolean} isFullWidth? - Whether the tabs should take full width or not.
 * @property {boolean} isSlideableTabs? - Whether the tabs should be slideable or not.
 * @property {(event: React.MouseEvent<any>) => void} onTabClick? - A callback that will be fired on a click of a tab
 * @property {(event: React.MouseEvent<any>) => void} scrollOnMount - Callback to bring current item into view
 * @property {string} shape? - Sets the shape of the tab.
 * @property {any} smallTabsTheme? - Specify if the smaller tabs are used, Only to be used for codesnippet toolbar with tabs
 * @property {Record<string, any>} tab? - Array of tab objects containing name, icon, and count properties.
 * @property {string} count?
 * @property {any} icon?
 * @property {string} id?
 * @property {string} name?
 */

import React, { useEffect, useRef } from "react";
import { useLatestRef } from "@/packages/hooks";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Badge from "../../Badge";
import { BADGE_MODIFIER } from "../../Badge/constants/badge";
import { SMALL_TABS_COLOR, TAB_SHAPE } from "../constants/tabs";
import { effectiveClasses } from "../utils";

/**
 * @type {React.FC<TabProps>}
 */
const Tab = ({
  disableFullWidthBorder,
  isContained,
  isCurrent,
  isFullWidth,
  isSlideableTabs,
  onTabClick,
  scrollOnMount,
  shape,
  smallTabsTheme,
  tab,
  tabIdx,
  totalTabs,
}) => {
  const ref = useRef();
  const scrollOnMountRef = useLatestRef(scrollOnMount);
  const classNames = effectiveClasses({
    isFullWidth,
    totalTabs,
    tabIdx,
    isContained,
    isCurrent,
    shape,
    isSlideableTabs,
    disableFullWidthBorder,
    smallTabsTheme,
  });

  useEffect(() => {
    if (ref.current && isCurrent) {
      scrollOnMountRef.current(ref);
    }
  }, [isCurrent, scrollOnMountRef]);

  return (
    <button
      id={tab.id ? tab.id : tab.name}
      ref={ref}
      type="button"
      onClick={event => onTabClick?.(event, tab)}
      key={tab.name}
      value={tab.name}
      className={classNames}
      aria-selected={isCurrent}
      role="tab"
    >
      {tab.icon && shape === TAB_SHAPE.SIMPLE && !isContained && (
        <tab.icon
          className={twClassNames(
            isCurrent
              ? "icon-brand-weak"
              : "icon-neutral-weaker group-hover:icon-neutral-weak",
            "-ml-0.5 mr-2 h-5 w-5"
          )}
          aria-hidden="true"
        />
      )}
      <span className="flex items-center justify-center">
        {tab.name}
        {isContained && (
          <span
            aria-hidden="true"
            className={twClassNames(
              isCurrent ? "border-b-2 border-brand-strong" : "",
              "absolute inset-x-0 bottom-0 h-0.5"
            )}
          />
        )}
        {tab.count && shape === TAB_SHAPE.SIMPLE && !isContained ? (
          <Badge
            text={tab.count}
            wrapperClassName="ml-3"
            modifier={isCurrent ? BADGE_MODIFIER.PRIMARY : BADGE_MODIFIER.BASE}
          />
        ) : null}
      </span>
    </button>
  );
};

Tab.propTypes = {
  /** Whether to disable the full-width border for the tabs. */
  disableFullWidthBorder: PropTypes.bool,
  /** It makes full width and equally spaced Tabs. */
  isContained: PropTypes.bool,
  /** Indicates if the item is currently active */
  isCurrent: PropTypes.bool,
  /** Whether the tabs should take full width or not. */
  isFullWidth: PropTypes.bool,
  /** Whether the tabs should be slideable or not. */
  isSlideableTabs: PropTypes.bool,
  /** A callback that will be fired on a click of a tab */
  onTabClick: PropTypes.func,
  /** Callback to bring current item into view */
  scrollOnMount: PropTypes.func.isRequired,
  /** Sets the shape of the tab. */
  shape: PropTypes.string,
  /** Specify if the smaller tabs are used, Only to be used for codesnippet toolbar with tabs  */
  smallTabsTheme: PropTypes.oneOf(Object.values(SMALL_TABS_COLOR)),
  /** Array of tab objects containing name, icon, and count properties. */
  tab: PropTypes.shape({
    count: PropTypes.string,
    icon: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.node,
      PropTypes.func,
    ]),
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  /** Indicates the index of the tab. */
  tabIdx: PropTypes.number,
  /** Indicates the total number of tabs. */
  totalTabs: PropTypes.number,
};

Tab.defaultProps = {
  disableFullWidthBorder: false,
  isContained: false,
  isCurrent: false,
  isFullWidth: false,
  isSlideableTabs: false,
  onTabClick: null,
  shape: TAB_SHAPE.SIMPLE,
  smallTabsTheme: null,
  tabIdx: 0,
  totalTabs: 0,
};

export default Tab;
