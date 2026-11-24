import cfg from 'eslint-config-dmitmel/prettier.config.js';

export default {
	...cfg,

	useTabs: true,

	plugins: ['prettier-plugin-tailwindcss', '@ttskch/prettier-plugin-tailwindcss-anywhere'],

	// prettier-plugin-tailwindcss
	tailwindStylesheet: './src/styles/app.css',

	overrides: [
		{
			files: '*.twig',
			options: {
				parser: 'anywhere',
			},
		},
	],
};
