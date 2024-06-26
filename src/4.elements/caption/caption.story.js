import { html } from 'lit'
import './caption.css'

export default {
  title: 'Elements/Caption',
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html` <p class="caption">${args.text}</p> `

export const Default = Template.bind({})
Default.args = { text: 'This is a default caption.' }
