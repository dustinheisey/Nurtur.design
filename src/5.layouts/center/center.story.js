import { html } from 'lit'
import './center.css'

export default {
  title: 'Layouts/Center',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div
    class="${args.class}"
    style="width: 200px; height: 100px; background-color: lightgray;"
  >
    Centered Content
  </div>
`

export const Center = Template.bind({})
Center.args = { class: 'center' }

export const CenterVertical = Template.bind({})
CenterVertical.args = { class: 'center-vertical' }

export const CenterHorizontal = Template.bind({})
CenterHorizontal.args = { class: 'center-horizontal' }

export const CenterIntrinsic = Template.bind({})
CenterIntrinsic.args = { class: 'center-intrinsic' }

export const CenterText = Template.bind({})
CenterText.args = { class: 'center-text' }

export const Auto = Template.bind({})
Auto.args = { class: 'auto' }

export const Start = Template.bind({})
Start.args = { class: 'start' }

export const End = Template.bind({})
End.args = { class: 'end' }
