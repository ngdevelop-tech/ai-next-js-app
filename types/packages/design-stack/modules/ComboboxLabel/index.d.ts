/**
 * Represents the properties for the ComboboxLabel component.
 * @typedef {Object} ComboboxLabelProps
 * @property {string} [ariaLabel] - Provides an accessible label for the combobox input, primarily for screen readers when a visible label is not desired or sufficient.
 * @property {React.ReactNode} [children] - The visible content of the label, typically text describing the combobox input.
 * @property {string} [wrapperClassName] - Allows adding custom CSS classes to the underlying `Combobox.Label` element for specific styling needs.
 */
import React from "react";
/**
 * Renders a label associated with a Combobox input.
 * This component integrates with the parent Combobox component via context (`ComboboxContextData`)
 * to display mandatory indicators (`*`) and informational tooltips based on `isMandatory` and `infoText` props passed to the parent.
 * It utilizes `@headlessui/react`'s `Combobox.Label` for accessibility and structure.
 *
 * @param {ComboboxLabelProps} props - The props for the ComboboxLabel component.
 * @returns {React.ReactElement} The rendered label element.
 */
declare const ComboboxLabel: {
    ({ ariaLabel, any, children, any, wrapperClassName, any, }: any): React.ReactElement;
    propTypes: {
        /** Provides an accessible label for the combobox input, primarily for screen readers. */
        ariaLabel: any;
        /** The visible content of the label. */
        children: any;
        /** Custom CSS classes for the label wrapper. */
        wrapperClassName: any;
    };
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */
export default ComboboxLabel;
