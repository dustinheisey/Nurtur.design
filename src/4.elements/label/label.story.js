import { html } from 'lit'
import './label.css'

export default {
  title: 'Elements/Label',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div>
    <label for="${args.id}" class="${args.class}">${args.text}</label>
    <input type="text" id="${args.id}" placeholder="${args.placeholder}" />
  </div>
`

export const Default = Template.bind({})
Default.args = {
  id: 'default-label',
  class: '',
  text: 'Default Label',
  placeholder: 'Enter text...',
}

export const Required = Template.bind({})
Required.args = {
  id: 'required-label',
  class: 'required',
  text: 'Required Label',
  placeholder: 'Enter text...',
}
