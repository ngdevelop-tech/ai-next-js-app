import { DIRECTIONS, TYPES } from './radioGroup';

export const DUMMY_STACKED_CARD_DATA = [
  {
    id: 'radio-1',
    value: 1,
    primaryLabel: 'Hobby',
    description: '160 GB SSD disk',
    secondaryLabel: '$40',
    secondaryDescription: '/mo',
    disabled: false
  },
  {
    id: 'radio-2',
    value: 2,
    primaryLabel: 'Startup',
    description: '256 GB SSD disk',
    secondaryLabel: '$80',
    secondaryDescription: '/mo',
    disabled: false
  },
  {
    id: 'radio-3',
    value: 3,
    primaryLabel: 'Business',
    description: '512 GB SSD disk',
    secondaryLabel: '$160',
    secondaryDescription: '/mo',
    disabled: false
  },
  {
    id: 'radio-4',
    value: 4,
    primaryLabel: 'Enterprise',
    description: '1024 GB SSD disk',
    secondaryLabel: '$240',
    secondaryDescription: '/mo',
    disabled: true
  }
];

export const DUMMY_SMALL_CARD_DATA = [
  { id: 'radio-1', value: '1', primaryLabel: '4 gb', disabled: false },
  { id: 'radio-2', value: '2', primaryLabel: '8 gb', disabled: false },
  { id: 'radio-3', value: '3', primaryLabel: '16 gb', disabled: false },
  { id: 'radio-4', value: '4', primaryLabel: '32 gb', disabled: false },
  { id: 'radio-5', value: '5', primaryLabel: '64 gb', disabled: false },
  { id: 'radio-6', value: '6', primaryLabel: '128 gb', disabled: true }
];

export const DUMMY_DATA = [
  {
    id: 'radio-1',
    value: 'radio-1',
    label: 'Radio 1 and it can grow longer and much more longer',
    description: 'It is the description of Radio 1',
    disabled: false
  },
  {
    id: 'radio-2',
    value: 'radio-2',
    label: 'Radio 2 and it can grow longer',
    description: 'It is the description of Radio 2',
    disabled: false
  },
  {
    id: 'radio-3',
    value: 'radio-3',
    label: 'Radio 3 and it can grow longer',
    description: 'It is the description of Radio 3',
    disabled: true
  }
];

export const TABLE_DUMMY_DATA = [
  {
    id: 'radio-1',
    value: 1,
    label: 'Startup',
    columns: [
      { label: '$29 / mo', description: '($390 / yr)' },
      { description: 'Up to 5 active job postings' }
    ],
    disabled: false
  },
  {
    id: 'radio-2',
    value: 2,
    label: 'Business',
    columns: [
      { label: '$99 / mo', description: '($990 / yr)' },
      { description: 'Up to 25 active job postings' }
    ],
    disabled: false
  },
  {
    id: 'radio-3',
    value: 3,
    label: 'Enterprise',
    columns: [
      { label: '$29 / mo', description: '($290 / yr)' },
      { description: 'Unlimited active job postings' }
    ],
    disabled: true
  }
];

export const RADIO_ITEM_ALIGNMENTS = Object.values(DIRECTIONS).map(
  (shape) => ` <b>${shape}</b>`
);

export const RADIO_ITEM_VARIANTS = Object.values(TYPES).map(
  (shape) => ` <b>${shape}</b>`
);
