module.exports = [
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          modules: true,
        },
      },
    },
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
];
