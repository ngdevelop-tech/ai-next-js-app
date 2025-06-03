/**
 * @typedef {Object} SelectMenuLabelProps
 * @property {React.ReactNode} children? - Node containing the content that will be displayed within the label section of the selectMenu component
 * @property {string} id? - Prop to add unique id attribute to root of the component.
 * @property {string} wrapperClassName? - A custom CSS class name to style the wrapper of SelectMenuLabel
 */

import React, { useContext } from "react";
import { MdInfoOutline } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Listbox } from "@headlessui/react";
import PropTypes from "prop-types";

import { SelectMenuContextData } from "../SelectMenu/selectMenuContext";
import Tooltip from "../Tooltip";
import TooltipBody from "../TooltipBody";

/**
 * @type {React.FC<SelectMenuLabelProps>}
 */
const SelectMenuLabel = ({
  children = null,
  id = null,
  wrapperClassName = "",
}) => {
  const { isMandatory, infoText } = useContext(SelectMenuContextData);
  return (
    <div className="flex" {...(id !== null && { id })}>
      {children ? (
        <Listbox.Label
          className={twClassNames(
            "mb-1 block text-sm font-medium text-neutral-weak",
            wrapperClassName
          )}
        >
          {children}
          {isMandatory && <span className="ml-0.5 text-danger-default">*</span>}
        </Listbox.Label>
      ) : null}
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

SelectMenuLabel.propTypes = {
  /** Node containing the content that will be displayed within the label section of the selectMenu component */
  children: PropTypes.node,
  /** Prop to add unique id attribute to root of the component. */
  id: PropTypes.string,
  /** A custom CSS class name to style the wrapper of SelectMenuLabel */
  wrapperClassName: PropTypes.string,
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-selectmenu--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/91e56b-select-menu/b/4635b4
 * @end
 */

export default SelectMenuLabel;
