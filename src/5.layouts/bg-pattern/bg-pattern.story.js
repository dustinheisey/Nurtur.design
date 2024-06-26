import { html } from 'lit'
import './bg-pattern.css'

export default {
  title: 'Layouts/Background Pattern',
}

const Template = () => html`
  <div
    class="bg-pattern pattern-waves"
    style="width: 300px; height: 300px;"
  ></div>
`

export const Default = Template.bind({})
Default.args = {}
