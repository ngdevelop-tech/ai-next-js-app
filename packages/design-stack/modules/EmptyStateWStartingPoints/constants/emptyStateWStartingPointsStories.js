import {
  MdBarChart,
  MdOutlineCalendarToday,
  MdOutlineCollections,
  MdOutlineSchedule,
  MdOutlineTableRows,
  MdViewColumn,
} from "react-icons/md";

export const ESSP_DATA = [
  {
    title: "Create a List",
    description: "Another to-do system you’ll try but eventually give up on.",
    icon: MdBarChart,
    background: "bg-brand-default",
    onClick: () => {},
  },
  {
    title: "Create a Calendar",
    description: "Stay on top of your deadlines, or don’t — it’s up to you.",
    icon: MdOutlineCalendarToday,
    background: "bg-success-default",
    onClick: () => {},
  },
  {
    title: "Create a Gallery",
    description: "Great for mood boards and inspiration.",
    icon: MdOutlineCollections,
    background: "bg-neutral-inverse-weaker",
    onClick: () => {},
  },
  {
    title: "Create a Board",
    description: "Track tasks in different stages of your project.",
    icon: MdViewColumn,
    background: "bg-attention-default",
    onClick: () => {},
  },
  {
    title: "Create a Spreadsheet",
    description: "Lots of numbers and things — good for nerds.",
    icon: MdOutlineTableRows,
    background: "bg-danger-default",
    onClick: () => {},
  },
  {
    title: "Create a Timeline",
    description: "Get a birds-eye-view of your procrastination.",
    icon: MdOutlineSchedule,
    background: "bg-neutral-inverse-weaker",
    onClick: () => {},
  },
];
