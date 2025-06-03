import React from "react";
import {
  MdCalendarToday,
  MdHome,
  MdLocationOn,
  MdMonetizationOn,
  MdWork,
} from "react-icons/md";

import {
  BreadcrumbContents,
  BreadcrumbText,
  Hyperlink,
  TruncateText,
} from "../../../index";
import { BADGE_SIZE } from "../../Badge/constants/badge";

const TITLE = "This is an example of really really long page name";
const DUMMY_URL = "http://www.google.com";

export const breadcrumbContent = (
  <>
    <BreadcrumbContents>
      <Hyperlink target="_blank" href={DUMMY_URL} aria-label="Home Page">
        <MdHome className="h-5 w-5 icon-neutral-weaker hover:icon-neutral-strong" />
      </Hyperlink>
    </BreadcrumbContents>
    <BreadcrumbContents>
      <Hyperlink target="_blank" href={DUMMY_URL} aria-label="Support">
        <BreadcrumbText>Support</BreadcrumbText>
      </Hyperlink>
    </BreadcrumbContents>
    <BreadcrumbContents>
      <Hyperlink target="_blank" href={DUMMY_URL} aria-label="Documentation">
        <BreadcrumbText>Documentation</BreadcrumbText>
      </Hyperlink>
    </BreadcrumbContents>
    <BreadcrumbContents>
      <Hyperlink target="_blank" href={DUMMY_URL} aria-label={TITLE}>
        <TruncateText
          hidetooltipTriggerIcon
          isFullWidthTooltip
          passTruncatedState={false}
          headerTooltipProps={{
            sideOffset: -6,
          }}
          wrapperClassName="w-60 text-neutral-weaker hover:text-neutral-weak"
          tooltipContent={
            <p className="px-4 text-neutral-inverse-default">{TITLE}</p>
          }
        >
          <BreadcrumbText wrapperClassName="py-2">{TITLE}</BreadcrumbText>
        </TruncateText>
      </Hyperlink>
    </BreadcrumbContents>
    <BreadcrumbContents isActive>
      <Hyperlink
        href="#"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
        aria-current="page"
        aria-label="Contact"
      >
        <BreadcrumbText isActive>Contact</BreadcrumbText>
      </Hyperlink>
    </BreadcrumbContents>
  </>
);

export const SUBSECTION_METADATA = [
  {
    metaDescription: "Full-time",
    icon: <MdWork className="h-5 w-5 icon-neutral-weaker" />,
  },
  {
    metaDescription: "Remote",
    icon: <MdLocationOn className="h-5 w-5 icon-neutral-weaker" />,
  },
  {
    metaDescription: "$120k – $140k",
    icon: <MdMonetizationOn className="h-5 w-5 icon-neutral-weaker" />,
  },
  {
    metaDescription: "Closing on January 9, 2020",
    icon: <MdCalendarToday className="h-5 w-5 icon-neutral-weaker" />,
  },
];

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
export const DEFAULT_NAME = "Frontend Engineer";

export const HEADER_BADGES_ARRAY = [
  {
    id: "1",
    monospacedDigits: true,
    text: "Badge",
    hasDot: false,
    size: BADGE_SIZE.LARGE,
  },
  {
    id: "2",
    monospacedDigits: true,
    text: "Badge",
    hasDot: false,
    size: BADGE_SIZE.LARGE,
  },
  {
    id: "3",
    monospacedDigits: true,
    text: "Badge",
    hasDot: false,
    size: BADGE_SIZE.LARGE,
  },
];

export const META_BADGES_ARRAY = [
  {
    id: "4",
    monospacedDigits: true,
    text: "Badge",
    hasDot: false,
    size: BADGE_SIZE.LARGE,
  },
  {
    id: "5",
    monospacedDigits: true,
    text: "Badge",
    hasDot: false,
    size: BADGE_SIZE.LARGE,
  },
];
export const META_DROPDOWN_OPTIONS = [
  { body: "Account Settings", id: 1 },
  { body: "Support", id: 2 },
  { body: "License", id: 3 },
];
