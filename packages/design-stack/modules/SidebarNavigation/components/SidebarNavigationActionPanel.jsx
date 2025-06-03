/**
 * @typedef {Object} SidebarNavigationActionPanelProps
 * @property {string} ctaOneLabel - The first CTA label.
 * @property {(event: React.MouseEvent<any>) => void} ctaOneOnClick - The first CTA onClick function.
 * @property {string} ctaTwoLabel? - The second CTA label.
 * @property {(event: React.MouseEvent<any>) => void} ctaTwoOnClick? - The second CTA onClick function.
 * @property {string} title - The title of the ActionPanel.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import ActionPanel from "../../ActionPanel";
import Button from "../../Button";
import TruncateText from "../../TruncateText";

/**
 * @type {React.FC<SidebarNavigationActionPanelProps>}
 */
const SidebarNavigationActionPanel = ({
  ctaOneLabel,
  ctaOneOnClick,
  ctaTwoLabel,
  ctaTwoOnClick,
  title,
}) => (
  <ActionPanel
    title={title}
    titleWrapperClassName="text-sm leading-5 font-medium overflow-hidden"
    CTAContent={
      <div className="flex gap-3">
        {ctaOneLabel && ctaOneOnClick && (
          <Button
            colors="success"
            size="extra-small"
            onClick={ctaOneOnClick}
            wrapperClassName="w-[90px] flex-1"
          >
            <TruncateText
              isTooltip={false}
              truncateUsingClamp={false}
              hidetooltipTriggerIcon
              containerClassName={twClassNames({
                // Need this because container size is smaller only when we have two CTAs
                // Otherwise it is full width
                // 90px - 12px padding = 78px
                "w-[78px]": ctaTwoLabel && ctaTwoOnClick,
              })}
              wrapperClassName="line-clamp-1"
            >
              {ctaOneLabel}
            </TruncateText>
          </Button>
        )}
        {ctaTwoLabel && ctaTwoOnClick && (
          <Button
            colors="white"
            size="extra-small"
            onClick={ctaTwoOnClick}
            wrapperClassName="w-[90px] flex-1"
          >
            <TruncateText
              isTooltip={false}
              truncateUsingClamp={false}
              hidetooltipTriggerIcon
              containerClassName={twClassNames({
                // Need this because container size is smaller only when we have two CTAs
                // Otherwise it is full width
                // 90px - 12px padding = 78px
                "w-[78px]": ctaOneLabel && ctaOneOnClick,
              })}
              wrapperClassName="line-clamp-1"
            >
              {ctaTwoLabel}
            </TruncateText>
          </Button>
        )}
      </div>
    }
    wrapperClassName=" bg-neutral-strong p-4 gap-3"
    hasBorder
  />
);

SidebarNavigationActionPanel.propTypes = {
  /** The first CTA label. */
  ctaOneLabel: PropTypes.string.isRequired,
  /** The first CTA onClick function. */
  ctaOneOnClick: PropTypes.func.isRequired,
  /** The second CTA label. */
  ctaTwoLabel: PropTypes.string,
  /** The second CTA onClick function. */
  ctaTwoOnClick: PropTypes.func,
  /** The title of the ActionPanel. */
  title: PropTypes.string.isRequired,
};

SidebarNavigationActionPanel.defaultProps = {
  ctaTwoLabel: "",
  ctaTwoOnClick: null,
};

export default SidebarNavigationActionPanel;
