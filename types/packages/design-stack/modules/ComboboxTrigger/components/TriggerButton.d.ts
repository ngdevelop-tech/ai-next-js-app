/**
 * @typedef {Object} TriggerButtonProps
 * @property {(isCurrentlyTruncated: boolean) => void} [setIsTruncated] - Optional callback function invoked when the truncation state of the trigger button's content changes, typically used in multi-select mode. It receives a boolean indicating if the content is currently truncated.
 */
import React from "react";
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
declare const TriggerButton: React.ForwardRefExoticComponent<React.RefAttributes<unknown>>;
export default TriggerButton;
