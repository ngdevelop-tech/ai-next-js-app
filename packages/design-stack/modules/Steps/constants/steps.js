import PropTypes from 'prop-types';

export const STEPS_STATUS = {
  COMPLETE: 'complete',
  CURRENT: 'current',
  UPCOMING: 'upcoming',
  CURRENT_COMPLETED: 'current_completed'
};

export const STEPS_FORMAT = {
  SIMPLE: 'simple',
  BULLETS: 'bullets',
  PANELS_WITH_BORDERS: 'panels-with-borders',
  CIRCLES: 'circles',
  BULLETS_AND_TEXT: 'bullets-and-text',
  CIRCLE_WITH_TEXT: 'circles-with-text'
};

export const STEP_TYPE = PropTypes.shape({
  description: PropTypes.string,
  href: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.oneOf(Object.values(STEPS_STATUS))
});

export const STEPS_WRAPPER_CLASSES = {
  [STEPS_FORMAT.SIMPLE]: '',
  [STEPS_FORMAT.BULLETS]: 'flex items-center justify-center',
  [STEPS_FORMAT.PANELS_WITH_BORDERS]:
    'overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-neutral-default',
  [STEPS_FORMAT.CIRCLES]: '',
  [STEPS_FORMAT.BULLETS_AND_TEXT]: 'flex justify-center',
  [STEPS_FORMAT.CIRCLE_WITH_TEXT]: 'flex justify-center'
};

export const STEPS_BULLETS_CLASSES = {
  [STEPS_FORMAT.SIMPLE]: 'space-y-4 md:flex md:space-y-0 md:space-x-8',
  [STEPS_FORMAT.BULLETS]: 'ml-8 flex items-center space-x-5',
  [STEPS_FORMAT.PANELS_WITH_BORDERS]:
    'overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-neutral-default w-full',
  [STEPS_FORMAT.CIRCLES]: 'flex items-center justify-center',
  [STEPS_FORMAT.BULLETS_AND_TEXT]: 'space-y-6',
  [STEPS_FORMAT.CIRCLE_WITH_TEXT]: 'flex items-start justify-center flex-col'
};
