const BACKGROUND_PRIMARY = 'var(--code-snippet-bg-primary)';
const BACKGROUND_2 = 'var(--code-snippet-bg-2)';
const BACKGROUND_3 = 'var(--code-snippet-bg-3)';
const BACKGROUND_4 = 'var(--code-snippet-bg-4)';
const BACKGROUND_5 = 'var(--code-snippet-bg-5)';

const PRIMARY_TEXT = 'var(--code-snippet-text-primary)';
const SECONDARY_TEXT = 'var(--code-snippet-text-secondary)';
const SYNTAX_1 = 'var(--code-snippet-syntax-1)';
const SYNTAX_2 = 'var(--code-snippet-syntax-2)';
const SYNTAX_3 = 'var(--code-snippet-syntax-3)';
const SYNTAX_4 = 'var(--code-snippet-syntax-4)';
const SYNTAX_5 = 'var(--code-snippet-syntax-5)';
const SYNTAX_6 = 'var(--code-snippet-syntax-6)';
const SYNTAX_7 = 'var(--code-snippet-syntax-7)';
const SYNTAX_8 = 'var(--code-snippet-syntax-8)';
const SYNTAX_9 = 'var(--code-snippet-syntax-9)';

const PADDING_1 = '0.1em 0.4em';

const BORDER_COLOR_1 = 'var(--code-snippet-border-1)';

