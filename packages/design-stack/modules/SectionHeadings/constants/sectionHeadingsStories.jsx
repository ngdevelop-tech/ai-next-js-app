import React from "react";
import {
  MdCalendarToday,
  MdLocationOn,
  MdMonetizationOn,
  MdWork,
} from "react-icons/md";

import { BADGE_SIZE } from "../../Badge/constants/badge";

export const TABS = [
  { name: "Applied" },
  { name: "Phone Screening" },
  { name: "Interview" },
  { name: "Offer" },
  { name: "Hired" },
];

export const JOB_POSTINGS = "Job Postings";
export const BUTTON_1_TEXT = "Share";
export const BUTTON_2_TEXT = "Create";
export const TABS_WRAPPER_CLASSES = "mt-4 mb-5 sm:m-0";

export const SUBSECTION_METADATA = [
  {
    metaDescription: "Full-time",
    icon: <MdWork className="h-5 w-5" />,
  },
  {
    metaDescription: "Remote",
    icon: <MdLocationOn className="h-5 w-5" />,
  },
  {
    metaDescription: "$120k – $140k",
    icon: <MdMonetizationOn className="h-5 w-5" />,
  },
  {
    metaDescription: "Closing on January 9, 2020",
    icon: <MdCalendarToday className="h-5 w-5" />,
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
