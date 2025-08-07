import { defineMain } from '@storybook/server-webpack5/node';

export default defineMain({
	core: (config) => {
		if (!config) return;
		config.disableTelemetry = true;
		return config;
	},
	stories: [
		'../templates/_components/**/*.mdx',
		'../templates/_components/**/*.stories.@(json|yml|ts|tsx)',
	],
	addons: [
		'@storybook/addon-designs',
		'@storybook/addon-links',
		'@storybook/addon-a11y',
		'@storybook/addon-webpack5-compiler-swc',
		'@etchteam/storybook-addon-marker',
		'@storybook/addon-docs',
	],
	framework: {
		name: '@storybook/server-webpack5',
		options: {},
	},
});
