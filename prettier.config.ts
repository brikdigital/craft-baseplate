import cfg from 'eslint-config-dmitmel/prettier.config.js';

export default {
	...cfg,

	useTabs: true,

	plugins: ['prettier-plugin-tailwindcss', '@ttskch/prettier-plugin-tailwindcss-anywhere'],

	// prettier-plugin-tailwindcss
	// tailwindStylesheet: './src/pcss/app.pcss',
	tailwindConfig: './tailwind.config.ts',

	overrides: [
		{
			files: '*.twig',
			options: {
				parser: 'anywhere',
			},
		},
	],
};
