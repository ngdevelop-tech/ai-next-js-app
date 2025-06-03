import React from "react";
import { MdOutlineAttachFile } from "react-icons/md";

import { Button } from "../../../index";

export const DESCRIPTION_LIST_DATA = [
  {
    id: 1,
    label: "Full name",
    value: "Margot Foster",
  },
  {
    id: 2,
    label: "Application for",
    value: "Backend Developer",
  },
  {
    id: 3,
    label: "Email address",
    value: "margotfoster@example.com",
  },
  {
    id: 4,
    label: "Salary expectation",
    value: "$120,000",
  },
  {
    id: 5,
    label: "About",
    value: `Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
              incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
              consequat sint. Sit id mollit nulla mollit nostrud in ea officia
              proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
              deserunt qui eu.`,
  },
  {
    id: 6,
    label: "Attachments",
    value: (
      <ul className="divide-y divide-neutral-default rounded-md border border-neutral-default">
        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
          <div className="flex w-0 flex-1 items-center">
            <MdOutlineAttachFile
              className="h-5 w-5 shrink-0 icon-neutral-weaker"
              aria-hidden="true"
            />
            <span className="ml-2 w-0 flex-1 truncate">
              resume_back_end_developer.pdf
            </span>
          </div>
          <div className="ml-4 shrink-0">
            <Button variant="minimal">Download</Button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
          <div className="flex w-0 flex-1 items-center">
            <MdOutlineAttachFile
              className="h-5 w-5 shrink-0 icon-neutral-weaker"
              aria-hidden="true"
            />
            <span className="ml-2 w-0 flex-1 truncate">
              coverletter_back_end_developer.pdf
            </span>
          </div>
          <div className="ml-4 shrink-0">
            <Button variant="minimal">Download</Button>
          </div>
        </li>
      </ul>
    ),
  },
];

export const DESCRIPTION_LIST_DIGITS_DATA = [
  {
    id: 1,
    label: "John Doe",
    value: "1111111",
  },
  {
    id: 2,
    label: "Alex Jones",
    value: "7777777",
  },
  {
    id: 3,
    label: "Mary Jane",
    value: "6666666",
  },
  {
    id: 4,
    label: "Peter Parker",
    value: "8888888",
  },
  {
    id: 5,
    label: "Evan Peters",
    value: `0000000`,
  },
];
