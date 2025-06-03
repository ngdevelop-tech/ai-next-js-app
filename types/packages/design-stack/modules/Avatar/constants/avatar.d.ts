/**
 * Defines the possible types for an Avatar component.
 * @enum {string}
 * @readonly
 */
export declare const AVATAR_TYPE: {
    /** Displays an image provided via `src` prop. */
    IMAGE: string;
    /** Displays a generic placeholder icon. */
    PLACEHOLDER: string;
    /** Displays initials derived from the `name` prop. */
    INITIALS: string;
};
/**
 * Defines the possible sizes for an Avatar component.
 * @enum {string}
 * @readonly
 */
export declare const AVATAR_SIZE: {
    /** Extra small size (e.g., 16px). */
    EXTRA_SMALL: string;
    /** Small size (e.g., 24px). */
    SMALL: string;
    /** Default size (e.g., 32px). */
    DEFAULT: string;
    /** Large size (e.g., 40px). */
    LARGE: string;
    /** Extra large size (e.g., 48px). */
    EXTRA_LARGE: string;
};
/**
 * Defines the possible border radius styles for an Avatar component.
 * @enum {string}
 * @readonly
 */
export declare const AVATAR_BORDER_RADIUS: {
    /** No border radius (square). */
    ROUNDED_NONE: string;
    /** Medium border radius. */
    ROUNDED_MEDIUM: string;
    /** Full border radius (circle). */
    ROUNDED_FULL: string;
};
