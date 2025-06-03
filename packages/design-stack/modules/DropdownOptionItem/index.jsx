import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Menu } from "@headlessui/react";
import PropTypes from "prop-types";

import { DropdownContextData } from "../Dropdown/context";

/**
 * Represents a single selectable item within a Dropdown menu.
 * It utilizes Headless UI's `Menu.Item` and integrates with the `DropdownContextData`
 * to handle clicks and potentially other shared state or actions.
 * Styles change based on active (hovered) and disabled states, and can indicate
 * destructive actions.
 *
 * @param {object} props - The component props.
 * @param {function} [props.onClick] - Optional callback function invoked when the item is clicked, in addition to the context's onClick.
 * @param {object} props.option - The data object representing the dropdown option.
 * @param {React.ReactNode} [props.option.icon] - An optional icon to display before the item body.
 * @param {React.ReactNode} props.option.body - The main content/label of the dropdown item.
 * @param {string|number} props.option.id - A unique identifier for the option item.
 * @param {React.ReactNode} [props.option.badge] - An optional badge or indicator to display after the item body.
 * @param {boolean} [props.option.destructive=false] - If true, applies styling to indicate a potentially destructive action (e.g., red text).
 * @param {string} [props.wrapperClassName] - Optional additional CSS classes to apply to the button element.
 * @param {boolean} [props.disabled=false] - If true, the item is non-interactive and visually styled as disabled.
 * @param {object} [props.rest] - Any other props are spread onto the underlying button element.
 */
const DropdownOptionItem = ({
  onClick = null,
  option,
  wrapperClassName = "",
  disabled = false,
  ...props
}) => {
  const dropdownCtx = useContext(DropdownContextData);
  const { icon, body, id, badge, destructive } = option;
  return (
    <Menu.Item disabled={disabled}>
      {({ active }) => (
        <button
          key={id}
          type="button"
          className={twClassNames(
            active
              ? "bg-raised-default-hover text-neutral-default"
              : "bg-raised-default text-neutral-weak",
            "block w-full px-4 py-2 text-left text-sm disabled:cursor-not-allowed disabled:text-neutral-weakest",
            {
              "flex gap-2": icon || badge,
              "text-danger-default disabled:text-danger-weak": destructive,
            },
            wrapperClassName
          )}
          onClick={e => {
            dropdownCtx?.onClick?.(option, e);
            onClick?.(e);
          }}
          disabled={disabled}
          {...props}
        >
          {icon && (
            <div
              className={twClassNames(
                active ? "icon-neutral-strong" : "icon-neutral-weak",
                {
                  "icon-danger-weaker": destructive,
                  "icon-danger-weak": destructive && active,
                  "icon-danger-weakest": destructive && disabled,
                }
              )}
            >
              {icon}
            </div>
          )}
          {body}
          {badge}
        </button>
      )}
    </Menu.Item>
  );
};

/**
 * PropTypes definition for the DropdownOptionItem component.
 */
export const dropdownOptionItemProps = {
  /**
   * If true, the menu item will be disabled and non-interactive.
   * @default false
   */
  disabled: PropTypes.bool,

  /**
   * Optional callback function executed when the dropdown option item is clicked.
   * This is called *after* the context's onClick handler (if provided).
   * Receives the click event object as an argument.
   * @default null
   */
  onClick: PropTypes.func,
  /**
   * An object containing the details for rendering the dropdown option.
   */
  option: PropTypes.shape({
    /**
     * An optional React node (e.g., an icon, text, or Badge component) to display
     * aligned to the right side of the item body.
     */
    badge: PropTypes.node,
    /**
     * The main content of the dropdown item. Typically text, but can be any React node.
     * This is a required property.
     */
    body: PropTypes.node.isRequired,
    /**
     * If true, applies styling to indicate a potentially destructive action (e.g., red text).
     * @default false
     */
    destructive: PropTypes.bool,
    /**
     * An optional React node (typically an Icon component) to display
     * aligned to the left side of the item body.
     */
    icon: PropTypes.node,
    /**
     * A unique identifier (string or number) for this specific option item.
     * Used as the `key` prop internally and often passed to onClick handlers.
     * This is a required property.
     */
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
  /**
   * An optional string of CSS class names to apply to the root button element
   * for custom styling.
   * @default ''
   */
  wrapperClassName: PropTypes.string,
};
DropdownOptionItem.propTypes = dropdownOptionItemProps;

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-dropdown--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/854f04-dropdown/b/4635b4
 * @end
 */

export default DropdownOptionItem;
