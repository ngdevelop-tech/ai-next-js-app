import { CODE_VIEW } from '../../CodeSnippet/constants/codeSnippet';

export const TOOLBAR_COLOR_CLASSES = {
  [CODE_VIEW.NEUTRAL]: {},
  [CODE_VIEW.DANGER]: {
    BACKGROUND_COLOR: 'bg-danger-weakest'
  },
  [CODE_VIEW.ATTENTION]: {
    BACKGROUND_COLOR: 'bg-attention-weakest'
  }
};
