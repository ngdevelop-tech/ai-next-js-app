export const BUTTON_SIZES = {
  EXTRA_SMALL: 'extra-small',
  SMALL: 'small',
  DEFAULT: 'default',
  LARGE: 'large',
  EXTRA_LARGE: 'extra-large'
};

export const BUTTON_COLORS = {
  BRAND: 'brand',
  SUCCESS: 'success',
  ATTENTION: 'attention',
  DANGER: 'danger',
  WHITE: 'white'
};

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ROUNDED: 'rounded',
  MINIMAL: 'minimal'
};

export const BUTTON_ICON_PLACEMENT = {
  START: 'start',
  END: 'end'
};

export const BUTTON_DEFAULT_PROPS = {
  ariaLabel: '',
  children: '',
  colors: BUTTON_COLORS.BRAND,
  disabled: false,
  form: null,
  fullWidth: false,
  hasFocusWhenDisabled: false,
  icon: null,
  iconPlacement: BUTTON_ICON_PLACEMENT.START,
  id: null,
  isIconOnlyButton: false,
  loaderText: 'Loading',
  loading: false,
  onClick: null,
  size: BUTTON_SIZES.SMALL,
  type: 'button',
  variant: BUTTON_VARIANTS.PRIMARY,
  wrapperClassName: ''
};

export const BUTTON_ICON_SIZES = {
  // non icon only buttons
  'false-extra-small': '16px',
  'false-small': '16px',
  'false-default': '20px',
  'false-large': '20px',
  'false-extra-large': '20px',

  // icon only buttons
  'true-extra-small': '20px',
  'true-small': '20px',
  'true-default': '20px',
  'true-large': '24px',
  'true-extra-large': '24px'
};

export const BUTTON_ICON_SIZES_CLASS = {
  // non icon only buttons
  'false-extra-small': 'w-4 h-4',
  'false-small': 'w-4 h-4',
  'false-default': 'w-5 h-5',
  'false-large': 'w-5 h-5',
  'false-extra-large': 'w-5 h-5',

  // icon only buttons
  'true-extra-small': 'w-5 h-5',
  'true-small': 'w-5 h-5',
  'true-default': 'w-5 h-5',
  'true-large': 'w-6 h-6',
  'true-extra-large': 'w-6 h-6'
};

const ICON_NEUTRAL_WEAK = 'icon-neutral-weak';
const ICON_NEUTRAL_WEAKER = 'icon-neutral-weaker';
const ICON_NEUTRAL_INVERSE_DEFAULT = 'icon-neutral-inverse-default';
const ICON_ATTENTION_INVERSE_DEFAULT = 'icon-attention-inverse-default';
const ICON_BRAND_WEAKER = 'icon-brand-weaker';
const ICON_ATTENTION_WEAKER = 'icon-attention-weaker';
const ICON_DANGER_WEAKER = 'icon-danger-weaker';
const ICON_SUCCESS_WEAKER = 'icon-success-weaker';
const ICON_BRAND_WEAK = 'icon-brand-weak';
const ICON_NEUTRAL_WEAKEST = 'icon-neutral-weakest';
const ICON_ATTENTION_DEFAULT = 'icon-attention-default';

export const BUTTON_ICON_COLORS = {
  'brand-secondary': ICON_BRAND_WEAK,
  'success-secondary': 'icon-success-weak',
  'attention-secondary': 'icon-attention-weak',
  'attention-primary': ICON_ATTENTION_INVERSE_DEFAULT,
  'attention-rounded': ICON_ATTENTION_INVERSE_DEFAULT,
  'danger-secondary': 'icon-danger-weak',
  'white-secondary': ICON_NEUTRAL_WEAK,
  'brand-minimal': ICON_BRAND_WEAK,
  'white-minimal': ICON_NEUTRAL_WEAK,
  'white-primary': ICON_NEUTRAL_WEAK,
  'white-rounded': ICON_NEUTRAL_WEAK,

  'brand-secondary-only-icon': 'icon-brand-strong',
  'success-secondary-only-icon': 'icon-success-strong',
  'attention-secondary-only-icon': 'icon-attention-strongest',
  'attention-primary-only-icon': ICON_ATTENTION_INVERSE_DEFAULT,
  'attention-rounded-only-icon': ICON_ATTENTION_INVERSE_DEFAULT,
  'danger-secondary-only-icon': 'icon-danger-strong',
  'brand-minimal-only-icon': ICON_BRAND_WEAK,
  'white-minimal-only-icon': 'icon-neutral-strong hover:icon-neutral-strongest',
  'white-primary-only-icon': 'icon-neutral-strong',
  'white-rounded-only-icon': 'icon-neutral-strong'
};

