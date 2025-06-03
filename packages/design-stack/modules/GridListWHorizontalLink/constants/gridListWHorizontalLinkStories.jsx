import React from "react";
import { MdCall, MdEmail } from "react-icons/md";

import { Button, Tag } from "../../../index";

export const gridFooterExample = (
  <div className="flex border-t border-neutral-default ">
    <Button
      fullWidth
      colors="white"
      variant="minimal"
      icon={
        <MdEmail aria-hidden="true" className="text-xl icon-neutral-weaker" />
      }
      size="extra-large"
      wrapperClassName="py-4 rounded-none rounded-bl-lg text-neutral-weak"
    >
      Email
    </Button>
    <div className="border-l border-neutral-default " />
    <Button
      fullWidth
      colors="white"
      variant="minimal"
      icon={
        <MdCall aria-hidden="true" className="text-xl icon-neutral-weaker" />
      }
      size="extra-large"
      wrapperClassName="py-4 rounded-none rounded-br-lg text-neutral-weak"
    >
      Call
    </Button>
  </div>
);

export const gridTagExample = (
  <Tag
    text="Admin"
    wrapperClassName="bg-success-weaker font-medium text-success-strong rounded-lg"
  />
);

export const GRID_DATA = [
  {
    title: "lorem",
    imgSrc:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    subTitleNode: (
      <p className="truncate text-left text-sm text-neutral-weaker">
        test desc
      </p>
    ),
    ariaLabel: "test aria label",
  },
  {
    title: "ipsum",
    imgSrc:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    subTitleNode: "A random desc",
    ariaLabel: "A random aria-label ",
  },
  {
    title: "lorem",
    imgSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    subTitleNode: "another random desc",
    ariaLabel: "another random aria-label",
  },
  {
    title: "ipsum",
    imgSrc:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    subTitleNode: "A random desc",
  },
];
