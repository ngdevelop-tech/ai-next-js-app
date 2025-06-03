import React from 'react';

import TruncateText from '../../TruncateText';

const IMAGE =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

export const COMBOBOX_OPTIONS = [
  {
    value: 1,
    label: 'Wade Cooper',
    image: IMAGE
  },
  {
    value: 2,
    label: 'Arlene Mccoy',
    image: IMAGE
  },
  {
    value: 3,
    label: 'Devon Webb',
    image: IMAGE
  },
  {
    value: 4,
    label: 'Tom Cook',
    image: IMAGE
  },
  {
    value: 5,
    label: 'Tanya Fox',
    image: IMAGE
  },
  {
    value: 6,
    label: 'Nataliya',
    image: IMAGE
  },
  {
    value: 7,
    label: 'John Doe',
    image: IMAGE
  },
  {
    value: 8,
    label: 'Ross',
    image: IMAGE
  },
  {
    value: 9,
    label: 'Rachael',
    image: IMAGE
  },
  {
    value: 10,
    label: 'November Ajax Obsidion fury is a very long name',
    visualLabel: (
      <TruncateText
        hidetooltipTriggerIcon
        isFullWidthTooltip
        truncateUsingClamp={false}
        wrapperClassName="mr-0"
        headerTooltipProps={{
          placementSide: 'right',
          delay: 350
        }}
      >
        November Ajax Obsidion fury is a very long name
      </TruncateText>
    ),
    image: IMAGE
  }
];

export const COMBOBOX_OPTION_GROUPS = [
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

const TEMPLATE = {
  value: null,
  label: ''
};

export const COMBOBOX_OPTIONS_LARGE = Array.from(
  { length: 500 },
  (_, index) => ({
    ...TEMPLATE,
    hasDismissButton: index !== 0,
    value: Math.random(),
    label: `Item ${index + 1}`,
    modifier: index === 2 ? 'warn' : 'base'
  })
);

export const COMBOBOX_LABEL = 'Assigned to';

const VISUAL_OPTIONS_SUCCESS_ICON = (
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
);

export const VISUAL_COMBOBOX_OPTIONS = [
  {
    value: 1,
    label: 'Wade Cooper',
    visualLabel: (
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
        <span>Wade Cooper</span>
      </div>
    )
  },
  {
    value: 2,
    label: 'Arlene Mccoy',
    visualLabel: (
      <div className="flex items-center space-x-2">
        {VISUAL_OPTIONS_SUCCESS_ICON}
        <span>Arlene Mccoy</span>
      </div>
    )
  },
  {
    value: 3,
    label: 'Devon Webb',
    visualLabel: (
      <div className="flex items-center space-x-2">
        {VISUAL_OPTIONS_SUCCESS_ICON}
        <span>Devon Webb</span>
      </div>
    )
  },
  {
    value: 4,
    label: 'Tom Cook',
    visualLabel: (
      <div className="flex items-center space-x-2">
        {VISUAL_OPTIONS_SUCCESS_ICON}
        <span>Tom Cook</span>
      </div>
    )
  }
];

const array = Array.from({ length: 1000 });
export const VIRTUALIZED_COMBOBOX_OPTIONS = array.map((_, index) => ({
  value: index + 1,
  label: `Combobox item ${index + 1}`
}));

export const COMBOBOX_OPTION_SECONDARY_TEXT = [
  {
    value: 1,
    label:
      'November Ajax Obsidion fury is a very long name r Ajax Obsidion fury is a very long name',
    visualLabel: (
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
    visualLabel: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Regression</p>
        <p className="text-neutral-weaker">test</p>
      </div>
    )
  },
  {
    value: 3,
    label: 'Staging Testing',
    visualLabel: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Staging Testing</p>
        <p className="text-neutral-weaker">100</p>
      </div>
    )
  },
  {
    value: 4,
    label: 'Nightly Regression',
    visualLabel: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Nightly Regression</p>
        <p className="text-neutral-weaker">@hellenschmidt</p>
      </div>
    )
  },
  {
    value: 5,
    label: 'Regression Reporting',
    visualLabel: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Regression Reporting</p>
        <p className="text-neutral-weaker">@tanyafox</p>
      </div>
    )
  },
  {
    value: 6,
    label: 'Arlenee Mccoy',
    visualLabel: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Arlenee Mccoy</p>
        <p className="text-neutral-weaker">@hellenschmidt</p>
      </div>
    )
  },
  {
    value: 7,
    label: 'Devone Webb',
    visualLabel: (
      <div className="flex items-center gap-2">
        <p className="text-neutral-default">Devone Webb</p>
        <p className="text-neutral-weaker">@devonwebb</p>
      </div>
    )
  }
];
