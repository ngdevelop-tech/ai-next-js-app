/**
 * @typedef {Object} SelectedValueShape
 * @property {string} [image] - Optional URL for an image associated with the value.
 * @property {string} label - The display label for the value.
 * @property {string|number} value - The actual value.
 */

/**
 * @typedef {Object} RenderChildrenProps
 * @property {React.ReactNode} children - The child elements to be rendered, typically the trigger and content of the ComboBox.
 * @property {(open: boolean) => void} [onOpenChange] - Callback function invoked when the open state changes.
 * @property {boolean} open - Controls the visibility state of the ComboBox dropdown.
 * @property {SelectedValueShape | SelectedValueShape[]} [selectedValues] - The currently selected value(s). Used only when `isTag` (from context) is false.
 */

import React, { useContext, useEffect } from "react";
import { useLatestRef } from "@/packages/hooks";
import PropTypes from "prop-types";

import { ComboboxContextData } from "../context";

/**
 * Internal component responsible for managing the open state and selected values synchronization
 * based on props and context. It acts as a bridge between the parent component controlling
 * the ComboBox state and the internal ComboBox context.
 *
 * @type {React.FC<RenderChildrenProps>}
 */
const RenderChildren = ({ children, open, onOpenChange, selectedValues }) => {
  const { setOpen, setQuery, isTag, setCurrentSelectedValues } =
    useContext(ComboboxContextData);
  const openChangeFunc = useLatestRef(onOpenChange);
  const setOpenRef = useLatestRef(setOpen);
  const setCurrentSelectedValuesRef = useLatestRef(setCurrentSelectedValues);

  useEffect(() => {
    openChangeFunc.current?.(open);
    setOpenRef.current?.(open);
    if (!open) setQuery("");
  }, [open, openChangeFunc, setQuery, setOpenRef]);

  useEffect(() => {
    if (!isTag) setCurrentSelectedValuesRef.current?.(selectedValues);
  }, [selectedValues, isTag, setCurrentSelectedValuesRef]);

  return <>{children}</>;
};

RenderChildren.propTypes = {
  /** The child elements to be rendered */
  children: PropTypes.node.isRequired,
  /** Callback function invoked when the open state changes */
  onOpenChange: PropTypes.func,
  /** Controls the visibility state of the ComboBox dropdown */
  open: PropTypes.bool.isRequired,
  /**
   * The currently selected value(s).
   * Can be a single object or an array of objects, each conforming to the shape:
   * `{ image?: string, label: string, value: string | number }`.
   * This prop is primarily used when the ComboBox is not in 'tag' mode.
   */
  selectedValues: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string,
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ),
    PropTypes.shape({
      image: PropTypes.string,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ]),
};

RenderChildren.defaultProps = {
  onOpenChange: null,
  selectedValues: undefined,
};

export default RenderChildren;
