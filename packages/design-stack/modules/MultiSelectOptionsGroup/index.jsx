import React, { useContext } from "react";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import * as Popover from "@radix-ui/react-popover";

import { MultiSelectContextData } from "../MultiSelect/context";

import RenderOptions from "./components/RenderOptions";

const MultiSelectOptionGroup = () => {
  const { selectedOptions, id, levels, data, popoverWrapperClassName } =
    useContext(MultiSelectContextData);

  return (
    <Popover.Portal>
      <Popover.Content
        sideOffset={4}
        align="start"
        side="bottom"
        className={twClassNames("z-500", popoverWrapperClassName)}
      >
        <div
          {...(id !== null && { id })}
          className="z-500 flex max-h-[360px] min-h-[240px] rounded-md border border-neutral-strong bg-input-default text-sm font-normal text-neutral-weak shadow-lg"
        >
          {Array.from({ length: levels }, (_, index) => index + 1).map(
            level => {
              const levelStr = `level${level}`;
              const prevLevelStr = `level${level - 1}`;
              const levelData =
                level === 1
                  ? data
                  : selectedOptions[prevLevelStr]?.subCategories || [];
              const nextLevelData = selectedOptions[levelStr]?.subCategories;

              return levelData && levelData.length > 0 ? (
                <RenderOptions
                  key={level}
                  data={levelData}
                  isLastLevel={
                    level === levels ||
                    !(nextLevelData && nextLevelData.length > 0)
                  }
                  currentLevel={level}
                />
              ) : null;
            }
          )}
        </div>
      </Popover.Content>
    </Popover.Portal>
  );
};

/**
 * @storybook https://master--63a3f85277e81b426be0fdf8.chromatic.com/?path=/story/application-components-multiselect--primary
 * @zeroHeight
 * @end
 */

export default MultiSelectOptionGroup;
