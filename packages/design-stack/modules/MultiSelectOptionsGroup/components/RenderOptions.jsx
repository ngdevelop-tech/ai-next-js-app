import React, { useContext, useEffect } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { MdChevronRight } from "react-icons/md";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import {
  DATA_PROPTYPES,
  MULTISELECT_TYPES,
} from "../../MultiSelect/constants/multiSelect";
import { MultiSelectContextData } from "../../MultiSelect/context";
import { OPTION_ITEM_STYLES, OPTION_SELECTION_STYLES } from "../constants";
import { getVisibleTreeitems, handleOnKeyDown } from "../utils";

import RenderAdvancedOptions from "./RenderAdvancedOptions";
import RenderIconAndText from "./RenderIconAndText";
import ScrollHelper from "./ScrollHelper";

function RenderOptions({ data, currentLevel, isLastLevel = false }) {
  const { selectOption, selectedOptions, closeSelector, type, levels } =
    useContext(MultiSelectContextData);
  const isAdvancedSelector = type === MULTISELECT_TYPES.ADVANCED_SELECTOR;
  const currentLevelString = `level${currentLevel}`;
  const isSelectedOption = optionId =>
    selectedOptions[currentLevelString]?.id === optionId;

  useEffect(() => {
    if (!isLastLevel) return;
    const visibleTreeitems = getVisibleTreeitems(
      currentLevel,
      item =>
        item.getAttribute("data-id") !==
        `show-and-hide-${selectedOptions[currentLevelString]?.id}`
    );

    for (let i = 0; i < visibleTreeitems.length; i += 1) {
      const ti = visibleTreeitems[i];

      if (
        ti.id === selectedOptions[currentLevelString]?.id ||
        (isAdvancedSelector &&
          ti.id === selectedOptions[`${currentLevelString}_1`]?.id)
      ) {
        ti.focus();
        break;
      }
    }

    // we don't want this to get triggered on every change of selectedOption only on 1st render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdvancedSelector]);

  const renderIcon = option => {
    const { icon } = option;
    if (!icon) return null;
    if (isAdvancedSelector) {
      return <>{icon}</>;
    }

    return React.cloneElement(option.icon, {
      className: twClassNames(option.icon?.props?.className, {
        "icon-brand-weaker": isSelectedOption(option.id),
      }),
    });
  };

  const handleSelection = option => {
    if (isLastLevel) closeSelector();
    if (!isSelectedOption(option.id)) selectOption(currentLevel, option);
  };

  const lastLevelNestedData = isLastLevel
    ? selectedOptions[currentLevelString]?.subCategories || []
    : [];

  return (
    <div
      className={twClassNames("flex w-[324px] flex-col overflow-y-auto p-3", {
        "border-r border-neutral-default": !isLastLevel,
        "font-semibold w-[200px] max-w-[200px]": currentLevel !== levels,
        "gap-3": isAdvancedSelector && isLastLevel,
      })}
      data-test={`multi-selector-${currentLevelString}`}
    >
      {isAdvancedSelector && lastLevelNestedData.length > 0
        ? data.map(option => (
            <RenderAdvancedOptions
              key={option.id}
              option={option}
              data={option?.subCategories || []}
              currentLevel={currentLevel}
            />
          ))
        : data.map(option => (
            <>
              <div
                id={option.id}
                key={option.id}
                onClick={() => handleSelection(option)}
                onKeyDown={event => {
                  handleOnKeyDown({
                    level: currentLevel,
                    onEnter: () => {
                      handleSelection(option);
                    },
                    event,
                  });
                }}
                tabIndex={0}
                role="button"
                className={twClassNames(OPTION_ITEM_STYLES, {
                  [`${OPTION_SELECTION_STYLES}`]: isSelectedOption(option.id),
                })}
              >
                <div className="flex">
                  <RenderIconAndText
                    icon={renderIcon(option)}
                    title={option.title}
                    titleWrapperClassName={twClassNames({
                      "text-brand-default": isSelectedOption(option.id),
                    })}
                  />
                </div>
                {option.details && (
                  <div
                    className={twClassNames(
                      "text-nowrap font-normal text-neutral-weaker",
                      {
                        "text-brand-default": isSelectedOption(option.id),
                      }
                    )}
                  >
                    {option.details}
                  </div>
                )}
                {isSelectedOption(option.id) && !isLastLevel ? (
                  <MdChevronRight
                    size={20}
                    className="justify-self-end icon-brand-weak"
                  />
                ) : null}
              </div>
              {isAdvancedSelector &&
                !isLastLevel &&
                option?.hasScrollHelper && (
                  <ScrollHelper
                    currentLevel={currentLevel}
                    data={option?.subCategories || []}
                    handleSelection={() => handleSelection(option)}
                  />
                )}
            </>
          ))}
    </div>
  );
}

const RenderOptionsProps = {
  /** Current level number */
  currentLevel: PropTypes.number.isRequired,
  /** Available nested data for level */
  data: PropTypes.arrayOf(PropTypes.shape(DATA_PROPTYPES)).isRequired,
  /** Specify if this level is last level as per available data */
  isLastLevel: PropTypes.bool,
};
RenderOptions.propTypes = RenderOptionsProps;

export default RenderOptions;
