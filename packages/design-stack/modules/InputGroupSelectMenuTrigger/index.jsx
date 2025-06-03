import React from "react";
import { MdExpandMore } from "react-icons/md";

import SelectMenuTrigger from "../SelectMenuTrigger";

const InputGroupSelectMenuTrigger = props => (
  <SelectMenuTrigger
    placeholder="Select.."
    wrapperClassName="border-0 w-max focus:ring-0  shadow-none"
    triggerIcon={<MdExpandMore className="h-5 w-5 icon-neutral-weak" />}
    {...props}
  />
);

export default InputGroupSelectMenuTrigger;
