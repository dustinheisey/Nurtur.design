import { html } from 'lit'
import './nd-strip.js'

export default {
  title: 'Components/Strip',
  component: 'nd-strip',
  argTypes: {
    items: { control: 'object' },
  },
}

const Template = ({ items }) => html` <nd-strip .items=${items}></nd-strip> `

export const Default = Template.bind({})
Default.args = {
  items: [
    { headline: 'Item 1', body: 'Description for item 1.' },
    { headline: 'Item 2', body: 'Description for item 2.' },
    { headline: 'Item 3', body: 'Description for item 3.' },
    { headline: 'Item 4', body: 'Description for item 4.' },
  ],
}
