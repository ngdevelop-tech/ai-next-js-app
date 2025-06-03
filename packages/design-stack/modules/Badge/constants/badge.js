export const BADGE_SIZE = {
  BASIC: 'basic',
  LARGE: 'large'
};

export const BADGE_MODIFIER = {
  BASE: 'base',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  WHITE: 'white',
  PINK: 'pink'
};

export const BADGE_COLOUR_CLASSES = {
  [BADGE_MODIFIER.BASE]: {
    ICON: 'icon-neutral-strong',
    BG_TEXT: 'bg-neutral-stronger text-neutral-default'
  },
  [BADGE_MODIFIER.PRIMARY]: {
    ICON: 'icon-brand-strong',
    BG_TEXT: 'bg-brand-weaker text-brand-stronger'
  },
  [BADGE_MODIFIER.SUCCESS]: {
    ICON: 'icon-success-strong',
    BG_TEXT: 'bg-success-weaker text-success-strong'
  },
  [BADGE_MODIFIER.ERROR]: {
    ICON: 'icon-danger-strong',
    BG_TEXT: 'bg-danger-weaker text-danger-stronger'
  },
  [BADGE_MODIFIER.WARN]: {
    ICON: 'icon-attention-strong',
    BG_TEXT: 'bg-attention-weaker text-attention-strong'
  },
  [BADGE_MODIFIER.INFO]: {
    ICON: 'text-brand-strong',
    BG_TEXT: 'bg-brand-weaker text-brand-stronger'
  },
  [BADGE_MODIFIER.WHITE]: {
    ICON: 'icon-neutral-weak',
    BG_TEXT: 'bg-input-default text-neutral-default'
  },
  [BADGE_MODIFIER.PINK]: {
    ICON: 'text-pink-700 dark:text-pink-300',
    BG_TEXT: 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300'
  }
};

export const BADGE_SIZE_CLASSES = {
  [BADGE_SIZE.BASIC]: {
    WITH_DOT: 'pl-2',
    WITH_ICON: '',
    DEFAULT: 'px-2.5 text-xs'
  },
  [BADGE_SIZE.LARGE]: {
    WITH_DOT: 'pr-3 pl-2',
    WITH_ICON: 'px-3',
    DEFAULT: 'px-3 text-sm'
  }
};
