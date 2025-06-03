/**
 * Represents the properties for the ComboboxAddNewItem component.
 * This component is designed to be used as an option within a Headless UI Combobox,
 * specifically for presenting an "Add New" option based on the user's current query.
 * @typedef {Object} ComboboxAddNewItemProps
 * @property {string} prefix - Text displayed before the user's query (if shown). E.g., "Add ".
 * @property {boolean} showQuery? - Determines whether to display the current search query within the option. Defaults to `false`.
 * @property {string} suffix? - Text displayed after the user's query (if shown). E.g., " as a new item". Defaults to an empty string.
 * @property {string} wrapperClassName? - A custom CSS class name to apply additional styles to the root element of the ComboboxAddNewItem component. Defaults to an empty string.
 */
import React from "react";
/**
 * A component that renders an "Add New" option within a Headless UI Combobox.
 * It displays a prefix, optionally the current search query (truncated if necessary),
 * and an optional suffix. Clicking this option typically triggers an action to add
 * the queried item.
 *
 * @component
 * @param {ComboboxAddNewItemProps} props - The props for the ComboboxAddNewItem component.
 * @returns {React.ReactElement} The rendered Combobox option element.
 */
declare const ComboboxAddNewItem: {
    ({ prefix: any, suffix, any, showQuery, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Text displayed before the user's query (if shown). E.g., "Add ". */
        prefix: any;
        /** Determines whether to display the current search query within the option. Defaults to `false`. */
        showQuery: any;
        /** Text displayed after the user's query (if shown). E.g., " as a new item". Defaults to an empty string. */
        suffix: any;
        /** A custom CSS class name to apply additional styles to the root element of the ComboboxAddNewItem component. Defaults to an empty string. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */
export default ComboboxAddNewItem;
