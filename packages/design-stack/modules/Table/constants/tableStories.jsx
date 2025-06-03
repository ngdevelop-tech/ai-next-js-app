import React from 'react';

import { Button, TruncateText } from '../../../index';
import { CELL_LOADING_VARIANT } from '../../TableCell/constant/tableCell';

const DAN_ADAMS_EMAIL = 'dan.adams@example.com';
const BACKEND_DEVELOPER = 'Back-end Developer';
const FRONTEND_DEVELOPER = 'Front-end Developer';
const LINDSAY_WALTON = 'Lindsay Walton';
const LINDSAY_WALTON_EMAIL = 'lindsay.walton@example.com';
const COURTNEY_HENRY = 'Courtney Henry';
const COURTNEY_HENRY_EMAIL = 'courtney.henry@example.com';

export const HEADINGS = ['Name', 'Title', 'Email', 'Role'];
export const NAMES = [LINDSAY_WALTON, COURTNEY_HENRY, 'Dan Adams'];
export const TITLES = [FRONTEND_DEVELOPER, BACKEND_DEVELOPER, 'Designer'];
export const EMAILS = [
  LINDSAY_WALTON_EMAIL,
  COURTNEY_HENRY_EMAIL,
  DAN_ADAMS_EMAIL
];
export const ROLES = ['Member', 'Admin', 'Supervisor'];

export const TABLE_ROWS = [
  {
    id: 'row-1',
    name: LINDSAY_WALTON,
    title: FRONTEND_DEVELOPER,
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member'
  },
  {
    id: 'row-2',
    name: COURTNEY_HENRY,
    title: 'Designer',
    email: COURTNEY_HENRY_EMAIL,
    role: 'Admin'
  },
  {
    id: 'row-3',
    name: 'Dan Adams',
    title: BACKEND_DEVELOPER,
    email: DAN_ADAMS_EMAIL,
    role: 'Supervisor'
  },
  {
    name: 'Pete Sampras',
    title: 'Devops',
    email: 'pete@example.com',
    role: 'Member'
  },
  {
    name: 'Roger Federer',
    title: 'Principal Developer',
    email: 'roger@example.com',
    role: 'Supervisor'
  }
];

export const SELECTABLE_TABLE_ROWS = [
  {
    id: 'row-1',
    name: LINDSAY_WALTON,
    title: FRONTEND_DEVELOPER,
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member'
  },
  {
    id: 'row-2',
    name: COURTNEY_HENRY,
    title: 'Designer',
    email: COURTNEY_HENRY_EMAIL,
    role: 'Admin'
  },
  {
    id: 'row-3',
    name: 'Dan Adams',
    title: BACKEND_DEVELOPER,
    email: DAN_ADAMS_EMAIL,
    role: 'Supervisor'
  },
  {
    id: 'row-4',
    name: 'Pete Samprass',
    title: 'Devops',
    email: 'petes@example.com',
    role: 'Member'
  },
  {
    id: 'row-5',
    name: 'Roger Federerr',
    title: 'Principal Dev',
    email: 'rogerd@example.com',
    role: 'Supervisor'
  },
  {
    id: 'row-6',
    name: `${LINDSAY_WALTON}-1`,
    title: FRONTEND_DEVELOPER,
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member'
  },
  {
    id: 'row-7',
    name: `${COURTNEY_HENRY}-1`,
    title: 'Designer',
    email: COURTNEY_HENRY_EMAIL,
    role: 'Admin'
  },
  {
    id: 'row-8',
    name: 'Dan Adams-1',
    title: BACKEND_DEVELOPER,
    email: DAN_ADAMS_EMAIL,
    role: 'Supervisor'
  },
  {
    id: 'row-9',
    name: 'Pete Sampras-1',
    title: 'Devops',
    email: 'pete@example.com',
    role: 'Member'
  },
  {
    id: 'row-10',
    name: 'Roger Federer-1',
    title: 'Principal Developer',
    email: 'roger@example.com',
    role: 'Supervisor'
  }
];

