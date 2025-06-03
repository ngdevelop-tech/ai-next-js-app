import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdCancel, MdError } from "react-icons/md";
import { useLatestRef } from "@/packages/hooks";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Combobox } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import Button from "../Button";
import { COMBOBOX_VARIANTS } from "../ComboBox/constants/comboBox";
import { ComboboxContextData } from "../ComboBox/context";
import Loader from "../Loader";

import TriggerButton from "./components/TriggerButton";
import {
  getHoveredClasses,
  renderMultiOptions,
  renderSingleOptions,
} from "./utils";

/**
 * @component ComboboxTrigger
 * @description The trigger component for the Combobox. It handles displaying the selected value(s),
 * placeholder, loading state, error state, and provides the input field for searching/filtering options.
 * It also includes controls for clearing selections and toggling the options list.
 *
 * @param {object} props - The component props.
 * @param {Array<string|number>} [props.keysToBeIgnored=[]] - An array of keys (values) that should be ignored when calculating the displayed count in multi-select mode.
 * @param {React.ReactNode} [props.leadingIcon=null] - An optional icon to display at the beginning of the trigger button.
 * @param {Function} [props.onInputValueChange=null] - Callback function invoked when the value of the input field changes. Receives the new input value as an argument.
 * @param {Function} [props.onKeyDown=null] - Callback function invoked when a key is pressed down while the input field is focused. Receives the keyboard event as an argument.
 * @param {string} [props.placeholder=''] - The placeholder text to display in the input field when no value is selected or entered.
 * @param {boolean} [props.showItemCount=false] - If true, always displays the count of selected items in multi-select mode, regardless of truncation or open state.
 * @param {React.Ref} ref - Forwarded ref to the trigger button element.
 *
 * @returns {React.ReactElement} The rendered ComboboxTrigger component.
 */
