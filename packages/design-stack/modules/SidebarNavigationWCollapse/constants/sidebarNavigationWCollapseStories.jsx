import React from "react";
import {
  MdCalendarToday,
  MdGroups,
  MdOutlineFolder,
  MdOutlineHome,
} from "react-icons/md";

export const PRIMARY_NAVS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <MdOutlineHome className="h-6 w-6 icon-neutral-weak" />,
    active: true,
  },
  {
    id: "team",
    label: "Team",
    icon: <MdGroups className="h-6 w-6 icon-neutral-weak" />,
  },
  {
    id: "project",
    label: "Projects",
    icon: <MdOutlineFolder className="h-6 w-6 icon-neutral-weak" />,
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: <MdCalendarToday className="h-6 w-6 icon-neutral-weak" />,
  },
];

export const SECONDARY_NAVS = [
  {
    id: "johndoe",
    label: "John Doe",
    icon: <MdOutlineHome className="h-6 w-6 icon-neutral-weak" />,
  },
];
