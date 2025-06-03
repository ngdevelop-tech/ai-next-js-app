import React, { useContext, useEffect, useState } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import PropTypes from "prop-types";

import Button from "../../Button";
import { DATA_PROPTYPES } from "../../MultiSelect/constants/multiSelect";
import { MultiSelectContextData } from "../../MultiSelect/context";
import { OPTION_ITEM_STYLES, OPTION_SELECTION_STYLES } from "../constants";
import { handleOnKeyDown, handleOnKeyDownHorizontal } from "../utils";

import RenderIconAndText from "./RenderIconAndText";

const RenderScrollOptionItem = ({ option, currentLevel }) => {
  const { id, icon, details, title, actionIcons, triggerIcon } = option;
  const [hover, setHover] = useState(false);
  const [expandedActionIcons, setExpandedActionIcons] = useState(false);
  const [loadAnimation, setLoadAnimation] = useState(false);
  const { selectedOptions, selectOption, closeSelector } = useContext(
    MultiSelectContextData
  );
  const isSelectedOption = optionId =>
    selectedOptions[`level${currentLevel}_1`]?.id === optionId;

  useEffect(() => {
    setLoadAnimation(isSelectedOption(id));
    // we don't want this to get triggered on every change of selectedOption only on 1st render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (expandedActionIcons) {
      document
        .getElementById("expanded-action-icons-wrapper")
        .querySelector(`[data-id="horizontal-menu-items-${id}"]`)
        ?.focus();
    }
  }, [expandedActionIcons, id]);

  const renderIcon = () =>
    icon
      ? React.cloneElement(icon, {
          className: twClassNames(icon?.props?.className, {
            "icon-brand-weaker": isSelectedOption(id),
          }),
        })
      : null;

  const hoverIconStyle = twClassNames("translate-x-[60px] rotate-[270deg]", {
    "translate-x-0 rotate-0 transition-tranform duration-300 delay-[50ms] ease-[cubic-bezier(0.25, 1, 0.75, 1)]":
      hover || loadAnimation,
  });

  const clickIconStyle = "w-full focus:z-[1] rounded-none border-r-0";

  const browserIconClickHandler = (event, optionSelected) => {
    event.stopPropagation();
    selectOption(currentLevel, optionSelected, "_1");

    setExpandedActionIcons(false);
    closeSelector();
  };

  const ActionIconComp = (
    updatedOption,
    iconStyle,
    buttonId,
    variant,
    isKeyBoardAccessible = false
  ) => (
    <Button
      {...(isKeyBoardAccessible && { "data-id": buttonId })}
      role="menuitem"
      onClick={e => browserIconClickHandler(e, updatedOption)}
      onKeyDown={e => {
        handleOnKeyDownHorizontal({
          level: currentLevel,
          onEnter: () => browserIconClickHandler(e, updatedOption),
          event: e,
          row: id,
          onFocusOut: () => {
            setExpandedActionIcons(false);
            setLoadAnimation(false);
          },
          jumpTwice: false,
          dataId: buttonId,
          filteringFunction: item => item.getAttribute("role") !== "menu",
        });
      }}
      colors="white"
      size="extra-small"
      variant={variant}
      wrapperClassName={twClassNames("focus-visible:ring-offset-0", iconStyle)}
      icon={updatedOption?.actionIcon?.icon}
      isIconOnlyButton
      aria-label={`${updatedOption?.actionIcon?.value} action icon`}
    />
  );

  const selectOptionHandler = () => {
    if (!actionIcons || actionIcons.length <= 1) {
      const newOption = {
        ...option,
        actionIcon: actionIcons?.[0],
        triggerIcon: actionIcons?.[0]?.icon || triggerIcon,
      };
      selectOption(currentLevel, newOption, "_1");
      closeSelector();
    } else {
      setExpandedActionIcons(true);
    }
  };

  return (
    <div
      key={id}
      id={id}
      data-id={id}
      onClick={selectOptionHandler}
      onMouseEnter={() => {
        setHover(true);
      }}
      onFocus={() => setLoadAnimation(true)}
      onBlur={() => {
        setLoadAnimation(false);
        setHover(false);
      }}
      onMouseLeave={() => {
        setHover(false);
        setLoadAnimation(false);
        setExpandedActionIcons(false);
      }}
      onKeyDown={event => {
        handleOnKeyDown({
          level: currentLevel,
          onEnter: selectOptionHandler,
          event,
        });
      }}
      tabIndex={0}
      role="menu"
      className={twClassNames(OPTION_ITEM_STYLES, "relative font-normal", {
        [`${OPTION_SELECTION_STYLES}`]: isSelectedOption(id),
      })}
      aria-label={title}
    >
      <div role="menuitem" className="flex">
        <RenderIconAndText
          icon={renderIcon()}
          title={title}
          titleWrapperClassName={twClassNames({
            "text-brand-default": isSelectedOption(id),
          })}
        />
      </div>
      {details && (
        <div
          role="none"
          className={twClassNames("visible text-nowrap text-neutral-weaker", {
            "text-brand-default": isSelectedOption(id),
            invisible: (hover || loadAnimation) && actionIcons,
          })}
        >
          {details}
        </div>
      )}

      {actionIcons &&
        (!expandedActionIcons ? (
          <div
            role="none"
            className={twClassNames(
              "invisible absolute right-0 z-10 ml-4 mr-2 flex items-center justify-between gap-3 overflow-hidden",
              {
                visible: hover || loadAnimation,
              }
            )}
          >
            {actionIcons.map(iconData =>
              ActionIconComp(
                {
                  ...option,
                  actionIcon: iconData,
                  triggerIcon: iconData.icon,
                },
                hoverIconStyle,
                `horizontal-menu-items-${id}`,
                "minimal"
              )
            )}
          </div>
        ) : (
          <div
            className={twClassNames(
              "absolute right-0 flex w-full items-center justify-between"
            )}
            id="expanded-action-icons-wrapper"
            role="none"
          >
            {actionIcons.map((iconData, i) =>
              ActionIconComp(
                {
                  ...option,
                  actionIcon: iconData,
                  triggerIcon: iconData.icon,
                },
                twClassNames(clickIconStyle, {
                  "rounded-l-md border-r-0": i === 0,
                  "rounded-r-md border-r": i === actionIcons.length - 1,
                }),
                `horizontal-menu-items-${id}`,
                "primary",
                true
              )
            )}
          </div>
        ))}
    </div>
  );
};

const RenderScrollOptionItemProps = {
  /** Current level number */
  currentLevel: PropTypes.number.isRequired,
  /** Available option data */
  option: PropTypes.shape(DATA_PROPTYPES).isRequired,
};
RenderScrollOptionItem.propTypes = RenderScrollOptionItemProps;

export default RenderScrollOptionItem;
