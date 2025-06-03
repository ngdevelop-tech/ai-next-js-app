/**
 * Defines the possible visual styles for an Alert component.
 * @enum {string}
 * @property {string} SUCCESS - Represents a successful operation or state.
 * @property {string} ERROR - Represents an error or failure.
 * @property {string} WARNING - Represents a warning or potential issue.
 * @property {string} INFO - Represents informational content.
 */
export declare const ALERT_VARIANTS: {
    SUCCESS: string;
    ERROR: string;
    WARNING: string;
    INFO: string;
};
/**
 * Maps alert variants to their default icon components.
 * @type {Object.<ALERT_VARIANTS, React.ElementType>}
 */
export declare const ALERT_DEFAULT_ICON: {
    [ALERT_VARIANTS.SUCCESS]: import("react-icons/lib").IconType;
    [ALERT_VARIANTS.ERROR]: import("react-icons/lib").IconType;
    [ALERT_VARIANTS.WARNING]: import("react-icons/lib").IconType;
    [ALERT_VARIANTS.INFO]: import("react-icons/lib").IconType;
};
/**
 * Defines the possible positions for a link within an Alert component.
 * @enum {string}
 * @property {string} END - Positions the link at the end of the alert message.
 * @property {string} INLINE - Positions the link within the alert message text.
 */
export declare const ALERT_LINK_POSITION: {
    END: string;
    INLINE: string;
};
