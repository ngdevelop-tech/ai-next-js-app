const tailwindConfig = require('./tailwind.config');

module.exports = {
  extends: ['@browserstack/eslint-config', 'plugin:storybook/recommended'],
  rules: {
    'tailwindcss/no-custom-classname': [
      2,
      {
        config: tailwindConfig
      }
    ]
  },
  parserOptions: {
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['./src/**/*'],
      rules: {
        'design-lint/no-hexcodes-allowed': 'off',
        'design-lint/no-margins-allowed': 'off',
        'design-lint/restrict-native-tags': 'off'
      }
    }
  ]
};