const ComboboxTrigger = (
  {
    keysToBeIgnored,
    leadingIcon,
    onInputValueChange,
    onKeyDown,
    placeholder,
    showItemCount,
  },
  ref
) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const buttonRef = useRef();
  const renderCount = useRef(0);
  const onInputValueChangeRef = useLatestRef(onInputValueChange);

  const {
    isMulti,
    setWidth,
    errorText,
    isLoading,
    isLoadingRight,
    isControlledElement,
    loadingText,
    onClearAll,
    open,
    disabled,
    query,
    setQuery,
    currentSelectedValues,
    comboInputRef,
    variant,
  } = useContext(ComboboxContextData);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (open) {
      setWidth(buttonRef.current?.offsetWidth);
      comboInputRef.current.focus();
    }
  }, [setWidth, open, onInputValueChangeRef, comboInputRef]);

  // render this useEffect only from 2nd re-render
  // From 2nd re-render when options group closes make an inputChange call with empty value
  useEffect(() => {
    if (renderCount.current > 1 && !open) {
      onInputValueChangeRef.current?.("");
    } else {
      renderCount.current += 1;
    }
  }, [open, onInputValueChangeRef]);

  useEffect(() => {
    if (!disabled) {
      comboInputRef.current.setAttribute("aria-expanded", open);
    } else {
      comboInputRef.current.removeAttribute("aria-expanded");
    }
  }, [disabled, comboInputRef, open]);

  const handleFocus = event => {
    event.target.blur();
  };

  const handleClearAll = () => {
    if (onClearAll) {
      onClearAll([]);
    }
    setQuery("");
  };

  return (
    <Popover.Trigger ref={buttonRef} asChild>
      <Combobox.Button
        ref={ref}
        as="section"
        role="combobox"
        className={twClassNames(
          "relative flex cursor-pointer appearance-none items-center rounded-md border border-neutral-strong bg-input-default px-2 py-1.5 text-neutral-default",
          {
            "focus-within:border-brand-strong focus-within:ring-1 focus-within:outline-none focus-within:ring-brand-strong":
              !disabled && errorText.length === 0,
            "focus-within:border-danger-strong focus-within:ring-1 focus-within:outline-none focus-within:ring-danger-strong border-danger-weak":
              errorText,
            "cursor-not-allowed border-neutral-default bg-input-default-disabled text-neutral-weaker":
              disabled,
            "border-neutral-default bg-input-default-disabled text-neutral-weaker":
              isLoading,
            "pointer-events-none": isLoading || isLoadingRight,
            "p-1 focus-within:ring-2 border-0 shadow-none":
              variant === COMBOBOX_VARIANTS.MINIMAL,
            "ring-1 ring-danger-weak":
              variant === COMBOBOX_VARIANTS.MINIMAL && errorText,
          },
          getHoveredClasses(isHovered, disabled)
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={e => {
          if (open) {
            e.preventDefault();
            comboInputRef.current.focus();
          }
        }}
        {...(isLoadingRight && { onFocus: handleFocus })}
      >
        {leadingIcon && <div className="pr-2">{leadingIcon}</div>}
        {isLoading && (
          <div className="flex flex-1 items-center space-x-2 truncate pr-2 text-sm leading-6">
            <Loader wrapperClassName="h-5 w-5" />
            <span className="truncate">{loadingText}</span>
          </div>
        )}
        {!isMulti &&
          !open &&
          currentSelectedValues?.image &&
          !isLoading &&
          !isLoadingRight && (
            <img
              src={currentSelectedValues.image}
              alt={currentSelectedValues.label}
              className="mr-2 h-5 w-5 shrink-0 rounded-full"
            />
          )}
        <div role="search" className="min-w-0 flex-1 overflow-hidden">
          <Combobox.Input
            key={open || isLoading}
            placeholder={isLoading ? null : placeholder}
            className={twClassNames(
              "w-full min-w-0 cursor-pointer truncate border-0 bg-input-default p-0 text-sm leading-6 placeholder:text-neutral-weaker focus:border-none focus:outline-0 focus:ring-0",
              {
                "bg-input-default-disabled placeholder:text-neutral-weaker cursor-not-allowed":
                  disabled || isLoading,
                "pr-0": isTruncated,
                hidden: isLoading,
                "text-danger-strongest": errorText,
              },
              getHoveredClasses(isHovered, disabled)
            )}
            onChange={e => {
              const val = e.target.value.trim();
              setQuery(val);
              onInputValueChange?.(val);
            }}
            displayValue={dv => {
              if (open || isLoading) return query;
              return isMulti && Array.isArray(dv)
                ? renderMultiOptions(dv, keysToBeIgnored)
                : renderSingleOptions(dv);
            }}
            onKeyDown={e => {
              e.stopPropagation();
              onKeyDown?.(e);
            }}
            ref={comboInputRef}
            readOnly={isLoading}
            autoComplete="off"
          />
        </div>
        <div className="flex shrink-0 items-center ">
          {(isLoadingRight ||
            errorText ||
            isTruncated ||
            showItemCount ||
            (isControlledElement && onClearAll)) &&
            !isLoading && (
              <div className="flex items-center space-x-2 pr-1">
                {isLoadingRight && (
                  <span className="flex items-center space-x-2 rounded-r-md text-neutral-weaker focus:outline-none">
                    <Loader wrapperClassName="h-5 w-5" />
                  </span>
                )}
                {errorText && (
                  <span className="flex items-center rounded-r-md focus:outline-none">
                    <MdError
                      className="h-5 w-5 icon-danger-default"
                      aria-hidden="true"
                    />
                  </span>
                )}
                {isMulti &&
                ((isTruncated && !open) || showItemCount) &&
                currentSelectedValues.length > 0 ? (
                  <span className="whitespace-nowrap font-bold">{`(${
                    currentSelectedValues?.filter(
                      el => !keysToBeIgnored.includes(el.value)
                    ).length
                  })`}</span>
                ) : null}
                {isControlledElement &&
                  onClearAll &&
                  (currentSelectedValues?.length > 0 ||
                    currentSelectedValues?.label) && (
                    <Button
                      variant="minimal"
                      wrapperClassName="z-10"
                      onClick={handleClearAll}
                      colors="white"
                      disabled={disabled}
                      ariaLabel="Clear all selected options"
                    >
                      <MdCancel className="h-5 w-5 icon-neutral-weak hover:icon-neutral-default" />
                    </Button>
                  )}
              </div>
            )}
          <Combobox.Button
            className="flex items-center justify-end rounded-r-md focus:outline-none"
            aria-label="Toggle options"
          >
            <TriggerButton
              setIsTruncated={setIsTruncated}
              ref={comboInputRef}
            />
          </Combobox.Button>
        </div>
      </Combobox.Button>
    </Popover.Trigger>
  );
};

const comboboxTriggerProps = {
  /** An array of keys (values) that should be ignored when calculating the displayed count in multi-select mode. */
  keysToBeIgnored: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  /** Node containing the content that will be displayed as a leading icon in Combobox Trigger. */
  leadingIcon: PropTypes.node,
  /** A callback function called on input value change. Receives the new input value. `(newValue: string) => void` */
  onInputValueChange: PropTypes.func,
  /** A callback function called when any key is pressed on input field. Receives the event. `(event: React.KeyboardEvent) => void` */
  onKeyDown: PropTypes.func,
  /** Text to be shown as placeholder in the input field. */
  placeholder: PropTypes.string,
  /** If true, always displays the count of selected items in multi-select mode. */
  showItemCount: PropTypes.bool,
};
const comboboxTriggerDefaultProps = {
  keysToBeIgnored: [],
  leadingIcon: null,
  onInputValueChange: null,
  placeholder: "",
  onKeyDown: null,
  showItemCount: false,
};

const WrappedComboboxTrigger = forwardRef(ComboboxTrigger);

ComboboxTrigger.propTypes = comboboxTriggerProps;
WrappedComboboxTrigger.propTypes = comboboxTriggerProps;

ComboboxTrigger.defaultProps = comboboxTriggerDefaultProps;
WrappedComboboxTrigger.defaultProps = comboboxTriggerDefaultProps;

WrappedComboboxTrigger.displayName = "ComboboxTrigger";

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-combobox--primary
 * @zeroHeight https://zeroheight.com/023d5159d/p/55f95a-combo-box/b/4635b4
 * @end
 */

export default WrappedComboboxTrigger;
