import { html } from 'lit'
import './button.css'

export default {
  title: 'Elements/Button',
  parameters: {
    status: {
      type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <button class="btn ${args.class}">${args.text}</button>
`

export const Default = Template.bind({})
Default.args = { class: '', text: 'Default Button' }

export const Secondary = Template.bind({})
Secondary.args = { class: 'btn-secondary', text: 'Secondary Button' }

export const Tertiary = Template.bind({})
Tertiary.args = { class: 'btn-tertiary', text: 'Tertiary Button' }

export const Small = Template.bind({})
Small.args = { class: 'btn-s', text: 'Small Button' }

export const Large = Template.bind({})
Large.args = { class: 'btn-l', text: 'Large Button' }

export const Circular = Template.bind({})
Circular.args = { class: 'btn-circular', text: 'C' }

export const CircularSmall = Template.bind({})
CircularSmall.args = { class: 'btn-circular btn-s', text: 'S' }

export const CircularLarge = Template.bind({})
CircularLarge.args = { class: 'btn-circular btn-l', text: 'L' }