export const MLC_COLUMNS = [
  {
    name: 'Name',
    key: 'name',
    cell: (value) => (
      <div className="flex items-center">
        <div className="h-10 w-10 shrink-0">
          <img className="h-10 w-10 rounded-full" src={value.image} alt="" />
        </div>
        <div className="ml-4">
          <div className="font-medium text-neutral-default">{value.name}</div>
          <div className="text-neutral-weaker">{value.email}</div>
        </div>
      </div>
    )
  },
  {
    name: 'Title',
    key: 'title',
    cell: (row) => (
      <>
        <div className="text-neutral-default">{row.title}</div>
        <div className="text-neutral-weaker">{row.department}</div>
      </>
    )
  },
  {
    name: 'Status',
    key: 'status',
    cell: () => (
      <span className="inline-flex rounded-full bg-success-weaker px-2 text-xs font-semibold leading-5 text-success-strong">
        Active
      </span>
    )
  },
  {
    name: 'Role',
    key: 'role'
  },
  {
    name: '',
    key: 'action',
    cell: (row) => (
      <a href="/" className="text-brand-default hover:text-brand-strongest">
        Edit<span className="sr-only">, {row.name}</span>
      </a>
    )
  }
];
const IMAGE =
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

export const MLC_ROWS = [
  {
    name: LINDSAY_WALTON,
    title: FRONTEND_DEVELOPER,
    department: 'Optimization',
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member',
    image: IMAGE,
    key: 1
  },
  {
    name: LINDSAY_WALTON,
    title: FRONTEND_DEVELOPER,
    department: 'Optimization',
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member',
    image: IMAGE,
    key: 2
  },
  {
    name: LINDSAY_WALTON,
    title: FRONTEND_DEVELOPER,
    department: 'Optimization',
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member',
    image: IMAGE,
    key: 3
  }
];

export const COLUMNS = [
  {
    name: 'Name',
    key: 'name',
    isSortable: true,
    isResizable: true,
    defaultWidth: 150,
    maxWidth: 350
  },
  {
    name: 'Title',
    key: 'title',
    isSortable: true
  },
  {
    name: 'Email',
    key: 'email',
    isResizable: true,
    minWidth: 160,
    defaultWidth: 350
  },
  {
    name: 'Role',
    key: 'role'
  },
  {
    name: '',
    key: 'action',
    cell: () => (
      <Button variant="minimal" colors="brand">
        Edit
      </Button>
    )
  }
];

export const GRT_COLUMNS = [
  {
    name: 'Name',
    key: 'name'
  },
  {
    name: 'Title',
    key: 'title'
  },
  {
    name: 'Email',
    key: 'email'
  },
  {
    name: 'Role',
    key: 'role'
  },
  {
    name: '',
    key: 'action',
    cell: () => (
      <Button variant="minimal" colors="brand">
        Edit
      </Button>
    )
  }
];

export const GRT_ROWS = [
  {
    name: 'Edinburgh',
    id: 'row-1',
    people: [
      {
        id: 'row-1-1',
        name: LINDSAY_WALTON,
        title: FRONTEND_DEVELOPER,
        email: LINDSAY_WALTON_EMAIL,
        role: 'Member'
      },
      {
        id: 'row-1-2',
        name: COURTNEY_HENRY,
        title: 'Designer',
        email: COURTNEY_HENRY_EMAIL,
        role: 'Admin'
      }
    ]
  },
  {
    name: 'London',
    id: 'row-2',
    people: [
      {
        id: 'row-2-1',
        name: 'Tom cook',
        title: FRONTEND_DEVELOPER,
        email: 'tom.cook@example.com',
        role: 'Member'
      },
      {
        id: 'row-2-2',
        name: 'Whitney Francis',
        title: 'Designer',
        email: 'whitney.francis@example.com',
        role: 'Admin'
      }
    ]
  }
];

