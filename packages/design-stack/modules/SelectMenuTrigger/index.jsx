/**
 * @typedef {Object} SelectMenuTriggerProps
 * @property {React.ReactNode} [leadingIcon] - Node containing the content that will be displayed as a leading icon in SelectMenu Trigger.
 * @property {string} [placeholder] - The placeholder text to display when no value is selected. Defaults to an empty string.
 * @property {React.ReactNode} [triggerIcon] - The icon displayed on the right side of the trigger. Defaults to `MdUnfoldMore`.
 * @property {string} [wrapperClassName] - Additional CSS classes to apply to the trigger button wrapper.
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} [props] - Any other props are spread onto the underlying button element.
 */

import React, { forwardRef, useContext, useEffect, useRef } from "react";
import { MdError, MdUnfoldMore } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Listbox } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";

import { node, string } from "../../shared/proptypesConstants";
import { SELECTMENU_VARIANTS } from "../SelectMenu/constants/selectMenu";
import { SelectMenuContextData } from "../SelectMenu/selectMenuContext";
import TruncateText from "../TruncateText";

import RenderButtonChildren from "./components/RenderButtonChildren";

/**
 * SelectMenuTrigger serves as the interactive element that opens the SelectMenu options list.
 * It displays the currently selected value(s) or a placeholder, and includes icons for interaction cues.
 * This component must be used as a child of `SelectMenu`. It leverages Radix UI Popover and Headless UI Listbox internally.
 *
 * @example
 * <SelectMenu value={selectedOption} onChange={setSelectedOption}>
 *   <SelectMenuTrigger placeholder="Select an option" />
 *   <SelectMenuContent>
 *     <SelectMenuItem value="option1">Option 1</SelectMenuItem>
 *     <SelectMenuItem value="option2">Option 2</SelectMenuItem>
 *   </SelectMenuContent>
 * </SelectMenu>
 *
 * @accessibility
 * - Uses a standard HTML `<button>` element.
 * - Integrates with Headless UI Listbox for managing ARIA attributes related to listbox interactions (`aria-haspopup`, `aria-expanded`).
 * - Displays an error icon (`MdError`) when `errorText` is provided via context, signaling an invalid state.
 * - Disables the button visually and functionally when the `disabled` prop is true via context.
 *
 * @type {React.ForwardRefExoticComponent<SelectMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>}
 */
const SelectMenuTrigger = forwardRef(
  (
    {
      leadingIcon = null,
      placeholder = "",
      wrapperClassName = "",
      triggerIcon = (
        <MdUnfoldMore
          className="h-5 w-5 icon-neutral-weak"
          aria-hidden="true"
        />
      ),
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef();
    const appliedRef = ref || buttonRef;

    const { isMulti, setWidth, showCount, errorText, disabled, open, variant } =
      useContext(SelectMenuContextData);

    useEffect(() => {
      if (open) setWidth(appliedRef.current.offsetWidth);
    }, [setWidth, appliedRef, open]);

    return (
      <Popover.Trigger asChild>
        <Listbox.Button
          ref={appliedRef}
          className={twClassNames(
            "relative w-full cursor-pointer rounded-md border border-neutral-strong bg-input-default py-2 pl-3 pr-7 text-left text-sm leading-5 text-neutral-default shadow-sm outline-none hover:bg-neutral-default-hover focus-visible:border-brand-strong focus-visible:ring-1 focus-visible:ring-brand-strong",
            {
              "focus-visible:border-danger-strong focus-visible:ring-1 focus-visible:ring-danger-strong border-danger-weak":
                errorText,
              "border-brand-strong ring-1 ring-brand-strong": open,
              "border-danger-strong ring-1 ring-danger-strong":
                open && errorText,
              "pr-14": isMulti && showCount,
              "pr-20": isMulti && showCount && errorText,
              "cursor-not-allowed border-neutral-default bg-input-default-disabled text-neutral-weaker":
                disabled,
              "p-1 focus-visible:ring-2 border-0 shadow-none":
                variant === SELECTMENU_VARIANTS.MINIMAL,
              "ring-1 ring-danger-weak":
                variant === SELECTMENU_VARIANTS.MINIMAL && errorText,
              "ring-2": variant === SELECTMENU_VARIANTS.MINIMAL && open,
            },
            wrapperClassName
          )}
          role="menu button"
          {...props}
        >
          {({ value }) => (
            <>
              <span className="flex">
                {leadingIcon && <div className=" pr-3">{leadingIcon}</div>}
                <span className="line-clamp-1">
                  <TruncateText
                    hidetooltipTriggerIcon
                    isTooltip={false}
                    wrapperClassName={twClassNames({
                      "text-neutral-weaker": !value || value.length === 0,
                    })}
                  >
                    <RenderButtonChildren
                      value={value}
                      placeholder={placeholder}
                    />
                  </TruncateText>
                </span>
              </span>

              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center gap-1 pr-2">
                {isMulti && value?.length && showCount ? (
                  <span
                    className={twClassNames("font-bold text-neutral-default", {
                      "text-danger-strongest": errorText,
                    })}
                  >{`(${value.length})`}</span>
                ) : null}
                {errorText && (
                  <MdError
                    className="h-5 w-5 icon-danger-default"
                    aria-hidden="true"
                  />
                )}
                {triggerIcon}
              </span>
            </>
          )}
        </Listbox.Button>
      </Popover.Trigger>
    );
  }
);

SelectMenuTrigger.propTypes = {
  /** Node containing the content that will be displayed as a leading icon in the SelectMenu Trigger. */
  leadingIcon: node,
  /** The placeholder text to display when no value is selected. */
  placeholder: string,
  /** The icon displayed on the right side of the trigger. */
  triggerIcon: node,
  /** Additional CSS classes to apply to the trigger button wrapper. */
  wrapperClassName: string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */

export default SelectMenuTrigger;
