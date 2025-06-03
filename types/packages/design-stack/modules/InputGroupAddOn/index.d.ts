/**
 * Props for the InputGroupAddOn component.
 * @typedef {Object} InputGroupAddOnProps
 * @property {React.ReactNode} children - The content to be displayed inside the add-on element.
 * @property {string} [id] - Optional unique identifier for the root `div` element.
 * @property {boolean} [inline=false] - If `true`, the add-on will not have default borders, background, and padding, allowing for custom inline styling. Defaults to `false`.
 * @property {'start' | 'end'} [position='start'] - Specifies the position of the add-on relative to the input field. Affects border radius. Defaults to `'start'`.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply to the root `div` element for additional styling.
 */
import React from "react";
/**
 * InputGroupAddOn component renders a container typically used alongside an input field
 * to display supplementary text or elements (like icons or buttons) as part of an input group.
 *
 * @component
 * @param {InputGroupAddOnProps} props - Props for the InputGroupAddOn component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the add-on element.
 * @param {string} [props.id] - Optional unique identifier for the root `div` element.
 * @param {boolean} [props.inline=false] - If `true`, the add-on will not have default borders, background, and padding. Defaults to `false`.
 * @param {'start' | 'end'} [props.position='start'] - Specifies the position of the add-on relative to the input field. Defaults to `'start'`.
 * @param {string} [props.wrapperClassName] - Optional custom CSS class name for the root `div` element.
 * @returns {React.ReactElement} The rendered InputGroupAddOn component.
 *
 * @example
 * // Add-on at the start
 * <InputGroupAddOn position="start">$</InputGroupAddOn>
 *
 * @example
 * // Add-on at the end
 * <InputGroupAddOn position="end">.00</InputGroupAddOn>
 *
 * @example
 * // Inline add-on with custom styling
 * <InputGroupAddOn inline wrapperClassName="p-2 bg-blue-100">Info</InputGroupAddOn>
 */
declare const InputGroupAddOn: {
    ({ children: any, id, any, inline, any, position, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the button */
        children: any;
        /** Prop to add unique id attribute to root of the component. */
        id: any;
        /** Specifies whether group is inline or not */
        inline: any;
        /** Specifies the position of button */
        position: any;
        /** A custom CSS class name to style the children wrapper */
        wrapperClassName: any;
    };
};
export default InputGroupAddOn;
