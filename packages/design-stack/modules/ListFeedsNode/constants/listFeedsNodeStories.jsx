import { LF_ICON_SIZE } from './listFeedsNode';

export const OPTION_RADIO = 'inline-radio';
export const NATHAN_TEXT = 'Nathan Ellis';

export const SAMPLE_FEED_PRIMARY = [
  {
    feedNumber: 1,
    id: 1
  },
  {
    feedNumber: 2,
    id: 2
  },
  {
    feedNumber: 3,
    id: 3
  }
];

const TEMPLATE = {
  feedNumber: 1,
  id: 1
};

export const DRAGGABLE_SAMPLE_FEED_PRIMARY = Array.from(
  { length: 20 },
  (_, index) => ({
    ...TEMPLATE,
    feedNumber: index + 1,
    id: index + 1
  })
);

export const SAMPLE_FEED_VARIOUS_SIZES = [
  {
    feedNumber: 1,
    iconSize: LF_ICON_SIZE.LG
  },
  {
    feedNumber: 2,
    iconSize: LF_ICON_SIZE.MD
  },
  {
    feedNumber: 3,
    iconSize: LF_ICON_SIZE.SM
  }
];
