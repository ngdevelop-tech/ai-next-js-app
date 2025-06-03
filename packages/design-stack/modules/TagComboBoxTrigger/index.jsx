import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdCancel, MdError, MdUnfoldMore } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Combobox } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import PropTypes from "prop-types";

import Button from "../Button";
import { ComboboxContextData } from "../ComboBox/context";
import Loader from "../Loader";
import Tag from "../Tag";

/**
 * @typedef {object} SelectedItem
 * @property {boolean} [hasDismissButton=true] - Whether the tag should have a dismiss button.
 * @property {string} [image] - URL for an image to display within the tag (not currently used in this trigger).
 * @property {string} label - The text label displayed on the tag.
 * @property {string|number} value - The unique value associated with the tag.
 * @property {boolean} [isError] - If true, applies error styling to the tag.
 * @property {'base' | 'success' | 'warning' | 'error' | 'info'} [modifier='base'] - Visual modifier for the tag style.
 */

/**
 * @typedef {object} ComboboxTagTriggerProps
 * @property {function(React.ChangeEvent<HTMLInputElement>): void} [onInputValueChange] - Callback function triggered when the input value changes.
 * @property {string} [placeholder=''] - Placeholder text for the input field when no tags are selected.
 * @property {function(SelectedItem): void} [onTagClose] - Callback function triggered when a tag's dismiss button is clicked. Receives the closed tag object.
 * @property {SelectedItem[]} [currentSelected=[]] - An array of currently selected items to be displayed as tags.
 * @property {function(): void} [onClearAll] - Callback function triggered when the 'Clear all' button is clicked.
 * @property {React.ReactNode} [leadingIcon] - An optional icon to display at the beginning of the trigger.
 * @property {function(React.KeyboardEvent<HTMLInputElement>): void} [onKeyDown] - Callback function triggered on key down events within the input field.
 */

/**
 * ComboboxTagTrigger component serves as the trigger element for a tag-based ComboBox.
 * It displays selected items as tags and provides an input field for searching/adding more items.
 * It handles interactions like tag removal, clearing all tags, and managing the input field state.
 *
 * @component
 * @param {ComboboxTagTriggerProps} props - The props for the ComboboxTagTrigger component.
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref to the underlying Popover trigger button element.
 * @returns {React.ReactElement} The rendered ComboboxTagTrigger component.
 *
 * @example
 * const [selected, setSelected] = useState([{ label: 'Apple', value: 'apple' }]);
 * const [query, setQuery] = useState('');
 *
 * const handleTagClose = (tag) => {
 *   setSelected(selected.filter(item => item.value !== tag.value));
 * };
 *
 * const handleClearAll = () => {
 *   setSelected([]);
 * };
 *
 * const handleInputChange = (event) => {
 *   setQuery(event.target.value);
 *   // Handle filtering options based on query
 * };
 *
 * <Popover.Root>
 *   <ComboboxTagTrigger
 *     currentSelected={selected}
 *     onTagClose={handleTagClose}
 *     onClearAll={handleClearAll}
 *     onInputValueChange={handleInputChange}
 *     placeholder="Select fruits..."
 *   />
 *   <Popover.Content>
 *     { // Combobox options here }
 *   </Popover.Content>
 * </Popover.Root>
 *
 * @see {@link https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-comboboxtag--controlled-tag-combobox Storybook}
 * @see {@link https://zeroheight.com/023d5159d/p/9218f2-multi-select-combo-box-with-badge/b/4635b4 Zeroheight}
 *
 * @accessibility
 * - The component uses `aria-expanded` to indicate the state of the dropdown.
 * - The input field has `role="search"`.
 * - Focus management ensures keyboard navigation is handled correctly between the trigger, input, and tags.
 * - The 'Clear all' button has an `aria-label`.
 */
