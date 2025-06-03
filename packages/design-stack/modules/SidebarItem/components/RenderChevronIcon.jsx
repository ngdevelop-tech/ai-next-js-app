/**
 * @typedef {Object} RenderChevronIconProps
 * @property {boolean} current - Indicates if the item is currently active
 * @property {boolean} isExpanded - Indicates if the item is expanded
 * @property {boolean} isNestedItem? - Indicates if the item is a nested item
 * @property {(event: React.MouseEvent<any>) => void} onChevronClickHandler - A callback used to handle onClick event of the icon
 */

import React from "react";
import { MdChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

/**
 * @type {React.FC<RenderChevronIconProps>}
 */
function RenderChevronIcon({
  current,
  isExpanded,
  isNestedItem,
  onChevronClickHandler,
}) {
  return isNestedItem ? (
    <MdChevronRight
      onClick={onChevronClickHandler}
      className={twClassNames(
        "h-5 w-5 icon-neutral-weak hover:icon-brand-default",
        {
          "rotate-90 ": isExpanded,
          "text-neutral-weaker": isExpanded || current,
        }
      )}
    />
  ) : null;
}

RenderChevronIcon.propTypes = {
  /** Indicates if the item is currently active */
  current: PropTypes.bool.isRequired,
  /** Indicates if the item is expanded */
  isExpanded: PropTypes.bool.isRequired,
  /** Indicates if the item is a nested item */
  isNestedItem: PropTypes.bool,
  /** A callback used to handle onClick event of the icon  */
  onChevronClickHandler: PropTypes.func.isRequired,
};

RenderChevronIcon.defaultProps = {
  isNestedItem: undefined,
};

export default RenderChevronIcon;
