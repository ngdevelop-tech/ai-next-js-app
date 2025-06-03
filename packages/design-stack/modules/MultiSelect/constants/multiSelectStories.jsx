import React from "react";
import {
  MdAndroid as AndroidIcon,
  MdFolder as FolderIcon,
  MdPhoneIphone as IPhoneIcon,
} from "react-icons/md";
import DSIChrome from "@/packages/design-stack-icons/src/DSIChrome";
import DSIEdge from "@/packages/design-stack-icons/src/DSIEdge";
import DSIFirefox from "@/packages/design-stack-icons/src/DSIFirefox";
import DSISamsungInternet from "@/packages/design-stack-icons/src/DSISamsungInternet";
import DSIWindows from "@/packages/design-stack-icons/src/DSIWindows";

const EdgeIcon = DSIEdge;
const FirefoxIcon = DSIFirefox;

// Data needs to be in this format for default type i.e
// [
//   {
//     id: '1',
//     title: 'Level 1',
//     icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
//     subCategories: [
//       {
//         id: '1.1',
//         title: 'Level 1 Option 1',
//         icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
//         subCategories: [
//           {
//             id: '1.1.1',
//             title: 'Level 1 Option 1 SubLevel 1',
//             <FolderIcon className="h-5 w-5 icon-neutral-weaker" />
//           }
//         ]
//       }
//     ]
//   }
// ]

