import React from "react";
/**
 * Represents a single selectable item within a Dropdown menu.
 * It utilizes Headless UI's `Menu.Item` and integrates with the `DropdownContextData`
 * to handle clicks and potentially other shared state or actions.
 * Styles change based on active (hovered) and disabled states, and can indicate
 * destructive actions.
 *
 * @param {object} props - The component props.
 * @param {function} [props.onClick] - Optional callback function invoked when the item is clicked, in addition to the context's onClick.
 * @param {object} props.option - The data object representing the dropdown option.
 * @param {React.ReactNode} [props.option.icon] - An optional icon to display before the item body.
 * @param {React.ReactNode} props.option.body - The main content/label of the dropdown item.
 * @param {string|number} props.option.id - A unique identifier for the option item.
 * @param {React.ReactNode} [props.option.badge] - An optional badge or indicator to display after the item body.
 * @param {boolean} [props.option.destructive=false] - If true, applies styling to indicate a potentially destructive action (e.g., red text).
 * @param {string} [props.wrapperClassName] - Optional additional CSS classes to apply to the button element.
 * @param {boolean} [props.disabled=false] - If true, the item is non-interactive and visually styled as disabled.
 * @param {object} [props.rest] - Any other props are spread onto the underlying button element.
 */
declare const DropdownOptionItem: {
    ({ onClick, any, option: any, wrapperClassName, any, disabled, any, ...props }: any): React.ReactElement;
    propTypes: {
        /**
         * If true, the menu item will be disabled and non-interactive.
         * @default false
         */
        disabled: any;
        /**
         * Optional callback function executed when the dropdown option item is clicked.
         * This is called *after* the context's onClick handler (if provided).
         * Receives the click event object as an argument.
         * @default null
         */
        onClick: any;
        /**
         * An object containing the details for rendering the dropdown option.
         */
        option: any;
        /**
         * An optional string of CSS class names to apply to the root button element
         * for custom styling.
         * @default ''
         */
        wrapperClassName: any;
    };
};
/**
 * PropTypes definition for the DropdownOptionItem component.
 */
export declare const dropdownOptionItemProps: {
    /**
     * If true, the menu item will be disabled and non-interactive.
     * @default false
     */
    disabled: any;
    /**
     * Optional callback function executed when the dropdown option item is clicked.
     * This is called *after* the context's onClick handler (if provided).
     * Receives the click event object as an argument.
     * @default null
     */
    onClick: any;
    /**
     * An object containing the details for rendering the dropdown option.
     */
    option: any;
    /**
     * An optional string of CSS class names to apply to the root button element
     * for custom styling.
     * @default ''
     */
    wrapperClassName: any;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-dropdown--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/854f04-dropdown/b/4635b4
 * @end
 */
export default DropdownOptionItem;
