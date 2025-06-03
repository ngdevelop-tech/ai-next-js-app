import React from "react";
import { MdArrowDownward, MdInfoOutline } from "react-icons/md";

import { Badge } from "../../../index";
import piechartImgDark from "../assets/data-viz-dark.png";
import piechartImgLight from "../assets/data-viz-light.png";

export const OPTIONS = [
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

export const DATA_VISUALIZATION_DESCRIPTION =
  "This description is optional. The legend and charts displayed above are image references intended to maintain the package's lightweight nature. This section serves as a node where High-chart visualizations or tables can be seamlessly integrated.";

export const DATA_VISUALIZATION_FOOTER_LINK_PROPS = {
  href: "https://www.browserstack.com",
  target: "_blank",
};
export const KPI_ARRAY = [
  {
    id: "1",
    title: "Title",
    stat: "22%",
  },
  {
    id: "2",
    title: "Title",
    stat: "00%",
  },
  { id: "3", title: "Title", stat: "89%" },
];
export const KPI_ARRAY_HORIZONTAL = [
  {
    id: "1",
    title: "Title",
    stat: "00%",
    description: "KPI description",
    leadingIconNode: (
      <MdInfoOutline className="shrink-0 cursor-pointer icon-neutral-default" />
    ),
    badgeNode: (
      <Badge
        icon={<MdArrowDownward className="h-4 w-4" />}
        modifier="success"
        text="12%"
      />
    ),
  },
];

export const KPI_ARRAY_VERTICAL = [
  {
    id: "1",
    title: "Title",
    stat: "00h",
    description: "KPI description",
    direction: "vertical",
    isBadgeBeforeDescription: true,
    trailingIconNode: (
      <MdInfoOutline className="shrink-0 cursor-pointer icon-neutral-default" />
    ),
    badgeNode: (
      <Badge
        icon={<MdArrowDownward className="h-4 w-4" />}
        modifier="success"
        text="12%"
      />
    ),
  },
];

export const DATA_VISUALIZATION_ANALYTICS_IMAGE = (
  <>
    <img className="dark:hidden" src={piechartImgLight} alt="dummy-chartImg" />
    <img
      className="hidden dark:block"
      src={piechartImgDark}
      alt="dummy-chartImg"
    />
  </>
);
