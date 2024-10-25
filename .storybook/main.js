/** @type {import('@storybook/server-webpack5').StorybookConfig} */
const config = {
  stories: [
    '../templates/components/**/*.mdx',
    '../templates/components/**/*.stories.@(json|yml)',
  ],
  addons: [
    '@storybook/addon-designs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/manager-api',
    '@storybook/theming',
    '@storybook/addon-a11y',
    '@storybook/blocks',
  ],
  framework: {
    name: '@storybook/server-webpack5',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true, // Disables telemetry https://storybook.js.org/telemetry
  },
  docs: {},
};

export default config;
