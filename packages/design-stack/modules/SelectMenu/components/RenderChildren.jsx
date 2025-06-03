/**
 * @typedef {Object} RenderChildrenProps
 * @property {React.ReactNode} children - Node containing the content that will be displayed within the select list box of the selectMenu component
 * @property {(event: React.MouseEvent<any>) => void} onOpenChange? - Callback function when selectMenu options open/close
 * @property {boolean} open - Internal state indicating if the select menu options is open close
 */

import React, { useContext, useEffect } from "react";
import { useLatestRef } from "@/packages/hooks";
import PropTypes from "prop-types";

import { SelectMenuContextData } from "../selectMenuContext";

/**
 * @type {React.FC<RenderChildrenProps>}
 */
const RenderChildren = ({ children, onOpenChange, open }) => {
  const { setOpen } = useContext(SelectMenuContextData);
  const openChangeFunc = useLatestRef(onOpenChange);
  const setOpenRef = useLatestRef(setOpen);

  useEffect(() => {
    if (onOpenChange) {
      openChangeFunc?.current?.(open);
    }

    setOpenRef.current?.(open);
  }, [onOpenChange, open, openChangeFunc, setOpenRef]);

  return <>{children}</>;
};

RenderChildren.propTypes = {
  /** Node containing the content that will be displayed within the select list box of the selectMenu component */
  children: PropTypes.node.isRequired,
  /** Callback function when selectMenu options open/close */
  onOpenChange: PropTypes.func,
  /** Internal state indicating if the select menu options is open close */
  open: PropTypes.bool.isRequired,
};

RenderChildren.defaultProps = {
  onOpenChange: null,
};

export default RenderChildren;
