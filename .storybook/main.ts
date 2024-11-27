import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.story.@(js|jsx|mjs|ts|mdx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  }
};
export default config;
