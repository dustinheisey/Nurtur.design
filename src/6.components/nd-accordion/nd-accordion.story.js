import { html } from 'lit'
import './nd-accordion.js'

export default {
  title: 'Components/Accordion',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <nd-accordion>
    <span slot="summary">${args.summary}</span>
    <div slot="content">${args.content}</div>
  </nd-accordion>
`

export const Default = Template.bind({})
Default.args = {
  summary: 'Accordion Summary',
  content:
    'This is the accordion content. It is revealed when the accordion is opened.',
}
