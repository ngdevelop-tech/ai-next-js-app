export const TAG_SIZE = {
  BASIC: 'basic',
  LARGE: 'large'
};

export const TAG_MODIFIER = {
  BASE: 'base',
  PRIMARY: 'primary',
  SUCCESS: 'success',
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  WHITE: 'white'
};

export const TAG_SIZE_CLASSES = {
  [TAG_SIZE.BASIC]: {
    DISMISS_ICON: 'bottom-0.5',
    BG_TEXT: 'px-2.5 text-xs'
  },
  [TAG_SIZE.LARGE]: {
    DISMISS_ICON: 'bottom-1',
    BG_TEXT: 'px-3 text-sm'
  }
};

const iconNeutralStrong = 'icon-neutral-strong';
const iconNeutralWeaker = 'icon-neutral-weaker';
const iconBrandStrong = 'icon-brand-strong';
const iconBrandWeakest = 'icon-brand-weakest';

export const TAG_MODIFYING_CLASS = {
  [TAG_MODIFIER.BASE]: {
    DOT: {
      DEFAULT: iconNeutralStrong,
      DISABLED: iconNeutralWeaker,
      WITH_BORDER: iconNeutralStrong
    },
    DISMISS_ICON: {
      DEFAULT: iconNeutralStrong,
      WITH_BORDER: iconNeutralStrong,
      HOVER_FOCUS:
        'rounded hover:bg-neutral-stronger-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-strong focus-visible:ring-offset-0',
      DISABLED: iconNeutralWeaker
    },
    BG_TEXT: {
      DISABLED: 'bg-neutral-stronger-disabled text-neutral-weakest',
      DEFAULT: ' bg-neutral-stronger text-neutral-default',
      HOVER: 'hover:bg-neutral-stronger-hover cursor-pointer'
    }
  },
  [TAG_MODIFIER.PRIMARY]: {
    DOT: {
      DEFAULT: iconBrandStrong,
      WITH_BORDER: 'icon-brand-weak',
      DISABLED: iconBrandWeakest
    },
    DISMISS_ICON: {
      DEFAULT: iconBrandStrong,
      WITH_BORDER: iconNeutralStrong,
      DISABLED: iconBrandWeakest,
      HOVER_FOCUS:
        'rounded hover:bg-brand-weaker-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-stronger focus-visible:ring-offset-0'
    },
    BG_TEXT: {
      DISABLED: 'bg-brand-weaker-disabled text-brand-weak',
      DEFAULT: ' bg-brand-weaker text-brand-stronger',
      HOVER: 'hover:bg-brand-weaker-hover cursor-pointer'
    }
  },
  [TAG_MODIFIER.SUCCESS]: {
    DOT: {
      DEFAULT: 'icon-success-strong',
      WITH_BORDER: 'icon-success-weak',
      DISABLED: 'icon-success-weakest'
    },
    DISMISS_ICON: {
      DEFAULT: 'icon-success-strong',
      WITH_BORDER: iconNeutralStrong,
      DISABLED: 'icon-success-weakest',
      HOVER_FOCUS:
        'rounded hover:bg-success-weaker-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-success-stronger focus-visible:ring-offset-0'
    },
    BG_TEXT: {
      DISABLED: 'bg-success-weaker-disabled text-success-weak',
      DEFAULT: ' bg-success-weaker text-success-strong',
      HOVER: 'hover:bg-success-weaker-hover cursor-pointer'
    }
  },
  [TAG_MODIFIER.ERROR]: {
    DOT: {
      DEFAULT: 'icon-danger-strong',
      WITH_BORDER: 'icon-danger-weak',
      DISABLED: 'icon-danger-weakest'
    },
    DISMISS_ICON: {
      DEFAULT: 'icon-danger-strong',
      WITH_BORDER: iconNeutralStrong,
      DISABLED: 'icon-danger-weakest',
      HOVER_FOCUS:
        'rounded hover:bg-danger-weaker-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-danger-stronger focus-visible:ring-offset-0'
    },
    BG_TEXT: {
      DISABLED: 'bg-danger-weaker-disabled text-danger-weak',
      DEFAULT: ' bg-danger-weaker text-danger-stronger',
      HOVER: 'hover:bg-danger-weaker-hover cursor-pointer'
    }
  },
  [TAG_MODIFIER.WARN]: {
    DOT: {
      DEFAULT: 'icon-attention-strong',
      WITH_BORDER: 'icon-attention-weak',
      DISABLED: 'icon-attention-weaker'
    },
    DISMISS_ICON: {
      DEFAULT: 'icon-attention-strong',
      WITH_BORDER: iconNeutralStrong,
      DISABLED: 'icon-attention-weaker',
      HOVER_FOCUS:
        'rounded hover:bg-attention-weaker-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-attention-stronger focus-visible:ring-offset-0'
    },
    BG_TEXT: {
      DISABLED: 'bg-attention-weaker-disabled text-attention-weaker',
      DEFAULT: ' bg-attention-weaker text-attention-strong',
      HOVER: 'hover:bg-attention-weaker-hover cursor-pointer'
    }
  },
  [TAG_MODIFIER.INFO]: {
    DOT: {
      DEFAULT: iconBrandStrong,
      WITH_BORDER: 'icon-brand-weak',
      DISABLED: iconBrandWeakest
    },
    DISMISS_ICON: {
      DEFAULT: iconBrandStrong,
      WITH_BORDER: iconNeutralStrong,
      DISABLED: iconBrandWeakest,
      HOVER_FOCUS:
        'rounded hover:bg-brand-weaker-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-stronger focus-visible:ring-offset-0'
    },
    BG_TEXT: {
      DISABLED: 'bg-brand-weaker-disabled text-brand-weak',
      DEFAULT: ' bg-brand-weaker text-brand-stronger',
      HOVER: 'hover:bg-brand-weaker-hover cursor-pointer'
    }
  },
  [TAG_MODIFIER.WHITE]: {
    DOT: {
      DEFAULT: 'icon-neutral-weak',
      WITH_BORDER: 'icon-neutral-weak',
      DISABLED: iconNeutralWeaker
    },
    DISMISS_ICON: {
      DEFAULT: iconNeutralStrong,
      WITH_BORDER: iconNeutralStrong,
      DISABLED: iconNeutralWeaker,
      HOVER_FOCUS:
        'rounded hover:bg-input-default-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-strong focus-visible:ring-offset-0'
    },
    BG_TEXT: {
      DISABLED: 'bg-input-default-disabled text-neutral-weakest',
      DEFAULT: ' bg-input-default text-neutral-default',
      HOVER: 'hover:bg-input-default-hover cursor-pointer'
    }
  }
};
