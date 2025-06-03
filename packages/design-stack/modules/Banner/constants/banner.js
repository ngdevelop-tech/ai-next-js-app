export const BANNER_PLACEMENT = {
  RELATIVE: 'relative',
  TOP: 'top',
  BOTTOM: 'bottom'
};
export const BANNER_ALIGN = {
  EXTREME: 'extreme',
  CENTERED: 'centered'
};

export const BANNER_MODIFIER = {
  BRAND: 'brand',
  SUCCESS: 'success',
  ATTENTION: 'attention',
  DANGER: 'danger'
};

export const BANNER_COLOR_CLASSES = {
  [BANNER_MODIFIER.BRAND]: {
    CONTAINER_COLOR: 'bg-brand-default',
    ICON_BACKGROUND_COLOR: 'bg-brand-stronger',
    DISMISS_ICON_HOVER: 'hover:bg-brand-default-hover'
  },
  [BANNER_MODIFIER.SUCCESS]: {
    CONTAINER_COLOR: 'bg-success-strong',
    ICON_BACKGROUND_COLOR: 'bg-success-stronger',
    DISMISS_ICON_HOVER: 'hover:bg-success-strong-hover'
  },
  [BANNER_MODIFIER.ATTENTION]: {
    CONTAINER_COLOR: 'bg-attention-weak',
    TEXT_COLOR: 'text-attention-inverse-default',
    ICON_BACKGROUND_COLOR: 'bg-attention-stronger',
    DISMISS_ICON_COLOR: 'icon-attention-inverse-default',
    DISMISS_ICON_HOVER: 'hover:bg-attention-weak-hover'
  },
  [BANNER_MODIFIER.DANGER]: {
    CONTAINER_COLOR: 'bg-danger-default',
    ICON_BACKGROUND_COLOR: 'bg-danger-stronger',
    DISMISS_ICON_HOVER: 'hover:bg-danger-default-hover'
  }
};

export const BANNER_PLACEMENT_CLASSES = {
  [BANNER_PLACEMENT.RELATIVE]: 'relative w-full',
  [BANNER_PLACEMENT.BOTTOM]: 'fixed bottom-0 inset-x-0 z-200',
  [BANNER_PLACEMENT.TOP]: 'fixed top-0 inset-x-0 z-200'
};
