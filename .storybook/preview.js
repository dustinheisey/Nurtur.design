import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
// import "../../styles/index.min.css";

// import '../../src/1.global/global.css'
// import '../../src/1.global/reset.css'
// import '../../src/1.global/accessibility.css'
// import '../../src/1.global/utilities.css'

// import '../../src/2.tokens/tokens.css'

export default {
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    options: {
      storySort: {
        order: [
          'Foundations',
          'Tokens',
          'Utilities',
          'Elements',
          'Layouts',
          'Components',
          'Regions',
        ],
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: { disable: true },
  },
  tags: ['autodocs'],
}
