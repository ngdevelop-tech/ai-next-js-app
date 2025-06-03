/**
 * @typedef {Object} RenderChildrenProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the component.
 * @property {(event: React.MouseEvent<any>) => void} onOpenChange? - Callback function when dropdown options open/close.
 * @property {boolean} open - Determines if the dropdown is open.
 */

import React, { useContext, useEffect } from "react";
import { useLatestRef } from "@/packages/hooks";
import PropTypes from "prop-types";

import { MultiSelectContextData } from "../context";

/**
 * @type {React.FC<RenderChildrenProps>}
 */
const RenderChildren = ({ children, open, onOpenChange = null }) => {
  const { setOpen, isOpen } = useContext(MultiSelectContextData);
  const openChangeFunc = useLatestRef(onOpenChange);
  const setOpenRef = useLatestRef(setOpen);

  useEffect(() => {
    openChangeFunc.current?.(isOpen ?? open);
    setOpenRef.current?.(isOpen ?? open);
  }, [open, openChangeFunc, setOpenRef, isOpen]);

  return <>{children}</>;
};

RenderChildren.propTypes = {
  /** Node containing the content that will be displayed within the component. */
  children: PropTypes.node.isRequired,
  /** Callback function when dropdown options open/close. */
  onOpenChange: PropTypes.func,
  /** Determines if the dropdown is open. */
  open: PropTypes.bool.isRequired,
};

export default RenderChildren;
