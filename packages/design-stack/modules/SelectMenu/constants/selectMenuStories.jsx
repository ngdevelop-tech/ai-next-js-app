import React from 'react';

import TruncateText from '../../TruncateText';

const WADE_COOPER = 'Wade Cooper';
const ARLENE_MCCOY = 'Arlene Mccoy';
const DEVON_WEBB = 'Devon Webb';
const MARINE_WEBB = 'Marine Webb';
const DWAYNE_COOK = 'Dwayne Cook';
const JOSEPH_TRIBIANI = 'Joseph Tribiani';

export const SELECT_OPTIONS = [
  {
    label: WADE_COOPER,
    value: 1
  },
  {
    value: 2,
    label: ARLENE_MCCOY
  },
  {
    value: 3,
    label: DEVON_WEBB
  },
  {
    value: 4,
    label: 'Tom Cook'
  },
  {
    value: 5,
    label: 'Tanya Fox'
  },
  {
    value: 6,
    label: MARINE_WEBB
  },
  {
    value: 7,
    label: DWAYNE_COOK
  },
  {
    value: 8,
    label: JOSEPH_TRIBIANI
  },
  {
    value: 9,
    label: 'Ross Fox'
  }
];

export const SELECT_MENU_OPTIONS = [
  WADE_COOPER,
  ARLENE_MCCOY,
  DEVON_WEBB,
  'Tom Cook',
  'Tanya Fox',
  MARINE_WEBB,
  DWAYNE_COOK,
  JOSEPH_TRIBIANI,
  'Ross Fox'
];

export const SELECT_MENU_OPTIONS_STICKY = [
  WADE_COOPER,
  ARLENE_MCCOY,
  DEVON_WEBB,
  'Tom Cook',
  'Tanya Fox',
  MARINE_WEBB,
  DWAYNE_COOK,
  JOSEPH_TRIBIANI,
  'Ross Fox',
  'Sticky Item'
];

export const SELECT_MENU_OPTIONS_SELECTOR = '[role="option"]';
const IMAGE =
  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

export const OPTIONS_WITH_AVATAR = [
  {
    label: 'Wade Copper',
    value: 1,
    image: IMAGE
  },
  {
    label: 'Devonn Webb',
    value: 2,
    image: IMAGE
  }
];

export const OPTIONS = [
  {
    visualNode: (
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 shrink-0 rounded-full icon-danger-weak">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="currentColor" />
          </svg>
        </div>
        <span>Wade Copper</span>
      </div>
    ),
    value: 1,
    label: 'Wade Copper'
  },
  {
    visualNode: (
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 shrink-0 rounded-full icon-success-weaker">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="currentColor" />
          </svg>
        </div>
        <span>Devon Webb</span>
      </div>
    ),
    value: 2,
    label: 'Devon Webb'
  }
];

export const ASSIGNED_TO = 'Assigned to';

export const VIRTUALISED_SELECTMENU_OPTIONS = Array.from({ length: 1000 }).map(
  (_, index) => ({
    value: index + 1,
    label: `John Doe ${index + 1}`
  })
);

export const VIRTUALISED_SELECTMENU_STICKY = {
  value: -1,
  label: 'Sticky Item'
};

export const OPTIONS_WITH_SECONDARY_TEXT = [
  {
    value: 1,
    label:
      'November Ajax Obsidion fury is a very long name r Ajax Obsidion fury is a very long name',
    visualNode: (
      <TruncateText
        hidetooltipTriggerIcon
        isFullWidthTooltip
        truncateUsingClamp={false}
        wrapperClassName="mr-0"
        headerTooltipProps={{
          placementSide: 'right'
        }}
        isTooltip
        tooltipContent={
          <div className="flex items-center gap-1 px-2">
            <p className="text-neutral-inverse-weak">
              November Ajax Obsidion fury is a very long name r Ajax Obsidion
              fury is a very long name
            </p>
            <p className="text-neutral-inverse-weakest">@wadecooper</p>
          </div>
        }
      >
        <span>
          <span className="text-neutral-default">
            November Ajax Obsidion fury is a very long name r Ajax Obsidion fury
            is a very long name
          </span>{' '}
          <span className="text-neutral-weaker">@wadecooper</span>
        </span>
      </TruncateText>
    )
  },
  {
    value: 2,
    label: 'Regression',
    visualNode: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Regression</p>
        <p className="text-neutral-weaker">test</p>
      </div>
    )
  },
  {
    value: 3,
    label: 'Staging Testing',
    visualNode: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Staging Testing</p>
        <p className="text-neutral-weaker">100</p>
      </div>
    )
  },
  {
    value: 4,
    label: 'Nightly Regression',
    visualNode: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Nightly Regression</p>
        <p className="text-neutral-weaker">@hellenschmidt</p>
      </div>
    )
  },
  {
    value: 5,
    label: 'Regression Reporting',
    visualNode: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Regression Reporting</p>
        <p className="text-neutral-weaker">@tanyafox</p>
      </div>
    )
  },
  {
    value: 6,
    label: 'Arlenee Mccoy',
    visualNode: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Arlenee Mccoy</p>
        <p className="text-neutral-weaker">@hellenschmidt</p>
      </div>
    )
  },
  {
    value: 7,
    label: 'Devone Webb',
    visualNode: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Devone Webb</p>
        <p className="text-neutral-weaker">@devonwebb</p>
      </div>
    )
  }
];

export const SELECT_MENU_OPTION_GROUPS = [
  {
    value: 1,
    label: 'Group 1',
    isGroupLabelOption: true
  },
  {
    value: 2,
    label: 'Regression',
    image: IMAGE
  },
  {
    value: 3,
    label: 'Staging Testing',
    image: IMAGE
  },
  {
    value: 4,
    label: 'Group 2',
    isGroupLabelOption: true
  },
  {
    value: 5,
    label: 'Nightly Regression',
    image: IMAGE
  },
  {
    value: 6,
    label: 'Regression Reporting',
    image: IMAGE
  },
  {
    value: 7,
    label: 'Group 3',
    isGroupLabelOption: true
  },
  {
    value: 8,
    label: 'Arlenee Mccoy',
    image: IMAGE
  },
  {
    value: 9,
    label: 'Devone Webb',
    image: IMAGE
  }
];
