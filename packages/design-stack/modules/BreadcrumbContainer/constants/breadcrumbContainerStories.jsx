import React from 'react';

import { TruncateText } from '../../../index';

export const TITLE = 'This is an example of really really long page name';

export const DROPDOWN_OPTIONS = [
  {
    id: 1,
    title: 'Dashboard 1',
    body: 'Dashboard 1'
  },
  {
    id: 2,
    title: 'Dashboard 2',
    body: 'Dashboard 2'
  },
  {
    id: 3,
    title: 'Dashboard 3',
    body: 'Dashboard 3'
  },
  {
    id: 4,
    title: 'Dashboard 4',
    body: (
      <TruncateText
        hidetooltipTriggerIcon
        isFullWidthTooltip
        headerTooltipProps={{
          sideOffset: 0,
          placementSide: 'right'
        }}
        wrapperClassName="w-full text-neutral-weak hover:text-neutral-default"
        tooltipContent={
          <p className="px-4 text-neutral-inverse-default">
            Page Name erferendis, exercitationem ratione suscipit voluptatum
            repudiandae quo possimus vitae cumque inventore nam officia adipisci
            sit culpa facilis velit eos sequi libero commodi?
          </p>
        }
      >
        Page Name erferendis, exercitationem ratione suscipit voluptatum
        repudiandae quo possimus vitae cumque inventore nam officia adipisci sit
        culpa facilis velit eos sequi libero commodi?
      </TruncateText>
    )
  }
];
