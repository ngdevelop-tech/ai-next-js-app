import React, { useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Menu } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

const TRIGGER_COLORS = { BRAND: "brand" };
const DropdownTrigger = ({
  children,
  colors,
  disabled,
  icon,
  isIconOnly,
  onClick,
  renderWithButton,
  triggerAriaLabel,
  wrapperClassName,
  ...props
}) => {
  const [isHovered, setIshovered] = useState(false);
  return (
    <>
      {renderWithButton ? (
        <Popover.Trigger asChild>
          <Menu.Button
            onMouseEnter={() => setIshovered(true)}
            onMouseLeave={() => setIshovered(false)}
            className={twClassNames(
              "inline-flex w-full items-center justify-center rounded-md border border-neutral-strong bg-input-default px-4 py-2 text-sm font-medium text-neutral-weak shadow-sm hover:bg-input-default-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-stronger disabled:cursor-not-allowed disabled:border-neutral-default disabled:bg-input-default-disabled disabled:shadow-none",
              { "gap-2 pr-3": icon },
              { "px-4": isIconOnly },
              {
                "bg-brand-default hover:bg-brand-default-hover border-y-0 border-r-0 disabled:bg-brand-default-disabled":
                  colors === TRIGGER_COLORS.BRAND,
              },
              { "text-neutral-default": !isIconOnly && isHovered },
              wrapperClassName
            )}
            onClick={e => onClick?.(e)}
            aria-label={triggerAriaLabel}
            disabled={disabled}
            {...props}
          >
            {!isIconOnly && children}
            {icon && (
              <div
                onMouseEnter={() => setIshovered(true)}
                onMouseLeave={() => setIshovered(false)}
                className={twClassNames(
                  isIconOnly ? "icon-neutral-strong " : "icon-neutral-weak",
                  {
                    "icon-neutral-inverse-default":
                      colors === TRIGGER_COLORS.BRAND,
                    "icon-neutral-weaker": disabled,
                    "icon-brand-weakest":
                      colors === TRIGGER_COLORS.BRAND && disabled,
                    "icon-neutral-strong": !isIconOnly && isHovered,
                  }
                )}
              >
                {icon}
              </div>
            )}
          </Menu.Button>
        </Popover.Trigger>
      ) : (
        <Popover.Trigger asChild>{children}</Popover.Trigger>
      )}
    </>
  );
};

export const dropdownOptionTriggerProps = {
  /** Node containing the content that will be displayed within the DropdownOptionTrigger component. */
  children: PropTypes.node,
  /** Controls the color palette of the trigger button.To be used in Buttongroup only */
  colors: PropTypes.oneOf(Object.values(TRIGGER_COLORS)),
  /** Boolean option that toggles whether a trigger is disabled or not. */
  disabled: PropTypes.bool,
  /** Node containing the icon that will be displayed with the DropdownOptionTrigger label/text. */
  icon: PropTypes.node,
  /** Node containing the icon that will be displayed with the DropdownOptionTrigger label/text. */
  isIconOnly: PropTypes.bool,
  /** Function called on click. */
  onClick: PropTypes.func,
  /** Function called on key press. */
  onKeyDown: PropTypes.func,
  /** Boolean to render child with or without button */
  renderWithButton: PropTypes.bool,
  /** Aria label for the trigger. */
  triggerAriaLabel: PropTypes.string,
  /** A custom CSS class name to style the DropdownOptionTrigger component. */
  wrapperClassName: PropTypes.string,
};

DropdownTrigger.propTypes = dropdownOptionTriggerProps;

DropdownTrigger.defaultProps = {
  children: null,
  colors: null,
  disabled: false,
  icon: null,
  isIconOnly: false,
  onClick: null,
  onKeyDown: null,
  renderWithButton: true,
  triggerAriaLabel: "menu-button",
  wrapperClassName: "",
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-dropdown--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/854f04-dropdown/b/4635b4
 * @end
 */

export default DropdownTrigger;
