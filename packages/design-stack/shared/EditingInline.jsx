import React, { useEffect, useRef, useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

const EditingInline = ({
  inlineEditingProps,
  internalWrapperClassname,
  isTruncateTooltip,
  StaticElement,
  staticElementClassname,
  tagName,
}) => {
  const {
    defaultElementText,
    elementText,
    onBlurCallback,
    onChangeCallback,
    onFocusCallback,
    wrapperClassname,
  } = inlineEditingProps;
  const isControlled = elementText != null;
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(
    isControlled ? elementText : defaultElementText
  );
  const [inputWidth, setInputWidth] = useState(0);
  const inputRef = useRef(null);
  const spanRef = useRef(null);
  const containerRef = useRef(null);
  const [lastEditedText, setLastEditedText] = useState(defaultElementText);
  useEffect(() => {
    if (inputRef?.current && isEditing) {
      inputRef?.current?.focus();
    }
  }, [isEditing, inputRef]);

  const handleKeyDown = (event, type) => {
    const { key, shiftKey } = event;
    const keys = ["Escape", "Tab"];
    const enterKey = "Enter";
    const allKeys = [...keys, enterKey];

    if (
      (type === "textarea" && keys?.indexOf(key) > -1) ||
      (type !== "textarea" && allKeys?.indexOf(key) > -1)
    ) {
      setIsEditing(false);
      inputRef?.current?.blur();

      if (key === "Tab" && shiftKey) {
        containerRef.current.focus(); // focus to previous focusable element
      }
    }
  };

  const updateInputWidth = e => {
    if (spanRef.current) {
      spanRef.current.textContent = e.target?.value.replace(/\s/g, "\u00A0");
      setInputWidth(spanRef.current?.offsetWidth);
    }
  };

  const updatedElementText = () => {
    if (isControlled) {
      return elementText;
    }
    return editingText.trim().length === 0 ? lastEditedText : editingText;
  };

  const updatedLastEditedText = e => {
    if (e.target.value.trim().length !== 0) {
      setLastEditedText(e.target.value);
    } else setEditingText(lastEditedText);
  };

  const inputStyle = twClassNames(
    staticElementClassname,
    `-mx-1 border-0 border-transparent bg-input-default p-0 px-1 align-top focus:bg-neutral-stronger focus:ring-0`
  );
  return (
    <div
      ref={containerRef}
      onBlur={() => setIsEditing(false)}
      onFocus={() => setIsEditing(true)}
      tabIndex={isEditing ? -1 : 0}
      role="presentation"
      onClick={() => setIsEditing(true)}
      onKeyDown={e => handleKeyDown(e, "input")}
      className={twClassNames(
        `-ml-1 w-fit overflow-hidden 
    rounded px-1 focus-within:ring-2 focus-within:ring-brand-strong hover:bg-neutral-stronger`,
        internalWrapperClassname,
        wrapperClassname
      )}
    >
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            aria-label="text-editing"
            size={editingText.replace(/\s/g, "").length}
            type="text"
            className={inputStyle}
            style={{ width: inputWidth > 0 && `${inputWidth}px` }} // Set input width based on state
            value={isControlled ? elementText : editingText}
            onChange={e => {
              if (!isControlled) setEditingText(e.target.value);
              updateInputWidth(e);
              onChangeCallback?.(e);
            }}
            onFocus={e => {
              updateInputWidth(e);
              onFocusCallback?.(e);
            }}
            onBlur={e => {
              updatedLastEditedText(e);
              onBlurCallback?.(e);
            }}
            onKeyDown={e => updateInputWidth(e)}
          />
          <span
            ref={spanRef}
            className={twClassNames(
              inputStyle,
              `absolute left-[-9999px] inline-block min-w-[2ch]`
            )}
          />
        </>
      ) : (
        <StaticElement
          tagName={tagName}
          heading={updatedElementText()}
          wrapperClassName={staticElementClassname}
          isTruncateTooltip={isTruncateTooltip}
        />
      )}
    </div>
  );
};

EditingInline.propTypes = {
  StaticElement: PropTypes.func,
  inlineEditingProps: PropTypes.shape({
    defaultElementText: PropTypes.string,
    elementText: PropTypes.string,
    onBlurCallback: PropTypes.func,
    onChangeCallback: PropTypes.func,
    onFocusCallback: PropTypes.func,
    wrapperClassname: PropTypes.string,
  }),
  internalWrapperClassname: PropTypes.string,
  isTruncateTooltip: PropTypes.bool,
  staticElementClassname: PropTypes.string,
  tagName: PropTypes.string,
};
EditingInline.defaultProps = {
  StaticElement: null,
  inlineEditingProps: null,
  staticElementClassname: "",
  isTruncateTooltip: false,
  internalWrapperClassname: "",
  tagName: "h1",
};
export default EditingInline;
