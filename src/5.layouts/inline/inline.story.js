import { html } from 'lit'
import './inline.css'

export default {
  title: 'Layouts/Inline',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div class="inline ${args.class}" style="--gap: 10px;">
    <div style="background-color: lightgray; padding: 20px;">Item 1</div>
    <div style="background-color: lightgray; padding: 20px;">Item 2</div>
    <div style="background-color: lightgray; padding: 20px;">Item 3</div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const InlineHeader = Template.bind({})
InlineHeader.args = { class: 'inline-header' }

export const InlineStart = Template.bind({})
InlineStart.args = { class: 'inline-start' }

export const InlineEnd = Template.bind({})
InlineEnd.args = { class: 'inline-end' }

export const InlineCenter = Template.bind({})
InlineCenter.args = { class: 'inline-center' }

export const InlineBaseline = Template.bind({})
InlineBaseline.args = { class: 'inline-baseline' }
