/**
 * @typedef {Object} TriggerButtonProps
 * @property {(isCurrentlyTruncated: boolean) => void} [setIsTruncated] - Optional callback function invoked when the truncation state of the trigger button's content changes, typically used in multi-select mode. It receives a boolean indicating if the content is currently truncated.
 */

import React, { useContext, useEffect } from "react";
import { MdUnfoldMore } from "react-icons/md";
import { useLatestRef } from "@/packages/hooks";
import PropTypes from "prop-types";

import { ComboboxContextData } from "../../ComboBox/context";

/**
 * Renders the trigger icon (typically a dropdown arrow) for the Combobox.
 * This component also handles logic related to detecting content truncation,
 * specifically for multi-select Comboboxes when the dropdown is closed.
 *
 * @component
 * @param {TriggerButtonProps} props - The props for the TriggerButton component.
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref to the underlying button element (though the component currently renders an icon, the ref might be intended for a wrapper or future button implementation).
 * @returns {React.ReactElement} The rendered trigger icon.
 *
 * @example
 * // Used internally by ComboboxTrigger
 * <TriggerButton ref={buttonRef} setIsTruncated={handleTruncationChange} />
 */
const TriggerButton = React.forwardRef(({ setIsTruncated }, ref) => {
  const setIsTruncatedRef = useLatestRef(setIsTruncated);
  const { open, value, isMulti, defaultValue } =
    useContext(ComboboxContextData);

  useEffect(() => {
    if (ref && ref.current && !open && isMulti)
      setIsTruncatedRef.current?.(
        ref.current.scrollWidth > ref.current.clientWidth
      );
  }, [ref, open, setIsTruncatedRef, value, isMulti, defaultValue]);

  return (
    <MdUnfoldMore className="h-5 w-5 icon-neutral-weak" aria-hidden="true" />
  );
});

TriggerButton.propTypes = {
  /**
   * Optional callback function invoked when the truncation state changes.
   * Receives a boolean indicating if the content is currently truncated.
   * Primarily used for multi-select Comboboxes.
   * @param {boolean} isCurrentlyTruncated - Whether the content is truncated.
   */
  setIsTruncated: PropTypes.func,
};

TriggerButton.defaultProps = {
  setIsTruncated: null,
};

export default TriggerButton;
