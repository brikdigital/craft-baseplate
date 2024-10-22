module.exports = {
  ...require('eslint-config-dmitmel/prettier.config.js'),
  plugins: ['prettier-plugin-tailwindcss', '@destination/prettier-plugin-twig'],
  indentSchema: true,
  overrides: [
    {
      files: '*.twig',
      options: {
        tabWidth: 4,
      },
    },
  ],
};
