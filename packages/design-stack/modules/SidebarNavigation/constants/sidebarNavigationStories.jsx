import React from "react";
import {
  MdAutoMode,
  MdBarChart,
  MdCalendarToday,
  MdChromeReaderMode,
  MdDescription,
  MdGroups,
  MdInbox,
  MdOutlineFolder,
  MdOutlineHome,
  MdSmartphone,
} from "react-icons/md";

import {
  Badge,
  SelectMenu,
  SelectMenuOptionGroup,
  SelectMenuOptionItem,
  SelectMenuTrigger,
} from "../../../index";

export const SELECT_OPTIONS = [
  { label: "Project 1", value: "p1" },
  { label: "Project 2", value: "p2" },
  { label: "Project 3", value: "p3" },
];
export const PRIMARY_NAVS = [
  {
    id: "dashboard",
    label: "Dashboard",
    activeIcon: MdOutlineHome,
    inActiveIcon: MdOutlineHome,
    path: "/",
    badge: <Badge text="Active" />,
  },
  {
    id: "team",
    label: "Team",
    activeIcon: MdGroups,
    inActiveIcon: MdGroups,
    path: "/team",
  },
  {
    id: "project",
    label: "Projects",
    activeIcon: MdOutlineFolder,
    inActiveIcon: MdOutlineFolder,
    path: "/projects",
    badge: <Badge text="Active" modifier="success" />,
  },
  {
    id: "calendar",
    label: "Calendar",
    activeIcon: MdCalendarToday,
    inActiveIcon: MdCalendarToday,
    path: "/calendar",
  },
  {
    id: "document",
    label: "Documents",
    activeIcon: MdInbox,
    inActiveIcon: MdInbox,
    path: "/documents",
    childrens: [
      {
        id: "document__adhar",
        label: "Adhar",
        path: "/adhar",
        badge: <Badge text="Active" />,
      },
      {
        id: "document__pancard",
        label: "Pancard",
        path: "/pancard",
        badge: <Badge text="1" />,
      },
    ],
  },
  {
    id: "report",
    label: "Reports",
    activeIcon: MdBarChart,
    inActiveIcon: MdBarChart,
    path: "/reports",
    childrens: [
      {
        id: "report_select",
        menuNode: (
          <SelectMenu>
            <SelectMenuTrigger placeholder="Select.." />
            <SelectMenuOptionGroup>
              {SELECT_OPTIONS.map(item => (
                <SelectMenuOptionItem key={item.value} option={item} />
              ))}
            </SelectMenuOptionGroup>
          </SelectMenu>
        ),
      },
      { id: "report__finance", label: "Finance", path: "/finance" },
      { id: "report__team", label: "Teams", path: "/team" },
    ],
  },
];

export const NAV_OPTIONS_WITH_LABEL = [
  {
    id: "app_scanner",
    label: "App scanner",
    activeIcon: MdSmartphone,
    inActiveIcon: MdSmartphone,
    path: "/app_scanner",
  },
  {
    id: "manual_test_reports",
    label: "Manual test reports",
    activeIcon: MdDescription,
    inActiveIcon: MdDescription,
    path: "/manual_test_reports",
  },
];

export const EXTRA_NAV_OPTIONS_WITH_LABEL = [
  {
    id: "automation_tests",
    label: "Automated Tests",
    activeIcon: MdAutoMode,
    inActiveIcon: MdAutoMode,
    path: "/automation_tests",
  },
  {
    id: "screen_reader",
    label: "Screen Reader",
    activeIcon: MdChromeReaderMode,
    inActiveIcon: MdChromeReaderMode,
    path: "/screen_reader",
  },
];

export const SECONDARY_NAVS = [
  {
    id: "settings",
    label: "Settings",
    activeIcon: MdOutlineHome,
    inActiveIcon: MdOutlineHome,
    path: "/",
  },
  {
    id: "integration",
    label: "Integration",
    activeIcon: MdGroups,
    inActiveIcon: MdGroups,
    path: "/team",
    badge: <Badge text="Active" />,
  },
  {
    id: "documentation",
    label: "Documentation",
    activeIcon: MdOutlineFolder,
    inActiveIcon: MdOutlineFolder,
    path: "/projects",
  },
];

export const SIDEBAR_COMBOBOX_OPTIONS = [
  {
    value: 1,
    label: "Wade Cooper",
  },
  {
    value: 2,
    label: "Arlene Mccoy",
  },
  {
    value: 3,
    label: "Devon Webb",
  },
];
