export const TP_ACTION_ITEM_POSITION = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
};
export const TP_PLACEMENT_SIDE = {
  LEFT: 'left',
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom'
};
export const TP_PLACEMENT_ALIGN = {
  CENTER: 'center',
  START: 'start',
  END: 'end'
};
export const TP_TOOLTIP_THEME = {
  LIGHT: 'light',
  DARK: 'dark'
};
export const TP_SIZE = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  '2XL': '2xl',
  '3XL': '3xl',
  '4xl': '4xl',
  '5XL': '5xl',
  '6XL': '6xl',
  FULL: 'full'
};
export const TP_STICKY_OPTIONS = {
  PARTIAL: 'partial',
  ALWAYS: 'always'
};

export const TP_THEME_CLASSES = {
  [TP_TOOLTIP_THEME.DARK]: 'bg-neutral-inverse-weak',
  [TP_TOOLTIP_THEME.LIGHT]: 'bg-raised-default'
};

export const TP_CONTENT_CLASSES = {
  [TP_SIZE.XS]: 'max-w-xs',
  [TP_SIZE.SM]: 'sm:max-w-sm',
  [TP_SIZE.MD]: 'sm:max-w-md',
  [TP_SIZE.LG]: 'sm:max-w-lg',
  [TP_SIZE.XL]: 'sm:max-w-xl',
  [TP_SIZE['2XL']]: 'sm:max-w-2xl',
  [TP_SIZE['3XL']]: 'sm:max-w-3xl',
  [TP_SIZE['4xl']]: 'sm:max-w-4xl',
  [TP_SIZE['5XL']]: 'sm:max-w-5xl',
  [TP_SIZE['6XL']]: 'sm:max-w-6xl',
  [TP_SIZE.FULL]: 'sm:max-w-full'
};

export const FALLBACK_PLACEMENTS = {
  [TP_PLACEMENT_SIDE.BOTTOM]: ['bottom', 'top', 'right', 'left'],
  [TP_PLACEMENT_SIDE.TOP]: ['top', 'bottom', 'right', 'left'],
  [TP_PLACEMENT_SIDE.LEFT]: ['left', 'right', 'bottom', 'top'],
  [TP_PLACEMENT_SIDE.RIGHT]: ['right', 'left', 'bottom', 'top']
};
