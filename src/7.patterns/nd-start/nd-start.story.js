import { html } from 'lit'
import './nd-start.js'

export default {
  title: 'Patterns/Start',
  component: 'nd-start',
  argTypes: {
    class: { control: 'text' },
    content: { control: 'text' },
  },
}

const Template = ({ class: className, content }) => html`
  <nd-start .class=${className} .content=${content}></nd-start>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  content: '<div>Content goes here</div>',
}
