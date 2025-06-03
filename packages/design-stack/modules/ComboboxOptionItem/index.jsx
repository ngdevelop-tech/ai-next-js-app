/**
 * Represents the data structure for a single option within the Combobox.
 *
 * @typedef {Object} ComboboxOptionData
 * @property {string} [altText] - Alt text for the option's image, if applicable.
 * @property {string} [image] - URL or path to an image associated with the option.
 * @property {boolean} [isGroupLabelOption=false] - If true, this option acts as a non-selectable label for a group of options.
 * @property {string} label - The primary text displayed for the option. This is also used for filtering.
 * @property {string} [name] - The name attribute, often used when the option represents an input element (like in multi-select).
 * @property {string|number} value - The unique value associated with the option, used for identification and form submission.
 * @property {React.ReactNode} [visualLabel] - Optional custom React node to render as the option's label, overriding the default text rendering of `label`.
 */

/**
 * Props for the ComboboxOptionItem component.
 *
 * @typedef {Object} ComboboxOptionItemProps
 * @property {('left'|'right')} [checkPosition='left'] - Determines the position of the checkmark (or checkbox in multi-select) relative to the option label.
 * @property {boolean} [disabled=false] - If true, the option cannot be selected and will appear visually disabled.
 * @property {boolean} [haveGroups=false] - Indicates if the options list is structured with groups, affecting styling (e.g., margin).
 * @property {boolean} [imageInvertOnHover=false] - If true, inverts the colors of the option's image when the item is hovered or active.
 * @property {string} [imgWrapperClassName=''] - Custom CSS class name to apply to the wrapper div around the option's image.
 * @property {boolean | null} [isMultiOverrideValue=null] - Explicitly overrides the `isMulti` context value for this specific option. Useful for special cases within a multi-select Combobox.
 * @property {boolean | null} [isTagverrideValue=null] - Explicitly overrides the `isTag` context value for this specific option.
 * @property {() => void} [onActive] - Callback function executed when the option becomes active (e.g., via keyboard navigation or hover).
 * @property {(event: React.SyntheticEvent<HTMLImageElement, Event>) => void} [onImageError] - Callback function executed if the option's image fails to load.
 * @property {ComboboxOptionData} option - The data object representing the option to be rendered.
 * @property {boolean} [shouldCloseCombobox=false] - If true, clicking this option will close the Combobox dropdown, overriding the default behavior determined by `shouldCloseOnSelect` in the main Combobox.
 * @property {string} [wrapperClassName=''] - Custom CSS class name to apply to the root element (`Combobox.Option`) of the item.
 */

import React, { forwardRef, useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Combobox } from "@headlessui/react";
import PropTypes from "prop-types";

import CheckboxClone from "../../shared/CheckboxClone";
import GroupOptionLabel from "../../shared/GroupOptionLabel";
import { ComboboxContextData } from "../ComboBox/context";

import MultiOption from "./components/MultiOption";
import { CHECK_POSITION } from "./constants/comboboxOptionItem";

/**
 * Renders a single selectable item within the Combobox dropdown.
 * It handles different display variations based on props like `isMulti`, `isTag`,
 * `checkPosition`, and the presence of images or custom labels.
 * It also manages active/selected states and disabled appearance.
 * Can also render group labels if `option.isGroupLabelOption` is true.
 *
 * @type {React.ForwardRefExoticComponent<ComboboxOptionItemProps & React.RefAttributes<HTMLDivElement>>}
 */
const ComboboxOptionItem = forwardRef(
  (
    {
      checkPosition = CHECK_POSITION.LEFT,
      disabled = false,
      haveGroups = false,
      imageInvertOnHover = false,
      imgWrapperClassName = "",
      isMultiOverrideValue = null,
      isTagverrideValue = null,
      onActive = null,
      onImageError = null,
      option,
      shouldCloseCombobox = false,
      wrapperClassName = "",
    },
    ref
  ) => {
    let { isMulti, isTag } = useContext(ComboboxContextData);
    const { closeCombobox } = useContext(ComboboxContextData);
    if (isMultiOverrideValue !== null) {
      isMulti = isMultiOverrideValue;
    }
    if (isTagverrideValue !== null) {
      isTag = isTagverrideValue;
    }

    if (option.isGroupLabelOption) {
      return <GroupOptionLabel option={option} />;
    }

    return (
      <Combobox.Option
        ref={ref}
        key={option.value}
        value={option}
        data-type="item"
        className={({ active, selected }) =>
          twClassNames(
            "group relative cursor-pointer select-none bg-raised-default py-2 pl-3 pr-9 text-sm text-neutral-default",
            {
              "bg-raised-default-hover": active,
              "py-2 pl-3 pr-9":
                checkPosition === CHECK_POSITION.RIGHT && !isMulti,
              "py-2 pl-8 pr-4":
                checkPosition === CHECK_POSITION.LEFT && !isMulti,
              "py-2 pl-2 cursor-pointer": isMulti,
              "text-neutral-weakest": disabled,
              "pl-3": isTag && !selected,
              "font-semibold": selected && haveGroups,
              "last:mb-2": haveGroups,
            },
            wrapperClassName
          )
        }
        disabled={disabled}
        onClick={() => {
          if (shouldCloseCombobox) {
            closeCombobox();
          }
        }}
      >
        {({ active, selected }) => (
          <>
            {active && onActive?.()}
            {!isMulti ? (
              <MultiOption
                altText={option?.altText}
                active={active}
                selected={selected}
                option={option}
                checkPosition={checkPosition}
                imageInvertOnHover={imageInvertOnHover}
                imgWrapperClassName={imgWrapperClassName}
                isTag={isTag}
                onImageError={onImageError}
              />
            ) : (
              <div className="flex items-center space-x-2">
                <CheckboxClone checked={selected} active={active} />

                <label
                  htmlFor={option.name}
                  className="cursor-pointer truncate"
                >
                  {option?.visualLabel || option.label}
                </label>
              </div>
            )}
          </>
        )}
      </Combobox.Option>
    );
  }
);

ComboboxOptionItem.propTypes = {
  /** Determines the position of the checkbox. */
  checkPosition: PropTypes.oneOf(Object.values(CHECK_POSITION)),
  /** Determines if a particular option is disabled. */
  disabled: PropTypes.bool,
  /** If the comboxbox data have groups present */
  haveGroups: PropTypes.bool,
  /** Determines whether to invert image on hover. */
  imageInvertOnHover: PropTypes.bool,
  /** A custom CSS class name to style the image. */
  imgWrapperClassName: PropTypes.string,
  /** Prop to override the isMulti value. */
  isMultiOverrideValue: PropTypes.bool,
  /** Prop to override the isTag value. */
  isTagverrideValue: PropTypes.bool,
  /** Function callback when item is Active. */
  onActive: PropTypes.func,
  /** Function callback when there is an error with the image. */
  onImageError: PropTypes.func,
  /** Details of the option to be rendered. */
  option: PropTypes.shape({
    altText: PropTypes.string,
    image: PropTypes.string,
    isGroupLabelOption: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    visualLabel: PropTypes.node,
  }).isRequired,
  /** Prop to override the shouldCloseOnSelect value. */
  shouldCloseCombobox: PropTypes.bool,
  /** A custom CSS class name to style the ComboboxOptionItem component. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */

export default ComboboxOptionItem;
