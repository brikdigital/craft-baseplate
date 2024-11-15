/** @type {import('@storybook/server-webpack5').StorybookConfig} */
const config = {
  stories: [
    '../templates/_components/**/*.mdx',
    '../templates/_components/**/*.stories.@(json|yml)',
  ],
  addons: [
    '@storybook/addon-designs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/manager-api',
    '@storybook/theming',
    '@storybook/addon-a11y',
    '@storybook/blocks',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-swc',
  ],
  framework: {
    name: '@storybook/server-webpack5',
    options: {},
  },
  core: {
    // Disables telemetry https://storybook.js.org/telemetry
    disableTelemetry: true,
  },
  docs: {},
};

export default config;
