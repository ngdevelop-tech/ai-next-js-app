import React from "react";
import { MdCheck } from "react-icons/md";

import { SLIDEOVER_SIZES } from "./slideover";

export const SLIDEOVER_SIZES_DESC = Object.values(SLIDEOVER_SIZES).map(
  size => ` <b>${size}</b>`
);

export const SlideoverBodyDummyData = () => (
  <div className="m-auto w-80">
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-weaker">
      <MdCheck className="h-6 w-6 icon-success-default" aria-hidden="true" />
    </div>
    <div className="mt-3 text-center sm:mt-5">
      <div className="text-lg font-medium leading-6 text-neutral-default">
        Payment successful
      </div>
      <div className="mt-2" />
    </div>
  </div>
);

export const DummyPlaceholder = () => (
  <p className="h-full border border-dashed border-neutral-strong" />
);
