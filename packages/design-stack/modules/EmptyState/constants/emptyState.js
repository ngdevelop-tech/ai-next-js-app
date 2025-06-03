import { MdAdd, MdChevronRight } from "react-icons/md";

/**
 * Defines the possible text alignment options for the EmptyState component.
 * @enum {string}
 * @property {string} LEFT - Aligns text to the left.
 * @property {string} CENTER - Aligns text to the center.
 */
export const TEXT_ALIGN = {
  LEFT: "left",
  CENTER: "center",
};

/**
 * Defines the layout options for the EmptyState component.
 * @enum {string}
 * @property {string} SINGLE_COLUMN - Renders content in a single column.
 * @property {string} TWO_COLUMN - Renders content in two columns (typically image/icon and text).
 */
export const LAYOUT = {
  SINGLE_COLUMN: "singleColumnLayout",
  TWO_COLUMN: "twoColumnLayout",
};

/**
 * Defines the possible icons for recommendation actions within the EmptyState component.
 * @enum {string | null}
 * @property {string} PLUS - Represents an 'add' or 'create' action.
 * @property {string} ARROW - Represents a 'navigation' or 'next step' action.
 * @property {null} NULL - Represents no icon.
 */
export const RECOMMENDATION_ACTION_ICON = {
  PLUS: "plus",
  ARROW: "arrow",
  NULL: null,
};

/**
 * Maps recommendation action icon types to their corresponding icon components.
 * @type {Object.<RECOMMENDATION_ACTION_ICON, React.ElementType>}
 */
export const ACTION_ICON = {
  [RECOMMENDATION_ACTION_ICON.PLUS]: MdAdd,
  [RECOMMENDATION_ACTION_ICON.ARROW]: MdChevronRight,
};