export const GROUPED_NAMES = [
  LINDSAY_WALTON,
  COURTNEY_HENRY,
  'Tom cook',
  'Whitney Francis'
];
export const GROUPED_TITLES = [FRONTEND_DEVELOPER, 'Designer'];
export const GROUPED_ROLES = ['Member', 'Admin'];
export const GROUPED_EMAILS = [
  LINDSAY_WALTON_EMAIL,
  COURTNEY_HENRY_EMAIL,
  'tom.cook@example.com',
  'whitney.francis@example.com'
];
export const GROUPED_LOCATIONS = ['Edinburgh', 'London'];

export const DEFAULT_STYLING_COL_0 = 'text-neutral-default font-medium';
export const DEFAULT_STYLING_COL_OTHERS = 'text-neutral-weaker';

export const TBT_ROWS = [
  {
    name: LINDSAY_WALTON,
    title: '111111',
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member'
  },
  {
    name: COURTNEY_HENRY,
    title: '777777',
    email: COURTNEY_HENRY_EMAIL,
    role: 'Admin'
  },
  {
    name: 'Dan Adams',
    title: '666666',
    email: DAN_ADAMS_EMAIL,
    role: 'Supervisor'
  }
];

export const TBT_COLUMNS = [
  {
    name: 'Name',
    key: 'name',
    isSortable: true
  },
  {
    name: 'Salary',
    key: 'title',
    isSortable: true
  },
  {
    name: 'Email',
    key: 'email'
  },
  {
    name: 'Role',
    key: 'role'
  },
  {
    name: '',
    key: 'action',
    cell: () => (
      <Button variant="minimal" colors="brand">
        Edit
      </Button>
    )
  }
];

const TEMPLATE = {
  name: 'Dan Adams',
  title: BACKEND_DEVELOPER,
  email: 'dan.adams@example.com',
  role: 'Supervisor',
  id: 3
};

export const DRAGGABLE_ROWS_DATA = Array.from({ length: 20 }, (_, index) => ({
  ...TEMPLATE,
  name: `${index + 1} - Dan Adams`,
  id: index + 1
}));

export const COLUMNS_VERTICAL_LINES_DATA = [
  {
    key: 'coverage',
    name: 'Coverage',
    isResizable: true,
    defaultWidth: 150,
    maxWidth: 350
  },
  { key: 'testCases', name: 'Test Cases' },
  {
    key: 'testExecution',
    name: 'Test Execution Results',
    isResizable: true,
    defaultWidth: 350,
    maxWidth: 450
  },
  { key: 'issues', name: 'Issues' }
];

export const ROWS_VERTICAL_LINES_DATA = [
  {
    id: 1,
    coverage: {
      cell: (
        <div>
          <div className="font-bold">SCRUM-1</div>
          <div>Zephyr</div>
        </div>
      ),
      rowspan: 3
    }, // merged across 3 rows
    testCases: {
      cell: (
        <div>
          <div className="font-bold">SCRUM-T2</div>
          <div>test 2</div>
        </div>
      )
    },
    testExecution: {
      cell: (
        <div>
          <TruncateText
            headerTooltipProps={{
              wrapperClassName: 'break-all [overflow-wrap:anywhere]'
            }}
            isFullWidthTooltip
            containerClassName="w-fit"
            tooltipContent={
              <div className="mb-0 px-4 text-neutral-inverse-weakest">
                Executed on: 28/02/2024 5:39pm
              </div>
            }
            hidetooltipTriggerIcon
          >
            <div className="font-bold">Executed on: 28/02/2024 5:39pm</div>
          </TruncateText>

          <TruncateText
            headerTooltipProps={{
              wrapperClassName: 'break-all [overflow-wrap:anywhere]'
            }}
            isFullWidthTooltip
            containerClassName="w-fit"
            tooltipContent={
              <div className="mb-0 px-4 text-neutral-inverse-weakest">
                Super user should be able to see others users dashboard with
                filters enabled
              </div>
            }
            hidetooltipTriggerIcon
            wrapperClassName="line-clamp-2"
          >
            <div>
              Super user should be able to see others users dashboard with
              filters enabled
            </div>
          </TruncateText>
        </div>
      )
    },
    issues: {
      cell: (
        <div>
          <div className="font-bold">SCRUM-15</div>
          <div>Bug 6</div>
        </div>
      )
    }
  },
  {
    id: 2,
    testCases: {
      cell: (
        <div>
          <div className="font-bold">SCRUM-T3</div>
          <div>test 1 cloned</div>
        </div>
      ),
      rowspan: 2
    },
    testExecution: {
      cell: (
        <div>
          <div className="font-bold">Executed on: 28/03/2024 5:39pm</div>
          <div>Executed by: User 2</div>
        </div>
      ),
      colspan: 2
    }
  },
  {
    id: 3,
    testExecution: {
      cell: (
        <div>
          <div className="font-bold">Executed on: 28/03/2024 5:39pm</div>
          <div>Executed by: User 3</div>
        </div>
      )
    },
    issues: { cell: <div className="italic">None</div> }
  }
];

