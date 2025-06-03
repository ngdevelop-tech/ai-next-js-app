const tailwindConfig = require('./tailwind.config');

module.exports = {
  extends: ['@browserstack/eslint-config'],
  rules: {
    'react/sort-prop-types': [
      2,
      {
        sortShapeProp: true
      }
    ]
  },
  settings: {
    tailwindcss: {
      config: tailwindConfig,
      whitelist: [
        'code-action-menu-container',
        'radix-portal-mention',
        'tabs-item',
        'animate-icon',
        'non-animate-icon'
      ]
    }
  },
  overrides: [
    {
      files: ['./modules/**/*', './shared/**/*'],
      rules: {
        'design-lint/no-hexcodes-allowed': 'off',
        'design-lint/no-margins-allowed': 'off',
        'design-lint/restrict-native-tags': 'off',
        'design-lint/restrict-standard-tokens': 'off',
        'design-lint/no-rgba-allowed': 'off'
      }
    }
  ]
};
