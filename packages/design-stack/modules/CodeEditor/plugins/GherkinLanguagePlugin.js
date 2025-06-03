const KEYBARD_FEATURE = 'keyword.feature';

const createMonarchTokens = () => ({
  defaultToken: '',
  tokenizer: {
    root: [
      // Section keywords (Feature, Background, Scenario, etc.)
      [
        /^(\s*)(Feature|Background|Scenario|Scenario Outline|Examples)(?=:)/,
        ['', KEYBARD_FEATURE]
      ],
      [
        /^(\s*)(Feature|Background|Scenario|Scenario Outline|Examples):/,
        ['', KEYBARD_FEATURE]
      ],

      // Step keywords
      [/^(\s*)(Given|When|Then|And|But)(\s)/, ['', 'keyword.step', '']],

      // Parameters in angle brackets
      [/<[^>]+>/, 'parameter'],

      // Double-quoted strings
      [/"[^"]*"/, 'string'],

      // Tags
      [/@[\w-]+/, 'tag'],

      // Comments
      [/#.*$/, 'comment'],

      // Table borders
      [/\|/, 'delimiter'],

      // Numbers (in tables or elsewhere)
      [/\b\d+\.?\d*\b/, 'number'],

      // Table cells (lowest priority)
      [/(?<=\|)[^|]+(?=\|)/, 'identifier']
    ]
  }
});

const createEditorTheme = () => ({
  base: 'vs',
  inherit: true,
  rules: [
    // Section keywords (Feature, Background, Scenario, etc.)
    { token: 'keyword.feature', foreground: '0000FF' },

    // Step keywords
    { token: 'keyword.step', foreground: '800080' },

    // Parameters
    { token: 'parameter', foreground: 'CD6600', fontStyle: 'italic' },

    // Strings
    { token: 'string', foreground: '008000' },

    // Tags
    { token: 'tag', foreground: '008080', fontStyle: 'italic' },

    // Comments
    { token: 'comment', foreground: '008000', fontStyle: 'italic' },

    // Table elements
    { token: 'delimiter', foreground: '666666' },
    { token: 'identifier', foreground: '333333' },

    // Numbers
    { token: 'number', foreground: '0000FF' }
  ],
  colors: {
    'editor.foreground': '#000000',
    'editor.background': '#FFFFFF'
  }
});

/**
 * @type {import('../types/plugin').EditorPlugin}
 */
const gherkinPlugin = {
  id: 'gherkin-language-plugin',
  name: 'Gherkin Language Support',
  description: 'Provides Gherkin language support with custom suggestions',

  storage: new WeakMap(),

  initialize(editor, monaco) {
    this.storage.set(this, { editor, monaco });

    if (
      !monaco.languages.getLanguages().some((lang) => lang.id === 'gherkin')
    ) {
      this.setupLanguage(monaco);
    }

    this.registerCompletionProvider(monaco);
  },

  setupLanguage(monaco) {
    monaco.languages.register({ id: 'gherkin' });
    monaco.languages.setMonarchTokensProvider('gherkin', createMonarchTokens());
    monaco.editor.defineTheme('gherkin-theme', createEditorTheme());
  },

  registerCompletionProvider(monaco) {
    monaco.languages.registerCompletionItemProvider('gherkin', {
      triggerCharacters: ['G', 'W', 'T', 'A', 'B', 'F', 'S', ' ', '"', '<'],
      provideCompletionItems: (model, position) => {
        const lineContent = model.getLineContent(position.lineNumber);
        const suggestions = [];

        // Section keyword suggestions
        if (/^\s*[FSBE]/i.test(lineContent)) {
          [
            'Feature:',
            'Background:',
            'Scenario:',
            'Scenario Outline:',
            'Examples:'
          ].forEach((keyword) => {
            suggestions.push({
              label: keyword,
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: keyword,
              documentation: `Add ${keyword.slice(0, -1)} section`
            });
          });
        }

        // Step keyword suggestions
        if (/^\s*[GWTAB]/i.test(lineContent)) {
          ['Given ', 'When ', 'Then ', 'And ', 'But '].forEach((keyword) => {
            suggestions.push({
              label: keyword.trim(),
              kind: monaco.languages.CompletionItemKind.Keyword,
              insertText: keyword,
              documentation: `Add ${keyword.trim()} step`
            });
          });
        }

        // Parameter suggestions
        if (lineContent.endsWith('<')) {
          ['product', 'code', 'percentage', 'pageName'].forEach((param) => {
            suggestions.push({
              label: param,
              kind: monaco.languages.CompletionItemKind.Variable,
              insertText: `${param}>`,
              documentation: `Insert ${param} parameter`
            });
          });
        }

        return { suggestions };
      }
    });
  },

  onMount(editor) {
    editor.updateOptions({
      theme: 'gherkin-theme',
      tabSize: 2,
      insertSpaces: true,
      quickSuggestions: { other: true, comments: true, strings: true },
      suggestOnTriggerCharacters: true
    });
  },

  dispose() {
    this.storage.delete(this);
  },

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description
    };
  }
};

export default gherkinPlugin;
