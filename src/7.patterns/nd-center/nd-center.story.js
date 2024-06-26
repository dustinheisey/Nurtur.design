import { html } from 'lit'
import './nd-center.js'

export default {
  title: 'Patterns/Center',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-center',
  argTypes: {
    theme: { control: 'text' },
    text: { control: 'text' },
    align: { control: 'text' },
    class: { control: 'text' },
    content: { control: 'object' },
  },
}

const Template = ({ theme, text, align, class: className, content }) => html`
  <nd-center
    .theme=${theme}
    .text=${text}
    .align=${align}
    .class=${className}
    .content=${content}
  ></nd-center>
`

export const Default = Template.bind({})
Default.args = {
  theme: 'background',
  text: 'center',
  align: 'center',
  class: 'custom-class',
  content: html`
    <h1>Centered Content</h1>
    <p>This is a paragraph of centered content.</p>
    <button>Click Me</button>
  `,
}
