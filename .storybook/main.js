const config = {
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
  ]
};

export default config;