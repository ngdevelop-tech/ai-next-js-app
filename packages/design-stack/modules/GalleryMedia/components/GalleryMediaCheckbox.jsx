/**
 * Props for the GalleryMediaCheckbox component.
 * @typedef {Object} GalleryMediaCheckboxProps
 * @property {boolean} [checkboxAlwaysVisible=false] - If true, the checkbox is always visible. Otherwise, it appears on hover/focus.
 * @property {React.ReactNode} children - The content to be rendered inside the checkbox container (typically the media thumbnail).
 * @property {{label: string, title: string}} data - Data associated with the checkbox, used for accessibility attributes.
 * @property {string} data.label - A label for the checkbox, often the item ID, used for `aria-describedby`.
 * @property {string} data.title - The title associated with the checkbox, used for `aria-label` on the checkbox input and potentially the button.
 * @property {string} [dimension=''] - CSS class(es) defining the dimensions (width/height) of the component, usually based on aspect ratio.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} [onChange=null] - Callback function invoked when the checkbox state changes. Receives the change event.
 * @property {() => void} [onClick=null] - Callback function invoked when the main area (excluding the checkbox) is clicked. If provided, the container becomes a button.
 * @property {boolean} [selected=false] - Indicates whether the checkbox is currently checked/selected.
 * @property {typeof MEDIA_CARD_STATUS[keyof typeof MEDIA_CARD_STATUS]} [status=MEDIA_CARD_STATUS.LOADING] - The status of the associated media item, affecting border styles (e.g., 'ERROR' status adds a danger border).
 * @property {boolean} [withoutCheckbox=false] - If true, the checkbox input is not rendered.
 */

import React, { useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Checkbox from "../../Checkbox";
import { MEDIA_CARD_STATUS } from "../../Gallery/constants/gallery";

/**
 * A component that wraps media content (children) within a selectable container.
 * It includes a checkbox for selection, manages hover/focus states to show/hide
 * the checkbox (unless `checkboxAlwaysVisible` is true), and applies different
 * border styles based on selection and status. Can optionally act as a button
 * if `onClick` is provided.
 *
 * @component
 * @param {GalleryMediaCheckboxProps} props - The props for the GalleryMediaCheckbox component.
 */
const GalleryMediaCheckbox = ({
  checkboxAlwaysVisible = false,
  children,
  data = null,
  dimension = "",
  onChange = null,
  onClick = null,
  selected = false,
  status = MEDIA_CARD_STATUS.LOADING,
  withoutCheckbox = false,
}) => {
  const [checkBoxVisible, setCheckBoxVisible] = useState(false);
  const DynamicComponent = onClick ? "button" : "div";

  const handleChange = e => {
    e.stopPropagation();
    onChange?.(e);
  };

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div className={`relative ${dimension}`}>
      <DynamicComponent
        onClick={handleClick}
        className={twClassNames(
          "relative h-full w-full overflow-hidden rounded border border-neutral-strong bg-neutral-default outline-2 outline-offset-4 outline-brand-strong",
          {
            "border-brand-stronger border-2":
              selected && status !== MEDIA_CARD_STATUS.ERROR,
            "border-danger-strong border-2":
              selected && status === MEDIA_CARD_STATUS.ERROR,
            "border-danger-weak":
              !selected && status === MEDIA_CARD_STATUS.ERROR,
            "hover:opacity-80": onClick,
          }
        )}
        onMouseEnter={() => {
          setCheckBoxVisible(true);
        }}
        onMouseLeave={() => {
          setCheckBoxVisible(false);
        }}
        onFocus={() => {
          setCheckBoxVisible(true);
        }}
        onKeyDown={e => {
          if (e.shiftKey && e.key === "Tab") setCheckBoxVisible(false);
        }}
        type={onClick ? "button" : "presentation"}
        aria-label={onClick ? `Gallery-item-file-${data.title}` : undefined}
        aria-invalid={status === MEDIA_CARD_STATUS.ERROR}
        aria-describedby={data.label || data.title}
      >
        {children}
      </DynamicComponent>
      {!withoutCheckbox &&
        (checkBoxVisible || selected || checkboxAlwaysVisible) && (
          <Checkbox
            aria-label={`checkbox-for-${data.title}`}
            name={data.title}
            checked={selected}
            border={false}
            onChange={e => handleChange(e)}
            onMouseEnter={() => {
              setCheckBoxVisible(true);
            }}
            onFocus={() => {
              setCheckBoxVisible(true);
            }}
            onBlur={() => {
              setCheckBoxVisible(false);
            }}
            wrapperClassName="absolute right-3 top-2"
          />
        )}
    </div>
  );
};

GalleryMediaCheckbox.propTypes = {
  /**  Boolean value to determine to show checkbox on the card all the time. */
  checkboxAlwaysVisible: PropTypes.bool,
  /** Node containing the content that will be displayed within the card */
  children: PropTypes.node.isRequired,
  /** Data for related to card  */
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  /** A custom CSS class name to style the dimensions of card. */
  dimension: PropTypes.string,
  /** A callback function triggered on changing checkbox state. */
  onChange: PropTypes.func,
  /** A callback function triggered on click of `GalleryMedia` card.  */
  onClick: PropTypes.func,
  /** Specify if card is selected or not */
  selected: PropTypes.bool,
  /** Status of Gallery Media card */
  status: PropTypes.oneOf(Object.values(MEDIA_CARD_STATUS)),
  /** Specify if the card should have a checkbox or not */
  withoutCheckbox: PropTypes.bool,
};

export default GalleryMediaCheckbox;
