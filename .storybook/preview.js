// import { setCustomElements } from '@storybook/web-components'
// import customElements from '../custom-elements.json'

// setCustomElements(customElements)

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}
