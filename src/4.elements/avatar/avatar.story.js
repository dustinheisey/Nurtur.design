import { html } from 'lit'
import './avatar.css'

export default {
  title: 'Elements/Avatar',
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div class="avatar-list">
    <img
      src="https://picsum.photos/200"
      class="avatar ${args.class}"
      alt="Avatar Image 1"
    />
    <img
      src="https://picsum.photos/200"
      class="avatar ${args.class}"
      alt="Avatar Image 2"
    />
    <img
      src="https://picsum.photos/200"
      class="avatar ${args.class}"
      alt="Avatar Image 3"
    />
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const Small = Template.bind({})
Small.args = { class: 'avatar-s' }

export const Large = Template.bind({})
Large.args = { class: 'avatar-l' }
