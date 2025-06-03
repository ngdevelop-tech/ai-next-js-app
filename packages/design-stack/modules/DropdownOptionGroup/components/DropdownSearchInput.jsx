import React, { useContext, useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";

import { DropdownContextData } from "../../Dropdown/context";
import InputField from "../../InputField";

const DropdownSearchInput = () => {
  const { isOpen, open, onSearch } = useContext(DropdownContextData);
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    setFocus(() => isOpen ?? open);
  }, [isOpen, open]);

  useEffect(() => {
    if (focus) inputRef?.current?.focus();
  }, [focus]);

  const handleKeyDown = e => {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  };

  const handleChange = ({ target }) => {
    onSearch?.(target.value);
  };

  return (
    <div
      role="menuitem"
      className="sticky top-0 z-600 rounded-t-md border-b border-neutral-default bg-raised-default p-2"
    >
      <InputField
        aria-label="search in dropdown"
        id="dropdown_search"
        autoFocus
        ref={inputRef}
        onKeyDown={handleKeyDown}
        addOnBeforeInline={
          <MdSearch type="icon" className="h-5 w-5 icon-neutral-weaker" />
        }
        onChange={handleChange}
      />
    </div>
  );
};

DropdownSearchInput.propTypes = {};

export default DropdownSearchInput;
