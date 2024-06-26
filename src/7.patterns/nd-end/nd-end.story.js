import { html } from 'lit'
import './nd-end.js'

export default {
  title: 'Patterns/End',
  component: 'nd-end',
  argTypes: {
    class: { control: 'text' },
    content: { control: 'object' },
  },
}

const Template = ({ class: className, content }) => html`
  <nd-end .class=${className} .content=${content}></nd-end>
`

export const Default = Template.bind({})
Default.args = {
  class: 'custom-class',
  content: html`
    <h1>End Aligned Content</h1>
    <p>This is a paragraph of end-aligned content.</p>
    <button>Click Me</button>
  `,
}
