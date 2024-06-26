import { html } from 'lit'
import './nd-footer.js'

export default {
  title: 'Patterns/Footer',
  component: 'nd-footer',
  argTypes: {
    class: { control: 'text' },
    config: { control: 'object' },
  },
}

const Template = ({ class: className, config }) => html`
  <nd-footer .class=${className} .config=${config}></nd-footer>
`

export const Default = Template.bind({})
Default.args = {
  class: 'custom-class',
  config: {
    footer: {
      variant: 'newsletter',
      mission: 'Our mission is to provide...',
      newsletter: {
        headline: 'Subscribe to our newsletter',
        body: 'Stay updated with our latest news and offers.',
      },
      groups: [
        {
          title: 'Group 1',
          links: [
            { url: '#', label: 'Link 1' },
            { url: '#', label: 'Link 2' },
          ],
        },
        {
          title: 'Group 2',
          links: [
            { url: '#', label: 'Link 3' },
            { url: '#', label: 'Link 4' },
          ],
        },
      ],
      carbon: true,
      social: [
        { url: '#', label: 'Facebook', icon: '<svg></svg>' },
        { url: '#', label: 'Twitter', icon: '<svg></svg>' },
      ],
      copywrite: '© 2023 Your Company',
    },
  },
}
