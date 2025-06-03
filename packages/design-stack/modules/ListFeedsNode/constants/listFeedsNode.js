export const LF_ICON_COLOR = {
  GREY: 'grey',
  BRAND: 'brand',
  SUCCESS: 'success',
  ATTENTION: 'attention',
  DANGER: 'danger',
  WHITE: 'white'
};

export const LF_ICON_VARIANT = {
  DARK: 'dark',
  LIGHT: 'light'
};

export const LF_ICON_SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
};

export const LF_ICON_CONTAINER_SIZE = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg'
};

export const LF_MARGIN_SIZE = {
  CONDENSED: 'condensed',
  DEFAULT: 'default',
  LARGE: 'large'
};

export const LF_MARGIN_CLASSES = {
  [LF_MARGIN_SIZE.CONDENSED]: 'mb-0',
  [LF_MARGIN_SIZE.DEFAULT]: 'mb-2',
  [LF_MARGIN_SIZE.LARGE]: 'mb-4'
};

export const LF_ICON_CONTAINER_CLASSES = {
  [LF_ICON_CONTAINER_SIZE.SM]: 'w-6 max-h-6',
  [LF_ICON_CONTAINER_SIZE.MD]: 'w-8 max-h-8',
  [LF_ICON_CONTAINER_SIZE.LG]: 'w-10 max-h-10'
};

export const LF_ICON_WITH_FEED_NO_CLASSES = {
  [LF_ICON_SIZE.SM]: 'h-6',
  [LF_ICON_SIZE.MD]: 'h-8',
  [LF_ICON_SIZE.LG]: 'h-10'
};

export const LF_ICON_CLASSES = {
  [LF_ICON_SIZE.SM]: 'w-6 h-6 text-base',
  [LF_ICON_SIZE.MD]: 'w-8 h-8 text-base',
  [LF_ICON_SIZE.LG]: 'w-10 h-10 text-xl'
};

export const LF_ICON_COLOR_VARIANT_CLASSES = {
  [LF_ICON_VARIANT.DARK]: {
    [LF_ICON_COLOR.WHITE]:
      'bg-neutral-default icon-neutral-strong border border-neutral-strong',
    [LF_ICON_COLOR.GREY]:
      'bg-neutral-inverse-weaker icon-neutral-inverse-default',
    [LF_ICON_COLOR.BRAND]: 'bg-brand-default icon-neutral-inverse-default',
    [LF_ICON_COLOR.DANGER]: 'bg-danger-default icon-neutral-inverse-default',
    [LF_ICON_COLOR.SUCCESS]: 'bg-success-default icon-neutral-inverse-default',
    [LF_ICON_COLOR.ATTENTION]:
      'bg-attention-weak icon-attention-inverse-default'
  },
  [LF_ICON_VARIANT.LIGHT]: {
    [LF_ICON_COLOR.WHITE]:
      'bg-neutral-default icon-neutral-strong border border-neutral-strong',
    [LF_ICON_COLOR.GREY]: 'bg-neutral-strongest icon-neutral-weak',
    [LF_ICON_COLOR.BRAND]: 'bg-brand-weaker icon-brand-strong',
    [LF_ICON_COLOR.DANGER]: 'bg-danger-weaker icon-danger-strong',
    [LF_ICON_COLOR.SUCCESS]: 'bg-success-weaker icon-success-strong',
    [LF_ICON_COLOR.ATTENTION]: 'bg-attention-weaker icon-attention-stronger'
  }
};

export const ICON_DESCRIPTION_GAP = {
  EXTRA_SMALL: 'extra-small',
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
};

export const ICON_DESCRIPTION_GAP_CLASSES = {
  [ICON_DESCRIPTION_GAP.EXTRA_SMALL]: 'ml-1',
  [ICON_DESCRIPTION_GAP.SMALL]: 'ml-2',
  [ICON_DESCRIPTION_GAP.DEFAULT]: 'ml-3',
  [ICON_DESCRIPTION_GAP.LARGE]: 'ml-4',
  [ICON_DESCRIPTION_GAP.EXTRA_LARGE]: 'ml-5'
};