const ComboboxTagTrigger = (
  {
    onInputValueChange = null,
    placeholder = "",
    onTagClose = null,
    currentSelected = [],
    onClearAll = null,
    leadingIcon = null,
    onKeyDown = () => {},
  },
  ref
) => {
  const buttonInnerRef = useRef();
  const comboboxButtonRef = useRef();
  const buttonRef = ref || buttonInnerRef;
  const comboInputRef = useRef();
  const divRef = useRef();

  const {
    setWidth,
    errorText,
    isLoading,
    open,
    disabled,
    query,
    setQuery,
    isLoadingRight,
    loadingText,
  } = useContext(ComboboxContextData);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (open) setWidth(buttonRef.current?.offsetWidth);
  }, [setWidth, open, buttonRef]);

  const keepDrawerOpen = e => {
    if (open) {
      e.preventDefault();
      comboInputRef.current.focus();
    }
  };

  const getWidth = useCallback(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "14px Inter var, ui-sans-serif, system-ui, sans-serif";
    const { width } = ctx.measureText(query);
    divRef.current.style.width = `${width}px`;
  }, [query]);

  const handleFocus = event => {
    event.target.blur();
  };

  const tagModifier = useCallback(tag => {
    if (tag?.isError) {
      return "error";
    }

    if (tag?.modifier) {
      return tag?.modifier;
    }

    return "base";
  }, []);

  useEffect(() => {
    getWidth();
  }, [query, getWidth]);

  useEffect(() => {
    if (!disabled) {
      comboInputRef.current.setAttribute("aria-expanded", open);
    } else {
      comboInputRef.current.removeAttribute("aria-expanded");
    }
  }, [disabled, comboInputRef, open]);

  return (
    <Popover.Trigger ref={buttonRef} asChild>
      <Combobox.Button
        as="section"
        ref={comboboxButtonRef}
        className={twClassNames(
          "relative flex cursor-pointer appearance-none items-center rounded-md border border-neutral-strong bg-input-default px-2 py-1.5 text-sm leading-6",
          {
            "focus-within:border-brand-strong focus-within:ring-1 focus-within:outline-none focus-within:ring-brand-strong":
              !disabled,
            "border-danger-weak pr-2 focus-within:border-danger-strong focus-within:ring-danger-strong":
              errorText,
            "cursor-not-allowed border-neutral-default bg-input-default-disabled text-neutral-weaker":
              disabled,
            "bg-input-default-disabled text-neutral-weaker": isLoading,
            "bg-neutral-default-hover": isHovered && !disabled,
          }
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={e => {
          keepDrawerOpen(e);
        }}
        onFocus={e => {
          if (e.target === comboboxButtonRef?.current) {
            comboInputRef.current.focus();
          }
        }}
        {...((isLoadingRight || isLoading) && { onFocus: handleFocus })}
      >
        {leadingIcon && <div className="pr-2">{leadingIcon}</div>}
        {isLoading && (
          <div className="flex items-center space-x-2 truncate pr-2 text-sm leading-6">
            <Loader wrapperClassName=" h-5 w-5" />
            <span className="truncate">{loadingText}</span>
          </div>
        )}
        <div className="relative flex flex-1 flex-wrap items-center gap-2 overflow-hidden">
          {!isLoading &&
            currentSelected?.map(i => (
              <Tag
                key={i.value}
                wrapperClassName="z-10 break-all [overflow-wrap:anywhere]"
                text={i.label}
                hasDismissButton={
                  i?.hasDismissButton !== undefined ? i.hasDismissButton : true
                }
                modifier={tagModifier(i)}
                onDismiss={() => {
                  if (open) {
                    comboInputRef.current.focus();
                  }
                  onTagClose(i);
                }}
                disabled={disabled}
                withTruncateText
              />
            ))}

          <div
            className={twClassNames("max-w-full", {
              "flex-1": currentSelected.length <= 0,
            })}
            style={{
              minWidth: "2px",
            }}
            ref={divRef}
          >
            <div role="search" className="flex-1">
              <Combobox.Input
                {...(currentSelected.length <= 0 && {
                  placeholder: isLoading ? null : placeholder,
                })}
                onKeyDown={e => {
                  e.stopPropagation();
                  onKeyDown?.(e);
                }}
                className={twClassNames(
                  "w-full cursor-pointer border-0 bg-input-default p-0 text-sm text-neutral-default placeholder:text-neutral-weaker focus:border-none focus:outline-0 focus:ring-0 sm:text-sm",
                  {
                    "border-neutral-default bg-input-default-disabled placeholder:text-neutral-weakest text-neutral-weaker cursor-not-allowed":
                      disabled,
                    "bg-input-default-disabled": isLoading,
                    "bg-neutral-default-hover": isHovered && !disabled,
                  }
                )}
                onChange={e => {
                  setQuery(e.target.value);
                  onInputValueChange(e);
                }}
                ref={comboInputRef}
                readOnly={isLoading}
                value={query}
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <div className="mr-5 flex space-x-2">
          {!isLoading && currentSelected?.length > 0 && (
            <Button
              variant="minimal"
              wrapperClassName="z-10"
              onClick={() => {
                onClearAll?.();
              }}
              colors="white"
              disabled={disabled}
              ariaLabel="Clear all options"
            >
              <MdCancel className="h-5 w-5 icon-neutral-weak hover:icon-neutral-default" />
            </Button>
          )}
          {isLoadingRight && !isLoading && (
            <span className="flex items-center rounded-r-md text-neutral-weaker focus:outline-none">
              <Loader />
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
        </div>
        <Combobox.Button className="absolute inset-y-0 right-1 flex items-center justify-end rounded-r-md focus:outline-none">
          <MdUnfoldMore
            className="h-5 w-5 icon-neutral-weak"
            aria-hidden="true"
          />
        </Combobox.Button>
      </Combobox.Button>
    </Popover.Trigger>
  );
};

const ComboboxTagTriggerProps = {
  currentSelected: PropTypes.arrayOf(
    PropTypes.shape({
      /** Whether the tag should have a dismiss button. Defaults to true. */
      hasDismissButton: PropTypes.bool,
      /** URL for an image to display within the tag (not currently used). */
      image: PropTypes.string,
      /** The text label displayed on the tag. */
      label: PropTypes.string.isRequired,
      /** The unique value associated with the tag. */
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
  /** An optional icon to display at the beginning of the trigger. */
  leadingIcon: PropTypes.node,
  /** Callback function triggered when the 'Clear all' button is clicked. */
  onClearAll: PropTypes.func,
  /** Callback function triggered when the input value changes. Receives the input change event. */
  onInputValueChange: PropTypes.func,
  /** Callback function triggered on key down events within the input field. Receives the keyboard event. */
  onKeyDown: PropTypes.func,
  /** Callback function triggered when a tag's dismiss button is clicked. Receives the closed tag object. */
  onTagClose: PropTypes.func,
  /** Placeholder text for the input field when no tags are selected. */
  placeholder: PropTypes.string,
};

/**
 * @type {React.ForwardRefExoticComponent<ComboboxTagTriggerProps & React.RefAttributes<HTMLButtonElement>>}
 */
const WrappedComboboxTagTrigger = React.forwardRef(ComboboxTagTrigger);

ComboboxTagTrigger.propTypes = ComboboxTagTriggerProps;
WrappedComboboxTagTrigger.propTypes = ComboboxTagTriggerProps;

WrappedComboboxTagTrigger.displayName = "TagComboBoxTrigger";

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-comboboxtag--controlled-tag-combobox
 * @zeroHeight https://zeroheight.com/023d5159d/p/9218f2-multi-select-combo-box-with-badge/b/4635b4
 * @end
 */

export default WrappedComboboxTagTrigger;
