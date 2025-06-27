import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../templates/_components/**/*.mdx',
    '../templates/_components/**/*.stories.@(json|yml)',
  ],
  addons: [
    '@storybook/addon-designs',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-webpack5-compiler-swc',
    // TODO: Update once this is supported!
    // '@etchteam/storybook-addon-marker',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/server-webpack5',
    options: {},
  },
};
export default config;
