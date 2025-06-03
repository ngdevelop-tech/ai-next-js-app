export const TAB_SHAPE = {
  SIMPLE: 'simple',
  PILL: 'pill'
};

export const SMALL_TABS_COLOR = {
  DANGER: 'danger',
  NEUTRAL: 'neutral',
  ATTENTION: 'attention'
};

export const SMALL_TABS_CLASSES = {
  [SMALL_TABS_COLOR.NEUTRAL]:
    'hover:text-brand-default hover:border-brand-stronger border-brand-stronger ',
  [SMALL_TABS_COLOR.DANGER]:
    'hover:text-danger-strongest hover:border-danger-stronger border-danger-stronger ',
  [SMALL_TABS_COLOR.ATTENTION]:
    'hover:text-attention-stronger hover:border-attention-stronger border-attention-stronger '
};
