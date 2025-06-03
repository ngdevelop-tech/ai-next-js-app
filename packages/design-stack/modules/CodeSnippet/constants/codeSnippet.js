export const HIGHLIGHT_TYPE = {
  NEUTRAL: 'neutral',
  DANGER: 'danger',
  ATTENTION: 'attention'
};

export const COLOR_SHADES = {
  [HIGHLIGHT_TYPE.DANGER]: {
    TEXT_COLOR: 'var(--text-danger-strongest)',
    DARK_COLOR: 'var(--border-danger-weak)',
    LIGHT_COLOR: 'var(--bg-danger-weaker)'
  },
  [HIGHLIGHT_TYPE.ATTENTION]: {
    TEXT_COLOR: 'var(--text-attention-stronger)',
    DARK_COLOR: 'var(--border-attention-stronger)',
    LIGHT_COLOR: 'var(--bg-attention-weaker)'
  },
  [HIGHLIGHT_TYPE.NEUTRAL]: {
    TEXT_COLOR: 'var(--text-neutral-default)',
    DARK_COLOR: 'var(--border-neutral-strong)',
    LIGHT_COLOR: 'var(--bg-neutral-strongest)'
  }
};

export const CODE_VIEW = {
  NEUTRAL: 'neutral',
  DANGER: 'danger',
  ATTENTION: 'attention'
};

export const VIEW_SHADES = {
  [CODE_VIEW.DANGER]: {
    TEXT_COLOR: 'var(--text-danger-stron)',
    BACKGROUND_BORDER_COLOR: 'var(--border-danger-weak)'
  },
  [CODE_VIEW.ATTENTION]: {
    TEXT_COLOR: 'var(--text-attention-default)',
    BACKGROUND_BORDER_COLOR: 'var(--border-attention-default)'
  }
};

export const CODE_VIEW_COLOR_CLASSES = {
  [CODE_VIEW.NEUTRAL]: {},
  [CODE_VIEW.DANGER]: {
    BORDER_COLOR: 'border-danger-weak',
    BACKGROUND_COLOR: 'bg-neutral-default',
    TEXT_COLOR: 'text-danger-strong'
  },
  [CODE_VIEW.ATTENTION]: {
    BORDER_COLOR: 'border-attention-default',
    BACKGROUND_COLOR: 'bg-neutral-default',
    TEXT_COLOR: 'text-attention-default'
  }
};
