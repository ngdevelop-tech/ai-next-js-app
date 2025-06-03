import { BADGE_SIZE_CLASSES } from "./constants/badge";

/**
 * Determines the appropriate CSS classes for the badge icon or dot based on its properties.
 *
 * @param {object} props - The properties object.
 * @param {boolean} [props.hasDot=false] - Whether the badge should display a dot.
 * @param {React.ReactNode} [props.icon] - The icon element to display in the badge.
 * @param {'sm' | 'md' | 'lg'} props.size - The size of the badge. Determines the class applied.
 * @returns {string} The CSS class string corresponding to the badge size and type (dot or icon), or an empty string if neither dot nor icon is present.
 */
export const getIconClasses = ({ hasDot, icon, size }) => {
  if (hasDot) return BADGE_SIZE_CLASSES[size].WITH_DOT;
  if (icon) return BADGE_SIZE_CLASSES[size].WITH_ICON;
  return "";
};
