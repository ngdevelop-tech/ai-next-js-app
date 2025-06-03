import React from "react";
import {
  MdContentCopy,
  MdKeyboardBackspace,
  MdOutlineDelete,
  MdOutlineFileDownload,
} from "react-icons/md";
import PropTypes from "prop-types";

import Button from "../../Button";
import CustomSVGIcon from "../assets/CustomSVGIcon";
import file from "../assets/test.pdf";

import { MEDIA_CARD_STATUS } from "./gallery";

export const IMAGE =
  "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

export const DUMMY_DATA = [
  {
    title: "lorem some file.jsx",
    titleHighlightClassName: "bg-danger-weaker",
    subTitle: "sub-lorem",
    icon: (
      <button
        onClick={() => {}}
        type="button"
        aria-label="delete icon"
        className="hover:bg-neutral-default-hover"
      >
        <MdOutlineDelete
          className="h-5 w-5 cursor-pointer icon-neutral-strong "
          aria-hidden="true"
        />
      </button>
    ),
    status: MEDIA_CARD_STATUS.IMAGE,
    selected: true,
    id: "1",
    file: IMAGE,
  },

  {
    title: "ipsum lorem some file.jsx",
    subTitle: "sub-ipsum",
    icon: (
      <button
        onClick={() => {}}
        type="button"
        aria-label="delete icon"
        className="hover:bg-neutral-default-hover"
      >
        <MdOutlineDelete
          className="h-5 w-5 cursor-pointer icon-neutral-strong focus:outline-0"
          aria-hidden="true"
        />
      </button>
    ),
    status: MEDIA_CARD_STATUS.ERROR,
    selected: true,
    id: "2",
  },
  {
    title: "dolor sub-dolor.ts",
    subTitle: "Meta Data",
    icon: (
      <button
        onClick={() => {}}
        type="button"
        aria-label="delete icon"
        className="hover:bg-neutral-default-hover"
      >
        <MdOutlineDelete
          className="h-5 w-5 cursor-pointer icon-neutral-strong"
          aria-hidden="true"
        />
      </button>
    ),
    status: MEDIA_CARD_STATUS.LOADING,
    selected: false,
    id: "3",
    loaderVariant: "loader",
  },

  {
    title: "lorem ipsum.ts",
    subTitle: "Meta Data",
    icon: (
      <button
        onClick={() => {}}
        type="button"
        aria-label="delete icon"
        className="hover:bg-neutral-default-hover"
      >
        <MdOutlineDelete
          className="h-5 w-5 cursor-pointer icon-neutral-strong"
          aria-hidden="true"
        />
      </button>
    ),
    status: MEDIA_CARD_STATUS.LOADING,
    selected: false,
    id: "4",
    loaderVariant: "percentageLoader",
    loaderPercentage: 77,
    file: IMAGE,
  },

  {
    title: "lorem some other file.jsx",
    subTitle: "sub-lorem other",
    icon: (
      <button
        onClick={() => {}}
        type="button"
        aria-label="delete icon"
        className="hover:bg-neutral-default-hover"
      >
        <MdOutlineDelete
          className="h-5 w-5 cursor-pointer icon-neutral-strong"
          aria-hidden="true"
        />
      </button>
    ),
    status: MEDIA_CARD_STATUS.VIDEO,
    selected: true,
    id: "5",
    file: "https://images.pexels.com/photos/14731821/pexels-photo-14731821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },

  {
    title: "ipsum.lorem.some.file.pdf",
    subTitle: "sub-ipsum",
    icon: (
      <button
        onClick={() => {}}
        type="button"
        aria-label="delete icon"
        className="hover:bg-neutral-default-hover"
      >
        <MdOutlineDelete
          className="h-5 w-5 cursor-pointer icon-neutral-strong"
          aria-hidden="true"
        />
      </button>
    ),
    status: MEDIA_CARD_STATUS.PDF,
    selected: false,
    file,
    id: "6",
  },

  {
    title: "ipsum lorem some really big file.jsx",
    subTitle: "sub-ipsum",
    icon: (
      <button
        onClick={() => {}}
        type="button"
        aria-label="delete icon"
        className="hover:bg-neutral-default-hover"
      >
        <MdOutlineDelete
          className="h-5 w-5 cursor-pointer icon-neutral-strong"
          aria-hidden="true"
        />
      </button>
    ),
    status: MEDIA_CARD_STATUS.DOC,
    selected: false,
    id: "7",
  },
  {
    title: "ipsum lorem custom error some file.jsx",
    subTitle: "sub-ipsum",
    icon: (
      <button
        onClick={() => {}}
        type="button"
        aria-label="delete icon"
        className="hover:bg-neutral-default-hover"
      >
        <MdOutlineDelete
          className="h-5 w-5 cursor-pointer icon-neutral-strong focus:outline-0"
          aria-hidden="true"
        />
      </button>
    ),
    status: MEDIA_CARD_STATUS.ERROR,
    selected: false,
    id: "8",
    errorMessage: "Custom error message",
  },
  {
    id: "9",
    file: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <CustomSVGIcon className="h-full max-h-full w-full max-w-full object-contain" />
      </div>
    ),
    status: MEDIA_CARD_STATUS.IMAGE,
    title: "Sample SVG",
    subTitle: "This is a sample SVG rendering",
    selected: false,
    errorMessage: "Custom error message",
  },
];

