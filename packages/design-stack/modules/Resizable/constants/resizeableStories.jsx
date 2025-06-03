import React from 'react';

import { TruncateText } from '../../../index';

export const RESIZEABLE_LISTTREE_DEMO = [
  {
    name: 'file A',
    contents: [
      {
        name: (
          <TruncateText wrapperClassName="line-clamp-1">
            file A-1 Really long file name case. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industrys standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged.
          </TruncateText>
        ),
        contents: null
      },
      {
        name: 'file A-2',
        contents: [
          {
            name: 'file A-2-a',
            contents: null
          }
        ]
      }
    ]
  },
  {
    name: 'file 2',
    contents: [
      {
        name: 'file 2a',
        contents: null
      },
      {
        name: 'file 2b',
        contents: [
          {
            name: 'file 2b1',
            contents: null
          }
        ]
      }
    ]
  }
];
