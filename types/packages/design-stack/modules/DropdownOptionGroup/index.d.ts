import React from "react";
/**
 * @component DropdownOptionGroup
 * @description Renders the container for dropdown options, handling layout, search functionality, and transitions.
 * It integrates with Radix UI Popover and Headless UI Menu for accessibility and interaction patterns.
 *
 * @param {object} props - The component props.
 * @param {string} [props.ariaLabel] - Provides an accessible label for the dropdown menu group. Defaults to an empty string.
 * @param {React.ReactNode} props.children - The content to be rendered inside the dropdown group, typically `DropdownOption` components or similar. This is required.
 * @param {string} [props.wrapperClassName] - Custom CSS class name to apply to the main wrapper element (`Menu.Items`). Defaults to an empty string.
 * @param {string} [props.popoverContentClassName] - Custom CSS class name to apply to the Radix UI `Popover.Content` element. Defaults to an empty string.
 * @param {string} [props.searchWrapperClassName] - Custom CSS class name specifically for the wrapper around the children when search is enabled. Defaults to an empty string.
 * @param {boolean} [props.shouldInertElements=false] - If true, enables accessibility features like scroll locking, focus trapping, and making background elements inert when the dropdown is open. Defaults to `false`.
 * @param {object} [props.props] - Additional props passed down to the Radix UI `Popover.Content` component.
 *
 * @returns {React.ReactElement} The rendered DropdownOptionGroup component.
 */
declare const DropdownOptionGroup: {
    ({ ariaLabel, any, children: any, wrapperClassName, any, popoverContentClassName, any, searchWrapperClassName, any, shouldInertElements, any, ...props }: any): React.ReactElement;
    propTypes: {
        /**
         * Provides an accessible label for the dropdown menu group, enhancing screen reader support.
         * @type {string}
         */
        ariaLabel: any;
        /**
         * The content to be displayed within the DropdownOptionGroup. Typically includes `DropdownOption`
         * components or custom elements representing selectable items.
         * @type {React.ReactNode}
         * @required
         */
        children: any;
        /**
         * Custom CSS class name applied to the Radix UI `Popover.Content` component, allowing for
         * fine-grained styling of the popover container itself.
         * @type {string}
         */
        popoverContentClassName: any;
        /**
         * Custom CSS class name applied specifically to the wrapper element (`div`) that contains the
         * `children` when the search input is enabled (`hasSearch` is true).
         * @type {string}
         */
        searchWrapperClassName: any;
        /**
         * Controls accessibility features when the dropdown is open. If set to `true`, it enables:
         * - **Scroll Locking:** Prevents scrolling of the background content.
         * - **Focus Trapping:** Keeps focus within the dropdown menu.
         * - **Inert:** Makes elements outside the dropdown non-interactive for screen readers and keyboard navigation.
         * Set to `false` to disable these features.
         * @type {boolean}
         * @default false
         */
        shouldInertElements: any;
        /**
         * Custom CSS class name applied to the main wrapper element (`Menu.Items`), which contains
         * either the direct `children` or the search input and the search results wrapper.
         * @type {string}
         */
        wrapperClassName: any;
    };
};
export declare const dropdownOptionGroupProps: {
    /**
     * Provides an accessible label for the dropdown menu group, enhancing screen reader support.
     * @type {string}
     */
    ariaLabel: any;
    /**
     * The content to be displayed within the DropdownOptionGroup. Typically includes `DropdownOption`
     * components or custom elements representing selectable items.
     * @type {React.ReactNode}
     * @required
     */
    children: any;
    /**
     * Custom CSS class name applied to the Radix UI `Popover.Content` component, allowing for
     * fine-grained styling of the popover container itself.
     * @type {string}
     */
    popoverContentClassName: any;
    /**
     * Custom CSS class name applied specifically to the wrapper element (`div`) that contains the
     * `children` when the search input is enabled (`hasSearch` is true).
     * @type {string}
     */
    searchWrapperClassName: any;
    /**
     * Controls accessibility features when the dropdown is open. If set to `true`, it enables:
     * - **Scroll Locking:** Prevents scrolling of the background content.
     * - **Focus Trapping:** Keeps focus within the dropdown menu.
     * - **Inert:** Makes elements outside the dropdown non-interactive for screen readers and keyboard navigation.
     * Set to `false` to disable these features.
     * @type {boolean}
     * @default false
     */
    shouldInertElements: any;
    /**
     * Custom CSS class name applied to the main wrapper element (`Menu.Items`), which contains
     * either the direct `children` or the search input and the search results wrapper.
     * @type {string}
     */
    wrapperClassName: any;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-dropdown--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/854f04-dropdown/b/4635b4
 * @end
 */
export default DropdownOptionGroup;
