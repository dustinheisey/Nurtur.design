import remarkGfm from 'remark-gfm'

export default {
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  stories: ['../src/**/*.mdx', '../**/*.story.js'],
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    'storybook-design-token',
    '@etchteam/storybook-addon-status',
    '@storybook/addon-themes',
    '@storybook/addon-viewport',
    'storybook-addon-pseudo-states',
    '@chromatic-com/storybook',

    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
}
