export default {
  stories: ['../src/**/*.mdx', '../**/*.story.js'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    'storybook-design-token',
    '@etchteam/storybook-addon-status',
    '@storybook/addon-themes',
    '@storybook/addon-viewport',
    'storybook-addon-pseudo-states',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
}
