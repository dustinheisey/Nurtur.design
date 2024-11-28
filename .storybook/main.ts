import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.story.@(ts|mdx)', '../src/stories/*.stories.ts'],
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-dark-mode'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  }
};
export default config;
