// import { setCustomElements } from '@storybook/web-components'
// import customElements from '../custom-elements.json'

// setCustomElements(customElements)

import '../src/2.global/global.css'
import '../src/2.global/reset.css'

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    storySort: [
      'Principles',
      'Tokens',
      'Elements',
      'Layouts',
      'Components',
      'Screens',
      'Views',
    ],
    designToken: {
      disable: true,
    },
  },
}