const DATA = [
  {
    id: "1",
    title: "Automation",
    icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
    subCategories: [
      {
        id: "1.1",
        title: "src 1",
        icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
        subCategories: [
          {
            id: "1.1.1",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "afterScenario 1 test1",
            details: "TC-495495",
          },
          {
            id: "1.1.2",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "beforeScenario 1",
            details: "TC-495496",
          },
          {
            id: "1.1.3",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "exitflow 1",
            details: "TC-495497",
          },
        ],
      },
      {
        id: "1.2",
        title: "test 1",
        icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
        subCategories: [
          {
            id: "1.2.1",
            title: "setup 1",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            details: "TC-495498",
          },
          {
            id: "1.2.2",
            title: "setup config 1",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            details: "TC-495499",
          },
          {
            id: "1.2.3",
            title: "loginflow 1",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            details: "TC-495500",
          },
        ],
      },
      {
        id: "1.3",
        title: "dist 1",
        icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
        subCategories: [
          {
            id: "1.3.1",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "prod sanity 1",
            details: "TC-495501",
          },
          {
            id: "1.3.2",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "WDIO 1",
            details: "TC-495502",
          },
          {
            id: "1.3.3",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "Observability tests 1",
            details: "TC-495503",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Manual",
    icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
    subCategories: [
      {
        id: "2.1",
        title: "src 2",
        icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
        subCategories: [
          {
            id: "2.1.1",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "afterScenario 2",
          },
          {
            id: "2.1.2",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "beforeScenario 2",
          },
          {
            id: "2.1.3",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "exitflow 2",
          },
        ],
      },
      {
        id: "2.2",
        title: "test 2",
        icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
        subCategories: [
          {
            id: "2.2.1",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "setup 2",
          },
          {
            id: "2.2.2",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "setup config 2",
          },
          {
            id: "2.2.3",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "loginflow 2",
          },
        ],
      },
      {
        id: "2.3",
        title: "dist 2",
        icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
        subCategories: [
          {
            id: "2.3.1",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "prod sanity 2",
          },
          {
            id: "2.3.2",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "WDIO 2",
          },
          {
            id: "2.3.3",
            icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
            title: "Observability tests 2",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Advanced",
    icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
    subCategories: [
      {
        id: "3.1",
        title: "src 3",
      },
      {
        id: "3.2",
        title: "test 3",
      },
      {
        id: "3.3",
        title: "dist 3",
      },
    ],
  },
];
const CHROME_128 = "Chrome 128 Beta";
const CHROME_127 = "Chrome 127";
const CHROME_126 = "Chrome 126";
const CHROME_125 = "Chrome 125";
const CHROME_124 = "Chrome 124";
const CHROME_123 = "Chrome 123";
const CHROME_122 = "Chrome 122";
const CHROME_121 = "Chrome 121";
const CHROME_120 = "Chrome 120";
const CHROME_119 = "Chrome 119";
const CHROME_118 = "Chrome 118";
const CHROME_117 = "Chrome 117";
const CHROME_116 = "Chrome 116";

// Data needs to be in this format for advanced type i.e with triggerLabel and triggerIcon for each item, pass them empty or null if you want to skip them in MultiSelectTrigger
// [
//   {
//     id: '1',
//     title: 'Level 1',
//     icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
//     subCategories: [
//       {
//         id: '1.1',
//         title: 'Option 1',
//         icon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
//     triggerLabel: 'Level 1 Option 1',
//     triggerIcon: <FolderIcon className="h-5 w-5 icon-neutral-weaker" />,
//      hasScrollHelper: true,
//         subCategories: [
//           {
//             id: '1.1.1',
//             title: 'Level 1 Option 1 SubLevel 1',
//      hasScrollHelper: true,
//             <FolderIcon className="h-5 w-5 icon-neutral-weaker" />
//           }
//         ]
//       }
//     ]
//   }
// ]

const ADVANCED_DATA = [
  {
    id: "2",
    title: "Android",
    icon: <AndroidIcon className="h-5 w-5" />,
    triggerLabel: "Android",
    triggerIcon: <AndroidIcon className="h-5 w-5" />,
    subCategories: [
      {
        id: "2.1",
        title: "Samsung",
        hasScrollHelper: true,
        subCategories: [
          {
            hasScrollHelper: true,
            id: "2.1.1",
            title: "Galaxy S Series",
            icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
            subCategories: [
              {
                id: "2.1.1.1",
                title: "Galaxy S22 Ultra",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy S22 Ultra",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                  {
                    icon: <DSISamsungInternet className="h-5 w-5" />,
                    value: "Samsung",
                  },
                ],
                details: "16",
              },
              {
                id: "2.1.1.2",
                title: "Galaxy S22 Pro",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy S22 Pro",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                  {
                    icon: <DSISamsungInternet className="h-5 w-5" />,
                    value: "Samsung",
                  },
                ],
                details: "16",
              },
              {
                id: "2.1.1.3",
                title: "Galaxy S22",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy S22",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                  {
                    icon: <DSISamsungInternet className="h-5 w-5" />,
                    value: "Samsung",
                  },
                ],
                details: "15",
              },
            ],
          },
          {
            hasScrollHelper: true,
            id: "2.1.2",
            title: "Galaxy Note Series",
            icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
            subCategories: [
              {
                id: "2.1.2.1",
                title: "Galaxy Note Ultra",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy Note Ultra",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                  {
                    icon: <DSISamsungInternet className="h-5 w-5" />,
                    value: "Samsung",
                  },
                ],
                details: "16",
              },
              {
                id: "2.1.2.2",
                title: "Galaxy Note Pro",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy Note Pro",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                  {
                    icon: <DSISamsungInternet className="h-5 w-5" />,
                    value: "Samsung",
                  },
                ],
                details: "16",
              },
              {
                id: "2.1.2.3",
                title: "Galaxy Note",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy Note",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                  {
                    icon: <DSISamsungInternet className="h-5 w-5" />,
                    value: "Samsung",
                  },
                ],
                details: "15",
              },
            ],
          },
          {
            id: "2.1.3",
            title: "Galaxy Tab Series",
            icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
            hasScrollHelper: true,
            subCategories: [
              {
                id: "2.1.3.1",
                title: "Galaxy Tab Ultra",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy Tab Ultra",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                  {
                    icon: <DSISamsungInternet className="h-5 w-5" />,
                    value: "Samsung",
                  },
                ],
                details: "16",
              },
              {
                id: "2.1.3.2",
                title: "Galaxy Tab Pro",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy Tab Pro",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
                details: "15",
              },
              {
                id: "2.1.3.3",
                title: "Galaxy Tab",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Galaxy Tab",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                details: "14",
              },
            ],
          },
        ],
      },
      {
        id: "2.2",
        title: "Google",
        hasScrollHelper: true,
        subCategories: [
          {
            id: "2.2.1",
            title: "Pixel Series",
            icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
            hasScrollHelper: true,
            subCategories: [
              {
                id: "2.2.1.1",
                title: "Pixel 10",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Pixel 10",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
              },
              {
                id: "2.2.1.2",
                title: "Pixel 9",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Pixel 9",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
              },
              {
                id: "2.2.1.3",
                title: "Pixel 8",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                triggerLabel: "Pixel 8",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "2.3",
        title: "OnePlus",
        hasScrollHelper: true,
        subCategories: [
          {
            hasScrollHelper: true,
            id: "2.3.1",
            icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
            subCategories: [
              {
                id: "2.3.1.1",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
                title: "OnePlus Note 10",
                triggerLabel: "OnePlus Note 10",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
              },
              {
                id: "2.3.1.2",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
                title: "OnePlus Note 9",
                triggerLabel: "OnePlus Note 9",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
              },
              {
                id: "2.3.3.3",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
                title: "OnePlus Note 8",
                triggerLabel: "OnePlus Note 8",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
              },
            ],
            title: "Note Series",
          },
          {
            hasScrollHelper: true,
            id: "2.3.2",
            icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
            subCategories: [
              {
                id: "2.3.2.1",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
                title: "OnePlus Nord 10",
                triggerLabel: "OnePlus Nord 10",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
              },
              {
                id: "2.3.2.2",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
                title: "OnePlus Nord 9",
                triggerLabel: "OnePlus Nord 9",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
              },
              {
                id: "2.3.3.3",
                icon: <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />,
                actionIcons: [
                  { icon: <DSIChrome className="h-5 w-5" />, value: "chrome" },
                ],
                title: "OnePlus Nord 8",
                triggerLabel: "OnePlus Nord 8",
                triggerIcon: (
                  <IPhoneIcon className="h-5 w-5 icon-neutral-weaker" />
                ),
              },
            ],
            title: "Nord Series",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Windows",
    icon: <DSIWindows className="h-5 w-5" />,
    subCategories: [
      {
        id: "3.1",
        title: "Windows 11",
        triggerLabel: "Windows 11",
        triggerIcon: <DSIWindows className="h-5 w-5" />,
        subCategories: [
          {
            id: "3.1.1",
            title: "Chrome",
            icon: <DSIChrome className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.1.1.1",
                title: "128 Beta",
                triggerLabel: CHROME_128,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.2",
                title: "127",
                triggerLabel: CHROME_127,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.3",
                title: "126",
                triggerLabel: CHROME_126,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.4",
                title: "125",
                triggerLabel: CHROME_125,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.5",
                title: "124",
                triggerLabel: CHROME_124,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.6",
                title: "123",
                triggerLabel: CHROME_123,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.7",
                title: "122",
                triggerLabel: CHROME_122,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.8",
                title: "121",
                triggerLabel: CHROME_121,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.9",
                title: "120",
                triggerLabel: CHROME_120,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.10",
                title: "119",
                triggerLabel: CHROME_119,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.11",
                title: "118",
                triggerLabel: CHROME_118,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.12",
                title: "117",
                triggerLabel: CHROME_117,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.13",
                title: "116",
                triggerLabel: CHROME_116,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.14",
                title: "117",
                triggerLabel: CHROME_117,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.1.1.15",
                title: "116",
                triggerLabel: CHROME_116,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
            ],
          },
          {
            id: "3.1.2",
            title: "Edge",
            icon: <EdgeIcon className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.1.2.1",
                title: "90",
                triggerLabel: "Edge 90",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.1.2.2",
                title: "89",
                triggerLabel: "Edge 89",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.1.2.3",
                title: "87",
                triggerLabel: "Edge 87",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.1.2.4",
                title: "86",
                triggerLabel: "Edge 86",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.1.2.5",
                title: "85",
                triggerLabel: "Edge 85",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.1.2.6",
                title: "84",
                triggerLabel: "Edge 84",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.1.2.7",
                title: "83",
                triggerLabel: "Edge 83",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.1.2.8",
                title: "82",
                triggerLabel: "Edge 82",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
            ],
          },
          {
            id: "3.3.3",
            title: "Firefox",
            icon: <FirefoxIcon className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.3.3.1",
                title: "60",
                triggerLabel: "Firefox 60",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.2",
                title: "59",
                triggerLabel: "Firefox 59",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.3",
                title: "58",
                triggerLabel: "Firefox 58",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.4",
                title: "57",
                triggerLabel: "Firefox 57",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.5",
                title: "56",
                triggerLabel: "Firefox 56",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
            ],
          },
        ],
      },
      {
        id: "3.2",
        title: "Windows 10",
        triggerLabel: "Windows 10",
        triggerIcon: <DSIWindows className="h-5 w-5" />,
        subCategories: [
          {
            id: "3.2.1",
            title: "Chrome",
            icon: <DSIChrome className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.2.1.1",
                title: "128 Beta",
                triggerLabel: CHROME_128,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.2",
                title: "127",
                triggerLabel: CHROME_127,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.3",
                title: "126",
                triggerLabel: CHROME_126,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.4",
                title: "125",
                triggerLabel: CHROME_125,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.5",
                title: "124",
                triggerLabel: CHROME_124,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.6",
                title: "123",
                triggerLabel: CHROME_123,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.7",
                title: "122",
                triggerLabel: CHROME_122,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.8",
                title: "121",
                triggerLabel: CHROME_121,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.9",
                title: "120",
                triggerLabel: CHROME_120,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.10",
                title: "119",
                triggerLabel: CHROME_119,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.11",
                title: "118",
                triggerLabel: CHROME_118,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.12",
                title: "117",
                triggerLabel: CHROME_117,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.13",
                title: "116",
                triggerLabel: CHROME_116,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.14",
                title: "117",
                triggerLabel: CHROME_117,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.2.1.15",
                title: "116",
                triggerLabel: CHROME_116,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
            ],
          },
          {
            id: "3.2.2",
            title: "Edge",
            icon: <EdgeIcon className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.2.2.1",
                title: "90",
                triggerLabel: "Edge 90",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.2.2.2",
                title: "89",
                triggerLabel: "Edge 89",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.2.2.3",
                title: "87",
                triggerLabel: "Edge 87",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.2.2.4",
                title: "86",
                triggerLabel: "Edge 86",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.2.2.5",
                title: "85",
                triggerLabel: "Edge 85",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.2.2.6",
                title: "84",
                triggerLabel: "Edge 84",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.2.2.7",
                title: "83",
                triggerLabel: "Edge 83",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.2.2.8",
                title: "82",
                triggerLabel: "Edge 82",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
            ],
          },
          {
            id: "3.3.3",
            title: "Firefox",
            icon: <FirefoxIcon className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.3.3.1",
                title: "50",
                triggerLabel: "Firefox 50",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.2",
                title: "49",
                triggerLabel: "Firefox 49",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.3",
                title: "48",
                triggerLabel: "Firefox 48",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.4",
                title: "47",
                triggerLabel: "Firefox 47",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.5",
                title: "46",
                triggerLabel: "Firefox 46",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
            ],
          },
        ],
      },
      {
        id: "3.3",
        title: "Windows 8",
        triggerLabel: "Windows 8",
        triggerIcon: <DSIWindows className="h-5 w-5" />,
        subCategories: [
          {
            id: "3.3.1",
            title: "Chrome",
            icon: <DSIChrome className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.3.1.1",
                title: "128 Beta",
                triggerLabel: CHROME_128,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.2",
                title: "127",
                triggerLabel: CHROME_127,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.3",
                title: "126",
                triggerLabel: CHROME_126,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.4",
                title: "125",
                triggerLabel: CHROME_125,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.5",
                title: "124",
                triggerLabel: CHROME_124,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.6",
                title: "123",
                triggerLabel: CHROME_123,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.7",
                title: "122",
                triggerLabel: CHROME_122,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.8",
                title: "121",
                triggerLabel: CHROME_121,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.9",
                title: "120",
                triggerLabel: CHROME_120,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.10",
                title: "119",
                triggerLabel: CHROME_119,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.11",
                title: "118",
                triggerLabel: CHROME_118,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.12",
                title: "117",
                triggerLabel: CHROME_117,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.13",
                title: "116",
                triggerLabel: CHROME_116,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.14",
                title: "117",
                triggerLabel: CHROME_117,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
              {
                id: "3.3.1.15",
                title: "116",
                triggerLabel: CHROME_116,
                triggerIcon: <DSIChrome className="h-5 w-5" />,
              },
            ],
          },
          {
            id: "3.3.2",
            title: "Edge",
            icon: <EdgeIcon className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.3.2.1",
                title: "90",
                triggerLabel: "Edge 90",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.2.2",
                title: "89",
                triggerLabel: "Edge 89",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.3",
                title: "87",
                triggerLabel: "Edge 87",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.2.4",
                title: "86",
                triggerLabel: "Edge 86",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.2.5",
                title: "85",
                triggerLabel: "Edge 85",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.2.6",
                title: "84",
                triggerLabel: "Edge 84",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.2.7",
                title: "83",
                triggerLabel: "Edge 83",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.2.8",
                title: "82",
                triggerLabel: "Edge 82",
                triggerIcon: <EdgeIcon className="h-5 w-5" />,
              },
            ],
          },
          {
            id: "3.3.3",
            title: "Firefox",
            icon: <FirefoxIcon className="h-5 w-5" />,
            subCategories: [
              {
                id: "3.3.3.1",
                title: "50",
                triggerLabel: "Firefox 50",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.2",
                title: "49",
                triggerLabel: "Firefox 49",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.3",
                title: "48",
                triggerLabel: "Firefox 48",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.4",
                title: "47",
                triggerLabel: "Firefox 47",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
              {
                id: "3.3.3.5",
                title: "46",
                triggerLabel: "Firefox 46",
                triggerIcon: <FirefoxIcon className="h-5 w-5" />,
              },
            ],
          },
        ],
      },
    ],
  },
];

export { ADVANCED_DATA, DATA };
