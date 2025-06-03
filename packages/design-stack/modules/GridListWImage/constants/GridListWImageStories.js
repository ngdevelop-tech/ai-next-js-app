import { printToConsole } from '../../../utils/common';

export const IMAGE_SRC_EXAMPLE =
  'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80';

export const GRID_IMAGE_DATA = [
  {
    onClick: (e) => printToConsole('log', 'clicked', e),
    label: 'Lorem',
    subText: '15/11/12'
  },
  {
    onClick: (e) => printToConsole('log', 'clicked', e),
    label: 'Ipsum',
    subText: '07/05/23'
  },
  {
    label: 'Dolor',
    subText: '09/03/99'
  },
  {
    label: 'Siet',
    subText: '02/08/24'
  }
];
