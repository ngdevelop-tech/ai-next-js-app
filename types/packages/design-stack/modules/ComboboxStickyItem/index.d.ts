/**
 * @typedef {Object} ComboboxStickyItemProps
 * @property {React.ReactNode} [children=null] - The content to be rendered inside the sticky item container. Typically used for actions or summaries related to the combobox options.
 * @property {string} [wrapperClassName=''] - Optional CSS class name(s) to apply to the root `span` element for custom styling.
 */
import React from "react";
/**
 * A container component designed to stick to the bottom of a Combobox list.
 * It's useful for displaying persistent actions or information related to the combobox options.
 *
 * @component ComboboxStickyItem
 * @type {React.FC<ComboboxStickyItemProps>}
 */
declare const ComboboxStickyItem: {
    ({ children, any, wrapperClassName }: any): React.ReactElement;
    propTypes: {
        /** The content to be rendered inside the sticky item container. Typically used for actions or summaries related to the combobox options. */
        children: any;
        /** Optional CSS class name(s) to apply to the root `span` element for custom styling. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */
export default ComboboxStickyItem;
