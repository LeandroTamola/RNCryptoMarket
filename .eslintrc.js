module.exports = {
  root: true,
  extends: '@react-native-community',
  ignorePatterns: ['node_modules/*', '!.prettierrc.js'],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        curly: 'off',
        'react/no-unstable-nested-components': 'off',
      },
    },
  ],
};
