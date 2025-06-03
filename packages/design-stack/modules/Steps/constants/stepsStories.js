import { STEPS_STATUS } from './steps';

export const STEPS = [
  {
    id: '1',
    name: 'Create account',
    description: 'Vitae sed mi luctus laoreet.',
    status: STEPS_STATUS.COMPLETE
  },
  {
    id: '2',
    name: 'Profile',
    description: 'Cursus semper viverra facilisis et et some more.',
    status: STEPS_STATUS.COMPLETE
  },
  {
    id: '3',
    name: 'Business information',
    description: 'Penatibus eu quis ante.',
    status: STEPS_STATUS.CURRENT
  },
  {
    id: '4',
    name: 'Theme',
    description: 'Faucibus nec enim leo et.',
    status: STEPS_STATUS.UPCOMING,
    noFocus: true
  },
  {
    id: '5',
    name: 'Preview',
    description: 'Iusto et officia maiores porro ad non quas.',
    status: STEPS_STATUS.UPCOMING,
    noFocus: true
  }
];
