import React from "react";
import { MdCheck } from "react-icons/md";

import { Button } from "../../../index";

export const cancelButton = (
  <Button size="default" colors="white">
    Cancel
  </Button>
);
export const deactivateButton = (
  <Button size="default" colors="danger">
    Deactivate
  </Button>
);

export const addNewButton = (
  <Button wrapperClassName="mt-3 mb-3" colors="white" fullWidth>
    Add New
  </Button>
);
export const submitButton = (
  <Button size="default" colors="brand">
    Submit
  </Button>
);

export const centeredModalTemplate = (
  <div>
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-weaker">
      <MdCheck className="h-6 w-6 icon-success-default" aria-hidden="true" />
    </div>
    <div className="mt-3 text-center sm:mt-5">
      <h3
        as="h3"
        className="text-lg font-medium leading-6 text-neutral-default"
      >
        Payment successful
      </h3>
      <div className="mt-2">
        <p className="text-sm text-neutral-weaker">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </p>
      </div>
    </div>
  </div>
);

export const CONTROLLED_MODAL_TEXT =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius id excepturi quisquam at, repudiandae officiis beatae consequuntur doloribus? Accusamus libero aliquam fugiat dolorem deserunt recusandae quaerat explicabo non ipsa culpa.";

export const LONG_TEXT =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius id excepturi quisquam at, repudiandae officiis beatae consequuntur doloribus? Accusamus libero aliquam fugiat dolorem deserunt recusandae quaerat explicabo non ipsa culpa. repudiandae officiis beatae consequuntur doloribus? Accusamus libero aliquam fugiat dolorem deserunt recusandae quaerat explicabo non ipsa culpa. epudiandae officiis beatae consequuntur doloribus? Accusamus libero aliquam fugiat dolorem deserunt recusandae quaerat explicabo non ipsa culpa. fugiat dolorem deserunt recusandae quaerat explicabo non ipsa culpa.fugiat dolorem deserunt recusandae quaerat explicabo non ipsa culpa.";

export const CONTAINER_SCROLL_MODAL_TEXT =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, eveniet? Iusto necessitatibus repellendus minima corrupti, facilis quibusdam blanditiis enim esse ab nihil eveniet, vitae ea minus perspiciatis modi nemo cum! Similique autem saepe blanditiis Libero ad voluptas delectus!";
