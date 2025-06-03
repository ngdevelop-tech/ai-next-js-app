import React from 'react';
import PropTypes from 'prop-types';

import { Button, TruncateText } from '../../../index';

export const SAMPLE_LIST_TREE_CHECKBOX_DATA = [
  {
    uuid: '0',
    name: 'file 1',
    isChecked: false,
    isIndeterminate: false,
    contents: [
      {
        uuid: '0-0',
        name: 'file 1a',
        isChecked: false,
        isIndeterminate: false,
        contents: null
      },
      {
        uuid: '0-1',
        name: 'file 1b',
        isChecked: false,
        isIndeterminate: false,
        contents: [
          {
            uuid: '0-1-0',
            name: 'file 1b1',
            isChecked: false,
            isIndeterminate: false,
            contents: null
          }
        ]
      }
    ]
  },
  {
    uuid: '1',
    name: 'file 2',
    isChecked: false,
    isIndeterminate: false,
    contents: [
      {
        uuid: '1-0',
        name: 'file 2a',
        isChecked: false,
        isIndeterminate: false,
        contents: null
      },
      {
        uuid: '1-1',
        name: 'file 2 john',
        isChecked: false,
        isIndeterminate: false,
        contents: [
          {
            uuid: '1-1-0',
            name: 'file 2b1',
            isChecked: false,
            isIndeterminate: false,
            contents: [
              {
                uuid: '1-1-0-0',
                name: 'file 2b1a john',
                isChecked: false,
                isIndeterminate: false,
                contents: [
                  {
                    uuid: '1-1-0-0-0',
                    name: 'file 2b1a1',
                    isChecked: false,
                    isIndeterminate: false,
                    contents: [
                      {
                        uuid: '1-1-0-0-0-0',
                        name: 'file somethng',
                        isChecked: false,
                        isIndeterminate: false,
                        contents: [
                          {
                            uuid: '1-1-0-0-0-0-0',
                            name: 'file some what',
                            isChecked: false,
                            isIndeterminate: false,
                            contents: [
                              {
                                uuid: '1-1-0-0-0-0-0-0',
                                name: 'file some wa',
                                isChecked: false,
                                isIndeterminate: false,
                                contents: [
                                  {
                                    uuid: '1-1-0-0-0-0-0-0-0',
                                    name: 'file 14',
                                    isChecked: false,
                                    isIndeterminate: false,
                                    contents: [
                                      {
                                        uuid: '1-1-0-0-0-0-0-0-0-0',
                                        name: 'file 97',
                                        isChecked: false,
                                        isIndeterminate: false,
                                        contents: [
                                          {
                                            uuid: '1-1-0-0-0-0-0-0-0-0-0',
                                            name: 'file 984',
                                            isChecked: false,
                                            isIndeterminate: false,
                                            contents: [
                                              {
                                                uuid: '1-1-0-0-0-0-0-0-0-0-0-0',
                                                name: 'file 12',
                                                isChecked: false,
                                                isIndeterminate: false,
                                                contents: [
                                                  {
                                                    uuid: '1-1-0-0-0-0-0-0-0-0-0-0-0',
                                                    name: 'file 124',
                                                    isChecked: false,
                                                    isIndeterminate: false,
                                                    contents: [
                                                      {
                                                        uuid: '1-1-0-0-0-0-0-0-0-0-0-0-0-0',
                                                        name: 'file 666',
                                                        isChecked: false,
                                                        isIndeterminate: false,
                                                        contents: [
                                                          {
                                                            uuid: '1-1-0-0-0-0-0-0-0-0-0-0-0-0-0',
                                                            name: 'file 86f',
                                                            isChecked: false,
                                                            isIndeterminate: false,
                                                            contents: [
                                                              {
                                                                uuid: '1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0',
                                                                name: 'file 754',
                                                                isChecked: false,
                                                                isIndeterminate: false,
                                                                contents: [
                                                                  {
                                                                    uuid: '1-1-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0',
                                                                    name: 'file 130s',
                                                                    isChecked: false,
                                                                    isIndeterminate: false
                                                                  }
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            uuid: '1-1-1',
            name: 'file 2b2',
            isChecked: false,
            isIndeterminate: false,
            contents: [
              {
                uuid: '1-1-1-0',
                name: 'file 2b2a',
                isChecked: false,
                isIndeterminate: false,
                contents: [
                  {
                    uuid: '1-1-1-0-0',
                    name: 'file 2b2a1',
                    isChecked: false,
                    isIndeterminate: false
                  }
                ]
              }
            ]
          },
          {
            uuid: '1-1-2',
            name: 'file 2b3',
            isChecked: false,
            isIndeterminate: false,
            contents: [
              {
                uuid: '1-1-2-0',
                name: 'file 2b3a',
                isChecked: false,
                isIndeterminate: false,
                contents: []
              },
              {
                uuid: '1-1-2-1',
                name: 'file 2b3b',
                isChecked: false,
                isIndeterminate: false,
                contents: []
              },
              {
                uuid: '1-1-2-2',
                name: 'file 2b3c',
                isChecked: false,
                isIndeterminate: false,
                contents: []
              }
            ]
          }
        ]
      },
      {
        uuid: '1-2',
        name: 'file 2c',
        isChecked: false,
        isIndeterminate: false,
        contents: null
      }
    ]
  },
  {
    uuid: '2',
    name: 'file 3 john',
    isChecked: false,
    isIndeterminate: false,
    contents: []
  },
  {
    uuid: '3',
    name: 'file 4',
    isChecked: false,
    isIndeterminate: false,
    contents: [
      {
        uuid: '3-0',
        name: 'file 4a',
        isChecked: false,
        isIndeterminate: false,
        contents: null
      },
      {
        uuid: '3-1',
        name: 'file 4 john',
        isChecked: false,
        isIndeterminate: false,
        contents: [
          {
            uuid: '3-1-0',
            name: 'file 4b1',
            isChecked: false,
            isIndeterminate: false,
            contents: [
              {
                uuid: '3-1-0-0',
                name: 'file 4b1a john',
                isChecked: false,
                isIndeterminate: false,
                contents: [
                  {
                    uuid: '3-1-0-0-0',
                    name: 'file 4b1a1',
                    isChecked: false,
                    isIndeterminate: false
                  }
                ]
              }
            ]
          },
          {
            uuid: '3-1-1',
            name: 'file 4b2',
            isChecked: false,
            isIndeterminate: false,
            contents: [
              {
                uuid: '3-1-1-0',
                name: 'file 4b2a',
                isChecked: false,
                isIndeterminate: false,
                contents: [
                  {
                    uuid: '3-1-1-0-0',
                    name: 'file 4b2a1',
                    isChecked: false,
                    isIndeterminate: false
                  }
                ]
              }
            ]
          },
          {
            uuid: '3-1-2',
            name: 'file 4b3',
            isChecked: false,
            isIndeterminate: false,
            contents: [
              {
                uuid: '3-1-2-0',
                name: 'file 4b3a',
                isChecked: false,
                isIndeterminate: false,
                contents: []
              },
              {
                uuid: '3-1-2-1',
                name: 'file 4b3b',
                isChecked: false,
                isIndeterminate: false,
                contents: []
              },
              {
                uuid: '3-1-2-2',
                name: 'file 4b3c',
                isChecked: false,
                isIndeterminate: false,
                contents: []
              }
            ]
          }
        ]
      },
      {
        uuid: '3-2',
        name: 'file 4c',
        isChecked: false,
        isIndeterminate: false,
        contents: null
      }
    ]
  }
];

export const DROPDOWN_OPTIONS = [
  {
    id: '1',
    body: 'Edit'
  },
  {
    id: '2',
    body: 'Duplicate',
    divider: false
  },
  {
    id: '3',
    body: 'Archive',
    divider: true
  }
];

export const LIST_TREE_DEMO_DATA_SET = [
  {
    uuid: '0',
    name: (
      <TruncateText tooltipAriaLabel="File A" wrapperClassName="line-clamp-1">
        file A
      </TruncateText>
    ),
    label: 'file A',
    contents: [
      {
        name: (
          <TruncateText
            wrapperClassName="line-clamp-1"
            tooltipAriaLabel="File A-1 Long Description"
          >
            file A-1 Really long file name case. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </TruncateText>
        ),
        label:
          'file A-1 Really long file name case. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been sthe industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but  also the leap into electronic typesetting, remaining essentially unchanged.',
        uuid: '0-0',
        contents: []
      },
      {
        uuid: '0-1',
        name: (
          <TruncateText
            isWidthAdjustable
            wrapperClassName="line-clamp-1"
            tooltipAriaLabel="File A-2"
          >
            file A-2 Really long file name case. Lorem Ipsum is simply dummy
            text of the printing
          </TruncateText>
        ),
        label:
          'file A-2 Really long file name case. Lorem Ipsum is simply dummy text of the printing',
        contents: [
          {
            uuid: '0-1-0',
            name: (
              <TruncateText
                isWidthAdjustable
                wrapperClassName="line-clamp-1"
                tooltipAriaLabel="File A-2-a"
              >
                file A-2-a Really long file name case. Lorem Ipsum is simply
                dummy text
              </TruncateText>
            ),
            label:
              'file A-2 Really long file name case. Lorem Ipsum is simply dummy text',
            contents: null
          }
        ]
      }
    ]
  },
  {
    uuid: '1',
    name: (
      <TruncateText wrapperClassName="line-clamp-1" tooltipAriaLabel="File B">
        file B
      </TruncateText>
    ),
    label: 'file B',
    contents: [
      {
        uuid: '1-0',
        name: (
          <TruncateText
            wrapperClassName="line-clamp-1"
            tooltipAriaLabel="File B-1"
          >
            file B-1 Really long file name case. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </TruncateText>
        ),
        label:
          'file B-1 Really long file name case. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        contents: null
      },
      {
        uuid: '1-1',
        name: (
          <TruncateText
            tooltipAriaLabel="File B-2"
            wrapperClassName="line-clamp-1"
          >
            file B-2
          </TruncateText>
        ),
        label: 'file B-2',
        contents: [
          {
            uuid: '1-1-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File B-2-a"
                wrapperClassName="line-clamp-1"
              >
                file B-2-a Really short file name case.
              </TruncateText>
            ),
            contents: null
          }
        ]
      },
      {
        uuid: '1-2',
        name: (
          <TruncateText
            tooltipAriaLabel="File B-3"
            wrapperClassName="line-clamp-1"
          >
            file B-3
          </TruncateText>
        ),
        label: 'file B-3',
        contents: [
          {
            uuid: '1-2-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File B-3-a"
                wrapperClassName="line-clamp-1"
              >
                file B-3-a
              </TruncateText>
            ),
            label: 'file B-3-a',
            contents: null
          },
          {
            uuid: '1-2-1',
            name: (
              <TruncateText
                tooltipAriaLabel="File B-3-b"
                wrapperClassName="line-clamp-1"
              >
                file B-3-b
              </TruncateText>
            ),
            label: 'file B-3-b',
            contents: null
          }
        ]
      }
    ]
  }
];

export const LIST_TREE_DEMO_DATA_SET_LARGE = [
  {
    uuid: '0',
    name: (
      <TruncateText tooltipAriaLabel="Folder 0" wrapperClassName="line-clamp-1">
        Folder 0
      </TruncateText>
    ),
    label: 'Folder 0',
    contents: [
      {
        uuid: '0-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 0-0"
            wrapperClassName="line-clamp-1"
          >
            File 0-0
          </TruncateText>
        ),
        label: 'File 0-0',
        contents: []
      },
      {
        uuid: '0-1',
        name: (
          <TruncateText
            tooltipAriaLabel="File 0-1"
            wrapperClassName="line-clamp-1"
          >
            File 0-1
          </TruncateText>
        ),
        label: 'File 0-1',
        contents: [
          {
            uuid: '0-1-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File 0-1-0"
                wrapperClassName="line-clamp-1"
              >
                File 0-1-0
              </TruncateText>
            ),
            contents: []
          }
        ]
      }
    ]
  },
  {
    uuid: '1',
    name: (
      <TruncateText tooltipAriaLabel="Folder 1" wrapperClassName="line-clamp-1">
        Folder 1
      </TruncateText>
    ),
    label: 'Folder 1',
    contents: [
      {
        uuid: '1-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 1-0"
            wrapperClassName="line-clamp-1"
          >
            File 1-0
          </TruncateText>
        ),
        label: 'File 1-0',
        contents: []
      }
    ]
  },
  {
    uuid: '2',
    name: (
      <TruncateText tooltipAriaLabel="Folder 2" wrapperClassName="line-clamp-1">
        Folder 2
      </TruncateText>
    ),
    label: 'Folder 2',
    contents: [
      {
        uuid: '2-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 2-0"
            wrapperClassName="line-clamp-1"
          >
            File 2-0
          </TruncateText>
        ),
        label: 'File 2-0',
        contents: []
      },
      {
        uuid: '2-1',
        name: (
          <TruncateText
            tooltipAriaLabel="File 2-1"
            wrapperClassName="line-clamp-1"
          >
            File 2-1
          </TruncateText>
        ),
        label: 'File 2-1',
        contents: [
          {
            uuid: '2-1-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File 2-1-0"
                wrapperClassName="line-clamp-1"
              >
                File 2-1-0
              </TruncateText>
            ),
            contents: []
          }
        ]
      }
    ]
  },
  {
    uuid: '3',
    name: (
      <TruncateText tooltipAriaLabel="Folder 3" wrapperClassName="line-clamp-1">
        Folder 3
      </TruncateText>
    ),
    label: 'Folder 3',
    contents: [
      {
        uuid: '3-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 3-0"
            wrapperClassName="line-clamp-1"
          >
            File 3-0
          </TruncateText>
        ),
        label: 'File 3-0',
        contents: []
      }
    ]
  },
  {
    uuid: '4',
    name: (
      <TruncateText tooltipAriaLabel="Folder 4" wrapperClassName="line-clamp-1">
        Folder 4
      </TruncateText>
    ),
    label: 'Folder 4',
    contents: [
      {
        uuid: '4-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 4-0"
            wrapperClassName="line-clamp-1"
          >
            File 4-0
          </TruncateText>
        ),
        label: 'File 4-0',
        contents: []
      },
      {
        uuid: '4-1',
        name: (
          <TruncateText
            tooltipAriaLabel="File 4-1"
            wrapperClassName="line-clamp-1"
          >
            File 4-1
          </TruncateText>
        ),
        label: 'File 4-1',
        contents: [
          {
            uuid: '4-1-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File 4-1-0"
                wrapperClassName="line-clamp-1"
              >
                File 4-1-0
              </TruncateText>
            ),
            contents: []
          }
        ]
      }
    ]
  },
  {
    uuid: '5',
    name: (
      <TruncateText tooltipAriaLabel="Folder 5" wrapperClassName="line-clamp-1">
        Folder 5
      </TruncateText>
    ),
    label: 'Folder 5',
    contents: [
      {
        uuid: '5-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 5-0"
            wrapperClassName="line-clamp-1"
          >
            File 5-0
          </TruncateText>
        ),
        label: 'File 5-0',
        contents: []
      }
    ]
  },
  {
    uuid: '6',
    name: (
      <TruncateText tooltipAriaLabel="Folder 6" wrapperClassName="line-clamp-1">
        Folder 6
      </TruncateText>
    ),
    label: 'Folder 6',
    contents: [
      {
        uuid: '6-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 6-0"
            wrapperClassName="line-clamp-1"
          >
            File 6-0
          </TruncateText>
        ),
        label: 'File 6-0',
        contents: [
          {
            uuid: '6-0-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File 6-0-0"
                wrapperClassName="line-clamp-1"
              >
                File 6-0-0
              </TruncateText>
            ),
            contents: []
          }
        ]
      }
    ]
  },
  {
    uuid: '7',
    name: (
      <TruncateText tooltipAriaLabel="Folder 7" wrapperClassName="line-clamp-1">
        Folder 7
      </TruncateText>
    ),
    label: 'Folder 7',
    contents: [
      {
        uuid: '7-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 7-0"
            wrapperClassName="line-clamp-1"
          >
            File 7-0
          </TruncateText>
        ),
        label: 'File 7-0',
        contents: []
      }
    ]
  },
  {
    uuid: '8',
    name: (
      <TruncateText tooltipAriaLabel="Folder 8" wrapperClassName="line-clamp-1">
        Folder 8
      </TruncateText>
    ),
    label: 'Folder 8',
    contents: [
      {
        uuid: '8-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 8-0"
            wrapperClassName="line-clamp-1"
          >
            File 8-0
          </TruncateText>
        ),
        label: 'File 8-0',
        contents: []
      }
    ]
  },
  {
    uuid: '9',
    name: (
      <TruncateText tooltipAriaLabel="Folder 9" wrapperClassName="line-clamp-1">
        Folder 9
      </TruncateText>
    ),
    label: 'Folder 9',
    contents: [
      {
        uuid: '9-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 9-0"
            wrapperClassName="line-clamp-1"
          >
            File 9-0
          </TruncateText>
        ),
        label: 'File 9-0',
        contents: []
      },
      {
        uuid: '9-1',
        name: (
          <TruncateText
            tooltipAriaLabel="File 9-1"
            wrapperClassName="line-clamp-1"
          >
            File 9-1
          </TruncateText>
        ),
        label: 'File 9-1',
        contents: []
      }
    ]
  },
  {
    uuid: '10',
    name: (
      <TruncateText
        tooltipAriaLabel="Folder 10"
        wrapperClassName="line-clamp-1"
      >
        Folder 10
      </TruncateText>
    ),
    label: 'Folder 10',
    contents: [
      {
        uuid: '10-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 10-0"
            wrapperClassName="line-clamp-1"
          >
            File 10-0
          </TruncateText>
        ),
        label: 'File 10-0',
        contents: [
          {
            uuid: '10-0-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File 10-0-0"
                wrapperClassName="line-clamp-1"
              >
                File 10-0-0
              </TruncateText>
            ),
            contents: []
          }
        ]
      }
    ]
  },
  {
    uuid: '11',
    name: (
      <TruncateText
        tooltipAriaLabel="Folder 11"
        wrapperClassName="line-clamp-1"
      >
        Folder 11
      </TruncateText>
    ),
    label: 'Folder 11',
    contents: [
      {
        uuid: '11-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 11-0"
            wrapperClassName="line-clamp-1"
          >
            File 11-0
          </TruncateText>
        ),
        label: 'File 11-0',
        contents: []
      },
      {
        uuid: '11-1',
        name: (
          <TruncateText
            tooltipAriaLabel="File 11-1"
            wrapperClassName="line-clamp-1"
          >
            File 11-1
          </TruncateText>
        ),
        label: 'File 11-1',
        contents: [
          {
            uuid: '11-1-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File 11-1-0"
                wrapperClassName="line-clamp-1"
              >
                File 11-1-0
              </TruncateText>
            ),
            contents: []
          }
        ]
      }
    ]
  },
  {
    uuid: '12',
    name: (
      <TruncateText
        tooltipAriaLabel="Folder 12"
        wrapperClassName="line-clamp-1"
      >
        Folder 12
      </TruncateText>
    ),
    label: 'Folder 12',
    contents: [
      {
        uuid: '12-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 12-0"
            wrapperClassName="line-clamp-1"
          >
            File 12-0
          </TruncateText>
        ),
        label: 'File 12-0',
        contents: []
      }
    ]
  },
  {
    uuid: '13',
    name: (
      <TruncateText
        tooltipAriaLabel="Folder 13"
        wrapperClassName="line-clamp-1"
      >
        Folder 13
      </TruncateText>
    ),
    label: 'Folder 13',
    contents: [
      {
        uuid: '13-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 13-0"
            wrapperClassName="line-clamp-1"
          >
            File 13-0
          </TruncateText>
        ),
        label: 'File 13-0',
        contents: [
          {
            uuid: '13-0-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File 13-0-0"
                wrapperClassName="line-clamp-1"
              >
                File 13-0-0
              </TruncateText>
            ),
            contents: []
          }
        ]
      }
    ]
  },
  {
    uuid: '14',
    name: (
      <TruncateText
        tooltipAriaLabel="Folder 14"
        wrapperClassName="line-clamp-1"
      >
        Folder 14
      </TruncateText>
    ),
    label: 'Folder 14',
    contents: [
      {
        uuid: '14-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 14-0"
            wrapperClassName="line-clamp-1"
          >
            File 14-0
          </TruncateText>
        ),
        label: 'File 14-0',
        contents: []
      },
      {
        uuid: '14-1',
        name: (
          <TruncateText
            tooltipAriaLabel="File 14-1"
            wrapperClassName="line-clamp-1"
          >
            File 14-1
          </TruncateText>
        ),
        label: 'File 14-1',
        contents: [
          {
            uuid: '14-1-0',
            name: (
              <TruncateText
                tooltipAriaLabel="File 14-1-0"
                wrapperClassName="line-clamp-1"
              >
                File 14-1-0
              </TruncateText>
            ),
            contents: []
          }
        ]
      }
    ]
  },
  {
    uuid: '15',
    name: (
      <TruncateText
        tooltipAriaLabel="Folder 15"
        wrapperClassName="line-clamp-1"
      >
        Folder 15
      </TruncateText>
    ),
    label: 'Folder 15',
    contents: [
      {
        uuid: '15-0',
        name: (
          <TruncateText
            tooltipAriaLabel="File 15-0"
            wrapperClassName="line-clamp-1"
          >
            File 15-0
          </TruncateText>
        ),
        label: 'File 15-0',
        contents: []
      }
    ]
  }
];

export const DATA_ITEM_PROP_TYPES = {
  contents: PropTypes.arrayOf(PropTypes.shape({})),
  isChecked: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
  name: PropTypes.node,
  uuid: PropTypes.string
};

export const TABLE_COLUMNS = [
  {
    name: 'Name',
    key: 'name',
    isSortable: true
  },
  {
    name: 'Title',
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

export const TABLE_ROWS = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
    id: 1
  },
  {
    name: 'Courtney Henry',
    title: 'Designer',
    email: 'courtney.henry@example.com',
    role: 'Admin',
    id: 2
  },
  {
    name: 'Dan Adams',
    title: 'Back-end Developer',
    email: 'dan.adams@example.com',
    role: 'Supervisor',
    id: 3
  },
  {
    name: 'John Doe',
    title: 'Front-end Developer',
    email: 'john.doe@example.com',
    role: 'Supervisor',
    id: 4
  },
  {
    name: 'Ross Geller',
    title: 'Full Developer',
    email: 'ross.geller@example.com',
    role: 'Supervisor',
    id: 5
  }
];

export const TABLE_DROP_TEXT = {
  MOVE_TEST_CASES: 'Move Test Cases',
  COPY_TEST_CASES: 'Copy Test Cases'
};
