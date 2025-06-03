/**
 * Represents the structure of a single option item.
 * @typedef {Object} Option
 * @property {string} [image] - URL of the image to display next to the option label.
 * @property {boolean} [isGroupLabelOption] - Indicates if this option acts as a label for a group.
 * @property {string} label - The primary text label for the option. This is also used as the default alt text for the image if `altText` is not provided.
 * @property {string} [name] - An optional name attribute, often used for form submission context.
 * @property {string|number} value - The unique value associated with the option.
 * @property {React.ReactNode} [visualLabel] - An optional React node to render as the label, overriding the default `label` string visually.
 */

/**
 * Props for the MultiOption component.
 * @typedef {Object} MultiOptionProps
 * @property {boolean} [active=false] - Determines if the option is currently highlighted (e.g., by keyboard navigation).
 * @property {string} [altText=''] - Alternative text for the option's image, defaults to `option.label`.
 * @property {('left'|'right')} [checkPosition='left'] - Specifies the position of the checkmark icon when the option is selected. Defaults to 'left'. See `CHECK_POSITION`.
 * @property {boolean} [imageInvertOnHover=false] - If true, inverts the color of the image when the option is active (hovered).
 * @property {string} [imgWrapperClassName=''] - Custom CSS class name(s) to apply to the image wrapper element.
 * @property {boolean} [isTag] - Internal prop, potentially used to modify styling or behavior if the option is rendered within a tag context.
 * @property {(event: React.SyntheticEvent<HTMLImageElement, Event>) => void} [onImageError] - Callback function triggered if the option image fails to load.
 * @property {Option} option - The data object representing the option to render.
 * @property {boolean} [selected=false] - Determines if the option is currently selected.
 */

import React from "react";
import { MdCheck } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { CHECK_POSITION } from "../constants/comboboxOptionItem";

/**
 * Renders a single option item within a multi-select Combobox.
 * It displays the option label, an optional image, and a checkmark if selected.
 * @type {React.FC<MultiOptionProps>}
 */
const MultiOption = ({
  active = null,
  selected = false,
  imageInvertOnHover = false,
  imgWrapperClassName = "",
  onImageError = null,
  option,
  isTag = null,
  checkPosition = CHECK_POSITION.LEFT,
  altText = "",
}) => (
  <>
    <div className="flex items-center">
      {option?.image && (
        <img
          src={option.image}
          alt={altText || option.label}
          className={twClassNames(
            "mr-3 h-6 w-6 shrink-0 rounded-full",
            {
              invert: imageInvertOnHover && active,
            },
            imgWrapperClassName
          )}
          onError={onImageError}
        />
      )}
      <span
        className={twClassNames(
          {
            "font-semibold": selected,
            "font-normal": !selected,
          },
          "block truncate"
        )}
      >
        {option?.visualLabel || option.label}
      </span>
    </div>
    {selected && !isTag && (
      <span
        className={twClassNames(
          "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4",
          active ? "text-neutral-inverse-default" : "text-brand-default",
          {
            "right-0 pr-4":
              checkPosition === CHECK_POSITION.RIGHT || option?.image,
            "left-0 pl-1.5": checkPosition === CHECK_POSITION.LEFT,
          }
        )}
      >
        <MdCheck className="h-5 w-5 icon-brand-default" aria-hidden="true" />
      </span>
    )}
  </>
);

MultiOption.propTypes = {
  /** Determines if a particular option is active */
  active: PropTypes.bool,
  /** Alt Text for image */
  altText: PropTypes.string,
  /** Determines the position of the checkbox. */
  checkPosition: PropTypes.oneOf(Object.values(CHECK_POSITION)),
  /** Determines whether to invert image on hover. */
  imageInvertOnHover: PropTypes.bool,
  /** A custom CSS class name to style the image. */
  imgWrapperClassName: PropTypes.string,
  /** Prop to override the isTag value. */
  isTag: PropTypes.bool,
  /** Function callback when there is an error with the image. */
  onImageError: PropTypes.func,
  /** Details of the option to be rendered. */
  option: PropTypes.shape({
    image: PropTypes.string,
    isGroupLabelOption: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    visualLabel: PropTypes.node,
  }).isRequired,
  /** Determines if the particular option is selected */
  selected: PropTypes.bool,
};

export default MultiOption;
