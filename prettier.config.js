module.exports = {
  ...require('eslint-config-dmitmel/prettier.config.js'),
  overrides: [
    {
      files: '*.twig',
      options: {
        tabWidth: 4,
      },
    },
  ],
};
