import { html } from 'lit'
import './bg-gradient.css'

export default {
  title: 'Layouts/Background Gradient',
}

const Template = () => html`
  <div class="bg-gradient" style="width: 300px; height: 300px;">
    Content goes here
  </div>
`

export const Default = Template.bind({})
Default.args = {}
