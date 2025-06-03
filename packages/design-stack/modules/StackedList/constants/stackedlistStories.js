export const PEOPLE = [
  {
    name: 'Calwin Hawkins',
    email: 'calwin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const INFO = 'Applied on January 7, 2020';
const STATUS_TEXT = 'Completed phone screening';

export const PEOPLE_WITH_TWO_COLS = [
  {
    name: 'Ricardo Cooper',
    email: 'ricardo.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    info: INFO,
    statusText: STATUS_TEXT
  },
  {
    ...PEOPLE[1],
    info: INFO,
    statusText: STATUS_TEXT
  },
  {
    ...PEOPLE[2],
    info: INFO,
    statusText: STATUS_TEXT
  }
];

export const JOB_TITLES = [
  'Back End Developer',
  'Front End Developer',
  'User Interface Designer'
];

export const GROUPED_PEOPLE = [
  {
    title: 'A',
    people: [
      {
        image: PEOPLE[1].image,
        name: 'Leslie Abbott',
        info: 'Co-Founder / CEO'
      },
      {
        image: PEOPLE[2].image,
        name: 'Hector Adams',
        info: 'VP, Marketing'
      },
      {
        image: PEOPLE[0].image,
        name: 'Blake Alexander',
        info: 'Account Coordinator'
      },
      {
        image: PEOPLE[1].image,
        name: 'Fabricio Andrews',
        info: 'Senior Art Director'
      }
    ]
  },
  {
    title: 'B',
    people: PEOPLE.map((person) => ({ ...person, info: person.email }))
  }
];

export const AVATAR_GROUP_PEOPLE = [
  {
    name: 'Leonard Krasner',
    username: '@leonardkrasner',
    image: PEOPLE[0].image
  },
  {
    name: 'Floyd Miles',
    username: '@floydmiles',
    image: PEOPLE[1].image
  },
  {
    name: 'Emily Selman',
    username: '@emilyselman',
    image: PEOPLE[2].image
  },
  {
    name: 'Kristin Watson',
    username: 'kristinwatson',
    image: PEOPLE[0].image
  }
];

export const CONTENT_LINKS = [
  {
    title: 'Gloria Roberston',
    time: '1d ago',
    content: 'Doloremque dolorem maiores assumenda dolorem facilis.',
    subTitle: 'Velit placeat sit ducimus non sed'
  },
  {
    title: 'Virginia Abshire',
    time: '2d ago',
    content:
      'Velit vel in a rerum natus facere. Enim rerum Doloremque dolorem maiores assumenda',
    subTitle: 'Nemo mollitia repudiandae adipisci explic'
  },
  {
    title: 'Kyle Gulgowski',
    time: '3d ago',
    content: 'Enim rerum, Doloremque dolorem maiores assumenda',
    subTitle: 'Doloremque reprehenderit et harum quas'
  },
  {
    title: 'Hattie Haag',
    time: '10d ago',
    content: 'Doloremque dolorem maiores assumenda',
    subTitle: 'Eos sequi et aut ex impedit'
  },
  {
    title:
      'Prabhakarna Sripalawardhana Atapattu Jayasuriya Laxmansriramkrishna Shivavenkata Rajasekara Sriniwasana Trichipalli Yekya Parampeel Parambatur Chinnaswami Muthuswami Venugopal Iyer',
    time: '20d ago',
    content:
      'Frequently abbreviated as Venugopal Iyer, this man grapples with a syndrome of excessively lengthy names. His moniker is so extensive that you might reach Goa before he completes his nickname.',
    subTitle: 'Quisquam veniam explicabo'
  },
  {
    title: 'Wilma Glover',
    time: '30d ago',
    content:
      'Velit vel in a rerum natus facere Doloremque dolorem maiores assumenda',
    subTitle: 'Quisquam veniam explicabo'
  }
];

export const CONTENT_LIST = [
  {
    title: 'Office closed on July 2nd',
    content: 'Cum qui rem deleniti.'
  },
  {
    title: 'New password policy',
    content: 'Alias inventore ut autem optio voluptas et repellendus.'
  },
  {
    title: 'Office closed on July 3nd',
    content:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem.'
  }
];
