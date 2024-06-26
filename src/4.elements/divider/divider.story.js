import { html } from 'lit'
import './divider.css'

export default {
  title: 'Elements/Divider',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div>
    <p>Content above the divider</p>
    <hr class="${args.class}" />
    <p>Content below the divider</p>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const Outline = Template.bind({})
Outline.args = { class: 'outline' }

const DetailsTemplate = (args) => html`
  <div>
    <details>
      <summary>Toggle me</summary>
      <p>Details content</p>
    </details>
    <hr class="${args.class}" />
    <p>Content below the details and divider</p>
  </div>
`

export const Details = DetailsTemplate.bind({})
Details.args = { class: '' }

export const DetailsOutline = DetailsTemplate.bind({})
DetailsOutline.args = { class: 'outline' }
