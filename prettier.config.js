module.exports = {
	...require('eslint-config-dmitmel/prettier.config.js'),

	useTabs: true,

	plugins: ['prettier-plugin-tailwindcss'],

	// prettier-plugin-tailwindcss
	tailwindStylesheet: './src/pcss/app.pcss',
	tailwindConfig: './tailwind.config.ts',
};
