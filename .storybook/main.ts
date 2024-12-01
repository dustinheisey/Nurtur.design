import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: [
    '../src/foundations/*.story.mdx',
    '../src/tokens/**/*.story.mdx',
    '../src/elements/**/*.story.ts',
    '../src/layouts/**/*.story.ts',
    '../src/workflows/*.story.mdx'
  ],
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
