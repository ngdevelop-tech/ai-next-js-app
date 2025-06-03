/**
 * @typedef {Object} AccordionInteractiveHeaderProps Represents the props for the AccordionInteractiveHeader component.
 * @property {React.ReactNode} [asideContent] - Optional content displayed on the right side of the header, typically for actions or metadata.
 * @property {string} [chevronIconColor] - Optional CSS class to customize the color of the chevron icon.
 * @property {React.ReactNode} [children] - Optional content displayed below the title when the accordion is open.
 * @property {boolean} [controller] - If defined, controls the open/closed state of the accordion externally. `true` for open, `false` for closed. Used for controlled components.
 * @property {(event: React.MouseEvent<HTMLButtonElement>) => void} [onClick] - Optional callback function executed when the header button is clicked. Only applicable in controlled mode.
 * @property {(event: React.KeyboardEvent<HTMLButtonElement>) => void} [onKeyDown] - Optional callback function executed when the Enter or Space key is pressed on the header button. Only applicable in controlled mode.
 * @property {React.ReactNode} [title] - The main title content displayed in the header.
 * @property {string} [titleWrapperClassName] - Optional custom CSS class name applied to the button element wrapping the title and chevron.
 * @property {React.ReactNode} [trigger] - Optional element displayed to the left of the main header content, often used for icons or checkboxes.
 * @property {string} [wrapperClassName] - Optional custom CSS class name applied to the main container div of the header.
 */

import React, { Fragment } from "react";
import { MdChevronRight } from "react-icons/md";
import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";
import { twClassNames } from "@/packages/utils/tailwindUtils";

/**
 * AccordionInteractiveHeader provides a clickable header for an accordion item.
 * It includes a title, an optional trigger element, optional aside content,
 * and a chevron icon indicating the open/closed state.
 * It can operate in controlled or uncontrolled mode via the `controller` prop.
 *
 * @type {React.FC<AccordionInteractiveHeaderProps>}
 * @param {AccordionInteractiveHeaderProps} props - The props for the component.
 */
const AccordionInteractiveHeader = ({
  asideContent = null,
  chevronIconColor = "",
  children = null,
  controller = undefined,
  onClick = null,
  onKeyDown = null,
  title = null,
  titleWrapperClassName = "",
  trigger = null,
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
    <div
      className={twClassNames(
        "flex place-items-start gap-1.5 bg-neutral-default px-6 py-3 hover:bg-neutral-default-hover",
        wrapperClassName
      )}
    >
      {trigger && <span>{trigger}</span>}
      <div className="w-full">
        <div className="flex flex-wrap justify-between">
          <Disclosure.Button as={Fragment}>
            {typeof controller !== "undefined"
              ? () => (
                  <button
                    type="button"
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                    className={twClassNames(
                      "m-1 flex grow cursor-pointer items-center gap-2.5 font-medium text-neutral-default focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-strong",
                      titleWrapperClassName
                    )}
                  >
                    <MdChevronRight
                      className={twClassNames(
                        "h-5 w-5 truncate icon-neutral-weak",
                        {
                          "rotate-90": controller,
                        },
                        chevronIconColor
                      )}
                    />
                    <div className="flex-1">{title}</div>
                  </button>
                )
              : ({ open }) => (
                  <button
                    type="button"
                    className={twClassNames(
                      "m-1 flex grow cursor-pointer items-center gap-2.5 font-medium text-neutral-default focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-strong",
                      titleWrapperClassName
                    )}
                  >
                    <MdChevronRight
                      className={twClassNames(
                        "h-5 w-5 truncate icon-neutral-weak",
                        {
                          "rotate-90": open,
                        },
                        chevronIconColor
                      )}
                    />
                    <div className="flex-1 font-normal">{title}</div>
                  </button>
                )}
          </Disclosure.Button>
          {asideContent && (
            <div className="flex items-center truncate">{asideContent}</div>
          )}
        </div>
        {children && <div className="ml-7 pl-0.5">{children}</div>}
      </div>
    </div>
  );
};

AccordionInteractiveHeader.propTypes = {
  /** Optional content displayed on the right side of the header, typically for actions or metadata. */
  asideContent: PropTypes.node,

  /** Optional CSS class to customize the color of the chevron icon. */
  chevronIconColor: PropTypes.string,

  /** Optional content displayed below the title when the accordion is open. */
  children: PropTypes.node,

  /** If defined, controls the open/closed state of the accordion externally. `true` for open, `false` for closed. Used for controlled components. */
  controller: PropTypes.bool,

  /** Optional callback function executed when the header button is clicked. Only applicable in controlled mode. */
  onClick: PropTypes.func,

  /** Optional callback function executed when the Enter or Space key is pressed on the header button. Only applicable in controlled mode. */
  onKeyDown: PropTypes.func,

  /** The main title content displayed in the header. */
  title: PropTypes.node,

  /** Optional custom CSS class name applied to the button element wrapping the title and chevron. */
  titleWrapperClassName: PropTypes.string,

  /** Optional element displayed to the left of the main header content, often used for icons or checkboxes. */
  trigger: PropTypes.node,

  /** Optional custom CSS class name applied to the main container div of the header. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-accordion--controlled-simple-accordion
 * @zeroHeight https://zeroheight.com/023d5159d/p/724ed9-accordion/b/4635b4
 * @end
 */

export default AccordionInteractiveHeader;
