import React from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { DATA_PROPTYPES } from "../../MultiSelect/constants/multiSelect";
import { OPTION_ITEM_STYLES } from "../constants";
import { handleOnKeyDown } from "../utils";

import RenderIconAndText from "./RenderIconAndText";

function ScrollHelper({ data, currentLevel, handleSelection = null }) {
  const handleScroll = id => {
    const deviceSeriesOptions = document.getElementById(`device-series-${id}`);
    if (deviceSeriesOptions) {
      deviceSeriesOptions.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {data.length > 0 &&
        data.map(option => (
          <div
            key={option.id}
            onClick={() => {
              handleScroll(option.id);
              handleSelection?.();
            }}
            onKeyDown={event => {
              handleOnKeyDown({
                level: currentLevel,
                onEnter: () => {
                  handleScroll(option.id);
                  handleSelection?.();
                },
                event,
              });
            }}
            tabIndex={0}
            role="button"
            className={twClassNames(OPTION_ITEM_STYLES, "font-normal")}
          >
            <div className="flex">
              <RenderIconAndText icon={option.icon} title={option.title} />
            </div>
          </div>
        ))}
    </>
  );
}

const ScrollHelperProps = {
  /** Current level number */
  currentLevel: PropTypes.number.isRequired,
  /** column subcategory data to help scroll */
  data: PropTypes.arrayOf(PropTypes.shape(DATA_PROPTYPES)).isRequired,
  /** Callback to select that option */
  handleSelection: PropTypes.func,
};
ScrollHelper.propTypes = ScrollHelperProps;

export default ScrollHelper;
