import React from "react";
import {
  MdAdsClick,
  MdErrorOutline,
  MdGroups,
  MdMail,
  MdMoreVert,
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineArrowOutward,
} from "react-icons/md";

import {
  Dropdown,
  DropdownOptionGroup,
  DropdownOptionItem,
  DropdownTrigger,
  Tooltip,
  TooltipBody,
} from "../../../index";

import { STATS_VARIANTS } from "./stats";

const GRAPH_BG_COLOR = "var(--chart-category-1)";

export const TITLE = "Total Subscribers";
export const TOP_HEADING = (
  <h3 className="text-lg font-medium leading-6 text-neutral-default">
    Last 30 Days
  </h3>
);
export const DROPDOWN_OPTIONS = [
  {
    id: "1",
    body: "Edit",
  },
  {
    id: "2",
    body: "Duplicate",
    divider: false,
  },
  {
    id: "3",
    body: "Archive",
    divider: true,
  },
];
export const OPTIONS = [
  {
    id: 1,
    name: TITLE,
    stat: "71189",
    graph: null,
    icon: <MdGroups className="h-6 w-6 icon-neutral-inverse-default" />,
    change: "11%",
    changeType: "increase",
    link: "https://google.com",
    linkText: "google.com",
    statSubText: "from 28.62%",
    onClick: () => {},
  },
  {
    id: 2,
    name: "Avg. Open Rate",
    stat: "58.16%",
    graph: null,
    icon: <MdMail className="h-6 w-6 icon-neutral-inverse-default" />,
    change: "5.4%",
    changeType: "increase",
    link: "https://data.com",
    linkText: "data.com",
    statSubText: "to 50.62%",
    onClick: () => {},
  },
  {
    id: 3,
    name: "Avg. Click Rate",
    stat: "24.57%",
    graph: null,
    icon: <MdAdsClick className="h-6 w-6 icon-neutral-inverse-default" />,
    change: "3.2%",
    changeType: "decrease",
    statSubText: "decrease",
    link: "wikipedia.com",
    linkText: "wikipedia",
    onClick: () => {},
  },
];
export const GRAPH_VARIANT_OPTIONS = [
  {
    id: 5,
    name: (
      <div className="flex items-center">
        Total Subscribers
        <MdErrorOutline className="ml-3 icon-neutral-weak" />
      </div>
    ),
    stat: "71189",
    graph: (
      <div className="mb-2 flex h-28 justify-between">
        <div className="flex h-24 w-full flex-col justify-between">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="h-3 w-40 rounded-r-full"
                style={{ background: GRAPH_BG_COLOR }}
              />
              <div className="ml-2 text-xs text-neutral-default">300</div>
            </div>
            <div className="text-right text-xs text-neutral-weaker">Name 1</div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="h-3 w-48 rounded-r-full"
                style={{ background: GRAPH_BG_COLOR }}
              />
              <div className="ml-2 text-xs text-neutral-default">310</div>
            </div>
            <div className="text-right text-xs text-neutral-weaker">Name 2</div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="h-3 w-36 rounded-r-full"
                style={{ background: GRAPH_BG_COLOR }}
              />
              <div className="ml-2 text-xs text-neutral-default">290</div>
            </div>
            <div className="text-right text-xs text-neutral-weaker">Name 3</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                className="h-3 w-52 rounded-r-full"
                style={{ background: GRAPH_BG_COLOR }}
              />
              <div className="ml-2 text-xs text-neutral-default">320</div>
            </div>
            <div className="text-right text-xs text-neutral-weaker">Name 4</div>
          </div>
        </div>
      </div>
    ),
    icon: null,
    change: "23",
    statSubText: null,
    changeType: "decrease",
    link: null,
    linkText: null,
    onClick: () => {},
  },
  {
    id: 6,
    name: (
      <div className="flex items-center">
        {TITLE}
        <Tooltip
          triggerAriaLabel="info-tooltip"
          content={
            <TooltipBody>
              Lorem ipsum dolor sit amet lalala, consectetur adipiscing elit.
              Donec sodales augue eu viverra tempus.
            </TooltipBody>
          }
        >
          <MdErrorOutline className="ml-3 icon-neutral-weak" />
        </Tooltip>
      </div>
    ),
    stat: "71189",
    graph: (
      <div className="mb-4 flex justify-between">
        <div className="flex w-full flex-col justify-between">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-40 rounded-r-full bg-info-500" />
              <div className="ml-2 text-xs text-neutral-default">300</div>
            </div>
            <div className="text-right text-xs text-neutral-weaker">Name 1</div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-48 rounded-r-full bg-info-500" />
              <div className="ml-2 text-xs text-neutral-default">310</div>
            </div>
            <div className="text-right text-xs text-neutral-weaker">Name 2</div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-36 rounded-r-full bg-info-500" />
              <div className="ml-2 text-xs text-neutral-default">290</div>
            </div>
            <div className="text-right text-xs text-neutral-weaker">Name 3</div>
          </div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-3 w-52 rounded-r-full bg-info-500" />
              <div className="ml-2 text-xs text-neutral-default">320</div>
            </div>
            <div className="text-right text-xs text-neutral-weaker">Name 4</div>
          </div>
        </div>
      </div>
    ),
    icon: null,
    change: null,
    statSubText: "out of 100 tests",
    changeType: null,
    link: "http://google.com",
    linkText: "View all",
    menuDropdown: (
      <Dropdown onClick={() => {}}>
        <div className="flex">
          <DropdownTrigger wrapperClassName="p-0 border-0 shadow-none">
            <MdMoreVert
              className="h-5 w-5 icon-neutral-default"
              aria-hidden="true"
            />
          </DropdownTrigger>
        </div>

        <DropdownOptionGroup>
          {DROPDOWN_OPTIONS.map(opt => (
            <DropdownOptionItem key={opt.id} option={opt} />
          ))}
        </DropdownOptionGroup>
      </Dropdown>
    ),
  },
];

export const VARIANT_OPTIONS = Object.keys(STATS_VARIANTS).map(
  variant => `<b>${variant}</b>`
);
