/**
 * Defines the possible types for an Avatar component.
 * @enum {string}
 * @readonly
 */
export const AVATAR_TYPE = {
  /** Displays an image provided via `src` prop. */
  IMAGE: "image",
  /** Displays a generic placeholder icon. */
  PLACEHOLDER: "placeholder",
  /** Displays initials derived from the `name` prop. */
  INITIALS: "initials",
};

/**
 * Defines the possible sizes for an Avatar component.
 * @enum {string}
 * @readonly
 */
export const AVATAR_SIZE = {
  /** Extra small size (e.g., 16px). */
  EXTRA_SMALL: "extra-small",
  /** Small size (e.g., 24px). */
  SMALL: "small",
  /** Default size (e.g., 32px). */
  DEFAULT: "default",
  /** Large size (e.g., 40px). */
  LARGE: "large",
  /** Extra large size (e.g., 48px). */
  EXTRA_LARGE: "extra-large",
};

/**
 * Defines the possible border radius styles for an Avatar component.
 * @enum {string}
 * @readonly
 */
export const AVATAR_BORDER_RADIUS = {
  /** No border radius (square). */
  ROUNDED_NONE: "rounded-none",
  /** Medium border radius. */
  ROUNDED_MEDIUM: "rounded-md",
  /** Full border radius (circle). */
  ROUNDED_FULL: "rounded-full",
};
