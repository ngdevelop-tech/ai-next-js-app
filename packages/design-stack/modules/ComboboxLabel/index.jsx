/**
 * Represents the properties for the ComboboxLabel component.
 * @typedef {Object} ComboboxLabelProps
 * @property {string} [ariaLabel] - Provides an accessible label for the combobox input, primarily for screen readers when a visible label is not desired or sufficient.
 * @property {React.ReactNode} [children] - The visible content of the label, typically text describing the combobox input.
 * @property {string} [wrapperClassName] - Allows adding custom CSS classes to the underlying `Combobox.Label` element for specific styling needs.
 */

import React, { useContext } from "react";
import { MdInfoOutline } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Combobox } from "@headlessui/react";
import PropTypes from "prop-types";

import { ComboboxContextData } from "../ComboBox/context";
import Tooltip from "../Tooltip";
import TooltipBody from "../TooltipBody";

/**
 * Renders a label associated with a Combobox input.
 * This component integrates with the parent Combobox component via context (`ComboboxContextData`)
 * to display mandatory indicators (`*`) and informational tooltips based on `isMandatory` and `infoText` props passed to the parent.
 * It utilizes `@headlessui/react`'s `Combobox.Label` for accessibility and structure.
 *
 * @param {ComboboxLabelProps} props - The props for the ComboboxLabel component.
 * @returns {React.ReactElement} The rendered label element.
 */
const ComboboxLabel = ({
  ariaLabel = "",
  children = null,
  wrapperClassName = "",
}) => {
  const { isMandatory, infoText } = useContext(ComboboxContextData);
  return (
    <div className="flex">
      <Combobox.Label
        className={twClassNames(
          {
            "mb-1 block text-sm font-medium text-neutral-weak": children,
          },
          wrapperClassName
        )}
        aria-label={ariaLabel}
      >
        {children}
        {isMandatory && <span className="ml-0.5 text-danger-default">*</span>}
      </Combobox.Label>
      {infoText && (
        <Tooltip
          theme="dark"
          content={<TooltipBody>{infoText}</TooltipBody>}
          delay={500}
          triggerWrapperClassName={twClassNames("inline-flex pb-1")}
        >
          <button type="button" className="px-1" aria-label="info-icon">
            <MdInfoOutline className="h-4 w-4 icon-neutral-weak hover:icon-neutral-strong" />
          </button>
        </Tooltip>
      )}
    </div>
  );
};

ComboboxLabel.propTypes = {
  /** Provides an accessible label for the combobox input, primarily for screen readers. */
  ariaLabel: PropTypes.string,
  /** The visible content of the label. */
  children: PropTypes.node,
  /** Custom CSS classes for the label wrapper. */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */

export default ComboboxLabel;
