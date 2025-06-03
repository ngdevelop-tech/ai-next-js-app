export const BORDER_TYPES = {
  TOP_ROUNDED: 'topRounded',
  BOTTOM_ROUNDED: 'bottomRounded',
  NONE: 'none',
  '': ''
};

export const RADIO_TABLE_BORDER_STYLE = {
  [BORDER_TYPES.TOP_ROUNDED]: 'rounded-tl-md rounded-tr-md',
  [BORDER_TYPES.BOTTOM_ROUNDED]: 'rounded-bl-md rounded-br-md',
  [BORDER_TYPES.NONE]: '',
  '': ''
};

export const DIRECTIONS = { INLINE: 'inline', BLOCK: 'block' };

export const TYPES = {
  DEFAULT: 'default',
  SMALL_CARD: 'smallCard',
  STACKED_CARD: 'stackedCard',
  TABLE: 'table'
};

export const RADIO_WRAPPER_STYLES = {
  [TYPES.DEFAULT]: {
    [DIRECTIONS.INLINE]:
      'space-y-4 flex sm:items-center flex-col sm:flex-row sm:space-x-10 sm:space-y-0',
    [DIRECTIONS.BLOCK]: 'flex space-y-4 flex-col'
  },

  [TYPES.STACKED_CARD]: {
    [DIRECTIONS.INLINE]: 'grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4',
    [DIRECTIONS.BLOCK]: 'space-y-4'
  },

  [TYPES.SMALL_CARD]: {
    [DIRECTIONS.INLINE]: 'grid grid-cols-3 gap-3 sm:grid-cols-6',
    [DIRECTIONS.BLOCK]: 'grid grid-cols-3 gap-3 sm:grid-cols-6'
  },

  [TYPES.TABLE]: {
    [DIRECTIONS.INLINE]:
      'relative -space-y-px rounded-md bg-input-default hover:bg-input-default-hover',
    [DIRECTIONS.BLOCK]: 'relative -space-y-px rounded-md bg-input-default'
  }
};

export const RADIO_CARD_STYLES = {
  [TYPES.SMALL_CARD]: {
    [DIRECTIONS.INLINE]:
      'border-neutral-strong text-neutral-default rounded-md p-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 hover:bg-neutral-default-hover focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-strong',
    [DIRECTIONS.BLOCK]:
      'border-neutral-default text-neutral-default rounded-md p-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-strong'
  },

  [TYPES.STACKED_CARD]: {
    [DIRECTIONS.INLINE]:
      'w-full border-neutral-strong relative rounded-lg  p-4 shadow-sm  text-left flex p-4',
    [DIRECTIONS.BLOCK]:
      'w-full border-neutral-strong relative rounded-lg  p-4 shadow-sm  text-left block px-6 py-4 sm:flex sm:justify-between'
  }
};
