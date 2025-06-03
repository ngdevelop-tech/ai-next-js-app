/**
 * Props for the AccordionSimpleHeader component.
 *
 * @typedef {Object} AccordionSimpleHeaderProps
 * @property {string} [chevronIconColor] - Optional CSS class to customize the color of the chevron icon. Defaults to `icon-neutral-weak`.
 * @property {boolean} [controller] - If provided, determines the open/closed state of the accordion, making it a controlled component. `true` for open, `false` for closed.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Optional callback function executed when the header button is clicked.
 * @property {(event: React.KeyboardEvent<HTMLButtonElement>) => void} [onKeyDown] - Optional callback function executed when a key is pressed while the header button is focused, specifically handles 'Enter' or 'Space'.
 * @property {string} title - The text content to display as the header title. This is required.
 * @property {string} [wrapperClassName] - Optional custom CSS class name to apply additional styles to the main wrapper `Disclosure.Button` element.
 */

import React from "react";
import { MdChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";
import { DisclosureButton } from "@headlessui/react";

/**
 * AccordionSimpleHeader provides a clickable header for an accordion item,
 * typically used within a Headless UI DisclosureButton component. It displays a title
 * and a chevron icon indicating the open/closed state.
 * It supports both controlled (state managed externally via `controller` prop)
 * and uncontrolled (state managed internally by Headless UI DisclosureButton) modes.
 *
 * @type {React.FC<AccordionSimpleHeaderProps>}
 * @param {AccordionSimpleHeaderProps} props - The props for the component.
 */
const AccordionSimpleHeader = ({
  chevronIconColor = "",
  controller = undefined,
  onClick = null,
  onKeyDown = null,
  title,
  wrapperClassName = "",
}) => {
  const handleClick = () => {
    onClick?.();
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" || e.key === " ") {
      onKeyDown?.();
    }
  };

  return (
    <DisclosureButton
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={twClassNames(
        "flex w-full items-center gap-1 bg-neutral-default px-6 py-3 text-neutral-default hover:bg-neutral-default-hover focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-strong",
        wrapperClassName
      )}
    >
      {typeof controller !== "undefined"
        ? () => (
            <>
              <MdChevronRight
                className={twClassNames(
                  "h-7 w-7 truncate font-medium icon-neutral-weak",
                  {
                    "rotate-90": controller,
                  },
                  chevronIconColor
                )}
              />
              <span>{title}</span>
            </>
          )
        : ({ open }) => (
            <>
              <MdChevronRight
                className={twClassNames(
                  "h-7 w-7 truncate font-medium icon-neutral-weak",
                  {
                    "rotate-90": open,
                  },
                  chevronIconColor
                )}
              />
              <span>{title}</span>
            </>
          )}
    </DisclosureButton>
  );
};

AccordionSimpleHeader.propTypes = {
  /** Optional CSS class to customize the color of the chevron icon. */
  chevronIconColor: PropTypes.string,

  /** If provided, determines the open/closed state (controlled component). `true` for open, `false` for closed. */
  controller: PropTypes.bool,

  /** Optional callback function executed when the header button is clicked. Receives the click event. */
  onClick: PropTypes.func,

  /** Optional callback function executed on keydown ('Enter' or 'Space'). Receives the keyboard event. */
  onKeyDown: PropTypes.func,

  /** The text content to display as the header title. Required. */
  title: PropTypes.string.isRequired,

  /** Optional custom CSS class name for the wrapper button element. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-accordion--controlled-simple-accordion
 * @zeroHeight https://zeroheight.com/023d5159d/p/724ed9-accordion/b/4635b4
 * @end
 */

export default AccordionSimpleHeader;
