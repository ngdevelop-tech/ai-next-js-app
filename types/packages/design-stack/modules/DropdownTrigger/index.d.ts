import React from "react";
declare const DropdownTrigger: {
    ({ children: any, colors: any, disabled: any, icon: any, isIconOnly: any, onClick: any, renderWithButton: any, triggerAriaLabel: any, wrapperClassName: any, ...props }: any): React.ReactElement;
    propTypes: {
        /** Node containing the content that will be displayed within the DropdownOptionTrigger component. */
        children: any;
        /** Controls the color palette of the trigger button.To be used in Buttongroup only */
        colors: any;
        /** Boolean option that toggles whether a trigger is disabled or not. */
        disabled: any;
        /** Node containing the icon that will be displayed with the DropdownOptionTrigger label/text. */
        icon: any;
        /** Node containing the icon that will be displayed with the DropdownOptionTrigger label/text. */
        isIconOnly: any;
        /** Function called on click. */
        onClick: any;
        /** Function called on key press. */
        onKeyDown: any;
        /** Boolean to render child with or without button */
        renderWithButton: any;
        /** Aria label for the trigger. */
        triggerAriaLabel: any;
        /** A custom CSS class name to style the DropdownOptionTrigger component. */
        wrapperClassName: any;
    };
    defaultProps: {
        children: any;
        colors: any;
        disabled: boolean;
        icon: any;
        isIconOnly: boolean;
        onClick: any;
        onKeyDown: any;
        renderWithButton: boolean;
        triggerAriaLabel: string;
        wrapperClassName: string;
    };
};
export declare const dropdownOptionTriggerProps: {
    /** Node containing the content that will be displayed within the DropdownOptionTrigger component. */
    children: any;
    /** Controls the color palette of the trigger button.To be used in Buttongroup only */
    colors: any;
    /** Boolean option that toggles whether a trigger is disabled or not. */
    disabled: any;
    /** Node containing the icon that will be displayed with the DropdownOptionTrigger label/text. */
    icon: any;
    /** Node containing the icon that will be displayed with the DropdownOptionTrigger label/text. */
    isIconOnly: any;
    /** Function called on click. */
    onClick: any;
    /** Function called on key press. */
    onKeyDown: any;
    /** Boolean to render child with or without button */
    renderWithButton: any;
    /** Aria label for the trigger. */
    triggerAriaLabel: any;
    /** A custom CSS class name to style the DropdownOptionTrigger component. */
    wrapperClassName: any;
};
/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-dropdown--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/854f04-dropdown/b/4635b4
 * @end
 */
export default DropdownTrigger;
