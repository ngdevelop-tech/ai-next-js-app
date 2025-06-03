export const rateLimitError =
  "Too many requests received from your network, please try again in some time or <a href='https://www.browserstack.com/contact?too_many_requests=true'>contact us</a>";

export const EMAIL_VALIDATION_REGEX =
  /^[a-zA-Z0-9+_|-](?:[.]?[a-zA-Z0-9'+_|~-])*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export const INACTIVITY_TIME_LIMIT = 300000; // 5min

export const DB_NAME = 'BrowserStack';

export const schema = {
  deviceLogs: '[createTimestamp+lineNumber]'
};

export const DB_VERSION = 1;

export const messages = {
  startRecordingError: 'Error in startScreenRecording',
  stopRecordingError: 'Error in stopRecording',
  downloadRecordingError: 'Error in downloadRecording',
  discardRecordingError: 'Error in discardRecording',
  recordingDownloaded: 'recordingDownloaded',
  recordingDiscarded: 'recordingDiscarded'
};

export const storybookCookieId = 'userID';

export const storyBookSecretKey = 'browserstack@storybook';

// needs to be changed whenever any token semantic token name is updated or added
export const ICON_TOKENS = {
  'neutral-weak': 'var(--icon-neutral-weak)',
  'neutral-default': 'var(--icon-neutral-default)',
  'neutral-strong': 'var(--icon-neutral-strong)',
  'neutral-weakest': 'var(--icon-neutral-weakest)',
  'neutral-weaker': 'var(--icon-neutral-weaker)',
  'neutral-strongest': 'var(--icon-neutral-strongest)',
  'neutral-inverse-default': 'var(--icon-neutral-inverse-default)',
  'neutral-inverse-weaker': 'var(--icon-neutral-inverse-weaker)',
  'attention-weaker': 'var(--icon-attention-weaker)',
  'attention-weak': 'var(--icon-attention-weak)',
  'attention-default': 'var(--icon-attention-default)',
  'attention-strong': 'var(--icon-attention-strong)',
  'attention-stronger': 'var(--icon-attention-stronger)',
  'attention-strongest': 'var(--icon-attention-strongest)',
  'attention-inverse-default': 'var(--icon-attention-inverse-default)',
  'brand-weakest': 'var(--icon-brand-weakest)',
  'brand-weaker': 'var(--icon-brand-weaker)',
  'brand-weak': 'var(--icon-brand-weak)',
  'brand-default': 'var(--icon-brand-default)',
  'brand-strong': 'var(--icon-brand-strong)',
  'brand-stronger': 'var(--icon-brand-stronger)',
  'danger-weakest': 'var(--icon-danger-weakest)',
  'danger-weaker': 'var(--icon-danger-weaker)',
  'danger-weak': 'var(--icon-danger-weak)',
  'danger-default': 'var(--icon-danger-default)',
  'danger-strong': 'var(--icon-danger-strong)',
  'danger-stronger': 'var(--icon-danger-stronger)',
  'success-weakest': 'var(--icon-success-weakest)',
  'success-weaker': 'var(--icon-success-weaker)',
  'success-weak': 'var(--icon-success-weak)',
  'success-default': 'var(--icon-success-default)',
  'success-strong': 'var(--icon-success-strong)',
  'success-stronger': 'var(--icon-success-stronger)',
  'sky-400': 'var(--colors-sky-400)',
  'sky-600': 'var(--colors-sky-600)'
};

export const SURFACE_TOKENS = {
  default: 'var(--surface-default)',
  strong: 'var(--surface-strong)'
};

const COLOR_TOKENS = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#ffffff',
  black: '#000000',
  base: {
    50: 'var(--colors-base-50)',
    100: 'var(--colors-base-100)',
    200: 'var(--colors-base-200)',
    300: 'var(--colors-base-300)',
    400: 'var(--colors-base-400)',
    500: 'var(--colors-base-500)',
    600: 'var(--colors-base-600)',
    700: 'var(--colors-base-700)',
    800: 'var(--colors-base-800)',
    900: 'var(--colors-base-900)'
  },
  brand: {
    50: 'var(--colors-brand-50)',
    100: 'var(--colors-brand-100)',
    200: 'var(--colors-brand-200)',
    300: 'var(--colors-brand-300)',
    400: 'var(--colors-brand-400)',
    500: 'var(--colors-brand-500)',
    600: 'var(--colors-brand-600)',
    700: 'var(--colors-brand-700)',
    800: 'var(--colors-brand-800)',
    900: 'var(--colors-brand-900)'
  },
  danger: {
    50: 'var(--colors-danger-50)',
    100: 'var(--colors-danger-100)',
    200: 'var(--colors-danger-200)',
    300: 'var(--colors-danger-300)',
    400: 'var(--colors-danger-400)',
    500: 'var(--colors-danger-500)',
    600: 'var(--colors-danger-600)',
    700: 'var(--colors-danger-700)',
    800: 'var(--colors-danger-800)',
    900: 'var(--colors-danger-900)'
  },
  success: {
    50: 'var(--colors-success-50)',
    100: 'var(--colors-success-100)',
    200: 'var(--colors-success-200)',
    300: 'var(--colors-success-300)',
    400: 'var(--colors-success-400)',
    500: 'var(--colors-success-500)',
    600: 'var(--colors-success-600)',
    700: 'var(--colors-success-700)',
    800: 'var(--colors-success-800)',
    900: 'var(--colors-success-900)'
  },
  attention: {
    50: 'var(--colors-attention-50)',
    100: 'var(--colors-attention-100)',
    200: 'var(--colors-attention-200)',
    300: 'var(--colors-attention-300)',
    400: 'var(--colors-attention-400)',
    500: 'var(--colors-attention-500)',
    600: 'var(--colors-attention-600)',
    700: 'var(--colors-attention-700)',
    800: 'var(--colors-attention-800)',
    900: 'var(--colors-attention-900)'
  },
  info: {
    50: 'var(--colors-info-50)',
    100: 'var(--colors-info-100)',
    200: 'var(--colors-info-200)',
    300: 'var(--colors-info-300)',
    400: 'var(--colors-info-400)',
    500: 'var(--colors-info-500)',
    600: 'var(--colors-info-600)',
    700: 'var(--colors-info-700)',
    800: 'var(--colors-info-800)',
    900: 'var(--colors-info-900)'
  },
  pink: {
    100: '#FCE7F3',
    300: '#F9A8D4',
    700: '#BE185D',
    800: '#9D174D',
    950: '#500724'
  }
};

export const TEXT_TOKENS = {
  'neutral-weakest': 'var(--text-neutral-weakest)',
  'neutral-weaker': 'var(--text-neutral-weaker)',
  'neutral-weak': 'var(--text-neutral-weak)',
  'neutral-default': 'var(--text-neutral-default)',
  'neutral-inverse-default': 'var(--text-neutral-inverse-default)',
  'neutral-inverse-weak': 'var(--text-neutral-inverse-weak)',
  'neutral-inverse-weakest': 'var(--text-neutral-inverse-weakest)',
  'attention-weaker': 'var(--text-attention-weaker)',
  'attention-weak': 'var(--text-attention-weak)',
  'attention-default': 'var(--text-attention-default)',
  'attention-strong': 'var(--text-attention-strong)',
  'attention-stronger': 'var(--text-attention-stronger)',
  'attention-inverse-default': 'var(--text-attention-inverse-default)',
  'brand-weaker': 'var(--text-brand-weaker)',
  'brand-weak': 'var(--text-brand-weak)',
  'brand-default': 'var(--text-brand-default)',
  'brand-strong': 'var(--text-brand-strong)',
  'brand-stronger': 'var(--text-brand-stronger)',
  'brand-strongest': 'var(--text-brand-strongest)',
  'danger-weaker': 'var(--text-danger-weaker)',
  'danger-weak': 'var(--text-danger-weak)',
  'danger-default': 'var(--text-danger-default)',
  'danger-strong': 'var(--text-danger-strong)',
  'danger-stronger': 'var(--text-danger-stronger)',
  'danger-strongest': 'var(--text-danger-strongest)',
  'success-weaker': 'var(--text-success-weaker)',
  'success-weak': 'var(--text-success-weak)',
  'success-default': 'var(--text-success-default)',
  'success-strong': 'var(--text-success-strong)',
  'success-stronger': 'var(--text-success-stronger)',
  ...COLOR_TOKENS
};

export const BG_TOKENS = {
  'neutral-default': 'var(--bg-neutral-default)',
  'neutral-strong': 'var(--bg-neutral-strong)',
  'neutral-stronger': 'var(--bg-neutral-stronger)',
  'neutral-strongest': 'var(--bg-neutral-strongest)',
  'neutral-inverse-weakest': 'var(--bg-neutral-inverse-weakest)',
  'neutral-inverse-weaker': 'var(--bg-neutral-inverse-weaker)',
  'neutral-inverse-weak': 'var(--bg-neutral-inverse-weak)',
  'neutral-inverse-default': 'var(--bg-neutral-inverse-default)',
  'neutral-default-hover': 'var(--bg-neutral-default-hover)',
  'neutral-default-disabled': 'var(--bg-neutral-default-disabled)',
  'neutral-stronger-hover': 'var(--bg-neutral-stronger-hover)',
  'neutral-stronger-disabled': 'var(--bg-neutral-stronger-disabled)',
  'neutral-strongest-hover': 'var(--bg-neutral-strongest-hover)',
  'neutral-strongest-disabled': 'var(--bg-neutral-strongest-disabled)',
  'neutral-strong-hover': 'var(--bg-neutral-strong-hover)',
  'neutral-inverse-weaker-hover': 'var(--bg-neutral-inverse-weaker-hover)',
  'attention-weakest': 'var(--bg-attention-weakest)',
  'attention-weaker': 'var(--bg-attention-weaker)',
  'attention-weak': 'var(--bg-attention-weak)',
  'attention-default': 'var(--bg-attention-default)',
  'attention-stronger': 'var(--bg-attention-stronger)',
  'attention-weaker-disabled': 'var(--bg-attention-weaker-disabled)',
  'attention-weaker-hover': 'var(--bg-attention-weaker-hover)',
  'attention-weak-disabled': 'var(--bg-attention-weak-disabled)',
  'attention-weak-hover': 'var(--bg-attention-weak-hover)',
  'attention-weakest-hover': 'var(--bg-attention-weakest-hover)',
  'brand-weakest': 'var(--bg-brand-weakest)',
  'brand-weaker': 'var(--bg-brand-weaker)',
  'brand-weak': 'var(--bg-brand-weak)',
  'brand-default': 'var(--bg-brand-default)',
  'brand-stronger': 'var(--bg-brand-stronger)',
  'brand-weaker-disabled': 'var(--bg-brand-weaker-disabled)',
  'brand-weaker-hover': 'var(--bg-brand-weaker-hover)',
  'brand-default-hover': 'var(--bg-brand-default-hover)',
  'brand-default-disabled': 'var(--bg-brand-default-disabled)',
  'brand-weakest-hover': 'var(--bg-brand-weakest-hover)',
  'danger-weakest': 'var(--bg-danger-weakest)',
  'danger-weaker': 'var(--bg-danger-weaker)',
  'danger-default': 'var(--bg-danger-default)',
  'danger-stronger': 'var(--bg-danger-stronger)',
  'danger-default-hover': 'var(--bg-danger-default-hover)',
  'danger-default-disabled': 'var(--bg-danger-default-disabled)',
  'danger-weaker-hover': 'var(--bg-danger-weaker-hover)',
  'danger-weaker-disabled': 'var(--bg-danger-weaker-disabled)',
  'danger-weakest-hover': 'var(--bg-danger-weakest-hover)',
  'success-weakest': 'var(--bg-success-weakest)',
  'success-weaker': 'var(--bg-success-weaker)',
  'success-default': 'var(--bg-success-default)',
  'success-strong': 'var(--bg-success-strong)',
  'success-stronger': 'var(--bg-success-stronger)',
  'success-weaker-hover': 'var(--bg-success-weaker-hover)',
  'success-weaker-disabled': 'var(--bg-success-weaker-disabled)',
  'success-default-hover': 'var(--bg-success-default-hover)',
  'success-default-disabled': 'var(--bg-success-default-disabled)',
  'success-weakest-hover': 'var(--bg-success-weakest-hover)',
  'success-strong-hover': 'var(--bg-success-strong-hover)',
  'success-strong-disabled': 'var(--bg-success-strong-disabled)',
  'input-default': 'var(--bg-input-default)',
  'input-default-hover': 'var(--bg-input-default-hover)',
  'input-default-disabled': 'var(--bg-input-default-disabled)',
  'raised-default': 'var(--bg-raised-default)',
  'raised-default-hover': 'var(--bg-raised-default-hover)',
  ...COLOR_TOKENS
};
