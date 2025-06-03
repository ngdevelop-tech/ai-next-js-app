import { MdCheckCircle, MdDangerous, MdInfo, MdWarning } from "react-icons/md";

/**
 * Defines the possible visual styles for an Alert component.
 * @enum {string}
 * @property {string} SUCCESS - Represents a successful operation or state.
 * @property {string} ERROR - Represents an error or failure.
 * @property {string} WARNING - Represents a warning or potential issue.
 * @property {string} INFO - Represents informational content.
 */
export const ALERT_VARIANTS = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warn",
  INFO: "info",
};

/**
 * Maps alert variants to their default icon components.
 * @type {Object.<ALERT_VARIANTS, React.ElementType>}
 */
export const ALERT_DEFAULT_ICON = {
  [ALERT_VARIANTS.SUCCESS]: MdCheckCircle,
  [ALERT_VARIANTS.ERROR]: MdDangerous,
  [ALERT_VARIANTS.WARNING]: MdWarning,
  [ALERT_VARIANTS.INFO]: MdInfo,
};

/**
 * Defines the possible positions for a link within an Alert component.
 * @enum {string}
 * @property {string} END - Positions the link at the end of the alert message.
 * @property {string} INLINE - Positions the link within the alert message text.
 */
export const ALERT_LINK_POSITION = {
  END: "end",
  INLINE: "inline",
};
