import { html } from 'lit'
import './bg-img.css'

export default {
  title: 'Layouts/Background Image',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = () => html`
  <div class="bg-img" style="width: 300px; height: 300px;">
    <img src="path-to-your-image.jpg" alt="Background Image" />
    <div class="filter">Content goes here</div>
  </div>
`

export const Default = Template.bind({})
Default.args = {}