export const LOADER_DUMMY_DATA = {
  title: "percent loader.jsx",
  subTitle: "Meta Data",
  icon: (
    <button
      onClick={() => {}}
      type="button"
      aria-label="delete icon"
      className="hover:bg-neutral-default-hover"
    >
      <MdOutlineDelete
        className="h-5 w-5 cursor-pointer icon-neutral-strong"
        aria-hidden="true"
      />
    </button>
  ),
  status: MEDIA_CARD_STATUS.LOADING,
  selected: false,
  id: "1",
  loaderVariant: "percentageLoader",
  file: IMAGE,
  loaderPercentage: 2,
};

export const TopActionTemplate = ({ setPreviewItem, previewItemTitle }) => (
  <div className="absolute left-0 top-0 z-10 flex w-full justify-between bg-neutral-inverse-default p-5 text-neutral-inverse-default">
    <div className="flex items-center gap-3">
      <Button
        variant="minimal"
        wrapperClassName="p-0 focus-visible:ring-offset-0 group focus:border-none bg-input-default bg-transparent"
        colors="brand"
        icon={
          <MdKeyboardBackspace
            className="mx-auto icon-neutral-inverse-weaker group-hover:icon-neutral-inverse-default"
            aria-label=""
          />
        }
        isIconOnlyButton
        onClick={() => {
          setPreviewItem(null);
        }}
        aria-label="exit-preview-btn"
      />
      <p className="text-sm font-medium leading-5 text-neutral-inverse-default">
        {previewItemTitle}
      </p>
    </div>
    <div className="flex gap-4">
      <MdContentCopy
        className="h-5 w-5 cursor-pointer icon-neutral-inverse-weaker hover:icon-neutral-inverse-default"
        aria-hidden="true"
      />
      <MdOutlineFileDownload
        className="h-5 w-5 cursor-pointer icon-neutral-inverse-weaker hover:icon-neutral-inverse-default"
        aria-hidden="true"
      />
      <MdOutlineDelete
        className="h-5 w-5 cursor-pointer icon-neutral-inverse-weaker hover:icon-neutral-inverse-default"
        aria-hidden="true"
      />
    </div>
  </div>
);
TopActionTemplate.propTypes = {
  previewItemTitle: PropTypes.string.isRequired,
  setPreviewItem: PropTypes.func.isRequired,
};

export const galleryMediaActionbarSecondaryActions = (
  <div className="flex gap-4">
    <MdContentCopy className="h-5 w-5 cursor-pointer" tabIndex={0} />
    <MdOutlineFileDownload className="h-5 w-5 cursor-pointer" tabIndex={0} />
    <MdOutlineDelete className="h-5 w-5 cursor-pointer" tabIndex={0} />
  </div>
);
