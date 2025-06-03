export const LOADER_LABEL_PLACEMENT = {
  RIGHT: 'right',
  BOTTOM: 'bottom'
};

export const LOADER_SIZE_NAME = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

export const AI_LOADER_SIZES = ['medium', 'large'];

export const LOADER_SIZES = {
  [LOADER_SIZE_NAME.SMALL]: { loaderSize: 16, strokeWidth: 3 },
  [LOADER_SIZE_NAME.MEDIUM]: {
    loaderSize: 20,
    strokeWidth: 3,
    aiLoaderSize: 20
  },
  [LOADER_SIZE_NAME.LARGE]: { loaderSize: 32, strokeWidth: 4, aiLoaderSize: 36 }
};

export const LOADER_VARIANTS = {
  LOADER: 'loader',
  PERCENTAGE_LOADER: 'percentageLoader',
  AILOADER: 'aiLoader'
};
export const ARIA_LIVE_OPTIONS = {
  POLITE: 'polite',
  ASSERTIVE: 'assertive',
  OFF: 'off'
};
