export const INPUT_BADGE_TYPE = {
  BASE: 'base',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  WHITE: 'white',
  PINK: 'pink'
};

export const INPUT_BADGE_COLOUR_CLASSES = {
  [INPUT_BADGE_TYPE.BASE]: {
    BG_TEXT: 'bg-neutral-stronger text-neutral-default'
  },
  [INPUT_BADGE_TYPE.PRIMARY]: {
    BG_TEXT: 'bg-brand-weaker text-brand-stronger'
  },
  [INPUT_BADGE_TYPE.SUCCESS]: {
    BG_TEXT: 'bg-success-weaker text-success-strong'
  },
  [INPUT_BADGE_TYPE.ERROR]: {
    BG_TEXT: 'bg-danger-weaker text-danger-stronger'
  },
  [INPUT_BADGE_TYPE.WARN]: {
    BG_TEXT: 'bg-attention-weaker text-attention-strong'
  },
  [INPUT_BADGE_TYPE.INFO]: {
    BG_TEXT: 'bg-brand-weaker text-brand-stronger'
  },
  [INPUT_BADGE_TYPE.WHITE]: {
    BG_TEXT: 'bg-input-default text-neutral-default'
  },
  [INPUT_BADGE_TYPE.PINK]: {
    BG_TEXT: 'bg-pink-100 text-pink-800 dark:bg-pink-950 dark:text-pink-300'
  }
};

export const MENTION_INPUT_STYLES = {
  // mandatory classes not overridden by classname
  '&singleLine': {
    highlighter: {
      fontSize: '0.875rem',
      substring: {
        visibility: 'visible'
      }
    },
    input: {
      fontSize: '0.875rem'
    }
  },
  suggestions: {
    backgroundColor: 'transparent',
    margin: 0,
    zIndex: 500,

    list: {
      marginTop: '1.5rem' // mt-6
    },
    item: {
      '&focused': {
        backgroundColor: 'var(--bg-raised-default-hover)' // hover:bg-raised-default-hover
      }
    }
  }
};
