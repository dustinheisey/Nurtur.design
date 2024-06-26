import { html } from 'lit'
import './reel.css'

export default {
  title: 'Layouts/Reel',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div
    class="reel ${args.class}"
    style="--color-primary: #007bff; --color-background: #f0f0f0;"
  >
    <div style="background-color: lightgray; padding: 20px; min-width: 150px;">
      Item 1
    </div>
    <div style="background-color: lightblue; padding: 20px; min-width: 150px;">
      Item 2
    </div>
    <div style="background-color: lightgreen; padding: 20px; min-width: 150px;">
      Item 3
    </div>
    <div style="background-color: lightcoral; padding: 20px; min-width: 150px;">
      Item 4
    </div>
    <div
      style="background-color: lightgoldenrodyellow; padding: 20px; min-width: 150px;"
    >
      Item 5
    </div>
    <div style="background-color: lightpink; padding: 20px; min-width: 150px;">
      Item 6
    </div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const JustifyCenter = Template.bind({})
JustifyCenter.args = { class: 'justify-center' }

export const NoBar = Template.bind({})
NoBar.args = { class: 'no-bar' }

export const Overflowing = Template.bind({})
Overflowing.args = { class: 'overflowing' }
