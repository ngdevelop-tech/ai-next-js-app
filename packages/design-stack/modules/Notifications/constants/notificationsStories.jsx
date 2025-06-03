import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";

import { Button, notify } from "../../../index";
import { printToConsole } from "../../../utils/common";

export const NOTIFICATIONS_DATA = [
  {
    title: "Successfully saved!",
    description: "Anyone with a link can now view this file.",
    actionButtons: null,
    headerIcon: (
      <MdCheckCircleOutline className="h-6 w-6 icon-success-weaker" />
    ),
    notifyArgs: {
      position: "top-left",
      duration: 40000,
      autoClose: true,
      size: "lg",
    },
  },
  {
    title: "Movement",
    isCondensed: true,
    actionButtons: toastData => (
      <Button
        variant="minimal"
        colors="brand"
        onClick={() => {
          printToConsole("log", toastData);
        }}
      >
        Undo
      </Button>
    ),
    notifyArgs: {
      position: "top-right",
      duration: 4000,
      size: "md",
    },
  },
  {
    title: "Emilia Gates",
    description: "Sent you an invite to connect.",
    headerIcon: (
      <img
        className="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
        alt=""
      />
    ),
    actionButtons: toastData => (
      <>
        <Button>Undo</Button>
        <Button
          variant="primary"
          colors="white"
          onClick={() => {
            notify.remove(toastData.id);
          }}
        >
          Dismiss
        </Button>
      </>
    ),
    notifyArgs: {
      position: "bottom-left",
      duration: 4000,
    },
  },
  {
    title: "Movement",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
    headerIcon: (
      <MdCheckCircleOutline className="h-6 w-6 icon-neutral-weaker" />
    ),
    actionButtons: toastData => (
      <>
        <Button variant="minimal" colors="brand">
          Undo
        </Button>
        <Button
          variant="minimal"
          wrapperClassName="text-neutral-weak"
          onClick={() => {
            notify.remove(toastData.id);
          }}
        >
          Dismiss
        </Button>
      </>
    ),
    notifyArgs: {
      position: "bottom-right",
      duration: 4000,
    },
  },
];
