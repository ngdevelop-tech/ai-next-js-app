import React, { useContext, useEffect, useState } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import { DATA_PROPTYPES } from "../../MultiSelect/constants/multiSelect";
import { MultiSelectContextData } from "../../MultiSelect/context";
import { OPTION_ITEM_FOCUS_STYLES } from "../constants";
import { handleOnKeyDownHorizontal } from "../utils";

import RenderIconAndText from "./RenderIconAndText";
import RenderScrollVariant from "./RenderScrollVariant";

const VERSION_THRESHOLD = 5;

const RenderAdvancedOptions = ({ option, data, currentLevel }) => {
  const { selectedOptions, selectOption, closeSelector } = useContext(
    MultiSelectContextData
  );

  const { id, title, icon } = option;
  const isSelectedOption = optionId =>
    selectedOptions[`level${currentLevel}_1`]?.id === optionId;

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {option?.hasScrollHelper ? (
        <RenderScrollVariant
          data={data}
          selectedCategory={option}
          currentLevel={currentLevel}
        />
      ) : (
        <div>
          <div
            key={id}
            className={twClassNames(
              "flex items-center justify-between gap-2 rounded-none border-b border-neutral-default p-2 font-semibold"
            )}
          >
            <div className="flex">
              <RenderIconAndText icon={icon} title={title} />
            </div>
            {data.length > VERSION_THRESHOLD && (
              <div
                onClick={handleShowMore}
                onKeyDown={event => {
                  handleOnKeyDownHorizontal({
                    level: currentLevel,
                    onEnter: () => {
                      handleShowMore();
                    },
                    event,
                    row: `show-and-hide-${id}`,
                  });
                }}
                tabIndex={0}
                role="button"
                data-id={`show-and-hide-${id}`}
                className={twClassNames(
                  OPTION_ITEM_FOCUS_STYLES,
                  "flex gap-2 text-nowrap rounded text-xs font-medium leading-4 text-brand-default"
                )}
              >
                {showMore ? (
                  <>
                    <span>Show less</span>
                    <span>
                      <MdExpandLess className="icon-brand-weak" size={16} />
                    </span>
                  </>
                ) : (
                  <>
                    <span>{data.length - VERSION_THRESHOLD} more</span>
                    <span>
                      <MdExpandMore className="icon-brand-weak" size={16} />
                    </span>
                  </>
                )}
              </div>
            )}
          </div>
          <div className="mt-2 grid grid-cols-5 flex-wrap text-sm font-normal">
            {data
              .slice(0, showMore ? data.length : VERSION_THRESHOLD)
              .map(version => (
                <div
                  key={version.id}
                  id={version.id}
                  data-id={`horizontal-menu-items-${id}`}
                  onClick={() => {
                    closeSelector();
                    selectOption(currentLevel, option);
                    selectOption(currentLevel, version, "_1");
                  }}
                  onKeyDown={event => {
                    handleOnKeyDownHorizontal({
                      level: currentLevel,
                      onEnter: () => {
                        closeSelector();
                        selectOption(currentLevel, option);
                        selectOption(currentLevel, version, "_1");
                      },
                      event,
                      row: `horizontal-menu-items-${id}`,
                    });
                  }}
                  tabIndex={0}
                  role="button"
                  className={twClassNames(
                    OPTION_ITEM_FOCUS_STYLES,
                    "flex h-8 w-[60px] cursor-pointer items-center justify-center gap-1 rounded bg-raised-default hover:bg-raised-default-hover",
                    {
                      "bg-brand-weakest hover:bg-brand-weakest":
                        isSelectedOption(version.id),
                    }
                  )}
                >
                  <RenderIconAndText
                    title={version.title}
                    titleWrapperClassName={twClassNames({
                      "text-brand-default font-semibold": isSelectedOption(
                        version.id
                      ),
                    })}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

const RenderAdvancedOptionsProps = {
  /** Current level number */
  currentLevel: PropTypes.number.isRequired,
  /** Available nested data for level */
  data: PropTypes.arrayOf(PropTypes.shape(DATA_PROPTYPES)).isRequired,
  /** Available data for level */
  option: PropTypes.shape({
    actionIcons: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node.isRequired,
        value: PropTypes.string.isRequired,
      })
    ),
    details: PropTypes.node,
    hasScrollHelper: PropTypes.bool,
    icon: PropTypes.node,
    id: PropTypes.string.isRequired,
    subCategories: PropTypes.shape(DATA_PROPTYPES),
    title: PropTypes.string.isRequired,
    triggerIcon: PropTypes.node,
    triggerLabel: PropTypes.string,
  }).isRequired,
};
RenderAdvancedOptions.propTypes = RenderAdvancedOptionsProps;

export default RenderAdvancedOptions;
