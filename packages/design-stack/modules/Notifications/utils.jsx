import React from "react";
import toast from "react-hot-toast";
import { twClassNames } from "@/packages/utils/tailwindUtils";
import { Transition } from "@headlessui/react";

import { NotificationsContextData } from "./context";

export const notify = (Layout, options) => {
  toast.custom(
    toastData => (
      <NotificationsContextData.Provider
        value={{
          toast: toastData,
        }}
      >
        <Transition
          appear
          className={twClassNames("w-full max-w-sm transition-all", {
            "max-w-md": options.size === "md",
            "max-w-lg": options.size === "lg",
          })}
          show={toastData.visible}
          enter="200ms ease-out"
          enterFrom="scale-90 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="150ms ease-in forwards"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-90 opacity-0"
        >
          {Layout}
        </Transition>
      </NotificationsContextData.Provider>
    ),
    {
      ...options,
      duration: !options.autoClose ? 2147483647 : options.duration,
      style: {
        display: "block",
      },
    }
  );
};

notify.remove = toast.remove;
notify.dismiss = toast.dismiss;
