import { html } from 'lit'
import './nd-input-group.js'

export default {
  title: 'Components/Input Group',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = () => html` <nd-input-group></nd-input-group> `

export const Default = Template.bind({})
