import React from "react";
/**
 * Dropdown component provides a flexible way to display contextual overlays
 * such as menus, options, or additional information, triggered by a button or link.
 * It leverages Radix UI Popover and Headless UI Menu for accessibility and functionality.
 *
 * @component
 * @example
 * const MyComponent = (): React.ReactElement => (
 *   <Dropdown>
 *     <Dropdown.Trigger asChild>
 *       <Button>Open Dropdown</Button>
 *     </Dropdown.Trigger>
 *     <Dropdown.Content>
 *       <Dropdown.Item onClick={() => alert('Action 1')}>Action 1</Dropdown.Item>
 *       <Dropdown.Item onClick={() => alert('Action 2')}>Action 2</Dropdown.Item>
 *     </Dropdown.Content>
 *   </Dropdown>
 * );
 *
 * @param {object} props - The props for the Dropdown component.
 * @param {('start'|'center'|'end')} [props.align='end'] - The preferred alignment of the dropdown content against the trigger. See `DROPDOWN_ALIGN`.
 * @param {React.ReactNode} props.children - The content of the Dropdown, typically includes `Dropdown.Trigger` and `Dropdown.Content`.
 * @param {string} [props.id=null] - Optional unique identifier for the root element.
 * @param {boolean} [props.isOpen=undefined] - Controlled open state of the dropdown. If provided, `onOpenChange` must also be handled.
 * @param {function} [props.onClick=null] - Callback function invoked when a `Dropdown.Item` is clicked. Receives the event and any value passed to the item.
 * @param {function} [props.onOpenChange=null] - Callback function invoked when the dropdown's open state changes. Receives the new open state (boolean).
 * @param {boolean} [props.hasSearch=false] - If true, renders a search input within the `Dropdown.Content`. Requires `Dropdown.Content` to handle filtering.
 * @param {function} [props.onSearch=null] - Callback function invoked when the search input value changes. Receives the search term.
 * @param {('top'|'right'|'bottom'|'left')} [props.side='bottom'] - The preferred side of the trigger to render the dropdown content against. See `DROPDOWN_SIDE`.
 * @param {string} [props.wrapperClassName=''] - Custom CSS class name to apply to the root wrapper element.
 * @returns {React.ReactElement} The rendered Dropdown component.
 */
declare const Dropdown: {
    ({ align, any, children: any, container, any, id, any, isOpen, any, onClick, any, onOpenChange, any, hasSearch, any, onSearch, any, side, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /**
         * The preferred alignment of the dropdown content against the trigger along the appropriate axis.
         * @type {'start' | 'center' | 'end'}
         * @see DROPDOWN_ALIGN
         */
        align: any;
        /**
         * The content of the Dropdown. Should include `Dropdown.Trigger` and `Dropdown.Content` as children.
         * Other components like `Dropdown.Item`, `Dropdown.Separator`, etc., should be nested within `Dropdown.Content`.
         */
        children: any;
        /** A selector to target the element that the dropdown should be rendered in. */
        container: any;
        /**
         * If true, enables a search input field within the `Dropdown.Content`.
         * Note: The filtering logic based on the search term needs to be implemented within the `Dropdown.Content` or its children.
         */
        hasSearch: any;
        /** Optional unique identifier attribute for the root element of the component. */
        id: any;
        /**
         * Controls the open state of the dropdown. Use this for controlled behavior.
         * If `isOpen` is provided, you must also manage the state and provide an `onOpenChange` handler.
         * If `undefined`, the component manages its own state (uncontrolled).
         */
        isOpen: any;
        /**
         * Callback function executed when a `Dropdown.Item` is clicked.
         * The function receives the click event and any `value` prop passed to the clicked `Dropdown.Item`.
         * `(event: MouseEvent, value?: any) => void`
         */
        onClick: any;
        /**
         * Callback function executed when the open state of the dropdown changes (e.g., opening or closing).
         * Receives the new open state as a boolean argument.
         * `(open: boolean) => void`
         */
        onOpenChange: any;
        /**
         * Callback function executed when the value of the search input (enabled by `hasSearch`) changes.
         * Receives the current search term as a string argument.
         * `(searchTerm: string) => void`
         */
        onSearch: any;
        /**
         * The preferred side of the trigger element to render the dropdown content against when open.
         * @type {'top' | 'right' | 'bottom' | 'left'}
         * @see DROPDOWN_SIDE
         */
        side: any;
        /** A custom CSS class name to apply to the root wrapper `div` element for additional styling. */
        wrapperClassName: any;
    };
};
export declare const dropdownProps: {
    /**
     * The preferred alignment of the dropdown content against the trigger along the appropriate axis.
     * @type {'start' | 'center' | 'end'}
     * @see DROPDOWN_ALIGN
     */
    align: any;
    /**
     * The content of the Dropdown. Should include `Dropdown.Trigger` and `Dropdown.Content` as children.
     * Other components like `Dropdown.Item`, `Dropdown.Separator`, etc., should be nested within `Dropdown.Content`.
     */
    children: any;
    /** A selector to target the element that the dropdown should be rendered in. */
    container: any;
    /**
     * If true, enables a search input field within the `Dropdown.Content`.
     * Note: The filtering logic based on the search term needs to be implemented within the `Dropdown.Content` or its children.
     */
    hasSearch: any;
    /** Optional unique identifier attribute for the root element of the component. */
    id: any;
    /**
     * Controls the open state of the dropdown. Use this for controlled behavior.
     * If `isOpen` is provided, you must also manage the state and provide an `onOpenChange` handler.
     * If `undefined`, the component manages its own state (uncontrolled).
     */
    isOpen: any;
    /**
     * Callback function executed when a `Dropdown.Item` is clicked.
     * The function receives the click event and any `value` prop passed to the clicked `Dropdown.Item`.
     * `(event: MouseEvent, value?: any) => void`
     */
    onClick: any;
    /**
     * Callback function executed when the open state of the dropdown changes (e.g., opening or closing).
     * Receives the new open state as a boolean argument.
     * `(open: boolean) => void`
     */
    onOpenChange: any;
    /**
     * Callback function executed when the value of the search input (enabled by `hasSearch`) changes.
     * Receives the current search term as a string argument.
     * `(searchTerm: string) => void`
     */
    onSearch: any;
    /**
     * The preferred side of the trigger element to render the dropdown content against when open.
     * @type {'top' | 'right' | 'bottom' | 'left'}
     * @see DROPDOWN_SIDE
     */
    side: any;
    /** A custom CSS class name to apply to the root wrapper `div` element for additional styling. */
    wrapperClassName: any;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-dropdown--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/854f04-dropdown/b/4635b4
 * @end
 */
export default Dropdown;
