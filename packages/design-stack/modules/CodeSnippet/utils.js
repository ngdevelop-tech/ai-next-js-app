import {
  CODE_VIEW,
  COLOR_SHADES,
  HIGHLIGHT_TYPE,
  VIEW_SHADES
} from './constants/codeSnippet';

export const convertRangeToArray = (range) => {
  const [start, end] = range.split('-').map(Number);

  if (start <= end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  return [];
};

// isNaN and Number.isNan behave differently
// eslint-disable-next-line no-restricted-globals
export const isNumber = (str) => !isNaN(str);

export const copyToClipboard = (text) => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
};

export const borderConst = (type) =>
  `1px solid ${COLOR_SHADES[type].DARK_COLOR}`;
export const borderTransparent = () => `1px solid transparent`;

export const getLineNumberStyle = ({ n, view, showLineNumbers, highlight }) => {
  const commonStyles = {
    minWidth: '36px',
    width: '36px',
    textAlign: 'center',
    padding: 0,
    marginRight: '16px',
    borderRight: `1px solid var(--border-neutral-strong)`,
    ...((view === CODE_VIEW.DANGER || view === CODE_VIEW.ATTENTION) && {
      borderRight: `1px solid ${VIEW_SHADES[view].BACKGROUND_BORDER_COLOR}`,
      background: 'var(--bg-neutral-default)'
    }),
    fontSize: '14px'
  };
  if (view === CODE_VIEW.NEUTRAL && showLineNumbers) {
    const lineNumberStyles = {
      [HIGHLIGHT_TYPE.NEUTRAL]: {
        background: COLOR_SHADES.neutral.LIGHT_COLOR,
        color: COLOR_SHADES.neutral.TEXT_COLOR,
        ...commonStyles,
        borderRight: `1px solid ${COLOR_SHADES.neutral.DARK_COLOR}`
      },
      [HIGHLIGHT_TYPE.DANGER]: {
        background: COLOR_SHADES.danger.LIGHT_COLOR,
        color: COLOR_SHADES.danger.TEXT_COLOR,
        ...commonStyles,
        borderRight: `1px solid ${COLOR_SHADES.danger.DARK_COLOR}`
      },
      [HIGHLIGHT_TYPE.ATTENTION]: {
        background: COLOR_SHADES.attention.LIGHT_COLOR,
        color: COLOR_SHADES.attention.TEXT_COLOR,
        ...commonStyles,
        borderRight: `1px solid ${COLOR_SHADES.attention.DARK_COLOR}`
      },
      [`${HIGHLIGHT_TYPE.NEUTRAL}-animate`]: {
        ...commonStyles,
        animation: 'neutral-lineNumberAnimate 2s ease-in-out'
      },
      [`${HIGHLIGHT_TYPE.DANGER}-animate`]: {
        ...commonStyles,
        animation: 'danger-lineNumberAnimate 2s ease-in-out'
      },
      [`${HIGHLIGHT_TYPE.ATTENTION}-animate`]: {
        ...commonStyles,
        animation: 'attention-lineNumberAnimate 2s ease-in-out'
      }
    };

    const lineNumbersByType = highlight.reduce(
      (lineNumbers, { range, type, animation = false }) => {
        const lineNumber = Number(range);

        const requiredType = animation ? `${type}-animate` : type;
        if (isNumber(range)) {
          lineNumbers[requiredType].push(lineNumber);
        } else if (range.includes('-')) {
          lineNumbers[requiredType].push(...convertRangeToArray(range));
        }

        return lineNumbers;
      },
      {
        [HIGHLIGHT_TYPE.NEUTRAL]: [],
        [HIGHLIGHT_TYPE.DANGER]: [],
        [HIGHLIGHT_TYPE.ATTENTION]: [],
        [`${HIGHLIGHT_TYPE.NEUTRAL}-animate`]: [],
        [`${HIGHLIGHT_TYPE.DANGER}-animate`]: [],
        [`${HIGHLIGHT_TYPE.ATTENTION}-animate`]: []
      }
    );

    const result = Object.entries(lineNumbersByType).find((data) =>
      data[1].includes(n)
    );

    if (result) {
      const [type] = result;
      return lineNumberStyles[type];
    }

    return {
      ...commonStyles
    };
  }
  return { ...commonStyles };
};

export const getLineProps = ({ n, view, showLineNumbers, highlight }) => {
  const style = {};

  const normalStyle = (lineNumber, lineNumbersRange, { range, type }) => {
    if (isNumber(range) && lineNumber === n) {
      style.display = 'table';
      style.width = '100%';
      style.borderTop = borderConst(type);
      style.borderBottom = borderConst(type);
    } else if (lineNumbersRange[0] === n) {
      style.display = 'table';
      style.width = '100%';
      style.borderTop = borderConst(type);
    } else if (lineNumbersRange[lineNumbersRange.length - 1] === n) {
      style.display = 'table';
      style.width = '100%';
      style.borderBottom = borderConst(type);
    }
  };

  const animationStyle = (lineNumber, lineNumbersRange, { range, type }) => {
    if (isNumber(range) && lineNumber === n) {
      style.display = 'table';
      style.width = '100%';
      style.animation = `${type}-lineAnimate1 2s ease-in-out`;
    } else if (lineNumbersRange[0] === n) {
      style.display = 'table';
      style.width = '100%';
      style.animation = `${type}-lineAnimate2 2s ease-in-out`;
    } else if (lineNumbersRange[lineNumbersRange.length - 1] === n) {
      style.display = 'table';
      style.width = '100%';
      style.animation = `${type}-lineAnimate3 2s ease-in-out`;
    }
  };

  if (view === CODE_VIEW.NEUTRAL && showLineNumbers) {
    highlight.forEach(({ range, type, animation = false }) => {
      const lineNumber = Number(range);
      const lineNumbersRange = convertRangeToArray(range);

      const styleFunction = animation ? animationStyle : normalStyle;
      styleFunction(lineNumber, lineNumbersRange, {
        range,
        type
      });
    });
  }

  return { style };
};