export const BUTTON_DISABLED_ICON_COLORS = {
  brand: 'icon-brand-weakest',
  success: 'icon-success-weakest',
  attention: 'icon-attention-weak',
  'attention-secondary': 'icon-attention-weaker',
  danger: 'icon-danger-weakest',
  white: ICON_NEUTRAL_WEAKER
};

/**
 * BUTTON_LOADER_CLASSES to be accessed in below format -
{
  '[colors]-[variant]': {
    loaderPrimaryColor :'primary-color-class',
    loaderSecondaryColor: 'secondary-color-class'
  }
}
 */
export const BUTTON_LOADER_CLASSES = {
  // brand/blue ---
  'brand-primary': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_INVERSE_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_BRAND_WEAKER
  },
  'brand-secondary': {
    LOADER_PRIMARY_COLOR: 'icon-brand-default',
    LOADER_SECONDARY_COLOR: ICON_BRAND_WEAKER
  },
  'brand-rounded': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_INVERSE_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_BRAND_WEAKER
  },
  'brand-minimal': {
    LOADER_PRIMARY_COLOR: '',
    LOADER_SECONDARY_COLOR: ''
  },

  // success/green ---
  'success-primary': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_INVERSE_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_SUCCESS_WEAKER
  },
  'success-secondary': {
    LOADER_PRIMARY_COLOR: 'icon-success-default',
    LOADER_SECONDARY_COLOR: ICON_SUCCESS_WEAKER
  },
  'success-rounded': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_INVERSE_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_SUCCESS_WEAKER
  },
  'success-minimal': {
    LOADER_PRIMARY_COLOR: '',
    LOADER_SECONDARY_COLOR: ''
  },

  // attention/yellow ---
  'attention-primary': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_INVERSE_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_ATTENTION_DEFAULT
  },
  'attention-secondary': {
    LOADER_PRIMARY_COLOR: ICON_ATTENTION_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_ATTENTION_WEAKER
  },
  'attention-rounded': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_INVERSE_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_ATTENTION_DEFAULT
  },
  'attention-minimal': {
    LOADER_PRIMARY_COLOR: '',
    LOADER_SECONDARY_COLOR: ''
  },

  // danger/red ---
  'danger-primary': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_INVERSE_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_DANGER_WEAKER
  },
  'danger-secondary': {
    LOADER_PRIMARY_COLOR: 'icon-danger-default',
    LOADER_SECONDARY_COLOR: ICON_DANGER_WEAKER
  },
  'danger-rounded': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_INVERSE_DEFAULT,
    LOADER_SECONDARY_COLOR: ICON_DANGER_WEAKER
  },
  'danger-minimal': {
    LOADER_PRIMARY_COLOR: '',
    LOADER_SECONDARY_COLOR: ''
  },

  // base/white ---
  'white-primary': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_WEAKER,
    LOADER_SECONDARY_COLOR: ICON_NEUTRAL_WEAKEST
  },
  'white-secondary': {
    // this colors/variant combination has empty bg as it never existed in Figma
    // refer Figma from https://browserstack.atlassian.net/browse/DS-633
    LOADER_PRIMARY_COLOR: 'icon-brand-default',
    LOADER_SECONDARY_COLOR: ICON_NEUTRAL_WEAKEST
  },
  'white-rounded': {
    LOADER_PRIMARY_COLOR: ICON_NEUTRAL_WEAKER,
    LOADER_SECONDARY_COLOR: ICON_NEUTRAL_WEAKEST
  },
  'white-minimal': {
    LOADER_PRIMARY_COLOR: '',
    LOADER_SECONDARY_COLOR: ''
  }
};
export const BUTTON_STYLE_CLASSES = {
  'extra-small-brand-primary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-brand-secondary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-brand-weaker text-brand-strong hover:bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-brand-rounded':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-brand-minimal':
    'leading-4  rounded text-xs text-brand-default hover:text-brand-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-success-primary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-success-secondary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-success-weaker text-success-default hover:text-success-strong hover:bg-success-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-success-rounded':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-danger-primary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-danger-secondary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-danger-weaker text-danger-strong hover:text-danger-stronger hover:bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-danger-rounded':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-attention-primary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-attention-secondary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-attention-weaker text-attention-strong hover:bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-attention-rounded':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-white-primary':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-white-rounded':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-white-minimal':
    'leading-4  text-xs rounded text-neutral-weak focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 hover:text-neutral-default',
  'small-brand-primary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-brand-secondary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-brand-weaker text-brand-strong hover:bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-brand-rounded':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-brand-minimal':
    'leading-4 text-sm rounded  text-brand-default hover:text-brand-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-success-primary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-success-secondary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-success-weaker text-success-default hover:text-success-strong hover:bg-success-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-success-rounded':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-danger-primary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-danger-secondary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-danger-weaker text-danger-strong hover:text-danger-stronger hover:bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-danger-rounded':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-attention-primary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-attention-secondary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-attention-weaker text-attention-strong hover:bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-attention-rounded':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-white-primary':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-white-rounded':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-white-minimal':
    'leading-4 text-sm rounded text-neutral-weak focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 hover:text-neutral-default',
  'default-brand-primary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-brand-secondary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-brand-weaker text-brand-strong hover:bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-brand-rounded':
    'leading-5 text-sm py-2 px-4 rounded-full bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-brand-minimal':
    'leading-5 text-sm rounded-md text-brand-default hover:text-brand-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-success-primary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-success-secondary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-success-weaker text-success-default hover:text-success-strong hover:bg-success-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-success-rounded':
    'leading-5 text-sm py-2 px-4 rounded-full bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-danger-primary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-danger-secondary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-danger-weaker text-danger-strong hover:text-danger-stronger hover:bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-danger-rounded':
    'leading-5 text-sm py-2 px-4 rounded-full bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-attention-primary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-attention-secondary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-attention-weaker text-attention-strong hover:bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-attention-rounded':
    'leading-5 text-sm py-2 px-4 rounded-full bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-white-primary':
    'leading-5 text-sm py-2 px-4 rounded-md bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-white-rounded':
    'leading-5 text-sm py-2 px-4 rounded-full bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-white-minimal':
    'leading-5 text-sm text-neutral-weak rounded-md focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 hover:text-neutral-default',
  'large-brand-primary':
    'leading-6 text-base py-2 px-4 rounded-md bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-brand-secondary':
    'leading-6 text-base py-2 px-4 rounded-md bg-brand-weaker text-brand-strong hover:bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-brand-rounded':
    'leading-6 text-base py-2 px-4 rounded-full bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-brand-minimal':
    'leading-6 text-base rounded-md text-brand-default hover:text-brand-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-success-primary':
    'leading-6 text-base py-2 px-4 rounded-md bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-success-secondary':
    'leading-6 text-base py-2 px-4 rounded-md bg-success-weaker text-success-default hover:text-success-strong hover:bg-success-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-success-rounded':
    'leading-6 text-base py-2 px-4 rounded-full bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-danger-primary':
    'leading-6 text-base py-2 px-4 rounded-md bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-danger-secondary':
    'leading-6 text-base py-2 px-4 rounded-md bg-danger-weaker text-danger-strong hover:text-danger-stronger hover:bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-danger-rounded':
    'leading-6 text-base py-2 px-4 rounded-full bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-attention-primary':
    'leading-6 text-base py-2 px-4 rounded-md bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-attention-secondary':
    'leading-6 text-base py-2 px-4 rounded-md bg-attention-weaker text-attention-strong hover:bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-attention-rounded':
    'leading-6 text-base py-2 px-4 rounded-full bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-white-primary':
    'leading-6 text-base py-2 px-4 rounded-md bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-white-rounded':
    'leading-6 text-base py-2 px-4 rounded-full bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-white-minimal':
    'leading-6 text-base rounded-md focus-visible:ring-2 text-neutral-weak focus-visible:ring-brand-strong focus-visible:ring-offset-2 hover:text-neutral-default',
  'extra-large-brand-primary':
    'leading-6 text-base rounded-md py-3 px-6 bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-brand-secondary':
    'leading-6 text-base rounded-md py-3 px-6 bg-brand-weaker text-brand-strong hover:bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-brand-rounded':
    'leading-6 rounded-full text-base py-3 px-6 bg-brand-default text-neutral-inverse-default hover:bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-brand-minimal':
    'leading-6 text-base rounded-md text-brand-default hover:text-brand-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-success-primary':
    'leading-6 text-base rounded-md py-3 px-6 bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-success-secondary':
    'leading-6 text-base rounded-md py-3 px-6 bg-success-weaker text-success-default hover:text-success-strong hover:bg-success-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-success-rounded':
    'leading-6 rounded-full text-base py-3 px-6 bg-success-strong text-neutral-inverse-default hover:bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-danger-primary':
    'leading-6 text-base rounded-md py-3 px-6 bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-danger-secondary':
    'leading-6 text-base rounded-md py-3 px-6 bg-danger-weaker text-danger-strong hover:text-danger-stronger hover:bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-danger-rounded':
    'leading-6 rounded-full text-base py-3 px-6 bg-danger-default text-neutral-inverse-default hover:bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-attention-primary':
    'leading-6 text-base rounded-md py-3 px-6 bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-attention-secondary':
    'leading-6 text-base rounded-md py-3 px-6 bg-attention-weaker text-attention-strong hover:bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-attention-rounded':
    'leading-6 rounded-full text-base py-3 px-6 bg-attention-weak text-attention-inverse-default hover:bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-white-primary':
    'leading-6 text-base rounded-md py-3 px-6 bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-white-rounded':
    'leading-6 rounded-full text-base py-3 px-6 bg-input-default shadow-sm text-neutral-weak border border-neutral-strong hover:bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-white-minimal':
    'leading-6 text-neutral-weak text-base rounded-md focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2 hover:text-neutral-default',

  // disabled states

  'extra-small-brand-primary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'extra-small-brand-secondary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-brand-weaker-disabled text-brand-weak cursor-not-allowed',
  'extra-small-brand-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'extra-small-brand-minimal-disabled':
    'leading-4  text-xs text-brand-weak cursor-not-allowed',
  'extra-small-success-primary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'extra-small-success-secondary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-success-weaker-disabled text-success-weak cursor-not-allowed',
  'extra-small-success-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'extra-small-danger-primary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'extra-small-danger-secondary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-danger-weaker-disabled text-danger-weak cursor-not-allowed',
  'extra-small-danger-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'extra-small-attention-primary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'extra-small-attention-secondary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-attention-weaker-disabled text-attention-weaker cursor-not-allowed',
  'extra-small-attention-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'extra-small-white-primary-disabled':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'extra-small-white-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'extra-small-white-minimal-disabled':
    'leading-4  text-xs text-neutral-weakest cursor-not-allowed',
  'small-brand-primary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'small-brand-secondary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-brand-weaker-disabled text-brand-weak cursor-not-allowed',
  'small-brand-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-3 text-sm text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'small-brand-minimal-disabled':
    'leading-4 text-sm rounded text-brand-weak cursor-not-allowed',
  'small-success-primary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'small-success-secondary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-success-weaker-disabled text-success-weak cursor-not-allowed',
  'small-success-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'small-danger-primary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'small-danger-secondary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-danger-weaker-disabled text-danger-weak cursor-not-allowed',
  'small-danger-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'small-attention-primary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'small-attention-secondary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-attention-weaker-disabled text-attention-weaker cursor-not-allowed',
  'small-attention-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'small-white-primary-disabled':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'small-white-rounded-disabled':
    'leading-4 rounded-full py-1.5 px-3 text-sm bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'small-white-minimal-disabled':
    'leading-4 text-sm rounded text-neutral-weakest cursor-not-allowed',
  'default-brand-primary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'default-brand-secondary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md bg-brand-weaker-disabled text-brand-weak cursor-not-allowed',
  'default-brand-rounded-disabled':
    'leading-5 text-sm py-2 px-4 rounded-full text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'default-brand-minimal-disabled':
    'leading-5 text-sm rounded-md text-brand-weak cursor-not-allowed',
  'default-success-primary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'default-success-secondary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md bg-success-weaker-disabled text-success-weak cursor-not-allowed',
  'default-success-rounded-disabled':
    'leading-5 text-sm py-2 px-4 rounded-full bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'default-danger-primary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'default-danger-secondary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md bg-danger-weaker-disabled text-danger-weak cursor-not-allowed',
  'default-danger-rounded-disabled':
    'leading-5 text-sm py-2 px-4 rounded-full bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'default-attention-primary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'default-attention-secondary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md bg-attention-weaker-disabled text-attention-weaker cursor-not-allowed',
  'default-attention-rounded-disabled':
    'leading-5 text-sm py-2 px-4 rounded-full bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'default-white-primary-disabled':
    'leading-5 text-sm py-2 px-4 rounded-md bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'default-white-rounded-disabled':
    'leading-5 text-sm py-2 px-4 rounded-full bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'default-white-minimal-disabled':
    'leading-5 text-sm rounded-md text-neutral-weakest cursor-not-allowed',
  'large-brand-primary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'large-brand-secondary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md bg-brand-weaker-disabled text-brand-weak cursor-not-allowed',
  'large-brand-rounded-disabled':
    'leading-6 text-base py-2 px-4 rounded-full text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'large-brand-minimal-disabled':
    'leading-6 text-base rounded-md text-brand-weak cursor-not-allowed',
  'large-success-primary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'large-success-secondary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md bg-success-weaker-disabled text-success-weak cursor-not-allowed',
  'large-success-rounded-disabled':
    'leading-6 text-base py-2 px-4 rounded-full bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'large-danger-primary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'large-danger-secondary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md bg-danger-weaker-disabled text-danger-weak cursor-not-allowed',
  'large-danger-rounded-disabled':
    'leading-6 text-base py-2 px-4 rounded-full bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'large-attention-primary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'large-attention-secondary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md bg-attention-weaker-disabled text-attention-weaker cursor-not-allowed',
  'large-attention-rounded-disabled':
    'leading-6 text-base py-2 px-4 rounded-full bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'large-white-primary-disabled':
    'leading-6 text-base py-2 px-4 rounded-md bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'large-white-rounded-disabled':
    'leading-6 text-base py-2 px-4 rounded-full bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'large-white-minimal-disabled':
    'leading-6 text-base rounded-md text-neutral-weakest cursor-not-allowed',
  'extra-large-brand-primary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'extra-large-brand-secondary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 bg-brand-weaker-disabled text-brand-weak cursor-not-allowed',
  'extra-large-brand-rounded-disabled':
    'leading-6 rounded-full text-base py-3 px-6 text-brand-weaker bg-brand-default-disabled cursor-not-allowed',
  'extra-large-brand-minimal-disabled':
    'leading-6 text-base rounded-md text-brand-weak cursor-not-allowed',
  'extra-large-success-primary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'extra-large-success-secondary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 bg-success-weaker-disabled text-success-weak cursor-not-allowed',
  'extra-large-success-rounded-disabled':
    'leading-6 rounded-full text-base py-3 px-6 bg-success-strong-disabled text-success-weaker cursor-not-allowed',
  'extra-large-danger-primary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'extra-large-danger-secondary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 bg-danger-weaker-disabled text-danger-weak cursor-not-allowed',
  'extra-large-danger-rounded-disabled':
    'leading-6 rounded-full text-base py-3 px-6 bg-danger-default-disabled text-danger-weaker cursor-not-allowed',
  'extra-large-attention-primary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'extra-large-attention-secondary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 bg-attention-weaker-disabled text-attention-weaker cursor-not-allowed',
  'extra-large-attention-rounded-disabled':
    'leading-6 rounded-full text-base py-3 px-6 bg-attention-weak-disabled text-attention-weak cursor-not-allowed',
  'extra-large-white-primary-disabled':
    'leading-6 text-base rounded-md py-3 px-6 bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'extra-large-white-rounded-disabled':
    'leading-6 rounded-full text-base py-3 px-6 bg-input-default-disabled text-neutral-weakest cursor-not-allowed',
  'extra-large-white-minimal-disabled':
    'leading-6 text-base rounded-md text-neutral-weakest cursor-not-allowed',

  // loading
  'extra-small-brand-primary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-brand-secondary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs text-brand-strong bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-brand-rounded-loading':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-success-primary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-success-secondary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs bg-success-weaker-hover text-success-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-success-rounded-loading':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-danger-primary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-danger-secondary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs text-danger-stronger bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-danger-rounded-loading':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-attention-primary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-attention-secondary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs text-attention-strong bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-attention-rounded-loading':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-white-primary-loading':
    'leading-4 rounded py-1.5 px-2.5 text-xs shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-small-white-rounded-loading':
    'leading-4 rounded-full py-1.5 px-2.5 text-xs shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-brand-primary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-brand-secondary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm text-brand-strong bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-brand-rounded-loading':
    'leading-4 rounded-full py-1.5 px-3 text-sm text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-success-primary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-success-secondary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm bg-success-weaker-hover text-success-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-success-rounded-loading':
    'leading-4 rounded-full py-1.5 px-3 text-sm text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-danger-primary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-danger-secondary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm text-danger-stronger bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-danger-rounded-loading':
    'leading-4 rounded-full py-1.5 px-3 text-sm text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-attention-primary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-attention-secondary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm text-attention-strong bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-attention-rounded-loading':
    'leading-4 rounded-full py-1.5 px-3 text-sm text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-white-primary-loading':
    'leading-4 rounded-md py-1.5 px-3 text-sm shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'small-white-rounded-loading':
    'leading-4 rounded-full py-1.5 px-3 text-sm shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-brand-primary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-brand-secondary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md text-brand-strong bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-brand-rounded-loading':
    'leading-5 text-sm py-2 px-4 rounded-full text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-success-primary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-success-secondary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md bg-success-weaker-hover text-success-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-success-rounded-loading':
    'leading-5 text-sm py-2 px-4 rounded-full text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-danger-primary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-danger-secondary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md text-danger-stronger bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-danger-rounded-loading':
    'leading-5 text-sm py-2 px-4 rounded-full text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-attention-primary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-attention-secondary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md text-attention-strong bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-attention-rounded-loading':
    'leading-5 text-sm py-2 px-4 rounded-full text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-white-primary-loading':
    'leading-5 text-sm py-2 px-4 rounded-md shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'default-white-rounded-loading':
    'leading-5 text-sm py-2 px-4 rounded-full shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-brand-primary-loading':
    'leading-6 text-base py-2 px-4 rounded-md text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-brand-secondary-loading':
    'leading-6 text-base py-2 px-4 rounded-md text-brand-strong bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-brand-rounded-loading':
    'leading-6 text-base py-2 px-4 rounded-full text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-success-primary-loading':
    'leading-6 text-base py-2 px-4 rounded-md text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-success-secondary-loading':
    'leading-6 text-base py-2 px-4 rounded-md bg-success-weaker-hover text-success-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-success-rounded-loading':
    'leading-6 text-base py-2 px-4 rounded-full text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-danger-primary-loading':
    'leading-6 text-base py-2 px-4 rounded-md text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-danger-secondary-loading':
    'leading-6 text-base py-2 px-4 rounded-md text-danger-stronger bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-danger-rounded-loading':
    'leading-6 text-base py-2 px-4 rounded-full text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-attention-primary-loading':
    'leading-6 text-base py-2 px-4 rounded-md text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-attention-secondary-loading':
    'leading-6 text-base py-2 px-4 rounded-md text-attention-strong bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-attention-rounded-loading':
    'leading-6 text-base py-2 px-4 rounded-full text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-white-primary-loading':
    'leading-6 text-base py-2 px-4 rounded-md shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'large-white-rounded-loading':
    'leading-6 text-base py-2 px-4 rounded-full shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-brand-primary-loading':
    'leading-6 text-base rounded-md py-3 px-6 text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-brand-secondary-loading':
    'leading-6 text-base rounded-md py-3 px-6 text-brand-strong bg-brand-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-brand-rounded-loading':
    'leading-6 rounded-full text-base py-3 px-6 text-neutral-inverse-default bg-brand-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-success-primary-loading':
    'leading-6 text-base rounded-md py-3 px-6 text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-success-secondary-loading':
    'leading-6 text-base rounded-md py-3 px-6 bg-success-weaker-hover text-success-strong focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-success-rounded-loading':
    'leading-6 rounded-full text-base py-3 px-6 text-neutral-inverse-default bg-success-strong-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-danger-primary-loading':
    'leading-6 text-base rounded-md py-3 px-6 text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-danger-secondary-loading':
    'leading-6 text-base rounded-md py-3 px-6 text-danger-stronger bg-danger-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-danger-rounded-loading':
    'leading-6 rounded-full text-base py-3 px-6 text-neutral-inverse-default bg-danger-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-attention-primary-loading':
    'leading-6 text-base rounded-md py-3 px-6 text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-attention-secondary-loading':
    'leading-6 text-base rounded-md py-3 px-6 text-attention-strong bg-attention-weaker-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-attention-rounded-loading':
    'leading-6 rounded-full text-base py-3 px-6 text-attention-inverse-default bg-attention-weak-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-white-primary-loading':
    'leading-6 text-base rounded-md py-3 px-6 shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2',
  'extra-large-white-rounded-loading':
    'leading-6 rounded-full text-base py-3 px-6 shadow-sm text-neutral-weak border border-neutral-strong bg-input-default-hover focus-visible:ring-2 focus-visible:ring-brand-strong focus-visible:ring-offset-2'
};

export const BUTTON_TYPES = {
  BUTTON: 'button',
  SUBMIT: 'submit'
};
