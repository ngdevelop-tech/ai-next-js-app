import React from "react";
/**
 * Generates the effective children for the Button component, handling loading states, icons, and layout variations.
 *
 * @param {object} props - The properties object.
 * @param {function} props.disabledIconClassGenerator - Function to generate class names for the disabled icon state based on color and variant.
 * @param {string} props.colorAndVariant - A combined string representing the button's color and variant (e.g., 'primary-solid').
 * @param {string} props.colorAndVariantAndIcon - A combined string representing the button's color, variant, and icon state (e.g., 'primary-solid-icon').
 * @param {boolean} props.isNotValidVariant - Flag indicating if the provided variant is not valid.
 * @param {React.ReactNode} props.children - The original children passed to the Button component.
 * @param {boolean} props.disabled - Whether the button is disabled.
 * @param {React.ReactElement | null} props.icon - The icon element to display, or null if no icon.
 * @param {'start' | 'end'} props.iconPlacement - The placement of the icon relative to the children (maps to BUTTON_ICON_PLACEMENT.START or BUTTON_ICON_PLACEMENT.END).
 * @param {boolean} props.isIconOnlyButton - Flag indicating if the button contains only an icon.
 * @param {string} props.loaderText - Text to display next to the loader when loading.
 * @param {boolean} props.loading - Whether the button is in a loading state.
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} props.size - The size of the button (maps to BUTTON_SIZES constants).
 * @param {'solid' | 'outline' | 'minimal'} props.variant - The visual variant of the button (maps to BUTTON_VARIANTS constants).
 * @returns {{effectiveChildren: React.ReactElement}} An object containing the `effectiveChildren` React element to be rendered inside the button.
 */
declare const getEffectiveChildren: ({ disabledIconClassGenerator: any, colorAndVariant: any, colorAndVariantAndIcon: any, isNotValidVariant: any, children: any, disabled: any, icon: any, iconPlacement: any, isIconOnlyButton: any, loaderText: any, loading: any, size: any, variant: any, }: any) => React.ReactElement;
export default getEffectiveChildren;
