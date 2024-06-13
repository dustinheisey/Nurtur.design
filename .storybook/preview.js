// import { setCustomElements } from '@storybook/web-components'
// import customElements from '../custom-elements.json'

// setCustomElements(customElements)

import '../src/2.global/global.css'
import '../src/2.global/reset.css'
import '../src/2.global/accessibility.css'
import '../src/2.global/utilities.css'

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
}