export const LOADING_TABLE_COLUMNS = [
  {
    name: 'Name',
    key: 'name',
    loadingVariant: CELL_LOADING_VARIANT.TITLE_AND_DESCRIPTION_WITH_AVATAR,
    cell: (value) => (
      <div className="flex items-center">
        <div className="h-10 w-10 shrink-0">
          <img className="h-10 w-10 rounded-full" src={value.image} alt="" />
        </div>
        <div className="ml-4">
          <div className="font-medium text-neutral-default">{value.name}</div>
          <div className="text-neutral-weaker">{value.email}</div>
        </div>
      </div>
    )
  },
  {
    name: 'Title',
    key: 'title',
    loadingVariant: CELL_LOADING_VARIANT.TITLE_AND_DESCRIPTION,
    cell: (row) => (
      <>
        <div className="text-neutral-default">{row.title}</div>
        <div className="text-neutral-weaker">{row.department}</div>
      </>
    )
  },
  {
    name: 'Status',
    key: 'status',
    loadingVariant: CELL_LOADING_VARIANT.LONG_CELL,
    cell: () => (
      <span className="inline-flex rounded-full bg-success-weaker px-2 text-xs font-semibold leading-5 text-success-strong">
        Active
      </span>
    )
  },
  {
    name: 'Role',
    key: 'role',
    loadingVariant: CELL_LOADING_VARIANT.SHORT_CELL
  },
  {
    name: '',
    key: 'action',
    loadingVariant: CELL_LOADING_VARIANT.TARGET_CIRCLE,
    cell: (row) => (
      <a href="/" className="text-brand-default hover:text-brand-strongest">
        Edit<span className="sr-only">, {row.name}</span>
      </a>
    )
  },
  {
    name: '',
    key: 'action',
    loadingVariant: CELL_LOADING_VARIANT.CHECKBOX,
    cell: (row) => (
      <a href="/" className="text-brand-default hover:text-brand-strongest">
        Remove<span className="sr-only">, {row.name}</span>
      </a>
    )
  }
];

export const LOADING_TABLE_ROWS = [
  {
    name: LINDSAY_WALTON,
    title: FRONTEND_DEVELOPER,
    department: 'Optimization',
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member',
    image: IMAGE,
    key: 1
  },
  {
    name: LINDSAY_WALTON,
    title: FRONTEND_DEVELOPER,
    department: 'Optimization',
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member',
    image: IMAGE,
    key: 2
  },
  {
    name: LINDSAY_WALTON,
    title: FRONTEND_DEVELOPER,
    department: 'Optimization',
    email: LINDSAY_WALTON_EMAIL,
    role: 'Member',
    image: IMAGE,
    key: 3
  }
];
