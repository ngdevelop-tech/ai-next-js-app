/**
 * @typedef {Object} TableFloatingIconProps
 * @property {React.ReactNode} children? - Set the Children to prop
 * @property {React.ReactNode} filterIcon? - Sets custom Filter Icon
 * @property {(event: React.MouseEvent<any>) => void} onIconClick - Sets click event handler for the table Icon button
 * @property {Record<string, any>} popoverConfig? - Set the popover module props
 */

import React from "react";
import { MdOutlineTableChart } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../Button";
import { BUTTON_COLORS, BUTTON_SIZES } from "../Button/constants/button";
import Popover from "../Popover";

/**
 * @type {React.FC<TableFloatingIconProps>}
 */
const TableFloatingIcon = ({
  onIconClick,
  popoverConfig = null,
  filterIcon = (
    <MdOutlineTableChart className="bg-neutral-default icon-neutral-weak" />
  ),
  triggerIconClasses = "",
  children = null,
}) => (
  <Popover
    {...popoverConfig}
    content={children}
    placementSide="bottom"
    placementAlign="center"
    sideOffset={10}
    collisionPadding={20}
  >
    <Button
      size={BUTTON_SIZES.EXTRA_SMALL}
      wrapperClassName={twClassNames(
        "top-1/2 z-200 p-[1px] shadow-none",
        triggerIconClasses
      )}
      onClick={onIconClick}
      isIconOnlyButton
      icon={filterIcon}
      colors={BUTTON_COLORS.WHITE}
      ariaLabel="Table floating icon"
    />
  </Popover>
);

TableFloatingIcon.propTypes = {
  /** Set the Children to prop */
  children: PropTypes.node,
  /** Sets custom Filter Icon */
  filterIcon: PropTypes.node,
  /** Sets click event handler for the table Icon button */
  onIconClick: PropTypes.func.isRequired,
  /** Set the popover module props */
  popoverConfig: PropTypes.shape({}),
  /** Set the trigger class  properties */
  triggerIconClasses: PropTypes.string,
};

export default TableFloatingIcon;