export default {
  'code[class*="language-"]': {
    background: BACKGROUND_PRIMARY,
    color: PRIMARY_TEXT,
    fontFamily:
      '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    background: BACKGROUND_PRIMARY,
    color: PRIMARY_TEXT,
    fontFamily:
      '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    direction: 'ltr',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    lineHeight: '1.5rem',
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    overflow: 'auto',
    borderRadius: '0.3em'
  },
  'code[class*="language-"]::-moz-selection': {
    background: BACKGROUND_PRIMARY,
    color: 'inherit'
  },
  'code[class*="language-"] *::-moz-selection': {
    background: BACKGROUND_PRIMARY,
    color: 'inherit'
  },
  'pre[class*="language-"] *::-moz-selection': {
    background: BACKGROUND_PRIMARY,
    color: 'inherit'
  },
  'code[class*="language-"]::selection': {
    background: BACKGROUND_PRIMARY,
    color: 'inherit'
  },
  'code[class*="language-"] *::selection': {
    background: BACKGROUND_PRIMARY,
    color: 'inherit'
  },
  'pre[class*="language-"] *::selection': {
    background: BACKGROUND_PRIMARY,
    color: 'inherit'
  },
  ':not(pre) > code[class*="language-"]': {
    padding: '0.2em 0.3em',
    borderRadius: '0.3em',
    whiteSpace: 'normal'
  },
  comment: {
    color: SECONDARY_TEXT
  },
  prolog: {
    color: SECONDARY_TEXT
  },
  cdata: {
    color: SECONDARY_TEXT
  },
  doctype: {
    color: PRIMARY_TEXT
  },
  punctuation: {
    color: PRIMARY_TEXT
  },
  entity: {
    color: PRIMARY_TEXT,
    cursor: 'help'
  },
  'attr-name': {
    color: SYNTAX_1
  },
  'class-name': {
    color: SYNTAX_1
  },
  boolean: {
    color: SYNTAX_1
  },
  constant: {
    color: SYNTAX_1
  },
  number: {
    color: SYNTAX_1
  },
  atrule: {
    color: SYNTAX_1
  },
  keyword: {
    color: SYNTAX_2
  },
  property: {
    color: SYNTAX_3
  },
  tag: {
    color: SYNTAX_3
  },
  symbol: {
    color: SYNTAX_3
  },
  deleted: {
    color: SYNTAX_3
  },
  important: {
    color: SYNTAX_3
  },
  selector: {
    color: SYNTAX_7
  },
  string: {
    color: SYNTAX_7
  },
  char: {
    color: SYNTAX_7
  },
  builtin: {
    color: SYNTAX_7
  },
  inserted: {
    color: SYNTAX_7
  },
  regex: {
    color: SYNTAX_7
  },
  'attr-value': {
    color: SYNTAX_7
  },
  'attr-value > .token.punctuation': {
    color: SYNTAX_7
  },
  variable: {
    color: SYNTAX_5
  },
  operator: {
    color: SYNTAX_5
  },
  function: {
    color: SYNTAX_5
  },
  url: {
    color: SYNTAX_6
  },
  'attr-value > .token.punctuation.attr-equals': {
    color: PRIMARY_TEXT
  },
  'special-attr > .token.attr-value > .token.value.css': {
    color: PRIMARY_TEXT
  },
  '.language-css .token.selector': {
    color: SYNTAX_3
  },
  '.language-css .token.property': {
    color: PRIMARY_TEXT
  },
  '.language-css .token.function': {
    color: SYNTAX_6
  },
  '.language-css .token.url > .token.function': {
    color: SYNTAX_6
  },
  '.language-css .token.url > .token.string.url': {
    color: SYNTAX_7
  },
  '.language-css .token.important': {
    color: SYNTAX_2
  },
  '.language-css .token.atrule .token.rule': {
    color: SYNTAX_2
  },
  '.language-javascript .token.operator': {
    color: SYNTAX_2
  },
  '.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation':
    {
      color: SYNTAX_4
    },
  '.language-json .token.operator': {
    color: PRIMARY_TEXT
  },
  '.language-json .token.null.keyword': {
    color: SYNTAX_1
  },
  '.language-markdown .token.url': {
    color: PRIMARY_TEXT
  },
  '.language-markdown .token.url > .token.operator': {
    color: PRIMARY_TEXT
  },
  '.language-markdown .token.url-reference.url > .token.string': {
    color: PRIMARY_TEXT
  },
  '.language-markdown .token.url > .token.content': {
    color: SYNTAX_5
  },
  '.language-markdown .token.url > .token.url': {
    color: SYNTAX_6
  },
  '.language-markdown .token.url-reference.url': {
    color: SYNTAX_6
  },
  '.language-markdown .token.blockquote.punctuation': {
    color: SECONDARY_TEXT,
    fontStyle: 'italic'
  },
  '.language-markdown .token.hr.punctuation': {
    color: SECONDARY_TEXT,
    fontStyle: 'italic'
  },
  '.language-markdown .token.code-snippet': {
    color: SYNTAX_7
  },
  '.language-markdown .token.bold .token.content': {
    color: SYNTAX_1
  },
  '.language-markdown .token.italic .token.content': {
    color: SYNTAX_2
  },
  '.language-markdown .token.strike .token.content': {
    color: SYNTAX_3
  },
  '.language-markdown .token.strike .token.punctuation': {
    color: SYNTAX_3
  },
  '.language-markdown .token.list.punctuation': {
    color: SYNTAX_3
  },
  '.language-markdown .token.title.important > .token.punctuation': {
    color: SYNTAX_3
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  },
  namespace: {
    Opacity: '0.8'
  },
  'token.tab:not(:empty):before': {
    color: SYNTAX_8
  },
  'token.cr:before': {
    color: SYNTAX_8
  },
  'token.lf:before': {
    color: SYNTAX_8
  },
  'token.space:before': {
    color: SYNTAX_8
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item': {
    marginRight: '0.4em'
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button': {
    background: BACKGROUND_PRIMARY,
    color: SYNTAX_9,
    padding: PADDING_1,
    borderRadius: '0.3em'
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a': {
    background: BACKGROUND_PRIMARY,
    color: SYNTAX_9,
    padding: PADDING_1,
    borderRadius: '0.3em'
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span': {
    background: BACKGROUND_PRIMARY,
    color: SYNTAX_9,
    padding: PADDING_1,
    borderRadius: '0.3em'
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover': {
    background: BACKGROUND_3,
    color: PRIMARY_TEXT
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus': {
    background: BACKGROUND_3,
    color: PRIMARY_TEXT
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover': {
    background: BACKGROUND_3,
    color: PRIMARY_TEXT
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus': {
    background: BACKGROUND_3,
    color: PRIMARY_TEXT
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover': {
    background: BACKGROUND_3,
    color: PRIMARY_TEXT
  },
  'div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus': {
    background: BACKGROUND_3,
    color: PRIMARY_TEXT
  },
  '.line-highlight.line-highlight': {
    background: 'hsla(230, 8%, 24%, 0.05)'
  },
  '.line-highlight.line-highlight:before': {
    background: BACKGROUND_PRIMARY,
    color: PRIMARY_TEXT,
    padding: '0.1em 0.6em',
    borderRadius: '0.3em',
    boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.2)'
  },
  '.line-highlight.line-highlight[data-end]:after': {
    background: BACKGROUND_PRIMARY,
    color: PRIMARY_TEXT,
    padding: '0.1em 0.6em',
    borderRadius: '0.3em',
    boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.2)'
  },
  'pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before':
    {
      backgroundColor: 'hsla(230, 8%, 24%, 0.05)'
    },
  '.line-numbers.line-numbers .line-numbers-rows': {
    borderRightColor: SYNTAX_8
  },
  '.command-line .command-line-prompt': {
    borderRightColor: SYNTAX_8
  },
  '.rainbow-braces .token.token.punctuation.brace-level-1': {
    color: SYNTAX_3
  },
  '.rainbow-braces .token.token.punctuation.brace-level-5': {
    color: SYNTAX_3
  },
  '.rainbow-braces .token.token.punctuation.brace-level-9': {
    color: SYNTAX_3
  },
  '.rainbow-braces .token.token.punctuation.brace-level-2': {
    color: SYNTAX_7
  },
  '.rainbow-braces .token.token.punctuation.brace-level-6': {
    color: SYNTAX_7
  },
  '.rainbow-braces .token.token.punctuation.brace-level-10': {
    color: SYNTAX_7
  },
  '.rainbow-braces .token.token.punctuation.brace-level-3': {
    color: SYNTAX_5
  },
  '.rainbow-braces .token.token.punctuation.brace-level-7': {
    color: SYNTAX_5
  },
  '.rainbow-braces .token.token.punctuation.brace-level-11': {
    color: SYNTAX_5
  },
  '.rainbow-braces .token.token.punctuation.brace-level-4': {
    color: SYNTAX_2
  },
  '.rainbow-braces .token.token.punctuation.brace-level-8': {
    color: SYNTAX_2
  },
  '.rainbow-braces .token.token.punctuation.brace-level-12': {
    color: SYNTAX_2
  },
  'pre.diff-highlight > code .token.token.deleted:not(.prefix)': {
    backgroundColor: 'hsla(353, 100%, 66%, 0.15)'
  },
  'pre > code.diff-highlight .token.token.deleted:not(.prefix)': {
    backgroundColor: 'hsla(353, 100%, 66%, 0.15)'
  },
  'pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection':
    {
      backgroundColor: BACKGROUND_4
    },
  'pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection':
    {
      backgroundColor: BACKGROUND_4
    },
  'pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection':
    {
      backgroundColor: BACKGROUND_4
    },
  'pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection':
    {
      backgroundColor: BACKGROUND_4
    },
  'pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection': {
    backgroundColor: BACKGROUND_4
  },
  'pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection': {
    backgroundColor: BACKGROUND_4
  },
  'pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection': {
    backgroundColor: BACKGROUND_4
  },
  'pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection': {
    backgroundColor: BACKGROUND_4
  },
  'pre.diff-highlight > code .token.token.inserted:not(.prefix)': {
    backgroundColor: 'hsla(137, 100%, 55%, 0.15)'
  },
  'pre > code.diff-highlight .token.token.inserted:not(.prefix)': {
    backgroundColor: 'hsla(137, 100%, 55%, 0.15)'
  },
  'pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection':
    {
      backgroundColor: BACKGROUND_5
    },
  'pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection':
    {
      backgroundColor: BACKGROUND_5
    },
  'pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection':
    {
      backgroundColor: BACKGROUND_5
    },
  'pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection':
    {
      backgroundColor: BACKGROUND_5
    },
  'pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection': {
    backgroundColor: BACKGROUND_5
  },
  'pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection': {
    backgroundColor: BACKGROUND_5
  },
  'pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection': {
    backgroundColor: BACKGROUND_5
  },
  'pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection': {
    backgroundColor: BACKGROUND_5
  },
  '.prism-previewer.prism-previewer:before': {
    borderColor: BORDER_COLOR_1
  },
  '.prism-previewer-gradient.prism-previewer-gradient div': {
    borderColor: BORDER_COLOR_1,
    borderRadius: '0.3em'
  },
  '.prism-previewer-color.prism-previewer-color:before': {
    borderRadius: '0.3em'
  },
  '.prism-previewer-easing.prism-previewer-easing:before': {
    borderRadius: '0.3em'
  },
  '.prism-previewer.prism-previewer:after': {
    borderTopColor: BORDER_COLOR_1
  },
  '.prism-previewer-flipped.prism-previewer-flipped.after': {
    borderBottomColor: BORDER_COLOR_1
  },
  '.prism-previewer-angle.prism-previewer-angle:before': {
    background: BACKGROUND_2
  },
  '.prism-previewer-time.prism-previewer-time:before': {
    background: BACKGROUND_2
  },
  '.prism-previewer-easing.prism-previewer-easing': {
    background: BACKGROUND_2
  },
  '.prism-previewer-angle.prism-previewer-angle circle': {
    stroke: PRIMARY_TEXT,
    strokeOpacity: '1'
  },
  '.prism-previewer-time.prism-previewer-time circle': {
    stroke: PRIMARY_TEXT,
    strokeOpacity: '1'
  },
  '.prism-previewer-easing.prism-previewer-easing circle': {
    stroke: PRIMARY_TEXT,
    fill: 'transparent'
  },
  '.prism-previewer-easing.prism-previewer-easing path': {
    stroke: PRIMARY_TEXT
  },
  '.prism-previewer-easing.prism-previewer-easing line': {
    stroke: PRIMARY_TEXT
  }
};
