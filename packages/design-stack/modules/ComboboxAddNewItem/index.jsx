/**
 * Represents the properties for the ComboboxAddNewItem component.
 * This component is designed to be used as an option within a Headless UI Combobox,
 * specifically for presenting an "Add New" option based on the user's current query.
 * @typedef {Object} ComboboxAddNewItemProps
 * @property {string} prefix - Text displayed before the user's query (if shown). E.g., "Add ".
 * @property {boolean} showQuery? - Determines whether to display the current search query within the option. Defaults to `false`.
 * @property {string} suffix? - Text displayed after the user's query (if shown). E.g., " as a new item". Defaults to an empty string.
 * @property {string} wrapperClassName? - A custom CSS class name to apply additional styles to the root element of the ComboboxAddNewItem component. Defaults to an empty string.
 */

import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Combobox } from "@headlessui/react";
import PropTypes from "prop-types";

import useComboboxAddNewItem from "./useComboboxAddNewItem";

/**
 * A component that renders an "Add New" option within a Headless UI Combobox.
 * It displays a prefix, optionally the current search query (truncated if necessary),
 * and an optional suffix. Clicking this option typically triggers an action to add
 * the queried item.
 *
 * @component
 * @param {ComboboxAddNewItemProps} props - The props for the ComboboxAddNewItem component.
 * @returns {React.ReactElement} The rendered Combobox option element.
 */
const ComboboxAddNewItem = ({
  prefix,
  suffix = "",
  showQuery = false,
  wrapperClassName = "",
}) => {
  const {
    uniqueId,
    query,
    containerRef,
    firstRef,
    width,
    truncated,
    secondRef,
    content,
    thirdRef,
  } = useComboboxAddNewItem({
    showQuery,
  });
  return (
    <Combobox.Option
      value={{
        value: `${uniqueId}-${query}`,
        label: query,
        isNew: true,
      }}
      className={({ active }) =>
        twClassNames(
          "group relative flex cursor-pointer select-none items-center border-t-2 border-neutral-default bg-raised-default py-2 pl-3 pr-9 text-sm text-brand-default",
          {
            "bg-raised-default-hover": active,
          },
          wrapperClassName
        )
      }
      ref={containerRef}
    >
      <p
        ref={firstRef}
        {...(width.prefixWidth && {
          style: {
            width: width.prefixWidth + 4,
          },
        })}
      >
        {prefix}
      </p>
      {showQuery && (
        <>
          &#39;
          {truncated && <span>...</span>}
          <p
            ref={secondRef}
            className="flex flex-row-reverse truncate"
            style={{ maxWidth: width.contentWidth }}
          >
            {content}
          </p>
          &#39;
        </>
      )}
      <p
        ref={thirdRef}
        {...(width.suffixWidth && {
          style: {
            minWidth: width.suffixWidth + 5,
          },
        })}
        className="pl-1"
      >
        {suffix}
      </p>
    </Combobox.Option>
  );
};

ComboboxAddNewItem.propTypes = {
  /** Text displayed before the user's query (if shown). E.g., "Add ". */
  prefix: PropTypes.string.isRequired,
  /** Determines whether to display the current search query within the option. Defaults to `false`. */
  showQuery: PropTypes.bool,
  /** Text displayed after the user's query (if shown). E.g., " as a new item". Defaults to an empty string. */
  suffix: PropTypes.string,
  /** A custom CSS class name to apply additional styles to the root element of the ComboboxAddNewItem component. Defaults to an empty string. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */

export default ComboboxAddNewItem;
