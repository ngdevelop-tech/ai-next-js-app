const textColor = 'text-neutral-default';
const editorTheme = {
  base: 'vs',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '708090', fontStyle: 'italic' },
    { token: 'keyword', foreground: '07a' },
    { token: 'string', foreground: '690' },
    { token: 'number', foreground: '905' },
    { token: 'tag', foreground: '905' },
    { token: 'attribute.name', foreground: '690' },
    { token: 'attribute.value', foreground: '07a' },
    { token: 'delimiter', foreground: '999' },
    { token: 'function', foreground: 'dd4a68' }
  ],
  colors: {
    'editor.background': '#ffffff',
    'editor.foreground': textColor, // textColor
    'editor.lineHighlightBackground': 'bg-neutral-weakest', // bg-neutral-weakest
    'editor.selectionBackground': '#b4d7ff',
    'editorCursor.foreground': textColor, // textColor
    'editorLineNumber.foreground': 'text-neutral-weak', // text-neutral-weak
    'editorLineNumber.activeForeground': textColor, // textColor
    'editor.selectionHighlightBackground': 'bg-brand-weakest' // bg-brand-weakest
  }
};

export default editorTheme;
