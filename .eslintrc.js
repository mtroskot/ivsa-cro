module.exports = {
  root: true,
  extends: ['@react-native-community', 'eslint:recommended'],
  rules: {
    'react/prop-types': [2, { ignore: ['navigation'] }],
    'comma-dangle': [1, 'never'],
    'max-len': [2, { code: 120 }],
    'no-restricted-imports': [2, { patterns: ['./*', '../*'] }],
    'no-undef': [2],
    'react/forbid-prop-types': [
      2,
      { forbid: ['any', 'array', 'object'], checkContextTypes: true, checkChildContextTypes: true }
    ],
    'no-unused-vars': [2, { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/no-unused-prop-types': [2],
    'react/require-default-props': [1, { forbidDefaultForRequired: true }]
  }
};
