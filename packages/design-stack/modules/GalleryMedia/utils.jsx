import React from 'react';

import { MEDIA_CARD_STATUS } from '../Gallery/constants/gallery';
import TruncateText from '../TruncateText';

import { DEFAULT_ERROR_MESSAGE } from './constants/galleryMedia';

export const renderFileWithExtension = (title, titleHighlightClassName) => {
  const extension = title.split('.').slice(-1);
  const effectiveTitle = title.split('.').slice(0, -1).join('.');
  const TitleTag = titleHighlightClassName.length === 0 ? 'div' : 'mark';

  return effectiveTitle.length < 18 ? (
    <TitleTag
      className={titleHighlightClassName}
    >{`${effectiveTitle}.${extension}`}</TitleTag>
  ) : (
    <TruncateText
      isFullWidthTooltip
      wrapperClassName="text-neutral-default text-sm font-normal leading-none"
      tooltipContent={
        <p className="mb-0 px-4 text-neutral-inverse-weakest">{`${effectiveTitle}.${extension}`}</p>
      }
    >
      <TitleTag className={titleHighlightClassName}>{`${effectiveTitle.slice(
        0,
        18
      )}...${extension}`}</TitleTag>
    </TruncateText>
  );
};

export const renderFileWithoutExtension = (title, titleHighlightClassName) => {
  const effectiveTitle = title.split('.').slice(0, -1).join('.');
  const TitleTag = titleHighlightClassName.length === 0 ? 'div' : 'mark';

  return effectiveTitle.length < 20 ? (
    <TitleTag className={titleHighlightClassName}>{effectiveTitle}</TitleTag>
  ) : (
    <TruncateText
      isFullWidthTooltip
      wrapperClassName="text-neutral-default text-sm font-normal leading-none"
      tooltipContent={
        <p className="mb-0 px-4 text-neutral-inverse-weakest">
          {effectiveTitle}
        </p>
      }
    >
      <TitleTag className={titleHighlightClassName}>{`${effectiveTitle.slice(
        0,
        20
      )}...`}</TitleTag>
    </TruncateText>
  );
};

export const renderSubTitle = (mediaItem) => {
  let subTitleString;
  if (mediaItem.status === MEDIA_CARD_STATUS.ERROR) {
    if (
      typeof mediaItem?.errorMessage === 'undefined' ||
      mediaItem?.errorMessage.length === 0
    ) {
      subTitleString = DEFAULT_ERROR_MESSAGE;
    } else {
      subTitleString = mediaItem.errorMessage;
    }
  } else {
    subTitleString = mediaItem.subTitle;
  }

  return subTitleString;
};
