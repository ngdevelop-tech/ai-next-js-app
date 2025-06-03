/**
 * @typedef {Object} AccordionPanelProps
 * @property {React.ReactNode} children - The content to be rendered inside the panel when the accordion item is open.
 * @property {boolean} [controller] - Optional. Controls the visibility state (open/closed) of the panel externally. If provided, the component operates in controlled mode.
 * @property {string} [wrapperClassName] - Optional. Additional CSS class name(s) to apply to the transition wrapper element for custom styling.
 */

import React from "react";
import { DisclosurePanel, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

/**
 * AccordionPanel component represents the collapsible content area within an Accordion item.
 * It uses `@headlessui/react` DisclosurePanel and Transition for smooth open/close animations.
 * Can be used in both controlled (via `controller` prop) and uncontrolled modes (managed by parent Accordion).
 * @component
 * @type {React.FC<AccordionPanelProps>}
 */
const AccordionPanel = ({
  children,
  controller = undefined,
  wrapperClassName = "",
}) => (
  <Transition
    enter="transition duration-250 ease-in"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="transition duration-250 ease-out"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    className={wrapperClassName}
    {...(typeof controller !== "undefined" && { show: controller })}
    as={"div"}
  >
    <DisclosurePanel>{children}</DisclosurePanel>
  </Transition>
);

AccordionPanel.propTypes = {
  /** The content to be rendered inside the panel when the accordion item is open. */
  children: PropTypes.node.isRequired,

  /** Optional. Controls the visibility state (open/closed) of the panel externally. If provided, the component operates in controlled mode. */
  controller: PropTypes.bool,

  /** Optional. Additional CSS class name(s) to apply to the transition wrapper element for custom styling. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-accordion--controlled-simple-accordion
 * @zeroHeight https://zeroheight.com/023d5159d/p/724ed9-accordion/b/4635b4
 * @end
 */

export default AccordionPanel;
