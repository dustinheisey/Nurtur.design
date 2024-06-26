// import { setCustomElements } from '@storybook/web-components'
// import customElements from '../custom-elements.json'

// setCustomElements(customElements)

import '../src/1.global/global.css'
import '../src/1.global/reset.css'
import '../src/1.global/accessibility.css'
import '../src/1.global/utilities.css'

import '../src/2.tokens/border-radius/border-radius.css'
import '../src/2.tokens/color/color.css'
import '../src/2.tokens/media/media.css'
import '../src/2.tokens/shadows/shadows.css'
import '../src/2.tokens/spacing/spacing.css'
import '../src/2.tokens/transition/transition.css'
import '../src/2.tokens/typography/typography.css'
import '../src/2.tokens/z-index/z-index.css'

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    options: {
      storySort: {
        method: '',
        order: [
          'Principles',
          'Tokens',
          'Utilities',
          'Elements',
          'Layouts',
          'Components',
          'Patterns',
        ],
        locales: '',
      },
    },
    designToken: {
      disable: true,
    },
    darkMode: {
      darkClass: 'mode-dark',
      lightClass: 'mode-light',
      stylePreview: true,
    },
    status: {
      statuses: {
        released: {
          background: '#0000ff',
          color: '#ffffff',
          description: 'This component is stable and released',
        },
      },
    },
  },

  tags: ['autodocs'],
}
