/**
 * Defines the possible text alignment options for the EmptyState component.
 * @enum {string}
 * @property {string} LEFT - Aligns text to the left.
 * @property {string} CENTER - Aligns text to the center.
 */
export declare const TEXT_ALIGN: {
    LEFT: string;
    CENTER: string;
};
/**
 * Defines the layout options for the EmptyState component.
 * @enum {string}
 * @property {string} SINGLE_COLUMN - Renders content in a single column.
 * @property {string} TWO_COLUMN - Renders content in two columns (typically image/icon and text).
 */
export declare const LAYOUT: {
    SINGLE_COLUMN: string;
    TWO_COLUMN: string;
};
/**
 * Defines the possible icons for recommendation actions within the EmptyState component.
 * @enum {string | null}
 * @property {string} PLUS - Represents an 'add' or 'create' action.
 * @property {string} ARROW - Represents a 'navigation' or 'next step' action.
 * @property {null} NULL - Represents no icon.
 */
export declare const RECOMMENDATION_ACTION_ICON: {
    PLUS: string;
    ARROW: string;
    NULL: any;
};
/**
 * Maps recommendation action icon types to their corresponding icon components.
 * @type {Object.<RECOMMENDATION_ACTION_ICON, React.ElementType>}
 */
export declare const ACTION_ICON: {
    [RECOMMENDATION_ACTION_ICON.PLUS]: import("react-icons/lib").IconType;
    [RECOMMENDATION_ACTION_ICON.ARROW]: import("react-icons/lib").IconType;
};
